(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/app/components/CodingProfile/LeetCodeStats.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "LeetCodeStats",
    ()=>LeetCodeStats
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$config$2f$siteConfig$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/config/siteConfig.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$utils$2f$Link$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/utils/Link.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$activity$2d$calendar$2f$build$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/react-activity-calendar/build/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$activity$2d$calendar$2f$build$2f$chunks$2f$index$2d$w4bahFWW$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__A__as__ActivityCalendar$3e$__ = __turbopack_context__.i("[project]/node_modules/react-activity-calendar/build/chunks/index-w4bahFWW.js [app-client] (ecmascript) <export A as ActivityCalendar>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$format$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/date-fns/format.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$subYears$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/date-fns/subYears.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
// Custom Donut Chart Component
const SolvedDonut = ({ easy, medium, hard, total, totalQuestions })=>{
    const radius = 40;
    const circumference = 2 * Math.PI * radius;
    // Calculate stroke format: [dashArray, dashOffset]
    // But for a simple stacked view, we usually just do segments. 
    // Here we will do a simple background + single progress or stacked? 
    // The user image shows a segmented arc. Let's try 3 arcs.
    // Easier approach: Conic gradient for the ring
    const totalS = easy + medium + hard;
    const easyDeg = easy / totalQuestions * 360;
    const mediumDeg = medium / totalQuestions * 360;
    const hardDeg = hard / totalQuestions * 360;
    // Actually the user image shows 'total solved' vs 'total questions' overall? 
    // Or maybe just the 3 categories making up the circle?
    // The image shows: 178/3821 Solved. And a yellow/teal ring.
    // Let's create a custom SVG with 3 paths for Easy/Medium/Hard.
    // Normalize logic for visibility
    const safeTotal = totalQuestions || 1;
    const easyDash = easy / safeTotal * circumference;
    const mediumDash = medium / safeTotal * circumference;
    const hardDash = hard / safeTotal * circumference;
    const gap = 2 // Gap between segments if we want, or 0.
    ;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative flex h-32 w-32 items-center justify-center",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                className: "h-full w-full -rotate-90 transform",
                viewBox: "0 0 100 100",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                        cx: "50",
                        cy: "50",
                        r: radius,
                        fill: "none",
                        stroke: "#f3f4f6",
                        strokeWidth: "8"
                    }, void 0, false, {
                        fileName: "[project]/app/components/CodingProfile/LeetCodeStats.tsx",
                        lineNumber: 56,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                        cx: "50",
                        cy: "50",
                        r: radius,
                        fill: "none",
                        stroke: "#10b981",
                        strokeWidth: "8",
                        strokeDasharray: `${easyDash} ${circumference}`,
                        strokeLinecap: "round",
                        className: "opacity-80"
                    }, void 0, false, {
                        fileName: "[project]/app/components/CodingProfile/LeetCodeStats.tsx",
                        lineNumber: 59,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/app/components/CodingProfile/LeetCodeStats.tsx",
                lineNumber: 54,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 flex flex-col items-center justify-center text-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-2xl font-bold text-gray-900",
                        children: total
                    }, void 0, false, {
                        fileName: "[project]/app/components/CodingProfile/LeetCodeStats.tsx",
                        lineNumber: 76,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-[10px] text-gray-400",
                        children: "Solved"
                    }, void 0, false, {
                        fileName: "[project]/app/components/CodingProfile/LeetCodeStats.tsx",
                        lineNumber: 77,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/app/components/CodingProfile/LeetCodeStats.tsx",
                lineNumber: 75,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/app/components/CodingProfile/LeetCodeStats.tsx",
        lineNumber: 53,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
_c = SolvedDonut;
// Better Donut using Conic Gradient for simplicity and robustness
const CSSDonut = ({ easy, medium, hard, total })=>{
    // Colors
    const cEasy = "#00b8a3";
    const cMed = "#ffc01e";
    const cHard = "#ef4743";
    const cTrack = "#eee";
    // Ratios assuming the circle represents Total Solved distributions (or Total Questions? usually Total Solved distribution in these charts)
    // Wait, LeetCode profile usually shows "Solved X / Total Y". 
    // The arc usually fills up based on Total Solved / Total Questions.
    // And the colors inside that arc represent the mix. 
    // That's complex. Let's simplify: A ring showing total progress, and separate breakdown.
    // Or just recreate the visual from the image roughly.
    // Image: "178/3821 Solved", large yellow arc. 
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative flex h-36 w-36 items-center justify-center",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 rounded-full",
                style: {
                    background: `conic-gradient(
                        ${cEasy} 0% ${easy / total * 100}%,
                        ${cMed} ${easy / total * 100}% ${(easy + medium) / total * 100}%,
                        ${cHard} ${(easy + medium) / total * 100}% 100%
                    )`,
                    mask: "radial-gradient(transparent 60%, black 61%)",
                    WebkitMask: "radial-gradient(transparent 60%, black 61%)" // Donut hole
                }
            }, void 0, false, {
                fileName: "[project]/app/components/CodingProfile/LeetCodeStats.tsx",
                lineNumber: 102,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "z-10 flex flex-col items-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-3xl font-extra-bold text-gray-900",
                        children: total
                    }, void 0, false, {
                        fileName: "[project]/app/components/CodingProfile/LeetCodeStats.tsx",
                        lineNumber: 115,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-xs font-medium text-gray-500",
                        children: "Solved"
                    }, void 0, false, {
                        fileName: "[project]/app/components/CodingProfile/LeetCodeStats.tsx",
                        lineNumber: 116,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/app/components/CodingProfile/LeetCodeStats.tsx",
                lineNumber: 114,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/app/components/CodingProfile/LeetCodeStats.tsx",
        lineNumber: 100,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
_c1 = CSSDonut;
const LeetCodeStats = ()=>{
    _s();
    const [stats, setStats] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const username = __TURBOPACK__imported__module__$5b$project$5d2f$config$2f$siteConfig$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SITE_NAP"].profiles.leetcode.split("/").pop() || "Mahir_R_Patell";
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "LeetCodeStats.useEffect": ()=>{
            // Use the proxy from config or direct
            fetch(`https://leetcode-stats-api.herokuapp.com/${username}`).then({
                "LeetCodeStats.useEffect": (res)=>res.json()
            }["LeetCodeStats.useEffect"]).then({
                "LeetCodeStats.useEffect": (data)=>{
                    if (data.status === "success") {
                        setStats(data);
                    }
                }
            }["LeetCodeStats.useEffect"]).catch({
                "LeetCodeStats.useEffect": (err)=>console.error(err)
            }["LeetCodeStats.useEffect"]);
        }
    }["LeetCodeStats.useEffect"], [
        username
    ]);
    if (!stats) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "h-full rounded-3xl border border-gray-200 bg-white p-8 shadow-xl",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex animate-pulse flex-col gap-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "h-12 w-12 rounded-full bg-gray-200"
                    }, void 0, false, {
                        fileName: "[project]/app/components/CodingProfile/LeetCodeStats.tsx",
                        lineNumber: 143,
                        columnNumber: 21
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "h-4 w-32 bg-gray-200"
                    }, void 0, false, {
                        fileName: "[project]/app/components/CodingProfile/LeetCodeStats.tsx",
                        lineNumber: 144,
                        columnNumber: 21
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "h-32 w-full rounded-xl bg-gray-200"
                    }, void 0, false, {
                        fileName: "[project]/app/components/CodingProfile/LeetCodeStats.tsx",
                        lineNumber: 145,
                        columnNumber: 21
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/app/components/CodingProfile/LeetCodeStats.tsx",
                lineNumber: 142,
                columnNumber: 17
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/app/components/CodingProfile/LeetCodeStats.tsx",
            lineNumber: 141,
            columnNumber: 13
        }, ("TURBOPACK compile-time value", void 0));
    }
    // Process submission calendar
    // API returns unix timestamp as key (string) -> count
    const calendarData = [];
    if (stats.submissionCalendar) {
        const today = new Date();
        const start = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$subYears$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["subYears"])(today, 1);
        Object.entries(stats.submissionCalendar).forEach(([ts, count])=>{
            const date = new Date(parseInt(ts) * 1000);
            if (date >= start) {
                calendarData.push({
                    date: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$format$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["format"])(date, "yyyy-MM-dd"),
                    count: count,
                    level: Math.min(4, Math.ceil(count / 2))
                });
            }
        });
    }
    // Fill gaps not needed for react-activity-calendar usually, it handles sparse data? 
    // Start/End date props.
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(motion.div, {
        initial: {
            opacity: 0,
            y: 20
        },
        animate: {
            opacity: 1,
            y: 0
        },
        transition: {
            duration: 0.5,
            delay: 0.1
        },
        className: "group relative overflow-hidden rounded-3xl border border-gray-100 bg-white p-8 shadow-xl transition-all hover:shadow-2xl",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative z-10 flex flex-col gap-8",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-between",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "relative",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "absolute inset-0 rounded-full bg-yellow-400 opacity-20 blur-md"
                                            }, void 0, false, {
                                                fileName: "[project]/app/components/CodingProfile/LeetCodeStats.tsx",
                                                lineNumber: 185,
                                                columnNumber: 29
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "relative flex h-12 w-12 items-center justify-center rounded-full bg-yellow-50 text-yellow-600",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                    viewBox: "0 0 24 24",
                                                    fill: "currentColor",
                                                    className: "h-8 w-8",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                            d: "M13.483 0a1.374 1.374 0 0 0-.961.438L7.173 5.423a1.398 1.398 0 0 0-.372 1.941 1.405 1.405 0 0 0 1.966.368l5.349-4.985a1.374 1.374 0 0 0 .445-.973 1.38 1.38 0 0 0-1.078-1.774Z"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/components/CodingProfile/LeetCodeStats.tsx",
                                                            lineNumber: 189,
                                                            columnNumber: 37
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                            d: "M2.485 22.003a1.385 1.385 0 0 1-1.121-1.823l4.02-14.86a1.365 1.365 0 0 1 1.708-.942l.006.002a1.366 1.366 0 0 1 .949 1.696l-4.02 14.86a1.387 1.387 0 0 1-1.542.998v.069Z"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/components/CodingProfile/LeetCodeStats.tsx",
                                                            lineNumber: 190,
                                                            columnNumber: 37
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                            d: "M21.527 22.067H6.938a1.387 1.387 0 0 1-1.384-1.392 1.39 1.39 0 0 1 1.384-1.39h14.589a1.39 1.39 0 0 1 1.384 1.39 1.39 1.39 0 0 1-1.384 1.392Z"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/components/CodingProfile/LeetCodeStats.tsx",
                                                            lineNumber: 191,
                                                            columnNumber: 37
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/components/CodingProfile/LeetCodeStats.tsx",
                                                    lineNumber: 188,
                                                    columnNumber: 33
                                                }, ("TURBOPACK compile-time value", void 0))
                                            }, void 0, false, {
                                                fileName: "[project]/app/components/CodingProfile/LeetCodeStats.tsx",
                                                lineNumber: 187,
                                                columnNumber: 29
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/components/CodingProfile/LeetCodeStats.tsx",
                                        lineNumber: 184,
                                        columnNumber: 25
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "text-2xl font-bold text-gray-900",
                                                children: "LeetCode"
                                            }, void 0, false, {
                                                fileName: "[project]/app/components/CodingProfile/LeetCodeStats.tsx",
                                                lineNumber: 196,
                                                columnNumber: 29
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-sm font-medium text-gray-500",
                                                children: [
                                                    "Global Ranking: ",
                                                    stats.ranking.toLocaleString()
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/components/CodingProfile/LeetCodeStats.tsx",
                                                lineNumber: 197,
                                                columnNumber: 29
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/components/CodingProfile/LeetCodeStats.tsx",
                                        lineNumber: 195,
                                        columnNumber: 25
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/components/CodingProfile/LeetCodeStats.tsx",
                                lineNumber: 183,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$utils$2f$Link$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Link"], {
                                href: __TURBOPACK__imported__module__$5b$project$5d2f$config$2f$siteConfig$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SITE_NAP"].profiles.leetcode,
                                target: "_blank",
                                className: "hidden rounded-full border border-gray-200 bg-white px-5 py-2 text-sm font-medium text-gray-700 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md sm:block",
                                children: "View Profile"
                            }, void 0, false, {
                                fileName: "[project]/app/components/CodingProfile/LeetCodeStats.tsx",
                                lineNumber: 200,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/components/CodingProfile/LeetCodeStats.tsx",
                        lineNumber: 182,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col gap-8 md:flex-row",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-col items-center justify-center gap-4 rounded-3xl bg-gray-50 p-6 md:w-1/3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CSSDonut, {
                                        easy: stats.easySolved,
                                        medium: stats.mediumSolved,
                                        hard: stats.hardSolved,
                                        total: stats.totalSolved
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/CodingProfile/LeetCodeStats.tsx",
                                        lineNumber: 212,
                                        columnNumber: 25
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-sm text-gray-500",
                                        children: [
                                            stats.totalSolved,
                                            " / ",
                                            stats.totalQuestions,
                                            " Solved"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/components/CodingProfile/LeetCodeStats.tsx",
                                        lineNumber: 213,
                                        columnNumber: 25
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/components/CodingProfile/LeetCodeStats.tsx",
                                lineNumber: 211,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-1 flex-col justify-center gap-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "group/stat flex items-center justify-between rounded-xl bg-gray-50 p-3 px-4 transition-colors hover:bg-teal-50",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "font-medium text-gray-600 group-hover/stat:text-teal-700",
                                                children: "Easy"
                                            }, void 0, false, {
                                                fileName: "[project]/app/components/CodingProfile/LeetCodeStats.tsx",
                                                lineNumber: 219,
                                                columnNumber: 29
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "font-bold text-gray-900 group-hover/stat:text-teal-700",
                                                children: [
                                                    stats.easySolved,
                                                    " ",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-xs font-normal text-gray-400",
                                                        children: [
                                                            "/ ",
                                                            stats.totalEasy
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/components/CodingProfile/LeetCodeStats.tsx",
                                                        lineNumber: 220,
                                                        columnNumber: 121
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/components/CodingProfile/LeetCodeStats.tsx",
                                                lineNumber: 220,
                                                columnNumber: 29
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/components/CodingProfile/LeetCodeStats.tsx",
                                        lineNumber: 218,
                                        columnNumber: 25
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "group/stat flex items-center justify-between rounded-xl bg-gray-50 p-3 px-4 transition-colors hover:bg-yellow-50",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "font-medium text-gray-600 group-hover/stat:text-yellow-700",
                                                children: "Medium"
                                            }, void 0, false, {
                                                fileName: "[project]/app/components/CodingProfile/LeetCodeStats.tsx",
                                                lineNumber: 223,
                                                columnNumber: 29
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "font-bold text-gray-900 group-hover/stat:text-yellow-700",
                                                children: [
                                                    stats.mediumSolved,
                                                    " ",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-xs font-normal text-gray-400",
                                                        children: [
                                                            "/ ",
                                                            stats.totalMedium
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/components/CodingProfile/LeetCodeStats.tsx",
                                                        lineNumber: 224,
                                                        columnNumber: 125
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/components/CodingProfile/LeetCodeStats.tsx",
                                                lineNumber: 224,
                                                columnNumber: 29
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/components/CodingProfile/LeetCodeStats.tsx",
                                        lineNumber: 222,
                                        columnNumber: 25
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "group/stat flex items-center justify-between rounded-xl bg-gray-50 p-3 px-4 transition-colors hover:bg-red-50",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "font-medium text-gray-600 group-hover/stat:text-red-700",
                                                children: "Hard"
                                            }, void 0, false, {
                                                fileName: "[project]/app/components/CodingProfile/LeetCodeStats.tsx",
                                                lineNumber: 227,
                                                columnNumber: 29
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "font-bold text-gray-900 group-hover/stat:text-red-700",
                                                children: [
                                                    stats.hardSolved,
                                                    " ",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-xs font-normal text-gray-400",
                                                        children: [
                                                            "/ ",
                                                            stats.totalHard
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/components/CodingProfile/LeetCodeStats.tsx",
                                                        lineNumber: 228,
                                                        columnNumber: 120
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/components/CodingProfile/LeetCodeStats.tsx",
                                                lineNumber: 228,
                                                columnNumber: 29
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/components/CodingProfile/LeetCodeStats.tsx",
                                        lineNumber: 226,
                                        columnNumber: 25
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/components/CodingProfile/LeetCodeStats.tsx",
                                lineNumber: 217,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/components/CodingProfile/LeetCodeStats.tsx",
                        lineNumber: 209,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mb-4 text-sm font-semibold text-gray-900",
                                children: "Submission History"
                            }, void 0, false, {
                                fileName: "[project]/app/components/CodingProfile/LeetCodeStats.tsx",
                                lineNumber: 235,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "overflow-x-auto pb-2 scrollbar-hide",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "min-w-[600px]",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$activity$2d$calendar$2f$build$2f$chunks$2f$index$2d$w4bahFWW$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__A__as__ActivityCalendar$3e$__["ActivityCalendar"], {
                                        data: calendarData,
                                        theme: {
                                            light: [
                                                '#ebedf0',
                                                '#fbbf24',
                                                '#f59e0b',
                                                '#d97706',
                                                '#b45309'
                                            ],
                                            dark: [
                                                '#1f2937',
                                                '#fbbf24',
                                                '#f59e0b',
                                                '#d97706',
                                                '#b45309'
                                            ]
                                        },
                                        hideColorLegend: true,
                                        hideMonthLabels: false,
                                        hideTotalCount: true,
                                        blockSize: 12,
                                        blockMargin: 4,
                                        fontSize: 12
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/CodingProfile/LeetCodeStats.tsx",
                                        lineNumber: 238,
                                        columnNumber: 29
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/app/components/CodingProfile/LeetCodeStats.tsx",
                                    lineNumber: 237,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/app/components/CodingProfile/LeetCodeStats.tsx",
                                lineNumber: 236,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/components/CodingProfile/LeetCodeStats.tsx",
                        lineNumber: 234,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/app/components/CodingProfile/LeetCodeStats.tsx",
                lineNumber: 180,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute -right-20 -top-20 h-64 w-64 rounded-full bg-gradient-to-br from-yellow-100 to-transparent opacity-50 blur-3xl pointer-events-none"
            }, void 0, false, {
                fileName: "[project]/app/components/CodingProfile/LeetCodeStats.tsx",
                lineNumber: 256,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/app/components/CodingProfile/LeetCodeStats.tsx",
        lineNumber: 174,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
_s(LeetCodeStats, "QHCAg5+sC7SrLiGx+x4h2IICBFk=");
_c2 = LeetCodeStats;
var _c, _c1, _c2;
__turbopack_context__.k.register(_c, "SolvedDonut");
__turbopack_context__.k.register(_c1, "CSSDonut");
__turbopack_context__.k.register(_c2, "LeetCodeStats");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=app_components_CodingProfile_LeetCodeStats_tsx_11d9f964._.js.map