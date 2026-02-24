"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const cryptoIcons = [
  { name: "Bitcoin", icon: "/coin/Image (3).png", color: "#F7931A" },
  { name: "Ethereum", icon: "/coin/Image (4).png", color: "#627EEA" },
  { name: "Stellar", icon: "/Stellar.png", color: "#14B6E7" },
  { name: "USDC", icon: "/coin/Image (1).png", color: "#2775CA" },
  { name: "USDT", icon: "/coin/Image.png", color: "#26A17B" },
];

export default function CryptoIconsRow() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full mb-8"
    >
      <div className="flex items-center justify-center gap-4 sm:gap-6 py-8 px-4 bg-gradient-to-r from-transparent via-white/[0.02] to-transparent border-y border-white/[0.06]">
        {cryptoIcons.map((crypto, index) => (
          <motion.div
            key={crypto.name}
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.4 }}
            whileHover={{ scale: 1.1, y: -5 }}
            className="relative group cursor-pointer"
          >
            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-to-br from-white/10 to-white/5 border border-white/10 flex items-center justify-center shadow-lg group-hover:shadow-2xl transition-all duration-300">
              <Image
                src={crypto.icon}
                alt={crypto.name}
                width={48}
                height={48}
                className="w-10 h-10 sm:w-12 sm:h-12 object-contain"
              />
            </div>
            {/* Tooltip */}
            <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
              <span className="text-xs text-white/70 whitespace-nowrap">{crypto.name}</span>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
