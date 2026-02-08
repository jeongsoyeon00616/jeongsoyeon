
import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Upload, Camera, Zap, BarChart3, Wand2, Palette } from 'lucide-react';
import { AppState, DesignAnalysis } from '../../types';
import { analyzeInterior, retouchInterior } from '../../services/geminiService';
import RadarChart from '../RadarChart';

const DesignLens: React.FC<{ onClose: () => void }> = ({ onClose }) => {
    const [state, setState] = useState<AppState>(AppState.HOME);
    const [selectedImage, setSelectedImage] = useState<string | null>(null);
    const [analysis, setAnalysis] = useState<DesignAnalysis | null>(null);
    const [retouchedImage, setRetouchedImage] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState(false);
    const [loadingStep, setLoadingStep] = useState("");
    const fileInputRef = useRef<HTMLInputElement>(null);

    const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setSelectedImage(reader.result as string);
                setState(AppState.UPLOADING);
            };
            reader.readAsDataURL(file);
        }
    };

    const startAnalysis = async () => {
        if (!selectedImage) return;
        setIsLoading(true);
        setLoadingStep("공간 요소를 스캔하는 중...");
        try {
            setState(AppState.ANALYZING);
            const result = await analyzeInterior(selectedImage);
            setAnalysis(result);
            setState(AppState.RESULT);
        } catch (error: any) {
            console.error(error);
            alert(error.message || "디자인 분석에 실패했습니다. 다시 시도해 주세요.");
            setState(AppState.HOME);
        } finally {
            setIsLoading(false);
        }
    };

    const handleRetouch = async (suggestion: string) => {
        if (!selectedImage) return;
        setIsLoading(true);
        setLoadingStep("디자인 변경 시뮬레이션 중...");
        try {
            const result = await retouchInterior(selectedImage, suggestion);
            setRetouchedImage(result);
            setState(AppState.RETOUCHING);
        } catch (error) {
            console.error(error);
            alert("리터칭 시뮬레이션에 실패했습니다.");
        } finally {
            setIsLoading(false);
        }
    };

    const reset = () => {
        setSelectedImage(null);
        setAnalysis(null);
        setRetouchedImage(null);
        setState(AppState.HOME);
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: "100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-[100] bg-[#fafafa] flex flex-col overflow-y-auto"
        >
            {/* Header */}
            <header className="sticky top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-gray-100 h-16 flex items-center justify-between px-6 md:px-12">
                <div className="flex items-center gap-2 cursor-pointer" onClick={reset}>
                    <div className="w-8 h-8 bg-black rounded-lg flex items-center justify-center">
                        <Camera className="w-5 h-5 text-white" />
                    </div>
                    <h1 className="text-xl font-bold tracking-tight text-black font-serif">DesignLens</h1>
                </div>
                <button
                    onClick={onClose}
                    className="text-gray-400 hover:text-black transition-colors"
                >
                    <X size={24} />
                </button>
            </header>

            {/* Main Content */}
            <main className="flex-grow pt-12 pb-12 px-6 md:px-12 max-w-7xl mx-auto w-full text-black">
                <AnimatePresence mode="wait">
                    {state === AppState.HOME && (
                        <motion.div
                            key="home"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            className="flex flex-col items-center text-center max-w-3xl mx-auto space-y-8"
                        >
                            <h2 className="text-5xl md:text-7xl font-serif leading-tight">
                                공간의 가치를 <br />
                                <span className="text-gray-400">데이터로 입증합니다.</span>
                            </h2>
                            <p className="text-lg text-gray-600 leading-relaxed font-light">
                                인테리어 사진을 업로드하세요. <br /> AI 스캐너가 공간을 분석하여 스타일을 정의하고, 전문가 수준의 더 나은 공간 솔루션을 제안합니다.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 w-full justify-center">
                                <button
                                    onClick={() => fileInputRef.current?.click()}
                                    className="bg-black text-white px-8 py-4 rounded-2xl flex items-center justify-center gap-3 hover:scale-105 transition-transform font-bold"
                                >
                                    <Upload size={20} />
                                    사진 업로드하기
                                </button>
                                <button className="border border-gray-200 bg-white text-black px-8 py-4 rounded-2xl flex items-center justify-center gap-3 hover:bg-gray-50 transition-colors font-medium">
                                    샘플 리포트 확인
                                </button>
                            </div>
                            <input
                                type="file"
                                accept="image/*"
                                ref={fileInputRef}
                                className="hidden"
                                onChange={handleImageUpload}
                            />
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full pt-12">
                                {[
                                    { icon: <Zap size={24} />, label: "공간 객체 인식" },
                                    { icon: <Palette size={24} />, label: "팔레트 추출" },
                                    { icon: <BarChart3 size={24} />, label: "디자인 수치화" },
                                    { icon: <Wand2 size={24} />, label: "AI 리터칭" }
                                ].map((item, i) => (
                                    <div key={i} className="p-4 bg-white rounded-2xl border border-gray-100 shadow-sm text-center">
                                        <span className="block mb-2 text-gold flex justify-center">{item.icon}</span>
                                        <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">{item.label}</span>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    )}

                    {state === AppState.UPLOADING && selectedImage && (
                        <motion.div
                            key="uploading"
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="max-w-4xl mx-auto flex flex-col items-center gap-8"
                        >
                            <div className="relative group w-full aspect-[4/3] max-h-[500px] overflow-hidden rounded-3xl border-4 border-white shadow-2xl">
                                <img src={selectedImage} alt="Uploaded" className="w-full h-full object-cover" />
                            </div>
                            <div className="flex gap-4">
                                <button
                                    onClick={reset}
                                    className="px-8 py-3 rounded-xl border border-gray-200 font-medium hover:bg-gray-50 transition-colors"
                                >
                                    사진 변경
                                </button>
                                <button
                                    onClick={startAnalysis}
                                    className="bg-black text-white px-10 py-3 rounded-xl font-semibold flex items-center gap-2 hover:bg-gray-800 transition-colors shadow-lg"
                                >
                                    AI 분석 시작
                                    <Zap size={16} />
                                </button>
                            </div>
                        </motion.div>
                    )}

                    {(state === AppState.ANALYZING || isLoading) && (
                        <motion.div
                            key="loading"
                            className="flex flex-col items-center justify-center min-h-[60vh] gap-6 text-black"
                        >
                            <div className="relative">
                                <div className="w-20 h-20 border-4 border-gray-100 border-t-black rounded-full animate-spin"></div>
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <div className="w-10 h-10 bg-black rounded-full animate-pulse"></div>
                                </div>
                            </div>
                            <div className="text-center">
                                <h3 className="text-2xl font-semibold mb-2">{loadingStep}</h3>
                                <p className="text-gray-500 animate-pulse font-light">AI가 당신의 공간을 섬세하게 분석하고 있습니다...</p>
                            </div>
                        </motion.div>
                    )}

                    {state === AppState.RESULT && analysis && (
                        <motion.div
                            key="result"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="grid grid-cols-1 lg:grid-cols-12 gap-12"
                        >
                            <div className="lg:col-span-7 space-y-8">
                                <div className="relative rounded-3xl overflow-hidden shadow-xl border border-gray-100 bg-white p-2">
                                    <img src={selectedImage!} alt="Original" className="w-full rounded-2xl" />
                                    <div className="absolute top-6 left-6 flex flex-col gap-2">
                                        <span className="bg-black/80 backdrop-blur-md text-white text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full w-fit">
                                            스타일: {analysis.styleName}
                                        </span>
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm">
                                        <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400 mb-6 font-bold">추출된 컬러 팔레트</h4>
                                        <div className="flex h-20 rounded-2xl overflow-hidden shadow-inner">
                                            {analysis.palette.map((color, idx) => (
                                                <div
                                                    key={idx}
                                                    className="flex-grow group relative cursor-pointer"
                                                    style={{ backgroundColor: color }}
                                                >
                                                </div>
                                            ))}
                                        </div>
                                        <div className="mt-4 flex flex-wrap gap-3">
                                            {analysis.palette.map((color, idx) => (
                                                <span key={idx} className="text-[10px] font-mono text-gray-400 uppercase tracking-widest">{color}</span>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm">
                                        <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400 mb-6 font-bold">감지된 핵심 요소</h4>
                                        <div className="space-y-4 max-h-[200px] overflow-y-auto pr-2 custom-scrollbar">
                                            {analysis.elements.map((el, idx) => (
                                                <div key={idx} className="flex items-start gap-4 p-4 rounded-xl bg-gray-50/50 hover:bg-gray-50 transition-colors">
                                                    <div className={`w-2 h-2 rounded-full mt-2 ${el.score > 80 ? 'bg-green-400' : 'bg-yellow-400'}`}></div>
                                                    <div>
                                                        <p className="text-xs font-bold">{el.item}</p>
                                                        <p className="text-[11px] text-gray-500 leading-relaxed font-light">{el.feedback}</p>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="lg:col-span-5 space-y-8">
                                <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm relative overflow-hidden text-black">
                                    <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400 mb-3">전문화된 디자인 점수</h4>
                                    <p className="text-gray-500 text-sm mb-6 leading-relaxed font-light">{analysis.description}</p>
                                    <RadarChart data={analysis.scores} />
                                </div>

                                <div className="space-y-4">
                                    <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400">AI 디자인 개선 솔루션</h4>
                                    {analysis.suggestions.map((s, idx) => (
                                        <div
                                            key={idx}
                                            className="group bg-white p-6 rounded-3xl border border-gray-100 shadow-sm hover:border-black transition-all cursor-pointer"
                                            onClick={() => handleRetouch(s.description)}
                                        >
                                            <div className="flex justify-between items-center mb-3">
                                                <span className="text-[10px] font-bold text-blue-600 bg-blue-50 px-3 py-1 rounded-full uppercase tracking-widest">
                                                    {s.actionType}
                                                </span>
                                                <Zap size={16} className="text-gray-200 group-hover:text-black transition-colors" />
                                            </div>
                                            <h5 className="font-bold text-lg mb-1">{s.title}</h5>
                                            <p className="text-sm text-gray-500 leading-relaxed font-light">{s.description}</p>
                                            <button className="mt-4 text-[10px] font-bold uppercase tracking-widest flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-all translate-x-[-10px] group-hover:translate-x-0">
                                                시뮬레이션 적용 <span>→</span>
                                            </button>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    )}

                    {state === AppState.RETOUCHING && retouchedImage && (
                        <motion.div
                            key="retouching"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="max-w-5xl mx-auto space-y-12"
                        >
                            <div className="flex items-center justify-between">
                                <button
                                    onClick={() => setState(AppState.RESULT)}
                                    className="flex items-center gap-2 text-xs font-bold text-gray-400 hover:text-black transition-colors uppercase tracking-widest"
                                >
                                    ← 분석 리포트로 돌아가기
                                </button>
                                <h3 className="text-3xl font-serif">디자인 변경 시뮬레이션</h3>
                                <div className="w-24"></div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                                <div className="space-y-4 text-center">
                                    <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400">원본 공간 구조</span>
                                    <div className="rounded-3xl overflow-hidden border border-gray-100 shadow-lg grayscale-[0.3]">
                                        <img src={selectedImage!} alt="Before" className="w-full h-full object-cover" />
                                    </div>
                                </div>
                                <div className="space-y-4 text-center">
                                    <span className="text-[10px] font-bold uppercase tracking-widest text-blue-600">AI 강화 공간 예측</span>
                                    <div className="rounded-3xl overflow-hidden border-2 border-blue-100 shadow-2xl relative">
                                        <img src={retouchedImage} alt="After" className="w-full h-full object-cover" />
                                        <div className="absolute bottom-6 right-6 bg-white/90 backdrop-blur-md px-5 py-2 rounded-full flex items-center gap-3 shadow-lg">
                                            <div className="w-2 h-2 bg-blue-500 rounded-full animate-ping"></div>
                                            <span className="text-[10px] font-bold uppercase tracking-widest">Visual Concept</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-white p-12 rounded-[50px] border border-gray-100 text-center space-y-8 shadow-sm text-black">
                                <h4 className="text-3xl font-bold">이 공간의 변화가 마음에 드시나요?</h4>
                                <p className="text-gray-500 max-w-xl mx-auto font-light leading-relaxed">
                                    정소연 디자이너의 전문 파트너 네트워크를 통해 이 비전을 실제 가구 소싱과 시공 도면으로 구현해 드립니다.
                                </p>
                                <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                                    <button className="bg-black text-white px-10 py-5 rounded-2xl font-bold hover:scale-105 transition-transform shadow-xl">
                                        디자이너 상담 신청
                                    </button>
                                    <button
                                        onClick={() => {
                                            const link = document.createElement('a');
                                            link.href = retouchedImage;
                                            link.download = 'designlens-retouch.png';
                                            link.click();
                                        }}
                                        className="border border-gray-200 px-10 py-5 rounded-2xl font-bold hover:bg-gray-50 transition-colors"
                                    >
                                        시뮬레이션 이미지 저장
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </main>

            {/* Footer */}
            <footer className="py-12 px-6 md:px-12 border-t border-gray-100 mt-auto bg-white">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
                    <div className="flex flex-col gap-2">
                        <div className="flex items-center gap-2">
                            <Camera size={24} className="text-black" />
                            <span className="text-lg font-bold text-black border-black border-b">DesignLens</span>
                        </div>
                        <p className="text-[10px] text-gray-400 uppercase tracking-widest">© 2024 DesignLens AI. 모든 권리 보유.</p>
                    </div>
                    <div className="flex gap-10 text-[10px] font-bold text-gray-400 uppercase tracking-widest">
                        <a href="#" className="hover:text-black">Privacy</a>
                        <a href="#" className="hover:text-black">Terms</a>
                        <a href="#" className="hover:text-black">API Documentation</a>
                        <a href="#" className="hover:text-black text-black border-b border-black">Contact</a>
                    </div>
                </div>
            </footer>
        </motion.div>
    );
};

export default DesignLens;
