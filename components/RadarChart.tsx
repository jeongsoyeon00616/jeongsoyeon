
import React from 'react';

interface RadarChartProps {
    data: { [key: string]: number };
}

const RadarChart: React.FC<RadarChartProps> = ({ data }) => {
    const entries = Object.entries(data);
    const total = entries.length;
    const radius = 80;
    const centerX = 120;
    const centerY = 120;

    const points = entries.map(([key, value], i) => {
        const angle = (Math.PI * 2 * i) / total - Math.PI / 2;
        const x = centerX + radius * ((value as number) / 100) * Math.cos(angle);
        const y = centerY + radius * ((value as number) / 100) * Math.sin(angle);
        return `${x},${y}`;
    }).join(' ');

    const gridLevels = [0.2, 0.4, 0.6, 0.8, 1];

    return (
        <div className="flex justify-center items-center py-4">
            <svg width="240" height="240" viewBox="0 0 240 240">
                {/* Grid */}
                {gridLevels.map((level, idx) => (
                    <polygon
                        key={idx}
                        points={entries.map((_, i) => {
                            const angle = (Math.PI * 2 * i) / total - Math.PI / 2;
                            const x = centerX + radius * level * Math.cos(angle);
                            const y = centerY + radius * level * Math.sin(angle);
                            return `${x},${y}`;
                        }).join(' ')}
                        fill="none"
                        stroke="#e5e7eb"
                        strokeWidth="1"
                    />
                ))}
                {/* Axes */}
                {entries.map(([key, value], i) => {
                    const angle = (Math.PI * 2 * i) / total - Math.PI / 2;
                    const x = centerX + radius * Math.cos(angle);
                    const y = centerY + radius * Math.sin(angle);
                    return (
                        <g key={i}>
                            <line x1={centerX} y1={centerY} x2={x} y2={y} stroke="#e5e7eb" strokeWidth="1" />
                            <text
                                x={centerX + (radius + 20) * Math.cos(angle)}
                                y={centerY + (radius + 15) * Math.sin(angle)}
                                textAnchor="middle"
                                fontSize="10"
                                className="fill-gray-400 font-bold uppercase tracking-widest"
                            >
                                {key}
                            </text>
                        </g>
                    );
                })}
                {/* Data Polygon */}
                <polygon
                    points={points}
                    fill="rgba(0, 0, 0, 0.1)"
                    stroke="black"
                    strokeWidth="2"
                />
            </svg>
        </div>
    );
};

export default RadarChart;
