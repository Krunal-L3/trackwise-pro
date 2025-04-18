"use client";
import React from "react";
import { Clock } from "iconsax-reactjs";
import { motion } from "framer-motion";
import { twMerge } from "tailwind-merge";

function PersonalProductivity() {
    return (
        <div className="border border-gray-200 text-gray-500 w-full p-3 rounded-2xl">
            {/* header */}
            <div className="flex items-center justify-between">
                <div className="flex items-center text-sm gap-2">
                    <Clock size={18} />
                    <p className="text-gray-800 font-medium">
                        Personal Productivity
                    </p>
                </div>
                <button className="border border-gray-200 px-2 py-1 rounded-lg text-xs">
                    Weekly View
                </button>
            </div>

            <hr className="text-gray-200 my-4" />

            {/* content */}
            <div className="flex justify-between items-center">
                {/* Stats */}
                <div className="space-y-4">
                    <div>
                        <p className="text-sm text-gray-800 font-semibold">
                            12h 45m
                        </p>
                        <p className="text-[10px]">Time logged this week</p>
                    </div>
                    <div>
                        <p className="text-sm text-gray-800 font-semibold">
                            18 tasks
                        </p>
                        <p className="text-[10px]">Completed this week</p>
                    </div>
                </div>

                {/* Bar Chart */}
                <div className="flex gap-1.5 items-end h-20">
                    {[
                        "h-10",
                        "h-14",
                        "h-12",
                        "h-20",
                        "h-16",
                        "h-8",
                        "h-12",
                    ].map((height, i) => (
                        <motion.div
                            key={i}
                            initial={{ height: 0 }}
                            animate={{ height: "" }}
                            transition={{ duration: 0.2 + i * 0.1 }}
                            className={twMerge(
                                "w-2.5 rounded-sm",
                                height,
                                i % 2 === 0 ? "bg-primary" : "bg-accent"
                            )}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default PersonalProductivity;
