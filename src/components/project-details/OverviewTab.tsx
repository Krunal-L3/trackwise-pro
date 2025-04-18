import type { ProjectData } from "@/app/(main)/[project]/page";
import { formatDate, getLabelColor } from "@/lib/utils";
import type React from "react";
import { FaGithub } from "react-icons/fa6";
import {
    FiAlertCircle,
    FiCheckCircle,
    FiChevronRight,
    FiClock,
    FiFileText,
    FiLink,
    FiPlus,
} from "react-icons/fi";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar/avatar";
import { Badge } from "../ui/badge/badge";
import { OutlineButton, PrimaryButton } from "../ui/button/Button";
import { Card, CardContent } from "../ui/card/card";
import { Progress } from "../ui/progress/progress";

const OverviewTab: React.FC<{ projectData: ProjectData }> = ({
    projectData,
}) => {
    const getStatusIcon = (status: string) => {
        switch (status) {
            case "To Do":
                return <FiClock className="w-3.5 h-3.5 text-gray-500" />;
            case "In Progress":
                return <FiClock className="w-3.5 h-3.5 text-blue-500" />;
            case "Review":
                return (
                    <FiAlertCircle className="w-3.5 h-3.5 text-orange-500" />
                );
            case "Done":
                return <FiCheckCircle className="w-3.5 h-3.5 text-green-500" />;
            default:
                return <FiClock className="w-3.5 h-3.5 text-gray-500" />;
        }
    };

    return (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-6 mt-4">
            {/* Left Column */}
            <div className="md:col-span-2 space-y-4 lg:space-y-6">
                {/* Current Sprint */}
                <Card className="overflow-hidden border-none shadow-sm hover:shadow transition-shadow duration-200">
                    <div className="bg-[#3b5ac7] text-white px-4 sm:px-6 py-2.5 font-medium flex flex-wrap justify-between items-center gap-2">
                        <span className="text-sm sm:text-base">
                            Current Sprint: {projectData.currentSprint.name}
                        </span>
                        <PrimaryButton className="text-white hover:bg-[#2d479e] text-xs sm:text-sm py-1 px-3 h-auto">
                            View Details
                        </PrimaryButton>
                    </div>
                    <CardContent className="p-4 sm:p-6">
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-3 gap-2">
                            <div className="text-xs text-gray-600">
                                {formatDate(
                                    projectData.currentSprint.startDate
                                )}{" "}
                                —{" "}
                                {formatDate(projectData.currentSprint.endDate)}
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="text-xs font-medium">
                                    {projectData.currentSprint.progress}%
                                </span>
                                <Progress
                                    value={projectData.currentSprint.progress}
                                    className="w-20 h-1.5"
                                />
                            </div>
                        </div>

                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-4 mb-4">
                            {projectData.taskStatuses.map((status, index) => {
                                const taskKey = status
                                    .toLowerCase()
                                    .replace(/ /g, "") as
                                    | "todo"
                                    | "inProgress"
                                    | "review"
                                    | "done";
                                return (
                                    <div
                                        key={index}
                                        className="bg-gray-50 rounded-md p-2.5 hover:bg-gray-100 transition-colors duration-200"
                                    >
                                        <div className="flex items-center gap-1.5 mb-1.5">
                                            {getStatusIcon(status)}
                                            <span className="font-medium text-xs">
                                                {status}
                                            </span>
                                        </div>
                                        <div className="text-xl font-bold">
                                            {projectData.tasks[taskKey]
                                                ? projectData.tasks[taskKey]
                                                      .length
                                                : 0}
                                        </div>
                                    </div>
                                );
                            })}
                        </div>

                        <div className="space-y-1.5">
                            <h3 className="text-xs font-medium mb-2 text-gray-700">
                                Recent Tasks
                            </h3>
                            {Object.entries(projectData.tasks).flatMap(
                                ([status, tasks]) =>
                                    tasks.slice(0, 2).map((task) => (
                                        <div
                                            key={task.id}
                                            className="flex items-center justify-between p-2 hover:bg-gray-50 rounded-md transition-colors duration-150 cursor-pointer"
                                        >
                                            <div className="flex items-center gap-2 overflow-hidden">
                                                {getStatusIcon(
                                                    status === "todo"
                                                        ? "To Do"
                                                        : status ===
                                                          "inProgress"
                                                        ? "In Progress"
                                                        : status === "review"
                                                        ? "Review"
                                                        : "Done"
                                                )}
                                                <span className="text-xs sm:text-sm truncate">
                                                    {task.title}
                                                </span>
                                                <Badge
                                                    className={`text-xs ${getLabelColor(
                                                        task.label
                                                    )}`}
                                                >
                                                    {task.label}
                                                </Badge>
                                            </div>
                                            <Avatar className="h-5 w-5 sm:h-6 sm:w-6 flex-shrink-0">
                                                <AvatarImage
                                                    src={
                                                        projectData.members
                                                            .find(
                                                                (m) =>
                                                                    m.id ===
                                                                    task.assignee
                                                            )
                                                            ?.avatar ||
                                                        "/default-avatar.webp"
                                                    }
                                                    alt="Assignee"
                                                />
                                                <AvatarFallback className="text-xs">
                                                    {projectData.members
                                                        .find(
                                                            (m) =>
                                                                m.id ===
                                                                task.assignee
                                                        )
                                                        ?.name.charAt(0) || "?"}
                                                </AvatarFallback>
                                            </Avatar>
                                        </div>
                                    ))
                            )}
                            <OutlineButton className="w-full mt-2 text-[#3b5ac7] text-xs h-8">
                                View All Tasks{" "}
                                <FiChevronRight className="w-3.5 h-3.5 ml-1" />
                            </OutlineButton>
                        </div>
                    </CardContent>
                </Card>

                {/* Recent Activity */}
                <Card className="overflow-hidden border-none shadow-sm hover:shadow transition-shadow duration-200">
                    <div className="bg-gray-50 px-4 sm:px-6 py-2.5 font-medium text-sm">
                        Recent Activity
                    </div>
                    <CardContent className="p-4 sm:p-6">
                        <div className="space-y-3.5">
                            {projectData.recentActivities.map((activity) => (
                                <div key={activity.id} className="flex gap-2.5">
                                    {/* You could add user avatars here */}
                                    <Avatar className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-gray-100 flex-shrink-0 flex items-center justify-center overflow-hidden">
                                        <AvatarImage
                                            src={
                                                activity.avatar ||
                                                "/default-avatar.webp"
                                            }
                                            alt="Assignee"
                                        />
                                    </Avatar>
                                    <div>
                                        <p className="text-xs sm:text-sm">
                                            <span className="font-medium">
                                                {activity.user}
                                            </span>{" "}
                                            {activity.action}{" "}
                                            <span className="font-medium">
                                                {activity.item}
                                            </span>
                                        </p>
                                        <p className="text-[10px] sm:text-xs text-gray-500">
                                            {activity.time}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </CardContent>
                </Card>
            </div>

            {/* Right Column */}
            <div className="space-y-4 lg:space-y-6">
                {/* Project Info */}
                <Card className="overflow-hidden border-none shadow-sm hover:shadow transition-shadow duration-200">
                    <div className="bg-gray-50 px-4 sm:px-6 py-2.5 font-medium text-sm">
                        Project Info
                    </div>
                    <CardContent className="p-4 sm:p-6 pt-3 sm:pt-4">
                        <div className="space-y-3.5">
                            <div>
                                <h3 className="text-xs font-medium text-gray-500 mb-0.5">
                                    Sprint Cycle
                                </h3>
                                <p className="font-medium text-xs sm:text-sm">
                                    {projectData.sprintCycle
                                        .charAt(0)
                                        .toUpperCase() +
                                        projectData.sprintCycle.slice(1)}
                                </p>
                            </div>

                            <div>
                                <h3 className="text-xs font-medium text-gray-500 mb-0.5">
                                    Default Due Days
                                </h3>
                                <p className="font-medium text-xs sm:text-sm">
                                    {projectData.defaultDueDays} days after
                                    creation
                                </p>
                            </div>

                            <div>
                                <h3 className="text-xs font-medium text-gray-500 mb-0.5">
                                    Labels
                                </h3>
                                <div className="flex flex-wrap gap-1.5 mt-1">
                                    {projectData.labels.map((label) => (
                                        <Badge
                                            key={label}
                                            className={`text-[10px] px-1.5 py-0.5 ${getLabelColor(
                                                label
                                            )}`}
                                        >
                                            {label}
                                        </Badge>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </CardContent>
                </Card>

                {/* Team Members */}
                <Card className="overflow-hidden border-none shadow-sm hover:shadow transition-shadow duration-200">
                    <div className="bg-gray-50 px-4 sm:px-6 py-2.5 font-medium text-sm flex justify-between items-center">
                        <span>Team Members</span>
                        <OutlineButton className="text-[#3b5ac7] text-xs h-7 px-2">
                            <FiPlus className="w-3 h-3 mr-1" /> Add
                        </OutlineButton>
                    </div>
                    <CardContent className="p-4 sm:p-6">
                        <div className="space-y-2.5">
                            {projectData.members.map((member) => (
                                <div
                                    key={member.id}
                                    className="flex items-center justify-between p-1 hover:bg-gray-50 rounded-md transition-colors duration-150"
                                >
                                    <div className="flex items-center gap-2">
                                        <Avatar className="h-6 w-6 sm:h-7 sm:w-7">
                                            <AvatarImage
                                                src={
                                                    member.avatar ||
                                                    "/default-avatar.webp"
                                                }
                                                alt={member.name}
                                            />
                                            <AvatarFallback className="text-xs">
                                                {member.name.charAt(0)}
                                            </AvatarFallback>
                                        </Avatar>
                                        <div>
                                            <div className="font-medium text-xs sm:text-sm">
                                                {member.name}
                                            </div>
                                            <div className="text-[10px] sm:text-xs text-gray-500 truncate max-w-[120px] sm:max-w-[180px]">
                                                {member.email}
                                            </div>
                                        </div>
                                    </div>
                                    <Badge
                                        variant="outline"
                                        className={`text-[10px] px-1.5 py-0.5 ${
                                            member.role === "admin"
                                                ? "bg-purple-50 text-purple-700 border-purple-200"
                                                : member.role === "member"
                                                ? "bg-blue-50 text-blue-700 border-blue-200"
                                                : "bg-gray-50 text-gray-700 border-gray-200"
                                        }`}
                                    >
                                        {member.role.charAt(0).toUpperCase() +
                                            member.role.slice(1)}
                                    </Badge>
                                </div>
                            ))}
                        </div>
                    </CardContent>
                </Card>

                {/* Documents & Links */}
                <Card className="overflow-hidden border-none shadow-sm hover:shadow transition-shadow duration-200">
                    <div className="bg-gray-50 px-4 sm:px-6 py-2.5 font-medium text-sm flex justify-between items-center">
                        <span>Documents & Links</span>
                        <OutlineButton className="text-[#3b5ac7] text-xs h-7 px-2">
                            <FiPlus className="w-3 h-3 mr-1" /> Add
                        </OutlineButton>
                    </div>
                    <CardContent className="p-4 sm:p-6">
                        <div className="space-y-1">
                            <div className="flex items-center gap-2 p-2 hover:bg-gray-50 rounded-md transition-colors duration-150 cursor-pointer">
                                <FiFileText className="w-3.5 h-3.5 text-[#3b5ac7]" />
                                <span className="text-xs sm:text-sm">
                                    Brand Guidelines.pdf
                                </span>
                            </div>
                            <div className="flex items-center gap-2 p-2 hover:bg-gray-50 rounded-md transition-colors duration-150 cursor-pointer">
                                <FiLink className="w-3.5 h-3.5 text-[#3b5ac7]" />
                                <span className="text-xs sm:text-sm">
                                    Figma Designs
                                </span>
                            </div>
                            <div className="flex items-center gap-2 p-2 hover:bg-gray-50 rounded-md transition-colors duration-150 cursor-pointer">
                                <FaGithub className="w-3.5 h-3.5 text-[#3b5ac7]" />
                                <span className="text-xs sm:text-sm">
                                    GitHub Repository
                                </span>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
};

export default OverviewTab;
