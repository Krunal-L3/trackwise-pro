import React, { FC } from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    className?: string;
    disabled?: boolean;
    success?: boolean;
    error?: boolean;
    hint?: string; // Optional hint text
}

const Input: FC<InputProps> = ({
    className = "",
    disabled = false,
    success = false,
    error = false,
    hint,
    ...props
}) => {
    // Determine input styles based on state (disabled, success, error)
    let inputClasses = `h-11 w-full rounded-lg border appearance-none px-4 py-2.5 text-sm shadow-theme-xs placeholder:text-gray-400 focus:outline-hidden dark:bg-gray-900 dark:text-white/90 dark:placeholder:text-white/30 dark:focus:border-brand-800 outline-none`;

    // Add styles for the different states
    if (disabled) {
        inputClasses += ` text-gray-500 border-gray-300 cursor-not-allowed dark:bg-gray-800 dark:text-gray-400 dark:border-gray-700`;
    } else if (error) {
        inputClasses += ` text-red-800 border-red-500 dark:text-red-400 dark:border-red-500`;
    } else if (success) {
        inputClasses += ` text-success-500 border-success-400 focus:border-green-300 dark:text-success-400 dark:border-success-500`;
    } else {
        inputClasses += ` bg-transparent text-gray-800 border-gray-300 focus:border-primary dark:border-gray-700 dark:bg-gray-900 dark:text-white/90 dark:focus:border-brand-800`;
    }

    return (
        <div className="relative">
            <input
                className={`${inputClasses} ${className}`}
                {...props}
            />

            {/* Optional Hint Text */}
            {hint && (
                <p
                    className={`mt-1.5 text-xs ${
                        error
                            ? "text-red-500"
                            : success
                            ? "text-success-500"
                            : "text-gray-500"
                    }`}
                >
                    {hint}
                </p>
            )}
        </div>
    );
};

export default Input;
