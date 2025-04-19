"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

const TabsContext = React.createContext<{
    value: string;
    onChange: (value: string) => void;
} | null>(null);

function useTabs() {
    const context = React.useContext(TabsContext);
    if (!context) {
        throw new Error("useTabs must be used within a Tabs provider");
    }
    return context;
}

const Tabs = React.forwardRef<
    HTMLDivElement,
    React.HTMLAttributes<HTMLDivElement> & {
        defaultValue: string;
        value?: string;
        onValueChange?: (value: string) => void;
        children: React.ReactNode;
    }
>(
    (
        { defaultValue, value, onValueChange, children, className, ...props },
        ref
    ) => {
        const [selectedValue, setSelectedValue] = React.useState(
            value || defaultValue
        );

        React.useEffect(() => {
            if (value !== undefined) {
                setSelectedValue(value);
            }
        }, [value]);

        const onChange = React.useCallback(
            (value: string) => {
                setSelectedValue(value);
                onValueChange?.(value);
            },
            [onValueChange]
        );

        return (
            <TabsContext.Provider value={{ value: selectedValue, onChange }}>
                <div
                    ref={ref}
                    className={cn("space-y-4", className)}
                    {...props}
                >
                    {children}
                </div>
            </TabsContext.Provider>
        );
    }
);
Tabs.displayName = "Tabs";

const Tab = React.forwardRef<
    HTMLButtonElement,
    React.ButtonHTMLAttributes<HTMLButtonElement> & {
        value: string;
        icon?: React.ReactNode;
    }
>(({ value, icon, children, className, ...props }, ref) => {
    const { value: selectedValue, onChange } = useTabs();
    const isSelected = selectedValue === value;

    return (
        <button
            ref={ref}
            type="button"
            role="tab"
            aria-selected={isSelected}
            data-state={isSelected ? "active" : "inactive"}
            onClick={() => onChange(value)}
            className={cn(
                "inline-flex items-center gap-2 px-3 py-2 text-sm font-medium",
                isSelected
                    ? "text-[#3b5ac7] border-b-2 border-[#3b5ac7]"
                    : "text-gray-500 hover:text-gray-700",
                className
            )}
            {...props}
        >
            {icon}
            {children}
        </button>
    );
});
Tab.displayName = "Tab";

const TabContent = React.forwardRef<
    HTMLDivElement,
    React.HTMLAttributes<HTMLDivElement> & {
        value: string;
    }
>(({ value, children, className, ...props }, ref) => {
    const { value: selectedValue } = useTabs();
    const isSelected = selectedValue === value;

    if (!isSelected) return null;

    return (
        <div
            ref={ref}
            role="tabpanel"
            data-state={isSelected ? "active" : "inactive"}
            className={cn("mt-4", className)}
            {...props}
        >
            {children}
        </div>
    );
});
TabContent.displayName = "TabContent";

export { Tabs, Tab, TabContent };
