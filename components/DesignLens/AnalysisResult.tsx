
import React from 'react';
import { motion } from 'framer-motion';
import { RefreshCw, Palette, Layout, Lightbulb, ShieldCheck, Layers, Info } from 'lucide-react';
import { AnalysisData } from './DesignLens';

interface AnalysisResultProps {
    image: string;
    data: AnalysisData;
    onRestart: () => void;
}

const AnalysisResult: React.FC<AnalysisResultProps> = ({ image, data, onRestart }) => {
    return (
        <div className="w-full max-w-7xl px-6 md:px-10 grid grid-cols-1 lg:grid-cols-12 gap-12 overflow-y-auto max-h-[90vh] py-16 scrollbar-hide">

            {/* Left: Image with Overlays */}
            <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="lg:col-span-7 relative sticky top-0"
            >
                <div className="rounded-sm overflow-hidden border border-white/10 shadow-2xl relative group">
                    <img src={image} className="w-full h-auto object-cover" alt="Analyzed Interior" />

                    {/* AI Hotspots */}
                    {data.hotspots.map((spot, idx) => (
                        <div
                            key={idx}
                            className="absolute group-hover:scale-110 transition-transform cursor-pointer"
                            style={{ top: spot.top, left: spot.left }}
                        >
                            <div className="w-5 h-5 bg-gold rounded-full animate-pulse shadow-[0_0_15px_#c5a059] flex items-center justify-center">
                                <div className="w-2 h-2 bg-white rounded-full" />
                            </div>
                            <div className="absolute top-8 left-1/2 -translate-x-1/2 bg-black/95 backdrop-blur-xl border border-white/10 p-5 rounded-sm w-64 opacity-0 group-hover:opacity-100 transition-all pointer-events-none z-30 shadow-2xl">
                                <p className="text-[10px] text-gold uppercase tracking-[0.2em] mb-2 font-bold">{spot.label}</p>
                                <p className="text-[13px] text-white/80 font-light leading-relaxed">{spot.comment}</p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Summary Overlay for Large Screen */}
                <div className="mt-8 bg-white/[0.03] border-l-2 border-gold p-8 rounded-sm">
                    <h4 className="text-[11px] uppercase tracking-[0.3em] text-gold font-bold mb-4 flex items-center gap-2">
                        <Info size={16} /> Spatial Summary
                    </h4>
                    <p className="text-xl font-serif leading-relaxed italic text-white/90">
                        "{data.summary}"
                    </p>
                </div>
            </motion.div>

            {/* Right: Analysis Dashboard */}
            <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="lg:col-span-5 flex flex-col gap-12 pb-10"
            >
                <header>
                    <div className="flex justify-between items-start mb-3">
                        <h3 className="text-[11px] uppercase tracking-[0.5em] text-gold font-bold">Deep Design Lens Analysis</h3>
                        <button onClick={onRestart} className="text-white/30 hover:text-white transition-all hover:rotate-180 duration-700">
                            <RefreshCw size={20} />
                        </button>
                    </div>
                    <h2 className="text-5xl font-serif leading-tight">{data.style}</h2>
                    <div className="flex items-center gap-4 mt-4">
                        <div className="px-3 py-1 border border-white/10 rounded-full text-[10px] uppercase tracking-widest text-white/50">Gemini 1.5 Pro Engaged</div>
                        <div className="text-gold font-bold text-xs uppercase tracking-widest">Confidence {data.confidence}%</div>
                    </div>
                </header>

                {/* Professional Metrics */}
                <div className="space-y-8">
                    {data.metrics.map((m, i) => (
                        <div key={i} className="space-y-3">
                            <div className="flex justify-between text-[11px] uppercase tracking-widest">
                                <span className="flex items-center gap-2 text-white/70 font-semibold">
                                    {m.name.includes('조명') ? <Lightbulb size={16} /> : m.name.includes('활용') ? <Layout size={16} /> : <ShieldCheck size={16} />}
                                    {m.name}
                                </span>
                                <span className="text-gold font-bold text-sm">{m.score}/100</span>
                            </div>
                            <p className="text-[12px] text-white/40 leading-relaxed font-light">{m.description}</p>
                            <div className="h-[2px] bg-white/5 w-full relative">
                                <motion.div
                                    initial={{ width: 0 }}
                                    animate={{ width: `${m.score}%` }}
                                    transition={{ duration: 1.5, delay: 0.5 + i * 0.2, ease: "circOut" }}
                                    className="absolute top-0 left-0 h-full bg-gold"
                                />
                            </div>
                        </div>
                    ))}
                </div>

                {/* Materials */}
                <div>
                    <h4 className="text-[11px] uppercase tracking-[0.3em] text-gold font-bold mb-6 flex items-center gap-2">
                        <Layers size={16} /> Detected Materials
                    </h4>
                    <div className="flex flex-wrap gap-3">
                        {data.materials?.map((mat, i) => (
                            <span key={i} className="px-4 py-2 bg-white/5 border border-white/10 text-[11px] font-light tracking-wide rounded-sm">{mat}</span>
                        ))}
                    </div>
                </div>

                {/* Expanded Color Palette */}
                <div>
                    <h4 className="text-[11px] uppercase tracking-[0.3em] text-gold font-bold mb-6 flex items-center gap-2">
                        <Palette size={16} /> Extracting Chromatic DNA
                    </h4>
                    <div className="flex gap-4">
                        {data.colors.map((c, i) => (
                            <div key={i} className="flex flex-col items-center gap-3">
                                <motion.div
                                    initial={{ scale: 0, opacity: 0 }}
                                    animate={{ scale: 1, opacity: 1 }}
                                    transition={{ delay: 1 + i * 0.1 }}
                                    className="w-12 h-12 rounded-full border border-white/10 shadow-2xl"
                                    style={{ backgroundColor: c }}
                                />
                                <span className="text-[9px] font-mono text-white/30 uppercase tracking-tighter">{c}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Advanced Recommendations */}
                <div className="space-y-6 pt-6 border-t border-white/10">
                    <h4 className="text-[11px] uppercase tracking-[0.3em] text-gold font-bold flex items-center gap-2">
                        <Lightbulb size={16} className="text-gold" /> Design Correction & Insights
                    </h4>
                    <div className="grid gap-4">
                        {data.recommendations?.map((rec, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 1.5 + i * 0.2 }}
                                className="flex gap-4 p-5 bg-white/[0.02] border border-white/5 hover:border-white/20 transition-all group"
                            >
                                <div className="text-gold font-serif text-2xl opacity-30 group-hover:opacity-100 transition-opacity">0{i + 1}</div>
                                <p className="text-[14px] font-light leading-relaxed text-white/80">{rec}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

export default AnalysisResult;
