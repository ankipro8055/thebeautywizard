const express = require('express');
const path = require('path');
const cors = require('cors');
const nodemailer = require('nodemailer');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 8080;

// Enable CORS and JSON parsing
app.use(cors());
app.use(express.json());

// Serve static website files from the current directory
app.use(express.static(path.join(__dirname)));
app.use('/assets', express.static(path.join(__dirname, 'assets')));

// Default route to serve index.html
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Expose background booking dispatch API
app.post('/api/book', async (req, res) => {
    try {
        const { name, phone, service, stylist, date, time, notes } = req.body;

        if (!name || !phone || !service || !date || !time) {
            return res.status(400).json({ 
                success: false, 
                message: "Missing required booking details (name, phone, service, date, time)." 
            });
        }

        console.log(`[Booking Request Received] Name: ${name}, Phone: ${phone}, Service: ${service}`);

        // Compile Booking Details Text
        const summaryText = `New Appointment Booking Details:
- Name: ${name}
- Phone: ${phone}
- Service: ${service}
- Stylist: ${stylist || 'Any Specialist'}
- Date: ${date}
- Time: ${time}
- Special Notes: ${notes || 'None'}`;

        const results = { email: false, sms: false };

        // 1. DISPATCH BACKGROUND EMAIL (Nodemailer)
        // Checks if credentials are provided in the environment variables
        const smtpUser = process.env.SMTP_USER;
        const smtpPass = process.env.SMTP_PASS;
        const targetEmail = process.env.RECEIVER_EMAIL || 'thebeautywizardsalon@gmail.com';

        if (smtpUser && smtpPass) {
            try {
                const transporter = nodemailer.createTransport({
                    host: process.env.SMTP_HOST || 'smtp.gmail.com',
                    port: parseInt(process.env.SMTP_PORT || '465'),
                    secure: process.env.SMTP_SECURE !== 'false', // Default to SSL/TLS (port 465)
                    auth: {
                        user: smtpUser,
                        pass: smtpPass
                    }
                });

                const mailOptions = {
                    from: `"The Beauty Wizard Salon" <${smtpUser}>`,
                    to: targetEmail,
                    subject: `✨ New Salon Booking - ${name}`,
                    text: `Hello,\n\nA new salon booking has been scheduled!\n\n${summaryText}\n\nHave a magical day!\nThe Beauty Wizard Salon`,
                    html: `
                        <div style="font-family: Arial, sans-serif; max-width: 600px; border: 1px solid #d4af37; padding: 25px; border-radius: 16px; background-color: #fcf8f5;">
                            <h2 style="color: #e91e63; text-align: center; border-bottom: 2px solid #d4af37; padding-bottom: 10px;">✨ New Appointment Booking ✨</h2>
                            <p style="font-size: 1.1rem; color: #333;">A new luxury appointment has been booked:</p>
                            <table style="width: 100%; border-collapse: collapse; margin-top: 15px;">
                                <tr><td style="padding: 8px; font-weight: bold; color: #3b5b2e;">Name:</td><td style="padding: 8px; color: #333;">${name}</td></tr>
                                <tr><td style="padding: 8px; font-weight: bold; color: #3b5b2e;">Phone:</td><td style="padding: 8px; color: #333;">${phone}</td></tr>
                                <tr><td style="padding: 8px; font-weight: bold; color: #3b5b2e;">Service:</td><td style="padding: 8px; color: #333;">${service}</td></tr>
                                <tr><td style="padding: 8px; font-weight: bold; color: #3b5b2e;">Stylist:</td><td style="padding: 8px; color: #333;">${stylist || 'Any Specialist'}</td></tr>
                                <tr><td style="padding: 8px; font-weight: bold; color: #3b5b2e;">Date & Time:</td><td style="padding: 8px; color: #333;">${date} at ${time}</td></tr>
                                <tr><td style="padding: 8px; font-weight: bold; color: #3b5b2e;">Notes:</td><td style="padding: 8px; color: #333; font-style: italic;">${notes || 'None'}</td></tr>
                            </table>
                            <div style="text-align: center; margin-top: 25px; font-size: 0.85rem; color: #666;">
                                &copy; 2026 The Beauty Wizard Salon | Patna
                            </div>
                        </div>
                    `
                };

                await transporter.sendMail(mailOptions);
                console.log(`[Email Dispatch Success] Sent booking summary to ${targetEmail}`);
                results.email = true;
            } catch (err) {
                console.error("[Email Dispatch Error]", err);
            }
        } else {
            console.warn("[Email Dispatch Bypassed] SMTP_USER and SMTP_PASS environment variables are not set.");
        }

        // 2. DISPATCH BACKGROUND MOBILE SMS (Twilio)
        // Checks if Twilio keys are configured in environment variables
        const twilioSid = process.env.TWILIO_ACCOUNT_SID;
        const twilioToken = process.env.TWILIO_AUTH_TOKEN;
        const twilioFrom = process.env.TWILIO_FROM_NUMBER;
        const targetMobile = process.env.RECEIVER_MOBILE || '+917250794627'; // Default target phone

        if (twilioSid && twilioToken && twilioFrom) {
            try {
                const twilio = require('twilio');
                const client = new twilio(twilioSid, twilioToken);

                await client.messages.create({
                    body: `✨ New Salon Booking!\n\n${summaryText}`,
                    to: targetMobile,
                    from: twilioFrom
                });

                console.log(`[SMS Dispatch Success] Sent background booking alert to ${targetMobile}`);
                results.sms = true;
            } catch (err) {
                console.error("[SMS Dispatch Error]", err);
            }
        } else {
            console.warn("[SMS Dispatch Bypassed] Twilio environment variables are not configured.");
        }

        // Return unified response
        res.status(200).json({
            success: true,
            message: "Booking received successfully in the background.",
            dispatched: results
        });

    } catch (err) {
        console.error("[Server Error]", err);
        res.status(500).json({ 
            success: false, 
            message: "An internal server error occurred while processing your booking." 
        });
    }
});

// Start Express Server
app.listen(PORT, () => {
    console.log(`=========================================`);
    console.log(`THE BEAUTY WIZARD SALON & SPA`);
    console.log(`Background Application Server is Running`);
    console.log(`Port: ${PORT}`);
    console.log(`=========================================`);
});
