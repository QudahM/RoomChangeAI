import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: import.meta.env.VITE_OPENAI_API_KEY, // Store your OpenAI API key in .env
  dangerouslyAllowBrowser: true, // Only use this if calling directly from the frontend
});

export async function generateRoomImage(roomData: any): Promise<string | null> {
  try {
    const prompt = `Generate a high-quality interior room design with these details: 
      - Dimensions: ${roomData.dimensions.width}x${roomData.dimensions.length} feet
      - Style: ${roomData.style}
      - Color Palette: ${roomData.colorPalette.join(", ")}
      - Features: ${roomData.layout.map(obj => obj.type).join(", ")}
    `;

    const response = await openai.images.generate({
      model: "dall-e-3",
      prompt: prompt,
      n: 1,
      size: "1024x1024",
    });

    return response.data[0].url; // Return the AI-generated image URL
  } catch (error) {
    console.error("Error generating room image:", error);
    return null;
  }
}
