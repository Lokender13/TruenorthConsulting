import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';

const FloatingWhatsApp = () => {

    // Don't wrap with Link or anchor tag directly to avoid navigation conflicts if used inside another interactive element
    // But since it's fixed, it should be fine.

    return (
        <motion.a
            href="https://wa.me/971501420956"
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-8 right-8 z-[100] flex items-center gap-3 group"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1, duration: 0.5 }}
            whileHover={{ scale: 1.05 }}
        >
            {/* Tooltip Label */}
            <span className="bg-white text-zinc-900 px-4 py-2 rounded-xl shadow-xl text-xs font-bold uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none hidden md:block">
                Chat with us
            </span>

            {/* Button */}
            <div className="w-16 h-16 bg-[#25D366] rounded-full shadow-[0_10px_30px_rgba(37,211,102,0.4)] flex items-center justify-center text-white relative overflow-hidden transition-shadow duration-300 group-hover:shadow-[0_15px_40px_rgba(37,211,102,0.6)]">
                {/* Ripple Effect */}
                <div className="absolute inset-0 bg-white/20 rounded-full scale-0 opacity-0 group-hover:scale-150 group-hover:opacity-100 transition-all duration-700 ease-out"></div>

                <MessageCircle size={32} fill="white" className="relative z-10" />
            </div>
        </motion.a>
    );
};

export default FloatingWhatsApp;
