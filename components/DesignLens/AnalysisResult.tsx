
import React from 'react';
import { motion } from 'framer-motion';
import { RefreshCw, Palette, Layout, Lightbulb, ShieldCheck } from 'lucide-react';
import { AnalysisData } from './DesignLens';

interface AnalysisResultProps {
    image: string;
    data: AnalysisData;
    onRestart: () => void;
}

const AnalysisResult: React.FC<AnalysisResultProps> = ({ image, data, onRestart }) => {
    return (
        <div className="w-full max-w-6xl px-10 grid grid-cols-1 lg:grid-cols-12 gap-12 overflow-y-auto max-h-[85vh] py-10">
            {/* Left: Image with Overlays */}
            <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="lg:col-span-7 relative"
            >
                <div className="rounded-sm overflow-hidden border border-white/10 shadow-2xl relative group">
                    <img src={image} className="w-full object-cover" alt="Analyzed Interior" />

                    {/* AI Hotspots */}
                    {data.hotspots.map((spot, idx) => (
                        <div
                            key={idx}
                            className="absolute group-hover:scale-110 transition-transform cursor-pointer"
                            style={{ top: spot.top, left: spot.left }}
                        >
                            <div className="w-4 h-4 bg-gold rounded-full animate-pulse shadow-[0_0_10px_#c5a059]" />
                            <div className="absolute top-6 left-1/2 -translate-x-1/2 bg-black/90 backdrop-blur-md border border-white/10 p-4 rounded-sm w-56 opacity-0 group-hover:opacity-100 transition-all pointer-events-none z-30">
                                <p className="text-[10px] text-gold uppercase tracking-widest mb-1 font-bold">{spot.label}</p>
                                <p className="text-[12px] text-white/80 font-light leading-relaxed">{spot.comment}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </motion.div>

            {/* Right: Analysis Dashboard */}
            <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="lg:col-span-5 flex flex-col gap-10"
            >
                <header>
                    <div className="flex justify-between items-start mb-2">
                        <h3 className="text-[10px] uppercase tracking-[0.4em] text-gold font-bold">Real-time Gemini Analysis</h3>
                        <button onClick={onRestart} className="text-white/30 hover:text-white transition-colors">
                            <RefreshCw size={16} />
                        </button>
                    </div>
                    <h2 className="text-4xl font-serif">{data.style} <span className="italic text-white/50">& Expertise</span></h2>
                    <p className="text-white/40 text-[11px] mt-2 uppercase tracking-widest">Confidence Level: {data.confidence}%</p>
                </header>

                {/* Scores */}
                <div className="space-y-6">
                    {data.metrics.map((m, i) => (
                        <div key={i} className="space-y-2">
                            <div className="flex justify-between text-[11px] uppercase tracking-widest">
                                <span className="flex items-center gap-2 text-white/60">
                                    {m.name.includes('조명') ? <Lightbulb size={14} /> : m.name.includes('활용') ? <Layout size={14} /> : <ShieldCheck size={14} />}
                                    {m.name}
                                </span>
                                <span className="text-gold font-bold">{m.score}%</span>
                            </div>
                            <div className="h-[1px] bg-white/10 w-full relative">
                                <motion.div
                                    initial={{ width: 0 }}
                                    animate={{ width: `${m.score}%` }}
                                    transition={{ duration: 1.2, delay: 0.3 + i * 0.1 }}
                                    className="absolute top-0 left-0 h-full bg-gold"
                                />
                            </div>
                        </div>
                    ))}
                </div>

                {/* Color Palette */}
                <div>
                    <h4 className="text-[10px] uppercase tracking-[0.4em] text-gold font-bold mb-6 flex items-center gap-2">
                        <Palette size={14} /> Spatial Color Palette
                    </h4>
                    <div className="flex gap-4">
                        {data.colors.map((c, i) => (
                            <motion.div
                                key={i}
                                initial={{ scale: 0, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                transition={{ delay: 0.8 + i * 0.1 }}
                                className="w-10 h-10 rounded-full border border-white/20 shadow-lg"
                                style={{ backgroundColor: c }}
                                title={c}
                            />
                        ))}
                    </div>
                </div>

                {/* Suggestion */}
                <div className="bg-white/5 border border-white/10 p-8 rounded-sm relative overflow-hidden group">
                    <div className="absolute top-0 left-0 w-[2px] h-full bg-gold/50" />
                    <h4 className="text-[10px] uppercase tracking-[0.4em] text-gold font-bold mb-4 flex items-center gap-2">
                        <Lightbulb size={14} className="text-gold" /> AI Designer Recommendation
                    </h4>
                    <p className="text-[14px] font-light leading-relaxed text-white/90 italic">
                        "{data.recommendation}"
                    </p>
                </div>
            </motion.div>
        </div>
    );
};

export default AnalysisResult;
