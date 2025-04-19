import React from "react";
import { twMerge } from "tailwind-merge";

interface TextareaProps
    extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
    disabled?: boolean;
    error?: boolean;
    hint?: string;
}

const TextArea: React.FC<TextareaProps> = ({
    disabled = false,
    error = false,
    hint = "",
    ...props
}) => {
    let textareaClasses = `w-full rounded-lg border px-4 py-2.5 text-sm shadow-theme-xs focus:outline-hidden`;

    if (disabled) {
        textareaClasses += ` bg-gray-100 opacity-50 text-gray-500 border-gray-300 cursor-not-allowed dark:bg-gray-800 dark:text-gray-400 dark:border-gray-700`;
    } else if (error) {
        textareaClasses += ` bg-transparent text-gray-400 border-gray-300 focus:border-primary dark:border-gray-700 dark:bg-gray-900 dark:text-white/90 dark:focus:border-error-800`;
    } else {
        textareaClasses += ` bg-transparent text-gray-400 border-gray-300 focus:border-primary dark:border-gray-700 dark:bg-gray-900 dark:text-white/90 dark:focus:border-brand-800`;
    }

    return (
        <div className="relative">
            <textarea
                {...props}
                disabled={disabled}
                className={twMerge(textareaClasses, props.className)}
            />
            {hint && (
                <p
                    className={`mt-2 text-sm ${
                        error
                            ? "text-error-500"
                            : "text-gray-500 dark:text-gray-400"
                    }`}
                >
                    {hint}
                </p>
            )}
        </div>
    );
};

export default TextArea;
