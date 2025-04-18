import Image from "next/image";
import React from "react";
import { BsThreeDots } from "react-icons/bs";
import { IoCheckboxOutline } from "react-icons/io5";

const RecentProjects: React.FC = () => {
    return (
        <div className="w-full p-4 bg-white rounded-2xl">
            <div className="w-full flex items-center justify-between">
                <h3 className="text-xl font-medium font-title text-gray-700">
                    Recent Projects
                </h3>
                <button>
                    <BsThreeDots className="w-6 h-6 text-gray-500" />
                </button>
            </div>
            <div className="h-px w-full bg-gray-300 my-3"></div>
            <div className="w-full grid grid-cols-3 gap-4">
                {[1, 2, 3].map((item) => (
                    <div
                        key={item}
                        className="p-3 w-full flex flex-col justify-between bg-gray-50 h-40 rounded-lg"
                    >
                        <div className="w-full flex items-center justify-between">
                            <h4 className="text-lg font-semibold text-gray-800 line-clamp-1">
                                Project 1
                            </h4>
                            <button>
                                <BsThreeDots className="w-4 h-4 text-gray-500" />
                            </button>
                        </div>
                        {/* project progress */}
                        <div className="w-full">
                            <div className="flex items-center justify-between mb-1">
                                <p className="text-sm text-gray-500">
                                    Progress
                                </p>
                                <p className="text-sm text-gray-700">
                                    <b>50%</b>
                                </p>
                            </div>
                            <div className="relative w-full h-2 bg-gray-200 rounded-full after:content-[''] after:absolute after:top-0 after:left-0 after:bg-accent after:w-1/2 after:h-full after:rounded-full"></div>
                        </div>
                        {/* Total tasks and assigned */}
                        <div className="w-full flex items-center justify-between">
                            <p className="inline-flex items-center gap-2 text-sm text-gray-500">
                                <IoCheckboxOutline className="w-4 h-4" />
                                <span>
                                    <span className="font-medium text-black">
                                        5
                                    </span>
                                    /10
                                </span>
                            </p>
                            {/* avatart group */}
                            <div className="py-2 flex -space-x-1">
                                <Image
                                    alt=""
                                    src="/default-avatar.webp"
                                    width={20}
                                    height={20}
                                    className="inline-block size-6 rounded-full ring-2 ring-gray-300"
                                />
                                <Image
                                    alt=""
                                    src="/default-avatar.webp"
                                    width={20}
                                    height={20}
                                    className="inline-block size-6 rounded-full ring-2 ring-gray-300"
                                />
                                <div className="inline-flex items-center justify-center size-6 rounded-full text-sm font-semibold text-gray-500 bg-gray-200 ring-2 ring-gray-300">
                                    +2
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default RecentProjects;
