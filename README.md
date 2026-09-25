# Daily Joy 🌟

Daily Joy is a clean, simple web application built for sharing and enjoying positive, beautiful, inspirational, and "good morning" images. 

---

## 🛠️ Tech Stack & Features

- **Frontend Framework:** [Vite](https://vitejs.dev) with [TypeScript](https://typescriptlang.org)
- **Runtime & Package Manager:** [Bun](https://bun.sh) (`bun.lock` handles rapid package resolution)
- **Content Automation:** Integrated JavaScript and CommonJS background automation scripts (`fetch_images.js`, `generate_content.js`) to handle asset pipelines and automated content curation.

---

## 🚀 Getting Started

Follow these steps to set up and run the project locally on your machine.

### 1. Prerequisites
Ensure you have [Bun](https://bun.sh) installed on your machine.

### 2. Clone the Repository
```bash
git clone https://github.com
cd Daily-Joy
```

### 3. Install Dependencies
```bash
bun install
```

### 4. Environment Configuration
Duplicate the example environment file and fill in any required API keys or secrets:
```bash
cp .env.example .env
```

### 5. Running Content Scripts (Optional)
If you need to fetch fresh image data or populate metadata before running the app:
```bash
node scripts/fetch_images.js
node scripts/generate_content.js
```

### 6. Start the Development Server
```bash
bun run dev
```
Open your browser and navigate to the local URL provided by the terminal (typically `http://localhost:5173`).

---

## 📂 Project Structure

```text
├── public/             # Static assets
├── scripts/            # Asset pipeline & configuration scripts
├── src/                # Main application source code (TypeScript)
├── .env.example        # Reference template for environmental variables
├── fetch_images.js     # Image fetching utility script
├── generate_content.js # Content generation engine 
├── index.html          # Main HTML entry point
└── metadata.json       # App configuration and content registry
```

---

## 📄 License
This project is open-source. Please see the repository details for licensing specifications.
