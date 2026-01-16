module.exports = [
"[project]/app/components/ProjectCard/Card.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Card",
    ()=>Card
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-ssr] (ecmascript)");
"use client";
;
;
const Card = ({ src, alt, liveUrl, githubUrl, title, detailUrl })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "h-full w-full overflow-hidden rounded-2xl group relative bg-gray-100",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "h-full w-full duration-400 group-hover:scale-105 transition-transform",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                    className: "h-full w-full object-cover",
                    src: src,
                    alt: alt,
                    priority: true,
                    decoding: "async"
                }, void 0, false, {
                    fileName: "[project]/app/components/ProjectCard/Card.tsx",
                    lineNumber: 28,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "absolute inset-0 flex items-end justify-between p-6 opacity-0 transition-all duration-300 group-hover:opacity-100 bg-gradient-to-t from-black/80 via-black/40 to-transparent",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex-1 pr-4",
                            children: title && detailUrl ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: detailUrl,
                                className: "text-xl font-bold text-white hover:text-gray-200 transition-colors inline-block transform translate-y-2 group-hover:translate-y-0 duration-300 delay-75",
                                onClick: (e)=>e.stopPropagation(),
                                children: [
                                    title,
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "block text-xs font-normal text-gray-300 mt-1 opacity-80",
                                        children: "View Details →"
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/ProjectCard/Card.tsx",
                                        lineNumber: 42,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/components/ProjectCard/Card.tsx",
                                lineNumber: 36,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-xl font-bold text-white shadow-sm inline-block transform translate-y-2 group-hover:translate-y-0 duration-300 delay-75",
                                children: title
                            }, void 0, false, {
                                fileName: "[project]/app/components/ProjectCard/Card.tsx",
                                lineNumber: 45,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/app/components/ProjectCard/Card.tsx",
                            lineNumber: 34,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-3 transform translate-y-2 group-hover:translate-y-0 duration-300 delay-100",
                            children: [
                                githubUrl && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: githubUrl,
                                    target: "_blank",
                                    rel: "noopener noreferrer",
                                    className: "flex items-center gap-2 rounded-full border border-white/20 bg-black/60 px-4 py-2 text-xs font-medium text-white shadow-lg backdrop-blur-md transition-transform duration-200 hover:scale-105 hover:bg-black/80",
                                    onClick: (e)=>e.stopPropagation(),
                                    title: "View on GitHub",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                        className: "h-4 w-4 fill-white",
                                        viewBox: "0 0 24 24",
                                        xmlns: "http://www.w3.org/2000/svg",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            d: "M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/ProjectCard/Card.tsx",
                                            lineNumber: 61,
                                            columnNumber: 108
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/ProjectCard/Card.tsx",
                                        lineNumber: 61,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/app/components/ProjectCard/Card.tsx",
                                    lineNumber: 53,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)),
                                liveUrl && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: liveUrl,
                                    target: "_blank",
                                    rel: "noopener noreferrer",
                                    className: "flex items-center gap-2 rounded-full border border-green-500/30 bg-green-600/90 px-4 py-2 text-xs font-medium text-white shadow-lg backdrop-blur-md transition-transform duration-200 hover:scale-105 hover:bg-green-600",
                                    onClick: (e)=>e.stopPropagation(),
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "relative flex h-2 w-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "absolute inline-flex h-full w-full animate-ping rounded-full bg-white opacity-75"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/components/ProjectCard/Card.tsx",
                                                    lineNumber: 75,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "relative inline-flex h-2 w-2 rounded-full bg-white"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/components/ProjectCard/Card.tsx",
                                                    lineNumber: 76,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/components/ProjectCard/Card.tsx",
                                            lineNumber: 74,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        "Live Preview"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/components/ProjectCard/Card.tsx",
                                    lineNumber: 67,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/components/ProjectCard/Card.tsx",
                            lineNumber: 50,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/components/ProjectCard/Card.tsx",
                    lineNumber: 31,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/app/components/ProjectCard/Card.tsx",
            lineNumber: 27,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/app/components/ProjectCard/Card.tsx",
        lineNumber: 26,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
}),
"[project]/app/hooks/useIsoMorphicEffect.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/* eslint-disable react-hooks/rules-of-hooks */ __turbopack_context__.s([
    "useIsoMorphicEffect",
    ()=>useIsoMorphicEffect
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$utils$2f$env$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/utils/env.ts [app-ssr] (ecmascript)");
;
;
const useIsoMorphicEffect = (effect, deps)=>{
    if (__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$utils$2f$env$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isServer"]) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(effect, deps);
    } else {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useLayoutEffect"])(effect, deps);
    }
};
}),
"[project]/app/hooks/useCompositorSpring.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useCompositorSpring",
    ()=>useCompositorSpring
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$hooks$2f$useIsoMorphicEffect$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/hooks/useIsoMorphicEffect.tsx [app-ssr] (ecmascript)");
;
function useCompositorSpring(ref, progress) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$hooks$2f$useIsoMorphicEffect$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useIsoMorphicEffect"])(()=>{
        const el = ref.current;
        if (!el) return;
        el.style.opacity = "1";
        /* Create a paused compositor animation ------------------- */ const anim = el.animate([
            {
                transform: `translate3d(var(--tx, 0), var(--ty, 0), 0) scale(var(--sc, 1)) rotate(var(--rot, 0))`
            },
            {
                transform: "translate3d(0, 0, 0) scale(1) rotate(0)"
            }
        ], {
            duration: 1000,
            fill: "both",
            easing: "ease-out"
        });
        anim.pause(); // we'll scrub it manually
        const total = anim.effect.getComputedTiming().endTime // 1000 ms
        ;
        /* Spring drives only .currentTime ------------------------ */ const unsubscribe = progress.on("change", (p)=>anim.currentTime = p * Number(total));
        return ()=>unsubscribe();
    }, [
        progress
    ]);
}
}),
"[project]/app/components/ProjectCard/AnimatedCard.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AnimatedCard",
    ()=>AnimatedCard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ProjectCard$2f$Card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/ProjectCard/Card.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/clsx/dist/clsx.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$hooks$2f$useCompositorSpring$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/hooks/useCompositorSpring.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$config$2f$siteConfig$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/config/siteConfig.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
function AnimatedCard({ src, alt, offset, color, type, gridId, progress, href, githubUrl, title }) {
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$hooks$2f$useCompositorSpring$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCompositorSpring"])(ref, progress);
    // Determine the primary link for the card click (Live Preview if available, otherwise fallback)
    const primaryLink = href ?? `${__TURBOPACK__imported__module__$5b$project$5d2f$config$2f$siteConfig$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SITE_SLUGS"].projects}/${gridId}`;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative h-full w-full",
        "data-grid-id": gridId,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            ref: ref,
            style: {
                "--tx": `${offset.x}px`,
                "--ty": `${offset.y}px`,
                "--rot": `${offset.rot}deg`,
                "--sc": `${offset.s}`
            },
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])("group relative h-full w-full transform-gpu opacity-1 will-change-[transform,opacity] contain-content backface-hidden"),
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ProjectCard$2f$Card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Card"], {
                src: src,
                alt: alt,
                liveUrl: primaryLink,
                githubUrl: githubUrl,
                title: title,
                detailUrl: `${__TURBOPACK__imported__module__$5b$project$5d2f$config$2f$siteConfig$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SITE_SLUGS"].projects}/${gridId}`
            }, void 0, false, {
                fileName: "[project]/app/components/ProjectCard/AnimatedCard.tsx",
                lineNumber: 65,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/app/components/ProjectCard/AnimatedCard.tsx",
            lineNumber: 45,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/components/ProjectCard/AnimatedCard.tsx",
        lineNumber: 41,
        columnNumber: 5
    }, this);
}
}),
"[project]/app/images/iao-preview-v2.webp (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/iao-preview-v2.f4d651ba.webp");}),
"[project]/app/images/iao-preview-v2.webp.mjs { IMAGE => \"[project]/app/images/iao-preview-v2.webp (static in ecmascript, tag client)\" } [app-ssr] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$images$2f$iao$2d$preview$2d$v2$2e$webp__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/app/images/iao-preview-v2.webp (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$images$2f$iao$2d$preview$2d$v2$2e$webp__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 1080,
    height: 690,
    blurWidth: 8,
    blurHeight: 5,
    blurDataURL: "data:image/webp;base64,UklGRuwAAABXRUJQVlA4TOAAAAAvBwABAM1VICICHghACgMAAAD5QLHAAoAEYAAAAAAAAAAAAAAAAAAAAAAAAAAEAIDJDzxtCqLzGgAAgAcCYMIAAABw/uJZdR+HEyiggwAQAAAAAAAAAAAAAAAAAAAAAADgACAg/0URjAgKDwTAhAEAAOD8pa1xxAIIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAIC4UZPZFpk4nwKvhxDkTpgbBGvFqKEcZNXfiP9/ne9251bUGxBYKUfw3pY0QSnbfOagUZUVW2CrhAjtcKDS+Sb4XsX/xLH3l1f+3trbRw=="
};
}),
"[project]/app/images/bespoke-preview-v2.webp (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/bespoke-preview-v2.1a17932a.webp");}),
"[project]/app/images/bespoke-preview-v2.webp.mjs { IMAGE => \"[project]/app/images/bespoke-preview-v2.webp (static in ecmascript, tag client)\" } [app-ssr] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$images$2f$bespoke$2d$preview$2d$v2$2e$webp__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/app/images/bespoke-preview-v2.webp (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$images$2f$bespoke$2d$preview$2d$v2$2e$webp__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 1080,
    height: 705,
    blurWidth: 8,
    blurHeight: 5,
    blurDataURL: "data:image/webp;base64,UklGRtQAAABXRUJQVlA4TMgAAAAvBwABAM1VICICHgiACQMAAADYaXJTLscfHOAThBMQ4AAHAAAAAAA4AAAAAAAAADgAIAUAQAAlAA4AAOCBEINAAAAAnP/tFwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIFvHghGCgAAAMD5bymEAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIiwX2ko+VNZJNXBn4s9EzJ90buUpsSgJMHBNa2fHf4e5yEbWg8k/f4HNNbU4Q5TAqwx+v7JXQiAQ=="
};
}),
"[project]/app/images/react-zero-ui-preview.jpg (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/react-zero-ui-preview.d5a48eb9.jpg");}),
"[project]/app/images/react-zero-ui-preview.jpg.mjs { IMAGE => \"[project]/app/images/react-zero-ui-preview.jpg (static in ecmascript, tag client)\" } [app-ssr] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$images$2f$react$2d$zero$2d$ui$2d$preview$2e$jpg__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/app/images/react-zero-ui-preview.jpg (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$images$2f$react$2d$zero$2d$ui$2d$preview$2e$jpg__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 1000,
    height: 605,
    blurWidth: 8,
    blurHeight: 5,
    blurDataURL: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAgAAAQABAAD/wAARCAAFAAgDAREAAhEBAxEB/9sAQwAKBwcIBwYKCAgICwoKCw4YEA4NDQ4dFRYRGCMfJSQiHyIhJis3LyYpNCkhIjBBMTQ5Oz4+PiUuRElDPEg3PT47/9sAQwEKCwsODQ4cEBAcOygiKDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwDiLfVQ3i9pEtwsLvt8reTjt1/Wr5tSGtD/2Q=="
};
}),
"[project]/app/utils/debounce.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "debounce",
    ()=>debounce
]);
const debounce = (fn, delay)=>{
    let timeout = null;
    return (...args)=>{
        if (timeout) clearTimeout(timeout);
        timeout = setTimeout(()=>fn(...args), delay);
    };
};
;
}),
"[project]/app/hooks/useOffset.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useOffset",
    ()=>useOffset
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$utils$2f$debounce$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/utils/debounce.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$hooks$2f$useIsoMorphicEffect$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/hooks/useIsoMorphicEffect.tsx [app-ssr] (ecmascript)");
;
;
;
const initialOffsets = {
    apihub: {
        x: 459.296875,
        y: -748
    },
    numble: {
        x: 118.796875,
        y: -980.328125
    },
    "slippy-clone": {
        x: 118.796875,
        y: -748
    }
};
function useOffset(cardIds) {
    const offsetsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(initialOffsets);
    const [, force] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useReducer"])((x)=>x + 1, 0) // cheap re-render trigger
    ;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$hooks$2f$useIsoMorphicEffect$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useIsoMorphicEffect"])(()=>{
        const calc = ()=>{
            const next = {};
            for (const id of cardIds){
                const grid = document.querySelector(`[data-grid-id="${id}"]`);
                const hero = document.querySelector("[data-stack-target-id]");
                if (!grid || !hero) continue;
                const g = grid.getBoundingClientRect();
                const h = hero.getBoundingClientRect();
                next[id] = {
                    x: h.left - g.left,
                    y: h.top - g.top
                };
            }
            offsetsRef.current = next;
            force(); // tell React styles changed
        };
        const debouncedCalc = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$utils$2f$debounce$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["debounce"])(calc, 50);
        const ro = new ResizeObserver(debouncedCalc) // auto-recompute on resize
        ;
        ro.observe(document.documentElement);
        calc();
        return ()=>ro.disconnect();
    }, [
        cardIds
    ]);
    return offsetsRef.current;
}
}),
"[project]/app/components/ProjectsGrid.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ProjectsGrid",
    ()=>ProjectsGrid
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ProjectCard$2f$AnimatedCard$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/ProjectCard/AnimatedCard.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$images$2f$iao$2d$preview$2d$v2$2e$webp$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$app$2f$images$2f$iao$2d$preview$2d$v2$2e$webp__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/app/images/iao-preview-v2.webp.mjs { IMAGE => "[project]/app/images/iao-preview-v2.webp (static in ecmascript, tag client)" } [app-ssr] (structured image object with data url, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$images$2f$bespoke$2d$preview$2d$v2$2e$webp$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$app$2f$images$2f$bespoke$2d$preview$2d$v2$2e$webp__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/app/images/bespoke-preview-v2.webp.mjs { IMAGE => "[project]/app/images/bespoke-preview-v2.webp (static in ecmascript, tag client)" } [app-ssr] (structured image object with data url, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$images$2f$react$2d$zero$2d$ui$2d$preview$2e$jpg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$app$2f$images$2f$react$2d$zero$2d$ui$2d$preview$2e$jpg__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/app/images/react-zero-ui-preview.jpg.mjs { IMAGE => "[project]/app/images/react-zero-ui-preview.jpg (static in ecmascript, tag client)" } [app-ssr] (structured image object with data url, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/clsx/dist/clsx.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$hooks$2f$useOffset$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/hooks/useOffset.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$hooks$2f$useMediaQuery$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/hooks/useMediaQuery.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$scroll$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/value/use-scroll.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$spring$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/value/use-spring.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$zero$2d$ui$2f$core$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@react-zero-ui/core/dist/index.js [app-ssr] (ecmascript) <locals>");
"use client";
;
;
;
;
;
;
;
;
;
;
;
const ids = [
    "apihub",
    "numble",
    "slippy-clone"
];
function ProjectsGrid({ className }) {
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const rawOffsets = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$hooks$2f$useOffset$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useOffset"])(ids);
    const isMobile = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$hooks$2f$useMediaQuery$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useIsMobile"])();
    const isSmallScreen = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$hooks$2f$useMediaQuery$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useIsMobile"])(576);
    const responsiveScale = isMobile ? 0.34 : 0.8;
    const [, setReveal] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$zero$2d$ui$2f$core$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useUI"])("reveal", "false");
    const { scrollYProgress } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$scroll$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useScroll"])({
        offset: isMobile ? [
            "start start",
            "10% start"
        ] : [
            "start start",
            "15% start"
        ]
    });
    const stiffness = isMobile ? 120 : 220;
    const damping = isMobile ? 50 : 90;
    const progress = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$spring$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSpring"])(scrollYProgress, {
        stiffness,
        damping
    });
    const OFFSET_TUNING = {
        apihub: {
            rot: 9,
            s: responsiveScale,
            dx: isMobile ? -220 : -30,
            dy: isMobile ? -120 : -40
        },
        numble: {
            rot: -5,
            s: responsiveScale,
            dx: isMobile ? -230 : -60,
            dy: isMobile ? -130 : -40
        },
        "slippy-clone": {
            rot: 5,
            s: responsiveScale,
            dx: isMobile ? -225 : -45,
            dy: isMobile ? -130 : -25
        }
    };
    const offsets = Object.fromEntries(ids.map((id)=>{
        const base = rawOffsets[id];
        const t = OFFSET_TUNING[id];
        return [
            id,
            {
                x: base.x + t.dx,
                y: base.y + t.dy,
                rot: t.rot,
                s: t.s ?? 1
            }
        ];
    }));
    const triggerProgress = isMobile ? isSmallScreen ? 0.15 : 0.2 : 0.5;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const unsubscribe = progress.on("change", (latest)=>{
            if (latest >= triggerProgress) {
                setReveal("true"); // Reveal ON
            } else {
                setReveal("false"); // Reveal OFF
            }
        });
        return unsubscribe;
    }, [
        progress,
        setReveal,
        triggerProgress
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "projects-grid",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])("relative scroll-mt-36", className),
        ref: ref,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "relative z-4 grid grid-cols-1 grid-rows-1 gap-4 md:grid-cols-2 md:grid-rows-2",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ProjectCard$2f$AnimatedCard$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AnimatedCard"], {
                    src: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$images$2f$react$2d$zero$2d$ui$2d$preview$2e$jpg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$app$2f$images$2f$react$2d$zero$2d$ui$2d$preview$2e$jpg__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"],
                    alt: "APIHub Preview",
                    offset: offsets["apihub"],
                    gridId: "apihub",
                    color: "#3B06D1",
                    type: "API Discovery Platform",
                    progress: progress,
                    href: "https://github.com/mahirpatel2005",
                    githubUrl: "https://github.com/mahirpatel2005",
                    title: "APIHub"
                }, "apihub", false, {
                    fileName: "[project]/app/components/ProjectsGrid.tsx",
                    lineNumber: 69,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ProjectCard$2f$AnimatedCard$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AnimatedCard"], {
                    src: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$images$2f$bespoke$2d$preview$2d$v2$2e$webp$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$app$2f$images$2f$bespoke$2d$preview$2d$v2$2e$webp__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"],
                    alt: "Numble Preview",
                    offset: offsets["numble"],
                    gridId: "numble",
                    color: "#024EFC",
                    type: "Web Game (Number Guessing)",
                    progress: progress,
                    href: "https://github.com/mahirpatel2005",
                    githubUrl: "https://github.com/mahirpatel2005",
                    title: "Numble"
                }, "numble", false, {
                    fileName: "[project]/app/components/ProjectsGrid.tsx",
                    lineNumber: 82,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ProjectCard$2f$AnimatedCard$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AnimatedCard"], {
                    src: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$images$2f$iao$2d$preview$2d$v2$2e$webp$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$app$2f$images$2f$iao$2d$preview$2d$v2$2e$webp__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"],
                    alt: "Slippy Clone Preview",
                    offset: offsets["slippy-clone"],
                    gridId: "slippy-clone",
                    color: "#13739C",
                    type: "UI Clone / Frontend",
                    progress: progress,
                    href: "https://github.com/mahirpatel2005",
                    githubUrl: "https://github.com/mahirpatel2005",
                    title: "Slippy Clone"
                }, "slippy-clone", false, {
                    fileName: "[project]/app/components/ProjectsGrid.tsx",
                    lineNumber: 96,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/components/ProjectsGrid.tsx",
            lineNumber: 68,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/components/ProjectsGrid.tsx",
        lineNumber: 67,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=app_982439f2._.js.map