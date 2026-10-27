import { useState, type FormEvent } from "react";
import { ArrowUpRight, MapPin, Mail, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { profile } from "@/data/portfolio";
import { contactSchema } from "@/lib/contact-schema";
import { Reveal, SectionTitle, Socials } from "./portfolio-common";

export function Contact() {
 const [errors, setErrors] = useState<Record<string, string>>({});
 const [notice, setNotice] = useState("");
 function submit(event: FormEvent<HTMLFormElement>) {
   event.preventDefault();
   const form = new FormData(event.currentTarget);
   const result = contactSchema.safeParse(Object.fromEntries(form.entries()));
   if (!result.success) {
     const next: Record<string, string> = {};
     result.error.issues.forEach(issue => { const key = String(issue.path[0]); if (!next[key]) next[key] = issue.message; });
     setErrors(next); setNotice(""); return;
   }
   setErrors({});
   setNotice("Your message has not been sent. Message delivery is not configured yet. Please check back soon.");
 }
 return <section id="contact" className="page-section contact-section"><div className="container-shell grid gap-12 lg:grid-cols-2"><div><SectionTitle eyebrow="Get in touch" title="Let's Build Something Great" subtitle="Have an opportunity, project idea, or collaboration in mind? I'd love to hear from you." /><Reveal className="mt-8"><div className="flex items-center gap-3 text-xs text-muted-foreground"><MapPin size={17} className="text-primary" />{profile.location}</div>{profile.email && <a href={`mailto:${encodeURIComponent(profile.email)}`} className="mt-5 flex items-center gap-3 text-sm"><Mail size={17} className="text-primary" />{profile.email}<ArrowUpRight size={16} /></a>}<div className="mt-6"><Socials /></div><div className="mt-10 flex items-center gap-3"><span className="status-dot" /><span className="text-[11px] text-muted-foreground">Open to opportunities & thoughtful collaborations</span></div></Reveal></div><Reveal><form onSubmit={submit} noValidate className="grid gap-5"><div className="grid gap-5 sm:grid-cols-2">{[{ name: "name", label: "Full name", placeholder: "Your name", type: "text", max: 100 }, { name: "email", label: "Email address", placeholder: "you@example.com", type: "email", max: 255 }].map(field => <div key={field.name}><label className="form-label" htmlFor={field.name}>{field.label}</label><Input id={field.name} name={field.name} type={field.type} autoComplete={field.name === "name" ? "name" : "email"} placeholder={field.placeholder} maxLength={field.max} className="contact-input" aria-invalid={Boolean(errors[field.name])} aria-describedby={errors[field.name] ? `${field.name}-error` : undefined} required />{errors[field.name] && <p id={`${field.name}-error`} className="form-error">{errors[field.name]}</p>}</div>)}</div><div><label className="form-label" htmlFor="subject">Subject</label><Input name="subject" id="subject" placeholder="What's on your mind?" maxLength={150} className="contact-input" required aria-invalid={Boolean(errors["subject"])} aria-describedby={errors["subject"] ? "subject-error" : undefined} />{errors["subject"] && <p id="subject-error" className="form-error">{errors["subject"]}</p>}</div><div><label className="form-label" htmlFor="message">Message</label><Textarea name="message" id="message" rows={5} maxLength={2000} placeholder="Tell me a little about your idea or opportunity…" className="contact-input resize-y" required aria-invalid={Boolean(errors["message"])} aria-describedby={errors["message"] ? "message-error" : undefined} />{errors["message"] && <p id="message-error" className="form-error">{errors["message"]}</p>}</div><div hidden aria-hidden="true"><label htmlFor="website">Website</label><Input name="website" id="website" tabIndex={-1} autoComplete="off" defaultValue="" /></div><div className="flex items-center justify-between gap-3"><p className="form-notice">Message delivery is not yet connected.</p><Button variant="hero" type="submit" className="h-11 px-5">Send Message<Send /></Button></div>{notice && <p role="status" className="form-notice border-l-2 border-primary pl-3">{notice}</p>}</form></Reveal></div></section>;
}
