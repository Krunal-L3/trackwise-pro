"use client";

import React from "react";
import { twMerge } from "tailwind-merge";

const PrimaryButton = React.forwardRef<
    HTMLButtonElement,
    React.ComponentPropsWithoutRef<"button">
>(({ className, ...props }, ref) => (
    <button
        ref={ref}
        className={twMerge(
            "flex h-8 gap-1 bg-primary py-1 px-2 duration-200 text-white rounded-lg text-xs items-center justify-center",
            className
        )}
        {...props}
    />
));
PrimaryButton.displayName = "PrimaryButton";

const OutlineButton = React.forwardRef<
    HTMLButtonElement,
    React.ComponentPropsWithoutRef<"button">
>(({ className, ...props }, ref) => (
    <button
        ref={ref}
        className={twMerge(
            "flex h-8 w-auto gap-1 border border-gray-200 py-1 px-2 duration-200 hover:bg-gray-100 rounded-lg text-xs all-center",
            className
        )}
        {...props}
    />
));
OutlineButton.displayName = "OutlineButton";

export { PrimaryButton, OutlineButton };
