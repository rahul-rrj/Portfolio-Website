# ⚡ RAHUL.RAJ() // Systems Architect Portfolio

[![System Status](https://img.shields.io/badge/System_Status-Online-10b981?style=for-the-badge&logo=statuspage&logoColor=white)](https://rahulrrjportfolio.netlify.app/)
[![Tech Stack](https://img.shields.io/badge/Core_Engine-Spring_Boot_%2B_React-06b6d4?style=for-the-badge&logo=springboot&logoColor=white)](#)
[![Deployment](https://img.shields.io/badge/Deploy-Netlify-00ad9f?style=for-the-badge&logo=netlify&logoColor=white)](https://rahulrrjportfolio.netlify.app/)

> **`INITIALIZING SYSTEM GATEWAY...`**  
> A high-performance, dark-themed, glassmorphic developer portfolio engineered to showcase backend-focused systems architecture, layered MVC APIs, and interactive diagnostic sandboxes.

---

## 🖥️ System Telemetry (Bento Core)

This portfolio is styled as a retro-futuristic developer terminal overlay. Rather than a static list of links, it acts as a functional diagnostics machine.

```
+---------------------------------------------------------+
|                  CORE PROCESSING UNIT                   |
|  - Separating concerns cleanly (Controller-Service-Repo) |
|  - Input integrity via DTO constraints & validations    |
|  - Uptime targets & system resilience strategies        |
+----------------------------+----------------------------+
|      STACK INVENTORY       |     ACADEMIC REGISTRY      |
|  - Languages: Java, JS     |  - Galgotias University    |
|  - Backend: Spring Boot    |    B.Tech CSE (2022-2026)  |
|  - DB: MySQL, MongoDB      |  - St. Dominic Savio's     |
+----------------------------+----------------------------+
|                    VERIFIED CREDENTIALS                 |
|  - NPTEL Software Engineering (Silver Medal, Top 2%)   |
|  - Palo Alto Networks Cybersecurity Intern              |
+---------------------------------------------------------+
```

---

## 🛠️ Deep Dive: Tech Stack & Tools Used

The application is engineered on top of a highly optimized Single Page Application (SPA) architecture combining state-of-the-art front-end technologies with high-performance animations and asynchronous telemetry streams.

### 📐 Front-End Core & Engine
*   **React 19 (Component Hierarchy)**: Leverages React's declarative rendering model, dynamic hooks (`useState`, `useEffect`, `useRef`), and structured components to build a responsive interface. Double-render hydration patterns were resolved locally using scope caching for GSAP contexts.
*   **Vite 8 (Build System)**: Chosen as the compiler and bundler instead of Webpack. Vite utilizes native ES modules for near-instant Hot Module Replacement (HMR) during development and compiles into highly optimized, minified production assets (`dist/`) using Rollup under the hood.
*   **JavaScript (ES6+)**: Employs modern JavaScript logic, structural templates, asynchronous fetch payloads, and timer sequences to coordinate state streams and console logic.

### 🎨 Styling, Glassmorphism & Aesthetics
*   **Vanilla CSS3 (Custom Styling)**: To ensure absolute layout flexibility and premium styling without the constraints of utility libraries, the visual system is built entirely using custom CSS variables (for colors, fonts, spacing, shadows).
*   **Bento Grid Layout**: Implements modular, responsive bento boxes utilizing CSS Grid (`grid-template-columns: repeat(3, 1fr)`) with adaptive column spans (`grid-column: span 2`) that fluidly adjust across desktop, tablet, and mobile viewport breakpoints.
*   **Aurora Ambient Glows**: Styled using CSS radial gradients and blur filters (`filter: blur(140px)`) combined with keyframe float animations to project smooth, breathing emerald-to-cyan background lighting.
*   **Film Grain Shader Overlay**: Employs a low-opacity, repeating SVG noise texture overlayed across the viewport to produce a tactile, high-tech CRT scanline display feel.

### ⚡ Animation Engine & Fluidity
*   **GSAP (GreenSock Animation Platform)**: The core animation driver used for timelines and complex visual orchestrations.
*   **GSAP ScrollTrigger**: Drives scroll-bound reveals. As the user navigates, ScrollTrigger captures scroll values to dynamically split the 3D Spring Boot MVC stack layers, fade in projects, and cascade the Bento Grid cards onto the screen.
*   **Custom Lerp Cursor Follower**: Implemented in JavaScript. Tracks coordinate arrays and uses linear interpolation (lerping: `posX += (mouseX - posX) * 0.15`) to translate a fluid circle element that scales up (`mix-blend-mode: difference`) over hoverable links.

### 📡 Gateway Integrations & Hosting
*   **Netlify Hosting**: Chosen for secure CDN distribution, automated continuous integration (CI/CD) pipelines triggered directly by GitHub commits, and custom redirect rules (`netlify.toml`) mapping SPA routes to `index.html`.
*   **Netlify Forms API**: Integrated to capture and collect contact form submissions. Netlify's build bot automatically parses the hidden form element in `index.html` and provisions a backend database, allowing user inquiries to route securely without writing any custom backend code.
*   **Vite Env Abstraction Layer**: Utilizes `import.meta.env` keys to completely decouple sensitive personal information (LinkedIn links, personal email targets) from public code repositories, injecting real values only during Netlify production build time.

### 🛠️ Developer Tooling
*   **Lucide React Icons**: Vector SVGs compiled as React components, providing crisp, light-weight developer iconography.
*   **Google Fonts API**: Renders premium typographical scales: *Outfit* (bold geometric display titles), *Space Grotesk* (highly readable monospaced-leaning body text), and *JetBrains Mono* (monospaced developer terminal typeface).
*   **Git / GitHub**: Used for source control management, version isolation, and deployment hooks.

---

## 📐 Blueprints & Project Pipelines

### 🛡️ Spring Boot Layered MVC Architecture (Blog Service)
Demonstrates production-pattern Java backend architecture structured into 4 isolated layers:

```
[Client Request] 
      │
      ▼
┌──────────────┐
│  Controller  │ ➔ Maps REST Endpoints & Validates Inputs (@NotBlank, @Size)
└──────┬───────┘
       │ (DTO Transfer)
       ▼
┌──────────────┐
│   Service    │ ➔ Handles business logic, states, and transactional lifecycles
└──────┬───────┘
       │
       ▼
┌──────────────┐
│  Repository  │ ➔ JPA mappings / Hibernate Normalization (preventing N+1 queries)
└──────┬───────┘
       │
       ▼
┌──────────────┐
│   Database   │ ➔ MySQL schema structure
└──────────────┘
```

### 🔗 MERN Pipeline (Contact Submission System)
A robust asynchronous data pipeline routing submissions through a secure Express gateway into a validated MongoDB schema.

---

## 🎮 Interactive API Sandbox Console

The portfolio hosts a live interactive console. Visitors can query the developer database directly in the browser by typing standard terminal commands:

| Command | Action | Output Type |
| :--- | :--- | :--- |
| `help` | Lists all available system routes | Plain Text (Help Menu) |
| `GET /api/v1/projects` | Queries the project portfolio database | JSON Array |
| `GET /api/v1/skills` | Fetches language and framework stack | JSON Object |
| `GET /api/v1/education` | Returns academic credentials registry | JSON Array |
| `GET /api/v1/certifications`| Queries professional certifications | JSON Array |
| `POST /api/v1/ping` | Pings the mock system server node | JSON (Ping telemetries) |
| `CLEAR` | Resets the terminal history outputs | Console Reset |

---

## 🔒 Security Abstraction Layer (Zero Personal Data Leak)

This repository is configured to be uploaded as a **public project** on GitHub while keeping your private contact information completely hidden. 

All personal parameters are decoupled using **Vite Environment Variables**:
- `VITE_USER_NAME` (Logo, Title, and Copyright copyright)
- `VITE_USER_EMAIL` (Contact mail routing target)
- `VITE_USER_LINKEDIN` (LinkedIn connection endpoints)
- `VITE_USER_GITHUB` (GitHub inventory repository reference)

Local development relies on a git-ignored `.env` file, while Netlify injects these values directly during build time, ensuring the live website is populated while your public repository code remains completely clean of personal details.

---

## ⚡ Local Boot Sequence

### 1. Pre-requisites
Make sure you have [Node.js](https://nodejs.org/) installed (v18+ recommended).

### 2. Clone the Repository
```bash
git clone https://github.com/<your-username>/<your-repo-name>.git
cd <your-repo-name>
```

### 3. Setup Secrets
Duplicate the `.env.example` file to create your own `.env`:
```bash
cp .env.example .env
```
Open `.env` and fill in your actual details:
```env
VITE_USER_NAME=Your Name
VITE_USER_EMAIL=your.email@example.com
VITE_USER_LINKEDIN=https://www.linkedin.com/in/yourprofile/
VITE_USER_GITHUB=https://github.com/yourusername
```

### 4. Install Dependencies
```bash
npm install
```

### 5. Boot Up Development Server
```bash
npm run dev
```
Open `http://localhost:5173` in your browser.

### 6. Build for Production
```bash
npm run build
```
This generates a static, highly optimized bundle in the `/dist` directory, ready to be hosted on Netlify, Vercel, or GitHub Pages.

---

```
[SYSTEM LOG] Portfolio System Initialized successfully.
[SYSTEM LOG] Code built to last.
```
