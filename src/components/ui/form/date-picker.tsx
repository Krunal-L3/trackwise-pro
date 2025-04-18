import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.css";
import { Calendar } from "iconsax-reactjs";
import { useEffect } from "react";
import Label from "./Label";
import Hook = flatpickr.Options.Hook;
import DateOption = flatpickr.Options.DateOption;

type PropsType = {
    id: string;
    mode?: "single" | "multiple" | "range" | "time";
    onChange?: Hook | Hook[];
    defaultDate?: DateOption;
    label?: string;
    placeholder?: string;
};

export default function DatePicker({
    id,
    mode,
    onChange,
    label,
    defaultDate,
    placeholder,
}: PropsType) {
    useEffect(() => {
        const flatPickr = flatpickr(`#${id}`, {
            mode: mode || "single",
            static: true,
            monthSelectorType: "static",
            dateFormat: "Y-m-d",
            defaultDate,
            onChange,
        });

        return () => {
            if (!Array.isArray(flatPickr)) {
                flatPickr.destroy();
            }
        };
    }, [mode, onChange, id, defaultDate]);

    return (
        <div>
            {label && <Label htmlFor={id}>{label}</Label>}

            <div className="relative w-full [&_.flatpickr-wrapper]:w-full">
                <input
                    id={id}
                    placeholder={placeholder}
                    className="h-11 w-full rounded-lg border appearance-none px-4 py-2.5 text-sm shadow-theme-xs placeholder:text-gray-400 bg-transparent text-gray-800 border-gray-300 outline-none"
                />

                <span className="absolute text-gray-500 -translate-y-1/2 pointer-events-none right-3 top-1/2 dark:text-gray-400">
                    <Calendar className="size-6" />
                </span>
            </div>
        </div>
    );
}
