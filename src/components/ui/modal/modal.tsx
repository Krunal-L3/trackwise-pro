"use client";

import { AnimatePresence } from "framer-motion";
import type React from "react";

import { useEffect, useRef } from "react";
import { LuX } from "react-icons/lu";
import { twMerge } from "tailwind-merge";
import { motion } from "framer-motion";

type ModalProps = {
    isOpen: boolean;
    onClose: () => void;
    title: string;
    children: React.ReactNode;
    size?: "sm" | "md" | "lg";
};

export function Modal({
    isOpen,
    onClose,
    title,
    children,
    size = "md",
}: ModalProps) {
    const modalRef = useRef<HTMLDivElement>(null);

    // Close on escape key
    useEffect(() => {
        const handleEscape = (event: KeyboardEvent) => {
            if (event.key === "Escape") {
                onClose();
            }
        };

        if (isOpen) {
            document.addEventListener("keydown", handleEscape);
            document.body.style.overflow = "hidden"; // Prevent scrolling when modal is open
        }

        return () => {
            document.removeEventListener("keydown", handleEscape);
            document.body.style.overflow = "auto"; // Restore scrolling when modal is closed
        };
    }, [isOpen, onClose]);

    // Close when clicking outside the modal
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (
                modalRef.current &&
                !modalRef.current.contains(event.target as Node)
            ) {
                onClose();
            }
        };

        if (isOpen) {
            document.addEventListener("mousedown", handleClickOutside);
        }

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [isOpen, onClose]);

    if (!isOpen) return null;

    const getModalSize = (size: "sm" | "md" | "lg") => {
        switch (size) {
            case "sm":
                return "max-w-80";
            case "md":
                return "max-w-md";
            case "lg":
                return "max-w-2xl";
            default:
                return "max-w-md";
        }
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/20 bg-opacity-50">
            <AnimatePresence>
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.2 }}
                    ref={modalRef}
                    className={twMerge(
                        "bg-white rounded-lg shadow-lg w-full mx-4",
                        getModalSize(size)
                    )}
                >
                    <div className="flex justify-between items-center p-4">
                        <h3 className="text-lg font-medium font-title">
                            {title}
                        </h3>
                        <button
                            onClick={onClose}
                            className="text-gray-500 hover:text-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-400 rounded-full p-1"
                        >
                            <LuX className="h-5 w-5" />
                        </button>
                    </div>
                    <div className="p-4 pt-0">{children}</div>
                </motion.div>
            </AnimatePresence>
        </div>
    );
}
