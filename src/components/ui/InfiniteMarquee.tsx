import { motion } from 'framer-motion';

interface MarqueeItem {
    text: string;
}

interface InfiniteMarqueeProps {
    items: MarqueeItem[];
    speed?: number;
    direction?: 'left' | 'right';
    className?: string;
}

/**
 * InfiniteMarquee - Smooth infinite scrolling text/logos
 * Creates professional agency-style scrolling banner
 */
const InfiniteMarquee = ({
    items,
    speed = 30,
    direction = 'left',
    className = ''
}: InfiniteMarqueeProps) => {
    // Double the items for seamless loop
    const duplicatedItems = [...items, ...items, ...items, ...items];

    return (
        <div className={`overflow-hidden ${className}`}>
            <motion.div
                className="flex whitespace-nowrap"
                animate={{
                    x: direction === 'left' ? [0, -50 + '%'] : [-50 + '%', 0],
                }}
                transition={{
                    duration: items.length * speed / 10,
                    repeat: Infinity,
                    ease: 'linear',
                }}
            >
                {duplicatedItems.map((item, index) => (
                    <span
                        key={index}
                        className="inline-flex items-center mx-8 text-4xl md:text-6xl lg:text-7xl font-serif font-bold"
                    >
                        {item.text}
                        <span className="mx-8 text-2xl opacity-30">✦</span>
                    </span>
                ))}
            </motion.div>
        </div>
    );
};

export default InfiniteMarquee;
