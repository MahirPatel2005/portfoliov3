"use client"
import { SITE_NAP } from "@/config/siteConfig"
import { Link } from "@/app/utils/Link"
import { useEffect, useState } from "react"
import { MotionDiv } from "@/app/utils/lazy-ui"
import { ActivityCalendar, type Activity } from "react-activity-calendar"
import { format, subYears } from "date-fns"

interface LeetCodeData {
    totalSolved: number
    totalQuestions: number
    easySolved: number
    totalEasy: number
    mediumSolved: number
    totalMedium: number
    hardSolved: number
    totalHard: number
    ranking: number
    submissionCalendar: Record<string, number>
}

interface LeetCodeContestData {
    contestAttend: number
    contestRating: number
    contestGlobalRanking: number
    contestTopPercentage: number
    totalParticipants: number
}

// Better Donut using Conic Gradient for simplicity and robustness
const CSSDonut = ({ easy, medium, hard, total }: { easy: number, medium: number, hard: number, total: number }) => {
    // Colors
    const cEasy = "#00b8a3"
    const cMed = "#ffc01e"
    const cHard = "#ef4743"

    // Avoid division by zero
    const safeTotal = total || 1;

    return (
        <div className="relative flex h-36 w-36 items-center justify-center">
            {/* We will use a conic gradient for the breakdown of solved problems */}
            <div
                className="absolute inset-0 rounded-full"
                style={{
                    background: `conic-gradient(
                        ${cEasy} 0% ${(easy / safeTotal) * 100}%,
                        ${cMed} ${(easy / safeTotal) * 100}% ${((easy + medium) / safeTotal) * 100}%,
                        ${cHard} ${((easy + medium) / safeTotal) * 100}% 100%
                    )`,
                    mask: "radial-gradient(transparent 60%, black 61%)",
                    WebkitMask: "radial-gradient(transparent 60%, black 61%)" // Donut hole
                }}
            />
            <div className="z-10 flex flex-col items-center">
                <span className="text-3xl font-extrabold text-gray-900">{total}</span>
                <span className="text-xs font-medium text-gray-500">Solved</span>
            </div>
        </div>
    )
}

export const LeetCodeStats = () => {
    const [stats, setStats] = useState<LeetCodeData | null>(null)
    const [contestStats, setContestStats] = useState<LeetCodeContestData | null>(null)
    const username = SITE_NAP.profiles.leetcode.split("/").pop() || "Mahir_R_Patell"

    useEffect(() => {
        const fetchData = async () => {
            try {
                // Fetch Solved Stats
                const userRes = await fetch(`https://leetcode-stats-api.herokuapp.com/${username}`)
                const userData = await userRes.json()
                if (userData.status === "success") {
                    setStats(userData)
                }

                // Fetch Contest Stats
                const contestRes = await fetch(`https://alfa-leetcode-api.onrender.com/${username}/contest`)
                const contestData = await contestRes.json()
                if (contestData) {
                    setContestStats(contestData)
                }
            } catch (err) {
                console.error("Failed to fetch LeetCode stats", err)
            }
        }
        fetchData()
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

    // Process submission calendar
    const calendarData: Activity[] = []
    if (stats.submissionCalendar) {
        const today = new Date()
        const start = subYears(today, 1)

        Object.entries(stats.submissionCalendar).forEach(([ts, count]) => {
            const date = new Date(parseInt(ts) * 1000)
            if (date >= start) {
                calendarData.push({
                    date: format(date, "yyyy-MM-dd"),
                    count: count,
                    level: Math.min(4, Math.ceil(count / 2)) as 0 | 1 | 2 | 3 | 4
                })
            }
        })
    }

    return (
        <MotionDiv
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="group relative overflow-hidden rounded-3xl border border-gray-100 bg-white p-8 shadow-xl transition-all hover:shadow-2xl"
        >
            <div className="relative z-10 flex flex-col gap-8">
                {/* Header */}
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                        <div className="relative">
                            <div className="absolute inset-0 rounded-full bg-yellow-400 opacity-20 blur-md"></div>
                            {/* LeetCode Icon SVG */}
                            <div className="relative flex h-12 w-12 items-center justify-center rounded-full bg-[#FFA116]/10">
                                <svg viewBox="0 0 24 24" fill="none" className="h-8 w-8" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M16.102 17.93l-2.697 2.607c-.466.467-1.111.732-1.772.732a2.461 2.461 0 01-1.784-.732L2.487 13.175a2.461 2.461 0 010-3.504l7.362-7.362c.484-.484 1.13-.755 1.784-.755.655 0 1.3.271 1.784.755l2.697 2.607c.254.254.385.592.368.95a1.36 1.36 0 01-.89 1.258 1.36 1.36 0 01-1.397-.502l-1.92-1.854a.73.73 0 00-1.015 0L5.593 11.41a.73.73 0 000 1.015l5.084 5.084a.73.73 0 001.015 0l1.92-1.854c.328-.317.828-.41 1.25-.231a1.36 1.36 0 01.817 1.238c.038.384-.094.77-.377 1.026z" fill="#B3B1B0" />
                                    <path d="M21.513 13.175l-4.751 4.751a.73.73 0 01-1.015 0l-1.92-1.855a1.36 1.36 0 00-1.25-.23 1.36 1.36 0 00-.817 1.237c-.038.385.094.77.377 1.027l2.697 2.607c.466.467 1.111.732 1.772.732.655 0 1.3-.271 1.784-.732l2.623-2.623a2.461 2.461 0 000-3.504c-.387-.387-1.015-.387-1.402 0z" fill="#FFA116" />
                                    <path d="M21.513 10.825a2.461 2.461 0 000-3.504l-2.623-2.623a2.461 2.461 0 00-1.784-.732 2.461 2.461 0 00-1.772.732l-2.697 2.607a1.36 1.36 0 00-.377 1.026 1.36 1.36 0 00.817 1.238 1.36 1.36 0 001.25-.23l1.92-1.855a.73.73 0 011.015 0l4.751 4.751c.387.387 1.015.387 1.402 0z" fill="#FFA116" />
                                </svg>
                            </div>
                        </div>
                        <div>
                            <h3 className="text-2xl font-bold text-gray-900">LeetCode</h3>
                            <p className="text-sm font-medium text-gray-500">Global Ranking: {stats.ranking.toLocaleString()}</p>
                        </div>
                    </div>
                    <Link
                        href={SITE_NAP.profiles.leetcode}
                        target="_blank"
                        className="hidden rounded-full border border-gray-200 bg-white px-5 py-2 text-sm font-medium text-gray-700 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md sm:block"
                    >
                        View Profile
                    </Link>
                </div>

                {/* Main Stats Area: Solved + Breakdown */}
                <div className="flex flex-col gap-8 lg:flex-row">
                    {/* Left Col: Donut Chart */}
                    <div className="flex flex-col items-center justify-center gap-4 rounded-3xl bg-gray-50 p-6 lg:w-1/3">
                        <CSSDonut easy={stats.easySolved} medium={stats.mediumSolved} hard={stats.hardSolved} total={stats.totalSolved} />
                        <div className="text-sm text-gray-500">{stats.totalSolved} / {stats.totalQuestions} Solved</div>
                    </div>

                    {/* Right Col: Breakdown & Contest */}
                    <div className="flex flex-1 flex-col gap-4">
                        {/* Solved Breakdown */}
                        <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
                            <div className="group/stat flex flex-col items-center justify-center rounded-xl bg-gray-50 p-3 transition-colors hover:bg-teal-50">
                                <span className="mb-1 text-xs font-semibold uppercase tracking-wider text-gray-400 group-hover/stat:text-teal-600">Easy</span>
                                <span className="text-xl font-bold text-gray-900 group-hover/stat:text-teal-700">{stats.easySolved}</span>
                            </div>
                            <div className="group/stat flex flex-col items-center justify-center rounded-xl bg-gray-50 p-3 transition-colors hover:bg-yellow-50">
                                <span className="mb-1 text-xs font-semibold uppercase tracking-wider text-gray-400 group-hover/stat:text-yellow-600">Medium</span>
                                <span className="text-xl font-bold text-gray-900 group-hover/stat:text-yellow-700">{stats.mediumSolved}</span>
                            </div>
                            <div className="group/stat flex flex-col items-center justify-center rounded-xl bg-gray-50 p-3 transition-colors hover:bg-red-50">
                                <span className="mb-1 text-xs font-semibold uppercase tracking-wider text-gray-400 group-hover/stat:text-red-600">Hard</span>
                                <span className="text-xl font-bold text-gray-900 group-hover/stat:text-red-700">{stats.hardSolved}</span>
                            </div>
                        </div>

                        {/* Contest Stats */}
                        {contestStats && contestStats.contestRating > 0 && (
                            <div className="relative mt-2 overflow-hidden rounded-xl bg-gradient-to-br from-orange-50 to-amber-50 p-4 border border-orange-100">
                                <div className="relative z-10 flex items-center justify-between">
                                    <div className="flex flex-col">
                                        <span className="text-xs font-bold uppercase tracking-wider text-orange-400">Contest Rating</span>
                                        <div className="flex items-baseline gap-2">
                                            <span className="text-2xl font-black text-gray-900">{Math.round(contestStats.contestRating)}</span>
                                            {contestStats.contestTopPercentage && (
                                                <span className="text-xs font-medium text-orange-600 bg-orange-100 px-2 py-0.5 rounded-full">
                                                    Top {contestStats.contestTopPercentage}%
                                                </span>
                                            )}
                                        </div>
                                    </div>
                                    <div className="text-right">
                                        <div className="text-xs text-gray-500">Global Rank</div>
                                        <div className="font-bold text-gray-900">#{contestStats.contestGlobalRanking.toLocaleString()}</div>
                                        <div className="text-[10px] text-gray-400">Attended: {contestStats.contestAttend}</div>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>

                {/* Submission Heatmap */}
                <div className="mt-2">
                    <p className="mb-4 text-sm font-semibold text-gray-900">Submission History</p>
                    <div className="overflow-x-auto pb-2 scrollbar-hide">
                        <div className="min-w-[600px]">
                            <ActivityCalendar
                                data={calendarData}
                                theme={{
                                    light: ['#ebedf0', '#fbbf24', '#f59e0b', '#d97706', '#b45309'],
                                    dark: ['#1f2937', '#fbbf24', '#f59e0b', '#d97706', '#b45309'], // Not using dark mode really but good to have
                                }}
                                blockSize={12}
                                blockMargin={4}
                                fontSize={12}
                            />
                        </div>
                    </div>
                </div>
            </div>

        </MotionDiv>
    )
}
