# PopX — React Mobile App UI

A pixel-perfect, mobile-first React application built as a qualifier task for an internship/fresher interview. The app replicates a multi-screen mobile UI centered on the webpage, with seamless client-side navigation between all screens.

---


## Project Structure

```
popx-app/
├── public/
│   ├── index.html
│   └── favicon.ico
├── src/
│   ├── pages/
│   │   ├── Landing.js           # Welcome screen
│   │   ├── Landing.css
│   │   ├── Login.js             # Sign in screen
│   │   ├── Login.css
│   │   ├── Register.js          # Create account screen
│   │   ├── Register.css
│   │   ├── AccountSettings.js   # User profile screen
│   │   └── AccountSettings.css
│   ├── components/              # Reusable components (future use)
│   ├── App.js                   # Root component with routing
│   ├── App.css                  # Mobile frame layout
│   ├── index.js                 # React entry point
│   └── index.css                # Global reset & base styles
├── package.json
└── README.md
```

---

## Navigation Flow

```
Landing (/)
├── "Create Account"            →  /register  →  /account-settings
└── "Already Registered? Login" →  /login     →  /account-settings
```

---

## Features

- **4 screens** — Landing, Login, Register, Account Settings
- **React Router DOM** — client-side navigation, no page reloads
- **Pixel-perfect UI** — matches the Adobe XD design precisely
- **Mobile frame** — 390×844px centered on desktop, mimicking a real phone
- **Fully responsive** — goes edge-to-edge on actual mobile devices
- **Controlled forms** — all inputs managed with React `useState`
- **Custom radio buttons** — styled agency toggle (Yes/No)
- **Clean CSS** — each page has its own scoped stylesheet, no CSS-in-JS
- **No UI libraries** — pure React + CSS, no Bootstrap or Tailwind

---

## Tech Stack

| Technology | Version | Purpose |
|---|---|---|
| React | ^19.2.6 | UI library |
| React DOM | ^19.2.6 | DOM rendering |
| React Router DOM | ^7.15.1 | Client-side routing |
| React Scripts (CRA) | 5.0.1 | Build tooling |

---

## Getting Started

### Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/) (v16 or higher)
- npm (comes with Node.js)

### Installation & Running Locally

```bash
# 1. Clone the repository
git clone https://github.com/yourusername/popx-app.git

# 2. Navigate into the project folder
cd popx-app

# 3. Install dependencies
npm install

# 4. Start the development server
npm start
```

The app will open at **http://localhost:3000** in your browser.

---

## Build for Production

```bash
npm run build
```

This creates an optimized `build/` folder ready for deployment.

---

## Deployment

### Deploy to Netlify

**Option 1 — Drag & Drop:**
1. Run `npm run build`
2. Go to [netlify.com](https://netlify.com) → Sites → Drag & drop the `build/` folder

**Option 2 — GitHub Integration:**
1. Push your code to GitHub
2. Go to Netlify → "New site from Git"
3. Connect your repo
4. Set build command: `npm run build`
5. Set publish directory: `build`
6. Click **Deploy Site**

### Deploy to Vercel

```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
vercel
```

Or connect your GitHub repo at [vercel.com](https://vercel.com) for automatic deployments.

---

## Pages Overview

### 1. Landing Page (`/`)
- Welcome message and app description
- **"Create Account"** button (purple) → navigates to Register
- **"Already Registered? Login"** button (light purple) → navigates to Login

### 2. Login Page (`/login`)
- Email address input with floating label
- Password input with floating label
- **"Login"** button → navigates to Account Settings

### 3. Register Page (`/register`)
- Full Name, Phone Number, Email, Password, Company Name inputs
- **"Are you an Agency?"** radio toggle (Yes / No)
- **"Create Account"** button → navigates to Account Settings

### 4. Account Settings Page (`/account-settings`)
- User avatar with edit badge
- User name and email display
- Bio/description text
- Divider sections

---

## Design Decisions

- **Brand color:** `#6c3ce1` (purple) used for primary buttons, labels, and accents
- **Background:** `#f7f7f7` light gray for all screen backgrounds
- **Typography:** System font stack (Segoe UI) for clean, native feel
- **Form inputs:** Floating label style with purple label text, white card background
- **Mobile frame:** `border-radius: 40px` with `box-shadow` to simulate a real device on desktop

---

## Code Quality

- Clean, readable, and well-formatted code
- Each page is a separate functional component
- CSS is scoped per page (no global style conflicts)
- Consistent naming conventions throughout
- Forms use controlled components with `useState`

---

## Author
Adarsh Shah