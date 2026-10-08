import { read } from "@/lib/claims";
import type { IdeasInput } from "@/lib/schema/public";

/**
 * What I'd do. Every initiative traces to a workflow leak, something the
 * company said publicly, or a competitor's move. Impact and effort are my
 * estimates, from the outside, for a company that hasn't launched yet.
 */
export default {
  items: [
    {
      id: "brand-design-partners",
      title: "Brand design partners from the founder's network",
      summary: read(
        "Sign a small group of consumer brands as paying design partners before launch: restaurants, beauty and retail, the categories the founder has run marketing in and that already buy NIL. Each gets matched athletes, a suggested price and a results report.",
        { sources: ["brands-march", "brands-women", "bbw-cco", "wingstop-cgo"] },
      ),
      impact: 5,
      effort: 3,
      traces: ["leak:brand-deal/first-time-brands", "record:brand-promise", "competitor:opendorse"],
      measure: "Paid brand partners signed before launch, and how many book a second campaign",
    },
    {
      id: "price-every-match",
      title: "A suggested price on every match",
      summary: read(
        "Show a dollar range next to every athlete a brand sees, built from the same inputs the clearinghouse uses: reach, social presence and performance. It answers the first question a first-time buyer has, and it makes deals more likely to clear.",
        { sources: ["roc-update", "opendorse-report-2026"] },
      ),
      impact: 5,
      effort: 3,
      traces: ["leak:brand-deal/priced-out", "record:valuation-saas", "competitor:out2win"],
      measure: "Share of ArcScore-priced deals cleared on first review",
    },
    {
      id: "published-backtest",
      title: "Publish the method and a back-test",
      summary: read(
        "A short public note on what the score measures and how far its price range sits from deals that actually cleared, by sport. It turns 'trust our AI' into a number buyers and investors can check.",
        { sources: ["csc-georgia", "on3-valuation-shift"] },
      ),
      impact: 4,
      effort: 2,
      traces: ["leak:score-trust/black-box", "competitor:on3", "record:decisioning"],
      measure: "Median error against cleared deals, by sport",
    },
    {
      id: "results-report",
      title: "A results report after every deal",
      summary: read(
        "Two weeks after activation, every brand gets reach, engagement and cost per result, set against the price it paid. It is the trademark's ROI promise in its simplest form, and it is what NIL Club sells brands instead of a score.",
        { sources: ["trademark", "nilclub-newsroom"] },
      ),
      impact: 4,
      effort: 2,
      traces: ["leak:brand-deal/no-proof", "record:roi", "competitor:nil-club"],
      measure: "Brands booking a second campaign within ninety days",
    },
    {
      id: "volleyball-wedge",
      title: "Win volleyball and women's basketball first",
      summary: read(
        "Recruit whole volleyball and women's basketball rosters at a few pilot schools; volleyball rosters grew under the settlement. Audiences are growing faster than prices, the big school tools are built around football, and brands in beauty and food already sign these athletes.",
        { sources: ["espn-volleyball", "learfield-women", "brands-women", "opendorse-report-2026", "roster-limits"] },
      ),
      impact: 4,
      effort: 3,
      traces: ["leak:athlete-supply/small-audiences", "leak:athlete-supply/score-no-deal", "competitor:dropback"],
      measure: "Scored athletes per focus team, and share with a deal within a season",
    },
    {
      id: "standard-pilot",
      title: "One school pilot, written once",
      summary: read(
        "A standard pilot: two teams, one semester, a conversion price agreed on day one, and success defined as brand dollars brought to athletes. Every school gets the same paper, so pilots end in a decision.",
      ),
      impact: 4,
      effort: 1,
      traces: ["leak:school-sale/pilot-stall", "competitor:student-athlete-score"],
      measure: "Pilot-to-paid conversion",
    },
    {
      id: "data-into-incumbents",
      title: "Sell the score into the incumbents' tools",
      summary: read(
        "Offer ArcScore's brand-value number as data inside the systems schools already use, and to the rights holders that run school sponsorship, rather than asking an athletic department to adopt one more system.",
        { sources: ["teamworks-personnel", "learfield-media-days", "arc-help"] },
      ),
      impact: 4,
      effort: 4,
      traces: ["leak:school-sale/incumbent", "competitor:teamworks", "competitor:learfield"],
      measure: "Distribution or data agreements signed with platforms and rights holders",
    },
    {
      id: "raise-machine",
      title: "Run the raise like a pipeline",
      summary: read(
        "A data room, a monthly update and an investor CRM from week one. Lead with the regulatory 'why now' and the first paid pilots; keep every investor who passed warm for the next round.",
        { sources: ["form-d", "pcsa-senate"] },
      ),
      impact: 5,
      effort: 2,
      traces: ["leak:raise/no-traction", "leak:raise/quiet-months", "record:safe-round"],
      measure: "Commitments closed against the round, and days from first meeting to commitment",
    },
  ],
  plan: [
    {
      window: "30",
      title: "Learn, and set up the machine",
      goal: "Know which side pays first, and have the raise and the pipeline instrumented.",
      actions: [
        "Interview brand marketers and athletic department NIL leads; pick the first paying side on evidence.",
        "Build the data room, the monthly investor update and one pipeline for brands, schools and investors.",
        "Write the standard school pilot and the brand design-partner offer.",
        "Back-test the score against a sample of public cleared deals.",
      ],
      ideas: ["raise-machine", "standard-pilot", "published-backtest"],
    },
    {
      window: "60",
      title: "Close the first customers",
      goal: "Paying brand design partners and signed school pilots in the focus sports.",
      actions: [
        "Sign the first brand design partners from the founder's network.",
        "Put a suggested price on every match in the product.",
        "Recruit whole volleyball and women's basketball rosters at the pilot schools.",
      ],
      ideas: ["brand-design-partners", "price-every-match", "volleyball-wedge"],
    },
    {
      window: "90",
      title: "Prove it and scale it",
      goal: "Turn the first deals into renewals, a results story and distribution.",
      actions: [
        "Send a results report after every activation and ask for the second campaign.",
        "Open data conversations with the platforms and rights holders schools already use.",
        "Close the round on contracts and renewals, not on the demo.",
      ],
      ideas: ["results-report", "data-into-incumbents"],
    },
  ],
} satisfies IdeasInput;
