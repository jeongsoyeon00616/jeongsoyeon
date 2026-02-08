
import { GoogleGenerativeAI } from "@google/generative-ai";
import { DesignAnalysis } from "../types";

const API_KEY = (import.meta as any).env.VITE_GEMINI_API_KEY;
const genAI = new GoogleGenerativeAI(API_KEY || "");

export const analyzeInterior = async (image: string): Promise<DesignAnalysis> => {
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
    const base64Data = image.split(',')[1];

    const prompt = `
    Analyze this interior design image and provide a JSON response.
    {
      "styleName": "Style Name",
      "description": "Short overall description",
      "palette": ["#hex1", "#hex2", "#hex3", "#hex4", "#hex5"],
      "scores": {
        "Balance": 85,
        "Color Harmony": 90,
        "Lighting": 75,
        "Functionality": 80,
        "Texture": 70
      },
      "elements": [
        { "item": "Sofa", "score": 90, "feedback": "Great texture and placement." }
      ],
      "suggestions": [
        { "title": "Lighting Adjustment", "description": "Add a floor lamp for warmth.", "actionType": "Lighting" }
      ]
    }
  `;

    const result = await model.generateContent([
        prompt,
        {
            inlineData: {
                data: base64Data,
                mimeType: "image/jpeg"
            }
        }
    ]);

    const response = await result.response;
    const text = response.text().replace(/```json|```/g, "").trim();
    return JSON.parse(text);
};

export const retouchInterior = async (image: string, suggestion: string): Promise<string> => {
    // Since real image-to-image/inpainting with Gemini is limited in this context,
    // we will simulate the "After" image by returning the original image or a slightly modified one for the UI.
    // In a real production app, you would use Stable Diffusion / DALL-E 3 / or Google's Imagen.
    return image;
};
