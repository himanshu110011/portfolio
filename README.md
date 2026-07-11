# Alex Rivera - Creative Personal Portfolio Website

A highly premium, interactive, and fully responsive Personal Portfolio Website designed and built from scratch using clean coding principles, semantic HTML5, modern CSS3 layout frameworks, and modular Vanilla JavaScript.

---

## 🚀 Live Demo & Repository
* **GitHub Repository:** [https://github.com/yourusername/Personal-Portfolio](https://github.com/yourusername/Personal-Portfolio)
* **Live Deployment:** [https://alexrivera.dev](https://alexrivera.dev) (GitHub Pages / Vercel / Netlify preview)

---

## 🎨 Visual Design & Aesthetics
This website is crafted with a state-of-the-art tech aesthetic, featuring:
* **Glassmorphic Components:** Translucent card layouts and responsive navbar with back-drop filtering and thin borders.
* **Deep Dark Mode (Default) & Light Mode Switcher:** Theme selection persists across browser reloads using `localStorage`.
* **Micro-Animations:** Fluid scaling hover transitions, glowing border pulses, spinning SVG logos, and active navigation indicators.
* **Modern Typography:** Uses Google Font's *Plus Jakarta Sans* for clean, responsive, and readable typographic hierarchies.

---

## ✨ Features & Interactivity

1. **Loader Screen:** Custom loader displaying logo reveal and progress bar, providing a smooth load-in feeling.
2. **Hero Role Typewriter:** JavaScript-driven typewriter effect highlighting developer roles ("Full-Stack Developer", "UI/UX Designer", etc.) with cursor blinking.
3. **Interactive Tabs (About Section):** Switch sections dynamically between "Story & Goals", "Experience timeline", and "Interests cards" without reloading the page.
4. **Expandable Story ("Read More About Me"):** Show/Hide accordion detail to read additional career background.
5. **On-Scroll Animated Skill Bars:** Integrates **Intersection Observer API** to trigger animated fills and dynamic number counters when the Skills section enters the user's viewport.
6. **Project Grid Filter:** Categorize and filter portfolio projects (All, Frontend, Fullstack) with clean scale-fade animations.
7. **Contact Form Validations:** Live inline validation (Name, Email syntax, Subject, Message lengths) showing glowing alerts, coupled with a custom success modal overlay instead of primitive browser alerts.
8. **Interactive "Hire Me" Trigger:** Pop-up modal prompting the user with collaboration options and auto-navigation to the contact form.
9. **Scroll-to-Top Button:** Floats in after scrolling 400px down and scrolls smoothly back to top when clicked.

---

## 📁 Folder Structure

```text
Personal-Portfolio/
│
├── index.html          # Main HTML document with semantic elements & accessibility setup
├── style.css           # Custom CSS variables, responsive styling, and animations
├── script.js          # Core JavaScript logic for theme toggling, observers, and forms
├── README.md           # Project documentation and specifications
│
├── resume.txt          # Plain text formatted resume reference
├── resume.pdf          # PDF formatted resume download file
│
├── images/            # Graphic assets and screenshots folder
│   ├── avatar.png      # Profile picture (AI-generated)
│   ├── project1.png    # TaskFlow Dashboard screenshot
│   ├── project2.png    # Aura Sneakers Shop mobile screenshot
│   └── project3.png    # Synapse Analytics Platform screenshot
│
└── projects/           # Secondary directory for project-related assets/sub-pages
```

---

## 🛠️ Technologies Used

* **Structure:** HTML5 (using semantic elements like `<header>`, `<main>`, `<section>`, `<article>`, `<nav>`, `<footer>`)
* **Styling:** CSS3 (incorporating CSS Grid, Flexbox layouts, Custom Properties/Variables, and Media Queries)
* **Interactivity:** Modern Vanilla JavaScript (ES6+, DOM API, Web Storage, IntersectionObserver)
* **Icons:** [Font Awesome v6.4.0](https://cdnjs.com/libraries/font-awesome)
* **Fonts:** [Google Fonts (Plus Jakarta Sans)](https://fonts.google.com/specimen/Plus+Jakarta+Sans)

---

## 💻 Installation & Setup

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/yourusername/Personal-Portfolio.git
   ```
2. **Navigate into the folder:**
   ```bash
   cd Personal-Portfolio
   ```
3. **Open Locally:**
   * Double-click `index.html` to run directly in any web browser.
   * *Alternatively (Recommended):* Serve locally using VS Code's **Live Server** extension or other node modules:
     ```bash
     # Install local http-server
     npm install -g http-server
     # Run server
     http-server .
     ```

---

## 🔮 Future Improvements
* Integrate **EmailJS** for direct client-side email delivery from the contact form.
* Develop dedicated subpages for individual projects under the `projects/` directory.
* Add **AOS (Animate On Scroll)** for scroll-driven entry effects on about details and cards.

---

## 👨‍💻 Author Information
* **Name:** Alex Rivera
* **Role:** Creative Full-Stack Developer
* **Contact:** [alex.rivera@example.com](mailto:alex.rivera@example.com)
* **GitHub:** [@alexrivera](https://github.com)
* **LinkedIn:** [Alex Rivera](https://linkedin.com)
