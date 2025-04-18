"use client";
import { Badge } from "@/components/ui/badge/badge";
import { OutlineButton } from "@/components/ui/button/Button";
import { Card, CardContent } from "@/components/ui/card/card";
import { FiBarChart2 } from "react-icons/fi";

const TimelineTab: React.FC = () => {
    return (
        <div className="mt-6">
            <Card className="border-none shadow-sm">
                <CardContent className="p-6">
                    <div className="flex justify-between items-center mb-6">
                        <h2 className="text-lg font-medium">
                            Project Timeline
                        </h2>
                        <div className="flex gap-2">
                            <OutlineButton>Month</OutlineButton>
                            <OutlineButton className="bg-gray-50">
                                Week
                            </OutlineButton>
                        </div>
                    </div>

                    <div className="border border-gray-200 rounded-md p-4">
                        <div className="h-64 flex items-center justify-center text-muted-foreground">
                            <div className="text-center">
                                <FiBarChart2 className="w-12 h-12 mx-auto text-gray-300 mb-2" />
                                <p>
                                    Gantt-style project timeline would be
                                    displayed here
                                </p>
                                <p className="text-sm text-gray-500">
                                    Showing tasks, milestones, and dependencies
                                    across the project timeline
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="mt-6">
                        <h3 className="text-md font-medium mb-3">
                            Key Milestones
                        </h3>
                        <div className="space-y-3">
                            <div className="flex items-center p-3 bg-gray-50 rounded-md">
                                <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                                <div className="flex-1">
                                    <div className="font-medium">
                                        Project Kickoff
                                    </div>
                                    <div className="text-sm text-gray-500">
                                        Dec 27, 2024
                                    </div>
                                </div>
                                <Badge
                                    variant="outline"
                                    className="text-green-700 border-green-200 bg-green-50"
                                >
                                    Completed
                                </Badge>
                            </div>

                            <div className="flex items-center p-3 bg-gray-50 rounded-md">
                                <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                                <div className="flex-1">
                                    <div className="font-medium">
                                        Design Approval
                                    </div>
                                    <div className="text-sm text-gray-500">
                                        Jan 15, 2025
                                    </div>
                                </div>
                                <Badge
                                    variant="outline"
                                    className="text-green-700 border-green-200 bg-green-50"
                                >
                                    Completed
                                </Badge>
                            </div>

                            <div className="flex items-center p-3 bg-gray-50 rounded-md">
                                <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                                <div className="flex-1">
                                    <div className="font-medium">
                                        Development Phase 1
                                    </div>
                                    <div className="text-sm text-gray-500">
                                        Feb 5, 2025
                                    </div>
                                </div>
                                <Badge
                                    variant="outline"
                                    className="text-blue-700 border-blue-200 bg-blue-50"
                                >
                                    In Progress
                                </Badge>
                            </div>

                            <div className="flex items-center p-3 bg-gray-50 rounded-md">
                                <div className="w-2 h-2 bg-gray-300 rounded-full mr-3"></div>
                                <div className="flex-1">
                                    <div className="font-medium">
                                        Beta Launch
                                    </div>
                                    <div className="text-sm text-gray-500">
                                        Feb 15, 2025
                                    </div>
                                </div>
                                <Badge
                                    variant="outline"
                                    className="text-gray-700 border-gray-200 bg-gray-50"
                                >
                                    Upcoming
                                </Badge>
                            </div>

                            <div className="flex items-center p-3 bg-gray-50 rounded-md">
                                <div className="w-2 h-2 bg-gray-300 rounded-full mr-3"></div>
                                <div className="flex-1">
                                    <div className="font-medium">
                                        Final Launch
                                    </div>
                                    <div className="text-sm text-gray-500">
                                        Feb 20, 2025
                                    </div>
                                </div>
                                <Badge
                                    variant="outline"
                                    className="text-gray-700 border-gray-200 bg-gray-50"
                                >
                                    Upcoming
                                </Badge>
                            </div>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
};

export default TimelineTab;
