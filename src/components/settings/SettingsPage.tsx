"use client";

import { faker } from "@faker-js/faker";
import { motion, Variants } from "framer-motion";
import Image from "next/image";
import { ReactNode, useState } from "react";
import {
    FiBell,
    FiCalendar,
    FiCheckSquare,
    FiClock,
    FiEdit,
    FiFolder,
    FiLock,
    FiMail,
    FiPlusCircle,
    FiSave,
    FiSettings,
    FiTag,
    FiTrash2,
    FiUsers,
} from "react-icons/fi";

// Define types for components
type SettingsTabProps = {
    icon: ReactNode;
    title: string;
    id: string;
    activeTab: string;
    setActiveTab: (tab: string) => void;
    variants: Variants;
};

type DateFormatOptionProps = {
    format: string;
    example: string;
};

type StatusItemProps = {
    color: string;
    name: string;
    count: number;
};

type LabelItemProps = {
    color: string;
    name: string;
};

type TeamMemberProps = {
    avatar: string;
    name: string;
    email: string;
    role: string;
};

type RolePermissionProps = {
    role: string;
    description: string;
};

type NotificationSettingProps = {
    title: string;
    description: string;
    defaultChecked: boolean;
};

export default function SettingsPage() {
    const [activeTab, setActiveTab] = useState<string>("workspace");

    const tabVariants: Variants = {
        inactive: { opacity: 0.6 },
        active: { opacity: 1 },
    };

    const contentVariants: Variants = {
        hidden: { opacity: 0, x: -20 },
        visible: {
            opacity: 1,
            x: 0,
            transition: { duration: 0.3 },
        },
    };

    return (
        <div className="flex flex-col lg:flex-row gap-8">
            {/* Sidebar */}
            <div className="w-full lg:w-64 shrink-0">
                <div className="bg-white rounded-xl border border-gray-200 p-3 sticky top-4">
                    <nav className="space-y-1">
                        <SettingsTab
                            icon={<FiSettings />}
                            title="Workspace Settings"
                            id="workspace"
                            activeTab={activeTab}
                            setActiveTab={setActiveTab}
                            variants={tabVariants}
                        />
                        <SettingsTab
                            icon={<FiFolder />}
                            title="Project Configuration"
                            id="project"
                            activeTab={activeTab}
                            setActiveTab={setActiveTab}
                            variants={tabVariants}
                        />
                        <SettingsTab
                            icon={<FiUsers />}
                            title="Team & Permissions"
                            id="team"
                            activeTab={activeTab}
                            setActiveTab={setActiveTab}
                            variants={tabVariants}
                        />
                        <SettingsTab
                            icon={<FiBell />}
                            title="Notifications"
                            id="notifications"
                            activeTab={activeTab}
                            setActiveTab={setActiveTab}
                            variants={tabVariants}
                        />
                    </nav>
                </div>
            </div>

            {/* Content */}
            <div className="flex-1">
                <div className="bg-white rounded-xl border border-gray-200 p-4">
                    {activeTab === "workspace" && (
                        <motion.div
                            initial="hidden"
                            animate="visible"
                            variants={contentVariants}
                            className="space-y-4"
                        >
                            <h2 className="text-xl font-bold font-title border-b border-gray-200 pb-2">
                                Workspace Settings
                            </h2>

                            <div className="space-y-6">
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-sm font-medium mb-2">
                                            Time Zone
                                        </label>
                                        <select className="w-full text-sm px-4 py-2 border border-gray-300 rounded-lg outline-none">
                                            <option>
                                                UTC (Coordinated Universal Time)
                                            </option>
                                            <option>
                                                EST (Eastern Standard Time)
                                            </option>
                                            <option>
                                                PST (Pacific Standard Time)
                                            </option>
                                            <option>
                                                IST (Indian Standard Time)
                                            </option>
                                        </select>
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium mb-2">
                                            Locale
                                        </label>
                                        <select className="w-full text-sm px-4 py-2 border border-gray-300 rounded-lg outline-none">
                                            <option>English (US)</option>
                                            <option>English (UK)</option>
                                            <option>Spanish</option>
                                            <option>French</option>
                                            <option>German</option>
                                        </select>
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-sm font-medium mb-2">
                                        Default Date Format
                                    </label>
                                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                                        <DateFormatOption
                                            format="MM/DD/YYYY"
                                            example="12/31/2023"
                                        />
                                        <DateFormatOption
                                            format="DD/MM/YYYY"
                                            example="31/12/2023"
                                        />
                                        <DateFormatOption
                                            format="YYYY-MM-DD"
                                            example="2023-12-31"
                                        />
                                        <DateFormatOption
                                            format="DD.MM.YYYY"
                                            example="31.12.2023"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-sm font-medium mb-2">
                                        Workspace Invite Link
                                    </label>
                                    <div className="flex items-center">
                                        <input
                                            type="text"
                                            className="flex-1 px-4 py-2 border border-gray-300 rounded-l-lg outline-none"
                                            value="https://trackwise.app/invite"
                                            readOnly
                                        />
                                        <button className="px-4 py-2 bg-[#3b5ac7] border border-primary text-white rounded-r-lg hover:bg-[#2d4aa0] transition-colors">
                                            Copy
                                        </button>
                                    </div>
                                    <div className="mt-2">
                                        <label className="inline-flex items-center">
                                            <input
                                                type="checkbox"
                                                className="rounded text-[#3b5ac7]"
                                            />
                                            <span className="ml-2 text-sm text-gray-600">
                                                Anyone with the link can join as
                                                a viewer
                                            </span>
                                        </label>
                                    </div>
                                </div>
                            </div>

                            <div className="flex justify-end">
                                <button className="px-6 py-2 bg-[#3b5ac7] text-white rounded-lg hover:bg-[#2d4aa0] transition-colors flex items-center gap-2">
                                    <FiSave />
                                    Save Changes
                                </button>
                            </div>
                        </motion.div>
                    )}

                    {activeTab === "project" && (
                        <motion.div
                            initial="hidden"
                            animate="visible"
                            variants={contentVariants}
                            className="space-y-4"
                        >
                            <h2 className="text-xl font-bold font-title border-b border-gray-200 pb-2">
                                Project Configuration
                            </h2>

                            <div className="space-y-8">
                                <div>
                                    <div className="flex items-center justify-between mb-4">
                                        <h3 className="font-medium flex items-center gap-2">
                                            <FiCheckSquare className="text-[#3b5ac7]" />
                                            Task Status Management
                                        </h3>
                                        <button className="px-3 py-1.5 bg-gray-100 hover:bg-gray-200 rounded-lg text-sm flex items-center gap-1 transition-colors">
                                            <FiPlusCircle className="text-[#3b5ac7]" />
                                            Add Status
                                        </button>
                                    </div>

                                    <div className="space-y-3">
                                        <StatusItem
                                            color="#E5E7EB"
                                            name="To Do"
                                            count={12}
                                        />
                                        <StatusItem
                                            color="#8FB2F9"
                                            name="In Progress"
                                            count={5}
                                        />
                                        <StatusItem
                                            color="#FCD34D"
                                            name="Review"
                                            count={3}
                                        />
                                        <StatusItem
                                            color="#10B981"
                                            name="Done"
                                            count={24}
                                        />
                                    </div>
                                </div>

                                <div>
                                    <div className="flex items-center justify-between mb-4">
                                        <h3 className="font-medium flex items-center gap-2">
                                            <FiTag className="text-[#3b5ac7]" />
                                            Label Management
                                        </h3>
                                        <button className="px-3 py-1.5 bg-gray-100 hover:bg-gray-200 rounded-lg text-sm flex items-center gap-1 transition-colors">
                                            <FiPlusCircle className="text-[#3b5ac7]" />
                                            Add Label
                                        </button>
                                    </div>

                                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                                        <LabelItem color="#EF4444" name="Bug" />
                                        <LabelItem
                                            color="#3B82F6"
                                            name="Feature"
                                        />
                                        <LabelItem
                                            color="#8B5CF6"
                                            name="Enhancement"
                                        />
                                        <LabelItem
                                            color="#EC4899"
                                            name="Design"
                                        />
                                        <LabelItem
                                            color="#F59E0B"
                                            name="Documentation"
                                        />
                                        <LabelItem
                                            color="#10B981"
                                            name="Approved"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <h3 className="font-medium flex items-center gap-2 mb-4">
                                        <FiFolder className="text-[#3b5ac7]" />
                                        Default Project Template
                                    </h3>

                                    <div className="grid md:grid-cols-2 gap-4">
                                        <div className="border border-gray-200 rounded-lg p-4 hover:border-[#3b5ac7] cursor-pointer transition-colors">
                                            <div className="flex justify-between items-start">
                                                <h4 className="font-medium">
                                                    Kanban Board
                                                </h4>
                                                <div className="h-4 w-4 rounded-full bg-[#3b5ac7] flex items-center justify-center">
                                                    <div className="h-2 w-2 rounded-full bg-white"></div>
                                                </div>
                                            </div>
                                            <p className="text-sm text-gray-500 mt-1">
                                                Visual task management with
                                                customizable columns
                                            </p>
                                        </div>

                                        <div className="border border-gray-200 rounded-lg p-4 hover:border-[#3b5ac7] cursor-pointer transition-colors">
                                            <div className="flex justify-between items-start">
                                                <h4 className="font-medium">
                                                    Scrum Board
                                                </h4>
                                                <div className="h-4 w-4 rounded-full border border-gray-300"></div>
                                            </div>
                                            <p className="text-sm text-gray-500 mt-1">
                                                Agile project management with
                                                sprints and backlog
                                            </p>
                                        </div>

                                        <div className="border border-gray-200 rounded-lg p-4 hover:border-[#3b5ac7] cursor-pointer transition-colors">
                                            <div className="flex justify-between items-start">
                                                <h4 className="font-medium">
                                                    List View
                                                </h4>
                                                <div className="h-4 w-4 rounded-full border border-gray-300"></div>
                                            </div>
                                            <p className="text-sm text-gray-500 mt-1">
                                                Simple list-based task
                                                management
                                            </p>
                                        </div>

                                        <div className="border border-gray-200 rounded-lg p-4 hover:border-[#3b5ac7] cursor-pointer transition-colors">
                                            <div className="flex justify-between items-start">
                                                <h4 className="font-medium">
                                                    Gantt Chart
                                                </h4>
                                                <div className="h-4 w-4 rounded-full border border-gray-300"></div>
                                            </div>
                                            <p className="text-sm text-gray-500 mt-1">
                                                Timeline-based project planning
                                                and scheduling
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div>
                                    <h3 className="font-medium flex items-center gap-2 mb-4">
                                        <FiCalendar className="text-[#3b5ac7]" />
                                        Sprint Length / Default Due Dates
                                    </h3>

                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div>
                                            <label className="block text-sm font-medium mb-2">
                                                Default Sprint Length
                                            </label>
                                            <select className="w-full text-sm px-4 py-2 border border-gray-300 rounded-lg outline-none">
                                                <option>1 week</option>
                                                <option>2 weeks</option>
                                                <option>3 weeks</option>
                                                <option>4 weeks</option>
                                            </select>
                                        </div>

                                        <div>
                                            <label className="block text-sm font-medium mb-2">
                                                Default Task Due Date
                                            </label>
                                            <select className="w-full text-sm px-4 py-2 border border-gray-300 rounded-lg outline-none">
                                                <option>End of sprint</option>
                                                <option>
                                                    3 days from creation
                                                </option>
                                                <option>
                                                    1 week from creation
                                                </option>
                                                <option>No default</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="flex justify-end">
                                <button className="px-6 py-2 bg-[#3b5ac7] text-white rounded-lg hover:bg-[#2d4aa0] transition-colors flex items-center gap-2">
                                    <FiSave />
                                    Save Changes
                                </button>
                            </div>
                        </motion.div>
                    )}

                    {activeTab === "team" && (
                        <motion.div
                            initial="hidden"
                            animate="visible"
                            variants={contentVariants}
                            className="space-y-4"
                        >
                            <h2 className="text-xl font-bold font-title border-b border-gray-200 pb-2">
                                Team & Permissions
                            </h2>

                            <div className="space-y-8">
                                <div>
                                    <div className="flex items-center justify-between mb-4">
                                        <h3 className="font-medium flex items-center gap-2">
                                            <FiUsers className="text-[#3b5ac7]" />
                                            Manage Members
                                        </h3>
                                        <button className="px-3 py-1.5 bg-[#3b5ac7] text-white rounded-lg text-sm flex items-center gap-1 transition-colors hover:bg-[#2d4aa0]">
                                            <FiPlusCircle />
                                            Invite Member
                                        </button>
                                    </div>

                                    <div className="overflow-x-auto">
                                        <table className="min-w-full divide-y divide-gray-200">
                                            <thead className="bg-gray-50">
                                                <tr>
                                                    <th
                                                        scope="col"
                                                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                                    >
                                                        User
                                                    </th>
                                                    <th
                                                        scope="col"
                                                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                                    >
                                                        Email
                                                    </th>
                                                    <th
                                                        scope="col"
                                                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                                    >
                                                        Role
                                                    </th>
                                                    <th
                                                        scope="col"
                                                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                                    >
                                                        Actions
                                                    </th>
                                                </tr>
                                            </thead>
                                            <tbody className="bg-white divide-y divide-gray-200">
                                                <TeamMember
                                                    avatar={faker.image.personPortrait(
                                                        { size: 64 }
                                                    )}
                                                    name={
                                                        faker.person.firstName() +
                                                            " " +
                                                            faker.person.lastName() ||
                                                        "Steve Jobs"
                                                    }
                                                    email={
                                                        faker.person
                                                            .fullName()
                                                            .replace(/\s+/g, "")
                                                            .toLowerCase() +
                                                            "@gmail.com" ||
                                                        "steve@example.com"
                                                    }
                                                    role="Admin"
                                                />
                                                <TeamMember
                                                    avatar={faker.image.personPortrait(
                                                        { size: 64 }
                                                    )}
                                                    name={
                                                        faker.person.firstName() +
                                                            " " +
                                                            faker.person.lastName() ||
                                                        "Emma Watson"
                                                    }
                                                    email={
                                                        faker.person
                                                            .fullName()
                                                            .replace(/\s+/g, "")
                                                            .toLowerCase() +
                                                            "@gmail.com" ||
                                                        "emma@example.com"
                                                    }
                                                    role="Member"
                                                />
                                                <TeamMember
                                                    avatar={faker.image.personPortrait(
                                                        { size: 64 }
                                                    )}
                                                    name={
                                                        faker.person.firstName() +
                                                            " " +
                                                            faker.person.lastName() ||
                                                        "Walter White"
                                                    }
                                                    email={
                                                        faker.person
                                                            .fullName()
                                                            .replace(/\s+/g, "")
                                                            .toLowerCase() +
                                                            "@gmail.com" ||
                                                        "walter@example.com"
                                                    }
                                                    role="Member"
                                                />
                                                <TeamMember
                                                    avatar={
                                                        faker.image.personPortrait(
                                                            { size: 64 }
                                                        ) ||
                                                        "/default-avatar.webp"
                                                    }
                                                    name={
                                                        faker.person.firstName() +
                                                            " " +
                                                            faker.person.lastName() ||
                                                        "Dwayne Johnson"
                                                    }
                                                    email={
                                                        faker.person
                                                            .fullName()
                                                            .replace(/\s+/g, "")
                                                            .toLowerCase() +
                                                            "@gmail.com" ||
                                                        "dwayne@example.com"
                                                    }
                                                    role="Viewer"
                                                />
                                            </tbody>
                                        </table>
                                    </div>
                                </div>

                                <div>
                                    <h3 className="font-medium flex items-center gap-2 mb-4">
                                        <FiLock className="text-[#3b5ac7]" />
                                        Roles & Permissions
                                    </h3>

                                    <div className="space-y-4">
                                        <RolePermission
                                            role="Admin"
                                            description="Full access to all projects, settings, and member management"
                                        />
                                        <RolePermission
                                            role="Member"
                                            description="Can create and edit tasks, comment, and view all projects"
                                        />
                                        <RolePermission
                                            role="Viewer"
                                            description="Read-only access to assigned projects and tasks"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <h3 className="font-medium flex items-center gap-2 mb-4">
                                        <FiUsers className="text-[#3b5ac7]" />
                                        Blocked Users / Access Control
                                    </h3>

                                    <div className="bg-gray-50 rounded-lg p-6 text-center">
                                        <p className="text-gray-500">
                                            No blocked users
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="flex justify-end">
                                <button className="px-6 py-2 bg-[#3b5ac7] text-white rounded-lg hover:bg-[#2d4aa0] transition-colors flex items-center gap-2">
                                    <FiSave />
                                    Save Changes
                                </button>
                            </div>
                        </motion.div>
                    )}

                    {activeTab === "notifications" && (
                        <motion.div
                            initial="hidden"
                            animate="visible"
                            variants={contentVariants}
                            className="space-y-4"
                        >
                            <h2 className="text-xl font-bold font-title border-b border-gray-200 pb-2">
                                Notifications
                            </h2>

                            <div className="space-y-8">
                                <div>
                                    <h3 className="font-medium flex items-center gap-2 mb-4">
                                        <FiMail className="text-[#3b5ac7]" />
                                        Email Preferences
                                    </h3>

                                    <div className="space-y-4">
                                        <NotificationSetting
                                            title="Task Assignments"
                                            description="Receive emails when you are assigned to a task"
                                            defaultChecked={true}
                                        />
                                        <NotificationSetting
                                            title="Task Comments"
                                            description="Receive emails when someone comments on your task"
                                            defaultChecked={true}
                                        />
                                        <NotificationSetting
                                            title="Mentions"
                                            description="Receive emails when someone mentions you"
                                            defaultChecked={true}
                                        />
                                        <NotificationSetting
                                            title="Status Changes"
                                            description="Receive emails when the status of your task changes"
                                            defaultChecked={false}
                                        />
                                        <NotificationSetting
                                            title="Weekly Reports"
                                            description="Receive weekly summary of your tasks and projects"
                                            defaultChecked={true}
                                        />
                                    </div>
                                </div>

                                <div>
                                    <h3 className="font-medium flex items-center gap-2 mb-4">
                                        <FiBell className="text-[#3b5ac7]" />
                                        In-app Notifications
                                    </h3>

                                    <div className="space-y-4">
                                        <NotificationSetting
                                            title="All Notifications"
                                            description="Enable or disable all in-app notifications"
                                            defaultChecked={true}
                                        />
                                        <NotificationSetting
                                            title="Sound Alerts"
                                            description="Play sound when receiving new notifications"
                                            defaultChecked={false}
                                        />
                                    </div>
                                </div>

                                <div>
                                    <h3 className="font-medium flex items-center gap-2 mb-4">
                                        <FiClock className="text-[#3b5ac7]" />
                                        Daily / Weekly Digest Settings
                                    </h3>

                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div>
                                            <label className="block text-sm font-medium mb-2">
                                                Daily Digest Time
                                            </label>
                                            <select className="w-full px-4 py-2 border border-gray-300 rounded-lg outline-none">
                                                <option>9:00 AM</option>
                                                <option>12:00 PM</option>
                                                <option>5:00 PM</option>
                                                <option>Disabled</option>
                                            </select>
                                        </div>

                                        <div>
                                            <label className="block text-sm font-medium mb-2">
                                                Weekly Digest Day
                                            </label>
                                            <select className="w-full px-4 py-2 border border-gray-300 rounded-lg outline-none">
                                                <option>Monday</option>
                                                <option>Friday</option>
                                                <option>Sunday</option>
                                                <option>Disabled</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="flex justify-end">
                                <button className="px-6 py-2 bg-[#3b5ac7] text-white rounded-lg hover:bg-[#2d4aa0] transition-colors flex items-center gap-2">
                                    <FiSave />
                                    Save Changes
                                </button>
                            </div>
                        </motion.div>
                    )}
                </div>
            </div>
        </div>
    );
}

// Component for settings tabs
function SettingsTab({
    icon,
    title,
    id,
    activeTab,
    setActiveTab,
    variants,
}: SettingsTabProps) {
    return (
        <motion.button
            variants={variants}
            initial="inactive"
            animate={activeTab === id ? "active" : "inactive"}
            onClick={() => setActiveTab(id)}
            className={`flex items-center w-full px-3 py-3 text-left rounded-lg transition-colors text-sm font-title outline-none ${
                activeTab === id
                    ? "bg-[#3b5ac7] text-white"
                    : "hover:bg-gray-100"
            }`}
        >
            <span className="mr-3">{icon}</span>
            <span className="font-medium">{title}</span>
        </motion.button>
    );
}

// Component for date format options
function DateFormatOption({ format, example }: DateFormatOptionProps) {
    return (
        <label className="flex items-center p-3 border border-gray-200 rounded-lg cursor-pointer hover:border-[#3b5ac7] transition-colors">
            <input
                type="radio"
                name="dateFormat"
                className="h-4 w-4 text-[#3b5ac7]"
            />
            <div className="ml-3">
                <div className="text-sm font-medium">{format}</div>
                <div className="text-xs text-gray-500">{example}</div>
            </div>
        </label>
    );
}

// Component for status items
function StatusItem({ color, name, count }: StatusItemProps) {
    return (
        <div className="flex items-center justify-between p-2 border border-gray-200 rounded-lg">
            <div className="flex items-center">
                <div
                    className="h-4 w-4 rounded-full mr-3"
                    style={{ backgroundColor: color }}
                ></div>
                <span className="text-sm">{name}</span>
            </div>
            <div className="flex items-center space-x-2">
                <span className="text-sm text-gray-500">{count} tasks</span>
                <button className="p-1.5 text-gray-400 hover:text-gray-600 transition-colors">
                    <FiEdit size={16} />
                </button>
                <button className="p-1.5 text-gray-400 hover:text-red-500 transition-colors">
                    <FiTrash2 size={16} />
                </button>
            </div>
        </div>
    );
}

// Component for label items
function LabelItem({ color, name }: LabelItemProps) {
    return (
        <div className="flex items-center justify-between p-3 border border-gray-200 rounded-lg">
            <div className="flex items-center">
                <div
                    className="h-3 w-3 rounded-full mr-2"
                    style={{ backgroundColor: color }}
                ></div>
                <span className="text-sm">{name}</span>
            </div>
            <button className="p-1 text-gray-400 hover:text-red-500 transition-colors">
                <FiTrash2 size={14} />
            </button>
        </div>
    );
}

// Component for team members
function TeamMember({ avatar, name, email, role }: TeamMemberProps) {
    return (
        <tr>
            <td className="px-6 py-4 whitespace-nowrap">
                <div className="flex items-center">
                    <div className="h-10 w-10 flex-shrink-0">
                        <Image
                            className="h-10 w-10 rounded-full"
                            src={avatar || "/default-avatar.webp"}
                            alt=""
                            width={40}
                            height={40}
                        />
                    </div>
                    <div className="ml-4">
                        <div className="text-sm font-medium text-gray-900">
                            {name}
                        </div>
                    </div>
                </div>
            </td>
            <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm text-gray-500">{email}</div>
            </td>
            <td className="px-6 py-4 whitespace-nowrap">
                <span
                    className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                        role === "Admin"
                            ? "bg-purple-100 text-purple-800"
                            : role === "Member"
                            ? "bg-green-100 text-green-800"
                            : "bg-gray-100 text-gray-800"
                    }`}
                >
                    {role}
                </span>
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                <div className="flex space-x-2">
                    <button className="text-gray-400 hover:text-gray-600 transition-colors">
                        <FiEdit size={16} />
                    </button>
                    {role !== "Admin" && (
                        <button className="text-gray-400 hover:text-red-500 transition-colors">
                            <FiTrash2 size={16} />
                        </button>
                    )}
                </div>
            </td>
        </tr>
    );
}

// Component for role permissions
function RolePermission({ role, description }: RolePermissionProps) {
    return (
        <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
            <div>
                <h4 className="font-medium">{role}</h4>
                <p className="text-sm text-gray-500 mt-1">{description}</p>
            </div>
            <button className="text-[#3b5ac7] hover:text-[#2d4aa0] transition-colors">
                <FiEdit size={18} />
            </button>
        </div>
    );
}

// Component for notification settings
function NotificationSetting({
    title,
    description,
    defaultChecked,
}: NotificationSettingProps) {
    return (
        <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
            <div>
                <h4 className="text-sm font-medium">{title}</h4>
                <p className="text-xs text-gray-500 mt-1">{description}</p>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
                <input
                    type="checkbox"
                    defaultChecked={defaultChecked}
                    className="sr-only peer"
                />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#3b5ac7]"></div>
            </label>
        </div>
    );
}
