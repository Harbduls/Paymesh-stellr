"use client";

import React from "react";
import { motion } from "framer-motion";
import { Users } from "lucide-react";

type GroupStatus = "Active" | "Idle";

type Group = {
  id: string;
  name: string;
  members: number;
  status: GroupStatus;
};

const MOCK_GROUPS: Group[] = [
  { id: "1", name: "Thetaathon", members: 6, status: "Active" },
  { id: "2", name: "Thetaathon", members: 6, status: "Active" },
  { id: "3", name: "Hacktayou", members: 3, status: "Idle" },
  { id: "4", name: "DevSquad", members: 2, status: "Idle" },
];

const statusConfig = {
  Active: {
    color: "text-emerald-400",
    bg: "bg-emerald-400/10",
    border: "border-emerald-400/20",
  },
  Idle: {
    color: "text-slate-400",
    bg: "bg-slate-400/10",
    border: "border-slate-400/20",
  },
};

export default function YourGroupsTable() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.1 }}
      className="w-full"
    >
      <div className="bg-[#0A0B0F]/60 backdrop-blur-2xl rounded-2xl border border-white/[0.06] shadow-[0_8px_40px_rgba(0,0,0,0.4)] overflow-hidden">
        {/* Header */}
        <div className="px-6 py-4 border-b border-white/[0.04] flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#5B63D6] to-[#4149B8] flex items-center justify-center">
              <Users className="w-5 h-5 text-white" />
            </div>
            <h2 className="text-white text-lg font-bold">Your Groups</h2>
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
                  Members
                </th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-[#5A6578] uppercase tracking-wider">
                  Status
                </th>
              </tr>
            </thead>
            <tbody>
              {MOCK_GROUPS.map((group, index) => {
                const status = statusConfig[group.status];
                return (
                  <motion.tr
                    key={group.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="border-b border-white/[0.02] hover:bg-white/[0.02] transition-colors cursor-pointer"
                  >
                    <td className="px-6 py-4 text-sm text-white font-medium">
                      {group.name}
                    </td>
                    <td className="px-6 py-4 text-sm text-[#7A8BA0]">
                      {group.members}
                    </td>
                    <td className="px-6 py-4">
                      <span
                        className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium border ${status.bg} ${status.color} ${status.border}`}
                      >
                        {group.status}
                      </span>
                    </td>
                  </motion.tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </motion.div>
  );
}
