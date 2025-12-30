import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../../contexts/ThemeContext';

const CreativeBackground: React.FC = () => {
    const { theme } = useTheme();
    const isDark = theme === 'dark';

    return (
        <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none select-none">
            {/* Base Color / Gradient */}
            <div className={`absolute inset-0 transition-colors duration-1000 ${isDark ? 'bg-black' : 'bg-[#FFFBF7]'}`} />

            {/* Moving Orbs Layer */}
            <div className="absolute inset-0">
                {/* Orb 1: Primary Accent */}
                <motion.div
                    animate={{
                        x: [0, 100, -50, 0],
                        y: [0, -100, 50, 0],
                        scale: [1, 1.2, 0.8, 1],
                    }}
                    transition={{
                        duration: 25,
                        repeat: Infinity,
                        ease: "linear"
                    }}
                    className={`absolute top-[-10%] right-[-10%] w-[60vw] h-[60vw] rounded-full blur-[120px] 
                        ${isDark ? 'bg-orange-500/10' : 'bg-orange-500/5'}`}
                />

                {/* Orb 2: Secondary Softness */}
                <motion.div
                    animate={{
                        x: [0, -120, 80, 0],
                        y: [0, 80, -120, 0],
                        scale: [1, 0.9, 1.1, 1],
                    }}
                    transition={{
                        duration: 30,
                        repeat: Infinity,
                        ease: "linear"
                    }}
                    className={`absolute bottom-[-20%] left-[-10%] w-[70vw] h-[70vw] rounded-full blur-[140px] 
                        ${isDark ? 'bg-blue-900/10' : 'bg-blue-100/30'}`}
                />

                {/* Orb 3: Middle Dynamic */}
                <motion.div
                    animate={{
                        x: [0, 200, -200, 0],
                        y: [0, 150, -150, 0],
                    }}
                    transition={{
                        duration: 40,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                    className={`absolute top-[40%] left-[30%] w-[400px] h-[400px] rounded-full blur-[100px] 
                        ${isDark ? 'bg-orange-600/5' : 'bg-orange-200/20'}`}
                />
            </div>

            {/* Pattern Overlay: Technical Grid */}
            <div
                className={`absolute inset-0 opacity-[0.2] ${isDark ? 'invert' : ''}`}
                style={{
                    backgroundImage: `radial-gradient(#000 0.5px, transparent 0.5px)`,
                    backgroundSize: '32px 32px'
                }}
            />

            {/* Texture Overlay: Cinematic Noise/Grain */}
            <svg className="fixed inset-0 w-full h-full opacity-[0.4] pointer-events-none mix-blend-soft-light">
                <filter id="noise">
                    <feTurbulence type="fractalNoise" baseFrequency="0.6" numOctaves="3" stitchTiles="stitch" />
                    <feColorMatrix type="saturate" values="0" />
                </filter>
                <rect width="100%" height="100%" filter="url(#noise)" />
            </svg>

            {/* Subtle Gradient Fog for edges */}
            <div className={`absolute inset-0 ${isDark
                ? 'bg-gradient-to-b from-black via-transparent to-black'
                : 'bg-gradient-to-b from-[#FFFBF7] via-transparent to-[#FFFBF7]'} opacity-50`}
            />
        </div>
    );
};

export default CreativeBackground;
