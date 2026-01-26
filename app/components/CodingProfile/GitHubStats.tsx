"use client"

import { SITE_NAP } from "@/config/siteConfig"
import { Icon } from "@/app/components/Icon"
import { Link } from "@/app/utils/Link"
import { GitHubCalendar } from "react-github-calendar"
import { useEffect, useState } from "react"
import { MotionDiv } from "@/app/utils/lazy-ui"

interface GitHubUser {
    login: string
    public_repos: number
    followers: number
    following: number
    public_gists: number
    avatar_url: string
}

export const GitHubStats = () => {
    const [stats, setStats] = useState<GitHubUser | null>(null)
    const username = SITE_NAP.profiles.github.split("/").pop() || "mahirpatel2005"

    useEffect(() => {
        fetch(`https://api.github.com/users/${username}`)
            .then(res => res.json())
            .then(data => setStats(data))
            .catch(() => setStats(null))
    }, [username])


    if (!stats) {
        return (
            <div className="h-full rounded-3xl border border-gray-200 bg-white p-8 shadow-xl">
                <div className="flex animate-pulse flex-col gap-4">
                    <div className="h-12 w-12 rounded-full bg-gray-200"></div>
                    <div className="h-4 w-32 bg-gray-200"></div>
                    <div className="h-32 w-full rounded-xl bg-gray-200"></div>
                </div>
            </div>
        )
    }

    return (
        <MotionDiv
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="group relative h-full overflow-hidden rounded-3xl border border-gray-100 bg-white p-8 shadow-xl transition-all hover:shadow-2xl"
        >
            <div className="relative z-10 flex flex-col gap-8">
                {/* Header */}
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                        <div className="relative">
                            <div className="absolute inset-0 rounded-full bg-black opacity-10 blur-md"></div>
                            <Icon name="github" className="relative h-12 w-12 text-gray-900" />
                        </div>
                        <div>
                            <h3 className="text-2xl font-bold text-gray-900">GitHub</h3>
                            <Link href={SITE_NAP.profiles.github} target="_blank" className="text-sm font-medium text-gray-500 hover:text-gray-900">
                                @{stats.login}
                            </Link>
                        </div>
                    </div>
                    <Link
                        href={SITE_NAP.profiles.github}
                        target="_blank"
                        className="hidden rounded-full border border-gray-200 bg-white px-5 py-2 text-sm font-medium text-gray-700 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md sm:block"
                    >
                        View Profile
                    </Link>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
                    {[
                        { label: "Repositories", value: stats.public_repos },
                        { label: "Followers", value: stats.followers },
                        { label: "Following", value: stats.following },
                        { label: "Gists", value: stats.public_gists },
                    ].map((stat, i) => (
                        <div key={i} className="rounded-2xl border border-gray-100 bg-gray-50/50 p-4 transition-colors hover:bg-gray-50">
                            <p className="text-sm font-medium text-gray-500">{stat.label}</p>
                            <p className="mt-1 text-2xl font-bold tracking-tight text-gray-900">{stat.value}</p>
                        </div>
                    ))}
                </div>

                {/* Calendar */}
                <div className="mt-2 text-sm">
                    <p className="mb-4 text-base font-semibold text-gray-900">Contributions</p>
                    <div className="overflow-x-auto pb-2 scrollbar-hide">
                        <div className="min-w-[600px]">
                            <GitHubCalendar
                                username={username}
                                colorScheme="light"
                                fontSize={12}
                                blockSize={12}
                                blockMargin={4}
                                style={{ color: "#333" }}
                                theme={{
                                    light: ["#ebedf0", "#9be9a8", "#40c463", "#30a14e", "#216e39"],
                                    dark: ["#161b22", "#0e4429", "#006d32", "#26a641", "#39d353"],
                                }}
                            />
                        </div>
                    </div>
                </div>
            </div>


        </MotionDiv>
    )
}
