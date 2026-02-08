
import { GoogleGenerativeAI } from "@google/generative-ai";
import { DesignAnalysis } from "../types";

const API_KEY = (import.meta as any).env.VITE_GEMINI_API_KEY;
const genAI = new GoogleGenerativeAI(API_KEY || "");

export const analyzeInterior = async (image: string): Promise<DesignAnalysis> => {
  if (!API_KEY) {
    throw new Error("API Key is missing. Please set VITE_GEMINI_API_KEY.");
  }

  const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });
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
    const text = response.text();

    // JSON 유효성 검사 및 정제: 가장 견고한 추출 방식 적용
    let data;
    try {
      const start = text.indexOf('{');
      const end = text.lastIndexOf('}');
      if (start !== -1 && end !== -1) {
        const jsonStr = text.substring(start, end + 1);
        data = JSON.parse(jsonStr);
      } else {
        throw new Error("AI 응답 데이터 형식이 올바르지 않습니다.");
      }
    } catch (e) {
      console.error("AI Raw Response:", text);
      throw new Error(`분석 결과 해석 실패 (Parsing Error). AI가 예상치 못한 형식으로 답변했습니다.`);
    }
    return data;
  } catch (error: any) {
    console.error("Gemini API Error details:", error);
    // API 에러 메시지에 따른 상세 안내
    if (error.message?.includes("API_KEY_INVALID")) {
      throw new Error("API 키가 올바르지 않습니다. Vercel 환경 변수가 정확히 등록되었는지 확인해 주세요.");
    } else if (error.message?.includes("SAFETY")) {
      throw new Error("이미지가 AI 안전 정책에 의해 분석이 거부되었습니다. 다른 사진으로 시도해 주세요.");
    }
    throw error;
  }
};

export const retouchInterior = async (image: string, suggestion: string): Promise<string> => {
  // 현재 제미나이 플래시 모델은 이미지 생성 기능을 코드에서 직접 지원하지 않으므로,
  // 시뮬레이션을 위해 원본 이미지를 그대로 반환하거나 추후 전용 모델로 교체 가능합니다.
  return image;
};
