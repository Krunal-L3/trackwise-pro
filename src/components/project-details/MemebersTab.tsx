"use client";
import { ProjectData } from "@/app/(main)/[project]/page";
import {
    Avatar,
    AvatarFallback,
    AvatarImage,
} from "@/components/ui/avatar/avatar";
import { Badge } from "@/components/ui/badge/badge";
import { OutlineButton, PrimaryButton } from "@/components/ui/button/Button";
import { Card, CardContent } from "@/components/ui/card/card";
import { FiPlus } from "react-icons/fi";

const MemebersTab: React.FC<{ projectData: ProjectData }> = ({
    projectData,
}) => {
    return (
        <div className="mt-6">
            <Card className="border-none shadow-sm">
                <CardContent className="p-6">
                    <div className="flex justify-between items-center mb-6">
                        <h2 className="text-lg font-medium">Team Members</h2>
                        <PrimaryButton className="bg-[#3b5ac7] hover:bg-[#2d479e]">
                            <FiPlus className="w-4 h-4 mr-1" /> Add Member
                        </PrimaryButton>
                    </div>

                    <div className="overflow-x-auto border border-gray-200 rounded-md">
                        <table className="min-w-full divide-y divide-gray-200">
                            <thead className="bg-gray-50">
                                <tr>
                                    <th
                                        scope="col"
                                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                    >
                                        Name
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
                                        Tasks
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                    >
                                        Status
                                    </th>
                                    <th
                                        scope="col"
                                        className="relative px-6 py-3"
                                    >
                                        <span className="sr-only">Actions</span>
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-200">
                                {projectData.members.map((member) => (
                                    <tr key={member.id}>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <div className="flex items-center">
                                                <div className="flex-shrink-0 h-10 w-10">
                                                    <Avatar>
                                                        <AvatarImage
                                                            src={
                                                                member.avatar ||
                                                                "/default-avatar.webp"
                                                            }
                                                            alt={member.name}
                                                        />
                                                        <AvatarFallback>
                                                            {member.name.charAt(
                                                                0
                                                            )}
                                                        </AvatarFallback>
                                                    </Avatar>
                                                </div>
                                                <div className="ml-4">
                                                    <div className="text-sm font-medium text-gray-900">
                                                        {member.name}
                                                    </div>
                                                    <div className="text-sm text-gray-500">
                                                        {member.email}
                                                    </div>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <Badge
                                                variant="outline"
                                                className={
                                                    member.role === "admin"
                                                        ? "bg-purple-50 text-purple-700 border-purple-200"
                                                        : member.role ===
                                                          "member"
                                                        ? "bg-blue-50 text-blue-700 border-blue-200"
                                                        : "bg-gray-50 text-gray-700 border-gray-200"
                                                }
                                            >
                                                {member.role
                                                    .charAt(0)
                                                    .toUpperCase() +
                                                    member.role.slice(1)}
                                            </Badge>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <div className="text-sm text-gray-900">
                                                {
                                                    Object.values(
                                                        projectData.tasks
                                                    )
                                                        .flat()
                                                        .filter(
                                                            (task) =>
                                                                task.assignee ===
                                                                member.id
                                                        ).length
                                                }
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                                                Active
                                            </span>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                            <OutlineButton>Edit</OutlineButton>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    <div className="mt-6">
                        <h3 className="text-md font-medium mb-3">
                            Pending Invitations
                        </h3>
                        <div className="border border-gray-200 rounded-md p-4 text-center text-gray-500">
                            No pending invitations
                        </div>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
};

export default MemebersTab;
