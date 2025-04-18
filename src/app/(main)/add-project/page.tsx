"use client";

import {
    Avatar,
    AvatarFallback,
    AvatarImage,
} from "@/components/ui/avatar/avatar";
import { Badge } from "@/components/ui/badge/badge";
import { OutlineButton, PrimaryButton } from "@/components/ui/button/Button";
import Label from "@/components/ui/form/Label";
import Select from "@/components/ui/form/Select";
import DatePicker from "@/components/ui/form/date-picker";
import Checkbox from "@/components/ui/form/input/Checkbox";
import Input from "@/components/ui/form/input/InputField";
import TextArea from "@/components/ui/form/input/TextArea";
import Switch from "@/components/ui/form/switch/Switch";
import PageContent from "@/components/ui/layout/PageContent";
import PageNavbar, {
    PageNavbarLeftContent,
} from "@/components/ui/layout/PageNavbar";
import { AnimatePresence, motion } from "framer-motion";
import { Profile } from "iconsax-reactjs";
import { useState } from "react";
import {
    FiCalendar,
    FiChevronDown,
    FiChevronUp,
    FiInfo,
    FiPlus,
    FiSettings,
    FiUsers,
} from "react-icons/fi";

interface TeamMember {
    id: number;
    name: string;
    email: string;
    avatar: string;
}

interface FormData {
    name: string;
    description: string;
    color: string;
    emoji: string;
    members: TeamMember[];
    visibility: "private" | "public";
    startDate: Date | null;
    endDate: Date | null;
    sprintCycle: string;
    defaultDueDays: number;
    taskStatuses: ["To Do", "In Progress", "Done"];
    enableLabels: boolean;
    defaultAssignee: null;
}

const teamMembers = [
    {
        id: 1,
        name: "Alex Johnson",
        email: "alex@example.com",
        avatar: "/default-avatar.webp?height=40&width=40",
    },
    {
        id: 2,
        name: "Sam Wilson",
        email: "sam@example.com",
        avatar: "/default-avatar.webp?height=40&width=40",
    },
    {
        id: 3,
        name: "Taylor Smith",
        email: "taylor@example.com",
        avatar: "/default-avatar.webp?height=40&width=40",
    },
    {
        id: 4,
        name: "Jordan Lee",
        email: "jordan@example.com",
        avatar: "/default-avatar.webp?height=40&width=40",
    },
    {
        id: 5,
        name: "Casey Brown",
        email: "casey@example.com",
        avatar: "/default-avatar.webp?height=40&width=40",
    },
];

// Project colors
const projectColors = [
    { name: "Blue", value: "#3b5ac7" },
    { name: "Purple", value: "#8553ee" },
    { name: "Green", value: "#4caf50" },
    { name: "Orange", value: "#ff9800" },
    { name: "Red", value: "#f44336" },
    { name: "Teal", value: "#009688" },
];

// Emoji options
const emojiOptions = [
    "🚀",
    "📊",
    "💡",
    "🔍",
    "🛠️",
    "📝",
    "🎯",
    "🏆",
    "⚙️",
    "📈",
];

export default function NewProjectPage() {
    // State for form sections
    const [openSections, setOpenSections] = useState({
        basicInfo: true,
        teamAccess: true,
        timeline: true,
        taskSettings: true,
    });

    // State for form data
    const [formData, setFormData] = useState<FormData>({
        name: "",
        description: "",
        color: "#3b5ac7",
        emoji: "🚀",
        members: [],
        visibility: "private",
        startDate: null,
        endDate: null,
        sprintCycle: "weekly",
        defaultDueDays: 7,
        taskStatuses: ["To Do", "In Progress", "Done"],
        enableLabels: true,
        defaultAssignee: null,
    });

    // Toggle section
    const toggleSection = (
        section: "basicInfo" | "teamAccess" | "timeline" | "taskSettings"
    ) => {
        setOpenSections({
            ...openSections,
            [section]: !openSections[section],
        });
    };

    // Handle form input changes
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const handleChange = (field: string, value: any) => {
        setFormData({
            ...formData,
            [field]: value,
        });
    };

    // Handle member selection
    // const toggleMember = (memberId) => {
    //     const currentMembers = [...formData.members];
    //     if (currentMembers.includes(memberId)) {
    //         handleChange(
    //             "members",
    //             currentMembers.filter((id) => id !== memberId)
    //         );
    //     } else {
    //         handleChange("members", [...currentMembers, memberId]);
    //     }
    // };

    // Handle form submission
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Form submitted:", formData);
        // Here you would typically send the data to your backend
        alert("Project created successfully!");
    };

    // Add a new task status
    const addTaskStatus = () => {
        if (formData.taskStatuses.length < 8) {
            handleChange("taskStatuses", [
                ...formData.taskStatuses,
                "New Status",
            ]);
        }
    };

    // Remove a task status
    const removeTaskStatus = (index: number) => {
        const newStatuses = [...formData.taskStatuses];
        newStatuses.splice(index, 1);
        handleChange("taskStatuses", newStatuses);
    };

    // Update a task status
    // const updateTaskStatus = (
    //     index: number,
    //     value: "To Do" | "In Progress" | "Done"
    // ) => {
    //     const newStatuses = [...formData.taskStatuses];
    //     newStatuses[index] = value;
    //     handleChange("taskStatuses", newStatuses);
    // };

    // Animation variants
    const sectionVariants = {
        open: { opacity: 1, height: "auto", marginBottom: 16 },
        closed: { opacity: 0, height: 0, marginBottom: 0 },
    };

    return (
        <div>
            <PageNavbar>
                <PageNavbarLeftContent>
                    <div className="border rounded-full w-10 h-10 all-center">
                        <Profile size={18} />
                    </div>
                    <div>
                        <h1 className="text-sm font-semibold text-gray-800">
                            Add Project
                        </h1>
                        <p className="text-xs font-medium">
                            Create a new project
                        </p>
                    </div>
                </PageNavbarLeftContent>
            </PageNavbar>

            <PageContent>
                <div className="max-w-4xl mx-auto">
                    <form onSubmit={handleSubmit}>
                        {/* Basic Information Section */}
                        <div className="mb-6 overflow-hidden border border-gray-200 rounded-lg">
                            <div
                                className="flex items-center justify-between p-4 bg-white cursor-pointer"
                                onClick={() => toggleSection("basicInfo")}
                            >
                                <div className="flex items-center gap-2">
                                    <FiInfo className="text-primary" />
                                    <h2 className="text-xl font-semibold text-[#3b3b3b] font-title">
                                        Basic Information
                                    </h2>
                                </div>
                                {openSections.basicInfo ? (
                                    <FiChevronUp className="text-gray-500" />
                                ) : (
                                    <FiChevronDown className="text-gray-500" />
                                )}
                            </div>

                            <AnimatePresence>
                                {openSections.basicInfo && (
                                    <motion.div
                                        initial="closed"
                                        animate="open"
                                        exit="closed"
                                        variants={sectionVariants}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <div className="p-4 bg-white">
                                            <div className="space-y-4">
                                                <div>
                                                    <Label
                                                        htmlFor="projectName"
                                                        className="text-[#3b3b3b] font-medium"
                                                    >
                                                        Project Name{" "}
                                                        <span className="text-red-500">
                                                            *
                                                        </span>
                                                    </Label>
                                                    <Input
                                                        id="projectName"
                                                        placeholder="Enter project name"
                                                        value={formData.name}
                                                        onChange={(e) =>
                                                            handleChange(
                                                                "name",
                                                                e.target.value
                                                            )
                                                        }
                                                        required
                                                    />
                                                </div>

                                                <div>
                                                    <Label
                                                        htmlFor="projectDescription"
                                                        className="text-[#3b3b3b] font-medium"
                                                    >
                                                        Project Description
                                                    </Label>
                                                    <TextArea
                                                        placeholder="Describe your project (optional)"
                                                        value={
                                                            formData.description
                                                        }
                                                        onChange={(e) =>
                                                            handleChange(
                                                                "description",
                                                                e
                                                            )
                                                        }
                                                        className="mt-1 min-h-[100px] resize-none"
                                                    />
                                                </div>

                                                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                                                    <div>
                                                        <Label className="text-[#3b3b3b] font-medium">
                                                            Project Color
                                                        </Label>
                                                        <div className="flex flex-wrap gap-2 mt-2">
                                                            {projectColors.map(
                                                                (color) => (
                                                                    <div
                                                                        key={
                                                                            color.value
                                                                        }
                                                                        className={`w-8 h-8 rounded-full cursor-pointer transition-all ${
                                                                            formData.color ===
                                                                            color.value
                                                                                ? "ring-2 ring-offset-2 ring-primary"
                                                                                : ""
                                                                        }`}
                                                                        style={{
                                                                            backgroundColor:
                                                                                color.value,
                                                                        }}
                                                                        onClick={() =>
                                                                            handleChange(
                                                                                "color",
                                                                                color.value
                                                                            )
                                                                        }
                                                                        title={
                                                                            color.name
                                                                        }
                                                                    />
                                                                )
                                                            )}
                                                        </div>
                                                    </div>

                                                    <div>
                                                        <Label className="text-[#3b3b3b] font-medium">
                                                            Project Icon
                                                        </Label>
                                                        <div className="flex flex-wrap gap-2 mt-2">
                                                            {emojiOptions.map(
                                                                (emoji) => (
                                                                    <div
                                                                        key={
                                                                            emoji
                                                                        }
                                                                        className={`w-8 h-8 flex items-center justify-center text-xl bg-white rounded-md cursor-pointer border ${
                                                                            formData.emoji ===
                                                                            emoji
                                                                                ? "border-primary"
                                                                                : "border-gray-200"
                                                                        }`}
                                                                        onClick={() =>
                                                                            handleChange(
                                                                                "emoji",
                                                                                emoji
                                                                            )
                                                                        }
                                                                    >
                                                                        {emoji}
                                                                    </div>
                                                                )
                                                            )}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>

                        {/* Team & Access Section */}
                        <div className="mb-6 overflow-hidden border border-gray-200 rounded-lg">
                            <div
                                className="flex items-center justify-between p-4 bg-white cursor-pointer"
                                onClick={() => toggleSection("teamAccess")}
                            >
                                <div className="flex items-center gap-2">
                                    <FiUsers className="text-primary" />
                                    <h2 className="text-xl font-semibold text-[#3b3b3b] font-title">
                                        Team & Access
                                    </h2>
                                </div>
                                {openSections.teamAccess ? (
                                    <FiChevronUp className="text-gray-500" />
                                ) : (
                                    <FiChevronDown className="text-gray-500" />
                                )}
                            </div>

                            <AnimatePresence>
                                {openSections.teamAccess && (
                                    <motion.div
                                        initial="closed"
                                        animate="open"
                                        exit="closed"
                                        variants={sectionVariants}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <div className="p-4 bg-white">
                                            <div className="space-y-4">
                                                <div>
                                                    <Label className="text-[#3b3b3b] font-medium mb-2 block">
                                                        Assign Team Members
                                                    </Label>
                                                    <div className="space-y-2 max-h-[240px] overflow-y-auto p-2 border border-gray-200 rounded-md">
                                                        {teamMembers.map(
                                                            (
                                                                member: TeamMember
                                                            ) => (
                                                                <div
                                                                    key={
                                                                        member.id
                                                                    }
                                                                    className="flex items-center space-x-2 p-2 hover:bg-gray-50 rounded-md"
                                                                >
                                                                    <Checkbox
                                                                        id={`member-${member.id}`}
                                                                        checked={
                                                                            false
                                                                        }
                                                                        onChange={() =>
                                                                            handleChange(
                                                                                "members",
                                                                                member.id
                                                                            )
                                                                        }
                                                                    />
                                                                    <Avatar className="h-8 w-8">
                                                                        <AvatarImage
                                                                            src={
                                                                                member.avatar ||
                                                                                "/default-avatar.webp"
                                                                            }
                                                                            alt={
                                                                                member.name
                                                                            }
                                                                        />
                                                                        <AvatarFallback>
                                                                            {member.name.charAt(
                                                                                0
                                                                            )}
                                                                        </AvatarFallback>
                                                                    </Avatar>
                                                                    <Label
                                                                        htmlFor={`member-${member.id}`}
                                                                        className="flex-1 cursor-pointer"
                                                                    >
                                                                        <div>
                                                                            {
                                                                                member.name
                                                                            }
                                                                        </div>
                                                                        <div className="text-xs text-gray-500">
                                                                            {
                                                                                member.email
                                                                            }
                                                                        </div>
                                                                    </Label>
                                                                    <Select
                                                                        onChange={() => {}}
                                                                        options={[
                                                                            {
                                                                                value: "admin",
                                                                                label: "Admin",
                                                                            },
                                                                            {
                                                                                value: "member",
                                                                                label: "Member",
                                                                            },
                                                                            {
                                                                                value: "viewer",
                                                                                label: "Viewer",
                                                                            },
                                                                        ]}
                                                                        placeholder="Select role"
                                                                        className="!w-40"
                                                                    />
                                                                </div>
                                                            )
                                                        )}
                                                    </div>
                                                </div>

                                                <div>
                                                    <Label className="text-[#3b3b3b] font-medium">
                                                        Project Visibility
                                                    </Label>
                                                    <div className="grid grid-cols-1 gap-2 mt-2 md:grid-cols-2">
                                                        <div
                                                            className={`p-3 border rounded-md cursor-pointer transition-all ${
                                                                formData.visibility ===
                                                                "private"
                                                                    ? "border-primary bg-[#f4f6fb]"
                                                                    : "border-gray-200"
                                                            }`}
                                                            onClick={() =>
                                                                handleChange(
                                                                    "visibility",
                                                                    "private"
                                                                )
                                                            }
                                                        >
                                                            <div className="font-medium">
                                                                Private
                                                            </div>
                                                            <div className="text-sm text-gray-500">
                                                                Only selected
                                                                members
                                                            </div>
                                                        </div>
                                                        <div
                                                            className={`p-3 border rounded-md cursor-pointer transition-all ${
                                                                formData.visibility ===
                                                                "public"
                                                                    ? "border-primary bg-[#f4f6fb]"
                                                                    : "border-gray-200"
                                                            }`}
                                                            onClick={() =>
                                                                handleChange(
                                                                    "visibility",
                                                                    "public"
                                                                )
                                                            }
                                                        >
                                                            <div className="font-medium">
                                                                Public to
                                                                Workspace
                                                            </div>
                                                            <div className="text-sm text-gray-500">
                                                                All workspace
                                                                members can view
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>

                        {/* Timeline & Sprint Setup Section */}
                        <div className="mb-6 border border-gray-200 rounded-lg">
                            <div
                                className="flex items-center justify-between p-4 bg-white cursor-pointer"
                                onClick={() => toggleSection("timeline")}
                            >
                                <div className="flex items-center gap-2">
                                    <FiCalendar className="text-primary" />
                                    <h2 className="text-xl font-semibold text-[#3b3b3b] font-title">
                                        Timeline & Sprint Setup
                                    </h2>
                                </div>
                                {openSections.timeline ? (
                                    <FiChevronUp className="text-gray-500" />
                                ) : (
                                    <FiChevronDown className="text-gray-500" />
                                )}
                            </div>

                            <AnimatePresence>
                                {openSections.timeline && (
                                    <motion.div
                                        initial="closed"
                                        animate="open"
                                        exit="closed"
                                        variants={sectionVariants}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <div className="p-4 bg-white">
                                            <div className="space-y-4">
                                                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                                                    <div>
                                                        <Label className="text-[#3b3b3b] font-medium">
                                                            Start Date
                                                        </Label>
                                                        <div className="mt-1">
                                                            <DatePicker id="start-date" />
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <Label className="text-[#3b3b3b] font-medium">
                                                            End Date
                                                        </Label>
                                                        <div className="mt-1">
                                                            <DatePicker id="end-date" />
                                                        </div>
                                                    </div>
                                                </div>

                                                <div>
                                                    <Label className="text-[#3b3b3b] font-medium">
                                                        Sprint Cycle
                                                    </Label>
                                                    <Select
                                                        onChange={() => {}}
                                                        options={[
                                                            {
                                                                value: "weekly",
                                                                label: "Weekly",
                                                            },
                                                            {
                                                                value: "biweekly",
                                                                label: "Bi-weekly",
                                                            },
                                                            {
                                                                value: "monthly",
                                                                label: "Monthly",
                                                            },
                                                            {
                                                                value: "custom",
                                                                label: "Custom",
                                                            },
                                                        ]}
                                                    />
                                                </div>

                                                <div>
                                                    <Label
                                                        htmlFor="defaultDueDays"
                                                        className="text-[#3b3b3b] font-medium"
                                                    >
                                                        Default Due Days for New
                                                        Tasks
                                                    </Label>
                                                    <div className="flex items-center mt-1">
                                                        <Input
                                                            id="defaultDueDays"
                                                            type="number"
                                                            min="1"
                                                            max="30"
                                                            value={
                                                                formData.defaultDueDays
                                                            }
                                                            onChange={(e) =>
                                                                handleChange(
                                                                    "defaultDueDays",
                                                                    Number.parseInt(
                                                                        e.target
                                                                            .value
                                                                    )
                                                                )
                                                            }
                                                            className="w-20 mr-2"
                                                        />
                                                        <span className="text-gray-500 ml-1">
                                                            days after creation
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>

                        {/* Task & Workflow Settings Section */}
                        <div className="mb-6 overflow-hidden border border-gray-200 rounded-lg">
                            <div
                                className="flex items-center justify-between p-4 bg-white cursor-pointer"
                                onClick={() => toggleSection("taskSettings")}
                            >
                                <div className="flex items-center gap-2">
                                    <FiSettings className="text-primary" />
                                    <h2 className="text-xl font-semibold text-[#3b3b3b] font-title">
                                        Task & Workflow Settings
                                    </h2>
                                </div>
                                {openSections.taskSettings ? (
                                    <FiChevronUp className="text-gray-500" />
                                ) : (
                                    <FiChevronDown className="text-gray-500" />
                                )}
                            </div>

                            <AnimatePresence>
                                {openSections.taskSettings && (
                                    <motion.div
                                        initial="closed"
                                        animate="open"
                                        exit="closed"
                                        variants={sectionVariants}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <div className="p-4 bg-white">
                                            <div className="space-y-4">
                                                <div>
                                                    <div className="flex items-center justify-between mb-2">
                                                        <Label className="text-[#3b3b3b] font-medium">
                                                            Task Statuses
                                                        </Label>
                                                        <OutlineButton
                                                            type="button"
                                                            onClick={
                                                                addTaskStatus
                                                            }
                                                            disabled={
                                                                formData
                                                                    .taskStatuses
                                                                    .length >= 8
                                                            }
                                                            className="h-8"
                                                        >
                                                            <FiPlus className="mr-1" />{" "}
                                                            Add Status
                                                        </OutlineButton>
                                                    </div>
                                                    <div className="space-y-2">
                                                        {formData.taskStatuses.map(
                                                            (status, index) => (
                                                                <div
                                                                    key={index}
                                                                    className="flex items-center gap-2"
                                                                >
                                                                    <Input
                                                                        value={
                                                                            status
                                                                        }
                                                                    />
                                                                    <OutlineButton
                                                                        type="button"
                                                                        onClick={() =>
                                                                            removeTaskStatus(
                                                                                index
                                                                            )
                                                                        }
                                                                        disabled={
                                                                            formData
                                                                                .taskStatuses
                                                                                .length <=
                                                                            1
                                                                        }
                                                                        className="h-10 aspect-square px-2 text-gray-500 hover:text-red-500"
                                                                    >
                                                                        ✕
                                                                    </OutlineButton>
                                                                </div>
                                                            )
                                                        )}
                                                    </div>
                                                </div>

                                                <div className="flex items-center justify-between">
                                                    <div>
                                                        <Label
                                                            htmlFor="enableLabels"
                                                            className="text-[#3b3b3b] font-medium"
                                                        >
                                                            Enable Labels
                                                        </Label>
                                                        <p className="text-sm text-gray-500">
                                                            Allow task
                                                            categorization with
                                                            labels
                                                        </p>
                                                    </div>
                                                    <Switch
                                                        label=""
                                                        defaultChecked={
                                                            formData.enableLabels
                                                        }
                                                        onChange={(
                                                            checked
                                                        ) =>
                                                            handleChange(
                                                                "enableLabels",
                                                                checked
                                                            )
                                                        }
                                                    />
                                                </div>

                                                {formData.enableLabels && (
                                                    <motion.div
                                                        initial={{
                                                            opacity: 0,
                                                            height: 0,
                                                        }}
                                                        animate={{
                                                            opacity: 1,
                                                            height: "auto",
                                                        }}
                                                        exit={{
                                                            opacity: 0,
                                                            height: 0,
                                                        }}
                                                        transition={{
                                                            duration: 0.3,
                                                        }}
                                                        className="pl-4 border-l-2 border-[#8fb2f9]"
                                                    >
                                                        <Label className="text-[#3b3b3b] font-medium">
                                                            Predefined Labels
                                                        </Label>
                                                        <div className="flex flex-wrap gap-2 mt-2">
                                                            <Badge className="bg-red-100 text-red-800 hover:bg-red-200">
                                                                Bug
                                                            </Badge>
                                                            <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-200">
                                                                Feature
                                                            </Badge>
                                                            <Badge className="bg-green-100 text-green-800 hover:bg-green-200">
                                                                Enhancement
                                                            </Badge>
                                                            <Badge className="bg-yellow-100 text-yellow-800 hover:bg-yellow-200">
                                                                Documentation
                                                            </Badge>
                                                            <Badge className="bg-purple-100 text-purple-800 hover:bg-purple-200">
                                                                Design
                                                            </Badge>
                                                            <Badge className="bg-gray-100 text-gray-800 hover:bg-gray-200">
                                                                + Add New
                                                            </Badge>
                                                        </div>
                                                    </motion.div>
                                                )}

                                                <div>
                                                    <Label className="text-[#3b3b3b] font-medium">
                                                        Default Assignee
                                                    </Label>
                                                    <Select
                                                        options={[
                                                            {
                                                                value: "none",
                                                                label: "None (Manually assign)",
                                                            },
                                                            {
                                                                value: "creator",
                                                                label: "Task Creator",
                                                            },
                                                            ...teamMembers.map(
                                                                (member) => ({
                                                                    value: member.id.toString(),
                                                                    label: member.name,
                                                                })
                                                            ),
                                                        ]}
                                                        onChange={() => {}}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>

                        {/* Form Actions */}
                        <motion.div
                            className="flex justify-end gap-3 mt-8"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.3 }}
                        >
                            <OutlineButton type="button">Cancel</OutlineButton>
                            <PrimaryButton
                                type="submit"
                                className="bg-primary hover:bg-[#2d479e] text-white"
                            >
                                Create Project
                            </PrimaryButton>
                        </motion.div>
                    </form>
                </div>
            </PageContent>
        </div>
    );
}
