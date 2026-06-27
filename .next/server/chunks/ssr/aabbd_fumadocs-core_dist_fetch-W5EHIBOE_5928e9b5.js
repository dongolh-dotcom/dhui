module.exports = {

"[project]/node_modules/.pnpm/fumadocs-core@15.3.4_@types+react@19.1.4_next@15.3.8_@babel+core@7.27.1_react-dom@19.1._5427b2b719a958ccdc415c85cc484664/node_modules/fumadocs-core/dist/fetch-W5EHIBOE.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "fetchDocs": (()=>fetchDocs)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$fumadocs$2d$core$40$15$2e$3$2e$4_$40$types$2b$react$40$19$2e$1$2e$4_next$40$15$2e$3$2e$8_$40$babel$2b$core$40$7$2e$27$2e$1_react$2d$dom$40$19$2e$1$2e$_5427b2b719a958ccdc415c85cc484664$2f$node_modules$2f$fumadocs$2d$core$2f$dist$2f$chunk$2d$MLKGABMK$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/fumadocs-core@15.3.4_@types+react@19.1.4_next@15.3.8_@babel+core@7.27.1_react-dom@19.1._5427b2b719a958ccdc415c85cc484664/node_modules/fumadocs-core/dist/chunk-MLKGABMK.js [app-ssr] (ecmascript)");
;
// src/search/client/fetch.ts
var cache = /* @__PURE__ */ new Map();
async function fetchDocs(query, locale, tag, options) {
    const params = new URLSearchParams();
    params.set("query", query);
    if (locale) params.set("locale", locale);
    if (tag) params.set("tag", tag);
    const key = `${options.api ?? "/api/search"}?${params}`;
    const cached = cache.get(key);
    if (cached) return cached;
    const res = await fetch(key);
    if (!res.ok) throw new Error(await res.text());
    const result = await res.json();
    cache.set(key, result);
    return result;
}
;
}}),

};

//# sourceMappingURL=aabbd_fumadocs-core_dist_fetch-W5EHIBOE_5928e9b5.js.map