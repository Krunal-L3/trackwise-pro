import clsx from "clsx";
import { ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

// cn
export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs))
}

export const formatDate = (date: Date) => {
    return new Intl.DateTimeFormat("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric",
    }).format(date);
};

export const getLabelColor = (label: string) => {
    const colors: Record<string, string> = {
        Design: "bg-purple-100 text-purple-800",
        Development: "bg-blue-100 text-blue-800",
        Content: "bg-green-100 text-green-800",
        Urgent: "bg-red-100 text-red-800",
        Bug: "bg-orange-100 text-orange-800",
    };
    return colors[label] || "bg-gray-100 text-gray-800";
};

export const getTagColor = (tag: string) => {
    const tagColors: Record<string, string> = {
        "to-do": "bg-orange-100 text-orange-500",
        meeting: "bg-purple-100 text-purple-500",
        idea: "bg-blue-100 text-blue-500",
        important: "bg-red-100 text-red-500",
        team: "bg-green-100 text-green-500",
        today: "bg-yellow-100 text-yellow-600",
        bug: "bg-rose-100 text-rose-500",
        feature: "bg-indigo-100 text-indigo-500",
    };

    return tagColors[tag.toLowerCase()] || "bg-gray-100 text-gray-600";
};

    export const getPriorityColor = (priority: string) => {
        const priorityColors: Record<string, string> = {
            high: "bg-red-100 text-red-500",
            medium: "bg-orange-100 text-orange-500",
            low: "bg-blue-100 text-blue-500",
            none: "bg-gray-100 text-gray-500",
        };

        return priorityColors[priority] || "bg-gray-100 text-gray-500";
    };

    export const getVisibilityText = (visibility: string) => {
        switch (visibility) {
            case "private":
                return "Private";
            case "team":
                return "Team";
            case "public":
                return "Public";
            default:
                return visibility;
        }
    };