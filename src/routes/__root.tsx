import { createRootRoute, HeadContent, Outlet, Scripts } from "@tanstack/react-router";
import { AuthProvider } from "@/lib/auth/provider";
import { PreviewHostBridge } from "@/components/preview-host-bridge";
import { PlayerDock } from "@/components/site/player-dock";
import appCss from "../styles.css?url";

const APP_NAME = "Amir Sharara";

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: `${APP_NAME} — DJ & Producer, Dubai` },
      {
        name: "description",
        content:
          "Amir Sharara is an Egyptian DJ and producer based in Dubai. House, afro, organic, and tech — clubs, festivals, and private rooms. Listen and book.",
      },
      { name: "theme-color", content: "#07080b" },
    ],
    links: [
      { rel: "icon", type: "image/svg+xml", href: "/favicon.svg" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600&family=Syne:wght@500;600;700;800&display=swap",
      },
      { rel: "stylesheet", href: appCss },
      { rel: "manifest", href: "/__grok/manifest.webmanifest" },
      { rel: "apple-touch-icon", href: "/__grok/icon-180.png" },
    ],
  }),
  component: RootDocument,
});

function RootDocument() {
  return (
    <html lang="en" className="antialiased" suppressHydrationWarning>
      <head>
        <HeadContent />
      </head>
      <body className="min-h-dvh bg-bg font-sans text-fg">
        <PreviewHostBridge />
        <AuthProvider>
          <Outlet />
          <PlayerDock />
        </AuthProvider>
        <Scripts />
      </body>
    </html>
  );
}
