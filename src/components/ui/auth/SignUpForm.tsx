"use client";
import Checkbox from "@/components/ui/form/input/Checkbox";
import Input from "@/components/ui/form/input/InputField";
import Label from "@/components/ui/form/Label";
import { Eye, EyeSlash } from "iconsax-reactjs";
import Link from "next/link";
import { useState } from "react";
import { PrimaryButton } from "../button/Button";
import { useRouter } from "next/navigation";

export default function SignUpForm() {
    const router = useRouter();
    const [showPassword, setShowPassword] = useState(false);
    const [isChecked, setIsChecked] = useState(false);

    const handleSumbit = (e: React.FormEvent) => {
        e.preventDefault();
        router.push("/dashboard");
    };

    return (
        <div className="flex flex-col flex-1 lg:w-1/2 w-full overflow-y-auto no-scrollbar">
            <div className="flex flex-col justify-center flex-1 w-full max-w-md mx-auto">
                <div>
                    <div className="mb-5 sm:mb-8">
                        <h1 className="mb-2 font-semibold text-gray-800 text-title-sm dark:text-white/90 text-4xl font-title">
                            Sign Up
                        </h1>
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                            Enter your email and password to sign up!
                        </p>
                    </div>
                    <div>
                        <form onSubmit={handleSumbit}>
                            <div className="space-y-5">
                                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                                    {/* <!-- First Name --> */}
                                    <div className="sm:col-span-1">
                                        <Label>
                                            First Name
                                            <span className="text-error-500">
                                                *
                                            </span>
                                        </Label>
                                        <Input
                                            required
                                            type="text"
                                            id="fname"
                                            name="fname"
                                            placeholder="Enter your first name"
                                        />
                                    </div>
                                    {/* <!-- Last Name --> */}
                                    <div className="sm:col-span-1">
                                        <Label>
                                            Last Name
                                            <span className="text-error-500">
                                                *
                                            </span>
                                        </Label>
                                        <Input
                                            required
                                            type="text"
                                            id="lname"
                                            name="lname"
                                            placeholder="Enter your last name"
                                        />
                                    </div>
                                </div>
                                {/* <!-- Email --> */}
                                <div>
                                    <Label>
                                        Email
                                        <span className="text-error-500">
                                            *
                                        </span>
                                    </Label>
                                    <Input
                                        required
                                        type="email"
                                        id="email"
                                        name="email"
                                        placeholder="Enter your email"
                                    />
                                </div>
                                {/* <!-- Password --> */}
                                <div>
                                    <Label>
                                        Password
                                        <span className="text-error-500">
                                            *
                                        </span>
                                    </Label>
                                    <div className="relative">
                                        <Input
                                            required
                                            placeholder="Enter your password"
                                            type={
                                                showPassword
                                                    ? "text"
                                                    : "password"
                                            }
                                        />
                                        <span
                                            onClick={() =>
                                                setShowPassword(!showPassword)
                                            }
                                            className="absolute z-30 -translate-y-1/2 cursor-pointer right-4 top-1/2"
                                        >
                                            {showPassword ? (
                                                <Eye
                                                    size={18}
                                                    className="text-gray-500 dark:text-gray-400"
                                                />
                                            ) : (
                                                <EyeSlash
                                                    size={18}
                                                    className="text-gray-500 dark:text-gray-400"
                                                />
                                            )}
                                        </span>
                                    </div>
                                </div>
                                {/* <!-- Checkbox --> */}
                                <div className="flex items-center gap-3">
                                    <Checkbox
                                        className="w-5 h-5"
                                        checked={isChecked}
                                        onChange={setIsChecked}
                                    />
                                    <p className="inline-block text-xs font-normal text-gray-500 dark:text-gray-400">
                                        By creating an account means you agree
                                        to the{" "}
                                        <span className="text-gray-800 dark:text-white/90">
                                            Terms and Conditions,
                                        </span>{" "}
                                        and our{" "}
                                        <span className="text-gray-800 dark:text-white">
                                            Privacy Policy
                                        </span>
                                    </p>
                                </div>
                                {/* <!-- Button --> */}
                                <div>
                                    <PrimaryButton
                                        type="submit"
                                        className="w-full"
                                    >
                                        Sign Up
                                    </PrimaryButton>
                                </div>
                            </div>
                        </form>

                        <div className="mt-5">
                            <p className="text-sm font-normal text-center text-gray-700 dark:text-gray-400 sm:text-start">
                                Already have an account?&nbsp;
                                <Link
                                    href="/signin"
                                    className="text-primary hover:text-accent dark:text-brand-400 underline"
                                >
                                    Sign In
                                </Link>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
