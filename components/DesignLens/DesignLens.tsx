
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Upload, Scan, Palette, Layout, Lightbulb, CheckCircle2, X } from 'lucide-react';
import Scanner from './Scanner';
import AnalysisResult from './AnalysisResult';

const DesignLens: React.FC<{ onClose: () => void }> = ({ onClose }) => {
    const [stage, setStage] = useState<'upload' | 'scanning' | 'result'>('upload');
    const [image, setImage] = useState<string | null>(null);

    const handleUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (f) => {
                setImage(f.target?.result as string);
                setStage('scanning');
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
                            AI가 인테리어 스타일, 컬러 조화, 공간 가치를 정밀하게 스캔합니다.
                        </p>

                        <label className="group relative block cursor-pointer">
                            <input type="file" className="hidden" onChange={handleUpload} accept="image/*" />
                            <div className="border border-white/10 p-20 rounded-sm bg-white/5 hover:bg-white/10 transition-all duration-500 border-dashed group-hover:border-gold/50">
                                <Upload className="mx-auto mb-6 text-gold/50 group-hover:text-gold transition-colors" size={48} strokeWidth={1} />
                                <span className="text-xs uppercase tracking-[0.3em] text-white/40 group-hover:text-white transition-colors">Click to Upload Interior Photo</span>
                            </div>
                        </label>
                    </motion.div>
                )}

                {stage === 'scanning' && image && (
                    <Scanner image={image} onComplete={() => setStage('result')} />
                )}

                {stage === 'result' && image && (
                    <AnalysisResult image={image} onRestart={() => setStage('upload')} />
                )}
            </AnimatePresence>
        </motion.div>
    );
};

export default DesignLens;
