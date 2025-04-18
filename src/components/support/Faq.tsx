"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { FiChevronDown, FiHelpCircle } from "react-icons/fi"

const faqs = [
  {
    question: "How do I reset my password?",
    answer:
      'Go to the login screen, click "Forgot Password?", and follow the instructions to reset your password via email.',
  },
  {
    question: "Can I upgrade or downgrade my plan?",
    answer:
      "Yes! Navigate to Settings → Billing, and you'll see available plan options. Changes will take effect from your next billing cycle.",
  },
  {
    question: "How do I track my weekly productivity?",
    answer: "Use the Personal Productivity Widget on your dashboard to view time spent and tasks completed weekly.",
  },
  {
    question: "I found a bug. How do I report it?",
    answer:
      'We appreciate your help! Please use the "Report a Bug" form at the bottom of this page or email us at support@trackwiseapp.com.',
  },
  {
    question: "Is there a mobile version of Trackwise?",
    answer: "Yes, Trackwise is fully responsive on mobile browsers. Our native app is coming soon!",
  },
]

export function Faq() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  const toggleFaq = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index)
  }

  return (
    <section>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="mb-6 flex items-center"
      >
        <FiHelpCircle className="text-[#3b5ac7] text-2xl mr-3" />
        <h2 className="text-2xl font-semibold text-[#3b3b3b] font-title">Frequently Asked Questions</h2>
      </motion.div>

      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="border border-gray-200 rounded-lg overflow-hidden bg-white"
          >
            <button onClick={() => toggleFaq(index)} className="flex justify-between items-center w-full p-3 text-left outline-none">
              <span className="font-medium text-[#3b3b3b] font-['Open_Sans']">{faq.question}</span>
              <motion.div animate={{ rotate: activeIndex === index ? 180 : 0 }} transition={{ duration: 0.3 }}>
                <FiChevronDown className="text-[#3b5ac7] text-xl" />
              </motion.div>
            </button>
            <AnimatePresence>
              {activeIndex === index && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="p-5 pt-4 text-sm border-t border-gray-100">
                    <p className="text-[#3b3b3b] font-['Open_Sans']">{faq.answer}</p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
