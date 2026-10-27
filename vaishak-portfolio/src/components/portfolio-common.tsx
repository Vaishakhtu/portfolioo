import { useEffect, useState, type ReactNode } from "react";
import { motion, useReducedMotion } from "motion/react";
import { ArrowUpRight, ArrowUp, Github, Linkedin, Instagram, Menu, X, Code2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { profile, safeExternalUrl } from "@/data/portfolio";

export const navigation = [{ id: "home", name: "Home" }, { id: "about", name: "About" }, { id: "skills", name: "Skills" }, { id: "projects", name: "Projects" }, { id: "experience", name: "Experience" }, { id: "contact", name: "Contact" }];
export function Reveal({ children, className = "", delay = 0 }: { children: ReactNode; className?: string; delay?: number }) {
  const reduced = useReducedMotion();
  return <motion.div className={className} initial={reduced ? false : { opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "0px 0px -35px 0px" }} transition={{ duration: .55, delay }}>{children}</motion.div>;
}
export function Brand() { return <a href="#home" className="brand" aria-label={`${profile.name} home`}><span className="brand-mark">Am.</span>{" "}<span>VAISHAK T U</span></a>; }
export function Navbar() {
 const [open, setOpen] = useState(false);
 const [active, setActive] = useState("home");
 useEffect(() => {
   const observer = new IntersectionObserver(entries => { for (const entry of entries) if (entry.isIntersecting) setActive(entry.target.id); }, { rootMargin: "-15% 0px -55% 0px" });
   navigation.forEach(item => { const element = document.getElementById(item.id); if (element) observer.observe(element); });
   return () => observer.disconnect();
 }, []);
 useEffect(() => { if (!open) return; const onKey = (event: KeyboardEvent) => { if (event.key === "Escape") setOpen(false); }; window.addEventListener("keydown", onKey); return () => window.removeEventListener("keydown", onKey); }, [open]);
 return <header className="nav-shell sticky top-0 z-40"><div className="container-shell grid h-full grid-cols-[minmax(0,1fr)_auto] items-center gap-6 md:flex md:justify-between"><Brand /><nav aria-label="Main navigation" className="hidden items-center gap-7 md:flex">{navigation.map(item => <a key={item.id} href={`#${item.id}`} className={`nav-link ${active === item.id ? "active" : ""}`} aria-current={active === item.id ? "location" : undefined}>{item.name}</a>)}</nav><Button variant="outline" size="sm" asChild className="hidden md:inline-flex"><a href="#contact">Let's talk <ArrowUpRight /></a></Button><Button variant="ghost" size="icon" className="md:hidden" aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} aria-controls="mobile-nav" onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</Button></div>{open && <motion.nav id="mobile-nav" aria-label="Mobile navigation" className="absolute top-full left-0 w-full border-b border-border bg-background px-5 py-4 md:hidden" initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }}>{navigation.map(item => <a className="block py-3 text-sm text-muted-foreground" key={item.id} href={`#${item.id}`} onClick={() => setOpen(false)}>{item.name}</a>)}</motion.nav>}</header>;
}
export function Socials() {
 const links = [{ name: "GitHub", url: profile.github, icon: Github }, { name: "LinkedIn", url: profile.linkedin, icon: Linkedin }, { name: "Instagram", url: profile.instagram, icon: Instagram }];
 return <div className="flex items-center gap-2">{links.filter(link => safeExternalUrl(link.url)).map(link => <Button key={link.name} asChild size="icon" variant="ghost"><a href={safeExternalUrl(link.url)} target="_blank" rel="noopener noreferrer" aria-label={link.name} title={link.name}><link.icon /></a></Button>)}</div>;
}
export function SectionTitle({ eyebrow, title, subtitle, number }: { eyebrow: string; title: string; subtitle?: string; number?: string }) {
 return <Reveal className="grid grid-cols-[minmax(0,1fr)_auto] items-end gap-4"><div className="min-w-0"><p className="section-eyebrow">{eyebrow}</p><h2 className="section-heading">{title}</h2>{subtitle && <p className="section-subtitle">{subtitle}</p>}</div>{number && <span className="section-number">{number} / {profile.shortName.toUpperCase()}</span>}</Reveal>;
}
export function Footer() {
 return <footer className="container-shell py-10"><div className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4"><div className="min-w-0"><Brand /><p className="mt-3 text-[11px] text-muted-foreground">Designed with curiosity. Built with code.</p></div><Button size="icon" variant="outline" asChild><a href="#home" aria-label="Back to top" title="Back to top"><ArrowUp /></a></Button></div><div className="mt-8 flex flex-wrap items-center justify-between gap-5 border-t border-border pt-6"><p className="text-[10px] text-muted-foreground">© {new Date().getFullYear()} {profile.name}. All rights reserved.</p><nav aria-label="Footer navigation" className="flex flex-wrap gap-5">{navigation.map(item => <a key={item.id} href={`#${item.id}`} className="text-[10px] text-muted-foreground hover:text-foreground">{item.name}</a>)}</nav><Socials /><Code2 size={16} className="text-primary" /></div></footer>;
}
