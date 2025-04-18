import MembersTable from "@/components/teams/MembersTable";
import { OutlineButton, PrimaryButton } from "@/components/ui/button/Button";
import PageContent from "@/components/ui/layout/PageContent";
import PageNavbar, {
    PageNavbarIconButton,
    PageNavbarLeftContent,
    PageNavbarRightContent,
} from "@/components/ui/layout/PageNavbar";
import {
    Add,
    ExportCurve,
    Notification,
    Profile2User,
    SearchNormal1
} from "iconsax-reactjs";
import React from "react";

const Teams: React.FC = () => {

    return (
        <div className="">
            <PageNavbar>
                <PageNavbarLeftContent>
                    <div className="border rounded-full w-10 h-10 all-center">
                        <Profile2User size={18} />
                    </div>
                    <div>
                        <h1 className="text-sm font-semibold text-gray-800">
                            Teams
                        </h1>
                        <p className="text-xs font-medium">
                            View and manage your teams
                        </p>
                    </div>
                </PageNavbarLeftContent>

                <PageNavbarRightContent>
                    <PageNavbarIconButton>
                        <SearchNormal1 size={16} />
                    </PageNavbarIconButton>
                    <PageNavbarIconButton>
                        <Notification size={16} />
                    </PageNavbarIconButton>
                    <div className="flex gap-2">
                        <OutlineButton>
                            <ExportCurve size={16} />
                            <span className="hidden md:block">Export</span>
                        </OutlineButton>
                        <PrimaryButton className="flex gap-1">
                            <Add size={16} />
                            Invite member
                        </PrimaryButton>
                    </div>
                </PageNavbarRightContent>
            </PageNavbar>

            <PageContent>
                <MembersTable />
            </PageContent>
        </div>
    );
};

export default Teams;
