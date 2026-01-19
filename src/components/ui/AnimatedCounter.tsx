import { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

interface AnimatedCounterProps {
    target: number;
    suffix?: string;
    duration?: number;
    className?: string;
}

/**
 * AnimatedCounter - Counts up to target number when in view
 * Creates engaging number reveal effect
 */
const AnimatedCounter = ({
    target,
    suffix = '',
    duration = 2,
    className = '',
}: AnimatedCounterProps) => {
    const [count, setCount] = useState(0);
    const ref = useRef<HTMLSpanElement>(null);
    const isInView = useInView(ref, { once: true, margin: '-100px' });

    useEffect(() => {
        if (!isInView) return;

        let startTime: number;
        let animationFrame: number;

        const animate = (timestamp: number) => {
            if (!startTime) startTime = timestamp;
            const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);

            // Easing function for smooth deceleration
            const easeOutQuart = 1 - Math.pow(1 - progress, 4);
            setCount(Math.floor(easeOutQuart * target));

            if (progress < 1) {
                animationFrame = requestAnimationFrame(animate);
            } else {
                setCount(target);
            }
        };

        animationFrame = requestAnimationFrame(animate);
        return () => cancelAnimationFrame(animationFrame);
    }, [isInView, target, duration]);

    return (
        <motion.span
            ref={ref}
            className={className}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5, type: 'spring' }}
        >
            {count.toLocaleString()}{suffix}
        </motion.span>
    );
};

export default AnimatedCounter;
