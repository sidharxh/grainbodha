"use client";

import { FormEvent, useEffect, useMemo, useState } from "react";

type Enquiry = {
  id: number;
  createdAt: string;
  name: string;
  email: string;
  phone: string;
  interest: string;
  business: string;
  quantity: string;
  city: string;
  message: string;
};

export default function AdminDashboard() {
  const [items, setItems] = useState<Enquiry[]>([]);
  const [signedIn, setSignedIn] = useState(false);
  const [loading, setLoading] = useState(true);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");
  const [query, setQuery] = useState("");

  async function loadEnquiries() {
    const response = await fetch("/api/admin/enquiries", { cache: "no-store" });
    if (!response.ok) {
      if (response.status === 401) { setSignedIn(false); return; }
      const data = await response.json().catch(() => ({}));
      throw new Error(data.error || "Unable to load enquiries.");
    }
    const data = await response.json();
    setItems(data.enquiries);
    setSignedIn(true);
  }

  useEffect(() => {
    loadEnquiries().catch((err) => setError(err.message)).finally(() => setLoading(false));
  }, []);

  async function signIn(event: FormEvent<HTMLFormElement>) {
    event.preventDefault(); setBusy(true); setError("");
    const formData = new FormData(event.currentTarget);
    try {
      const response = await fetch("/api/admin/login", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ username: formData.get("username"), password: formData.get("password") }) });
      const data = await response.json();
      if (!response.ok) throw new Error(data.error || "Sign in failed.");
      await loadEnquiries();
    } catch (err) { setError(err instanceof Error ? err.message : "Sign in failed."); }
    finally { setBusy(false); }
  }

  async function signOut() {
    await fetch("/api/admin/login", { method: "DELETE" });
    setItems([]); setSignedIn(false); setError("");
  }

  const filtered = useMemo(() => {
    const needle = query.trim().toLowerCase();
    if (!needle) return items;
    return items.filter((item) => [item.name, item.email, item.phone, item.interest, item.business, item.quantity, item.city, item.message].join(" ").toLowerCase().includes(needle));
  }, [items, query]);

  if (loading) return <main className="admin-shell"><p className="admin-loading">Loading enquiries…</p></main>;
  if (!signedIn) return <main className="admin-shell"><section className="admin-login"><a href="/" className="admin-brand">GRAINBODHA <span>ENQUIRY DESK</span></a><p className="admin-overline">PRIVATE ADMIN AREA</p><h1>Sign in to<br /><em>view enquiries.</em></h1><p className="admin-intro">Access customer and trade enquiries submitted through the Grainbodha website.</p><form onSubmit={signIn} className="admin-form"><label>Admin ID<input name="username" autoComplete="username" required /></label><label>Password<input name="password" type="password" autoComplete="current-password" required /></label><button className="admin-button" type="submit" disabled={busy}>{busy ? "Signing in…" : "Sign in"}<span>↗</span></button>{error && <p className="admin-error" role="alert">{error}</p>}</form><p className="admin-security-note">This area is private. Use the admin credentials configured for this deployment.</p></section></main>;

  return <main className="admin-dashboard"><header className="admin-topbar"><a href="/" className="admin-brand">GRAINBODHA <span>ENQUIRY DESK</span></a><button onClick={signOut} className="admin-signout">Sign out</button></header><section className="admin-content"><p className="admin-overline">WEBSITE INBOX</p><div className="admin-title-row"><div><h1>Enquiries</h1><p>Customer and business requests sent through the Grainbodha website.</p></div><span className="admin-count">{items.length} total</span></div><div className="admin-toolbar"><label className="admin-search">Search enquiries<input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Name, email, phone, message…" /></label><button className="admin-refresh" onClick={() => { setError(""); loadEnquiries().catch((err) => setError(err.message)); }}>Refresh list ↻</button></div>{error && <p className="admin-error" role="alert">{error}</p>}{filtered.length === 0 ? <div className="admin-empty"><span>✳</span><h2>{items.length ? "No matching enquiries" : "Your inbox is clear"}</h2><p>{items.length ? "Try another search term." : "New website enquiries will appear here."}</p></div> : <div className="enquiry-list">{filtered.map((item) => <article className="enquiry-card" key={item.id}><div className="enquiry-card-head"><div><span className="enquiry-kind">{item.interest || "Website enquiry"}</span><h2>{item.name}</h2></div><time>{new Intl.DateTimeFormat("en-IN", { dateStyle: "medium", timeStyle: "short", timeZone: "Asia/Kolkata" }).format(new Date(item.createdAt))}</time></div><div className="enquiry-contacts"><a href={`mailto:${item.email}`}>{item.email}</a><a href={`tel:${item.phone}`}>{item.phone}</a></div>{(item.business || item.quantity || item.city) && <div className="enquiry-business">{item.business && <span><b>Business</b>{item.business}</span>}{item.quantity && <span><b>Quantity</b>{item.quantity}</span>}{item.city && <span><b>Delivery city</b>{item.city}</span>}</div>}<p className="enquiry-message">{item.message}</p></article>)}</div>}</section></main>;
}
