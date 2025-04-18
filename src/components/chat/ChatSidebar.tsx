"use client";

import { motion } from "framer-motion";
import { SearchNormal } from "iconsax-reactjs";
import Image from "next/image";
import { useState } from "react";

interface Contact {
    id: string;
    name: string;
    role: string;
    avatar: string;
    status: string;
    lastActive: string;
}

interface ChatSidebarProps {
    contacts: Contact[];
    selectedContact: Contact;
    onSelectContact: (contact: Contact) => void;
}

export default function ChatSidebar({
    contacts,
    selectedContact,
    onSelectContact,
}: ChatSidebarProps) {
    const [searchQuery, setSearchQuery] = useState("");

    const filteredContacts = contacts.filter((contact) =>
        contact.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
            className="bg-white h-full rounded-lg border border-gray-100 overflow-hidden"
        >
            <div className="p-4">
                <div className="relative">
                    <SearchNormal
                        className="absolute left-3 top-1/2 transform -translate-y-1/2 text-dark/50"
                        size={18}
                    />
                    <input
                        type="text"
                        placeholder="Search..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-1 focus:ring-primary"
                    />
                </div>
            </div>

            <div className="overflow-y-auto max-h-[calc(100vh-250px)]">
                {filteredContacts.map((contact, index) => (
                    <motion.div
                        key={contact.id}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: index * 0.05 }}
                        onClick={() => onSelectContact(contact)}
                        className={`flex items-center p-4 cursor-pointer hover:bg-background transition-colors ${
                            selectedContact.id === contact.id
                                ? "bg-background/70"
                                : ""
                        }`}
                    >
                        <div className="relative">
                            <Image
                                src={contact.avatar || "/default-avatar.webp"}
                                alt={contact.name}
                                className="w-12 h-12 rounded-full object-cover"
                                width={48}
                                height={48}
                            />
                            <span
                                className={`absolute bottom-0 right-0 w-3 h-3 rounded-full border-2 border-white ${
                                    contact.status === "online"
                                        ? "bg-green-500"
                                        : "bg-orange-500"
                                }`}
                            ></span>
                        </div>
                        <div className="ml-3 flex-1">
                            <div className="flex justify-between items-center">
                                <h3 className="font-semibold text-dark">
                                    {contact.name}
                                </h3>
                                <span className="text-xs text-gray-500">
                                    {contact.lastActive}
                                </span>
                            </div>
                            <p className="text-sm text-gray-600">
                                {contact.role}
                            </p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </motion.div>
    );
}
