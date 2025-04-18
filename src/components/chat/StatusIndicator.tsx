"use client";

import { motion } from "framer-motion";

interface StatusIndicatorProps {
    status: "online" | "away" | "offline";
    size?: "sm" | "md" | "lg";
}

export default function StatusIndicator({
    status,
    size = "md",
}: StatusIndicatorProps) {
    const sizeClasses = {
        sm: "w-2 h-2",
        md: "w-3 h-3",
        lg: "w-4 h-4",
    };

    const colors = {
        online: "bg-green-500",
        away: "bg-orange-500",
        offline: "bg-gray-400",
    };

    return (
        <motion.span
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className={`${sizeClasses[size]} ${colors[status]} rounded-full border-2 border-white`}
        />
    );
}
