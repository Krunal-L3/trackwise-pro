"use client";

import type React from "react";

import { motion } from "framer-motion";
import { useState } from "react";
import { FiSend } from "react-icons/fi";
import { LuTicket } from "react-icons/lu";
import { PrimaryButton } from "../ui/button/Button";
import Input from "../ui/form/input/InputField";
import Label from "../ui/form/Label";
import Select from "../ui/form/Select";
import TextArea from "../ui/form/input/TextArea";

export function TicketForm() {
    const [formState, setFormState] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });

    const handleChange = (
        e: React.ChangeEvent<
            HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
        >
    ) => {
        const { name, value } = e.target;
        setFormState((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log("Form submitted:", formState);
        // Reset form
        setFormState({
            name: "",
            email: "",
            subject: "",
            message: "",
        });
        // Show success message
        alert("Your ticket has been submitted. We'll get back to you soon!");
    };

    return (
        <section>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="mb-8"
            >
                <h2 className="flex items-center text-2xl font-semibold text-[#3b3b3b] font-title">
                    <span className="text-[#3b5ac7] mr-2">
                        <LuTicket />
                    </span>{" "}
                    Submit a Ticket
                </h2>
                <p className="text-gray-600 mt-2">
                    If you&apos;re experiencing issues or need help with
                    something specific:
                </p>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-white border border-gray-200 rounded-xl overflow-hidden"
            >
                <div className="p-6">
                    <form onSubmit={handleSubmit}>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                            <div>
                                <Label
                                    htmlFor="name"
                                    className="block text-[#3b3b3b] font-medium mb-2"
                                >
                                    Your Name
                                </Label>
                                <Input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formState.name}
                                    onChange={handleChange}
                                    required
                                    placeholder="John Doe"
                                />
                            </div>
                            <div>
                                <Label
                                    htmlFor="email"
                                    className="block text-[#3b3b3b] font-medium mb-2"
                                >
                                    Email Address
                                </Label>
                                <Input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formState.email}
                                    onChange={handleChange}
                                    required
                                    placeholder="john@example.com"
                                />
                            </div>
                        </div>

                        <div className="mb-6">
                            <Label
                                htmlFor="subject"
                                className="block text-[#3b3b3b] font-medium mb-2"
                            >
                                Subject
                            </Label>
                            <Select
                                options={[
                                    {
                                        value: "account",
                                        label: "Account Issues",
                                    },
                                    {
                                        value: "billing",
                                        label: "Billing Questions",
                                    },
                                    { value: "bug", label: "Report a Bug" },
                                    {
                                        value: "feature",
                                        label: "Feature Request",
                                    },
                                    { value: "other", label: "Other" },
                                ]}
                                defaultValue={formState.subject}
                                onChange={() => handleChange}
                                placeholder="Select a subject"
                            />
                        </div>

                        <div className="mb-6">
                            <Label
                                htmlFor="message"
                                className="block text-[#3b3b3b] font-medium mb-2"
                            >
                                Message
                            </Label>
                            <TextArea
                                id="message"
                                name="message"
                                value={formState.message}
                                onChange={handleChange}
                                required
                                rows={5}
                                placeholder="Please describe your issue in detail..."
                            ></TextArea>
                        </div>

                        <PrimaryButton
                            type="submit"
                            className="bg-[#3b5ac7] text-white px-6 py-5 rounded-lg hover:bg-[#8fb2f9] transition-colors flex items-center justify-center font-medium"
                        >
                            <FiSend className="mr-2" />
                            Submit Support Ticket
                        </PrimaryButton>
                    </form>
                </div>
            </motion.div>
        </section>
    );
}
