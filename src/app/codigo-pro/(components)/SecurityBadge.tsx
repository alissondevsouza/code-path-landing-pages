'use client';

import Image, { StaticImageData } from 'next/image';
import { motion } from 'framer-motion';

interface SecurityBadgeProps {
  icon: StaticImageData;
  text: string;
}
export default function SecurityBadge({ icon, text }: SecurityBadgeProps) {
    return (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          whileHover={{ scale: 1.05 }}
          className="flex flex-col items-center p-4 bg-black/20 rounded-xl hover:bg-[var(--primary-codigo-pro)] transition-all duration-300 group"
        >
          <div className={`relative w-16 h-16 mb-3 filter group-hover:brightness-125 transition-all invert rightness-100`}>
            <Image
              src={icon}
              alt={text}
              layout="fill"
              objectFit="contain"
              quality={100}
              className="pointer-events-none"
            />
          </div>
          <span className="text-center text-sm font-medium text-[var(--secondary-codigo-pro)] group-hover:text-white transition-colors">
            {text}
          </span>
          
          <div className="absolute inset-0 overflow-hidden rounded-xl pointer-events-none">
            <div className="absolute -inset-[2px] opacity-0 group-hover:opacity-100 transition-opacity">
              <div className="absolute inset-0 bg-[radial-gradient(200px_circle_at_var(--x)_var(--y),rgba(0,255,136,0.4),transparent)]"></div>
              <div className="absolute inset-0 bg-[rgba(0,255,136,0.05)]"></div>
            </div>
          </div>
        </motion.div>
      );
}