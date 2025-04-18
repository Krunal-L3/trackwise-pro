import RadialProgress from "@/components/shared/RadialProgress";
import {
    ArrowRight2,
    ClipboardTick,
    Clock,
    Refresh2,
    TaskSquare,
} from "iconsax-reactjs";
import Link from "next/link";

function TaskSummary() {
    const completed = 12;
    const inProgress = 5;
    const pending = 3;
    const total = completed + inProgress + pending;
    const progress = Math.round((completed / total) * 100);

    return (
        <div className="border border-gray-200 text-gray-500 w-full p-3 rounded-2xl">
            {/* header */}
            <div className="flex items-center justify-between">
                <div className="flex items-center text-sm gap-2">
                    <TaskSquare size={18} />
                    <p className="text-gray-800 font-medium">Task Summary</p>
                </div>
                <button className="border border-gray-200 px-2 py-1 rounded-lg text-xs">
                    View all
                </button>
            </div>

            <hr className="text-gray-200 my-4" />

            {/* content */}
            <div className="flex items-center gap-4">
                <RadialProgress value={progress} />
                <div className="space-y-4 text-sm">
                    <p className="text-gray-800 font-semibold">
                        {total} Tasks Total
                    </p>
                    <ul className="text-xs w-full grid grid-cols-2 gap-x-4 gap-y-2">
                        <li className="flex items-center gap-2">
                            <ClipboardTick size={16} /> {completed} Completed
                        </li>
                        <li className="flex items-center gap-2">
                            <Refresh2 size={16} /> {inProgress} In Progress
                        </li>
                        <li className="flex items-center gap-2">
                            <Clock size={16} /> {pending} Pending
                        </li>
                    </ul>
                    <Link
                        href="/my-tasks"
                        className="flex items-center text-xs text-accent font-semibold underline-offset-2 cursor-pointer hover:translate-x-1.5 duration-200"
                    >
                        Manage Tasks <ArrowRight2 size={14} />
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default TaskSummary;
