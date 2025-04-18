"use client";

import type React from "react";

import EmojiPicker, { EmojiClickData } from "emoji-picker-react";
import { AnimatePresence, motion } from "framer-motion";
import { Call, Send, Video } from "iconsax-reactjs";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import { FaPaperclip } from "react-icons/fa6";
import { LuFileText, LuFilm, LuImage, LuSmile, LuX } from "react-icons/lu";
import { twMerge } from "tailwind-merge";

interface Contact {
    id: string;
    name: string;
    role: string;
    avatar: string;
    status: string;
    lastActive: string;
}

interface FileData {
    name: string;
    url: string;
    type: string;
}

interface Message {
    id: string;
    senderId: string;
    text: string;
    timestamp: string;
    file?: FileData | null;
}

interface ChatAreaProps {
    contact: Contact;
    messages: Message[];
    newMessage: string;
    setNewMessage: React.Dispatch<React.SetStateAction<string>>;
    handleSendMessage: (text: string, file?: File | null) => void;
    onBack?: () => void;
    isMobile?: boolean;
}

export default function ChatArea({
    contact,
    messages,
    newMessage,
    setNewMessage,
    handleSendMessage,
    onBack,
    isMobile,
}: ChatAreaProps) {
    const messagesEndRef = useRef<HTMLDivElement>(null);
    const fileInputRef = useRef<HTMLInputElement>(null);
    const [showEmojiPicker, setShowEmojiPicker] = useState(false);
    const [selectedFile, setSelectedFile] = useState<File | null>(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    const handleKeyPress = (e: React.KeyboardEvent) => {
        if (e.key === "Enter" && !e.shiftKey) {
            e.preventDefault();
            handleSendMessage(newMessage, selectedFile);
            setNewMessage("");
            setSelectedFile(null);
        }
    };

    const handleEmojiClick = (emojiData: EmojiClickData) => {
        setNewMessage((prev: string) => prev + emojiData.emoji);
    };

    const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            setSelectedFile(e.target.files[0]);
        }
    };

    const handleRemoveFile = () => {
        setSelectedFile(null);
        if (fileInputRef.current) {
            fileInputRef.current.value = "";
        }
    };

    const getFileIcon = (fileType: string) => {
        if (fileType.startsWith("image/"))
            return <LuImage className="w-6 h-6" />;
        if (fileType.startsWith("video/"))
            return <LuFilm className="w-6 h-6" />;
        return <LuFileText className="w-6 h-6" />;
    };

    return (
        <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
            className="bg-white rounded-lg border border-gray-100 overflow-hidden flex flex-col h-full"
        >
            {/* Chat header */}
            <div className="p-4 h-16 border-b border-gray-200 flex justify-between items-center">
                <div className="flex items-center">
                    {isMobile && onBack && (
                        <button
                            onClick={onBack}
                            className="mr-2 text-dark/70 hover:text-primary transition-colors"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="lucide lucide-chevron-left"
                            >
                                <path d="m15 18-6-6 6-6" />
                            </svg>
                        </button>
                    )}
                    <div className="relative">
                        <Image
                            src={contact.avatar || "/default-avatar.webp"}
                            alt={contact.name}
                            className="w-10 h-10 rounded-full object-cover"
                            width={40}
                            height={40}
                        />
                        <span
                            className={`absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full border-2 border-white ${
                                contact.status === "online"
                                    ? "bg-green-500"
                                    : "bg-orange-500"
                            }`}
                        ></span>
                    </div>
                    <h2 className="ml-3 font-title font-semibold text-dark">
                        {contact.name}
                    </h2>
                </div>
                <div className="flex items-center space-x-4">
                    <button className="text-dark/70 hover:text-primary transition-colors">
                        <Call size={20} />
                    </button>
                    <button className="text-dark/70 hover:text-primary transition-colors">
                        <Video size={20} />
                    </button>
                    <button className="text-dark/70 hover:text-primary transition-colors">
                        <BsThreeDotsVertical size={20} />
                    </button>
                </div>
            </div>

            {/* Chat messages */}
            <div
                className="overflow-y-auto p-4 scrollbar-hidden"
                style={{
                    flex: "1 1 auto",
                }}
            >
                <AnimatePresence>
                    {messages.map((message, index) => (
                        <motion.div
                            key={message.id}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.3, delay: index * 0.05 }}
                            className={`mb-4 ${
                                message.senderId === "me"
                                    ? "flex justify-end"
                                    : "flex justify-start"
                            }`}
                        >
                            {message.senderId !== "me" && (
                                <div className="mr-2 flex-shrink-0">
                                    <Image
                                        src={
                                            contact.avatar ||
                                            "/default-avatar.webp"
                                        }
                                        alt={contact.name}
                                        className="rounded-full object-cover"
                                        width={20}
                                        height={20}
                                    />
                                </div>
                            )}
                            <div className="max-w-[70%]">
                                <div
                                    className={`p-3 rounded-lg text-sm ${
                                        message.senderId === "me"
                                            ? "bg-primary text-white rounded-tr-none"
                                            : "bg-gray-100 text-dark rounded-tl-none"
                                    }`}
                                >
                                    <p className="max-w-sm break-all">
                                        {message.text}
                                    </p>
                                    {/* Render file if present */}
                                    {message.file && (
                                        <div className="mt-2">
                                            {message.file.type.startsWith(
                                                "image/"
                                            ) ? (
                                                <Image
                                                    width={200}
                                                    height={200}
                                                    src={
                                                        message.file.url ||
                                                        "/placeholder.svg"
                                                    }
                                                    alt={message.file.name}
                                                    className="max-w-full rounded-md mt-2 max-h-48 object-contain"
                                                />
                                            ) : (
                                                <div className="flex items-center mt-2 p-2 bg-white/20 rounded-md">
                                                    {getFileIcon(
                                                        message.file.type
                                                    )}
                                                    <span className="ml-2 text-sm truncate max-w-[200px]">
                                                        {message.file.name}
                                                    </span>
                                                </div>
                                            )}
                                        </div>
                                    )}
                                </div>
                                {message.timestamp && (
                                    <p
                                        className={twMerge(
                                            "text-xs text-gray-500 mt-1",
                                            message.senderId === "me"
                                                ? "text-right"
                                                : "text-left"
                                        )}
                                    >
                                        {message.timestamp}
                                    </p>
                                )}
                            </div>
                        </motion.div>
                    ))}
                </AnimatePresence>
                <div ref={messagesEndRef} />
            </div>

            {/* Selected file preview */}
            {selectedFile && (
                <div className="px-4 py-2 border-t flex items-center justify-between bg-gray-50">
                    <div className="flex items-center">
                        {getFileIcon(selectedFile.type)}
                        <span className="ml-2 text-sm truncate max-w-[200px]">
                            {selectedFile.name}
                        </span>
                    </div>
                    <button
                        onClick={handleRemoveFile}
                        className="text-gray-500 hover:text-red-500 transition-colors"
                    >
                        <LuX size={18} />
                    </button>
                </div>
            )}

            {/* Chat input */}
            <div className="h-16 p-3 border-t border-gray-200 flex items-center relative">
                <div className="relative flex items-center justify-center">
                    <button
                        onClick={() => setShowEmojiPicker(!showEmojiPicker)}
                        className="text-gray-500 hover:text-primary transition-colors mr-2"
                    >
                        <LuSmile size={22} />
                    </button>

                    {/* Emoji picker */}
                    {showEmojiPicker && (
                        <div className="absolute bottom-12 left-0 z-10">
                            <div className="relative">
                                <button
                                    onClick={() => setShowEmojiPicker(false)}
                                    className="absolute -top-2 -right-2 bg-white rounded-full p-1 shadow-md z-20"
                                >
                                    <LuX size={16} />
                                </button>
                                <EmojiPicker onEmojiClick={handleEmojiClick} />
                            </div>
                        </div>
                    )}
                </div>

                <input
                    type="text"
                    placeholder="Type a message"
                    value={newMessage}
                    onChange={(e) => setNewMessage(e.target.value)}
                    onKeyDown={handleKeyPress}
                    className="flex-1 p-2 text-sm rounded-md outline-none"
                />

                {/* Hidden file input */}
                <input
                    type="file"
                    ref={fileInputRef}
                    onChange={handleFileSelect}
                    className="hidden"
                />

                <button
                    onClick={() => fileInputRef.current?.click()}
                    className="text-gray-500 hover:text-primary transition-colors ml-2 mr-4"
                >
                    <FaPaperclip size={22} />
                </button>

                <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => {
                        handleSendMessage(newMessage, selectedFile);
                        setNewMessage("");
                        setSelectedFile(null);
                    }}
                    className="bg-primary text-white p-2 rounded-md"
                >
                    <Send size={20} />
                </motion.button>
            </div>
        </motion.div>
    );
}
