import express from "express";
import axios from "axios";

const app = express();
const port = 3000;
const QUOTE_API_URL = "https://api.animechan.io/v1/quotes/random";
const ANIMELIST_API_URL = "https://api.jikan.moe/v4/anime";

// Middleware: serve static files from "public" folder (CSS, JS, images, etc.)
app.use(express.static("public"));

// GET route: handles main page request
app.get("/", async (req, res) => {
  try {
    // Fetch random anime quote
    const randomQuote = await axios.get(QUOTE_API_URL);

    // Extract anime name from quote data
    const animeName = randomQuote.data.data.anime.name;

    // Fetch anime details based on anime name (used to get poster image)
    const animeImage = await axios.get(ANIMELIST_API_URL, {
      params: {
        q: animeName,
        limit: 1,
      },
    });
    res.render("index.ejs", {
      error: false,
      errorCode: null,
      errorMsg: null,
      image: animeImage.data.data[0].images.jpg.image_url,  // poster image URL
      quote: randomQuote.data.data.content,                 // quote text
      character: randomQuote.data.data.character.name,      // character who said quote
      anime: randomQuote.data.data.anime.name,              // anime name
      animeURL: animeImage.data.data[0].url,                // anime page URLnpm 
    });
  } catch (error) {
    console.error(error.code, error.response.data.message);

    // Render EJS template with error information from API
    res.render("index.ejs", {
      error: true,
      errorCode: error.code,
      errorMsg: error.response.data.message,
    });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});