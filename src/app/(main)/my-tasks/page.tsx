"use client";

import KanbanBoard from "@/components/ui/kanban-board/KanbanBoard";
import PageContent from "@/components/ui/layout/PageContent";
import PageNavbar, {
    PageNavbarLeftContent,
    PageNavbarPrimaryButton,
    PageNavbarRightContent,
} from "@/components/ui/layout/PageNavbar";
import { Add, ClipboardText } from "iconsax-reactjs";
import React, { useState } from "react";

const MyTasks: React.FC = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <div>
            <PageNavbar>
                <PageNavbarLeftContent>
                    <div className="border rounded-full w-10 h-10 all-center">
                        <ClipboardText size={18} />
                    </div>
                    <div>
                        <h1 className="text-sm font-semibold text-gray-800">
                            My Tasks
                        </h1>
                        <p className="text-xs font-medium">
                            View and manage your tasks
                        </p>
                    </div>
                </PageNavbarLeftContent>

                <PageNavbarRightContent>
                    <PageNavbarPrimaryButton
                        onClick={() => setIsModalOpen(true)}
                        className="h-8 gap-1 bg-primary hidden py-1 px-2 duration-200 text-white rounded-lg text-xs md:flex items-center justify-center"
                    >
                        <Add size={16} />
                        <span className="hidden md:inline">Add Task</span>
                    </PageNavbarPrimaryButton>
                </PageNavbarRightContent>
            </PageNavbar>

            <PageContent>
                <KanbanBoard
                    isModalOpen={isModalOpen}
                    setIsModalOpen={setIsModalOpen}
                />
            </PageContent>
        </div>
    );
};

export default MyTasks;
