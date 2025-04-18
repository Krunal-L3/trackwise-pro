import type React from "react";
import { forwardRef } from "react";

type KanbanColumnProps = {
    id: string;
    title: string;
    children: React.ReactNode;
    totalTasks?: number;
};

const titleColor: Record<string, string> = {
    todo: "text-gray-900",
    'in-progress': "text-blue-500",
    'in-review': "text-yellow-500",
    'done': "text-green-500",
};

export const KanbanColumn = forwardRef<HTMLDivElement, KanbanColumnProps>(
    ({ id, title, children, totalTasks, ...props }, ref) => {
        return (
            <div
                className="bg-muted/40 rounded-lg p-3 min-h-[500px] flex flex-col"
                {...props}
                ref={ref}
            >
                <div className="font-semibold text-base py-2 px-2 bg-muted mb-4 font-title border-b border-gray-200">
                    <span className={titleColor[id]}>{title}</span>{" "}
                    <span className="font-normal text-gray-500">
                        ({totalTasks})
                    </span>
                </div>
                <div className="flex-1 space-y-3">{children}</div>
            </div>
        );
    }
);

KanbanColumn.displayName = "KanbanColumn";
