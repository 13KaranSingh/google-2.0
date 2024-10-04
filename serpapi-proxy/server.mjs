import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import fetch from 'node-fetch'; // Ensure fetch is imported


dotenv.config();

const app = express();
const PORT = process.env.PORT || 5001;

app.use(cors());
app.use(express.json());

// Root route
app.get('/', (req, res) => {
    res.send('Welcome to the Search API! Use /search?q=your_query to search.');
});

app.get('/search', async (req, res) => {
    const query = req.query.q;
    const apiKey = process.env.SERPAPI_KEY;

    // Temporary log for debugging
    console.log('Using API key:', apiKey);

    try {
        const response = await fetch(`https://serpapi.com/search?q=${encodeURIComponent(query)}&api_key=${apiKey}`);
        const data = await response.json();
        console.log('Serpapi response:', data);
        res.json(data);
    } catch (error) {
        console.error('Error fetching from SerpAPI:', error);
        res.status(500).json({ error: 'Error fetching results' });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});










