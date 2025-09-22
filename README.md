# 💬 Anime Quote Generator
A simple web app that fetches and displays random quotes from anime series using public APIs.

## 🌐 Live Demo
https://anime-quote-generator-p7ts.onrender.com/

## Tech Stack
- `Node.js` - runtime
- `Express.js` - backend framework
- `EJS` - templating engine 
- `CSS` – custom styling

## 🚀 Features
- Fetches and displays **random anime quotes**, including character and anime name.
- Links the anime to the corresponding page on myanimelist.
- Clean, minimal UI with a responsive layout.

## 🖥️ Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) (v18 or higher recommended)  
- npm (comes with Node.js)

### Installation
1. **Clone the repository**  
   ```bash
   git clone https://github.com/pixeldubu/anime-quote-generator.git
   cd anime-quote-generator
2. **Install dependencies**
   ```bash
   npm install
3. **Run the application**
   ```bash
   npm start
4. **Open your browser and visit:** http://localhost:3000

## 📚 API Sources
- Animechan https://animechan.io/
- Jikan https://jikan.moe/

## ⚠️ Limitations
- The Animechan API is rate limited to 5 requests per hour.
- If you exceed the limit, you’ll see an error until the next hour resets.
