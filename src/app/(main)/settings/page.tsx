import SettingsPage from "@/components/settings/SettingsPage";
import PageContent from "@/components/ui/layout/PageContent";
import PageNavbar, {
    PageNavbarLeftContent,
} from "@/components/ui/layout/PageNavbar";
import { Setting } from "iconsax-reactjs";
import React from "react";

const Settings: React.FC = () => {
    return (
        <div>
            <PageNavbar>
                <PageNavbarLeftContent>
                    <div className="border rounded-full w-10 h-10 all-center">
                        <Setting size={18} />
                    </div>
                    <div>
                        <h1 className="text-sm font-semibold text-gray-800">
                            Settings
                        </h1>
                        <p className="text-xs font-medium">
                            View and manage your settings
                        </p>
                    </div>
                </PageNavbarLeftContent>
            </PageNavbar>

            <PageContent>
                <SettingsPage />
            </PageContent>
        </div>
    );
};

export default Settings;
