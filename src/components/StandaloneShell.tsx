import type { ReactNode } from "react";
import { ThemeToggle } from "../ThemeToggle";

const LINKS: Array<{ href: string; label: string }> = [
  { href: "/dashboard", label: "Dashboard" },
  { href: "/marketplace", label: "Marketplace" },
  { href: "/publish", label: "Publish" },
  { href: "/apis/my-apis", label: "My APIs" },
  { href: "/billing", label: "Billing" },
  { href: "/documentation", label: "Docs" },
];

/**
 * Shared chrome (top bar + page container) for the full-page routes that are
 * rendered outside `<App />` (marketplace, publish, API details). Uses plain
 * anchors because those routes are resolved by `renderRoute` on page load.
 */
export default function StandaloneShell({ children }: { children: ReactNode }) {
  const path = typeof window === "undefined" ? "" : window.location.pathname;
  return (
    <div className="app-shell standalone-shell">
      <div className="ambient ambient-a" aria-hidden="true" />
      <div className="ambient ambient-b" aria-hidden="true" />
      <header className="topbar standalone-topbar no-print" role="banner">
        <a href="/" className="standalone-brand">
          <span className="standalone-logo" aria-hidden="true">C</span>
          Callora
        </a>
        <div className="topbar-actions">
          <nav className="nav" aria-label="Primary navigation">
            {LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className={path.startsWith(l.href) ? "link-nav active" : "link-nav"}
              >
                {l.label}
              </a>
            ))}
          </nav>
          <ThemeToggle />
        </div>
      </header>
      <div className="standalone-main">{children}</div>
    </div>
  );
}
