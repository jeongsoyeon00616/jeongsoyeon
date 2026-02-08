
import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, RefreshCw, Palette, Layout, Lightbulb, ShieldCheck } from 'lucide-react';

interface AnalysisResultProps {
    image: string;
    onRestart: () => void;
}

const AnalysisResult: React.FC<AnalysisResultProps> = ({ image, onRestart }) => {
    const metrics = [
        { name: '조화도 (Cohesion)', score: 88, icon: <ShieldCheck size={16} /> },
        { name: '공간 활용 (Utility)', score: 72, icon: <Layout size={16} /> },
        { name: '조명 설계 (Lighting)', score: 91, icon: <Lightbulb size={16} /> },
    ];

    const colors = ['#f4f1ea', '#d9cfc1', '#8c7e6d', '#3e362e', '#c5a059'];

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
                    <div className="absolute top-[30%] left-[45%] group-hover:scale-110 transition-transform">
                        <div className="w-4 h-4 bg-gold rounded-full animate-pulse shadow-[0_0_10px_#c5a059]" />
                        <div className="absolute top-6 left-0 bg-black/80 backdrop-blur-md border border-white/10 p-3 rounded-sm w-48 opacity-0 group-hover:opacity-100 transition-opacity">
                            <p className="text-[10px] text-gold uppercase tracking-widest mb-1 font-bold">Object: Sofa</p>
                            <p className="text-[11px] text-white/70 font-light">패브릭 질감이 미니멀 컨셉과 아주 조화롭습니다.</p>
                        </div>
                    </div>
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
                        <h3 className="text-[10px] uppercase tracking-[0.4em] text-gold font-bold">Design Analysis Report</h3>
                        <button onClick={onRestart} className="text-white/30 hover:text-white transition-colors">
                            <RefreshCw size={16} />
                        </button>
                    </div>
                    <h2 className="text-4xl font-serif">Luxury Minimalist <span className="italic text-white/50">& Modern</span></h2>
                    <p className="text-white/40 text-[11px] mt-2 uppercase tracking-widest">Confidence Level: 98.4%</p>
                </header>

                {/* Scores */}
                <div className="space-y-6">
                    {metrics.map((m, i) => (
                        <div key={i} className="space-y-2">
                            <div className="flex justify-between text-[11px] uppercase tracking-widest">
                                <span className="flex items-center gap-2 text-white/60">{m.icon} {m.name}</span>
                                <span className="text-gold font-bold">{m.score}%</span>
                            </div>
                            <div className="h-[1px] bg-white/10 w-full relative">
                                <motion.div
                                    initial={{ width: 0 }}
                                    animate={{ width: `${m.score}%` }}
                                    transition={{ duration: 1, delay: 0.5 + i * 0.1 }}
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
                        {colors.map((c, i) => (
                            <motion.div
                                key={i}
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                transition={{ delay: 1 + i * 0.1 }}
                                className="w-10 h-10 rounded-full border border-white/10"
                                style={{ backgroundColor: c }}
                                title={c}
                            />
                        ))}
                    </div>
                </div>

                {/* Suggestion */}
                <div className="bg-white/5 border border-white/10 p-6 rounded-sm">
                    <h4 className="text-[10px] uppercase tracking-[0.4em] text-gold font-bold mb-3 flex items-center gap-2">
                        <Lightbulb size={14} /> Expert Recommendation
                    </h4>
                    <p className="text-sm font-light leading-relaxed text-white/80">
                        "전체적으로 균형이 완벽합니다. 다만 창가의 화분을 조금 더 큰 무늬의 관엽식물로 교정한다면 공간의 생동감이 극대화될 것입니다."
                    </p>
                </div>
            </motion.div>
        </div>
    );
};

export default AnalysisResult;
