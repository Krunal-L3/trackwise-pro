"use client"

import { motion } from "framer-motion"
import { FiCheckSquare, FiPieChart, FiSettings, FiUsers } from "react-icons/fi"
import { HiOutlineRocketLaunch } from "react-icons/hi2"

const steps = [
  {
    title: "Setting up your workspace",
    icon: FiSettings,
    color: "bg-blue-100 text-blue-600",
  },
  {
    title: "Inviting your team",
    icon: FiUsers,
    color: "bg-purple-100 text-purple-600",
  },
  {
    title: "Creating and assigning tasks",
    icon: FiCheckSquare,
    color: "bg-green-100 text-green-600",
  },
  {
    title: "Planning and tracking progress",
    icon: FiPieChart,
    color: "bg-orange-100 text-orange-600",
  },
]

export function GettingStarted() {
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
          <span className="text-[#3b5ac7] mr-2"><HiOutlineRocketLaunch /></span> Getting Started
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {steps.map((step, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2, delay: index * 0.1 }}
            viewport={{ once: true }}
            whileHover={{ y: -5 }}
            className="bg-white border border-gray-200 rounded-xl overflow-hidden"
          >
            <div className="p-6">
              <div className="flex gap-2 items-center mb-4">
              <div className={`${step.color} shrink-0 w-10 h-10 rounded-full flex items-center justify-center`}>
                <step.icon className="text-lg" />
              </div>
              <h3 className="font-semibold text-[#3b3b3b] font-title">{step.title}</h3>
              </div>
              <a
                href="#"
                className="text-[#3b5ac7] text-sm font-medium flex items-center hover:text-[#8fb2f9] transition-colors font-['Open_Sans']"
              >
                Learn more
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 ml-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
