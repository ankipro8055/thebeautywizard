/* 
  =========================================
  THE BEAUTY WIZARD SALON & SPA
  Premium Interactive Application Engine
  =========================================
*/

document.addEventListener("DOMContentLoaded", () => {
  
  // =======================================
  // 1. GLOBAL DATABASE: PREMIUM SERVICES
  // =======================================
  const SERVICES_DATABASE = [
    // 1. HAIR SERVICES
    {
      id: "hair-cut",
      title: "Premium Hair Cut & Styling",
      category: "hair",
      price: 800,
      duration: 45,
      icon: "fa-scissors",
      description: "Personalized styling haircut, wash, blow-dry, and professional setting by our master hair stylists."
    },
    {
      id: "hair-spa",
      title: "L'Oreal Nourishing Hair Spa",
      category: "hair",
      price: 1800,
      duration: 60,
      icon: "fa-hand-holding-droplet",
      description: "Intense deep-conditioning treatment to restore scalp health, reduce frizz, and give premium hair shine."
    },
    {
      id: "global-coloring",
      title: "Global Hair Coloring",
      category: "hair",
      price: 4000,
      duration: 120,
      icon: "fa-palette",
      description: "Full head rich global hair coloration with premium ammonia-free professional colors for radiant shade selection."
    },
    {
      id: "keratin-treatment",
      title: "Keratin Smooth Treatment",
      category: "hair",
      price: 5000,
      duration: 150,
      icon: "fa-wand-magic-sparkles",
      description: "Premium protein-infused keratin reconstruction for ultimate frizz control, silky texture, and long-term hair smoothness."
    },
    {
      id: "hair-straightening",
      title: "Hair Smoothening & Straightening",
      category: "hair",
      price: 6000,
      duration: 180,
      icon: "fa-bezier-curve",
      description: "Intense cellular bond reconstruction for sleek, perfectly straight, and high-gloss hair styling."
    },

    // 2. MASSAGE & SPA SERVICES (Head and Foot Massage moved to top position)
    {
      id: "head-massage",
      title: "Head Massage",
      category: "massage",
      price: 500,
      duration: 30,
      icon: "fa-crown",
      description: "Traditional deeply relaxing head, neck, and shoulder massage using warm nourishing premium herbal hair oils."
    },
    {
      id: "foot-massage",
      title: "Foot Massage",
      category: "massage",
      price: 600,
      duration: 30,
      icon: "fa-shoe-prints",
      description: "Rejuvenating reflexology foot massage targeting specific nerve points to release fatigue and restore vital energy."
    },
    {
      id: "dry-massage",
      title: "Dry Massage",
      category: "massage",
      price: 1299,
      duration: 30,
      icon: "fa-spa",
      description: "Specialized dry acupressure massage to relieve muscle tension, improve circulation, and enhance flexibility without oils."
    },
    {
      id: "basic-massage",
      title: "Basic Massage",
      category: "massage",
      price: 999,
      duration: 30,
      icon: "fa-hand-sparkles",
      description: "Soothing light-to-medium pressure massage designed to ease daily fatigue and restore overall bodily energy."
    },
    {
      id: "oil-massage",
      title: "Oil Massage",
      category: "massage",
      price: 2500,
      duration: 60,
      icon: "fa-hand-holding-droplet",
      description: "Nourishing full body massage with premium botanical oils to melt stress, hydrate skin, and soothe muscles."
    },
    {
      id: "cream-massage",
      title: "Cream Massage",
      category: "massage",
      price: 3000,
      duration: 60,
      icon: "fa-spa",
      description: "Luxurious deep hydration body massage using rich botanical creams for soft skin and deep muscle relaxation."
    },
    {
      id: "deep-tissue-oil",
      title: "Deep Tissue Oil",
      category: "massage",
      price: 3000,
      duration: 60,
      icon: "fa-droplet",
      description: "Intense therapeutic oil massage targeting chronic muscle tightness, deep tissue layers, and tension release."
    },
    {
      id: "deep-tissue-cream",
      title: "Deep Tissue Cream",
      category: "massage",
      price: 3500,
      duration: 60,
      icon: "fa-wind",
      description: "Deep muscle recovery massage combining firm therapeutic pressure and intensive nourishing skin creams."
    },
    {
      id: "jacuzzi-massage",
      title: "Jacuzzi Massage",
      category: "massage",
      price: 4000,
      duration: 90,
      icon: "fa-bath",
      description: "Premium hydrothermal therapy combining 60 Min spa massage and blissful 30 Min water jet bath (90 Min hand-corrected)."
    },
    {
      id: "swedish-massage",
      title: "Swedish Massage",
      category: "massage",
      price: 3000,
      duration: 60,
      icon: "fa-leaf",
      description: "Classic European long gliding strokes designed to increase circulation, ease stiff joints, and promote deep sleep."
    },
    {
      id: "body-polishing",
      title: "Body Polishing",
      category: "massage",
      price: 5500,
      duration: 90,
      icon: "fa-hand-sparkles",
      description: "Complete full body skin exfoliation, tan removal, and radiant brightening hydration ritual (90 Min hand-corrected)."
    },
    {
      id: "body-scrub",
      title: "Body Scrub",
      category: "massage",
      price: 5000,
      duration: 60,
      icon: "fa-soap",
      description: "Therapeutic herbal salt scrub to remove dead cells, stimulate circulation, and reveal silky-smooth skin (60 Min hand-corrected)."
    },
    {
      id: "aroma-massage",
      title: "Aroma Massage",
      category: "massage",
      price: 2800,
      duration: 60,
      icon: "fa-seedling",
      description: "Sensory custom aromatherapy treatment utilizing essential extracts to balance your body and mind (60 Min hand-corrected)."
    },
    {
      id: "four-hand-massage",
      title: "Four Hand Massage",
      category: "massage",
      price: 4000,
      duration: 60,
      icon: "fa-hands",
      description: "Synchronized dual-therapist massage offering double the relaxation and perfect physical harmony (60 Min hand-corrected)."
    },
    {
      id: "hot-oil-massage",
      title: "Hot Oil Massage",
      category: "massage",
      price: 3000,
      duration: 60,
      icon: "fa-fire",
      description: "Deeply penetrating heated oil massage designed to boost blood circulation and soothe aching joints (60 Min hand-corrected)."
    },
    {
      id: "hammam-massage",
      title: "Hammam Massage",
      category: "massage",
      price: 5000,
      duration: 90,
      icon: "fa-cloud-showers-water",
      description: "Traditional Middle Eastern steam bath, exfoliating loofah scrub, and pure olive-soap bubble wash (90 Min hand-corrected)."
    },
    
    // 3. BRIDAL MAKE-UP
    {
      id: "pre-bridal-pack",
      title: "Pre-Bridal Package",
      category: "makeup",
      price: 14999,
      duration: 360,
      icon: "fa-crown",
      description: "Complete pre-wedding grooming: Diamond Facial, D-Tan Face, Full-Body Polishing, Full Body Wax, Manicure, Pedicure, Full Face, Hair Cut, and Hair-Spa."
    },
    {
      id: "luxury-pre-bridal-pack",
      title: "Luxury Pre-Bridal Package",
      category: "makeup",
      price: 19999,
      duration: 420,
      icon: "fa-gem",
      description: "Ultimate luxury pre-wedding ritual: Luxury Facial, D-Tan Face, D-Tan Full Body, Full-Body Polishing, Full Body Wax, Luxury Manicure, Luxury Pedicure, Full Face (Katory Wax), Advance Hair Cut, and Keratin Hair-Spa."
    },
    {
      id: "basic-bridal-makeup",
      title: "Basic Bridal Make-up",
      category: "makeup",
      price: 12000,
      duration: 180,
      icon: "fa-ring",
      description: "Exquisite traditional bridal makeover featuring high-quality color styling, standard lashes, and hair set."
    },
    {
      id: "hd-bridal-makeup",
      title: "HD Bridal Make-up",
      category: "makeup",
      price: 15000,
      duration: 240,
      icon: "fa-gem",
      description: "Flawless camera-ready High-Definition makeup base, premium contouring, luxury lashes, and elegant bridal draping."
    },
    {
      id: "air-brush-makeup",
      title: "Air Brush Make-up",
      category: "makeup",
      price: 18000,
      duration: 240,
      icon: "fa-spray-can",
      description: "Premium fine-mist airbrush application for a super lightweight, transfer-proof, and flawless bridal complexion."
    },
    {
      id: "hd-air-brush-makeup",
      title: "HD Air Brush Make-up",
      category: "makeup",
      price: 20000,
      duration: 240,
      icon: "fa-wand-magic-sparkles",
      description: "The absolute gold standard of bridal beauty combining HD precision and lightweight Airbrush longevity."
    },
    {
      id: "3d-makeup",
      title: "3D Make-up",
      category: "makeup",
      price: 18000,
      duration: 240,
      icon: "fa-heart",
      description: "Dimensional makeup techniques highlighting natural facial architecture for stunning high-fashion photography."
    },

    // 4. THREADING SERVICES
    {
      id: "eye-brows",
      title: "Eye Brows",
      category: "threading",
      price: 60,
      duration: 15,
      icon: "fa-scissors",
      description: "Precision thread shaping to define your eyebrows and frame your eyes beautifully."
    },
    {
      id: "upper-lip",
      title: "Upper Lip",
      category: "threading",
      price: 60,
      duration: 10,
      icon: "fa-face-smile",
      description: "Quick and delicate thread hair removal for a clean and perfectly smooth upper lip contour."
    },
    {
      id: "fore-head",
      title: "Fore Head",
      category: "threading",
      price: 60,
      duration: 15,
      icon: "fa-user",
      description: "Clean brow-line and forehead threading to sweep away fine vellus hair."
    },
    {
      id: "full-face",
      title: "Full Face",
      category: "threading",
      price: 150,
      duration: 30,
      icon: "fa-user-tie",
      description: "Total facial thread contouring including eyebrows, upper lip, chin, and forehead for maximum smoothness."
    },

    // 5. DE TAN-UP SERVICES
    {
      id: "basic-cleanup",
      title: "Basic Clean-up",
      category: "detan",
      price: 1200,
      duration: 45,
      icon: "fa-soap",
      description: "Essential skin refresh involving pore deep-cleansing, mild exfoliation, and a hydrating face pack."
    },
    {
      id: "lotus-cleanup",
      title: "Lotus Clean-up",
      category: "detan",
      price: 1500,
      duration: 60,
      icon: "fa-spa",
      description: "Premium botanical clean-up utilizing organic Lotus extracts to soothe skin, refine pores, and lift dullness."
    },
    {
      id: "dtan-cleanup",
      title: "D-Tan Clean-up",
      category: "detan",
      price: 1900,
      duration: 60,
      icon: "fa-sun",
      description: "High-efficacy tan removal facial using advanced botanical peel formulas to correct uneven skin tones."
    },
    {
      id: "whitening-03-cleanup",
      title: "Whitening O3 Clean-up",
      category: "detan",
      price: 2200,
      duration: 60,
      icon: "fa-wand-magic-sparkles",
      description: "Professional O3+ deep oxygenating treatment for instant skin tone correction, hyperpigmentation relief, and brilliant glow."
    },

    // 6. MANICURE & PEDICURE
    {
      id: "basic-manicure",
      title: "Basic Manicure",
      category: "manipedi",
      price: 1100,
      duration: 45,
      icon: "fa-hands",
      description: "Nail shaping, cuticle grooming, nourishing hand massage, and professional standard nail polish."
    },
    {
      id: "basic-pedicure",
      title: "Basic Pedicure",
      category: "manipedi",
      price: 1300,
      duration: 60,
      icon: "fa-shoe-prints",
      description: "Relaxing foot soak, cuticle clean-up, heel scrubbing, smoothing exfoliation, and a refreshing massage."
    },
    {
      id: "luxury-manicure",
      title: "Luxury Manicure",
      category: "manipedi",
      price: 1700,
      duration: 60,
      icon: "fa-gem",
      description: "Indulgent hand retreat featuring hydrating mask wraps, heated towel therapy, and an extended relaxing massage."
    }
  ];

  // =======================================
  // 2. CUSTOM MAGICAL CURSOR Trail Engine
  // =======================================
  const cursor = document.getElementById("customCursor");
  const cursorGlow = document.getElementById("customCursorGlow");

  if (cursor && cursorGlow) {
    document.addEventListener("mousemove", (e) => {
      cursor.style.left = `${e.clientX}px`;
      cursor.style.top = `${e.clientY}px`;

      // Add a slight lag effect to the outer glow card using requestAnimationFrame or transition
      cursorGlow.style.left = `${e.clientX}px`;
      cursorGlow.style.top = `${e.clientY}px`;

      // Sparkle creation logic based on probability
      if (Math.random() < 0.18) {
        createSparkle(e.clientX, e.clientY);
      }
    });

    // Make cursor expand on interactive items
    const interactives = document.querySelectorAll("a, button, .quiz-option, .builder-service-card, select, input, textarea");
    interactives.forEach((item) => {
      item.addEventListener("mouseenter", () => {
        cursor.style.transform = "translate(-50%, -50%) scale(1.8)";
        cursor.style.backgroundColor = "var(--mint-green)";
        cursor.style.boxShadow = "0 0 15px var(--mint-green)";
        cursorGlow.style.transform = "translate(-50%, -50%) scale(1.4)";
        cursorGlow.style.borderColor = "var(--primary-pink)";
        cursorGlow.style.boxShadow = "0 0 25px var(--primary-pink-glow)";
      });
      item.addEventListener("mouseleave", () => {
        cursor.style.transform = "translate(-50%, -50%) scale(1)";
        cursor.style.backgroundColor = "var(--primary-pink)";
        cursor.style.boxShadow = "0 0 10px var(--primary-pink)";
        cursorGlow.style.transform = "translate(-50%, -50%) scale(1)";
        cursorGlow.style.borderColor = "var(--mint-green)";
        cursorGlow.style.boxShadow = "0 0 15px var(--mint-glow)";
      });
    });
  }

  function createSparkle(x, y) {
    const trail = document.createElement("div");
    trail.className = "sparkle-trail";
    
    // Set random offset coordinates
    const offsetX = (Math.random() - 0.5) * 20;
    const offsetY = (Math.random() - 0.5) * 20;
    
    trail.style.left = `${window.scrollX + x + offsetX}px`;
    trail.style.top = `${window.scrollY + y + offsetY}px`;
    
    // Alternate sparkle color
    const colors = ["var(--mint-green)", "var(--primary-pink)", "#FFF", "hsl(330, 95%, 65%)"];
    trail.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
    
    // Add to body
    document.body.appendChild(trail);
    
    // Cleanup
    setTimeout(() => {
      trail.remove();
    }, 800);
  }

  // =======================================
  // 3. HEADER SCROLL INTERACTION
  // =======================================
  const header = document.getElementById("mainHeader");
  let isScrolling = false;
  
  window.addEventListener("scroll", () => {
    if (!isScrolling) {
      window.requestAnimationFrame(() => {
        if (window.scrollY > 50) {
          header.classList.add("scrolled");
        } else {
          header.classList.remove("scrolled");
        }
        isScrolling = false;
      });
      isScrolling = true;
    }
  });

  // Mobile navigation toggle
  const mobileToggle = document.getElementById("mobileMenuToggle");
  const mainNav = document.getElementById("mainNav");
  
  if (mobileToggle && mainNav) {
    mobileToggle.addEventListener("click", () => {
      mobileToggle.classList.toggle("active");
      mainNav.classList.toggle("active");
    });
    
    // Close mobile menu on clicking any link that targets a section inside the drawer
    const menuLinks = mainNav.querySelectorAll("a");
    menuLinks.forEach(link => {
      link.addEventListener("click", () => {
        const href = link.getAttribute("href");
        if (href && href.startsWith("#")) {
          mobileToggle.classList.remove("active");
          mainNav.classList.remove("active");
        }
      });
    });
  }

  // Handle Hair Services nav link click and automatically select 'hair' services tab
  const navHairServices = document.getElementById("navHairServices");
  if (navHairServices) {
    navHairServices.addEventListener("click", (e) => {
      const hairTab = document.querySelector('.tab-btn[data-category="hair"]');
      if (hairTab) {
        hairTab.click();
      }
    });
  }

  // =======================================
  // 4. DYNAMIC SERVICES GRID POPULATION & FILTER
  // =======================================
  const servicesGrid = document.getElementById("servicesGrid");
  const servicesTabs = document.getElementById("servicesTabs");

  const CATEGORY_SHOWCASE_DATA = {
    "all": {
      badge: "The Beauty Wizard Salon",
      title: "Patna's Regal Sanctuary of Wellness & Styling",
      desc: "Step into an upscale unisex sanctuary in Saguna More, Patna, designed specifically for premium therapeutic massages, professional hair styling recovery, advanced skin care cleanups, and elegant bridal makeovers. Let our master specialists custom-tailor your wellness journey in our regal chambers.",
      image: "assets/IMG_0484.JPG",
      alt: "The Beauty wizard salon premium salon interior with arched vanity mirrors and luxury rose-gold chairs"
    },
    "hair": {
      badge: "Hairstyling Mastery",
      title: "Locks Sculpting & Radiant Coloring",
      desc: "From signature cuts to deep L'Oreal nourishing spas and high-gloss Keratin smooth treatments, our hair wizards custom-design each treatment for your hair structure. Indulge in damage-free ammonia-free coloring, glowing sunset ombre balayage, and sleek straightening techniques that leave your locks looking majestic.",
      image: "assets/IMG_0541.JPG",
      alt: "Radiant sunset ombre balayage coloring close up with premium hair shine"
    },
    "massage": {
      badge: "Wellness Sanctuary",
      title: "Holistic Massages & Royal Steam Baths",
      desc: "Step into a candlelit oasis of absolute tranquility. We combine traditional deeply relaxing head and foot massage reflexology with full body herbal oil therapies, deep tissue creams, and custom sensory aromatherapy. Experience Patna's premium Hammam steam exfoliating baths to restore vital energy and wash away fatigue.",
      image: "assets/IMG_0538.JPG",
      alt: "Soothing and relaxing premium aromatherapy massage therapy session close up"
    },
    "makeup": {
      badge: "Regal Celebrations",
      title: "Exquisite Bridal Makeover Artistry",
      desc: "Look camera-ready and breathtakingly flawless for your landmark wedding day or milestone party. Our bridal artists specialize in high-definition precision contouring, premium lashes, traditional draping, and transfer-proof ultra-lightweight airbrush makeup that guarantees a stunning 3D glow from dawn to midnight.",
      image: "assets/IMG_0522.JPG",
      alt: "Breathtaking royal Indian bridal makeup makeover with airbrush cosmetics"
    },
    "threading": {
      badge: "Precision Aesthetics",
      title: "Facial Thread Sculpting & Symmetry",
      desc: "Frame your face with precise eyebrow shaping, upper lip cleanup, forehead sweep-away, and full facial contouring. Our aesthetic technicians use high-grade sanitization and gentle precision threading to deliver perfectly smooth, clean-cut symmetry with absolute comfort.",
      image: "assets/IMG_0506.JPG",
      alt: "Facial beauty skincare session with premium aesthetic styling"
    },
    "detan": {
      badge: "Complexion Glow",
      title: "Tan-Up Peel Restoration & O3+ Skincare",
      desc: "Correct uneven skin tones, environmental pollution damage, and tough tanning. We use organic botanical Lotus extract cleanups, advanced high-potency D-Tan peels, and premium professional O3+ deep oxygenating treatments to restore cellular hydration, vacuum pores, and deliver instant bright complexion glow.",
      image: "assets/IMG_0535.JPG",
      alt: "Skincare professional clean up facial treatment for glowing skin"
    },
    "manipedi": {
      badge: "Luxury Mani & Pedi",
      title: "Organic Pedicure Soaks & Nail Glam",
      desc: "Pamper your hands and feet. Indulge in an organic rose-petal warm foot soak, dead-skin exfoliating scrubbing, cuticle grooming, extended relaxing massage wraps, and premium nail shaping. Choose from luxury manicures or rose petal pedicures for ultimate hydration and soft touch.",
      image: "assets/IMG_0490.JPG",
      alt: "Organic rose petal pedicure foot soak spa treatment with botanical oils"
    }
  };

  function renderServices(categoryFilter = "all") {
    if (!servicesGrid) return;
    servicesGrid.innerHTML = "";

    const showcaseContainer = document.getElementById("servicesCategoryShowcase");
    if (showcaseContainer) {
      if (!CATEGORY_SHOWCASE_DATA[categoryFilter]) {
        showcaseContainer.style.display = "none";
      } else {
        const data = CATEGORY_SHOWCASE_DATA[categoryFilter];
        showcaseContainer.innerHTML = `
          <div class="showcase-content">
            <span class="showcase-badge"><i class="fa-solid fa-sparkles"></i> ${data.badge}</span>
            <h3 class="showcase-title">${data.title}</h3>
            <p class="showcase-desc">${data.desc}</p>
          </div>
        `;
        showcaseContainer.style.display = "block";
      }
    }

    const filteredServices = categoryFilter === "all" 
      ? SERVICES_DATABASE 
      : SERVICES_DATABASE.filter(s => s.category === categoryFilter);

    filteredServices.forEach((service) => {
      const card = document.createElement("div");
      card.className = "service-card glass-panel";
      card.setAttribute("data-id", service.id);
      
      card.innerHTML = `
        <div class="service-icon-wrapper">
          <i class="fa-solid ${service.icon}"></i>
        </div>
        <h3>${service.title}</h3>
        <p class="service-desc">${service.description}</p>
        <div class="service-meta">
          <span class="service-price">₹${service.price.toLocaleString("en-IN")}</span>
          <span class="service-duration">
            <i class="fa-regular fa-clock"></i> ${service.duration} mins
          </span>
          <button class="service-add-btn" data-id="${service.id}" title="Add to Custom Package">
            <i class="fa-solid fa-plus"></i>
          </button>
        </div>
      `;
      servicesGrid.appendChild(card);
    });

    // Hook add-to-package buttons
    const addBtns = servicesGrid.querySelectorAll(".service-add-btn");
    addBtns.forEach(btn => {
      btn.addEventListener("click", (e) => {
        e.stopPropagation();
        const id = btn.getAttribute("data-id");
        toggleServiceSelectionInBuilder(id, true);
        
        // Scroll smoothly to package builder section
        document.getElementById("builder").scrollIntoView({ behavior: "smooth" });
      });
    });
  }

  // Filter Tabs Event Listeners
  if (servicesTabs) {
    const tabButtons = servicesTabs.querySelectorAll(".tab-btn");
    tabButtons.forEach(btn => {
      btn.addEventListener("click", () => {
        tabButtons.forEach(b => b.classList.remove("active"));
        btn.classList.add("active");
        
        const category = btn.getAttribute("data-category");
        renderServices(category);
      });
    });
  }

  // Render initial services grid
  renderServices("all");


  // =======================================
  // 5. INTERACTIVE BEAUTY CONSULTATION QUIZ
  // =======================================
  const quizSteps = document.querySelectorAll(".quiz-step");
  const quizProgressBar = document.getElementById("quizProgressBar");
  const quizPrevBtn = document.getElementById("quizPrevBtn");
  const quizNextBtn = document.getElementById("quizNextBtn");
  const quizCard = document.getElementById("quizCard");
  const quizResultStep = document.getElementById("quizResultStep");
  const quizPackageName = document.getElementById("quizPackageName");
  const quizPackagePrice = document.getElementById("quizPackagePrice");
  const quizResultDescription = document.getElementById("quizResultDescription");
  const quizRestartBtn = document.getElementById("quizRestartBtn");
  const quizBookRecommendedBtn = document.getElementById("quizBookRecommendedBtn");

  let currentStepIndex = 0;
  let quizAnswers = {};

  const quizRecommendations = {
    "hair-transformation": {
      name: "Premium Keratin Smooth & Hair Spa Ritual",
      price: "₹6,800",
      desc: "The ultimate hair rejuvenation and transformation package! Combines our signature Keratin Smooth Treatment and L'Oreal Deep Nourishing Hair Spa for exceptionally smooth, healthy, frizz-free, and high-gloss hair.",
      serviceId: "keratin-treatment"
    },
    "skin-glow": {
      name: "O3+ Whitening & D-Tan Skin Spell",
      price: "₹2,200",
      desc: "For unparalleled facial illumination. Unites our high-potency D-Tan Clean-up and professional Whitening O3 Clean-up to deep-vacuum pores, remove tough tanning, and infuse oxygenated skin tone correction.",
      serviceId: "whitening-03-cleanup"
    },
    "bridal-makeover": {
      name: "The Royal HD Air Brush Bridal Dream",
      price: "₹20,000",
      desc: "The supreme choice for your landmark celebration. Includes our premium ultra-longevity HD Air Brush Bridal Make-up, elegant hairstyling, lashes, and drapery for flawless 3D camera-ready perfection.",
      serviceId: "hd-air-brush-makeup"
    },
    "holistic-detox": {
      name: "Traditional Hammam & Massage Wellness",
      price: "₹5,000",
      desc: "Indulge in absolute wellness and relaxation. Blends traditional Middle Eastern steam, intense loofah exfoliation, bubble wash, and deeply therapeutic body massage for ultimate chronic tension release.",
      serviceId: "hammam-massage"
    }
  };

  function updateQuizProgressBar() {
    if (!quizProgressBar) return;
    const progress = (currentStepIndex / (quizSteps.length - 2)) * 100;
    quizProgressBar.style.width = `${Math.min(progress, 100)}%`;
  }

  function showQuizStep(index) {
    quizSteps.forEach((step, idx) => {
      if (idx === index) {
        step.classList.add("active");
      } else {
        step.classList.remove("active");
      }
    });

    currentStepIndex = index;
    updateQuizProgressBar();

    // Check if result screen
    if (index === quizSteps.length - 1) {
      document.getElementById("quizNavBtns").style.display = "none";
      calculateQuizResult();
    } else {
      document.getElementById("quizNavBtns").style.display = "flex";
      quizPrevBtn.disabled = index === 0;
      
      // Disable Next button if current question is not answered
      const activeStep = quizSteps[index];
      const hasSelection = activeStep.querySelector(".quiz-option.selected") !== null;
      quizNextBtn.disabled = !hasSelection;
      
      if (!hasSelection) {
        quizNextBtn.innerText = "Select an option";
      } else {
        quizNextBtn.innerText = index === quizSteps.length - 2 ? "Reveal My Spell" : "Next Question";
      }
    }
  }

  function calculateQuizResult() {
    const focus = quizAnswers[1] || "skin-glow";
    const recommendation = quizRecommendations[focus] || quizRecommendations["skin-glow"];
    
    if (quizPackageName && quizPackagePrice && quizResultDescription) {
      quizPackageName.innerText = recommendation.name;
      quizPackagePrice.innerText = recommendation.price;
      quizResultDescription.innerText = recommendation.desc;
      quizBookRecommendedBtn.setAttribute("data-service-id", recommendation.serviceId);
    }
  }

  // Attach Quiz Option Click Event
  quizSteps.forEach((step, stepIdx) => {
    const options = step.querySelectorAll(".quiz-option");
    options.forEach(opt => {
      opt.addEventListener("click", () => {
        options.forEach(o => o.classList.remove("selected"));
        opt.classList.add("selected");
        
        const value = opt.getAttribute("data-value");
        quizAnswers[stepIdx + 1] = value;
        
        // Trigger micro-sparkles upon selection
        const rect = opt.getBoundingClientRect();
        createSparkle(rect.left + rect.width/2, rect.top + rect.height/2);

        // Auto transition questions or enable Next Button
        quizNextBtn.disabled = false;
        quizNextBtn.innerText = stepIdx === quizSteps.length - 2 ? "Reveal My Spell" : "Next Question";
      });
    });
  });

  if (quizNextBtn) {
    quizNextBtn.addEventListener("click", () => {
      if (currentStepIndex < quizSteps.length - 2) {
        showQuizStep(currentStepIndex + 1);
      } else if (currentStepIndex === quizSteps.length - 2) {
        showQuizStep(currentStepIndex + 1); // Goes to result
      }
    });
  }

  if (quizPrevBtn) {
    quizPrevBtn.addEventListener("click", () => {
      if (currentStepIndex > 0) {
        showQuizStep(currentStepIndex - 1);
      }
    });
  }

  if (quizRestartBtn) {
    quizRestartBtn.addEventListener("click", () => {
      // Clear answers & selections
      quizAnswers = {};
      const selections = quizCard.querySelectorAll(".quiz-option");
      selections.forEach(sel => sel.classList.remove("selected"));
      
      // Go to first step
      showQuizStep(0);
    });
  }

  if (quizBookRecommendedBtn) {
    quizBookRecommendedBtn.addEventListener("click", () => {
      const sId = quizBookRecommendedBtn.getAttribute("data-service-id");
      const serviceSelect = document.getElementById("bookingService");
      if (serviceSelect && sId) {
        serviceSelect.value = sId;
      }
      
      // Scroll smoothly to booking
      document.getElementById("booking").scrollIntoView({ behavior: "smooth" });
      
      // Animate booking form card to show capture attention
      const bookingCard = document.getElementById("bookingCard");
      bookingCard.style.borderColor = "var(--primary-pink)";
      bookingCard.style.boxShadow = "0 0 35px var(--primary-pink-glow)";
      setTimeout(() => {
        bookingCard.style.borderColor = "var(--glass-border)";
        bookingCard.style.boxShadow = "var(--glow-soft)";
      }, 1500);
    });
  }

  // Initialize Quiz at Step 0
  showQuizStep(0);


  // =======================================
  // 6. THE WIZARDRY CUSTOM PACKAGE BUILDER
  // =======================================
  const builderChecklist = document.getElementById("builderChecklist");
  const cartEmptyState = document.getElementById("cartEmptyState");
  const cartItemsList = document.getElementById("cartItemsList");
  const cartSummary = document.getElementById("cartSummary");
  const cartTotalDuration = document.getElementById("cartTotalDuration");
  const cartTotalPrice = document.getElementById("cartTotalPrice");
  const cartCheckoutBtn = document.getElementById("cartCheckoutBtn");

  let selectedBuilderServiceIds = new Set();

  function renderBuilderChecklist() {
    if (!builderChecklist) return;
    builderChecklist.innerHTML = "";

    SERVICES_DATABASE.forEach((service) => {
      const isSelected = selectedBuilderServiceIds.has(service.id);
      const card = document.createElement("div");
      card.className = `builder-service-card glass-panel ${isSelected ? "selected" : ""}`;
      card.setAttribute("data-id", service.id);

      card.innerHTML = `
        <div class="builder-service-left">
          <div class="builder-service-checkbox"></div>
          <div class="builder-service-info">
            <h4>${service.title}</h4>
            <p>${service.description}</p>
          </div>
        </div>
        <div class="builder-service-right">
          <span class="builder-service-price">₹${service.price.toLocaleString("en-IN")}</span>
          <span class="builder-service-duration">
            <i class="fa-regular fa-clock"></i> ${service.duration}m
          </span>
        </div>
      `;
      builderChecklist.appendChild(card);

      // Card selection click event
      card.addEventListener("click", () => {
        toggleServiceSelectionInBuilder(service.id);
      });
    });
  }

  function toggleServiceSelectionInBuilder(id, forceSelect = false) {
    if (forceSelect) {
      selectedBuilderServiceIds.add(id);
    } else {
      if (selectedBuilderServiceIds.has(id)) {
        selectedBuilderServiceIds.delete(id);
      } else {
        selectedBuilderServiceIds.add(id);
      }
    }

    renderBuilderChecklist();
    updateBuilderCart();
  }

  let activeDiscountPercent = 0;
  let activeDiscountSavings = 0;
  let activeFinalPrice = 0;
  let activeSubtotalPrice = 0;

  function updateBuilderCart() {
    const loyaltyMeter = document.getElementById("cartLoyaltyMeter");
    const subtotalRow = document.getElementById("cartSubtotalRow");
    const subtotalPriceField = document.getElementById("cartSubtotalPrice");
    const discountRow = document.getElementById("cartDiscountRow");
    const discountValueField = document.getElementById("cartDiscountValue");

    if (!cartItemsList || !cartEmptyState || !cartSummary || !cartCheckoutBtn) return;

    if (selectedBuilderServiceIds.size === 0) {
      cartEmptyState.style.display = "block";
      cartItemsList.style.display = "none";
      cartSummary.style.display = "none";
      cartCheckoutBtn.style.display = "none";
      if (loyaltyMeter) loyaltyMeter.style.display = "none";
      return;
    }

    cartEmptyState.style.display = "none";
    cartItemsList.style.display = "flex";
    cartSummary.style.display = "flex";
    cartCheckoutBtn.style.display = "block";
    if (loyaltyMeter) loyaltyMeter.style.display = "block";

    cartItemsList.innerHTML = "";
    let subtotalPrice = 0;
    let totalDuration = 0;

    selectedBuilderServiceIds.forEach(id => {
      const service = SERVICES_DATABASE.find(s => s.id === id);
      if (service) {
        subtotalPrice += service.price;
        totalDuration += service.duration;

        const cartItem = document.createElement("div");
        cartItem.className = "cart-item";
        cartItem.innerHTML = `
          <span class="cart-item-name">${service.title}</span>
          <span class="cart-item-price">₹${service.price.toLocaleString("en-IN")}</span>
        `;
        cartItemsList.appendChild(cartItem);
      }
    });

    // Compute Loyalty Discount percentage
    let discountPercent = 0;
    let tierName = "Consultation";
    let tierIcon = '<i class="fa-solid fa-sparkles"></i>';
    let progressWidth = 0;
    let motivator = "";

    const count = selectedBuilderServiceIds.size;
    if (count === 1) {
      discountPercent = 0;
      tierName = "Consultation";
      progressWidth = 10;
      motivator = "Select 1 more service to weave a <strong>Bronze Spell (10% Off)</strong>!";
    } else if (count === 2) {
      discountPercent = 10;
      tierName = "Bronze Spell";
      tierIcon = '<i class="fa-solid fa-award"></i>';
      progressWidth = 33.33;
      motivator = "Cast 1 more service to unlock the <strong>Silver Majesty Spell (15% Off)</strong>!";
    } else if (count === 3) {
      discountPercent = 15;
      tierName = "Silver Majesty";
      tierIcon = '<i class="fa-solid fa-crown" style="color: var(--rose-gold);"></i>';
      progressWidth = 66.66;
      motivator = "Add 1 more service for the ultimate <strong>Golden Wizardry Spell (20% Off)</strong>!";
    } else if (count >= 4) {
      discountPercent = 20;
      tierName = "Golden Wizardry";
      tierIcon = '<i class="fa-solid fa-wand-magic-sparkles" style="color: var(--rose-gold);"></i>';
      progressWidth = 100;
      motivator = "✨ <strong>Ultimate Golden Spell Cast!</strong> Maximum 20% discount is applied to your royal package!";
    }

    const discountSavings = Math.round(subtotalPrice * (discountPercent / 100));
    const finalPrice = subtotalPrice - discountSavings;

    activeDiscountPercent = discountPercent;
    activeDiscountSavings = discountSavings;
    activeFinalPrice = finalPrice;
    activeSubtotalPrice = subtotalPrice;

    // Update Progress Bar
    const progressFill = document.getElementById("loyaltyProgressFill");
    const tierBadge = document.getElementById("loyaltyTierBadge");
    const percentBadge = document.getElementById("loyaltyDiscountPercent");
    const motivatorText = document.getElementById("loyaltyMotivatorText");

    if (progressFill) progressFill.style.width = `${progressWidth}%`;
    if (tierBadge) tierBadge.innerHTML = `${tierIcon} ${tierName}`;
    if (percentBadge) percentBadge.innerText = `${discountPercent}% OFF`;
    if (motivatorText) motivatorText.innerHTML = motivator;

    // Toggle checkpoints active classes
    const cpBronze = document.querySelector(".cp-bronze");
    const cpSilver = document.querySelector(".cp-silver");
    const cpGold = document.querySelector(".cp-gold");

    if (cpBronze) cpBronze.classList.toggle("active", count >= 2);
    if (cpSilver) cpSilver.classList.toggle("active", count >= 3);
    if (cpGold) cpGold.classList.toggle("active", count >= 4);

    // Update Cart Pricing Rows
    if (discountPercent > 0) {
      if (subtotalRow) {
        subtotalRow.style.display = "flex";
        subtotalPriceField.innerText = `₹${subtotalPrice.toLocaleString("en-IN")}`;
      }
      if (discountRow) {
        discountRow.style.display = "flex";
        discountValueField.innerText = `-₹${discountSavings.toLocaleString("en-IN")} (${discountPercent}%)`;
      }
    } else {
      if (subtotalRow) subtotalRow.style.display = "none";
      if (discountRow) discountRow.style.display = "none";
    }

    cartTotalDuration.innerText = `${totalDuration} mins (${(totalDuration/60).toFixed(1)} hrs)`;
    cartTotalPrice.innerText = `₹${finalPrice.toLocaleString("en-IN")}`;
  }

  if (cartCheckoutBtn) {
    cartCheckoutBtn.addEventListener("click", () => {
      // Find the first service to auto-select in the booking form
      const firstId = Array.from(selectedBuilderServiceIds)[0];
      const serviceSelect = document.getElementById("bookingService");
      
      if (serviceSelect && firstId) {
        serviceSelect.value = firstId;
      }
      
      const notesField = document.getElementById("bookingNotes");
      if (notesField) {
        const selectedTitles = Array.from(selectedBuilderServiceIds)
          .map(id => SERVICES_DATABASE.find(s => s.id === id)?.title)
          .filter(Boolean);
        
        let notesText = `Custom Wizard Package requested including: ${selectedTitles.join(", ")}.`;
        if (activeDiscountPercent > 0) {
          notesText += ` (Subtotal: ₹${activeSubtotalPrice.toLocaleString("en-IN")}, Discount Applied: ${activeDiscountPercent}% Off, Saved: ₹${activeDiscountSavings.toLocaleString("en-IN")}, Final Package Price: ₹${activeFinalPrice.toLocaleString("en-IN")})`;
        }
        notesField.value = notesText;
      }

      // Scroll smoothly to booking
      document.getElementById("booking").scrollIntoView({ behavior: "smooth" });

      // Animate card
      const bookingCard = document.getElementById("bookingCard");
      bookingCard.style.borderColor = "var(--mint-green)";
      bookingCard.style.boxShadow = "0 0 35px var(--mint-glow)";
      setTimeout(() => {
        bookingCard.style.borderColor = "var(--glass-border)";
        bookingCard.style.boxShadow = "var(--glow-soft)";
      }, 1500);
    });
  }

  // Initial Builder Rendering
  renderBuilderChecklist();


  // =======================================
  // 7. PORTFOLIO CAROUSEL / SLIDER
  // =======================================
  const portfolioTrack = document.getElementById("portfolioTrack");
  const slidePrevBtn = document.getElementById("slidePrevBtn");
  const slideNextBtn = document.getElementById("slideNextBtn");

  if (portfolioTrack && slidePrevBtn && slideNextBtn) {
    let currentSlideIndex = 0;
    const slides = portfolioTrack.querySelectorAll(".portfolio-slide");
    
    function getSlideWidth() {
      if (window.innerWidth <= 768) {
        return portfolioTrack.clientWidth; // full width
      } else if (window.innerWidth <= 1100) {
        return portfolioTrack.clientWidth / 2 - 16; // 2 slides
      } else {
        return portfolioTrack.clientWidth / 3 - 21; // 3 slides
      }
    }

    function slideTo(index) {
      const maxIndex = slides.length - (window.innerWidth > 1100 ? 3 : window.innerWidth > 768 ? 2 : 1);
      
      currentSlideIndex = Math.max(0, Math.min(index, maxIndex));
      
      const slideWidth = getSlideWidth();
      const gap = 32; // match CSS gap (2rem)
      const translation = currentSlideIndex * (slideWidth + gap);
      
      portfolioTrack.style.transform = `translateX(-${translation}px)`;

      slidePrevBtn.disabled = currentSlideIndex === 0;
      slideNextBtn.disabled = currentSlideIndex >= maxIndex;
    }

    slidePrevBtn.addEventListener("click", () => slideTo(currentSlideIndex - 1));
    slideNextBtn.addEventListener("click", () => slideTo(currentSlideIndex + 1));

    window.addEventListener("resize", () => slideTo(currentSlideIndex));
    
    // Initial slide placement
    slideTo(0);
  }

  // =======================================
  // 8. INTERACTIVE BOOKING & PARTICLE CELEBRATION
  // =======================================
  const bookingForm = document.getElementById("bookingForm");
  const bookingSuccessOverlay = document.getElementById("bookingSuccessOverlay");
  const successOkBtn = document.getElementById("successOkBtn");
  const canvas = document.getElementById("successParticles");

  if (bookingForm && bookingSuccessOverlay && canvas) {
    const ctx = canvas.getContext("2d");
    let animationId;
    let particles = [];

    // Resize canvas
    function resizeCanvas() {
      const rect = canvas.parentNode.getBoundingClientRect();
      canvas.width = rect.width;
      canvas.height = rect.height;
    }
    window.addEventListener("resize", resizeCanvas);
    resizeCanvas();

    class Particle {
      constructor(x, y) {
        this.x = x;
        this.y = y;
        this.size = Math.random() * 6 + 2;
        this.speedX = (Math.random() - 0.5) * 12;
        this.speedY = (Math.random() - 0.5) * 12 - 4; // drift upward
        
        // Colors from logo theme
        const colors = [
          "rgba(233, 30, 99, 0.95)", // pink
          "rgba(143, 188, 143, 0.95)", // mint
          "rgba(255, 255, 255, 0.95)", // white
          "rgba(233, 30, 99, 0.4)", // light pink
          "rgba(143, 188, 143, 0.4)" // light mint
        ];
        this.color = colors[Math.floor(Math.random() * colors.length)];
        this.gravity = 0.15;
        this.friction = 0.98;
        this.alpha = 1;
        this.decay = Math.random() * 0.015 + 0.008;
      }

      update() {
        this.speedX *= this.friction;
        this.speedY += this.gravity;
        this.speedY *= this.friction;
        this.x += this.speedX;
        this.y += this.speedY;
        this.alpha -= this.decay;
      }

      draw() {
        ctx.save();
        ctx.globalAlpha = this.alpha;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.shadowBlur = 10;
        ctx.shadowColor = this.color;
        ctx.fill();
        ctx.restore();
      }
    }

    function spawnExplosion(x, y) {
      for (let i = 0; i < 90; i++) {
        particles.push(new Particle(x, y));
      }
    }

    function animateParticles() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];
        p.update();
        p.draw();
        
        if (p.alpha <= 0) {
          particles.splice(i, 1);
        }
      }

      if (particles.length > 0) {
        animationId = requestAnimationFrame(animateParticles);
      } else {
        cancelAnimationFrame(animationId);
      }
    }

    bookingForm.addEventListener("submit", (e) => {
      e.preventDefault();

      // Gather booking details
      const name = document.getElementById("bookingName")?.value || "";
      const phone = document.getElementById("bookingPhone")?.value || "";
      const serviceSelect = document.getElementById("bookingService");
      const serviceText = serviceSelect ? serviceSelect.options[serviceSelect.selectedIndex].text : "";
      const stylistSelect = document.getElementById("bookingStylist");
      const stylistText = stylistSelect ? stylistSelect.options[stylistSelect.selectedIndex].text : "";
      const date = document.getElementById("bookingDate")?.value || "";
      const time = document.getElementById("bookingTime")?.value || "";
      const notes = document.getElementById("bookingNotes")?.value || "";

      // 1. Silent Background API Dispatch
      const bookingData = {
        name,
        phone,
        service: serviceText,
        stylist: stylistText,
        date,
        time,
        notes
      };

      console.log("[Background Dispatch] Securely submitting booking details...");
      
      // Dispatch to local backend API
      fetch('/api/book', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(bookingData)
      })
      .then(response => response.json())
      .then(data => {
        console.log("[Background Dispatch Success] Server response:", data);
      })
      .catch(err => {
        console.error("[Background Dispatch Error]", err);
      });

      // Dispatch automated background email via FormSubmit
      fetch('https://formsubmit.co/ajax/thebeautywizardsalon@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          _subject: `✨ New Salon Booking - ${name}`,
          _captcha: "false",
          Name: name,
          Phone: phone,
          Service: serviceText,
          Stylist: stylistText,
          Date: date,
          Time: time,
          Notes: notes || 'None'
        })
      })
      .then(response => response.json())
      .then(data => {
        console.log("[FormSubmit Email Success] Dispatch completed:", data);
      })
      .catch(err => {
        console.error("[FormSubmit Email Error] Dispatch failed:", err);
      });

      // 2. Synchronous WhatsApp Dispatch to bypass browser popup blockers
      const whatsappMessage = `✨ *New Appointment Booking* ✨\n\n` +
        `👤 *Name:* ${name}\n` +
        `📞 *Phone:* ${phone}\n` +
        `💆 *Service:* ${serviceText}\n` +
        `💇 *Stylist:* ${stylistText}\n` +
        `📅 *Date:* ${date}\n` +
        `⏰ *Time:* ${time}\n` +
        `📝 *Notes:* ${notes || 'None'}`;
      
      const whatsappUrl = `https://api.whatsapp.com/send?phone=917644005816&text=${encodeURIComponent(whatsappMessage)}`;
      
      try {
        window.open(whatsappUrl, '_blank');
      } catch (err) {
        console.error("[WhatsApp Window Open Error]", err);
      }

      // Update the WhatsApp button href in the success overlay
      const successWhatsAppBtn = document.getElementById("successWhatsAppBtn");
      if (successWhatsAppBtn) {
        successWhatsAppBtn.setAttribute("href", whatsappUrl);
      }

      // Trigger sparkle/glow explosion at the submit button location
      const submitBtn = document.getElementById("bookingSubmitBtn");
      const btnRect = submitBtn.getBoundingClientRect();
      const cardRect = canvas.parentNode.getBoundingClientRect();
      
      const explosionX = btnRect.left - cardRect.left + btnRect.width / 2;
      const explosionY = btnRect.top - cardRect.top + btnRect.height / 2;
      
      // Spawn particle physics
      particles = [];
      spawnExplosion(explosionX, explosionY);
      animateParticles();

      // 2. Immediate Success Overlay Transition (Zero pop-ups)
      setTimeout(() => {
        bookingSuccessOverlay.style.display = "flex";
      }, 300);
    });

    if (successOkBtn) {
      successOkBtn.addEventListener("click", () => {
        // Reset form & close overlay
        bookingForm.reset();
        bookingSuccessOverlay.style.display = "none";
        
        // Reset package builder selections as well for full clean slate
        selectedBuilderServiceIds.clear();
        renderBuilderChecklist();
        updateBuilderCart();
      });
    }
  }

  // Newsletter Form interaction
  const newsletterForm = document.getElementById("newsletterForm");
  if (newsletterForm) {
    newsletterForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const emailInput = newsletterForm.querySelector(".newsletter-input");
      if (emailInput && emailInput.value) {
        const btn = newsletterForm.querySelector(".newsletter-btn");
        const btnRect = btn.getBoundingClientRect();
        
        // Burst of sparkles
        for (let i = 0; i < 20; i++) {
          createSparkle(btnRect.left + btnRect.width / 2, btnRect.top + btnRect.height / 2);
        }
        
        // Show success alert or update placeholder beautifully
        const originalPlaceholder = emailInput.placeholder;
        emailInput.value = "";
        emailInput.placeholder = "✨ Subscribed! Welcome to the realm! ✨";
        emailInput.style.borderColor = "var(--mint-green)";
        emailInput.style.boxShadow = "0 0 10px var(--mint-glow)";
        emailInput.disabled = true;
        
        setTimeout(() => {
          emailInput.placeholder = originalPlaceholder;
          emailInput.style.borderColor = "";
          emailInput.style.boxShadow = "";
          emailInput.disabled = false;
        }, 4000);
      }
    });
  }

  // =======================================
  // 9. MAP AND SECTION NAV ACTIVE CLASSIFICATION
  // =======================================
  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll(".nav-link");

  function highlightNavigationOnScroll() {
    let scrollPos = window.scrollY + 200;

    sections.forEach(section => {
      const top = section.offsetTop;
      const height = section.offsetHeight;
      const id = section.getAttribute("id");

      if (scrollPos >= top && scrollPos < top + height) {
        navLinks.forEach(link => {
          link.classList.remove("active");
          if (link.getAttribute("data-section") === id) {
            link.classList.add("active");
          }
        });
      }
    });
  }

  window.addEventListener("scroll", highlightNavigationOnScroll);

  // =======================================
  // 10. GEOLOCATION LIVE GPS TRACKER & LANDMARK ROUTER
  // =======================================
  const SALON_LAT = 25.6202252;
  const SALON_LNG = 85.0391511;

  const trackDistanceBtn = document.getElementById("trackDistanceBtn");
  const geoLoading = document.getElementById("geoLoading");
  const geoResultBox = document.getElementById("geoResultBox");
  const geoDistanceText = document.getElementById("geoDistanceText");
  const geoTimeText = document.getElementById("geoTimeText");
  const geoMapsLink = document.getElementById("geoMapsLink");

  const landmarkSelector = document.getElementById("landmarkSelector");
  const landmarkResult = document.getElementById("landmarkResult");

  // Haversine formula to compute precise spherical distance in km
  function calculateHaversineDistance(lat1, lon1, lat2, lon2) {
    const R = 6371; // Radius of the earth in km
    const dLat = (lat2 - lat1) * Math.PI / 180;
    const dLon = (lon2 - lon1) * Math.PI / 180;
    const a = 
      Math.sin(dLat/2) * Math.sin(dLat/2) +
      Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) * 
      Math.sin(dLon/2) * Math.sin(dLon/2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return R * c;
  }

  if (trackDistanceBtn) {
    trackDistanceBtn.addEventListener("click", () => {
      // Reset displays
      if (geoResultBox) geoResultBox.style.display = "none";
      if (geoLoading) geoLoading.style.display = "flex";

      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            const userLat = position.coords.latitude;
            const userLng = position.coords.longitude;

            // Compute distance to salon coordinates
            const distance = calculateHaversineDistance(userLat, userLng, SALON_LAT, SALON_LNG);
            
            // Average traffic speed in Patna is ~25 km/h
            const travelTimeMins = (distance / 25) * 60;
            let formattedTime = "";
            if (travelTimeMins < 2) {
              formattedTime = "1-2 minutes";
            } else if (travelTimeMins > 60) {
              const hrs = Math.floor(travelTimeMins / 60);
              const mins = Math.ceil(travelTimeMins % 60);
              formattedTime = `${hrs} hr ${mins} mins`;
            } else {
              formattedTime = `${Math.ceil(travelTimeMins)} minutes`;
            }

            // Render output
            if (geoDistanceText) {
              geoDistanceText.innerText = `You are ${distance.toFixed(1)} km away`;
            }
            if (geoTimeText) {
              geoTimeText.innerText = `Estimated travel time: ~${formattedTime} (via road)`;
            }
            if (geoMapsLink) {
              geoMapsLink.setAttribute("href", `https://www.google.com/maps/dir/?api=1&origin=${userLat},${userLng}&destination=${SALON_LAT},${SALON_LNG}`);
              geoMapsLink.style.display = "inline-flex";
              geoMapsLink.innerText = "Navigate Now";
            }

            if (geoLoading) geoLoading.style.display = "none";
            if (geoResultBox) geoResultBox.style.display = "block";
          },
          (error) => {
            console.error("GPS retrieval error:", error);
            let userFriendlyMsg = "Could not verify coordinates. Please verify your system's location configurations or select a neighborhood.";
            if (error.code === error.PERMISSION_DENIED) {
              userFriendlyMsg = "Permission denied. Allow location services in your browser address bar or select a landmark.";
            } else if (error.code === error.TIMEOUT) {
              userFriendlyMsg = "GPS request timed out. Please try again or select a neighborhood.";
            }
            showGeoErrorState(userFriendlyMsg);
          },
          { enableHighAccuracy: true, timeout: 6000 }
        );
      } else {
        showGeoErrorState("Your current web browser does not support native Geolocation APIs.");
      }
    });
  }

  function showGeoErrorState(message) {
    if (geoDistanceText) {
      geoDistanceText.innerText = "GPS Unavailable";
    }
    if (geoTimeText) {
      geoTimeText.innerText = message;
    }
    if (geoMapsLink) {
      // Set to navigate directly to destination coordinates
      geoMapsLink.setAttribute("href", `https://www.google.com/maps/dir/?api=1&destination=${SALON_LAT},${SALON_LNG}`);
      geoMapsLink.style.display = "inline-flex";
      geoMapsLink.innerText = "Get Driving Directions";
    }

    if (geoLoading) geoLoading.style.display = "none";
    if (geoResultBox) geoResultBox.style.display = "block";
  }

  // Landmark Router for popular Patna neighborhood hubs
  if (landmarkSelector && landmarkResult) {
    const HUBS_ROUTING = {
      "boring-road": {
        distance: 11.5,
        time: 32,
        route: "Boring Road Crossing to Saguna More via Bailey Road. Drive straight past Ashiana More, Gola Road, and RPS More. The salon is located in VM complex, opposite of high-tech hospital, Saguna More, Kaliket Nagar, Patna."
      },
      "danapur-station": {
        distance: 2.8,
        time: 8,
        route: "Danapur Railway Station to Saguna More via Danapur Khagaul Road. Travel north on Danapur Khagaul Road towards Saguna More. The salon is located in VM complex, opposite of high-tech hospital, Saguna More, Kaliket Nagar, Patna."
      },
      "bailey-road": {
        distance: 3.5,
        time: 10,
        route: "RPS More / Gola Road to Saguna More via Bailey Road. Head west past Gola Road crossing and RPS More towards Saguna More. The salon is located in VM complex, opposite of high-tech hospital, Saguna More, Kaliket Nagar."
      },
      "patna-junction": {
        distance: 13.2,
        time: 45,
        route: "Patna Junction Railway Station to Saguna More via Bailey Road. Head west on Bailey Road past Patna High Court, Patna Zoo, Ashiana Nagar, and RPS More. The salon is located in VM complex, opposite of high-tech hospital, Saguna More, Kaliket Nagar, Patna."
      },
      "patliputra": {
        distance: 9.8,
        time: 28,
        route: "Patliputra Colony / Ashiana Nagar to Saguna More. Head south on Ashiana Road, turn right onto Bailey Road and continue west past RPS More to Saguna More. The salon is situated in VM complex, opposite of high-tech hospital, Saguna More."
      }
    };

    landmarkSelector.addEventListener("change", (e) => {
      const selectedHub = e.target.value;
      const data = HUBS_ROUTING[selectedHub];

      if (data) {
        landmarkResult.innerHTML = `
          <div style="margin-top: 0.8rem; display: flex; flex-direction: column; gap: 0.5rem; animation: fadeIn 0.3s ease-out;">
            <div style="display: flex; gap: 1.5rem; font-size: 0.95rem; font-weight: 600; color: var(--botanical-dark);">
              <span><i class="fa-solid fa-road" style="color: var(--primary-pink); margin-right: 0.4rem;"></i>Distance: ${data.distance} km</span>
              <span><i class="fa-solid fa-car" style="color: var(--rose-gold); margin-right: 0.4rem;"></i>Time: ~${data.time} mins</span>
            </div>
            <p style="font-size: 0.85rem; color: var(--text-muted); line-height: 1.6; margin-top: 0.2rem;">${data.route}</p>
            <a href="https://www.google.com/maps/dir/?api=1&destination=${SALON_LAT},${SALON_LNG}" target="_blank" class="btn-premium btn-premium-secondary" style="font-size: 0.78rem; padding: 0.5rem 1.2rem; align-self: flex-start; margin-top: 0.5rem; text-decoration: none;">
              <i class="fa-solid fa-diamond-turn-right"></i> Open Navigation Route
            </a>
          </div>
        `;
        landmarkResult.style.display = "block";
      } else {
        landmarkResult.style.display = "none";
      }
    });
  }


  // =======================================
  // 12. RITUAL BUNDLE SELECTION ACTIONS
  // =======================================
  const bundleButtons = document.querySelectorAll(".select-bundle-btn");
  
  const RITUAL_BUNDLES = {
    "pre-bridal": ["pre-bridal-pack"],
    "luxury-pre-bridal": ["luxury-pre-bridal-pack"]
  };

  bundleButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      const bundleKey = btn.getAttribute("data-bundle");
      const serviceIds = RITUAL_BUNDLES[bundleKey];
      
      if (serviceIds) {
        // Clear previous custom builder selections
        selectedBuilderServiceIds.clear();
        
        // Populate bundle items into selections
        serviceIds.forEach(id => {
          selectedBuilderServiceIds.add(id);
        });

        // Re-render checklist and cart summaries
        renderBuilderChecklist();
        updateBuilderCart();

        // Scroll smoothly to package builder section
        document.getElementById("builder").scrollIntoView({ behavior: "smooth" });

        // Highlight cart container with active glow
        const cartElement = document.getElementById("builderCart");
        cartElement.style.borderColor = "var(--rose-gold)";
        cartElement.style.boxShadow = "0 0 35px var(--rose-gold-glow)";
        setTimeout(() => {
          cartElement.style.borderColor = "var(--glass-border)";
          cartElement.style.boxShadow = "var(--glow-soft)";
        }, 1500);

        // Spawn a burst of micro sparkles
        const rect = btn.getBoundingClientRect();
        createSparkle(rect.left + rect.width / 2, rect.top + rect.height / 2);
      }
    });
  });

});
