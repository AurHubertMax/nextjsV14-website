"use client"

import { motion, AnimatePresence } from 'framer-motion';

export default function Template({ children }) {
    return (
        <AnimatePresence mode="wait">
            <motion.div
                initial={{ y: 100, opacity: 0}}
                animate={{ y: 0, opacity: 1}}
                transition={{ease: "backOut", duration: 0.75}}
            >
                {children}
            </motion.div>
        </AnimatePresence>
    );
}