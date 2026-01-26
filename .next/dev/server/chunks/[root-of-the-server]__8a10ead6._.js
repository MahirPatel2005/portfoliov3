module.exports = [
"[externals]/next/dist/compiled/next-server/app-route-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-route-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/@opentelemetry/api [external] (next/dist/compiled/@opentelemetry/api, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/@opentelemetry/api", () => require("next/dist/compiled/@opentelemetry/api"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/after-task-async-storage.external.js [external] (next/dist/server/app-render/after-task-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/after-task-async-storage.external.js", () => require("next/dist/server/app-render/after-task-async-storage.external.js"));

module.exports = mod;
}),
"[project]/config/siteConfig.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ALL_PAGES",
    ()=>ALL_PAGES,
    "DOMAIN_URL",
    ()=>DOMAIN_URL,
    "SITE_CONFIG",
    ()=>SITE_CONFIG,
    "SITE_NAP",
    ()=>SITE_NAP,
    "SITE_SLUGS",
    ()=>SITE_SLUGS,
    "externalLinks",
    ()=>externalLinks
]);
const DOMAIN_URL = "https://mahir-patel.tech";
const SITE_CONFIG = {
    title: "Mahir Patel - Full-Stack Developer Portfolio | MERN Stack",
    description: "Portfolio of Mahir Patel, a full-stack developer specializing in the MERN stack (MongoDB, Express, React, Node.js), Next.js, and scaling web applications.",
    url: DOMAIN_URL ?? "https://mahir-patel.tech",
    siteName: "Mahir Patel",
    keywords: [
        "Mahir Patel",
        "Full-Stack Developer",
        "MERN Stack",
        "Next.js",
        "React",
        "Node.js",
        "MongoDB",
        "JavaScript",
        "India",
        "Freelance Developer",
        "Software Engineer",
        "Web Development",
        "UI/UX Design",
        "Frontend Developer",
        "Backend Developer",
        "React Developer India",
        "Next.js Expert",
        "Scalable Web Apps",
        "C++",
        "System Design"
    ],
    ogImage: "/assets/bg-home-poster-optimized.webp",
    logo: "/serbyte-logo.png",
    authors: [
        {
            name: "Mahir Patel",
            url: DOMAIN_URL
        }
    ],
    creator: "Mahir Patel",
    publisher: "Mahir Patel"
};
const SITE_NAP = {
    name: "Mahir Patel",
    googleBusinessType: "LocalBusiness",
    contact: "Mahir Patel",
    contactTitle: "Full-Stack Developer",
    email: "mahir.patel.cg@gmail.com",
    phone: "9558787386",
    formattedPhone: "",
    addressLink: "",
    street: "",
    city: "",
    state: "India",
    zipCode: "",
    openingHours: [
        {
            days: "Mon - Sat",
            hours: "9am - 6pm"
        }
    ],
    googleReviewLink: "",
    profiles: {
        linkedIn: "https://linkedin.com/in/mahir-r-patel",
        yelp: "",
        pinterest: "",
        gbp: "",
        github: "https://github.com/mahirpatel2005",
        leetcode: "https://leetcode.com/u/Mahir_R_Patell/"
    },
    logo: "/serbyte-logo.png",
    favicon: "/favicon.ico",
    images: [
        "/assets/bg-home-poster-optimized.webp"
    ]
};
const SITE_SLUGS = {
    home: "/",
    projects: "/projects",
    contact: "/#contact",
    about: "/#about",
    projectLinks: {
        automedics: "/projects/automedics",
        bespoke: "/projects/bespoke",
        iao: "/projects/iron-and-oak",
        hrms: "/projects/hrms",
        codingProfiles: "/coding-profiles"
    }
};
const externalLinks = {
    vetsChoice: "https://vetschoiceinsurance.com/",
    zeroIconSprite: "https://github.com/react-zero-ui/icon-sprite",
    zeroCore: "https://github.com/react-zero-ui/core",
    entitled: "https://be-entitled.com/"
};
const flattenSlugs = (obj)=>{
    return Object.values(obj).flatMap((value)=>typeof value === "string" ? [
            value
        ] : flattenSlugs(value));
};
const ALL_PAGES = Object.values(SITE_SLUGS).flatMap((value)=>typeof value === "string" ? [
        value
    ] : flattenSlugs(value));
}),
"[project]/app/manifest.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>manifest,
    "dynamic",
    ()=>dynamic
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$config$2f$siteConfig$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/config/siteConfig.ts [app-route] (ecmascript)");
;
const dynamic = "force-static";
function manifest() {
    return {
        name: __TURBOPACK__imported__module__$5b$project$5d2f$config$2f$siteConfig$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["SITE_CONFIG"].title,
        short_name: __TURBOPACK__imported__module__$5b$project$5d2f$config$2f$siteConfig$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["SITE_CONFIG"].siteName,
        description: __TURBOPACK__imported__module__$5b$project$5d2f$config$2f$siteConfig$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["SITE_CONFIG"].description,
        start_url: "/",
        display: "standalone",
        background_color: "#fff",
        theme_color: "#fff",
        icons: [
            {
                src: "/favicon.ico",
                sizes: "any",
                type: "image/x-icon"
            }
        ]
    };
}
}),
"[project]/app/manifest--route-entry.js [app-route] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "GET",
    ()=>GET
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/server.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$manifest$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/manifest.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$metadata$2f$resolve$2d$route$2d$data$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/metadata/resolve-route-data.js [app-route] (ecmascript)");
;
;
;
const contentType = "application/manifest+json";
const cacheControl = "public, max-age=0, must-revalidate";
const fileType = "manifest";
if (typeof __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$manifest$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"] !== 'function') {
    throw new Error('Default export is missing in "./manifest.ts"');
}
async function GET() {
    const data = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$manifest$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"])();
    const content = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$metadata$2f$resolve$2d$route$2d$data$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["resolveRouteData"])(data, fileType);
    return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"](content, {
        headers: {
            'Content-Type': contentType,
            'Cache-Control': cacheControl
        }
    });
}
;
}),
"[project]/app/manifest--route-entry.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "GET",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$manifest$2d2d$route$2d$entry$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["GET"],
    "dynamic",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$manifest$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["dynamic"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$manifest$2d2d$route$2d$entry$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/app/manifest--route-entry.js [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$manifest$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/manifest.ts [app-route] (ecmascript)");
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__8a10ead6._.js.map