import os
from PIL import Image
from PIL.ExifTags import TAGS

assets_dir = r"f:\the beauty wizard\assets"
images = [f for f in os.listdir(assets_dir) if f.lower().endswith(('.png', '.jpg', '.jpeg', '.webp'))]

output_file = r"f:\the beauty wizard\exif_dump.txt"

with open(output_file, 'w', encoding='utf-8') as f:
    f.write("EXIF DATA DUMP\n")
    f.write("==============\n\n")
    for img_name in sorted(images):
        img_path = os.path.join(assets_dir, img_name)
        try:
            with Image.open(img_path) as img:
                f.write(f"Image: {img_name} ({img.size[0]}x{img.size[1]}, {img.format})\n")
                info = img._getexif() if hasattr(img, '_getexif') else None
                if info:
                    for tag, value in info.items():
                        decoded = TAGS.get(tag, tag)
                        f.write(f"  {decoded}: {value}\n")
                else:
                    f.write("  No EXIF data\n")
                f.write("\n")
        except Exception as e:
            f.write(f"Image: {img_name} - Error: {e}\n\n")

print("Exif data dumped to f:\\the beauty wizard\\exif_dump.txt")
