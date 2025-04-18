import CurrentProject from "@/components/dashboard-widget/CurrentProject";
import NotesPage from "@/components/dashboard-widget/Notes";
import PersonalProductivity from "@/components/dashboard-widget/PersonalProductivity";
import StatusTracker from "@/components/dashboard-widget/StatusTracker";
import TaskSummary from "@/components/dashboard-widget/TaskSummary";
import TimeTracker from "@/components/dashboard-widget/TimeTracker";
import { OutlineButton } from "@/components/ui/button/Button";
import PageContent from "@/components/ui/layout/PageContent";
import PageNavbar, {
    PageNavbarIconButton,
    PageNavbarLeftContent,
    PageNavbarPrimaryButton,
    PageNavbarRightContent,
} from "@/components/ui/layout/PageNavbar";
import {
    Add,
    CalendarEdit,
    DirectNotification,
    SearchNormal1,
} from "iconsax-reactjs";
import Image from "next/image";
import React from "react";

const Dashboard: React.FC = () => {
    return (
        <div>
            <PageNavbar>
                <PageNavbarLeftContent>
                    {/* <div className='flex items-center justify-between gap-2'> */}
                    <Image
                        src={"/default-avatar.webp"}
                        alt="User"
                        width={40}
                        height={40}
                        className="rounded-full"
                    />
                    <div className="">
                        <p className="text-sm font-semibold text-gray-800">
                            Raj Mangukiya
                        </p>
                        <p className="text-xs font-medium text-gray-500">
                            Welcome back
                        </p>
                    </div>
                    {/* </div> */}
                </PageNavbarLeftContent>

                <PageNavbarRightContent>
                    <PageNavbarIconButton className="all-center h-8 w-8 duration-200 hover:bg-gray-100 rounded-lg">
                        <SearchNormal1 size={16} />
                    </PageNavbarIconButton>

                    <PageNavbarIconButton className="all-center h-8 w-8 duration-200 hover:bg-gray-100 rounded-lg">
                        <DirectNotification size={16} />
                    </PageNavbarIconButton>

                    <OutlineButton className="h-8 w-8 gap-1 md:w-auto md:border py-1 px-2 duration-200 hover:bg-gray-100 rounded-lg text-xs all-center">
                        <CalendarEdit size={16} />
                        <span className="hidden md:inline">Schedule</span>
                    </OutlineButton>

                    <PageNavbarPrimaryButton className="h-8 gap-1 bg-primary hidden py-1 px-2 duration-200 text-white rounded-lg text-xs md:flex items-center justify-center">
                        <Add size={16} />
                        <span className="hidden md:inline">Create request</span>
                    </PageNavbarPrimaryButton>
                </PageNavbarRightContent>
            </PageNavbar>

            <PageContent>
                <div className="space-y-4 columns-1 sm:columns-2 lg:columns-3">
                    <div className="break-inside-avoid-column space-y-4">
                        <PersonalProductivity />
                    </div>

                    <div className="break-inside-avoid-column space-y-4">
                        <TaskSummary />
                    </div>

                    <div className="break-inside-avoid-column space-y-4">
                        <TimeTracker />
                    </div>

                    <div className="break-inside-avoid-column space-y-4">
                        <NotesPage />
                    </div>

                    <div className="break-inside-avoid-column space-y-4">
                        <StatusTracker />
                    </div>

                    <div className="break-inside-avoid-column space-y-4">
                        <CurrentProject />
                    </div>
                </div>
            </PageContent>
        </div>
    );
};

export default Dashboard;
