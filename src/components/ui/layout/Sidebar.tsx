"use client";

import {
    AddSquare,
    ArrowRight2,
    Element3,
    Folder2,
    Headphone,
    LogoutCurve,
    Messages1,
    Profile2User,
    Setting2,
    Stickynote,
    TickSquare
} from "iconsax-reactjs";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

function Sidebar() {
    const pathname = usePathname();

    return (
        <div className="w-60 shrink-0 md:block h-screen sticky top-0 overflow-hidden">
            <div className="w-full h-full bg-white border-r border-gray-200">
                {/* logo */}
                <div className="h-[var(--h-nav)] p-4 md:p-6 flex cursor-pointer group items-center gap-2">
                    <div className="h-10 w-10 outline-2  outline-accent bg-primary flex items-center justify-center rounded-full text-white">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            fill="none"
                            viewBox="0 0 188 188"
                            className="group-hover:scale-75 duration-200"
                        >
                            <path
                                fill="#ffffff"
                                d="M95.275 31.25c4.316-2.805 8.561-5.73 12.962-8.394 10.641-6.443 21.356-12.764 32.036-19.141.789-.42 1.535-.915 2.227-1.48a8.19 8.19 0 0 1 10.201-.836 6.506 6.506 0 0 1 2.437 9.808 4.36 4.36 0 0 0-.544 3.306 7.26 7.26 0 0 1-2.422 8.903c-4.353 3.41-8.872 6.611-13.328 9.887-1.668 1.225-3.359 2.424-5.04 3.635l.442.618c4.713-2.847 9.407-5.733 14.154-8.526 2.699-1.588 5.485-3.024 8.234-4.526l.962-.477a7.896 7.896 0 0 1 10.197 1.88 7.275 7.275 0 0 1-2.659 9.917c-6.893 5.422-14.294 10.207-21.086 15.743-17.347 14.141-34.477 28.544-51.686 42.852a2.8 2.8 0 0 0-1.022 1.69c1.926-1.31 3.87-2.592 5.774-3.934a422 422 0 0 1 46.718-30.09 104.5 104.5 0 0 1 15.553-6.49 7.7 7.7 0 0 1 9.685 3.109 8.33 8.33 0 0 1-1.537 10.157c-2.226 2.408-5.029 4.274-7.495 6.472-.735.656-1.8 1.708-1.694 2.429a10.92 10.92 0 0 1-5.782 10.487c-11.275 8.688-22.688 17.198-34.037 25.791-1.043.791-2.004 1.69-3.004 2.54l.333.571c2.667-1.11 5.413-2.062 7.987-3.357 9.431-4.746 18.76-9.697 28.227-14.372a57 57 0 0 1 10.252-3.857 6.357 6.357 0 0 1 7.767 3.234 6.491 6.491 0 0 1-2.526 8.25c-2.467 1.865-5.133 3.466-7.71 5.185l.414.759c3.815-1.867 7.624-3.748 11.448-5.594 1.933-.933 3.856-1.915 5.854-2.679a6.59 6.59 0 0 1 8.852 2.229 6.584 6.584 0 0 1-1.878 8.933c-4.356 3.57-8.958 6.848-13.553 10.115-6.494 4.618-13.08 9.106-19.616 13.665a5.18 5.18 0 0 0-1.994 2.363c3.96-1.433 7.962-2.765 11.871-4.328 4.407-1.761 8.707-3.783 13.1-5.576a17.4 17.4 0 0 1 4.399-1.096 5.35 5.35 0 0 1 5.729 2.663 5.55 5.55 0 0 1-.663 6.296l-1.423 1.963c1 .363 1.821.621 2.61.956a4.24 4.24 0 0 1 2.766 4.468 3.98 3.98 0 0 1-.89 2.791 3.98 3.98 0 0 1-2.558 1.427 42.4 42.4 0 0 0-15.276 6.212c-14.214 6.996-28.334 14.183-42.534 21.208a80 80 0 0 1-8.227 3.279 7.586 7.586 0 0 1-9.36-2.588c-1.102-1.408-2.008-1.274-3.428-.739-7.114 2.687-14.223 5.403-21.433 7.813a16 16 0 0 1-6.347.295 6.63 6.63 0 0 1-5.95-4.736 6.92 6.92 0 0 1 1.8-7.423 26.5 26.5 0 0 0 3.84-4.215 45 45 0 0 1-5.11 1.916 32.2 32.2 0 0 1-8.064 1.462 6.91 6.91 0 0 1-6.343-3.623 6.92 6.92 0 0 1 .443-7.292l.702-1.4c-1.082 0-1.897-.067-2.698.011a8.76 8.76 0 0 1-5.157-.337 8.77 8.77 0 0 1-4.073-3.182 2.52 2.52 0 0 0-2.415-.306c-4.661 2.829-9.108 6.027-13.858 8.687a74 74 0 0 1-12.347 5.603 7.66 7.66 0 0 1-8.931-3.332 6.08 6.08 0 0 0-3.183-2.013 7.5 7.5 0 0 1-5.848-4.671 7.51 7.51 0 0 1 1.093-7.403 135 135 0 0 1 11.16-11.573 5259 5259 0 0 1 21.512-21.416 3.98 3.98 0 0 0 1.243-2.265 33 33 0 0 1-3.428 1.524 34 34 0 0 1-7.17 1.976 7 7 0 0 1-6.26-2.163 7 7 0 0 1-1.654-6.412c.276-1.731-.32-2.363-1.72-3.033a7.71 7.71 0 0 1-5.068-7.329 7.7 7.7 0 0 1 .677-3.07 16.2 16.2 0 0 1 6.339-8.097c2.637-1.95 5.2-4 7.748-5.968a9.275 9.275 0 0 1 1.836-13.73c5.742-5.872 10.892-12.362 16.935-17.89 8.31-7.602 17.134-14.653 25.886-21.757a231.4 231.4 0 0 1 43.27-28.378 47 47 0 0 1 4.905-2.17 4.03 4.03 0 0 1 4.988 1.539 3.868 3.868 0 0 1-.455 4.954 12.5 12.5 0 0 1-2.612 2.282q-11.5 8.616-23.02 17.202c-.667.5-1.255 1.102-1.88 1.66z"
                            ></path>
                        </svg>
                    </div>
                    <div>
                        <h1 className="text-sm font-bold text-gray-800 font-title">
                            Trackwise
                        </h1>
                        <p className="text-xs text-gray-500 font-medium">
                            Project Management
                        </p>
                    </div>
                </div>

                {/* section divider */}
                <hr className="text-gray-200 mx-2" />

                {/* other section */}
                <div className="flex flex-col h-full justify-between">
                    {/* top */}
                    <div className="pt-6 text-gray-500 font-medium space-y-2 md:px-2 text-xs">
                        <Link
                            href={"/dashboard"}
                            className={`flex ${
                                pathname === "/dashboard" ? "text-primary" : ""
                            } hover:px-8 duration-200 px-6 py-2 items-center gap-2`}
                        >
                            <Element3
                                variant="Outline"
                                size={16}
                            />
                            Dashboard
                        </Link>

                        <Link
                            href={"/teams"}
                            className={`flex ${
                                pathname === "/teams" ? "text-primary" : ""
                            } hover:px-8 duration-200 px-6 py-2 items-center gap-2`}
                        >
                            <Profile2User size={16} />
                            Teams
                        </Link>

                        <Link
                            href={"/my-tasks"}
                            className={`flex ${pathname === "/my-tasks"}"
                                    ? "text-primary"
                                    : ""
                            } hover:px-8 duration-200 px-6 py-2 items-center gap-2`}
                        >
                            <TickSquare size={16} />
                            My Tasks
                        </Link>

                        <Link
                            href={"/messages"}
                            className={`flex ${
                                pathname === "/messages" ? "text-primary" : ""
                            } hover:px-8 duration-200 px-6 py-2 items-center gap-2`}
                        >
                            <Messages1 size={16} />
                            Messages
                        </Link>

                        <Link
                            href={"/notes"}
                            className={`flex ${
                                pathname === "/notes" ? "text-primary" : ""
                            } hover:px-8 duration-200 px-6 py-2 items-center gap-2`}
                        >
                            <Stickynote size={16} />
                            Notes
                        </Link>

                        {/* <button
                            disabled
                            className={`flex ${
                                pathname === "/timeoff"
                                    ? "text-primary"
                                    : ""
                            } hover:px-8 disabled:opacity-60 duration-200 px-6 py-2 items-center gap-2`}
                        >
                            <Timer1 size={16} />
                            Time Off
                        </button> */}

                        <hr className="text-gray-200 mx-2 my-4" />

                        <div className="flex items-center justify-between text-gray-400 text-xs font-medium md:px-2 w-full">
                            <p className="flex items-center gap-2">
                                <Folder2 size={16} />
                                <span>Projects</span>
                            </p>
                            <Link
                                href="/add-project"
                                className="flex items-center gap-2"
                            >
                                <AddSquare size={16} />
                            </Link>
                        </div>
                        <ul className="flex flex-col gap-3 text-gray-500 px-6 py-2">
                            <li>
                                <Link
                                    href={"/website-redesign"}
                                    className="flex items-center gap-2 hover:px-2 duration-200 cursor-pointer"
                                >
                                    <span className="w-1.5 h-1.5 bg-red-400 rounded-full shrink-0" />
                                    Website Redesign
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div className="w-full">
                        <div className="text-gray-500 text-xs font-medium md:px-2 w-full space-y-2">
                            <Link
                                href={"/settings"}
                                className={`flex ${
                                    pathname === "/settings"
                                        ? "text-primary"
                                        : ""
                                } hover:px-8 duration-200 px-6 py-2 items-center gap-2 w-full`}
                            >
                                <Setting2 size={16} />
                                Settings
                            </Link>

                            <Link
                                href={"/support"}
                                className={`flex ${
                                    pathname === "/support"
                                        ? "text-primary"
                                        : ""
                                } hover:px-8 duration-200 px-6 py-2 items-center gap-2 w-full`}
                            >
                                <Headphone size={16} />
                                Support
                            </Link>
                            <Link
                                href={"/signin"}
                                className={`flex ${
                                    pathname === "/signin" ? "text-primary" : ""
                                } hover:px-8 duration-200 px-6 py-2 items-center gap-2 w-full`}
                            >
                                <LogoutCurve size={16} />
                                Logout
                            </Link>
                        </div>

                        <hr className="text-gray-200 mx-2 my-4" />

                        {/* bottom */}
                        <Link
                            href={"/profile"}
                            className="flex pb-28 justify-between px-4 md:px-6 items-center cursor-pointer hover:pr-5 duration-200"
                        >
                            <div className="flex items-center gap-2">
                                <Image
                                    src={"/default-avatar.webp"}
                                    alt="User"
                                    width={36}
                                    height={36}
                                    className="rounded-full"
                                />
                                <div>
                                    <p className="text-sm font-semibold text-gray-800 w-4/5 truncate">
                                        Raj Mangukiya
                                    </p>
                                    <p className="text-xs font-medium text-gray-500 w-4/5 truncate">
                                        rajmangukiya00@gmail.com
                                    </p>
                                </div>
                            </div>

                            <div className="text-gray-500">
                                <ArrowRight2 size={16} />
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Sidebar;
