"use client"

import type React from "react"

import { FilterOptions } from "@/types/notes.types"
import { motion } from "framer-motion"
import { Eye, Tag, TickCircle } from "iconsax-reactjs"
import { LuPin } from "react-icons/lu"

interface FilterPanelProps {
  filterOptions: FilterOptions
  setFilterOptions: React.Dispatch<React.SetStateAction<FilterOptions>>
}

export default function FilterPanel({ filterOptions, setFilterOptions }: FilterPanelProps) {
  const toggleTag = (tag: string) => {
    if (filterOptions.tags.includes(tag)) {
      setFilterOptions({
        ...filterOptions,
        tags: filterOptions.tags.filter((t) => t !== tag),
      })
    } else {
      setFilterOptions({
        ...filterOptions,
        tags: [...filterOptions.tags, tag],
      })
    }
  }

  const toggleVisibility = (visibility: string) => {
    if (filterOptions.visibility.includes(visibility)) {
      setFilterOptions({
        ...filterOptions,
        visibility: filterOptions.visibility.filter((v) => v !== visibility),
      })
    } else {
      setFilterOptions({
        ...filterOptions,
        visibility: [...filterOptions.visibility, visibility],
      })
    }
  }

  const toggleCompleted = (value: boolean | null) => {
    setFilterOptions({
      ...filterOptions,
      completed: filterOptions.completed === value ? null : value,
    })
  }

  const togglePinned = () => {
    setFilterOptions({
      ...filterOptions,
      pinned: !filterOptions.pinned,
    })
  }

  const clearFilters = () => {
    setFilterOptions({
      tags: [],
      visibility: [],
      pinned: false,
      completed: null,
    })
  }

  const availableTags = ["To-do", "Meeting", "Team", "Idea", "Important", "Today", "Bug", "Feature"]

  return (
    <motion.div
      initial={{ opacity: 0, height: 0 }}
      animate={{ opacity: 1, height: "auto" }}
      exit={{ opacity: 0, height: 0 }}
      transition={{ duration: 0.2 }}
      className="bg-white rounded-xl border border-gray-200 p-4 overflow-hidden"
    >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div>
          <div className="flex items-center gap-2 mb-3">
            <Tag size={16} className="text-gray-500" />
            <h3 className="text-sm font-medium text-gray-700">Filter by Tags</h3>
          </div>
          <div className="flex flex-wrap gap-2">
            {availableTags.map((tag) => (
              <button
                key={tag}
                onClick={() => toggleTag(tag)}
                className={`text-xs px-3 py-1 rounded-full border transition-colors ${
                  filterOptions.tags.includes(tag)
                    ? "bg-[#3b5ac7] text-white border-[#3b5ac7]"
                    : "bg-white text-gray-700 border-gray-300 hover:bg-gray-100"
                }`}
              >
                {tag}
              </button>
            ))}
          </div>
        </div>

        <div>
          <div className="flex items-center gap-2 mb-3">
            <Eye size={16} className="text-gray-500" />
            <h3 className="text-sm font-medium text-gray-700">Filter by Visibility</h3>
          </div>
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => toggleVisibility("private")}
              className={`text-xs px-3 py-1 rounded-full border transition-colors ${
                filterOptions.visibility.includes("private")
                  ? "bg-[#3b5ac7] text-white border-[#3b5ac7]"
                  : "bg-white text-gray-700 border-gray-300 hover:bg-gray-100"
              }`}
            >
              Private
            </button>
            <button
              onClick={() => toggleVisibility("team")}
              className={`text-xs px-3 py-1 rounded-full border transition-colors ${
                filterOptions.visibility.includes("team")
                  ? "bg-[#3b5ac7] text-white border-[#3b5ac7]"
                  : "bg-white text-gray-700 border-gray-300 hover:bg-gray-100"
              }`}
            >
              Team
            </button>
            <button
              onClick={() => toggleVisibility("public")}
              className={`text-xs px-3 py-1 rounded-full border transition-colors ${
                filterOptions.visibility.includes("public")
                  ? "bg-[#3b5ac7] text-white border-[#3b5ac7]"
                  : "bg-white text-gray-700 border-gray-300 hover:bg-gray-100"
              }`}
            >
              Public
            </button>
          </div>
        </div>

        <div>
          <div className="flex items-center gap-2 mb-3">
            <TickCircle size={16} className="text-gray-500" />
            <h3 className="text-sm font-medium text-gray-700">Other Filters</h3>
          </div>
          <div className="space-y-2">
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => toggleCompleted(true)}
                className={`text-xs px-3 py-1 rounded-full border transition-colors ${
                  filterOptions.completed === true
                    ? "bg-[#3b5ac7] text-white border-[#3b5ac7]"
                    : "bg-white text-gray-700 border-gray-300 hover:bg-gray-100"
                }`}
              >
                Completed
              </button>
              <button
                onClick={() => toggleCompleted(false)}
                className={`text-xs px-3 py-1 rounded-full border transition-colors ${
                  filterOptions.completed === false
                    ? "bg-[#3b5ac7] text-white border-[#3b5ac7]"
                    : "bg-white text-gray-700 border-gray-300 hover:bg-gray-100"
                }`}
              >
                Not Completed
              </button>
            </div>
            <button
              onClick={togglePinned}
              className={`text-xs px-3 py-1 rounded-full border transition-colors flex items-center gap-1 ${
                filterOptions.pinned
                  ? "bg-[#3b5ac7] text-white border-[#3b5ac7]"
                  : "bg-white text-gray-700 border-gray-300 hover:bg-gray-100"
              }`}
            >
              <LuPin size={12} />
              <span>Pinned Only</span>
            </button>
          </div>
        </div>
      </div>

      <div className="flex justify-end mt-4">
        <button onClick={clearFilters} className="text-xs px-3 py-1 text-[#3b5ac7] hover:underline transition-colors">
          Clear All Filters
        </button>
      </div>
    </motion.div>
  )
}
