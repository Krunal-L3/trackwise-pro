"use client";

import { useMediaQuery } from "@/hooks/use-media-query";
import { AnimatePresence, motion } from "framer-motion";
import { Messages3 } from "iconsax-reactjs";
import { useEffect, useState } from "react";
import PageContent from "../ui/layout/PageContent";
import PageNavbar, { PageNavbarLeftContent } from "../ui/layout/PageNavbar";
import ChatArea from "./ChatArea";
import ChatSidebar from "./ChatSidebar";
import { faker } from "@faker-js/faker";

interface Contact {
    id: string;
    name: string;
    role: string;
    avatar: string;
    status: string;
    lastActive: string;
}

const contacts = [
    {
        id: "1",
        name:
            faker.person.firstName() + " " + faker.person.lastName() ||
            "Kaiya George",
        role: faker.person.jobTitle() || "Project Manager",
        avatar: faker.image.personPortrait({ size: 64 }),
        status: "online",
        lastActive: "15 mins",
    },
    {
        id: "2",
        name:
            faker.person.firstName() + " " + faker.person.lastName() ||
            "Lindsey Curtis",
        role: faker.person.jobTitle() || "Designer",
        avatar: faker.image.personPortrait({ size: 64 }),
        status: "online",
        lastActive: "30 mins",
    },
    {
        id: "3",
        name:
            faker.person.firstName() + " " + faker.person.lastName() ||
            "Zain Geidt",
        role: faker.person.jobTitle() || "Content Writer",
        avatar: faker.image.personPortrait({ size: 64 }),
        status: "online",
        lastActive: "45 mins",
    },
    {
        id: "4",
        name:
            faker.person.firstName() + " " + faker.person.lastName() ||
            "Carla George",
        role: faker.person.jobTitle() || "Front-end Developer",
        avatar: faker.image.personPortrait({ size: 64 }),
        status: "away",
        lastActive: "2 days",
    },
    {
        id: "5",
        name:
            faker.person.firstName() + " " + faker.person.lastName() ||
            "Abram Schleifer",
        role: "Digital Marketer",
        avatar: faker.image.personPortrait({ size: 64 }),
        status: "online",
        lastActive: "1 hour",
    },
];

export default function ChatInterface() {
    const [selectedContact, setSelectedContact] = useState<Contact>(
        contacts[0]
    );

    // Messages state (moved to parent component to persist across views)
    const [messages, setMessages] = useState([
        {
            id: "1",
            senderId: "2",
            text: "I want to make an appointment tomorrow from 2:00 to 5:00pm?",
            timestamp: "2 hours ago",
        },
        {
            id: "2",
            senderId: "me",
            text: "If don't like something, I'll stay away from it.",
            timestamp: "2 hours ago",
        },
        {
            id: "3",
            senderId: "2",
            text: "I want more detailed information.",
            timestamp: "2 hours ago",
        },
        {
            id: "4",
            senderId: "me",
            text: "If don't like something, I'll stay away from it.",
            timestamp: "",
        },
    ]);

    const [showChatOnMobile, setShowChatOnMobile] = useState(false);
    const isMobile = useMediaQuery("(max-width: 768px)");

    // Reset mobile view state when screen size changes
    useEffect(() => {
        if (!isMobile) {
            setShowChatOnMobile(false);
        }
    }, [isMobile]);

    const handleSelectContact = (contact: Contact) => {
        setSelectedContact(contact);
        if (isMobile) {
            setShowChatOnMobile(true);
        }
    };

    const handleBackToList = () => {
        setShowChatOnMobile(false);
    };

    const [newMessage, setNewMessage] = useState("");

    const handleSendMessage = (text: string, file: File | null = null) => {
        if ((!text || text.trim() === "") && !file) return;

        // Create a new message
        const newMsg = {
            id: String(Date.now()),
            senderId: "me",
            text: text || (file ? `Sent a file: ${file.name}` : ""),
            timestamp: "Just now",
            file: file
                ? {
                      name: file.name,
                      url: URL.createObjectURL(file),
                      type: file.type,
                  }
                : null,
        };

        // Add the new message to the messages array
        setMessages((prev) => [...prev, newMsg]);
        setNewMessage("");
    };

    return (
        <div className="w-full h-full">
            <PageNavbar>
                <PageNavbarLeftContent>
                    <div className="border rounded-full w-10 h-10 all-center">
                        <Messages3 size={18} />
                    </div>
                    <div>
                        <h1 className="text-sm font-semibold text-gray-800">
                            Chat
                        </h1>
                        <p className="text-xs font-medium">
                            View and manage your chat
                        </p>
                    </div>
                </PageNavbarLeftContent>
            </PageNavbar>

            <PageContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 h-full">
                    <AnimatePresence mode="wait">
                        {/* On mobile: Show either sidebar OR chat area */}
                        {isMobile ? (
                            !showChatOnMobile ? (
                                <motion.div
                                    key="sidebar"
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -20 }}
                                    transition={{ duration: 0.3 }}
                                    className="col-span-1 md:col-span-3 max-h-[calc(100vh-150px)]"
                                >
                                    <ChatSidebar
                                        contacts={contacts}
                                        selectedContact={selectedContact}
                                        onSelectContact={handleSelectContact}
                                    />
                                </motion.div>
                            ) : (
                                <motion.div
                                    key="chat"
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: 20 }}
                                    transition={{ duration: 0.3 }}
                                    className="col-span-1 md:col-span-3 max-h-[calc(100vh-150px)]"
                                >
                                    <ChatArea
                                        contact={selectedContact}
                                        messages={messages}
                                        newMessage={newMessage}
                                        setNewMessage={setNewMessage}
                                        handleSendMessage={handleSendMessage}
                                        onBack={handleBackToList}
                                        isMobile={isMobile}
                                    />
                                </motion.div>
                            )
                        ) : (
                            // On desktop: Show both sidebar AND chat area
                            <>
                                <div className="md:col-span-1 max-h-[calc(100vh-150px)]">
                                    <ChatSidebar
                                        contacts={contacts}
                                        selectedContact={selectedContact}
                                        onSelectContact={handleSelectContact}
                                    />
                                </div>
                                <div className="md:col-span-2 max-h-[calc(100vh-150px)]">
                                    <ChatArea
                                        contact={selectedContact}
                                        messages={messages}
                                        newMessage={newMessage}
                                        setNewMessage={setNewMessage}
                                        handleSendMessage={handleSendMessage}
                                        isMobile={isMobile}
                                    />
                                </div>
                            </>
                        )}
                    </AnimatePresence>
                </div>
            </PageContent>
        </div>
    );
}
