import type * as React from "react";
import { cn } from "@/lib/utils";

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
    variant?: "default" | "secondary" | "destructive" | "outline";
}

function Badge({ className, variant = "default", ...props }: BadgeProps) {
    return (
        <div
            className={cn(
                "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold font-body transition-colors",
                {
                    "border-transparent bg-[#3b5ac7] text-white":
                        variant === "default",
                    "border-transparent bg-secondary text-secondary-foreground ":
                        variant === "secondary",
                    "border-transparent bg-destructive text-destructive-foreground ":
                        variant === "destructive",
                    "border-border bg-background":
                        variant === "outline",
                },
                className
            )}
            {...props}
        />
    );
}

export { Badge };
