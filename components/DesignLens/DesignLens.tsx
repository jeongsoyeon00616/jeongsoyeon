
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Upload, Scan, X } from 'lucide-react';
import Scanner from './Scanner';
import AnalysisResult from './AnalysisResult';
import { GoogleGenerativeAI } from "@google/generative-ai";

// AI Analysis Result Interface
export interface AnalysisData {
    style: string;
    confidence: number;
    summary: string; // 추가: 전체적인 공간 평론
    metrics: { name: string; score: number; description: string }[]; // description 추가
    colors: string[];
    materials: string[]; // 추가: 주요 소재 분석
    recommendations: string[]; // 여러 개의 구체적 제안으로 확장
    hotspots: { top: string; left: string; label: string; comment: string }[];
}

const DesignLens: React.FC<{ onClose: () => void }> = ({ onClose }) => {
    const [stage, setStage] = useState<'upload' | 'scanning' | 'result'>('upload');
    const [image, setImage] = useState<string | null>(null);
    const [analysisResult, setAnalysisResult] = useState<AnalysisData | null>(null);

    const analyzeImage = async (base64Image: string) => {
        const apiKey = import.meta.env.VITE_GEMINI_API_KEY;
        if (!apiKey) {
            console.error("API Key is missing.");
            return;
        }

        const genAI = new GoogleGenerativeAI(apiKey);
        const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

        const prompt = `
      인테리어 디자인 전문가로서 이 사진을 매우 상세하고 깊이 있게 분석해주세요.
      답변은 반드시 아래 구조의 순수 JSON 데이터여야 합니다. (Markdown 금지)

      {
        "style": "공간의 핵심 스타일 명칭 (예: 'Warm Minimalist with Scandi nuances')",
        "confidence": 98,
        "summary": "공간의 전체적인 무드, 철학, 설계 의도를 분석한 2~3문장의 깊이 있는 평론",
        "metrics": [
          { "name": "조화도 (Cohesion)", "score": 85, "description": "가구와 마감재 간의 시각적 일치성 및 톤앤매너 분석" },
          { "name": "공간 활용 (Utility)", "score": 75, "description": "가구 배치에 따른 동선 효율 및 공간 개방감 평가" },
          { "name": "조명 설계 (Lighting)", "score": 92, "description": "자연광과 조명기구의 조화, 빛의 온도와 그림자의 깊이 분석" }
        ],
        "colors": ["주요 색상 5가지의 HEX 코드"],
        "materials": ["인식된 주요 소재 3~4가지 (예: 오크 우드, 텍스처드 패브릭, 브러쉬드 스틸)"],
        "recommendations": [
          "공간의 가치를 높이기 위한 구체적인 첫 번째 디자인 제안",
          "심미적 완성도를 위한 두 번째 가구 혹은 소품 제안",
          "조명이나 질감을 개선하기 위한 세 번째 제안"
        ],
        "hotspots": [
          { "top": "가구위치%", "left": "가구위치%", "label": "가구/오브젝트 명칭", "comment": "해당 요소에 대한 전문가적 비평" },
          { "top": "데코위치%", "left": "데코위치%", "label": "소재/디테일 명칭", "comment": "해당 요소에 대한 전문가적 비평" },
          { "top": "조명위치%", "left": "조명위치%", "label": "조명/채광 명칭", "comment": "해당 요소에 대한 전문가적 비평" }
        ]
      }

      모든 한글 텍스트는 고급스러운 인테리어 전문 용어를 사용하여 정중하고 품격 있게 작성하세요.
    `;

        try {
            const base64Data = base64Image.split(',')[1];
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
            const cleanText = text.replace(/```json|```/g, "").trim();
            const data = JSON.parse(cleanText);
            setAnalysisResult(data);
        } catch (error) {
            console.error("AI Analysis failed:", error);
        }
    };

    const handleUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = async (f) => {
                const base64 = f.target?.result as string;
                setImage(base64);
                setStage('scanning');
                await analyzeImage(base64);
            };
            reader.readAsDataURL(file);
        }
    };

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-charcoal flex flex-col items-center justify-center text-white"
        >
            <button
                onClick={onClose}
                className="absolute top-8 right-8 text-white/50 hover:text-white transition-colors p-2"
            >
                <X size={32} strokeWidth={1} />
            </button>

            <div className="absolute top-8 left-8 flex items-center gap-3">
                <div className="w-10 h-10 border border-gold flex items-center justify-center">
                    <Scan className="text-gold" size={20} />
                </div>
                <span className="font-serif text-xl tracking-tighter uppercase">Design<span className="text-gold">Lens</span></span>
            </div>

            <AnimatePresence mode="wait">
                {stage === 'upload' && (
                    <motion.div
                        key="upload"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="text-center max-w-xl px-6"
                    >
                        <h2 className="text-4xl md:text-5xl font-serif mb-6">시선을 분석하다.</h2>
                        <p className="text-white/60 font-light mb-12 leading-relaxed">
                            당신의 공간 사진을 업로드하세요. <br />
                            Gemini AI가 인테리어 스타일, 컬러 조화, 공간 가치를 정밀하게 스캔합니다.
                        </p>

                        <label className="group relative block cursor-pointer">
                            <input type="file" className="hidden" onChange={handleUpload} accept="image/*" />
                            <div className="border border-white/10 p-20 rounded-sm bg-white/5 hover:bg-white/10 transition-all duration-500 border-dashed group-hover:border-gold/50">
                                <Upload className="mx-auto mb-6 text-gold/50 group-hover:text-gold transition-colors" size={48} strokeWidth={1} />
                                <span className="text-xs uppercase tracking-[0.3em] text-white/40 group-hover:text-white transition-colors">실제 AI에게 사진 보내기</span>
                            </div>
                        </label>
                    </motion.div>
                )}

                {stage === 'scanning' && image && (
                    <Scanner image={image} onComplete={() => setStage('result')} />
                )}

                {stage === 'result' && image && analysisResult && (
                    <AnalysisResult image={image} data={analysisResult} onRestart={() => setStage('upload')} />
                )}
            </AnimatePresence>
        </motion.div>
    );
};

export default DesignLens;
