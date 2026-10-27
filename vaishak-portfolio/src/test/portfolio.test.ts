import { describe, expect, it } from "vitest";
import { filterProjects, profile, projects, safeExternalUrl } from "@/data/portfolio";
import { contactSchema } from "@/lib/contact-schema";

describe("Portfolio rules", () => {
 it("shows all six entries in All Projects", () => { expect(filterProjects("All Projects")).toHaveLength(6); });
 it("shows only two web development entries", () => { expect(filterProjects("Web Development").map(p => p.id)).toEqual(["top-x", "fortitude"]); });
 it("shows only the mobile application", () => { expect(filterProjects("Mobile Applications").map(p => p.id)).toEqual(["chronova"]); });
 it("shows only Snake Apple in Games", () => { expect(filterProjects("Games").map(p => p.id)).toEqual(["snake-apple"]); });
 it("shows only two testing entries", () => { expect(filterProjects("Software Testing").map(p => p.id)).toEqual(["selenium", "manual-testing"]); });
 it("uses the supplied game destination", () => { expect(projects.find(p => p.id === "snake-apple")?.liveUrl).toBe("https://snakewith.netlify.app/"); });
 it("does not invent source code URLs", () => { expect(projects.some(p => p.githubUrl)).toBe(false); });
 it("hides unsafe and absent destinations", () => { expect(safeExternalUrl("javascript:alert(1)")).toBeUndefined(); expect(safeExternalUrl("http://example.com")).toBeUndefined(); expect(safeExternalUrl("")).toBeUndefined(); });
});
const valid = { name: "Visitor", email: "visitor@example.com", subject: "Opportunity", message: "Let's collaborate.", website: "" };
describe("Contact validation", () => {
 it("accepts a complete valid message", () => { expect(contactSchema.safeParse(valid).success).toBe(true); });
 it("requires a full name", () => { expect(contactSchema.safeParse({ ...valid, name: " " }).success).toBe(false); });
 it("requires a valid email", () => { expect(contactSchema.safeParse({ ...valid, email: "invalid" }).success).toBe(false); });
 it("requires a subject", () => { expect(contactSchema.safeParse({ ...valid, subject: "" }).success).toBe(false); });
 it("requires a message", () => { expect(contactSchema.safeParse({ ...valid, message: "" }).success).toBe(false); });
 it("rejects filled spam trap", () => { expect(contactSchema.safeParse({ ...valid, website: "bot.example" }).success).toBe(false); });
 it("rejects oversized messages", () => { expect(contactSchema.safeParse({ ...valid, message: "x".repeat(2001) }).success).toBe(false); });
});
describe("Identity", () => {
 it("shows the full name", () => { expect(profile.name).toBe("Vaishak T U"); expect(profile.shortName).toBe("Vaishak"); });
});
