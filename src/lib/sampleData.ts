import type { Note } from "@/types/notes.types"

export function generateSampleNotes(): Note[] {
  return [
    {
      id: "1",
      title: "Landing page design",
      description:
        "Search for inspiration to create landing page for AI startup. Need to focus on modern design with clear value proposition.",
      tags: ["To-do", "Today"],
      visibility: "private",
      priority: "high",
      project: "Marketing Website",
      completed: false,
      pinned: true,
      createdAt: new Date(Date.now() - 1000 * 60 * 60 * 2).toISOString(), // 2 hours ago
      updatedAt: new Date(Date.now() - 1000 * 60 * 60 * 2).toISOString(),
    },
    {
      id: "2",
      title: "Meeting with CTO",
      description:
        "Discuss application architecture and approach. Key topics: microservices vs monolith, database selection, and deployment strategy.",
      tags: ["Meeting", "Today"],
      visibility: "team",
      priority: "medium",
      project: null,
      completed: true,
      pinned: false,
      createdAt: new Date(Date.now() - 1000 * 60 * 60 * 24).toISOString(), // 1 day ago
      updatedAt: new Date(Date.now() - 1000 * 60 * 30).toISOString(), // 30 minutes ago
    },
    {
      id: "3",
      title: "Team meeting",
      description:
        "Discuss client requirements and deadline. Need to prepare presentation slides and demo for the client meeting next week.",
      tags: ["Team", "Meeting"],
      visibility: "team",
      priority: "medium",
      project: null,
      completed: true,
      pinned: false,
      createdAt: new Date(Date.now() - 1000 * 60 * 60 * 48).toISOString(), // 2 days ago
      updatedAt: new Date(Date.now() - 1000 * 60 * 60 * 24).toISOString(), // 1 day ago
    },
    {
      id: "4",
      title: "API Integration Plan",
      description:
        "Create a plan for integrating with third-party payment APIs. Need to research documentation and security requirements.",
      tags: ["To-do", "Important"],
      visibility: "private",
      priority: "high",
      project: "API Integration",
      completed: false,
      pinned: true,
      createdAt: new Date(Date.now() - 1000 * 60 * 60 * 5).toISOString(), // 5 hours ago
      updatedAt: new Date(Date.now() - 1000 * 60 * 60 * 5).toISOString(),
    },
    {
      id: "5",
      title: "Mobile app wireframes",
      description:
        "Create wireframes for the mobile app. Focus on user flow and key screens: onboarding, dashboard, settings.",
      tags: ["To-do", "Idea"],
      visibility: "team",
      priority: "medium",
      project: "Mobile App",
      completed: false,
      pinned: false,
      createdAt: new Date(Date.now() - 1000 * 60 * 60 * 72).toISOString(), // 3 days ago
      updatedAt: new Date(Date.now() - 1000 * 60 * 60 * 72).toISOString(),
    },
    {
      id: "6",
      title: "Bug: Authentication issue",
      description: "Users are getting logged out randomly. Need to investigate token expiration and refresh mechanism.",
      tags: ["Bug", "Important"],
      visibility: "team",
      priority: "high",
      project: "Dashboard",
      completed: false,
      pinned: false,
      createdAt: new Date(Date.now() - 1000 * 60 * 60 * 10).toISOString(), // 10 hours ago
      updatedAt: new Date(Date.now() - 1000 * 60 * 60 * 10).toISOString(),
    },
    {
      id: "7",
      title: "Weekly progress report",
      description: "Prepare weekly progress report for stakeholders. Include milestones, blockers, and next steps.",
      tags: ["To-do", "Team"],
      visibility: "public",
      priority: "low",
      project: null,
      completed: true,
      pinned: false,
      createdAt: new Date(Date.now() - 1000 * 60 * 60 * 96).toISOString(), // 4 days ago
      updatedAt: new Date(Date.now() - 1000 * 60 * 60 * 48).toISOString(), // 2 days ago
    },
    {
      id: "8",
      title: "Feature: Dark mode",
      description: "Implement dark mode for the dashboard. Need to create a color palette and update component styles.",
      tags: ["Feature", "Idea"],
      visibility: "team",
      priority: "low",
      project: "Dashboard",
      completed: false,
      pinned: false,
      createdAt: new Date(Date.now() - 1000 * 60 * 60 * 120).toISOString(), // 5 days ago
      updatedAt: new Date(Date.now() - 1000 * 60 * 60 * 120).toISOString(),
    },
  ]
}
