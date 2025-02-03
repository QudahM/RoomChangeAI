import express from "express";
import OpenAI from "openai";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config(); // Load environment variables

const app = express();
app.use(cors());
app.use(express.json());

const openai = new OpenAI({ apiKey: process.env.VITE_OPENAI_API_KEY });

app.post("/api/generate-design", async (req, res) => {
    try {
        const { dimensions, style, colorPalette, layout } = req.body;

        const prompt = `
            Generate a high-quality interior room design based on these details:
            - Room Dimensions: ${dimensions.width}x${dimensions.length} feet
            - Style: ${style}
            - Color Palette: ${colorPalette.join(", ")}
            - Features: ${layout.map(obj => obj.type).join(", ")}
        `;

        const response = await openai.images.generate({
            model: "dall-e-3",
            prompt: prompt,
            n: 1,
            size: "1024x1024",
        });

        res.json({ imageUrl: response.data[0].url });

    } catch (error) {
        console.error("AI Generation Error:", error);
        res.status(500).json({ error: "Failed to generate design" });
    }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
