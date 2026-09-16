export const SITE = {
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
  facebook: "https://www.facebook.com/djamirsharara/",
} as const;

export type Mix = {
  id: string;
  title: string;
  venue: string;
  genre: string;
  year: string;
  image: string;
  url: string;
};

export const MIXES: Mix[] = [
  {
    id: "gate-two",
    title: "Live at UV Night, Gate Two",
    venue: "Iris, Dubai",
    genre: "Progressive House",
    year: "2026",
    image: "/images/dancefloor.jpg",
    url: "https://soundcloud.com/amirsharara/amir-sharara-live-at-gate-two",
  },
  {
    id: "pure-31",
    title: "Live at Pure Ibiza Radio 94.7 FM",
    venue: "Episode 31",
    genre: "House",
    year: "2025",
    image: "/images/radio.jpg",
    url: "https://soundcloud.com/amirsharara/31-amir-sharara-live-pure-ibiza-radio-947-fm",
  },
  {
    id: "afro-26",
    title: "Afro House, Pure Ibiza Radio",
    venue: "Episode 26",
    genre: "Afro House",
    year: "2025",
    image: "/images/beach.jpg",
    url: "https://soundcloud.com/amirsharara/26-amir-sharara-live-pure-radio-947-fm",
  },
  {
    id: "giza",
    title: "Live at FSOE400EGY",
    venue: "Pyramids of Giza",
    genre: "Warm-up set",
    year: "2015",
    image: "/images/giza.jpg",
    url: "https://soundcloud.com/amirsharara/amir-sharara-live-fsoe400egy-giza-pyramids-egypt",
  },
  {
    id: "base",
    title: "Live at Base Dubai",
    venue: "Handing over to Erick Morillo",
    genre: "Vocal Tech House",
    year: "2019",
    image: "/images/mixer.jpg",
    url: "https://soundcloud.com/amirsharara/amir-sharara-live-base-dubai-with-erick-morillo",
  },
  {
    id: "organic",
    title: "Organic Mix",
    venue: "Live recording",
    genre: "Organic House",
    year: "2021",
    image: "/images/rooftop.jpg",
    url: "https://www.mixcloud.com/amirsharara/amir-sharara-organic-mix-sept-2021-live-recording/",
  },
];

export const STATS = [
  { value: "25+", label: "Years behind the decks" },
  { value: "40+", label: "Countries played" },
  { value: "2002", label: "First mix committed" },
  { value: "79", label: "Mixes on SoundCloud" },
] as const;

export const GENRES = [
  "House",
  "Afro House",
  "Organic House",
  "Tech House",
  "Deep House",
  "Nu-Disco",
  "Techno",
  "Beach House",
] as const;

export const STAGES = [
  { name: "Pyramids of Giza", detail: "FSOE400 Egypt", image: "/images/giza.jpg" },
  { name: "Ministry of Sound", detail: "Hurghada", image: "/images/dancefloor.jpg" },
  { name: "Pacha", detail: "Sharm El Sheikh", image: "/images/hands.jpg" },
  { name: "360 Dubai", detail: "Jumeirah", image: "/images/rooftop.jpg" },
  { name: "Cairo Jazz Club", detail: "Resident", image: "/images/mixer.jpg" },
  { name: "Base Dubai", detail: "with Erick Morillo", image: "/images/beach.jpg" },
] as const;

export const RESIDENCIES = [
  "Okku Dubai",
  "Cielo Sky Lounge",
  "Embassy Club",
  "Moe's on the 5th",
  "Pure Sky Lounge, Hilton JBR",
  "Cairo Jazz Club",
] as const;

export const COLLABS = [
  "John Digweed",
  "Hernan Cattaneo",
  "Aly & Fila",
  "Erick Morillo",
  "Saeed Younan",
  "Matthew Dekay",
  "Rachael Starr",
  "Abel Ramos",
  "David Vendetta",
  "Nikki Belucci",
] as const;

export const RADIOS = [
  "Pure Ibiza Radio 94.7",
  "Dance FM UAE",
  "Nile FM Egypt",
  "DI.FM USA",
  "Afterhours FM USA",
  "Dance Radio Greece",
  "Vibe Lebanon",
  "Ibiza Global Radio",
] as const;

export const TESTIMONIALS = [
  {
    quote:
      "Amir was the life of our wedding. The floor stayed packed and he folded our songs into the night without ever dropping the room.",
    name: "Sarah & Ahmed",
    role: "Wedding, Dubai",
  },
  {
    quote:
      "Lounge through reception, peak-time after. He read the brief and the crowd in the same breath. Flawless.",
    name: "Laila",
    role: "Corporate planner",
  },
  {
    quote:
      "A DJ who actually mixes. Detail, patience, then the lift. Guests still mention the night.",
    name: "Tarek",
    role: "Private party",
  },
] as const;

export const EVENT_TYPES = [
  "Club night",
  "Beach club / brunch",
  "Wedding",
  "Private party",
  "Corporate",
  "Festival",
  "Brand activation",
  "Residency",
] as const;

export const NAV = [
  { href: "#listen", label: "Listen" },
  { href: "#about", label: "About" },
  { href: "#stages", label: "Stages" },
  { href: "#book", label: "Book" },
] as const;

export function soundcloudEmbed(url: string, autoPlay = false) {
  const params = new URLSearchParams({
    url,
    color: "#9eb8c4",
    auto_play: autoPlay ? "true" : "false",
    hide_related: "true",
    show_comments: "false",
    show_user: "true",
    show_reposts: "false",
    show_teaser: "false",
    visual: "false",
  });
  return `https://w.soundcloud.com/player/?${params.toString()}`;
}

export function whatsappUrl(text: string) {
  return `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(text)}`;
}
