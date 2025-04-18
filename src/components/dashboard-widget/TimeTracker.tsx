import Timer from "@/components/shared/Timer";
import { Clock, Timer1 } from "iconsax-reactjs";
import Image from "next/image";
import { BsThreeDotsVertical } from "react-icons/bs";
import { faker } from "@faker-js/faker";

function TimeTracker() {
    return (
        <div className="border border-gray-200 text-gray-500 w-full p-3 rounded-2xl">
            {/* header */}
            <div className="flex items-center justify-between">
                <div className="flex items-center text-sm gap-2">
                    <Timer1 size={18} />
                    <p className="text-gray-800 font-medium">Time Tracker</p>
                </div>
                <button className="border border-gray-200 flex items-center gap-1 px-2 py-1 rounded-lg text-xs">
                    <Clock size={14} />
                    History
                </button>
            </div>

            <hr className="text-gray-200 my-4" />

            {/* content */}
            <div>
                {/* timer */}
                <div className="rounded-lg border border-gray-200 overflow-hidden">
                    {/* timer head */}
                    <div className="bg-gray-100 py-1 px-2 flex items-center justify-between">
                        <div className="flex items-center gap-1">
                            <Image
                                src={
                                    faker.image.personPortrait({ size: 32 }) ||
                                    "/default-avatar.webp"
                                }
                                alt="company"
                                height={18}
                                width={18}
                                className="rounded-full"
                            />
                            <p className="text-sm">Website Redesign</p>
                        </div>
                    </div>

                    <Timer />
                </div>

                {/* previous tasks */}
                <div className="pt-3 space-y-3">
                    <p className="text-[10px] text-gray-400">Previous Tasks</p>
                    {/* tasks */}
                    <div className="space-y-3">
                        {/* loom */}
                        <div className="flex items-center justify-between">
                            <div className="flex gap-2">
                                <div className="rounded-full p-1.5 border border-gray-300 shrink-0">
                                    <Image
                                        src="/default-avatar.webp"
                                        alt="loom"
                                        height={24}
                                        width={24}
                                        className="rounded-full"
                                    />
                                </div>
                                <div className="font-medium">
                                    <p className="text-sm text-gray-800">
                                        Loom recording
                                    </p>
                                    <p className="text-[10px] text-gray-500">
                                        03:45
                                    </p>
                                </div>
                            </div>
                            <button>
                                <BsThreeDotsVertical size={16} />
                            </button>
                        </div>

                        {/* loom */}
                        <div className="flex items-center justify-between">
                            <div className="flex gap-2">
                                <div className="rounded-full p-1.5 border border-gray-300 shrink-0">
                                    <Image
                                        src="/default-avatar.webp"
                                        alt="loom"
                                        height={24}
                                        width={24}
                                        className="rounded-full"
                                    />
                                </div>
                                <div className="font-medium">
                                    <p className="text-sm text-gray-800">
                                        Wireframe website
                                    </p>
                                    <p className="text-[10px] text-gray-500">
                                        02:45:40
                                    </p>
                                </div>
                            </div>
                            <button>
                                <BsThreeDotsVertical size={16} />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TimeTracker;
