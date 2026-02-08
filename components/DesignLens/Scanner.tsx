
import React, { useEffect } from 'react';
import { motion } from 'framer-motion';

interface ScannerProps {
    image: string;
    onComplete: () => void;
}

const Scanner: React.FC<ScannerProps> = ({ image, onComplete }) => {
    useEffect(() => {
        const timer = setTimeout(onComplete, 4000);
        return () => clearTimeout(timer);
    }, [onComplete]);

    return (
        <div className="relative max-w-4xl w-full aspect-[4/3] overflow-hidden rounded-sm border border-white/10">
            <img src={image} className="w-full h-full object-cover opacity-40 brightness-50" alt="Scanning" />

            {/* Scanning Line */}
            <motion.div
                initial={{ top: '0%' }}
                animate={{ top: '100%' }}
                transition={{ duration: 4, ease: "linear" }}
                className="absolute left-0 right-0 h-[2px] bg-gold z-20 shadow-[0_0_20px_#c5a059]"
            />

            {/* Grid Overlay */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(197,160,89,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(197,160,89,0.05)_1px,transparent_1px)] bg-[size:40px_40px] z-10" />

            <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                    <motion.div
                        animate={{ opacity: [0, 1, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                        className="text-[10px] uppercase tracking-[0.4em] text-gold mb-4"
                    >
                        AI Engine Analyzing Spatial Hierarchy...
                    </motion.div>
                    <div className="flex gap-1 justify-center">
                        {[0, 1, 2].map(i => (
                            <motion.div
                                key={i}
                                animate={{ scaleY: [1, 2, 1] }}
                                transition={{ duration: 0.8, repeat: Infinity, delay: i * 0.2 }}
                                className="w-[2px] h-4 bg-gold/50"
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Scanner;
