import { i as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { v as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as Menu, c as Check, i as MessageCircle, l as ArrowDown, o as Mail, r as Play, t as X } from "../_libs/lucide-react.mjs";
import { _ as usePlayer, a as COLLABS, c as MIXES, d as RESIDENCIES, f as SITE, g as whatsappUrl, h as TESTIMONIALS, i as cn, l as NAV, m as STATS, n as Viz, o as EVENT_TYPES, p as STAGES, r as Button, s as GENRES, u as RADIOS } from "./router-C1FO2H-P.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-CmChvqZ5.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function Logo({ className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
		href: "#top",
		className: cn("group flex items-center gap-3 text-fg no-underline", className),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "grid size-9 place-items-center rounded-md shadow-border",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "font-display text-xs font-semibold tracking-wider",
				children: "AS"
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
			className: "flex flex-col leading-none",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "font-display text-sm font-semibold tracking-wide",
				children: "Amir Sharara"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "mt-0.5 text-[0.65rem] uppercase tracking-[0.18em] text-muted",
				children: "Dubai"
			})]
		})]
	});
}
function Header() {
	const [scrolled, setScrolled] = (0, import_react.useState)(false);
	const [open, setOpen] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const onScroll = () => setScrolled(window.scrollY > 12);
		onScroll();
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => window.removeEventListener("scroll", onScroll);
	}, []);
	(0, import_react.useEffect)(() => {
		document.body.style.overflow = open ? "hidden" : "";
		return () => {
			document.body.style.overflow = "";
		};
	}, [open]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
		className: cn("fixed inset-x-0 top-0 z-40 transition-[background-color,box-shadow] duration-200", scrolled ? "bg-bg/92 shadow-border" : "bg-transparent"),
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Logo, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
					className: "hidden items-center gap-8 md:flex",
					"aria-label": "Primary",
					children: NAV.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: item.href,
						className: "text-sm text-muted transition-colors duration-150 hover:text-fg",
						children: item.label
					}, item.href))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						asChild: true,
						size: "sm",
						className: "hidden sm:inline-flex",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "#book",
							children: "Book a date"
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						variant: "ghost",
						size: "icon",
						className: "md:hidden",
						"aria-label": open ? "Close menu" : "Open menu",
						"aria-expanded": open,
						onClick: () => setOpen((v) => !v),
						children: open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, {}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, {})
					})]
				})
			]
		})
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: cn("fixed inset-0 z-30 flex flex-col bg-bg px-6 pb-10 pt-24 transition-opacity duration-200 md:hidden", open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"),
		"aria-hidden": !open,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
			className: "flex flex-1 flex-col justify-center gap-2",
			"aria-label": "Mobile",
			children: NAV.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
				href: item.href,
				onClick: () => setOpen(false),
				className: "font-display text-4xl font-semibold tracking-tight text-fg",
				children: item.label
			}, item.href))
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
			asChild: true,
			size: "lg",
			className: "w-full",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
				href: "#book",
				onClick: () => setOpen(false),
				children: "Book a date"
			})
		})]
	})] });
}
function Hero() {
	const [reduce, setReduce] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
		setReduce(mq.matches);
		const onChange = () => setReduce(mq.matches);
		mq.addEventListener("change", onChange);
		return () => mq.removeEventListener("change", onChange);
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "top",
		className: "relative isolate flex min-h-dvh flex-col justify-end overflow-hidden",
		children: [
			reduce ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: "/images/hero.jpg",
				alt: "",
				className: "absolute inset-0 size-full object-cover"
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("video", {
				className: "absolute inset-0 size-full object-cover",
				autoPlay: true,
				muted: true,
				loop: true,
				playsInline: true,
				poster: "/images/hero.jpg",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("source", {
					src: "/videos/hero.mp4",
					type: "video/mp4"
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-t from-bg via-bg/55 to-bg/25" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pointer-events-none absolute inset-0 grid-fade" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative z-10 mx-auto w-full max-w-6xl px-4 pb-10 pt-28 sm:px-6 sm:pb-14",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "rise text-xs font-medium uppercase tracking-[0.28em] text-accent",
						children: [
							SITE.role,
							" · ",
							SITE.origin,
							" · ",
							SITE.city
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
						className: "rise mt-5 font-display text-display text-fg",
						style: { animationDelay: "80ms" },
						children: [
							"Amir",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
							"Sharara"
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "rise mt-6 max-w-xl text-base leading-relaxed text-muted sm:text-lg",
						style: { animationDelay: "160ms" },
						children: [SITE.tagline, " House, afro, organic, and the long arc of a night — from the Pyramids of Giza to Dubai's rooms."]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rise mt-8 flex flex-col gap-3 sm:flex-row sm:items-center",
						style: { animationDelay: "240ms" },
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							asChild: true,
							size: "lg",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "#listen",
								children: "Listen to the sets"
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							asChild: true,
							variant: "outline",
							size: "lg",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "#book",
								children: "Book for an event"
							})
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dl", {
						className: "mt-12 grid grid-cols-2 gap-px overflow-hidden rounded-xl bg-border sm:grid-cols-4",
						children: STATS.map((stat) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "bg-bg/80 px-4 py-4 sm:px-5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
								className: "text-xs uppercase tracking-[0.18em] text-muted",
								children: stat.label
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
								className: "mt-1 font-display text-2xl font-semibold tabular-nums text-fg",
								children: stat.value
							})]
						}, stat.label))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						href: "#listen",
						className: "mt-8 inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-muted transition-colors hover:text-fg",
						children: ["Scroll", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowDown, { className: "size-3.5" })]
					})
				]
			})
		]
	});
}
function Marquee() {
	const items = [
		...GENRES,
		...GENRES,
		...GENRES,
		...GENRES
	];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "overflow-hidden border-y border-border py-3",
		"aria-hidden": "true",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "marquee-track flex w-max gap-10 whitespace-nowrap",
			children: items.map((genre, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "font-display text-sm font-semibold uppercase tracking-[0.22em] text-muted",
				children: genre
			}, `${genre}-${i}`))
		})
	});
}
function Listen() {
	const active = usePlayer((s) => s.active);
	const play = usePlayer((s) => s.play);
	const featured = active ?? MIXES[0];
	if (!featured) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "listen",
		className: "scroll-mt-16 border-t border-border py-20 sm:py-28",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-6xl px-4 sm:px-6",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs font-medium uppercase tracking-[0.28em] text-accent",
						children: "Catalogue"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-3 font-display text-title text-fg",
						children: "Listen"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 max-w-lg text-sm leading-relaxed text-muted sm:text-base",
						children: "Live rooms and radio hours. Press play here — the set opens in the bar below so you never leave the page."
					})
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					asChild: true,
					variant: "outline",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: SITE.soundcloud,
						target: "_blank",
						rel: "noopener noreferrer",
						children: "SoundCloud archive"
					})
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-10 grid gap-6 lg:grid-cols-5",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					type: "button",
					onClick: () => play(featured),
					className: "group relative isolate min-h-80 overflow-hidden rounded-2xl text-left lg:col-span-3 lg:min-h-96",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: featured.image,
							alt: "",
							className: "img-frame absolute inset-0 size-full object-cover transition-transform duration-500 group-hover:scale-105"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-t from-bg via-bg/40 to-transparent" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "absolute left-1/2 top-1/2 grid size-16 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-primary text-primary-foreground transition-transform duration-150 group-hover:scale-105",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Play, { className: "ml-0.5 size-6 fill-current" })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-5 sm:p-7",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "text-xs uppercase tracking-[0.2em] text-accent",
									children: [
										featured.genre,
										" · ",
										featured.year
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-1 font-display text-2xl font-semibold sm:text-3xl",
									children: featured.title
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-1 text-sm text-muted",
									children: featured.venue
								})
							] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Viz, {
								playing: active?.id === featured.id,
								className: "hidden sm:flex"
							})]
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
					className: "flex flex-col gap-1 lg:col-span-2",
					children: MIXES.map((mix, i) => {
						const isOn = active?.id === mix.id;
						return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							onClick: () => play(mix),
							className: cn("flex w-full items-center gap-3 rounded-xl px-3 py-3 text-left transition-colors duration-150", isOn ? "bg-elevated" : "hover:bg-elevated/70"),
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "w-6 text-xs tabular-nums text-subtle",
									children: String(i + 1).padStart(2, "0")
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: mix.image,
									alt: "",
									className: "img-frame size-12 shrink-0 rounded-md object-cover"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "min-w-0 flex-1",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "block truncate text-sm font-medium",
										children: mix.title
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "block truncate text-xs text-muted",
										children: [
											mix.venue,
											" · ",
											mix.genre
										]
									})]
								}),
								isOn ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Viz, { playing: true }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Play, { className: "size-4 shrink-0 text-muted" })
							]
						}) }, mix.id);
					})
				})]
			})]
		})
	});
}
function About() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "about",
		className: "scroll-mt-16 border-t border-border py-20 sm:py-28",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto grid max-w-6xl gap-12 px-4 sm:px-6 lg:grid-cols-12 lg:gap-16",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "lg:col-span-5",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "overflow-hidden rounded-2xl",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: "/images/mixer.jpg",
						alt: "DJ mixer in a dark booth",
						className: "img-frame aspect-[4/5] w-full object-cover"
					})
				})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "lg:col-span-7",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs font-medium uppercase tracking-[0.28em] text-accent",
						children: "Biography"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-3 font-display text-title text-fg",
						children: "A long night, built properly."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-6 space-y-4 text-sm leading-relaxed text-muted sm:text-base",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Amir Sharara is an Egyptian DJ and producer based in Dubai. Born in the early eighties, he found house music in Ibiza in 2001 and has spent the years since building rooms — from the Pyramids of Giza to Ministry of Sound Hurghada, Pacha Sharm, 360 Dubai, and a residency at Cairo Jazz Club." }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "In 2007 he won Heat 2 of the Heineken Thirst competition in El Gouna, then stood in the final next to John Digweed. He has since shared bills with Hernan Cattaneo, Aly & Fila, Erick Morillo, Saeed Younan and others, and taken the Australian tour with Aly & Fila through Melbourne, Sydney, Brisbane and Perth." }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Twenty-five years in, the set is still about the long arc: groove-led house, afro and organic, tech house — the kind of peak that arrives because it was earned. Radio has followed him across DI.FM, Afterhours FM, Nile FM, Dance FM and Pure Ibiza Radio 94.7." })
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-8 font-display text-xl text-fg",
						lang: "ar",
						dir: "rtl",
						children: "أمير شرارة"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 text-xs uppercase tracking-[0.22em] text-muted",
						children: "Sharara — spark"
					})
				]
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mx-auto mt-16 grid max-w-6xl gap-4 px-4 sm:px-6 lg:grid-cols-3",
			children: TESTIMONIALS.map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figure", {
				className: "flex flex-col justify-between rounded-xl bg-surface p-6 shadow-border",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("blockquote", {
					className: "text-sm leading-relaxed text-fg",
					children: t.quote
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figcaption", {
					className: "mt-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm font-medium",
						children: t.name
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs text-muted",
						children: t.role
					})]
				})]
			}, t.name))
		})]
	});
}
function Stages() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "stages",
		className: "scroll-mt-16 border-t border-border py-20 sm:py-28",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-6xl px-4 sm:px-6",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs font-medium uppercase tracking-[0.28em] text-accent",
					children: "Rooms"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-3 font-display text-title text-fg",
					children: "Stages & frequencies"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 max-w-xl text-sm leading-relaxed text-muted sm:text-base",
					children: "Clubs, beach rooms, festivals, radio hours. Available for residencies, peak-time floors, and private work across the region and beyond."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3",
					children: STAGES.map((stage) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
						className: "group relative isolate min-h-52 overflow-hidden rounded-xl",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: stage.image,
								alt: "",
								className: "img-frame absolute inset-0 size-full object-cover transition-transform duration-500 group-hover:scale-105"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-t from-bg via-bg/30 to-transparent" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "absolute inset-x-0 bottom-0 p-5",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "font-display text-lg font-semibold",
									children: stage.name
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-xs uppercase tracking-[0.16em] text-muted",
									children: stage.detail
								})]
							})
						]
					}, stage.name))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-14 grid gap-10 lg:grid-cols-3",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "text-xs font-medium uppercase tracking-[0.22em] text-muted",
							children: "Residencies"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "mt-4 space-y-2",
							children: RESIDENCIES.map((r) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
								className: "text-sm text-fg",
								children: r
							}, r))
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "text-xs font-medium uppercase tracking-[0.22em] text-muted",
							children: "Shared bills"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "mt-4 flex flex-wrap gap-2",
							children: COLLABS.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
								className: "rounded-full px-3 py-1.5 text-sm text-fg shadow-border",
								children: c
							}, c))
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "text-xs font-medium uppercase tracking-[0.22em] text-muted",
							children: "Radio"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "mt-4 space-y-2",
							children: RADIOS.map((r) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
								className: "text-sm text-fg",
								children: r
							}, r))
						})] })
					]
				})
			]
		})
	});
}
function Input({ className, type, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
		type,
		className: cn("flex h-11 w-full rounded-md bg-elevated px-3.5 text-sm text-fg shadow-border transition-[box-shadow] duration-150", "placeholder:text-subtle", "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring", "disabled:cursor-not-allowed disabled:opacity-50", className),
		...props
	});
}
function Label({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
		className: cn("text-xs font-medium tracking-wide text-muted", className),
		...props
	});
}
function Textarea({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
		className: cn("flex min-h-32 w-full rounded-lg bg-elevated px-3.5 py-3 text-sm text-fg shadow-border transition-[box-shadow] duration-150", "placeholder:text-subtle", "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring", "disabled:cursor-not-allowed disabled:opacity-50", className),
		...props
	});
}
var empty = {
	name: "",
	email: "",
	eventType: EVENT_TYPES[0],
	date: "",
	city: "",
	message: ""
};
function Book() {
	const [fields, setFields] = (0, import_react.useState)(empty);
	const [error, setError] = (0, import_react.useState)(null);
	const [sent, setSent] = (0, import_react.useState)(false);
	function update(key, value) {
		setFields((f) => ({
			...f,
			[key]: value
		}));
	}
	function onSubmit(e) {
		e.preventDefault();
		if (fields.name.trim().length < 2) {
			setError("A name helps the booking land.");
			return;
		}
		if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email)) {
			setError("Use a real email so the date can be confirmed.");
			return;
		}
		if (!fields.date) {
			setError("Pick a date, even if it is a hold.");
			return;
		}
		if (fields.city.trim().length < 2) {
			setError("Where is the room?");
			return;
		}
		if (fields.message.trim().length < 8) {
			setError("A few lines on the night go a long way.");
			return;
		}
		setError(null);
		const text = [
			`Booking request for ${SITE.name}`,
			"",
			`Name: ${fields.name.trim()}`,
			`Email: ${fields.email.trim()}`,
			`Event: ${fields.eventType}`,
			`Date: ${fields.date}`,
			`City: ${fields.city.trim()}`,
			"",
			fields.message.trim()
		].join("\n");
		window.open(whatsappUrl(text), "_blank", "noopener,noreferrer");
		try {
			localStorage.setItem("amir-booking", JSON.stringify({
				...fields,
				at: Date.now()
			}));
		} catch {}
		setSent(true);
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "book",
		className: "scroll-mt-16 border-t border-border py-20 sm:py-28",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto grid max-w-6xl gap-12 px-4 sm:px-6 lg:grid-cols-12",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "lg:col-span-5",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs font-medium uppercase tracking-[0.28em] text-accent",
						children: "Bookings"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-3 font-display text-title text-fg",
						children: "Hold the night."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 text-sm leading-relaxed text-muted sm:text-base",
						children: "Clubs, weddings, beach rooms, private houses, brand work. Send the brief — WhatsApp is the fastest line to the booth."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-8 space-y-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: whatsappUrl("Hi Amir — I'd like to book a date."),
							target: "_blank",
							rel: "noopener noreferrer",
							className: "flex items-center gap-3 rounded-xl bg-surface px-4 py-3 shadow-border transition-[box-shadow] duration-150 hover:shadow-border-hover",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageCircle, { className: "size-4 text-accent" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "block text-sm font-medium",
								children: "WhatsApp"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "block text-xs text-muted",
								children: SITE.whatsappDisplay
							})] })]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: `mailto:${SITE.email}`,
							className: "flex items-center gap-3 rounded-xl bg-surface px-4 py-3 shadow-border transition-[box-shadow] duration-150 hover:shadow-border-hover",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, { className: "size-4 text-accent" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "block text-sm font-medium",
								children: "Email"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "block text-xs text-muted",
								children: SITE.email
							})] })]
						})]
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "lg:col-span-7",
				children: sent ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex min-h-80 flex-col justify-center rounded-2xl bg-surface p-8 shadow-border",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "grid size-10 place-items-center rounded-full bg-accent text-bg",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "size-5" })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "mt-5 font-display text-2xl font-semibold",
							children: "Request opened"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-2 max-w-md text-sm leading-relaxed text-muted",
							children: [
								"WhatsApp should now hold a drafted message with your details. If it did not open, write directly on ",
								SITE.whatsappDisplay,
								"."
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							className: "mt-6 w-fit",
							variant: "outline",
							onClick: () => {
								setSent(false);
								setFields(empty);
							},
							children: "Send another"
						})
					]
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
					onSubmit,
					className: "rounded-2xl bg-surface p-5 shadow-border sm:p-7",
					noValidate: true,
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid gap-4 sm:grid-cols-2",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
									label: "Name",
									htmlFor: "name",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
										id: "name",
										autoComplete: "name",
										value: fields.name,
										onChange: (e) => update("name", e.target.value),
										placeholder: "Your name"
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
									label: "Email",
									htmlFor: "email",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
										id: "email",
										type: "email",
										autoComplete: "email",
										value: fields.email,
										onChange: (e) => update("email", e.target.value),
										placeholder: "you@studio.com"
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
									label: "Event type",
									htmlFor: "eventType",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
										id: "eventType",
										value: fields.eventType,
										onChange: (e) => update("eventType", e.target.value),
										className: "flex h-11 w-full rounded-md bg-elevated px-3.5 text-sm text-fg shadow-border focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
										children: EVENT_TYPES.map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
											value: t,
											children: t
										}, t))
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
									label: "Date",
									htmlFor: "date",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
										id: "date",
										type: "date",
										value: fields.date,
										onChange: (e) => update("date", e.target.value)
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
									label: "City / venue",
									htmlFor: "city",
									className: "sm:col-span-2",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
										id: "city",
										value: fields.city,
										onChange: (e) => update("city", e.target.value),
										placeholder: "Dubai, Doha, Cairo..."
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
									label: "The night",
									htmlFor: "message",
									className: "sm:col-span-2",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
										id: "message",
										value: fields.message,
										onChange: (e) => update("message", e.target.value),
										placeholder: "Guest count, room, energy you want, start time."
									})
								})
							]
						}),
						error ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 text-sm text-accent",
							role: "alert",
							children: error
						}) : null,
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							type: "submit",
							size: "lg",
							className: "mt-6 w-full sm:w-auto",
							children: "Send via WhatsApp"
						})
					]
				})
			})]
		})
	});
}
function Field({ label, htmlFor, className, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: className ? `flex flex-col gap-1.5 ${className}` : "flex flex-col gap-1.5",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
			htmlFor,
			children: label
		}), children]
	});
}
var SOCIALS = [
	{
		href: SITE.instagram,
		label: "Instagram"
	},
	{
		href: SITE.soundcloud,
		label: "SoundCloud"
	},
	{
		href: SITE.mixcloud,
		label: "Mixcloud"
	},
	{
		href: SITE.facebook,
		label: "Facebook"
	},
	{
		href: `mailto:${SITE.email}`,
		label: "Email"
	}
];
function Footer() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
		className: "border-t border-border pb-32 pt-12 sm:pb-28",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto flex max-w-6xl flex-col gap-10 px-4 sm:px-6",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Logo, {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 max-w-sm text-sm text-muted",
						children: "Egyptian DJ & producer. Dubai. House that holds a room."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 font-display text-lg",
						lang: "ar",
						dir: "rtl",
						children: SITE.arabic
					})
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "flex flex-wrap gap-x-5 gap-y-2",
					children: SOCIALS.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: s.href,
						target: s.href.startsWith("http") ? "_blank" : void 0,
						rel: s.href.startsWith("http") ? "noopener noreferrer" : void 0,
						className: "text-sm text-muted transition-colors hover:text-fg",
						children: s.label
					}) }, s.label))
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col gap-2 border-t border-border pt-6 text-xs text-subtle sm:flex-row sm:justify-between",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
					"© ",
					(/* @__PURE__ */ new Date()).getFullYear(),
					" Amir Sharara. All rights reserved."
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Based in Dubai · Booking worldwide" })]
			})]
		})
	});
}
function Home() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Header, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Hero, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Marquee, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Listen, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(About, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stages, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Book, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {})
	] });
}
//#endregion
export { Home as component };
