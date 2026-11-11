# UBM Pakistan – Premium E-Commerce & Digital Skills Platform

**Tagline:** Learn & Earn | Build Your Digital Future  
**Founder & CEO:** Usman Iftikhar  
**Official WhatsApp:** +92 304 0880992  
**Official Email:** contact.ubmpakistan@gmail.com  
**Website Architecture:** Static Web Application (100% GitHub Pages Compatible)

---

## 🌟 Brand Identity & Divisions

UBM Pakistan operates two complementary divisions:

1. **UBM Pakistan Training Institute** – Practical, cohort-based ecommerce & digital skills education across 10 in-demand career tracks.
2. **UBM Pakistan Agency** – Professional ecommerce management, store development, and performance digital marketing services for Pakistani manufacturers and overseas clients.

### Theme & Colors
- **Primary Background:** `#0B0D0E`
- **Secondary Background:** `#111516`
- **Surface / Card Background:** `#151A1C`
- **Primary Emerald Green:** `#19E77A`
- **Light Accent Green:** `#A8F7C2`
- **White:** `#FFFFFF`
- **Text Gray:** `#A7B0AC`
- **Typography:** `Poppins` & `Inter`

---

## 🚀 How to Publish to GitHub Pages

This website is engineered to be 100% static, fast, and free to host on **GitHub Pages**.

### Method 1: Using the Pre-Configured Build Script

1. **Build the production static files:**
   ```bash
   npm run build
   ```
   This generates a minified, standalone static website inside the `dist/` folder.

2. **Deploy the `dist/` directory to GitHub Pages:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit of UBM Pakistan website"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPOSITORY.git
   git push -u origin main
   ```

3. **In your GitHub repository:**
   - Go to **Settings** > **Pages** (in the left sidebar).
   - Under **Source**, choose **GitHub Actions** or **Deploy from a branch** (`gh-pages` or `main /dist`).
   - Your website will immediately be accessible worldwide at `https://YOUR_USERNAME.github.io/YOUR_REPOSITORY/`.

---

## 📁 Key Files & Directories

```text
├── index.html                   # Master entry point with Poppins fonts and SEO Open Graph meta
├── public/
│   ├── assets/aistudio/         # Official UBM Pakistan logo & CEO Usman Iftikhar portrait
│   ├── sitemap.xml              # Search engine sitemap
│   ├── robots.txt               # SEO bot crawler instructions
│   └── 404.html                 # Custom GitHub Pages 404 error page
├── src/
│   ├── components/
│   │   ├── Navbar.tsx           # Sticky header with large UBM logo, links & CTAs
│   │   ├── ParticleUniverseCanvas.tsx # 60fps HTML5 Canvas interactive particle universe
│   │   ├── HeroSection.tsx      # Futuristic hero banner
│   │   ├── TrustStatsSection.tsx# Animated counters & editable statistics
│   │   ├── AboutSection.tsx     # Mission, vision, values & dual division structure
│   │   ├── CoursesSection.tsx   # 10 comprehensive course tracks
│   │   ├── CourseDetailModal.tsx# Detailed syllabus & enrollment modal
│   │   ├── AgencyServicesSection.tsx # 18 ecommerce & digital solutions
│   │   ├── ServiceDetailModal.tsx # Deliverables & quote request modal
│   │   ├── WhyChooseSection.tsx # 8 core value cards
│   │   ├── FounderSection.tsx   # Executive profile of Usman Iftikhar with suit photograph
│   │   ├── TestimonialsSection.tsx # 10 demo student reviews with carousel
│   │   ├── PortfolioSection.tsx # Case studies & client success stories
│   │   ├── AnnouncementsSection.tsx # News, admissions open & workshops
│   │   ├── BlogSection.tsx      # In-depth tactical guides
│   │   ├── BlogReaderModal.tsx  # Distraction-free article reader
│   │   ├── FaqSection.tsx       # Interactive FAQ accordion
│   │   ├── ContactAdmissionSection.tsx # WhatsApp-integrated forms & Google Map
│   │   ├── Footer.tsx           # 4-column footer, newsletter & copyright
│   │   ├── FloatingWhatsApp.tsx # Persistent WhatsApp chat drawer
│   │   └── GitHubPagesModal.tsx # In-app deployment & source code export guide
│   ├── data/
│   │   └── websiteData.ts       # Central editable configuration for courses, services, and content
│   ├── index.css                # Emerald gradient styles & Tailwind v4 theme configuration
│   ├── App.tsx                  # Master application orchestrator
│   └── main.tsx                 # Root React entry
```

---

## 📱 Official Social Media & Contact Links

- **WhatsApp / Phone:** [+92 304 0880992](https://wa.me/923040880992)
- **Email:** [contact.ubmpakistan@gmail.com](mailto:contact.ubmpakistan@gmail.com)
- **Facebook:** [UBM Pakistan Facebook](https://web.facebook.com/profile.php?id=100076012387155)
- **Instagram:** [@ubm_pakistan](https://www.instagram.com/ubm_pakistan/)
- **LinkedIn:** [UBM Pakistan LinkedIn](https://www.linkedin.com/in/ubm-pakistan-091975330/)
- **TikTok:** [@ubmpakistanofficial](https://www.tiktok.com/@ubmpakistanofficial)

---
*Copyright © 2026 UBM Pakistan. All Rights Reserved.*
