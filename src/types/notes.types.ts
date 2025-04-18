export type Note = {
    id: string
    title: string
    description: string
    tags: string[]
    visibility: "private" | "team" | "public"
    priority: "none" | "low" | "medium" | "high"
    project: string | null
    completed: boolean
    pinned: boolean
    createdAt: string
    updatedAt: string
  }
  
  export type FilterOptions = {
    tags: string[]
    visibility: string[]
    pinned: boolean
    completed: boolean | null
  }
  
  export type SortOption = "newest" | "oldest" | "title-asc" | "title-desc" | "priority"
  