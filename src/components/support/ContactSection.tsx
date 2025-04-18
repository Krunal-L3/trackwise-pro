"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { FiMail, FiTwitter } from "react-icons/fi";
import { LuPhone } from "react-icons/lu";

export function ContactSection() {
    return (
        <section>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2 }}
                viewport={{ once: true }}
                className="mb-8"
            >
                <h2 className="flex items-center text-2xl font-semibold text-[#3b3b3b] font-title">
                    <span className="text-[#3b5ac7] mr-2">
                        <LuPhone />
                    </span>{" "}
                    Need more help?
                </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.2, delay: 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -5 }}
                    className="bg-white border border-gray-200 rounded-xl overflow-hidden"
                >
                    <div className="p-6">
                        <div className="flex gap-2 items-center mb-4">
                            <div className="bg-blue-100 text-blue-600 w-12 h-12 rounded-full flex items-center justify-center">
                                <LuPhone className="text-lg" />
                            </div>
                            <h3 className="text-lg font-semibold text-[#3b3b3b] font-title">
                                Phone
                            </h3>
                        </div>
                        <Link
                            href="tel:+11234567890"
                            target="_blank"
                            className="text-gray-600 text-sm mb-4"
                        >
                            +1 (123) 456-7890
                        </Link>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.2, delay: 0.2 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -5 }}
                    className="bg-white border border-gray-200 rounded-xl overflow-hidden"
                >
                    <div className="p-6">
                        <div className="flex gap-2 items-center mb-4">
                            <div className="bg-purple-100 text-purple-600 w-12 h-12 rounded-full flex items-center justify-center">
                                <FiMail className="text-lg" />
                            </div>
                            <h3 className="text-lg font-semibold text-[#3b3b3b] font-title">
                                Email
                            </h3>
                        </div>
                        <Link
                            href="mailto:support@trackwiseapp.com"
                            target="_blank"
                            className="text-gray-600 text-sm mb-4"
                        >
                            support@trackwiseapp.com
                        </Link>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.2, delay: 0.3 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -5 }}
                    className="bg-white border border-gray-200 rounded-xl overflow-hidden"
                >
                    <div className="p-6">
                        <div className="flex gap-2 items-center mb-4">
                            <div className="bg-green-100 text-green-600 w-12 h-12 rounded-full flex items-center justify-center">
                                <FiTwitter className="text-lg" />
                            </div>
                            <h3 className="text-lg font-semibold text-[#3b3b3b] font-title">
                                Twitter/X
                            </h3>
                        </div>
                        <Link
                            href="https://twitter.com/TrackwiseApp"
                            target="_blank"
                            className="text-gray-600 text-sm mb-4"
                        >
                            @TrackwiseApp
                        </Link>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
