"use client";
import type { ProjectData } from "@/app/(main)/[project]/page";
import type React from "react";

import { OutlineButton, PrimaryButton } from "@/components/ui/button/Button";
import { Card, CardContent } from "@/components/ui/card/card";
import Input from "@/components/ui/form/input/InputField";
import Textarea from "@/components/ui/form/input/TextArea";
import Label from "@/components/ui/form/Label";
import Switch from "@/components/ui/form/switch/Switch";
import { motion } from "framer-motion";
import { useState } from "react";
import { FiPlus } from "react-icons/fi";
import { Badge } from "../ui/badge/badge";

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

const SettingsTab: React.FC<{ projectData: ProjectData }> = ({
    projectData,
}) => {
    const [selectedColor, setSelectedColor] = useState(projectData.color);
    const [selectedIcon, setSelectedIcon] = useState(projectData.emoji);
    const [taskStatus, setTaskStatus] = useState(projectData.taskStatuses);
    const [formData, setFormData] = useState({
        name: projectData.name,
        description: projectData.description,
        color: selectedColor,
        emoji: selectedIcon,
        taskStatuses: taskStatus,
        enableLabels: projectData.enableLabels,
    });

    const handleColorChange = (color: string) => {
        setSelectedColor(color);
        setFormData({ ...formData, color });
    };

    const handleIconChange = (emoji: string) => {
        setSelectedIcon(emoji);
        setFormData({ ...formData, emoji });
    };

    const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, name: e.target.value });
    };

    const handleDescriptionChange = (
        e: React.ChangeEvent<HTMLTextAreaElement>
    ) => {
        setFormData({ ...formData, description: e.target.value });
    };

    const handleLabelsToggle = (checked: boolean) => {
        setFormData({ ...formData, enableLabels: checked });
    };

    const addTaskStatus = () => {
        const newTaskStatus = [...taskStatus, ""];
        setTaskStatus(newTaskStatus);
        setFormData({ ...formData, taskStatuses: newTaskStatus });
    };

    const updateTaskStatus = (index: number, value: string) => {
        const newTaskStatus = [...taskStatus];
        newTaskStatus[index] = value;
        setTaskStatus(newTaskStatus);
        setFormData({ ...formData, taskStatuses: newTaskStatus });
    };

    const removeTaskStatus = (index: number) => {
        const newTaskStatus = [...taskStatus];
        newTaskStatus.splice(index, 1);
        setTaskStatus(newTaskStatus);
        setFormData({ ...formData, taskStatuses: newTaskStatus });
    };

    const handleSaveChanges = async (e: React.MouseEvent) => {
        e.preventDefault();

        try {
            console.log("Changes saved successfully", formData);
        } catch (error) {
            console.error("Failed to save changes", error);
        }
    };

    const handleArchiveProject = () => {
        if (window.confirm("Are you sure you want to archive this project?")) {
            console.log("Project archived");
        }
    };

    const handleDeleteProject = () => {
        if (
            window.confirm(
                "Are you sure you want to permanently delete this project? This action cannot be undone."
            )
        ) {
            console.log("Project deleted");
        }
    };

    return (
        <div className="mt-6">
            <Card className="border-none shadow-sm">
                <CardContent className="p-6">
                    <div className="flex justify-between items-center mb-6">
                        <h2 className="text-lg font-medium">
                            Project Settings
                        </h2>
                        <PrimaryButton
                            className="bg-[#3b5ac7] hover:bg-[#2d479e]"
                            onClick={handleSaveChanges}
                        >
                            Save Changes
                        </PrimaryButton>
                    </div>

                    <div className="space-y-6">
                        <div>
                            <h3 className="text-md font-medium mb-3">
                                General Settings
                            </h3>
                            <div className="space-y-4 border border-gray-200 rounded-md p-4">
                                <div>
                                    <Label
                                        htmlFor="projectName"
                                        className="text-[#3b3b3b] font-medium"
                                    >
                                        Project Name
                                    </Label>
                                    <Input
                                        id="projectName"
                                        value={formData.name}
                                        onChange={handleNameChange}
                                        className="mt-1"
                                    />
                                </div>

                                <div>
                                    <Label
                                        htmlFor="projectDescription"
                                        className="text-[#3b3b3b] font-medium"
                                    >
                                        Project Description
                                    </Label>
                                    <Textarea
                                        id="projectDescription"
                                        value={formData.description}
                                        onChange={handleDescriptionChange}
                                        className="mt-1 min-h-[100px]"
                                    />
                                </div>

                                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                                    <div>
                                        <Label className="text-[#3b3b3b] font-medium">
                                            Project Color
                                        </Label>
                                        <div className="flex flex-wrap gap-2 mt-2">
                                            {projectColors.map((color) => (
                                                <div
                                                    key={color.value}
                                                    className={`w-8 h-8 rounded-full cursor-pointer transition-all ${
                                                        selectedColor ===
                                                        color.value
                                                            ? "ring-2 ring-offset-2 ring-primary"
                                                            : ""
                                                    }`}
                                                    style={{
                                                        backgroundColor:
                                                            color.value,
                                                    }}
                                                    onClick={() =>
                                                        handleColorChange(
                                                            color.value
                                                        )
                                                    }
                                                    title={color.name}
                                                />
                                            ))}
                                        </div>
                                    </div>

                                    <div>
                                        <Label className="text-[#3b3b3b] font-medium">
                                            Project Icon
                                        </Label>
                                        <div className="flex flex-wrap gap-2 mt-2">
                                            {emojiOptions.map((emoji) => (
                                                <div
                                                    key={emoji}
                                                    className={`w-8 h-8 flex items-center justify-center text-xl bg-white rounded-md cursor-pointer border ${
                                                        selectedIcon === emoji
                                                            ? "border-primary"
                                                            : "border-gray-200"
                                                    }`}
                                                    onClick={() =>
                                                        handleIconChange(emoji)
                                                    }
                                                >
                                                    {emoji}
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div>
                            <h3 className="text-md font-medium mb-3">
                                Workflow Settings
                            </h3>
                            <div className="space-y-4 border border-gray-200 rounded-md p-4">
                                <div>
                                    <Label className="text-[#3b3b3b] font-medium">
                                        Task Statuses
                                    </Label>
                                    <div className="space-y-2 mt-2">
                                        {taskStatus.map((status, index) => (
                                            <div
                                                key={index}
                                                className="flex items-center gap-2"
                                            >
                                                <Input
                                                    value={status}
                                                    onChange={(e) =>
                                                        updateTaskStatus(
                                                            index,
                                                            e.target.value
                                                        )
                                                    }
                                                    className="flex-1"
                                                />
                                                <OutlineButton
                                                    type="button"
                                                    className="h-10 px-2 text-gray-500 hover:text-red-500"
                                                    onClick={() =>
                                                        removeTaskStatus(index)
                                                    }
                                                >
                                                    ✕
                                                </OutlineButton>
                                            </div>
                                        ))}
                                        <OutlineButton
                                            type="button"
                                            className="mt-2"
                                            onClick={addTaskStatus}
                                        >
                                            <FiPlus className="w-4 h-4 mr-1" />{" "}
                                            Add Status
                                        </OutlineButton>
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
                                            Allow task categorization with
                                            labels
                                        </p>
                                    </div>
                                    <Switch
                                        label=""
                                        defaultChecked={formData.enableLabels}
                                        onChange={handleLabelsToggle}
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
                            </div>
                        </div>

                        <div>
                            <h3 className="text-md font-medium mb-3">
                                Danger Zone
                            </h3>
                            <div className="space-y-4 border border-red-200 rounded-md p-4">
                                <div className="flex items-center justify-between">
                                    <div>
                                        <h4 className="font-medium text-red-600">
                                            Archive Project
                                        </h4>
                                        <p className="text-sm text-gray-500">
                                            Archive this project and all its
                                            data. Archived projects can be
                                            restored later.
                                        </p>
                                    </div>
                                    <OutlineButton
                                        className="border-red-200 text-red-600"
                                        onClick={handleArchiveProject}
                                    >
                                        Archive
                                    </OutlineButton>
                                </div>

                                <div className="flex items-center justify-between">
                                    <div>
                                        <h4 className="font-medium text-red-600">
                                            Delete Project
                                        </h4>
                                        <p className="text-sm text-gray-500">
                                            Permanently delete this project and
                                            all its data. This action cannot be
                                            undone.
                                        </p>
                                    </div>
                                    <OutlineButton
                                        className="border-red-200 text-red-600"
                                        onClick={handleDeleteProject}
                                    >
                                        Delete
                                    </OutlineButton>
                                </div>
                            </div>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
};

export default SettingsTab;
