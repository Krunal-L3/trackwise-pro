"use client";

import { DragDropContext, Droppable, type DropResult } from "@hello-pangea/dnd";
import { useState } from "react";
import { Modal } from "../modal/modal";
import { KanbanColumn } from "./KanbanColumn";
import { TaskCard } from "./TaskCard";
import { OutlineButton, PrimaryButton } from "../button/Button";

// Task type definition
export type TaskPriority = "Low" | "Medium" | "High";

export type Task = {
    id: string;
    title: string;
    description: string;
    priority: TaskPriority;
    dueDate?: string;
};

// Column type definition
export type Column = {
    id: string;
    title: string;
    tasks: Task[];
};

// Initial data for the Kanban board
const initialData: Column[] = [
    {
        id: "todo",
        title: "To Do",
        tasks: [
            {
                id: "task-1",
                title: "Research competitors",
                description: "Analyze top 5 competitors in the market",
                priority: "High",
                dueDate: "2025-04-20",
            },
            {
                id: "task-2",
                title: "Create wireframes",
                description: "Design initial wireframes for the dashboard",
                priority: "Medium",
                dueDate: "2025-04-25",
            },
        ],
    },
    {
        id: "in-progress",
        title: "In Progress",
        tasks: [
            {
                id: "task-3",
                title: "Implement authentication",
                description: "Set up user authentication with OAuth",
                priority: "High",
                dueDate: "2025-04-18",
            },
        ],
    },
    {
        id: "in-review",
        title: "In Review",
        tasks: [
            {
                id: "task-4",
                title: "Code review",
                description: "Review pull request #42",
                priority: "Medium",
                dueDate: "2025-04-16",
            },
        ],
    },
    {
        id: "done",
        title: "Done",
        tasks: [
            {
                id: "task-5",
                title: "Project setup",
                description:
                    "Initialize repository and set up development environment",
                priority: "Low",
                dueDate: "2025-04-10",
            },
        ],
    },
];

export default function KanbanBoard({
    isModalOpen,
    setIsModalOpen,
}: {
    isModalOpen: boolean;
    setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) {
    const [columns, setColumns] = useState<Column[]>(initialData);
    const [newTask, setNewTask] = useState<Partial<Task>>({
        title: "",
        description: "",
        priority: "Medium",
    });

    // Handle drag and drop
    const onDragEnd = (result: DropResult) => {
        const { destination, source, draggableId } = result;

        // If there's no destination or the item is dropped in the same place
        if (
            !destination ||
            (destination.droppableId === source.droppableId &&
                destination.index === source.index)
        ) {
            return;
        }

        // Find the source and destination columns
        const sourceColumn = columns.find(
            (col) => col.id === source.droppableId
        );
        const destColumn = columns.find(
            (col) => col.id === destination.droppableId
        );

        if (!sourceColumn || !destColumn) return;

        // Find the task that was dragged
        const task = sourceColumn.tasks.find((task) => task.id === draggableId);
        if (!task) return;

        // Create new columns array
        const newColumns = columns.map((col) => {
            // Remove task from source column
            if (col.id === source.droppableId) {
                const newTasks = [...col.tasks];
                newTasks.splice(source.index, 1);
                return { ...col, tasks: newTasks };
            }
            // Add task to destination column
            if (col.id === destination.droppableId) {
                const newTasks = [...col.tasks];
                newTasks.splice(destination.index, 0, task);
                return { ...col, tasks: newTasks };
            }
            return col;
        });

        setColumns(newColumns);
    };

    // Add a new task
    const handleAddTask = () => {
        if (!newTask.title) return;

        const task: Task = {
            id: `task-${Date.now()}`,
            title: newTask.title,
            description: newTask.description || "",
            priority: newTask.priority as TaskPriority,
            dueDate: newTask.dueDate,
        };

        // Add to the "To Do" column
        const newColumns = columns.map((col) => {
            if (col.id === "todo") {
                return {
                    ...col,
                    tasks: [...col.tasks, task],
                };
            }
            return col;
        });

        setColumns(newColumns);
        setNewTask({ title: "", description: "", priority: "Medium" });
        setIsModalOpen(false);
    };

    return (
        <div className="space-y-4">
            <DragDropContext onDragEnd={onDragEnd}>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {columns.map((column) => (
                        <Droppable key={column.id} droppableId={column.id}>
                            {(provided) => (
                                <KanbanColumn
                                    id={column.id}
                                    title={column.title}
                                    ref={provided.innerRef}
                                    totalTasks={column.tasks.length}
                                    {...provided.droppableProps}
                                >
                                    {column.tasks.map((task, index) => (
                                        <TaskCard
                                            key={task.id}
                                            task={task}
                                            index={index}
                                        />
                                    ))}
                                    {provided.placeholder}
                                </KanbanColumn>
                            )}
                        </Droppable>
                    ))}
                </div>
            </DragDropContext>

            <Modal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                title="Add New Task"
            >
                <div className="space-y-4 py-4">
                    <div className="space-y-2">
                        <label htmlFor="title" className="text-sm font-medium">
                            Title
                        </label>
                        <input
                            id="title"
                            value={newTask.title || ""}
                            onChange={(e) =>
                                setNewTask({
                                    ...newTask,
                                    title: e.target.value,
                                })
                            }
                            placeholder="Task title"
                            className="w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm outline-none"
                        />
                    </div>
                    <div className="space-y-2">
                        <label
                            htmlFor="description"
                            className="text-sm font-medium"
                        >
                            Description
                        </label>
                        <textarea
                            id="description"
                            value={newTask.description || ""}
                            onChange={(e) =>
                                setNewTask({
                                    ...newTask,
                                    description: e.target.value,
                                })
                            }
                            placeholder="Task description"
                            className="w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm resize-none outline-none"
                        />
                    </div>
                    <div className="space-y-2">
                        <label
                            htmlFor="priority"
                            className="text-sm font-medium"
                        >
                            Priority
                        </label>
                        <select
                            id="priority"
                            className="w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm outline-none font-medium"
                            value={newTask.priority}
                            onChange={(e) =>
                                setNewTask({
                                    ...newTask,
                                    priority: e.target.value as TaskPriority,
                                })
                            }
                        >
                            <option value="low" className="text-blue-500">
                                Low
                            </option>
                            <option value="medium" className="text-yellow-500">
                                Medium
                            </option>
                            <option value="high" className="text-red-500">
                                High
                            </option>
                        </select>
                    </div>
                    <div className="space-y-2">
                        <label
                            htmlFor="dueDate"
                            className="text-sm font-medium"
                        >
                            Due Date
                        </label>
                        <input
                            id="dueDate"
                            type="date"
                            value={newTask.dueDate || ""}
                            onChange={(e) =>
                                setNewTask({
                                    ...newTask,
                                    dueDate: e.target.value,
                                })
                            }
                            className="w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm outline-none"
                        />
                    </div>
                    <div className="flex justify-end gap-2 mt-4 text-base font-medium">
                        <OutlineButton onClick={() => setIsModalOpen(false)} className="h-9 text-sm">
                            Cancel
                        </OutlineButton>
                        <PrimaryButton onClick={handleAddTask} className="h-9 text-sm">
                            Add Task
                        </PrimaryButton>
                    </div>
                </div>
            </Modal>
        </div>
    );
}
