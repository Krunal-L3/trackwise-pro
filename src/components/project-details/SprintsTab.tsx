"use client";
import { ProjectData } from "@/app/(main)/[project]/page";
import { Badge } from "@/components/ui/badge/badge";
import { OutlineButton, PrimaryButton } from "@/components/ui/button/Button";
import { Card, CardContent } from "@/components/ui/card/card";
import { Progress } from "@/components/ui/progress/progress";
import { formatDate } from "@/lib/utils";
import { FiAlertCircle, FiCheckCircle, FiClock, FiPlus } from "react-icons/fi";

const SprintsTab: React.FC<{ projectData: ProjectData }> = ({
    projectData,
}) => {
    return (
        <div className="mt-6">
            <Card className="border-none shadow-sm">
                <CardContent className="p-6">
                    <div className="flex justify-between items-center mb-6">
                        <h2 className="text-lg font-medium">Sprints</h2>
                        <PrimaryButton className="bg-[#3b5ac7] hover:bg-[#2d479e]">
                            <FiPlus className="w-4 h-4 mr-1" /> New Sprint
                        </PrimaryButton>
                    </div>

                    <div className="space-y-4">
                        {/* Current Sprint */}
                        <div className="border border-gray-200 rounded-md overflow-hidden">
                            <div className="bg-[#3b5ac7] text-white px-4 py-2 font-medium flex justify-between items-center">
                                <div className="flex items-center gap-2">
                                    <span>Sprint 3 (Current)</span>
                                    <Badge
                                        variant="outline"
                                        className="text-primary border-white"
                                    >
                                        Active
                                    </Badge>
                                </div>
                                <OutlineButton className="text-white hover:bg-[#2d479e]">
                                    Manage
                                </OutlineButton>
                            </div>
                            <div className="p-4">
                                <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4 gap-2">
                                    <div className="text-sm">
                                        {formatDate(
                                            projectData.currentSprint.startDate
                                        )}{" "}
                                        —{" "}
                                        {formatDate(
                                            projectData.currentSprint.endDate
                                        )}
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <span className="text-sm font-medium">
                                            {projectData.currentSprint.progress}
                                            % complete
                                        </span>
                                        <Progress
                                            value={
                                                projectData.currentSprint
                                                    .progress
                                            }
                                            className="w-24 h-2"
                                        />
                                    </div>
                                </div>

                                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-4">
                                    <div className="bg-gray-50 rounded-md p-3">
                                        <div className="flex items-center gap-2 mb-2">
                                            <FiClock className="w-4 h-4 text-gray-500" />
                                            <span className="font-medium text-sm">
                                                To Do
                                            </span>
                                        </div>
                                        <div className="text-2xl font-bold">
                                            2
                                        </div>
                                    </div>
                                    <div className="bg-gray-50 rounded-md p-3">
                                        <div className="flex items-center gap-2 mb-2">
                                            <FiClock className="w-4 h-4 text-blue-500" />
                                            <span className="font-medium text-sm">
                                                In Progress
                                            </span>
                                        </div>
                                        <div className="text-2xl font-bold">
                                            2
                                        </div>
                                    </div>
                                    <div className="bg-gray-50 rounded-md p-3">
                                        <div className="flex items-center gap-2 mb-2">
                                            <FiAlertCircle className="w-4 h-4 text-orange-500" />
                                            <span className="font-medium text-sm">
                                                Review
                                            </span>
                                        </div>
                                        <div className="text-2xl font-bold">
                                            1
                                        </div>
                                    </div>
                                    <div className="bg-gray-50 rounded-md p-3">
                                        <div className="flex items-center gap-2 mb-2">
                                            <FiCheckCircle className="w-4 h-4 text-green-500" />
                                            <span className="font-medium text-sm">
                                                Done
                                            </span>
                                        </div>
                                        <div className="text-2xl font-bold">
                                            3
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Previous Sprints */}
                        <div className="border border-gray-200 rounded-md overflow-hidden">
                            <div className="bg-gray-50 px-4 py-2 font-medium flex justify-between items-center">
                                <div className="flex items-center gap-2">
                                    <span>Sprint 2</span>
                                    <Badge
                                        variant="outline"
                                        className="text-green-700 border-green-200 bg-green-50"
                                    >
                                        Completed
                                    </Badge>
                                </div>
                                <OutlineButton className="text-gray-500">
                                    View
                                </OutlineButton>
                            </div>
                            <div className="p-4">
                                <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-2 gap-2">
                                    <div className="text-sm">
                                        Jan 10, 2025 — Jan 24, 2025
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <span className="text-sm font-medium">
                                            100% complete
                                        </span>
                                        <Progress
                                            value={100}
                                            className="w-24 h-2"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="border border-gray-200 rounded-md overflow-hidden">
                            <div className="bg-gray-50 px-4 py-2 font-medium flex justify-between items-center">
                                <div className="flex items-center gap-2">
                                    <span>Sprint 1</span>
                                    <Badge
                                        variant="outline"
                                        className="text-green-700 border-green-200 bg-green-50"
                                    >
                                        Completed
                                    </Badge>
                                </div>
                                <OutlineButton className="text-gray-500">
                                    View
                                </OutlineButton>
                            </div>
                            <div className="p-4">
                                <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-2 gap-2">
                                    <div className="text-sm">
                                        Dec 27, 2024 — Jan 10, 2025
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <span className="text-sm font-medium">
                                            100% complete
                                        </span>
                                        <Progress
                                            value={100}
                                            className="w-24 h-2"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
};

export default SprintsTab;
