"use client";

import { Draggable } from "@hello-pangea/dnd";
// import { Calendar, MoreHorizontal } from "lucide-react";
import { useState, useRef, useEffect } from "react";

import type { Task, TaskPriority } from "./KanbanBoard";
import { FiMoreHorizontal } from "react-icons/fi";
import { LuCalendar } from "react-icons/lu";
import { twMerge } from "tailwind-merge";

type TaskCardProps = {
    task: Task;
    index: number;
};

type PriorityColorMap = {
    [key in TaskPriority]: { badge: string; text: string };
};

export function TaskCard({ task, index }: TaskCardProps) {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    const priorityColors: PriorityColorMap = {
        Low: { badge: "bg-blue-500", text: "text-blue-500" },
        Medium: { badge: "bg-yellow-500", text: "text-yellow-500" },
        High: { badge: "bg-red-500", text: "text-red-500" },
    };

    const formatDate = (dateString?: string) => {
        if (!dateString) return "";
        const date = new Date(dateString);
        return date.toLocaleDateString("en-US", {
            month: "short",
            day: "numeric",
        });
    };

    // Close dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (
                dropdownRef.current &&
                !dropdownRef.current.contains(event.target as Node)
            ) {
                setDropdownOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <Draggable draggableId={task.id} index={index}>
            {(provided) => (
                <div
                    className="mb-3 bg-white border border-gray-200 overflow-hidde cursor-grab active:cursor-grabbing rounded-2xl"
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                >
                    <div className="py-2 px-3 border-b border-gray-200 flex flex-row justify-between items-center">
                        <h3 className="text-base font-semibold text-gray-900">
                            {task.title}
                        </h3>
                        <div className="relative" ref={dropdownRef}>
                            <button
                                className="h-8 w-8 flex items-center justify-center rounded-md hover:bg-gray-100"
                                onClick={() => setDropdownOpen(!dropdownOpen)}
                            >
                                <FiMoreHorizontal className="h-4 w-4" />
                            </button>
                            {dropdownOpen && (
                                <div className="absolute right-0 mt-1 w-36 bg-white rounded-md shadow-lg z-10 border border-gray-200">
                                    <div className="py-1">
                                        <button className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                                            Edit
                                        </button>
                                        <button className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                                            Delete
                                        </button>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                    <div className="p-3 pt-2">
                        <p className="text-xs font-medium text-gray-500 hyphens-auto">
                            {task.description}
                        </p>
                    </div>
                    <div className="p-3 pt-0 flex items-center justify-between">
                        <span
                            className={twMerge(
                                "text-sm font-medium px-2 py-0.5 rounded-full",
                                priorityColors[task.priority].text
                            )}
                        >
                            <span
                                className={twMerge(
                                    "w-2 h-2 rounded-full mr-1 inline-block",
                                    priorityColors[task.priority].badge
                                )}
                            ></span>{" "}
                            {task.priority}
                        </span>
                        {task.dueDate && (
                            <div className="py-1 px-2 rounded-md flex items-center font-title text-xs font-medium text-gray-600 bg-gray-50">
                                <LuCalendar className="h-4 w-4 mr-1" />
                                {formatDate(task.dueDate)}
                            </div>
                        )}
                    </div>
                </div>
            )}
        </Draggable>
    );
}
