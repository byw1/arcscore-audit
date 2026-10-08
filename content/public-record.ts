import { quote, read, sourced } from "@/lib/claims";
import type { RecordInput } from "@/lib/schema/public";

/**
 * What ArcScore has said publicly, and what each statement implies for the
 * growth seat. The company is pre-launch: its record is its site, a
 * trademark application (its own description of what it will sell, filed
 * with the USPTO) and an SEC notice. Quotes are verbatim; `implies` is my read.
 */
export default {
  items: [
    {
      id: "positioning",
      date: "2026-10",
      kind: "post",
      title: "One promise to three audiences",
      theme: "Positioning",
      said: quote(
        "ArcScore empowers athletes, schools, and brands with AI-driven insights to maximize NIL opportunities and build authentic partnerships.",
        "arc-site",
      ),
      implies: read(
        "Three buyers in one sentence. The growth job is to pick which side pays first and sequence the other two behind it, rather than selling all three at once.",
      ),
    },
    {
      id: "athlete-promise",
      date: "2026-10",
      kind: "post",
      title: "For athletes: the score, then the brands",
      theme: "Athletes",
      said: quote(
        "Get your ArcScore, understand your NIL potential, and connect with brands looking for athletes like you.",
        "arc-site",
      ),
      implies: read(
        "The athlete promise only holds if brands are already on the other side. Supply and demand have to launch together, at least in one sport and one region.",
      ),
    },
    {
      id: "school-promise",
      date: "2026-10",
      kind: "post",
      title: "For schools: activity, compliance, potential",
      theme: "Schools",
      said: quote("Monitor athlete NIL activity, ensure compliance, and help your student-athletes maximize their potential.", "arc-site"),
      implies: read(
        "Compliance is the strongest word in that line. It's what athletic departments have budget and fear for, and what the clearinghouse made urgent.",
        { sources: ["csc-strain"] },
      ),
    },
    {
      id: "brand-promise",
      date: "2026-10",
      kind: "post",
      title: "For brands: data-driven matching",
      theme: "Brands",
      said: quote("Discover athletes who align with your brand values. Data-driven matching for authentic partnerships.", "arc-site"),
      implies: read(
        "Brands doing their first NIL deal need a price as much as a match. Adding a suggested price to every match is the cheapest way to make this promise different from a marketplace search.",
        { sources: ["opendorse-report-2026"] },
      ),
    },
    {
      id: "valuation-saas",
      date: "2025-12-21",
      kind: "filing",
      title: "Valuation and pricing, as software",
      theme: "Product",
      said: quote(
        "Software as a service (SAAS) services featuring software for valuation and pricing of name, image and likeness (NIL) rights in collegiate athletics",
        "trademark",
      ),
      implies: read(
        "Pricing is in the company's own description of its core product. That puts it squarely against the clearinghouse's range of compensation, so the score should be tested against cleared deals before buyers ask.",
        { sources: ["roc-update"] },
      ),
    },
    {
      id: "revenue-sharing",
      date: "2025-12-21",
      kind: "filing",
      title: "Revenue-sharing tools for athletic departments",
      theme: "Schools",
      said: quote("budget allocation and revenue sharing optimization for athletic departments", "trademark"),
      implies: read(
        "This is the market Teamworks and Dropback are building into hardest. Worth entering with a narrower wedge, the sports and the brand value those tools underweight, rather than head on.",
        { sources: ["teamworks-personnel", "dropback-hudl"] },
      ),
    },
    {
      id: "roi",
      date: "2025-12-21",
      kind: "filing",
      title: "ROI measurement for sponsors",
      theme: "Brands",
      said: quote("Return on Investment (ROI) measurement and attribution for sponsorship campaigns", "trademark"),
      implies: read(
        "The right instinct. Brand recall from NIL deals is weak, so the brand that can see what a deal returned is the brand that books a second one.",
        { sources: ["nil-recall"] },
      ),
    },
    {
      id: "decisioning",
      date: "2026",
      kind: "post",
      title: "A data and decisioning platform",
      theme: "Positioning",
      said: quote(
        "a data and decisioning platform transforming the economics of college sports in the NIL era",
        "bcp-bio",
      ),
      implies: read(
        "'Decisioning' is the investor-grade framing: ArcScore sells better decisions about money, not a social leaderboard. That framing should lead the deck and the sales pitch alike.",
      ),
    },
    {
      id: "safe-round",
      date: "2026-06-22",
      kind: "filing",
      title: "A SAFE round, opened in May",
      theme: "Capital",
      said: sourced(
        "ArcScore filed notice of a $4M SAFE offering with a first sale on May 6, 2026, reporting no revenue at the time.",
        "form-d",
      ),
      implies: read(
        "The round is being sold before revenue, on the team and the thesis. Every signed pilot between now and the close makes the rest of it easier to sell.",
      ),
    },
    {
      id: "not-yet-open",
      date: "2026-10",
      kind: "post",
      title: "Sign-up not yet available",
      theme: "Launch",
      said: sourced(
        "The sign-up page says sign-up is not yet available and points visitors back to the landing page.",
        "arc-get-started",
      ),
      implies: read(
        "Launch is the next milestone. The audit's bias: launch narrow (one sport, a few schools, a handful of brands) and fully, rather than wide and thin.",
      ),
    },
  ],
  hiring: [],
} satisfies RecordInput;
