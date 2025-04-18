"use client";
import Input from "@/components/ui/form/input/InputField";
import Label from "@/components/ui/form/Label";
import Link from "next/link";
import { PrimaryButton } from "../button/Button";
import { useRouter } from "next/navigation";

export default function ResetPasswordForm() {

    const router = useRouter();

    const handleSumbit = (e: React.FormEvent) => {
        e.preventDefault();
        router.push("/signin");
    };

    return (
        <div className="flex flex-col flex-1 lg:w-1/2 w-full overflow-y-auto no-scrollbar">
            <div className="flex flex-col justify-center flex-1 w-full max-w-md mx-auto">
                <div>
                    <div className="mb-5 sm:mb-8">
                        <h1 className="mb-2 font-semibold text-gray-800 text-title-sm dark:text-white/90 text-4xl font-title">
                            Reset Password
                        </h1>
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                            Enter your registered email to reset password!
                        </p>
                    </div>
                    <div>
                        <form onSubmit={handleSumbit}>
                            <div className="space-y-5">
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
                                {/* <!-- Button --> */}
                                <div>
                                    <PrimaryButton type="submit" className="w-full">
                                        Reset
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
