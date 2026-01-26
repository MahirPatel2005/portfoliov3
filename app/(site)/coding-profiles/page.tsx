import { Metadata } from "next"
import { GitHubStats } from "@/app/components/CodingProfile/GitHubStats"
import { LeetCodeStats } from "@/app/components/CodingProfile/LeetCodeStats"
import { AnimatedH1 } from "@/app/components/ui/AnimatedH1"

export const metadata: Metadata = {
    title: "Coding Profiles | Mahir Patel",
    description: "Check out my coding stats on GitHub and LeetCode.",
}

export default function CodingProfilesPage() {
    return (
        <div className="pt-24 pb-16">
            <div className="inside-container">
                <div className="mb-12">
                    <AnimatedH1 className="mb-4">
                        Coding <span className="text-gray-500">Profiles</span>
                    </AnimatedH1>
                    <p className="max-w-2xl text-lg text-gray-500">
                        A real-time look at my open source contributions and problem-solving journey.
                    </p>
                </div>

                <div className="flex flex-col gap-8">
                    <GitHubStats />
                    <LeetCodeStats />
                </div>
            </div>
        </div>
    )
}
