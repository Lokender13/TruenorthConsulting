import { motion } from 'framer-motion';

interface FloatingOrb {
    size: number;
    x: string;
    y: string;
    color: string;
    delay: number;
    duration: number;
}

interface FloatingOrbsProps {
    orbs?: FloatingOrb[];
}

const defaultOrbs: FloatingOrb[] = [
    { size: 300, x: '10%', y: '20%', color: 'rgba(255,255,255,0.03)', delay: 0, duration: 15 },
    { size: 200, x: '80%', y: '60%', color: 'rgba(255,255,255,0.02)', delay: 2, duration: 12 },
    { size: 400, x: '60%', y: '10%', color: 'rgba(255,255,255,0.015)', delay: 4, duration: 18 },
    { size: 150, x: '20%', y: '70%', color: 'rgba(255,255,255,0.025)', delay: 1, duration: 10 },
    { size: 250, x: '90%', y: '30%', color: 'rgba(255,255,255,0.02)', delay: 3, duration: 14 },
];

/**
 * FloatingOrbs - Animated background orbs that float gently
 * Creates depth and ambient movement
 */
const FloatingOrbs = ({ orbs = defaultOrbs }: FloatingOrbsProps) => {
    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {orbs.map((orb, index) => (
                <motion.div
                    key={index}
                    className="absolute rounded-full blur-[100px] will-change-transform"
                    style={{
                        width: orb.size,
                        height: orb.size,
                        left: orb.x,
                        top: orb.y,
                        background: orb.color,
                    }}
                    animate={{
                        y: [0, -30, 0, 20, 0],
                        x: [0, 20, 0, -15, 0],
                        scale: [1, 1.1, 1, 0.95, 1],
                    }}
                    transition={{
                        duration: orb.duration,
                        delay: orb.delay,
                        repeat: Infinity,
                        ease: 'easeInOut',
                    }}
                />
            ))}
        </div>
    );
};

export default FloatingOrbs;
