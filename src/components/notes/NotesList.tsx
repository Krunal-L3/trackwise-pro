"use client";

import {
    getPriorityColor,
    getTagColor,
    getVisibilityText,
} from "@/lib/utils";
import { Note } from "@/types/notes.types";
import { motion } from "framer-motion";
import {
    Calendar,
    Edit,
    Eye,
    Tag,
    TickCircle,
    Trash,
    User,
} from "iconsax-reactjs";
import { LuCircle, LuPin, LuPinOff } from "react-icons/lu";

interface NotesListProps {
    notes: Note[];
    onToggleComplete: (id: string) => void;
    onTogglePin: (id: string) => void;
    onEdit: (note: Note) => void;
    onDelete: (id: string) => void;
}

const NotesList = ({
    notes,
    onToggleComplete,
    onTogglePin,
    onEdit,
    onDelete,
}: NotesListProps) => {
    // Group notes by pinned status
    const pinnedNotes = notes.filter((note) => note.pinned);
    const unpinnedNotes = notes.filter((note) => !note.pinned);

    const formatDate = (dateString: string) => {
        const date = new Date(dateString);
        return date.toLocaleDateString("en-US", {
            month: "short",
            day: "numeric",
            year:
                date.getFullYear() !== new Date().getFullYear()
                    ? "numeric"
                    : undefined,
        });
    };

    const renderNoteGroup = (groupNotes: Note[], isPinned: boolean) => {
        if (groupNotes.length === 0) return null;

        return (
            <div className="space-y-4">
                {isPinned && groupNotes.length > 0 && (
                    <h2 className="text-sm font-medium text-gray-500 flex items-center gap-1.5">
                        <LuPin className="h-4 w-4" />
                        Pinned Notes
                    </h2>
                )}

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {groupNotes.map((note) => (
                        <motion.div
                            key={note.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95 }}
                            transition={{ duration: 0.2 }}
                            className={`bg-white rounded-xl border border-gray-200 overflow-hidden h-fit ${
                                note.completed ? "opacity-70" : ""
                            }`}
                        >
                            {/* Note Header */}
                            <div className="flex items-center justify-between p-3 border-b border-gray-200">
                                <div className="flex items-center gap-2">
                                    <button
                                        onClick={() =>
                                            onToggleComplete(note.id)
                                        }
                                        className="flex-shrink-0"
                                    >
                                        {note.completed ? (
                                            <TickCircle
                                                className="h-5 w-5 text-green-500"
                                                fill="currentColor"
                                            />
                                        ) : (
                                            <LuCircle className="h-5 w-5 text-gray-300 hover:text-gray-400 transition-colors" />
                                        )}
                                    </button>
                                    <h3
                                        className={`font-medium ${
                                            note.completed
                                                ? "line-through text-gray-500"
                                                : "text-gray-800"
                                        }`}
                                    >
                                        {note.title}
                                    </h3>
                                </div>
                                <div className="flex items-center gap-1">
                                    <button
                                        onClick={() => onTogglePin(note.id)}
                                        className="p-1 rounded-full hover:bg-gray-100 transition-colors"
                                        title={
                                            note.pinned
                                                ? "Unpin note"
                                                : "Pin note"
                                        }
                                    >
                                        {note.pinned ? (
                                            <LuPin className="h-4 w-4 text-[#3b5ac7]" />
                                        ) : (
                                            <LuPinOff className="h-4 w-4 text-gray-400" />
                                        )}
                                    </button>
                                </div>
                            </div>

                            {/* Note Content */}
                            <div className="p-3 space-y-3">
                                <p className="text-sm text-gray-600 whitespace-pre-line">
                                    {note.description}
                                </p>

                                {/* Tags */}
                                {note.tags.length > 0 && (
                                    <div className="flex flex-wrap gap-1.5">
                                        {note.tags.map((tag, index) => (
                                            <span
                                                key={index}
                                                className={`text-xs px-2 py-0.5 rounded-full ${getTagColor(
                                                    tag
                                                )}`}
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                )}

                                {/* Priority */}
                                {note.priority !== "none" && (
                                    <div className="flex items-center gap-1.5">
                                        <span
                                            className={`text-xs px-2 py-0.5 rounded-full ${getPriorityColor(
                                                note.priority
                                            )}`}
                                        >
                                            {note.priority
                                                .charAt(0)
                                                .toUpperCase() +
                                                note.priority.slice(1)}{" "}
                                            Priority
                                        </span>
                                    </div>
                                )}

                                {/* Metadata */}
                                <div className="flex flex-wrap items-center justify-between text-xs text-gray-500 pt-2">
                                    <div className="flex items-center gap-3">
                                        <div className="flex items-center gap-1">
                                            <Calendar className="h-3.5 w-3.5" />
                                            <span>
                                                {formatDate(note.createdAt)}
                                            </span>
                                        </div>

                                        <div className="flex items-center gap-1">
                                            {getVisibilityIcon(note.visibility)}
                                            <span>
                                                {getVisibilityText(
                                                    note.visibility
                                                )}
                                            </span>
                                        </div>
                                    </div>

                                    {note.project && (
                                        <div className="flex items-center gap-1 bg-[#3b5ac7]/10 text-[#3b5ac7] px-2 py-0.5 rounded">
                                            <Tag className="h-3 w-3" />
                                            <span>{note.project}</span>
                                        </div>
                                    )}
                                </div>
                            </div>

                            {/* Note Actions */}
                            <div className="flex border-t border-gray-200">
                                <button
                                    onClick={() => onEdit(note)}
                                    className="flex items-center justify-center gap-1 flex-1 py-2 text-xs font-medium text-gray-600 hover:bg-gray-50 transition-colors"
                                >
                                    <Edit className="h-3.5 w-3.5" />
                                    <span>Edit</span>
                                </button>
                                <div className="w-px bg-gray-200"></div>
                                <button
                                    onClick={() => onDelete(note.id)}
                                    className="flex items-center justify-center gap-1 flex-1 py-2 text-xs font-medium text-red-500 hover:bg-red-50 transition-colors"
                                >
                                    <Trash className="h-3.5 w-3.5" />
                                    <span>Delete</span>
                                </button>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {isPinned && unpinnedNotes.length > 0 && (
                    <h2 className="text-sm font-medium text-gray-500 mt-6 pt-2">
                        Other Notes
                    </h2>
                )}
            </div>
        );
    };

    return (
        <div className="space-y-6">
            {renderNoteGroup(pinnedNotes, true)}
            {renderNoteGroup(unpinnedNotes, false)}
        </div>
    );
};

export default NotesList;

export const getVisibilityIcon = (visibility: string) => {
    switch (visibility) {
        case "private":
            return <Eye className="h-3.5 w-3.5" />;
        case "team":
            return <User className="h-3.5 w-3.5" />;
        case "public":
            return <Eye className="h-3.5 w-3.5" />;
        default:
            return <Eye className="h-3.5 w-3.5" />;
    }
};
