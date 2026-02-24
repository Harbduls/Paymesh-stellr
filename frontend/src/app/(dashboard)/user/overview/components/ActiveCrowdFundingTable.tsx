"use client";

import React from "react";
import { motion } from "framer-motion";
import { TrendingUp } from "lucide-react";

type Fundraiser = {
  id: string;
  name: string;
  progress: number;
};

const MOCK_FUNDRAISERS: Fundraiser[] = [
  { id: "1", name: "ARQ Trip", progress: 50 },
  { id: "2", name: "ARQ Trip", progress: 50 },
  { id: "3", name: "Project", progress: 60 },
  { id: "4", name: "School", progress: 20 },
];

export default function ActiveCrowdFundingTable() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="w-full"
    >
      <div className="bg-[#0A0B0F]/60 backdrop-blur-2xl rounded-2xl border border-white/[0.06] shadow-[0_8px_40px_rgba(0,0,0,0.4)] overflow-hidden">
        {/* Header */}
        <div className="px-6 py-4 border-b border-white/[0.04] flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#5B63D6] to-[#4149B8] flex items-center justify-center">
              <TrendingUp className="w-5 h-5 text-white" />
            </div>
            <h2 className="text-white text-lg font-bold">Active Crowd Funding</h2>
          </div>
          <button className="text-xs text-[#5B63D6] hover:text-[#7C83EF] font-semibold transition-colors">
            View all
          </button>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-white/[0.04]">
                <th className="px-6 py-3 text-left text-xs font-semibold text-[#5A6578] uppercase tracking-wider">
                  Name
                </th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-[#5A6578] uppercase tracking-wider">
                  Progress
                </th>
              </tr>
            </thead>
            <tbody>
              {MOCK_FUNDRAISERS.map((fundraiser, index) => (
                <motion.tr
                  key={fundraiser.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="border-b border-white/[0.02] hover:bg-white/[0.02] transition-colors cursor-pointer"
                >
                  <td className="px-6 py-4 text-sm text-white font-medium">
                    {fundraiser.name}
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="flex-1 max-w-xs">
                        <div className="relative w-full h-2 rounded-full bg-white/[0.06] overflow-hidden">
                          <motion.div
                            className="absolute inset-y-0 left-0 rounded-full bg-gradient-to-r from-[#5B63D6] to-[#7C83EF]"
                            initial={{ width: 0 }}
                            animate={{ width: `${fundraiser.progress}%` }}
                            transition={{ delay: 0.3 + index * 0.1, duration: 0.8, ease: "easeOut" }}
                          />
                        </div>
                      </div>
                      <span className="text-xs text-[#7A8BA0] font-medium min-w-[80px]">
                        {fundraiser.progress}% Completed
                      </span>
                    </div>
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </motion.div>
  );
}
