import { motion } from 'framer-motion';

interface TextRevealProps {
    children: string;
    className?: string;
    delay?: number;
}

/**
 * TextReveal - Reveals text word by word with stagger animation
 * Creates cinematic text entrance effect
 */
const TextReveal = ({ children, className = '', delay = 0 }: TextRevealProps) => {
    const words = children.split(' ');

    const container = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.08,
                delayChildren: delay,
            },
        },
    };

    const wordAnimation = {
        hidden: {
            opacity: 0,
            y: 50,
            rotateX: -90
        },
        visible: {
            opacity: 1,
            y: 0,
            rotateX: 0,
            transition: {
                duration: 0.5,
                ease: [0.215, 0.61, 0.355, 1] as const,
            },
        },
    };

    return (
        <motion.span
            className={`inline-block ${className}`}
            variants={container}
            initial="hidden"
            animate="visible"
            style={{ perspective: '1000px' }}
        >
            {words.map((word, index) => (
                <motion.span
                    key={index}
                    className="inline-block mr-[0.25em]"
                    variants={wordAnimation}
                    style={{ transformOrigin: 'top' }}
                >
                    {word}
                </motion.span>
            ))}
        </motion.span>
    );
};

export default TextReveal;
