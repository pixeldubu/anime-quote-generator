# 💬 Anime Quote Generator
A simple web app that fetches and displays random quotes from anime series using public APIs.

## 📸 Preview
https://github.com/user-attachments/assets/0ef26c98-476b-4c4d-8910-8a796d41b616

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
