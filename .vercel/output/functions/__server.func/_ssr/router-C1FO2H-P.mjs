import { i as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { _ as useRouter, f as createRouter, g as createRootRoute, h as createFileRoute, l as Scripts, m as lazyRouteComponent, p as Outlet, u as HeadContent, v as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as TriangleAlert, s as ExternalLink, t as X } from "../_libs/lucide-react.mjs";
import { a as union, i as string, n as number, r as object, t as literal } from "../_libs/zod.mjs";
import { t as create } from "../_libs/zustand.mjs";
import { t as Slot } from "../_libs/radix-ui__react-slot.mjs";
import { n as clsx, t as cva } from "../_libs/class-variance-authority+clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/router-C1FO2H-P.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var __defProp = Object.defineProperty;
var __exportAll = (all, no_symbols) => {
	let target = {};
	for (var name in all) __defProp(target, name, {
		get: all[name],
		enumerable: true
	});
	if (!no_symbols) __defProp(target, Symbol.toStringTag, { value: "Module" });
	return target;
};
function AppErrorComponent({ error }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "flex min-h-screen flex-col items-center justify-center gap-3 px-6 text-center bg-zinc-50 text-zinc-900 dark:bg-zinc-950 dark:text-zinc-50",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-red-500",
				"aria-hidden": "true",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TriangleAlert, {
					className: "size-10",
					strokeWidth: 2
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "text-lg font-semibold",
				children: "Something went wrong"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "max-w-md text-sm break-words text-zinc-500 dark:text-zinc-400",
				children: error.message || "An unexpected error occurred. Try reloading the page."
			})
		]
	});
}
/**
* App-wide client provider mounted once near the root (in `src/routes/__root.tsx`):
*
*   <AuthProvider><Outlet /></AuthProvider>
*
* Better Auth's React client (`@/lib/auth/client`) needs NO context provider —
* its `useSession()` works standalone — so this is a passthrough today. It's
* kept as the single, stable mount point for any future client-side providers
* (e.g. a toast or theme provider) without churning the root shell.
*/
function AuthProvider({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children });
}
function isGrokEmbedderOrigin(origin) {
	try {
		const url = new URL(origin);
		if (url.protocol !== "https:" && url.protocol !== "http:") return false;
		const host = url.hostname.toLowerCase();
		if (host === "grok.com" || host.endsWith(".grok.com")) return true;
		if (host === "localhost" || host === "127.0.0.1" || host === "[::1]") return true;
		return false;
	} catch {
		return false;
	}
}
function isSandboxPreviewGuestHost(hostname) {
	const host = hostname.toLowerCase();
	return host === "grok-sandbox.com" || host.endsWith(".grok-sandbox.com");
}
function isRemintPreviewPair(guestHost, parentHost) {
	const guest = guestHost.toLowerCase();
	const parent = parentHost.toLowerCase();
	const i = guest.indexOf(".preview.");
	if (i <= 0) return false;
	const label = guest.slice(0, i);
	const rest = guest.slice(i + 9);
	if (label.includes(".") || !rest.includes(".")) return false;
	return parent === rest || parent === `grok.${rest}`;
}
function resolveParentEmbedderOrigin(parentIsSelf, referrer, ancestorOrigin, guestHostname = "") {
	if (parentIsSelf) return null;
	for (const candidate of [referrer, ancestorOrigin ?? ""].filter(Boolean)) try {
		const url = new URL(candidate.includes("://") ? candidate : `https://${candidate}`);
		if (url.protocol !== "https:" && url.protocol !== "http:") continue;
		if (isGrokEmbedderOrigin(url.origin)) return url.origin;
		if (isSandboxPreviewGuestHost(guestHostname) || isRemintPreviewPair(guestHostname, url.hostname)) return url.origin;
	} catch {}
	return null;
}
/**
* Guest side of the grok-web ↔ sandbox preview postMessage bridge.
*
* Activates only when this page is framed by an allowlisted Grok embedder.
* Top-level runs (download/export, local `npm run dev`, deployed sites) noop.
*/
var PREVIEW_BRIDGE_CHANNEL = "grok-preview-bridge";
var EnvelopeSchema = object({
	channel: literal(PREVIEW_BRIDGE_CHANNEL),
	version: number().int().positive(),
	type: string().min(1)
});
var HelloSchema = EnvelopeSchema.extend({ type: literal("hello") });
var NavigateSchema = EnvelopeSchema.extend({
	type: literal("navigate"),
	path: string().min(1)
});
var HistorySchema = EnvelopeSchema.extend({
	type: literal("history"),
	delta: union([literal(-1), literal(1)])
});
function isSafeBridgePath(path) {
	if (!path.startsWith("/") || path.startsWith("//") || path.includes("\\")) return false;
	try {
		return new URL(path, "https://preview.invalid").origin === "https://preview.invalid";
	} catch {
		return false;
	}
}
/**
* Install host↔guest messaging. Returns a dispose function.
* Noops (returns a no-op dispose) when not embedded under a Grok parent.
*/
function installPreviewHostBridge(options = {}) {
	if (typeof window === "undefined") return () => {};
	const ancestorOrigin = typeof location.ancestorOrigins !== "undefined" && location.ancestorOrigins.length > 0 ? location.ancestorOrigins[0] : null;
	const parentOrigin = resolveParentEmbedderOrigin(window.parent === window, document.referrer, ancestorOrigin, window.location.hostname);
	if (parentOrigin === null) return () => {};
	const ROOT_STATE_KEY = "__grokPreviewBridgeRoot";
	const originalPushState = window.history.pushState.bind(window.history);
	const originalReplaceState = window.history.replaceState.bind(window.history);
	const isAtHistoryRoot = () => {
		const state = window.history.state;
		return Boolean(state && typeof state === "object" && state[ROOT_STATE_KEY] === true);
	};
	try {
		const current = window.history.state;
		if (!(current !== null && typeof current === "object" && Object.prototype.hasOwnProperty.call(current, ROOT_STATE_KEY))) {
			const isRoot = window.history.length <= 1;
			originalReplaceState(current && typeof current === "object" ? {
				...current,
				[ROOT_STATE_KEY]: isRoot
			} : { [ROOT_STATE_KEY]: isRoot }, "", window.location.href);
		}
	} catch {}
	const post = (message) => {
		window.parent.postMessage(message, parentOrigin);
	};
	const reportLocation = () => {
		post({
			channel: PREVIEW_BRIDGE_CHANNEL,
			version: 1,
			type: "location",
			path: window.location.pathname || "/",
			search: window.location.search,
			hash: window.location.hash
		});
	};
	const reportRoutes = () => {
		const paths = options.getRoutePaths?.() ?? [];
		post({
			channel: PREVIEW_BRIDGE_CHANNEL,
			version: 1,
			type: "routes",
			paths
		});
	};
	const defaultNavigate = (path) => {
		if (!isSafeBridgePath(path)) return;
		try {
			const url = new URL(path, window.location.origin);
			if (url.origin !== window.location.origin) return;
			const next = `${url.pathname}${url.search}${url.hash}`;
			window.history.pushState(window.history.state, "", next);
			window.dispatchEvent(new PopStateEvent("popstate", { state: window.history.state }));
		} catch {}
	};
	const navigate = (path) => {
		if (!isSafeBridgePath(path)) return;
		if (options.navigate) {
			options.navigate(path);
			return;
		}
		defaultNavigate(path);
	};
	const announce = () => {
		reportLocation();
		reportRoutes();
		post({
			channel: PREVIEW_BRIDGE_CHANNEL,
			version: 1,
			type: "ready"
		});
	};
	const onMessage = (event) => {
		if (event.source !== window.parent) return;
		if (event.origin !== parentOrigin) return;
		const envelope = EnvelopeSchema.safeParse(event.data);
		if (!envelope.success || envelope.data.version !== 1) return;
		if (envelope.data.type === "hello") {
			if (!HelloSchema.safeParse(event.data).success) return;
			announce();
			return;
		}
		if (envelope.data.type === "navigate") {
			const parsed = NavigateSchema.safeParse(event.data);
			if (!parsed.success) return;
			navigate(parsed.data.path);
			queueMicrotask(reportLocation);
			return;
		}
		if (envelope.data.type === "history") {
			const parsed = HistorySchema.safeParse(event.data);
			if (!parsed.success) return;
			if (parsed.data.delta === -1 && isAtHistoryRoot()) return;
			window.history.go(parsed.data.delta);
		}
	};
	const onPopState = () => {
		reportLocation();
	};
	const onHashChange = () => {
		reportLocation();
	};
	window.history.pushState = (data, unused, url) => {
		const next = data && typeof data === "object" ? {
			...data,
			[ROOT_STATE_KEY]: false
		} : data;
		originalPushState(next, unused, url);
		reportLocation();
	};
	window.history.replaceState = (data, unused, url) => {
		const next = isAtHistoryRoot() ? {
			...data && typeof data === "object" ? data : {},
			[ROOT_STATE_KEY]: true
		} : data;
		originalReplaceState(next, unused, url);
		reportLocation();
	};
	window.addEventListener("message", onMessage);
	window.addEventListener("popstate", onPopState);
	window.addEventListener("hashchange", onHashChange);
	announce();
	return () => {
		window.removeEventListener("message", onMessage);
		window.removeEventListener("popstate", onPopState);
		window.removeEventListener("hashchange", onHashChange);
		window.history.pushState = originalPushState;
		window.history.replaceState = originalReplaceState;
	};
}
/** Collect static path patterns from a TanStack route tree (best-effort). */
function collectRoutePathsFromTree(routeTree) {
	const paths = /* @__PURE__ */ new Set();
	const walk = (node) => {
		if (!node || typeof node !== "object") return;
		const record = node;
		const full = typeof record.fullPath === "string" ? record.fullPath : typeof record.path === "string" ? record.path : null;
		if (full !== null && full !== "") paths.add(full.startsWith("/") ? full : `/${full}`);
		else if (full === "") paths.add("/");
		const children = record.children;
		if (Array.isArray(children)) for (const child of children) walk(child);
		else if (children && typeof children === "object") for (const child of Object.values(children)) walk(child);
	};
	walk(routeTree);
	return [...paths];
}
/**
* Mount once in `__root.tsx` so the Grok preview chrome can drive navigation
* (and later receive registered routes). Noops when the app is not embedded.
*/
function PreviewHostBridge() {
	const router = useRouter();
	(0, import_react.useEffect)(() => {
		return installPreviewHostBridge({
			navigate: (path) => {
				router.history.push(path);
			},
			getRoutePaths: () => collectRoutePathsFromTree(router.routeTree)
		});
	}, [router]);
	return null;
}
var usePlayer = create((set) => ({
	active: null,
	play: (mix) => set({ active: mix }),
	close: () => set({ active: null })
}));
var SITE = {
	name: "Amir Sharara",
	arabic: "أمير شرارة",
	tagline: "Cairo-born. Dubai-based. Rooms that do not empty.",
	role: "DJ / Producer",
	city: "Dubai",
	origin: "Egypt",
	email: "info@amirsharara.com",
	whatsapp: "971565089855",
	whatsappDisplay: "+971 56 508 9855",
	instagram: "https://www.instagram.com/asharara/",
	instagramHandle: "@asharara",
	soundcloud: "https://soundcloud.com/amirsharara",
	mixcloud: "https://www.mixcloud.com/amirsharara/",
	facebook: "https://www.facebook.com/djamirsharara/"
};
var MIXES = [
	{
		id: "gate-two",
		title: "Live at UV Night, Gate Two",
		venue: "Iris, Dubai",
		genre: "Progressive House",
		year: "2026",
		image: "/images/dancefloor.jpg",
		url: "https://soundcloud.com/amirsharara/amir-sharara-live-at-gate-two"
	},
	{
		id: "pure-31",
		title: "Live at Pure Ibiza Radio 94.7 FM",
		venue: "Episode 31",
		genre: "House",
		year: "2025",
		image: "/images/radio.jpg",
		url: "https://soundcloud.com/amirsharara/31-amir-sharara-live-pure-ibiza-radio-947-fm"
	},
	{
		id: "afro-26",
		title: "Afro House, Pure Ibiza Radio",
		venue: "Episode 26",
		genre: "Afro House",
		year: "2025",
		image: "/images/beach.jpg",
		url: "https://soundcloud.com/amirsharara/26-amir-sharara-live-pure-radio-947-fm"
	},
	{
		id: "giza",
		title: "Live at FSOE400EGY",
		venue: "Pyramids of Giza",
		genre: "Warm-up set",
		year: "2015",
		image: "/images/giza.jpg",
		url: "https://soundcloud.com/amirsharara/amir-sharara-live-fsoe400egy-giza-pyramids-egypt"
	},
	{
		id: "base",
		title: "Live at Base Dubai",
		venue: "Handing over to Erick Morillo",
		genre: "Vocal Tech House",
		year: "2019",
		image: "/images/mixer.jpg",
		url: "https://soundcloud.com/amirsharara/amir-sharara-live-base-dubai-with-erick-morillo"
	},
	{
		id: "organic",
		title: "Organic Mix",
		venue: "Live recording",
		genre: "Organic House",
		year: "2021",
		image: "/images/rooftop.jpg",
		url: "https://www.mixcloud.com/amirsharara/amir-sharara-organic-mix-sept-2021-live-recording/"
	}
];
var STATS = [
	{
		value: "25+",
		label: "Years behind the decks"
	},
	{
		value: "40+",
		label: "Countries played"
	},
	{
		value: "2002",
		label: "First mix committed"
	},
	{
		value: "79",
		label: "Mixes on SoundCloud"
	}
];
var GENRES = [
	"House",
	"Afro House",
	"Organic House",
	"Tech House",
	"Deep House",
	"Nu-Disco",
	"Techno",
	"Beach House"
];
var STAGES = [
	{
		name: "Pyramids of Giza",
		detail: "FSOE400 Egypt",
		image: "/images/giza.jpg"
	},
	{
		name: "Ministry of Sound",
		detail: "Hurghada",
		image: "/images/dancefloor.jpg"
	},
	{
		name: "Pacha",
		detail: "Sharm El Sheikh",
		image: "/images/hands.jpg"
	},
	{
		name: "360 Dubai",
		detail: "Jumeirah",
		image: "/images/rooftop.jpg"
	},
	{
		name: "Cairo Jazz Club",
		detail: "Resident",
		image: "/images/mixer.jpg"
	},
	{
		name: "Base Dubai",
		detail: "with Erick Morillo",
		image: "/images/beach.jpg"
	}
];
var RESIDENCIES = [
	"Okku Dubai",
	"Cielo Sky Lounge",
	"Embassy Club",
	"Moe's on the 5th",
	"Pure Sky Lounge, Hilton JBR",
	"Cairo Jazz Club"
];
var COLLABS = [
	"John Digweed",
	"Hernan Cattaneo",
	"Aly & Fila",
	"Erick Morillo",
	"Saeed Younan",
	"Matthew Dekay",
	"Rachael Starr",
	"Abel Ramos",
	"David Vendetta",
	"Nikki Belucci"
];
var RADIOS = [
	"Pure Ibiza Radio 94.7",
	"Dance FM UAE",
	"Nile FM Egypt",
	"DI.FM USA",
	"Afterhours FM USA",
	"Dance Radio Greece",
	"Vibe Lebanon",
	"Ibiza Global Radio"
];
var TESTIMONIALS = [
	{
		quote: "Amir was the life of our wedding. The floor stayed packed and he folded our songs into the night without ever dropping the room.",
		name: "Sarah & Ahmed",
		role: "Wedding, Dubai"
	},
	{
		quote: "Lounge through reception, peak-time after. He read the brief and the crowd in the same breath. Flawless.",
		name: "Laila",
		role: "Corporate planner"
	},
	{
		quote: "A DJ who actually mixes. Detail, patience, then the lift. Guests still mention the night.",
		name: "Tarek",
		role: "Private party"
	}
];
var EVENT_TYPES = [
	"Club night",
	"Beach club / brunch",
	"Wedding",
	"Private party",
	"Corporate",
	"Festival",
	"Brand activation",
	"Residency"
];
var NAV = [
	{
		href: "#listen",
		label: "Listen"
	},
	{
		href: "#about",
		label: "About"
	},
	{
		href: "#stages",
		label: "Stages"
	},
	{
		href: "#book",
		label: "Book"
	}
];
function soundcloudEmbed(url, autoPlay = false) {
	return `https://w.soundcloud.com/player/?${new URLSearchParams({
		url,
		color: "#9eb8c4",
		auto_play: autoPlay ? "true" : "false",
		hide_related: "true",
		show_comments: "false",
		show_user: "true",
		show_reposts: "false",
		show_teaser: "false",
		visual: "false"
	}).toString()}`;
}
function whatsappUrl(text) {
	return `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(text)}`;
}
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
var buttonVariants = cva("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md font-medium transition-[transform,background-color,box-shadow,color,opacity] duration-150 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-bg disabled:pointer-events-none disabled:opacity-50 active:not-disabled:scale-[0.96] [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0", {
	variants: {
		variant: {
			default: "bg-primary text-primary-foreground hover:bg-primary/90",
			outline: "bg-transparent text-fg shadow-border hover:bg-elevated hover:shadow-border-hover",
			ghost: "text-fg hover:bg-elevated",
			accent: "bg-accent text-bg hover:bg-accent/90"
		},
		size: {
			default: "h-11 px-5 text-sm",
			sm: "h-9 px-3.5 text-sm",
			lg: "h-12 px-6 text-sm tracking-wide",
			icon: "size-11"
		}
	},
	defaultVariants: {
		variant: "default",
		size: "default"
	}
});
function Button({ className, variant, size, asChild = false, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(asChild ? Slot : "button", {
		className: cn(buttonVariants({
			variant,
			size,
			className
		})),
		...props
	});
}
var BARS = [
	.55,
	.9,
	.4,
	1,
	.7,
	.35,
	.85,
	.5,
	.95,
	.6
];
function Viz({ playing, className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: cn("flex h-6 items-end gap-px", className),
		"aria-hidden": "true",
		children: BARS.map((h, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: cn("w-0.5 rounded-full bg-accent", playing ? "viz-bar h-full" : "h-2 opacity-50"),
			style: playing ? {
				animationDelay: `${i * 70}ms`,
				animationDuration: `${.8 + h * .5}s`
			} : { height: `${h * 100}%` }
		}, i))
	});
}
function PlayerDock() {
	const active = usePlayer((s) => s.active);
	const close = usePlayer((s) => s.close);
	if (!active) return null;
	const isSoundcloud = active.url.includes("soundcloud.com");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "pointer-events-none fixed inset-x-0 bottom-0 z-40 p-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] sm:p-4 sm:pr-28",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "pointer-events-auto mx-auto max-w-3xl overflow-hidden rounded-xl bg-surface shadow-border",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-3 px-3 py-3",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: active.image,
							alt: "",
							className: "img-frame size-12 shrink-0 rounded-md object-cover"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "min-w-0 flex-1",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "truncate font-display text-sm font-semibold",
								children: active.title
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "truncate text-xs text-muted",
								children: [
									active.venue,
									" · ",
									active.genre
								]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Viz, { playing: true }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							asChild: true,
							variant: "ghost",
							size: "icon",
							"aria-label": "Open mix",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: active.url,
								target: "_blank",
								rel: "noopener noreferrer",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExternalLink, {})
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							variant: "ghost",
							size: "icon",
							"aria-label": "Close player",
							onClick: close,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, {})
						})
					]
				}),
				isSoundcloud ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("iframe", {
					title: `${active.title} on SoundCloud`,
					src: soundcloudEmbed(active.url, true),
					allow: "autoplay",
					className: "sc-frame block w-full border-0 bg-elevated"
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center justify-between gap-3 border-t border-border px-4 py-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs text-muted",
						children: "This set lives on Mixcloud."
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						asChild: true,
						size: "sm",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: active.url,
							target: "_blank",
							rel: "noopener noreferrer",
							children: "Play on Mixcloud"
						})
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "sr-only",
					children: ["Now playing via ", SITE.name]
				})
			]
		})
	});
}
var styles_default = "/assets/styles-DLEIWEtt.css";
var APP_NAME = "Amir Sharara";
var Route$1 = createRootRoute({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{ title: `${APP_NAME} — DJ & Producer, Dubai` },
			{
				name: "description",
				content: "Amir Sharara is an Egyptian DJ and producer based in Dubai. House, afro, organic, and tech — clubs, festivals, and private rooms. Listen and book."
			},
			{
				name: "theme-color",
				content: "#07080b"
			}
		],
		links: [
			{
				rel: "icon",
				type: "image/svg+xml",
				href: "/favicon.svg"
			},
			{
				rel: "preconnect",
				href: "https://fonts.googleapis.com"
			},
			{
				rel: "preconnect",
				href: "https://fonts.gstatic.com",
				crossOrigin: "anonymous"
			},
			{
				rel: "stylesheet",
				href: "https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600&family=Syne:wght@500;600;700;800&display=swap"
			},
			{
				rel: "stylesheet",
				href: styles_default
			},
			{
				rel: "manifest",
				href: "/__grok/manifest.webmanifest"
			},
			{
				rel: "apple-touch-icon",
				href: "/__grok/icon-180.png"
			}
		]
	}),
	component: RootDocument
});
function RootDocument() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("html", {
		lang: "en",
		className: "antialiased",
		suppressHydrationWarning: true,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("head", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeadContent, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", {
			className: "min-h-dvh bg-bg font-sans text-fg",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PreviewHostBridge, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AuthProvider, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PlayerDock, {})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scripts, {})
			]
		})]
	});
}
var $$splitComponentImporter = () => import("./routes-CmChvqZ5.mjs");
var rootRouteChildren = { IndexRoute: createFileRoute("/")({ component: lazyRouteComponent($$splitComponentImporter, "component") }).update({
	id: "/",
	path: "/",
	getParentRoute: () => Route$1
}) };
var routeTree = Route$1._addFileChildren(rootRouteChildren)._addFileTypes();
var router_exports = /* @__PURE__ */ __exportAll({ getRouter: () => getRouter });
function getRouter() {
	return createRouter({
		routeTree,
		defaultErrorComponent: AppErrorComponent
	});
}
//#endregion
export { usePlayer as _, COLLABS as a, MIXES as c, RESIDENCIES as d, SITE as f, whatsappUrl as g, TESTIMONIALS as h, cn as i, NAV as l, STATS as m, Viz as n, EVENT_TYPES as o, STAGES as p, Button as r, GENRES as s, router_exports as t, RADIOS as u };
