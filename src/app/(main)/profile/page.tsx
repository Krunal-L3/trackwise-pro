import PageContent from "@/components/ui/layout/PageContent";
import PageNavbar, {
    PageNavbarLeftContent,
} from "@/components/ui/layout/PageNavbar";
import UserAddressCard from "@/components/user-profile/UserAddressCard";
import UserInfoCard from "@/components/user-profile/UserInfoCard";
import UserMetaCard from "@/components/user-profile/UserMetaCard";
import { Profile } from "iconsax-reactjs";
import React from "react";

const ProfilePage: React.FC = () => {
    return (
        <div>
            <PageNavbar>
                <PageNavbarLeftContent>
                    <div className="border rounded-full w-10 h-10 all-center">
                        <Profile size={18} />
                    </div>
                    <div>
                        <h1 className="text-sm font-semibold text-gray-800">
                            My Profile
                        </h1>
                        <p className="text-xs font-medium">
                            View and manage your profile
                        </p>
                    </div>
                </PageNavbarLeftContent>
            </PageNavbar>

            <PageContent>
                    <div className="space-y-6">
                        <UserMetaCard />
                        <UserInfoCard />
                        <UserAddressCard />
                    </div>
            </PageContent>
        </div>
    );
};

export default ProfilePage;
