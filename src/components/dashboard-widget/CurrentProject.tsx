import Image from "next/image";
import {
    Calendar,
    Clock,
    DocumentText,
    Flash,
    InfoCircle,
} from "iconsax-reactjs";
import { faker } from "@faker-js/faker";

function CurrentProject() {
    return (
        <div className="border border-gray-200 w-full  p-3 rounded-2xl">
            {/* header */}
            <div className="flex items-center justify-between">
                <div className="flex items-center text-sm gap-2">
                    <Flash size={18} />
                    <p className="text-gray-800 font-medium">Current Project</p>
                </div>
                <button className="border border-gray-200 text-gray-500 flex items-center gap-1 px-2 py-1 rounded-lg text-xs">
                    <InfoCircle size={14} />
                    Details
                </button>
            </div>

            <hr className="text-gray-200 my-4" />

            {/* content */}
            <div className="space-y-4">
                <div className="space-y-2">
                    <p className="text-[10px] text-gray-400">Project name</p>

                    {/* header */}
                    <div className="flex items-center gap-2">
                        <Image
                            src={"/default-avatar.webp"}
                            alt="company"
                            height={18}
                            width={18}
                        />
                        <p className="text-sm text-gray-800 font-medium">
                            Rewamping XYZ website
                        </p>
                        <div className="flex text-[10px] font-medium items-center gap-1 pr-1.5 bg-orange-100 px-1 py-0.5 rounded-full text-orange-400">
                            <Clock size={14} variant="Bold" />
                            <span>In progress</span>
                        </div>
                    </div>
                </div>

                {/* project leads */}
                <div className="flex gap-12">
                    <div className="space-y-1">
                        <p className="text-[10px] text-gray-400">
                            Project manager
                        </p>
                        <div className="flex items-center gap-2">
                            <Image
                                src={
                                    faker.image.personPortrait({ size: 32 }) ||
                                    "/default-avatar.webp"
                                }
                                alt="Steve J."
                                width={20}
                                height={20}
                                className="rounded-full"
                            />
                            <p className="text-sm text-gray-800 font-medium">
                                {faker.name.firstName()}{" "}
                                {faker.name.lastName().slice(0, 1)}.
                            </p>
                        </div>
                    </div>

                    <div className="space-y-1">
                        <p className="text-[10px] text-gray-400">Tech lead</p>
                        <div className="flex items-center gap-2">
                            <Image
                                src={
                                    faker.image.personPortrait({ size: 32 }) ||
                                    "/default-avatar.webp"
                                }
                                alt="Steve J."
                                width={20}
                                height={20}
                                className="rounded-full"
                            />
                            <p className="text-sm text-gray-800 font-medium">
                                {faker.name.firstName()}{" "}
                                {faker.name.lastName().slice(0, 1)}.
                            </p>
                        </div>
                    </div>
                </div>

                {/* team */}
                <div className="space-y-1">
                    <p className="text-[10px] text-gray-400">Team</p>
                    <div className="flex items-center gap-1">
                        <div className="flex group">
                            <Image
                                src={
                                    faker.image.personPortrait({ size: 32 }) ||
                                    "/default-avatar.webp"
                                }
                                alt="user1"
                                height={20}
                                width={20}
                                className="outline outline-white rounded-full -ml-0.5 group-hover:ml-0 duration-200"
                            />
                            <Image
                                src={
                                    faker.image.personPortrait({ size: 32 }) ||
                                    "/default-avatar.webp"
                                }
                                alt="user2"
                                height={20}
                                width={20}
                                className="outline outline-white rounded-full -ml-0.5 group-hover:ml-0 duration-200"
                            />
                            <Image
                                src={
                                    faker.image.personPortrait({ size: 32 }) ||
                                    "/default-avatar.webp"
                                }
                                alt="user3"
                                height={20}
                                width={20}
                                className="outline outline-white rounded-full -ml-0.5 group-hover:ml-0 duration-200"
                            />
                        </div>
                        <p className="text-[10px]">+6 people</p>
                    </div>
                </div>

                {/* timeline */}
                <div className="space-y-1 font-medium">
                    <p className="text-[10px] text-gray-400">Timeline</p>
                    <div className="text-sm flex items-center gap-2">
                        <Calendar size={18} />
                        <p className="text-gray-800">12/10/2023 - 12/2/2024</p>
                    </div>
                </div>

                {/* description */}
                <div className="space-y-1 font-medium">
                    <p className="text-[10px] text-gray-400">Description</p>
                    <div className="text-sm flex items-center gap-2">
                        <DocumentText size={18} />
                        <p className="text-gray-800">
                            Frontend website for AI app
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CurrentProject;
