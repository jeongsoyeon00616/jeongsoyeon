
import { GoogleGenerativeAI } from "@google/generative-ai";
import { DesignAnalysis } from "../types";

const API_KEY = (import.meta as any).env.VITE_GEMINI_API_KEY;
const genAI = new GoogleGenerativeAI(API_KEY || "");

export const analyzeInterior = async (image: string): Promise<DesignAnalysis> => {
  if (!API_KEY) {
    throw new Error("API Key is missing. Please set VITE_GEMINI_API_KEY.");
  }

  const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
  const base64Data = image.split(',')[1];

  const prompt = `
    인테리어 디자인 전문가로서 이 사진 속의 공간을 상세히 분석해주세요.
    반드시 아래의 정해진 JSON 형식을 엄격히 지켜서 출력하세요. Markdown 기호(\`\`\`json 등)를 포함하지 말고 순수 JSON 텍스트만 출력하세요. 모든 텍스트는 한국어로 답변하세요.

    {
      "styleName": "분석된 스타일 명칭 (예: 화이트 미니멀리즘, 미드센추리 모던)",
      "description": "공간에 대한 전체적인 전문 평론 (2~3문장)",
      "palette": ["주요 색상 HEX 코드 5개"],
      "scores": {
        "균형": 85,
        "조화": 90,
        "조명": 75,
        "기능성": 80,
        "소재": 70
      },
      "elements": [
        { "item": "식별된 가구/요소 이름", "score": 90, "feedback": "해당 요소에 대한 짧은 코멘트" }
      ],
      "suggestions": [
        { "title": "개선 제안 제목", "description": "상세 제안 내용", "actionType": "카테고리(조명/배치/장식 등)" }
      ]
    }
  `;

  try {
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

    // JSON 유효성 검사 및 정제
    let data;
    try {
      data = JSON.parse(text);
    } catch (e) {
      // 혹시라도 앞뒤에 텍스트가 섞여있을 경우를 대비한 정규식 추출 시도
      const jsonMatch = text.match(/\{[\s\S]*\}/);
      if (jsonMatch) {
        data = JSON.parse(jsonMatch[0]);
      } else {
        throw new Error("Invalid AI Response Format");
      }
    }
    return data;
  } catch (error) {
    console.error("Gemini API Error:", error);
    throw error;
  }
};

export const retouchInterior = async (image: string, suggestion: string): Promise<string> => {
  // 현재 제미나이 플래시 모델은 이미지 생성 기능을 코드에서 직접 지원하지 않으므로,
  // 시뮬레이션을 위해 원본 이미지를 그대로 반환하거나 추후 전용 모델로 교체 가능합니다.
  return image;
};
