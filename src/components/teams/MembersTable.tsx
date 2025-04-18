"use client";

import { useState } from "react";
import { ArrowSwapVertical, Slash, TickCircle } from "iconsax-reactjs";
import Image from "next/image";
import { BsThreeDotsVertical } from "react-icons/bs";
import { faker } from "@faker-js/faker";

function MembersTable() {
    const initialMembers = [
        {
            name:
                faker.name.firstName() + " " + faker.name.lastName() ||
                "James Brown",
            email:
                faker.name.fullName().replace(/\s+/g, "").toLowerCase() +
                    "@gmail.com" || "james@example.com",
            avatar:
                faker.image.personPortrait({ size: 32 }) ||
                "/default-avatar.webp",
            title: faker.person.jobTitle() || "Marketing manager",
            since: "Aug, 2020",
            project: {
                name: "Website redesign",
                description: "Data analysis",
                icon: "/default-avatar.webp",
            },
            document: {
                name: "brown-james.pdf",
                size: "2.3 MB",
            },
            status: "Active",
        },
        {
            name:
                faker.name.firstName() + " " + faker.name.lastName() ||
                "Sophia Williams",
            email:
                faker.name.fullName().replace(/\s+/g, "").toLowerCase() +
                    "@gmail.com" || "sophia@example.com",
            avatar:
                faker.image.personPortrait({ size: 32 }) ||
                "/default-avatar.webp",
            title: faker.person.jobTitle() || "HR Assistant",
            since: "Oct, 2023",
            project: {
                name: "UI design",
                description: "Team management",
                icon: "/default-avatar.webp",
            },
            document: {
                name: "sophia-williams.pdf",
                size: "1.2 MB",
            },
            status: "Absent",
        },
        {
            name:
                faker.name.firstName() + " " + faker.name.lastName() ||
                "Arthur Taylor",
            email:
                faker.name.fullName().replace(/\s+/g, "").toLowerCase() +
                    "@gmail.com" || "arthur@example.com",
            avatar:
                faker.image.personPortrait({ size: 32 }) ||
                "/default-avatar.webp",
            title: faker.person.jobTitle() || "Entrepreneur / CEO",
            since: "Dec, 2018",
            project: {
                name: "Business plan",
                description: "Vision & Goal setting",
                icon: "/default-avatar.webp",
            },
            document: {
                name: "arthur-taylor.pdf",
                size: "2.8 MB",
            },
            status: "Active",
        },
        {
            name:
                faker.name.firstName() + " " + faker.name.lastName() ||
                "Emma Wright",
            email:
                faker.name.fullName().replace(/\s+/g, "").toLowerCase() +
                    "@gmail.com" || "emma@example.com",
            avatar:
                faker.image.personPortrait({ size: 32 }) ||
                "/default-avatar.webp",
            title: faker.person.jobTitle() || "Frontend developer",
            since: "Jan, 2023",
            project: {
                name: "SEO optimization",
                description: "Update UX",
                icon: "/default-avatar.webp",
            },
            document: {
                name: "emma-wright.pdf",
                size: "2.6 MB",
            },
            status: "Active",
        },
    ];

    // State for sorted members and sorting configuration
    const [members, setMembers] = useState(initialMembers);
    const [sortConfig, setSortConfig] = useState<{
        key:
            | "name"
            | "email"
            | "title"
            | "project"
            | "document"
            | "status"
            | null;
        direction: string;
    }>({
        key: null,
        direction: "ascending",
    });

    // Function to handle sorting
    const handleSort = (
        key: "name" | "email" | "title" | "project" | "document" | "status"
    ) => {
        let direction = "ascending";

        // If already sorting by this key, toggle direction
        if (sortConfig.key === key && sortConfig.direction === "ascending") {
            direction = "descending";
        }

        // Set the new sort configuration
        setSortConfig({ key, direction });

        // Sort the members based on the selected key and direction
        const sortedMembers = [...members].sort((a, b) => {
            // Get the values to compare based on the key
            let valueA, valueB;

            switch (key) {
                case "name":
                    valueA = a.name.toLowerCase();
                    valueB = b.name.toLowerCase();
                    break;
                case "title":
                    valueA = a.title.toLowerCase();
                    valueB = b.title.toLowerCase();
                    break;
                case "project":
                    valueA = a.project.name.toLowerCase();
                    valueB = b.project.name.toLowerCase();
                    break;
                case "document":
                    valueA = a.document.name.toLowerCase();
                    valueB = b.document.name.toLowerCase();
                    break;
                case "status":
                    valueA = a.status.toLowerCase();
                    valueB = b.status.toLowerCase();
                    break;
                default:
                    valueA = a.name.toLowerCase();
                    valueB = b.name.toLowerCase();
            }

            // Compare the values based on direction
            if (valueA < valueB) {
                return direction === "ascending" ? -1 : 1;
            }
            if (valueA > valueB) {
                return direction === "ascending" ? 1 : -1;
            }
            return 0;
        });

        setMembers(sortedMembers);
    };

    // Helper function to determine sort button appearance
    const getSortButtonClass = (key: string) => {
        if (sortConfig.key === key) {
            return sortConfig.direction === "ascending"
                ? "text-blue-500 bg-blue-50 rounded-md"
                : "text-blue-500 bg-blue-50 rounded-md rotate-180";
        }
        return "";
    };

    return (
        <div className="w-full overflow-x-auto">
            <table className="w-full overflow-x-auto text-sm rounded-md">
                <thead>
                    <tr className="bg-gray-100 rounded-lg flex items-center justify-between text-gray-500">
                        <td className="flex gap-2 items-center w-[220px] text-sm py-1.5 px-2">
                            Member name
                            <button
                                onClick={() => handleSort("name")}
                                className={`p-0.5 transition-all ${getSortButtonClass(
                                    "name"
                                )}`}
                            >
                                <ArrowSwapVertical size="12" />
                            </button>
                        </td>
                        <td className="flex gap-2 items-center w-[220px] text-sm py-1.5 px-2">
                            Title
                            <button
                                onClick={() => handleSort("title")}
                                className={`p-0.5 transition-all ${getSortButtonClass(
                                    "title"
                                )}`}
                            >
                                <ArrowSwapVertical size="12" />
                            </button>
                        </td>
                        <td className="flex gap-2 items-center w-[220px] text-sm py-1.5 px-2">
                            Project
                            <button
                                onClick={() => handleSort("project")}
                                className={`p-0.5 transition-all ${getSortButtonClass(
                                    "project"
                                )}`}
                            >
                                <ArrowSwapVertical size="12" />
                            </button>
                        </td>
                        <td className="flex gap-2 items-center w-[220px] text-sm py-1.5 px-2">
                            Member Document
                            <button
                                onClick={() => handleSort("document")}
                                className={`p-0.5 transition-all ${getSortButtonClass(
                                    "document"
                                )}`}
                            >
                                <ArrowSwapVertical size="12" />
                            </button>
                        </td>
                        <td className="flex gap-2 items-center text-sm py-1.5 px-2 w-[180px]">
                            Status
                            <button
                                onClick={() => handleSort("status")}
                                className={`p-0.5 transition-all ${getSortButtonClass(
                                    "status"
                                )}`}
                            >
                                <ArrowSwapVertical size="12" />
                            </button>
                        </td>
                    </tr>
                </thead>
                <tbody className="space-y-2 divide-y divide-gray-200 ">
                    {members.map((member, index) => (
                        <tr
                            key={index}
                            className="hover:bg-gray-100 flex items-center justify-between duration-150 text-gray-700"
                        >
                            <td className="flex gap-2 items-center w-[220px] text-sm py-1.5 px-2">
                                <Image
                                    width={32}
                                    height={32}
                                    alt={member.name}
                                    className="w-8 h-8 shrink-0 rounded-full"
                                    src={member.avatar || "/placeholder.svg"}
                                />
                                <div>
                                    <p className="text-gray-800 font-medium">
                                        {member.name}
                                    </p>
                                    <p className="text-xs">{member.email}</p>
                                </div>
                            </td>
                            <td className="flex gap-2 items-center w-[220px] text-sm py-1.5 px-2">
                                <div>
                                    <p className="text-gray-800 font-medium">
                                        {member.title}
                                    </p>
                                    <p className="text-xs">
                                        Since {member.since}
                                    </p>
                                </div>
                            </td>
                            <td className="flex gap-2 items-center w-[220px] text-sm py-1.5 px-2">
                                <div className="rounded-full p-1.5 border border-gray-300 shrink-0">
                                    <Image
                                        width={24}
                                        height={24}
                                        alt={member.project.name}
                                        src={
                                            member.project.icon ||
                                            "/placeholder.svg"
                                        }
                                        className="w-6 h-6 shrink-0"
                                    />
                                </div>
                                <div>
                                    <p className="text-gray-800 font-medium">
                                        {member.project.name}
                                    </p>
                                    <p className="text-xs">
                                        {member.project.description}
                                    </p>
                                </div>
                            </td>
                            <td className="flex gap-2 items-center w-[220px] text-sm py-1.5 px-2">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 540 598"
                                    fill="none"
                                >
                                    <path
                                        d="M509.033 183.533L356.467 30.967C342.402 16.9018 323.325 9 303.434 9H140.5C99.0786 9 65.5 42.5786 65.5 84V513.5C65.5 554.921 99.0786 588.5 140.5 588.5H456C497.421 588.5 531 554.921 531 513.5V236.566C531 216.675 523.098 197.598 509.033 183.533Z"
                                        stroke="#CED0D5"
                                        strokeWidth="18"
                                    />
                                    <path
                                        d="M334.5 10V130.5C334.5 171.921 368.079 205.5 409.5 205.5H530"
                                        stroke="#CED0D5"
                                        strokeWidth="18"
                                    />
                                    <path
                                        d="M383 271H55C24.6243 271 0 295.624 0 326V462.5C0 492.876 24.6243 517.5 55 517.5H383C413.376 517.5 438 492.876 438 462.5V326C438 295.624 413.376 271 383 271Z"
                                        fill="#E12B4D"
                                    />
                                    <path
                                        d="M63.4098 456V330.182H110.592C120.257 330.182 128.367 331.984 134.92 335.588C141.514 339.192 146.49 344.148 149.848 350.455C153.248 356.722 154.947 363.848 154.947 371.835C154.947 379.903 153.248 387.07 149.848 393.337C146.449 399.603 141.432 404.538 134.797 408.142C128.162 411.706 119.991 413.487 110.284 413.487H79.0142V394.75H107.213C112.865 394.75 117.493 393.767 121.097 391.801C124.701 389.835 127.363 387.132 129.083 383.691C130.845 380.251 131.725 376.299 131.725 371.835C131.725 367.37 130.845 363.438 129.083 360.039C127.363 356.64 124.681 353.998 121.036 352.114C117.431 350.189 112.783 349.227 107.09 349.227H86.2021V456H63.4098ZM217.38 456H174.745V330.182H218.241C230.732 330.182 241.463 332.701 250.432 337.738C259.443 342.735 266.364 349.923 271.197 359.302C276.03 368.681 278.446 379.903 278.446 392.968C278.446 406.074 276.01 417.337 271.136 426.757C266.303 436.177 259.32 443.406 250.187 448.444C241.094 453.481 230.159 456 217.38 456ZM197.537 436.279H216.275C225.039 436.279 232.35 434.682 238.207 431.488C244.064 428.252 248.466 423.44 251.415 417.05C254.364 410.62 255.839 402.593 255.839 392.968C255.839 383.343 254.364 375.357 251.415 369.009C248.466 362.619 244.104 357.848 238.33 354.694C232.596 351.5 225.469 349.902 216.95 349.902H197.537V436.279ZM300.102 456V330.182H380.704V349.288H322.894V383.446H375.175V402.552H322.894V456H300.102Z"
                                        fill="white"
                                    />
                                </svg>
                                <div>
                                    <p className="text-gray-800 font-medium">
                                        {member.document.name}
                                    </p>
                                    <p className="text-xs">
                                        {member.document.size}
                                    </p>
                                </div>
                            </td>
                            <td className="flex gap-2 items-center text-sm py-1.5 px-2 justify-between w-[180px]">
                                <div className="flex items-center gap-1 border border-gray-300 rounded-full p-1">
                                    {member.status === "Active" ? (
                                        <TickCircle
                                            variant="Bold"
                                            size={16}
                                            className="text-emerald-500"
                                        />
                                    ) : (
                                        <Slash
                                            variant="Bold"
                                            size={16}
                                            className="text-gray-400"
                                        />
                                    )}
                                    <p className="text-xs">{member.status}</p>
                                </div>
                                <button className="hover:bg-gray-200 rounded-md">
                                    <BsThreeDotsVertical size={16} />
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default MembersTable;
