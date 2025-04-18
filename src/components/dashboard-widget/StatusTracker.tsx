import Image from "next/image";
import { Clock, MinusCirlce, Monitor } from "iconsax-reactjs";
import { faker } from "@faker-js/faker";

function StatusTracker() {
    return (
        <div className="border border-gray-200 text-gray-500 w-full p-3 rounded-2xl">
            {/* header */}
            <div className="flex items-center justify-between">
                <div className="flex items-center text-sm gap-2">
                    <Monitor size={18} />
                    <p className="text-gray-800 font-medium">Status Tracker</p>
                </div>
                <button className="border border-gray-200 px-2 py-1 rounded-lg text-xs">
                    See all
                </button>
            </div>

            <hr className="text-gray-200 my-4" />

            {/* content */}
            <div className="space-y-3">
                {/* absent */}
                <div className="space-y-3">
                    <p className="text-[10px] text-gray-400">Absent</p>
                    <div className="flex items-center justify-between">
                        <div>
                            <div className="flex items-center gap-2">
                                <Image
                                    src={
                                        faker.image.personPortrait({
                                            size: 32,
                                        }) || "/default-avatar.webp"
                                    }
                                    alt="loom"
                                    height={36}
                                    width={36}
                                    className="rounded-full"
                                />
                                <div className="font-medium">
                                    <p className="text-sm text-gray-800">
                                        {faker.person.firstName() + " " + faker.person.lastName()}
                                    </p>
                                    <p className="text-[10px] text-gray-500">
                                        {faker.person.jobType()}
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="flex text-[10px] font-medium items-center gap-1">
                            <MinusCirlce size={14} variant="Bold" />
                            <span>Absent</span>
                        </div>
                    </div>
                </div>

                <hr className="text-gray-200" />

                {/* away */}
                <div className="space-y-3">
                    <p className="text-[10px] text-gray-400">Away</p>

                    <div className="flex items-center justify-between">
                        <div>
                            <div className="flex items-center gap-2">
                                <Image
                                    src={
                                        faker.image.personPortrait({
                                            size: 32,
                                        }) || "/default-avatar.webp"
                                    }
                                    alt="loom"
                                    height={36}
                                    width={36}
                                    className="rounded-full"
                                />
                                <div className="font-medium">
                                    <p className="text-sm text-gray-800">
                                        {faker.person.firstName() + " " + faker.person.lastName()}
                                    </p>
                                    <p className="text-[10px] text-gray-500">
                                        {faker.person.jobType()}
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="flex text-[10px] font-medium items-center gap-1 pr-1.5 bg-orange-100 px-1 py-0.5 rounded-full text-orange-400">
                            <Clock size={14} variant="Bold" />
                            <span>25m</span>
                        </div>
                    </div>

                    <div className="flex items-center justify-between">
                        <div>
                            <div className="flex items-center gap-2">
                                <Image
                                    src={
                                        faker.image.personPortrait({
                                            size: 32,
                                        }) || "/default-avatar.webp"
                                    }
                                    alt="loom"
                                    height={36}
                                    width={36}
                                    className="rounded-full"
                                />
                                <div className="font-medium">
                                    <p className="text-sm text-gray-800">
                                        {faker.person.firstName() + " " + faker.person.lastName()}
                                    </p>
                                    <p className="text-[10px] text-gray-500">
                                        {faker.person.jobType()}
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="flex text-[10px] font-medium items-center gap-1 pr-1.5 bg-orange-100 px-1 py-0.5 rounded-full text-orange-400">
                            <Clock size={14} variant="Bold" />
                            <span>12m</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default StatusTracker;
