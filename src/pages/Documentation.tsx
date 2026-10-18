import { Link } from "react-router-dom";

const SECTIONS: Array<{ title: string; body: string; links?: Array<{ to: string; label: string }> }> = [
  {
    title: "What is Callora?",
    body: "Callora is a pay-per-call API marketplace. Consumers fund a USDC vault on Stellar and are billed per request; publishers list APIs with per-request pricing and earn USDC automatically.",
  },
  {
    title: "Quickstart for API consumers",
    body: "1) Open the Dashboard and review your vault balance. 2) Deposit USDC (Billing). 3) Browse the Marketplace, compare APIs and subscribe. 4) Track calls and spend in API Usage and Billing History.",
    links: [
      { to: "/dashboard", label: "Dashboard" },
      { to: "/billing", label: "Billing" },
      { to: "/marketplace", label: "Marketplace" },
      { to: "/api-usage", label: "API Usage" },
    ],
  },
  {
    title: "Quickstart for publishers",
    body: "Publish an API with a name, base URL and per-request price, then manage it under My APIs. You can import an OpenAPI spec to pre-fill endpoints, rotate keys, and monitor webhook deliveries.",
    links: [
      { to: "/publish", label: "Publish an API" },
      { to: "/apis/my-apis", label: "My APIs" },
      { to: "/webhooks/deliveries", label: "Webhook deliveries" },
    ],
  },
  {
    title: "How billing works",
    body: "Every deposit moves USDC from your Stellar wallet (Freighter) into the Callora vault contract. Each API call debits the per-request price from the vault. Low-balance banners and quota warnings tell you when to top up.",
  },
  {
    title: "Demo mode",
    body: "When no backend is reachable (for example on the public demo deployment) the app falls back to bundled sample data, so every page stays usable. Point VITE_API_BASE_URL at a real Callora API to use live data.",
  },
  {
    title: "Troubleshooting",
    body: "If something looks wrong, check system status, the rate-limit guidance page, or the error page reference.",
    links: [
      { to: "/status", label: "System status" },
      { to: "/rate-limit", label: "Rate limits" },
      { to: "/500", label: "Server error page" },
      { to: "/design-system/docs", label: "Design system" },
    ],
  },
];

export default function Documentation() {
  return (
    <div className="docs-page">
      <section className="surface placeholder-card">
        <p className="eyebrow">Documentation</p>
        <h1>Everything you need to ship with Callora.</h1>
        <p>Guides for consumers and publishers, how billing works, and where to look when something goes wrong.</p>
      </section>
      <div className="docs-grid">
        {SECTIONS.map((s) => (
          <section key={s.title} className="surface docs-card">
            <h2>{s.title}</h2>
            <p>{s.body}</p>
            {s.links && (
              <p className="docs-links">
                {s.links.map((l) => (
                  <Link key={l.to} to={l.to} className="link-nav">
                    {l.label}
                  </Link>
                ))}
              </p>
            )}
          </section>
        ))}
      </div>
    </div>
  );
}
