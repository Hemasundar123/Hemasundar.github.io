# 🚀 Hemasundar — DevOps Portfolio Website

A clean, modern, responsive portfolio website for **Jagilinki Hemasundar**, Fresher DevOps Engineer & Cloud Enthusiast.

---

## 📁 Project Structure

```
portfolio/
├── index.html          ← Main HTML file (all sections)
├── css/
│   └── style.css       ← All styles (dark/light theme, animations)
├── js/
│   └── main.js         ← Interactions (cursor, typed text, form, etc.)
├── assets/
│   └── Hemasundar_Resume.pdf   ← ← REPLACE with your actual resume
└── README.md
```

---

## ✨ Features

- **Dark / Light theme toggle** (persists via localStorage)
- **Typed text animation** in hero section
- **Custom cursor** (desktop only)
- **Scroll reveal animations** using Intersection Observer
- **Animated skill bars**
- **Mobile responsive** (hamburger menu)
- **Floating social icons**
- **Contact form** with validation
- **Auto-hide navbar** on scroll down
- **GitHub Pages ready** (no build step required)

---

## 🖥️ Local Preview

No build tools needed! Just open in a browser:

```bash
# Option 1: Double-click index.html
# Option 2: Use VS Code Live Server extension
# Option 3: Python simple server
python3 -m http.server 8080
# Then open: http://localhost:8080
```

---

## 🌐 Deploy on GitHub Pages — Step by Step

### Step 1 — Create a GitHub Account
Go to [github.com](https://github.com) and sign up (free).

### Step 2 — Create a New Repository

```
Repository name:  hemasundar.github.io
  (Format: yourusername.github.io — this is important!)
Visibility:       Public
Initialize with:  ✅ Add a README
```

Click **Create repository**.

### Step 3 — Upload Your Portfolio Files

**Option A — GitHub Web Upload (Easiest):**
1. Open your repository on GitHub
2. Click **Add file → Upload files**
3. Drag and drop ALL files and folders:
   - `index.html`
   - `css/` folder
   - `js/` folder
   - `assets/` folder
4. Scroll down → click **Commit changes**

**Option B — Git Command Line:**
```bash
# 1. Clone your new repo
git clone https://github.com/yourusername/yourusername.github.io
cd yourusername.github.io

# 2. Copy portfolio files into this folder
cp -r /path/to/portfolio/* .

# 3. Stage, commit, and push
git add .
git commit -m "🚀 Initial portfolio launch"
git push origin main
```

### Step 4 — Enable GitHub Pages

1. Go to your repository → **Settings** tab
2. Scroll to **Pages** in the left sidebar
3. Under **Source** → select branch: `main`, folder: `/ (root)`
4. Click **Save**

### Step 5 — Your Site is Live! 🎉

After 1–2 minutes, your portfolio will be live at:
```
https://yourusername.github.io
```

> 💡 **Tip:** It can take up to 10 minutes for the first deployment. Refresh if you don't see it immediately.

---

## ✏️ Customization Checklist

Open `index.html` and replace:

| Placeholder | Replace with |
|---|---|
| `hemasundar@example.com` | Your real email |
| `github.com/hemasundar` | Your GitHub URL |
| `linkedin.com/in/hemasundar` | Your LinkedIn URL |
| Project GitHub links `href="#"` | Your actual repo URLs |
| `assets/Hemasundar_Resume.pdf` | Your actual resume file |

---

## 🎨 Changing Theme Colors

In `css/style.css`, edit the `:root` variables:

```css
:root {
  --accent:   #4d90fe;   /* Main blue accent */
  --accent-2: #38d9ff;   /* Cyan accent */
  --bg:       #080c14;   /* Dark background */
}
```

---

## 📱 Browser Support

| Browser | Support |
|---|---|
| Chrome 90+ | ✅ Full |
| Firefox 90+ | ✅ Full |
| Safari 14+ | ✅ Full |
| Edge 90+ | ✅ Full |
| Mobile Chrome/Safari | ✅ Full |

---

## 📄 License

Free to use and modify for personal portfolio use.

---

*Built with ☕ and curiosity — Jagilinki Hemasundar, 2024*
