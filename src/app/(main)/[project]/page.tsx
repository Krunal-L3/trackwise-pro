"use client";
import MemebersTab from "@/components/project-details/MemebersTab";
import OverviewTab from "@/components/project-details/OverviewTab";
import SettingsTab from "@/components/project-details/SettingsTab";
import SprintsTab from "@/components/project-details/SprintsTab";
import TimelineTab from "@/components/project-details/TimelineTab";
import { Badge } from "@/components/ui/badge/badge";
import { OutlineButton, PrimaryButton } from "@/components/ui/button/Button";
import KanbanBoard from "@/components/ui/kanban-board/KanbanBoard";
import PageContent from "@/components/ui/layout/PageContent";
import PageNavbar, {
    PageNavbarLeftContent,
    PageNavbarRightContent,
} from "@/components/ui/layout/PageNavbar";
import { Progress } from "@/components/ui/progress/progress";
import { Tab, TabContent, Tabs } from "@/components/ui/tabs/tabs";
import { formatDate } from "@/lib/utils";
import { faker } from "@faker-js/faker";
import { motion } from "framer-motion";
import {
    FiArchive,
    FiBarChart2,
    FiCalendar,
    FiEdit,
    FiLayout,
    FiPlus,
    FiSettings,
    FiShare2,
    FiUsers,
} from "react-icons/fi";

export interface ProjectData {
    id: string;
    name: string;
    emoji: string;
    color: string;
    description: string;
    visibility: "private" | "public";
    startDate: Date;
    endDate: Date;
    sprintCycle: string;
    defaultDueDays: number;
    progress: number;
    taskStatuses: string[];
    enableLabels: boolean;
    labels: string[];
    currentSprint: {
        name: string;
        startDate: Date;
        endDate: Date;
        progress: number;
    };
    members: {
        id: number;
        name: string;
        email: string;
        role: "admin" | "member" | "viewer";
        avatar: string;
    }[];
    tasks: {
        todo: {
            id: string;
            title: string;
            label: string;
            assignee: number;
        }[];
        inProgress: {
            id: string;
            title: string;
            label: string;
            assignee: number;
        }[];
        review: {
            id: string;
            title: string;
            label: string;
            assignee: number;
        }[];
        done: {
            id: string;
            title: string;
            label: string;
            assignee: number;
        }[];
    };
    integrations: string[];
    recentActivities: {
        id: number;
        user: string;
        avatar: string;
        action: string;
        item: string;
        time: string;
    }[];
}

const projectData: ProjectData = {
    id: "proj-123",
    name: "Website Redesign",
    emoji: "🚀",
    color: "#3b5ac7",
    description:
        "Complete overhaul of our marketing website with new branding, improved UX, and optimized conversion paths. Focus on mobile responsiveness and performance.",
    visibility: "private",
    startDate: new Date("2025-01-10"),
    endDate: new Date("2025-02-20"),
    sprintCycle: "biweekly",
    defaultDueDays: 7,
    progress: 65,
    taskStatuses: ["To Do", "In Progress", "Review", "Done"],
    enableLabels: true,
    labels: ["Design", "Development", "Content", "Urgent", "Bug"],
    currentSprint: {
        name: "Sprint 3",
        startDate: new Date("2025-01-24"),
        endDate: new Date("2025-02-07"),
        progress: 42,
    },
    members: [
        {
            id: 1,
            name:
                faker.person.firstName() + " " + faker.person.lastName() ||
                "Alex Johnson",
            email:
                faker.person.fullName().replace(/\s+/g, "").toLowerCase() +
                    "@gmail.com" || "alex@example.com",
            role: "admin",
            avatar:
                faker.image.personPortrait({ size: 64 }) ||
                "/default-avatar.webp?height=40&width=40",
        },
        {
            id: 2,
            name:
                faker.person.firstName() + " " + faker.person.lastName() ||
                "Sam Wilson",
            email:
                faker.person.fullName().replace(/\s+/g, "").toLowerCase() +
                    "@gmail.com" || "sam@example.com",
            role: "member",
            avatar:
                faker.image.personPortrait({ size: 64 }) ||
                "/default-avatar.webp?height=40&width=40",
        },
        {
            id: 3,
            name:
                faker.person.firstName() + " " + faker.person.lastName() ||
                "Taylor Smith",
            email:
                faker.person.fullName().replace(/\s+/g, "").toLowerCase() +
                    "@gmail.com" || "taylor@example.com",
            role: "member",
            avatar:
                faker.image.personPortrait({ size: 64 }) ||
                "/default-avatar.webp?height=40&width=40",
        },
        {
            id: 4,
            name:
                faker.person.firstName() + " " + faker.person.lastName() ||
                "Jordan Lee",
            email:
                faker.person.fullName().replace(/\s+/g, "").toLowerCase() +
                    "@gmail.com" || "jordan@example.com",
            role: "viewer",
            avatar:
                faker.image.personPortrait({ size: 64 }) ||
                "/default-avatar.webp?height=40&width=40",
        },
    ],
    tasks: {
        todo: [
            {
                id: "task-1",
                title: "Update hero section",
                label: "Design",
                assignee: 1,
            },
            {
                id: "task-2",
                title: "Optimize images",
                label: "Development",
                assignee: 2,
            },
        ],
        inProgress: [
            {
                id: "task-3",
                title: "Implement new navigation",
                label: "Development",
                assignee: 2,
            },
            {
                id: "task-4",
                title: "Create case studies",
                label: "Content",
                assignee: 3,
            },
        ],
        review: [
            {
                id: "task-5",
                title: "Review mobile responsiveness",
                label: "Design",
                assignee: 1,
            },
        ],
        done: [
            {
                id: "task-6",
                title: "Setup project repository",
                label: "Development",
                assignee: 2,
            },
            {
                id: "task-7",
                title: "Create wireframes",
                label: "Design",
                assignee: 1,
            },
            {
                id: "task-8",
                title: "Define brand guidelines",
                label: "Design",
                assignee: 1,
            },
        ],
    },
    integrations: ["Slack", "GitHub"],
    recentActivities: [
        {
            id: 1,
            user:
                faker.person.firstName() + " " + faker.person.lastName() ||
                "Alex Johnson",
            avatar:
                faker.image.personPortrait({ size: 64 }) ||
                "/default-avatar.webp",
            action: "completed task",
            item: "Define brand guidelines",
            time: "2 hours ago",
        },
        {
            id: 2,
            user:
                faker.person.firstName() + " " + faker.person.lastName() ||
                "Sam Wilson",
            avatar:
                faker.image.personPortrait({ size: 64 }) ||
                "/default-avatar.webp",
            action: "commented on",
            item: "Implement new navigation",
            time: "4 hours ago",
        },
        {
            id: 3,
            user:
                faker.person.firstName() + " " + faker.person.lastName() ||
                "Taylor Smith",
            avatar:
                faker.image.personPortrait({ size: 64 }) ||
                "/default-avatar.webp",
            action: "created task",
            item: "Create case studies",
            time: "Yesterday",
        },
    ],
};

const ProjectDetail = () => {
    return (
        <div>
            <PageNavbar>
                <PageNavbarLeftContent>
                    <div className="flex items-center gap-2 mb-1">
                        <div
                            className="w-6 h-6 rounded-md flex items-center justify-center text-sm text-white"
                            style={{
                                backgroundColor: projectData.color,
                            }}
                        >
                            {projectData.emoji}
                        </div>
                        <h1 className="text-lg font-bold text-[#3b3b3b] font-['Poppins']">
                            {projectData.name}
                        </h1>
                        <Badge variant="outline" className="ml-2">
                            {projectData.visibility === "private"
                                ? "Private"
                                : "Public"}
                        </Badge>
                    </div>
                </PageNavbarLeftContent>

                <PageNavbarRightContent>
                    <div className="flex gap-2 mt-2 md:mt-0">
                        <OutlineButton className="flex items-center gap-1">
                            <FiEdit className="w-4 h-4" />
                            Edit
                        </OutlineButton>
                        <OutlineButton className="flex items-center gap-1">
                            <FiShare2 className="w-4 h-4" />
                            Share
                        </OutlineButton>
                        <PrimaryButton className="flex items-center gap-1">
                            <FiArchive className="w-4 h-4" />
                            Archive
                        </PrimaryButton>
                    </div>
                </PageNavbarRightContent>
            </PageNavbar>

            <PageContent>
                <div className="bg-white">
                    <div className="mx-auto">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            {/* Header */}
                            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-8">
                                <div>
                                    <p className="text-sm text-gray-600 max-w-2xl mb-2">
                                        {projectData.description}
                                    </p>
                                    <div className="flex flex-wrap items-center gap-3 text-sm text-gray-500">
                                        <span className="flex items-center">
                                            <FiCalendar className="w-4 h-4 mr-1" />
                                            {formatDate(projectData.startDate)}{" "}
                                            — {formatDate(projectData.endDate)}
                                        </span>
                                        <span className="flex items-center">
                                            <FiUsers className="w-4 h-4 mr-1" />
                                            {projectData.members.length} members
                                        </span>
                                    </div>
                                </div>
                            </div>

                            {/* Progress Bar */}
                            <div className="mb-8">
                                <div className="flex justify-between items-center mb-2">
                                    <span className="text-sm font-medium text-gray-700">
                                        Project Progress
                                    </span>
                                    <span className="text-sm font-medium text-[#3b5ac7]">
                                        {projectData.progress}%
                                    </span>
                                </div>
                                <Progress
                                    value={projectData.progress}
                                    className="h-2"
                                />
                            </div>

                            {/* Tabs */}
                            <Tabs defaultValue="overview">
                                <div className="flex gap-1 border-b border-gray-200 pb-0 overflow-x-auto">
                                    <Tab
                                        value="overview"
                                        icon={<FiLayout size={16} />}
                                    >
                                        Overview
                                    </Tab>
                                    <Tab
                                        value="tasks"
                                        icon={<FiPlus size={16} />}
                                    >
                                        Tasks
                                    </Tab>
                                    <Tab
                                        value="sprints"
                                        icon={<FiCalendar size={16} />}
                                    >
                                        Sprints
                                    </Tab>
                                    <Tab
                                        value="timeline"
                                        icon={<FiBarChart2 size={16} />}
                                    >
                                        Timeline
                                    </Tab>
                                    <Tab
                                        value="members"
                                        icon={<FiUsers size={16} />}
                                    >
                                        Members
                                    </Tab>
                                    <Tab
                                        value="settings"
                                        icon={<FiSettings size={16} />}
                                    >
                                        Settings
                                    </Tab>
                                </div>

                                {/* Overview Tab */}
                                <TabContent value="overview">
                                    <div className="mt-10">
                                        <OverviewTab
                                            projectData={projectData}
                                        />
                                    </div>
                                </TabContent>

                                {/* Tasks Tab */}
                                <TabContent value="tasks">
                                    <div className="mt-6">
                                        <KanbanBoard
                                            isModalOpen={false}
                                            setIsModalOpen={() => {}}
                                        />
                                    </div>
                                </TabContent>

                                {/* Sprints Tab */}
                                <TabContent value="sprints">
                                    <SprintsTab projectData={projectData} />
                                </TabContent>

                                {/* Timeline Tab */}
                                <TabContent value="timeline">
                                    <TimelineTab />
                                </TabContent>

                                {/* Members Tab */}
                                <TabContent value="members">
                                    <MemebersTab projectData={projectData} />
                                </TabContent>

                                {/* Settings Tab */}
                                <TabContent value="settings">
                                    <SettingsTab projectData={projectData} />
                                </TabContent>
                            </Tabs>
                        </motion.div>
                    </div>
                </div>
            </PageContent>
        </div>
    );
};

export default ProjectDetail;
