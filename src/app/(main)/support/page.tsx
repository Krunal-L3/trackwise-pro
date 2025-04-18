import { ContactSection } from "@/components/support/ContactSection";
import { Faq } from "@/components/support/Faq";
import { GettingStarted } from "@/components/support/GettingStarted";
import { TicketForm } from "@/components/support/TicketForm";
import PageContent from "@/components/ui/layout/PageContent";
import PageNavbar, {
    PageNavbarLeftContent,
} from "@/components/ui/layout/PageNavbar";
import React from "react";
import { FaScrewdriverWrench } from "react-icons/fa6";

const SupportPage: React.FC = () => {
    return (
        <div>
            <PageNavbar>
                <PageNavbarLeftContent>
                    <div className="border rounded-full w-10 h-10 all-center">
                        <FaScrewdriverWrench size={18} />
                    </div>
                    <div>
                        <h1 className="text-sm font-semibold text-gray-800">
                            Support
                        </h1>
                        <p className="text-xs font-medium">
                            View and manage your support
                        </p>
                    </div>
                </PageNavbarLeftContent>
            </PageNavbar>

            <PageContent>
                <div className="space-y-16">
                    <Faq />
                    <GettingStarted />
                    <ContactSection />
                    <TicketForm />
                </div>
            </PageContent>
        </div>
    );
};

export default SupportPage;
