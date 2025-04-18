"use client";

import type React from "react";

import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { Note } from "@/types/notes.types";
import { MdClose } from "react-icons/md";
import { Calendar, Eye, Link, Tag } from "iconsax-reactjs";
import { LuTriangleAlert } from "react-icons/lu";

interface NoteModalProps {
    note: Note | null;
    onClose: () => void;
    onSave: (note: Note) => void;
}

export default function NoteModal({ note, onClose, onSave }: NoteModalProps) {
    const [title, setTitle] = useState(note?.title || "");
    const [description, setDescription] = useState(note?.description || "");
    const [selectedTags, setSelectedTags] = useState<string[]>(
        note?.tags || []
    );
    const [visibility, setVisibility] = useState<"private" | "team" | "public">(
        note?.visibility || "private"
    );
    const [priority, setPriority] = useState<
        "none" | "low" | "medium" | "high"
    >(note?.priority || "none");
    const [project, setProject] = useState(note?.project || "");
    const [completed, setCompleted] = useState(note?.completed || false);
    const [pinned, setPinned] = useState(note?.pinned || false);

    const modalRef = useRef<HTMLDivElement>(null);
    const titleInputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        // Focus the title input when modal opens
        if (titleInputRef.current) {
            titleInputRef.current.focus();
        }

        // Close modal when clicking outside
        const handleClickOutside = (event: MouseEvent) => {
            if (
                modalRef.current &&
                !modalRef.current.contains(event.target as Node)
            ) {
                onClose();
            }
        };

        // Close modal when pressing Escape
        const handleEscapeKey = (event: KeyboardEvent) => {
            if (event.key === "Escape") {
                onClose();
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        document.addEventListener("keydown", handleEscapeKey);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
            document.removeEventListener("keydown", handleEscapeKey);
        };
    }, [onClose]);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        if (!title.trim()) return;

        onSave({
            id: note?.id || "",
            title,
            description,
            tags: selectedTags,
            visibility,
            priority,
            project: project || null,
            completed,
            pinned,
            createdAt: note?.createdAt || new Date().toISOString(),
            updatedAt: new Date().toISOString(),
        });
    };

    const toggleTag = (tag: string) => {
        if (selectedTags.includes(tag)) {
            setSelectedTags(selectedTags.filter((t) => t !== tag));
        } else {
            setSelectedTags([...selectedTags, tag]);
        }
    };

    const availableTags = [
        "To-do",
        "Meeting",
        "Team",
        "Idea",
        "Important",
        "Today",
        "Bug",
        "Feature",
    ];
    const availableProjects = [
        "Marketing Website",
        "Mobile App",
        "Dashboard",
        "API Integration",
    ];

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50 overflow-y-auto"
        >
            <motion.div
                ref={modalRef}
                initial={{ scale: 0.9, y: 20 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.9, y: 20 }}
                className="bg-white rounded-2xl w-full max-w-2xl border border-gray-200 max-h-[90vh] overflow-hidden flex flex-col"
            >
                <div className="p-4 flex justify-between items-center border-b border-gray-200 sticky top-0 bg-white z-10">
                    <h2 className="text-lg font-semibold text-gray-800 font-['Poppins',_sans-serif]">
                        {note ? "Edit Note" : "Add New Note"}
                    </h2>
                    <button
                        onClick={onClose}
                        className="text-gray-500 hover:text-gray-700 transition-colors"
                        aria-label="Close"
                    >
                        <MdClose size={20} />
                    </button>
                </div>

                <div className="overflow-y-auto p-4">
                    <form
                        onSubmit={handleSubmit}
                        className="space-y-5"
                    >
                        <div>
                            <label
                                htmlFor="title"
                                className="block text-sm font-medium text-gray-700 mb-1"
                            >
                                Title <span className="text-red-500">*</span>
                            </label>
                            <input
                                ref={titleInputRef}
                                type="text"
                                id="title"
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                                className="w-full px-3 py-2 border border-gray-300 rounded-lg outline-none text-sm"
                                placeholder="Enter note title"
                                required
                            />
                        </div>

                        <div>
                            <label
                                htmlFor="description"
                                className="block text-sm font-medium text-gray-700 mb-1"
                            >
                                Description
                            </label>
                            <textarea
                                id="description"
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                                className="w-full px-3 py-2 border border-gray-300 rounded-lg outline-none text-sm min-h-[120px]"
                                placeholder="Enter note description"
                            />
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                            <div>
                                <div className="flex items-center gap-2 mb-2">
                                    <Tag
                                        size={16}
                                        className="text-gray-500"
                                    />
                                    <label className="text-sm font-medium text-gray-700">
                                        Tags
                                    </label>
                                </div>
                                <div className="flex flex-wrap gap-2">
                                    {availableTags.map((tag) => (
                                        <button
                                            key={tag}
                                            type="button"
                                            onClick={() => toggleTag(tag)}
                                            className={`text-xs px-3 py-1 rounded-full border transition-colors ${
                                                selectedTags.includes(tag)
                                                    ? "bg-[#3b5ac7] text-white border-[#3b5ac7]"
                                                    : "bg-white text-gray-700 border-gray-300 hover:bg-gray-100"
                                            }`}
                                        >
                                            {tag}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            <div>
                                <div className="flex items-center gap-2 mb-2">
                                    <LuTriangleAlert
                                        size={16}
                                        className="text-gray-500"
                                    />
                                    <label className="text-sm font-medium text-gray-700">
                                        Priority
                                    </label>
                                </div>
                                <div className="flex flex-wrap gap-2">
                                    {(
                                        [
                                            "none",
                                            "low",
                                            "medium",
                                            "high",
                                        ] as const
                                    ).map((p) => (
                                        <button
                                            key={p}
                                            type="button"
                                            onClick={() => setPriority(p)}
                                            className={`text-xs px-3 py-1 rounded-full border transition-colors ${
                                                priority === p
                                                    ? "bg-[#3b5ac7] text-white border-[#3b5ac7]"
                                                    : "bg-white text-gray-700 border-gray-300 hover:bg-gray-100"
                                            }`}
                                        >
                                            {p.charAt(0).toUpperCase() +
                                                p.slice(1)}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                            <div>
                                <div className="flex items-center gap-2 mb-2">
                                    <Eye
                                        size={16}
                                        className="text-gray-500"
                                    />
                                    <label className="text-sm font-medium text-gray-700">
                                        Visibility
                                    </label>
                                </div>
                                <div className="flex gap-2">
                                    <button
                                        type="button"
                                        onClick={() => setVisibility("private")}
                                        className={`text-xs px-3 py-1 rounded-full border transition-colors ${
                                            visibility === "private"
                                                ? "bg-[#3b5ac7] text-white border-[#3b5ac7]"
                                                : "bg-white text-gray-700 border-gray-300 hover:bg-gray-100"
                                        }`}
                                    >
                                        Private
                                    </button>
                                    <button
                                        type="button"
                                        onClick={() => setVisibility("team")}
                                        className={`text-xs px-3 py-1 rounded-full border transition-colors ${
                                            visibility === "team"
                                                ? "bg-[#3b5ac7] text-white border-[#3b5ac7]"
                                                : "bg-white text-gray-700 border-gray-300 hover:bg-gray-100"
                                        }`}
                                    >
                                        Team
                                    </button>
                                    <button
                                        type="button"
                                        onClick={() => setVisibility("public")}
                                        className={`text-xs px-3 py-1 rounded-full border transition-colors ${
                                            visibility === "public"
                                                ? "bg-[#3b5ac7] text-white border-[#3b5ac7]"
                                                : "bg-white text-gray-700 border-gray-300 hover:bg-gray-100"
                                        }`}
                                    >
                                        Public
                                    </button>
                                </div>
                            </div>

                            <div>
                                <div className="flex items-center gap-2 mb-2">
                                    <Link
                                        size={16}
                                        className="text-gray-500"
                                    />
                                    <label className="text-sm font-medium text-gray-700">
                                        Link to Project
                                    </label>
                                </div>
                                <select
                                    value={project}
                                    onChange={(e) => setProject(e.target.value)}
                                    className="w-full px-3 py-2 border border-gray-300 rounded-lg outline-none text-sm bg-white"
                                >
                                    <option value="">None</option>
                                    {availableProjects.map((p) => (
                                        <option 
                                            key={p}
                                            value={p}
                                        >
                                            {p}
                                        </option>
                                    ))}
                                </select>
                            </div>
                        </div>

                        <div className="flex items-center gap-4">
                            <label className="flex items-center gap-2 cursor-pointer">
                                <input
                                    type="checkbox"
                                    checked={completed}
                                    onChange={() => setCompleted(!completed)}
                                    className="w-4 h-4 text-[#3b5ac7] rounded cursor-pointer"
                                />
                                <span className="text-sm text-gray-700">
                                    Mark as completed
                                </span>
                            </label>

                            <label className="flex items-center gap-2 cursor-pointer">
                                <input
                                    type="checkbox"
                                    checked={pinned}
                                    onChange={() => setPinned(!pinned)}
                                    className="w-4 h-4 text-[#3b5ac7] rounded cursor-pointer"
                                />
                                <span className="text-sm text-gray-700">
                                    Pin note
                                </span>
                            </label>
                        </div>

                        <div className="flex items-center text-xs text-gray-500 gap-1">
                            <Calendar size={14} />
                            <span>
                                {note
                                    ? `Created: ${new Date(
                                          note.createdAt
                                      ).toLocaleDateString()}`
                                    : `Will be created: ${new Date().toLocaleDateString()}`}
                            </span>
                        </div>

                        <div className="flex justify-end gap-3 pt-2">
                            <button
                                type="button"
                                onClick={onClose}
                                className="px-4 py-2 border border-gray-300 rounded-lg text-sm text-gray-700 hover:bg-gray-50 transition-colors"
                            >
                                Cancel
                            </button>
                            <button
                                type="submit"
                                disabled={!title.trim()}
                                className={`px-4 py-2 rounded-lg text-sm text-white transition-colors ${
                                    title.trim()
                                        ? "bg-[#3b5ac7] hover:bg-[#2d4aa0]"
                                        : "bg-gray-400 cursor-not-allowed"
                                }`}
                            >
                                {note ? "Update Note" : "Add Note"}
                            </button>
                        </div>
                    </form>
                </div>
            </motion.div>
        </motion.div>
    );
}
