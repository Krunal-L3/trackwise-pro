"use client";

import { generateSampleNotes } from "@/lib/sampleData";
import { formatDate, getPriorityColor, getTagColor } from "@/lib/utils";
import { Note } from "@/types/notes.types";
import { Calendar2, NoteText, TickCircle } from "iconsax-reactjs";
import Link from "next/link";
import { useEffect, useState } from "react";
import { LuCircle } from "react-icons/lu";

function NotesPage() {
    const [notes, setNotes] = useState<Note[]>([]);

    useEffect(() => {
        setNotes(generateSampleNotes().filter((note) => note.pinned).slice(0, 3));
    }, []);

    const onToggleComplete = (id: string) => {
        setNotes(
            notes.map((note) =>
                note.id === id
                    ? {
                          ...note,
                          completed: !note.completed,
                          updatedAt: new Date().toISOString(),
                      }
                    : note
            )
        );
    };

    return (
        <div className="border border-gray-200 text-gray-500 w-full  p-3 rounded-2xl">
            {/* header */}
            <div className="flex items-center justify-between">
                <div className="flex items-center text-sm gap-2">
                    <NoteText size={18} />
                    <p className="text-gray-800 font-medium">Notes</p>
                </div>
                <Link
                    href="/notes"
                    className="border border-gray-200 flex items-center gap-1 px-2 py-1 rounded-lg text-xs"
                >
                    View all
                </Link>
            </div>

            <hr className="text-gray-200 my-4" />

            {/* content */}
            <div className="space-y-3 divide-y divide-gray-200">
                {notes.map((note) => (
                    <div
                        key={note.id}
                        className="flex items-start gap-3 w-full pb-3"
                    >
                        <button
                            onClick={() => onToggleComplete(note.id)}
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
                        <div className="w-full space-y-1">
                            <h3
                                className={`text-sm font-medium ${
                                    note.completed
                                        ? "line-through text-gray-500"
                                        : "text-gray-800"
                                }`}
                            >
                                {note.title}
                            </h3>
                            <p className="text-xs">{note.description}</p>
                            <div className="flex justify-between items-center">
                                <div className="flex items-center gap-1 my-1 flex-wrap">
                                    {/* Tags */}
                                    {note.tags.length > 0 &&
                                        note.tags.map((tag, index) => (
                                            <span
                                                key={index}
                                                className={`text-xs px-2 py-0.5 rounded-full ${getTagColor(
                                                    tag
                                                )}`}
                                            >
                                                {tag}
                                            </span>
                                        ))}

                                    {/* Priority */}
                                    {note.priority !== "none" && (
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
                                    )}
                                </div>
                                <p className="shrink-0 flex items-center gap-1 text-[10px]">
                                    <Calendar2 size={12} />
                                    {formatDate(new Date(note.createdAt))}
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default NotesPage;
