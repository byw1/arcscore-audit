import type { ConfigInput } from "@/lib/schema/public";

/**
 * One audit, one company, one role. Everything company-specific lives in
 * content/; components never change between audits.
 *
 * ArcScore is pre-launch and has no public job posting. The "role" here is
 * the author's own role brief (content/jd.md, source "brief"): the growth
 * seat a company at this stage needs filled. It is not a company statement.
 */
export default {
  company: {
    name: "ArcScore",
    domain: "arcscore.ai",
  },
  role: {
    title: "Founding Head of Growth",
    team: "Founding team",
    location: "Remote (US)",
    jdUrl: "https://arcscore.ai/",
    jdSource: "brief",
  },
  author: {
    name: "William Lee",
    email: "william@bywilliaml.com",
    linkedin: "https://www.linkedin.com/in/bywilliaml",
  },
  researched: "2026-10",
  accent: "#2450ff", // ArcScore's own button blue; the site has no favicon to derive one from
  hero: {
    variant: "flywheel",
    orbits: ["Athletes", "Brands", "Schools"],
  },
  modules: {
    company: true,
    workflows: true,
    record: true,
    competitors: true,
    ideas: true,
    sources: true,
    fit: false,
  },
} satisfies ConfigInput;
