"use client";

import FilterPanel from "@/components/notes/FilterPanel";
import NoteModal from "@/components/notes/NoteModal";
import NotesList from "@/components/notes/NotesList";
import PageContent from "@/components/ui/layout/PageContent";
import PageNavbar, {
    PageNavbarLeftContent,
    PageNavbarRightContent,
} from "@/components/ui/layout/PageNavbar";
import { generateSampleNotes } from "@/lib/sampleData";
import { FilterOptions, Note, SortOption } from "@/types/notes.types";
import { AnimatePresence } from "framer-motion";
import { Add, Filter, SearchNormal1, Stickynote } from "iconsax-reactjs";
import { useEffect, useState } from "react";

const NotesPage = () => {
    const [notes, setNotes] = useState<Note[]>([]);
    const [filteredNotes, setFilteredNotes] = useState<Note[]>([]);
    const [searchQuery, setSearchQuery] = useState("");
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [currentNote, setCurrentNote] = useState<Note | null>(null);
    const [isFilterPanelOpen, setIsFilterPanelOpen] = useState(false);
    const [filterOptions, setFilterOptions] = useState<FilterOptions>({
        tags: [],
        visibility: [],
        pinned: false,
        completed: null,
    });
    const [sortOption, setSortOption] = useState<SortOption>("newest");

    // Load sample data on initial render
    useEffect(() => {
        setNotes(generateSampleNotes());
    }, []);

    // Apply filters and search whenever notes, filterOptions, or searchQuery changes
    useEffect(() => {
        let result = [...notes];

        // Apply search
        if (searchQuery) {
            const query = searchQuery.toLowerCase();
            result = result.filter(
                (note) =>
                    note.title.toLowerCase().includes(query) ||
                    note.description.toLowerCase().includes(query)
            );
        }

        // Apply tag filters
        if (filterOptions.tags.length > 0) {
            result = result.filter((note) =>
                note.tags.some((tag) => filterOptions.tags.includes(tag))
            );
        }

        // Apply visibility filters
        if (filterOptions.visibility.length > 0) {
            result = result.filter((note) =>
                filterOptions.visibility.includes(note.visibility)
            );
        }

        // Apply pinned filter
        if (filterOptions.pinned) {
            result = result.filter((note) => note.pinned);
        }

        // Apply completed filter
        if (filterOptions.completed !== null) {
            result = result.filter(
                (note) => note.completed === filterOptions.completed
            );
        }

        // Apply sorting
        result = sortNotes(result, sortOption);

        setFilteredNotes(result);
    }, [notes, filterOptions, searchQuery, sortOption]);

    const sortNotes = (notesToSort: Note[], option: SortOption): Note[] => {
        const sorted = [...notesToSort];

        switch (option) {
            case "newest":
                return sorted.sort(
                    (a, b) =>
                        new Date(b.createdAt).getTime() -
                        new Date(a.createdAt).getTime()
                );
            case "oldest":
                return sorted.sort(
                    (a, b) =>
                        new Date(a.createdAt).getTime() -
                        new Date(b.createdAt).getTime()
                );
            case "title-asc":
                return sorted.sort((a, b) => a.title.localeCompare(b.title));
            case "title-desc":
                return sorted.sort((a, b) => b.title.localeCompare(a.title));
            case "priority":
                return sorted.sort((a, b) => {
                    const priorityOrder = {
                        high: 0,
                        medium: 1,
                        low: 2,
                        none: 3,
                    };
                    return (
                        priorityOrder[a.priority] - priorityOrder[b.priority]
                    );
                });
            default:
                return sorted;
        }
    };

    const handleAddNote = (
        note: Omit<Note, "id" | "createdAt" | "updatedAt">
    ) => {
        const newNote: Note = {
            id: Date.now().toString(),
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString(),
            ...note,
        };
        setNotes([newNote, ...notes]);
        setIsModalOpen(false);
    };

    const handleUpdateNote = (updatedNote: Note) => {
        setNotes(
            notes.map((note) =>
                note.id === updatedNote.id
                    ? { ...updatedNote, updatedAt: new Date().toISOString() }
                    : note
            )
        );
        setIsModalOpen(false);
        setCurrentNote(null);
    };

    const handleDeleteNote = (id: string) => {
        setNotes(notes.filter((note) => note.id !== id));
    };

    const handleToggleComplete = (id: string) => {
        setNotes(
            notes.map((note) =>
                note.id === id
                    ? {
                          ...note,
                          completed: !note.completed,
                          updatedAt: new Date().toISOString(),
                      }
                    : note
            )
        );
    };

    const handleTogglePin = (id: string) => {
        setNotes(
            notes.map((note) =>
                note.id === id
                    ? {
                          ...note,
                          pinned: !note.pinned,
                          updatedAt: new Date().toISOString(),
                      }
                    : note
            )
        );
    };

    const handleEditNote = (note: Note) => {
        setCurrentNote(note);
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
        setCurrentNote(null);
    };

    return (
        <div className="font-['Open_Sans',_sans-serif]">
            {/* Header */}
            <PageNavbar>
                <PageNavbarLeftContent>
                    <div className="border rounded-full w-10 h-10 all-center">
                        <Stickynote size={18} />
                    </div>
                    <div>
                        <h1 className="text-sm font-semibold text-gray-800">
                            Notes
                        </h1>
                        <p className="text-xs font-medium">
                            View and manage your notes
                        </p>
                    </div>
                </PageNavbarLeftContent>
                <PageNavbarRightContent>
                    <div className="relative">
                        <input
                            type="text"
                            placeholder="Search notes..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="pl-10 pr-4 py-2 w-full sm:w-64 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#3b5ac7] text-sm"
                        />
                        <SearchNormal1 className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
                    </div>
                    <button
                        onClick={() => {
                            setCurrentNote(null);
                            setIsModalOpen(true);
                        }}
                        className="flex items-center justify-center gap-2 px-4 py-2 bg-[#3b5ac7] text-white rounded-lg hover:bg-[#2d4aa0] transition-colors text-sm font-medium"
                    >
                        <Add className="h-4 w-4" />
                        <span>Add Note</span>
                    </button>
                </PageNavbarRightContent>
            </PageNavbar>

            <PageContent>
                {/* Filters */}
                <div className="flex flex-wrap items-center justify-between gap-3 bg-white p-3 rounded-xl border border-gray-200">
                    <div className="flex items-center gap-2">
                        <button
                            onClick={() =>
                                setIsFilterPanelOpen(!isFilterPanelOpen)
                            }
                            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm border transition-colors ${
                                isFilterPanelOpen ||
                                Object.values(filterOptions).some((v) =>
                                    Array.isArray(v)
                                        ? v.length > 0
                                        : v !== null && v !== false
                                )
                                    ? "border-[#3b5ac7] text-[#3b5ac7] bg-[#3b5ac7]/10"
                                    : "border-gray-200 text-gray-600 hover:bg-gray-50"
                            }`}
                        >
                            <Filter className="h-4 w-4" />
                            <span>Filter</span>
                        </button>
                    </div>

                    <div className="flex items-center gap-2">
                        <span className="text-sm text-gray-500">Sort by:</span>
                        <select
                            value={sortOption}
                            onChange={(e) =>
                                setSortOption(e.target.value as SortOption)
                            }
                            className="px-3 py-1.5 rounded-lg text-sm border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#3b5ac7] bg-white"
                        >
                            <option value="newest">Newest</option>
                            <option value="oldest">Oldest</option>
                            <option value="title-asc">Title (A-Z)</option>
                            <option value="title-desc">Title (Z-A)</option>
                            <option value="priority">Priority</option>
                        </select>
                    </div>
                </div>

                {/* Filter Panel */}
                <AnimatePresence>
                    {isFilterPanelOpen && (
                        <FilterPanel
                            filterOptions={filterOptions}
                            setFilterOptions={setFilterOptions}
                        />
                    )}
                </AnimatePresence>

                {/* Notes List */}
                <NotesList
                    notes={filteredNotes}
                    onToggleComplete={handleToggleComplete}
                    onTogglePin={handleTogglePin}
                    onEdit={handleEditNote}
                    onDelete={handleDeleteNote}
                />

                {/* Empty State */}
                {filteredNotes.length === 0 && (
                    <div className="flex flex-col items-center justify-center py-12 text-center">
                        <div className="bg-white p-6 rounded-xl border border-gray-200 max-w-md">
                            <h3 className="text-lg font-semibold text-gray-800 mb-2">
                                No notes found
                            </h3>
                            <p className="text-gray-500 text-sm mb-4">
                                {notes.length === 0
                                    ? "You haven't created any notes yet. Click the 'Add Note' button to get started."
                                    : "No notes match your current filters. Try adjusting your search or filters."}
                            </p>
                            <button
                                onClick={() => {
                                    if (notes.length === 0) {
                                        setCurrentNote(null);
                                        setIsModalOpen(true);
                                    } else {
                                        setSearchQuery("");
                                        setFilterOptions({
                                            tags: [],
                                            visibility: [],
                                            pinned: false,
                                            completed: null,
                                        });
                                    }
                                }}
                                className="px-4 py-2 bg-[#3b5ac7] text-white rounded-lg hover:bg-[#2d4aa0] transition-colors text-sm font-medium"
                            >
                                {notes.length === 0
                                    ? "Create Note"
                                    : "Clear Filters"}
                            </button>
                        </div>
                    </div>
                )}
            </PageContent>

            {/* Add/Edit Note Modal */}
            <AnimatePresence>
                {isModalOpen && (
                    <NoteModal
                        note={currentNote}
                        onClose={handleCloseModal}
                        onSave={currentNote ? handleUpdateNote : handleAddNote}
                    />
                )}
            </AnimatePresence>
        </div>
    );
};

export default NotesPage;
