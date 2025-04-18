"use client";

import { redirect } from "next/navigation";

export default function Home() {
    return (
        // <div className="w-full h-full py-4 px-6">
        //     <div className="w-full h-full flex items-start justify-start gap-6">
        //         {/* Main Content */}
        //         <div className="w-full h-full max-h-screen space-y-5 overflow-y-auto">
        //             {/* Recent Projects */}
        //             <RecentProjects />

        //             {/* Weekly Activity & Task Summary */}
        //             <div className="w-full grid grid-cols-2 gap-4">
        //                 {/* Weekly Activity */}
        //                 <WeeklyActivityChart />
        //                 {/* Task Summary */}
        //                 <div className="w-full p-4 bg-white rounded-2xl">
        //                     <div className="flex items-center justify-between mb-4">
        //                         <h4 className="text-xl font-medium font-title text-gray-700">
        //                             Task Summary
        //                         </h4>
        //                         <button>
        //                             <BsThreeDots className="w-4 h-4 text-gray-500" />
        //                         </button>
        //                     </div>
        //                     <div className="w-full h-60 grid grid-cols-3 gap-3 text-center">
        //                         <div className="px-4 py-6 flex flex-col items-center justify-center gap-4 bg-primary text-white rounded-xl">
        //                             <div className="w-20 aspect-square border-2 border-white rounded-full flex items-center justify-center">
        //                                 <TbCircles className="w-6 h-6" />
        //                             </div>
        //                             <div className="font-medium">
        //                                 <p>Projects</p>
        //                                 <p className="text-2xl">30</p>
        //                             </div>
        //                         </div>
        //                         <div className="px-4 py-6 flex flex-col items-center justify-center gap-4 bg-accent text-white rounded-xl">
        //                             <div className="w-20 aspect-square border-2 border-white rounded-full flex items-center justify-center">
        //                                 <FiUserCheck className="w-6 h-6" />
        //                             </div>
        //                             <div className="font-medium">
        //                                 <p>Assigned</p>
        //                                 <p className="text-2xl">50</p>
        //                             </div>
        //                         </div>
        //                         <div className="px-4 py-6 flex flex-col items-center justify-center gap-4 bg-gray-100 text-gray-900 rounded-xl">
        //                             <div className="w-20 aspect-square border-2 border-gray-900 rounded-full flex items-center justify-center">
        //                                 <IoCheckboxOutline className="w-6 h-6" />
        //                             </div>
        //                             <div className="font-medium">
        //                                 <p>Closed</p>
        //                                 <p className="text-2xl">60</p>
        //                             </div>
        //                         </div>
        //                     </div>
        //                 </div>
        //             </div>

        //             {/* Today's Task List */}
        //             <div className="px-4">
        //                 <div className="flex items-center justify-between mb-4">
        //                     <h4 className="text-xl font-medium font-title text-gray-700">
        //                         Today&apos;s Task (10)
        //                     </h4>
        //                     <button className="mt-2 text-base flex items-center gap-1 text-gray-500">
        //                         See All <FaChevronRight />
        //                     </button>
        //                 </div>
        //                 <div className="space-y-3">
        //                     {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item) => (
        //                         <div
        //                             key={item}
        //                             className="bg-white rounded-md px-4 py-2 flex items-center justify-between gap-8"
        //                         >
        //                             <div className="flex items-center justify-start gap-2">
        //                                 <input type="checkbox" name="" id="" />
        //                                 <p className="text-sm">
        //                                     Lorem ipsum dolor sit amet
        //                                     consectetur adipisicing elit. Vitae,
        //                                     perferendis!
        //                                 </p>
        //                             </div>
        //                             <div className="flex items-center justify-end gap-3">
        //                                 <span className="shrink-0 text-xs font-medium px-2 py-1 text-white bg-green-600 rounded-full">
        //                                     In Progress
        //                                 </span>
        //                                 <button>
        //                                     <BsThreeDots className="w-4 h-4 text-gray-500" />
        //                                 </button>
        //                             </div>
        //                         </div>
        //                     ))}
        //                 </div>
        //             </div>
        //         </div>

        //         {/* Right Section */}
        //         <div className="w-96 h-full p-4 shrink-0 bg-white rounded-2xl overflow-hidden">
        //             <div className="h-10 flex items-center text-xl font-medium font-title text-gray-700 border-b border-gray-500 mb-4">
        //                 Messges
        //             </div>
        //             <div
        //                 className="w-full max-h-[calc(100vh-7rem)] flex flex-col pb-4 gap-5 items-start justify-start overflow-y-auto"
        //                 style={{ flex: "1 1 auto" }}
        //             >
        //                 {[1, 2, 3].map((item) => (
        //                     <div
        //                         key={item}
        //                         className="w-full flex items-center justify-start gap-3"
        //                     >
        //                         <div className="w-10 h-10 rounded-full bg-gray-100 shrink-0"></div>
        //                         <div className="">
        //                             <div className="flex items-center justify-between">
        //                                 <h6 className="text-black font-semibold">
        //                                     Krunal Mungalpara
        //                                 </h6>
        //                                 <span className="text-sm font-medium text-gray-500">
        //                                     08:00
        //                                 </span>
        //                             </div>
        //                             <p className="text-sm line-clamp-1">
        //                                 Lorem ipsum dolor sit amet consectetur
        //                                 adipisicing elit. Odio dignissimos nobis
        //                                 error voluptas quod sint pariatur sed
        //                                 hic dolor earum.
        //                             </p>
        //                         </div>
        //                     </div>
        //                 ))}
        //             </div>
        //         </div>
        //     </div>
        // </div>
        redirect("/dashboard")
    );
}
