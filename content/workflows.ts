import { model, read, sourced } from "@/lib/claims";
import type { WorkflowsInput } from "@/lib/schema/public";

/**
 * The workflows the seat would own. How NIL deals, clearinghouse review and
 * school procurement work is public; how ArcScore runs each stage is not
 * (the company is pre-launch), so every ArcScore-specific stage is an
 * outside-in read.
 */
export default [
  {
    id: "brand-deal",
    name: "Turn a brand's brief into a paid, cleared deal",
    jd: ["close", "revenue-model", "credibility"],
    oneLiner: read(
      "The money that matters most sits here: brand dollars are outside the schools' cap, and they are the scarce kind. Every stage is a chance for the brand to give up and go back to picking famous names by hand.",
      { sources: ["csc-jul-aug", "opendorse-report-2026"] },
    ),
    stages: [
      { id: "brief", name: "Brand brief", owner: "Growth lead", detail: read("Budget, audience, region, sport and timing. Most brands new to NIL arrive without a price in mind.") },
      { id: "shortlist", name: "Scored shortlist", owner: "Platform", detail: read("Athletes ranked on fit and value, each with a suggested price range.") },
      {
        id: "outreach",
        name: "Athlete outreach",
        owner: "Platform and athlete",
        detail: sourced("Offer sent, terms agreed. Brands moving on tournament moments keep rapid-response teams to activate within 24 to 48 hours.", "brands-march"),
      },
      {
        id: "disclose",
        name: "Clearinghouse review",
        owner: "Athlete and school",
        detail: sourced(
          "Deals worth $600 or more are reported to NIL Go. Deals with entities tied to a school must show a valid business purpose and pay within a range set by comparable athletes; from July 2026, most under $15,000 skip the range check.",
          ["opendorse-report-2026", "roc-update"],
        ),
      },
      { id: "activate", name: "Activation", owner: "Athlete", detail: read("Posts, appearances or content shoots. Most commercial deals are one-off.") },
      { id: "report", name: "Results report", owner: "Platform", detail: read("Reach, engagement and, where possible, sales. The report is what earns the second deal.") },
      { id: "renew", name: "Next campaign", owner: "Growth lead", detail: read("The brand books again, with more athletes or a bigger budget.") },
    ],
    links: [],
    leaks: [
      {
        id: "first-time-brands",
        at: "brief",
        severity: "high",
        what: sourced("76.1% of commercial NIL deals came from first-time deal senders.", "opendorse-report-2026"),
      },
      {
        id: "priced-out",
        at: "shortlist",
        severity: "high",
        what: read("A shortlist with no price leaves a first-time buyer guessing. Some overpay and don't come back; more stall and never send an offer."),
      },
      {
        id: "no-proof",
        at: "report",
        severity: "high",
        what: sourced(
          "Fewer than one in five adults recalled most of ten recent Division I NIL deals tested, or said they bought or felt better about a brand because of an athlete partner.",
          "nil-recall",
        ),
      },
    ],
    kpis: [
      { name: "Brief to signed deal, in days", why: "Brands buy moments; slow matching loses the moment." },
      { name: "Offers accepted at the suggested price", why: "Proves the price is one both sides believe." },
      { name: "Brands booking a second campaign", why: "The only proof the match worked." },
    ],
    firstMove: read(
      "Put a suggested price range on every shortlisted athlete, and send every brand a results report within two weeks of activation.",
    ),
  },
  {
    id: "school-sale",
    name: "Sell an athletic department and keep it",
    jd: ["close", "credibility"],
    oneLiner: read(
      "Schools have budget and a new problem, the cap, but they also have incumbents installed and slow procurement. The sale is won in the pilot and lost in procurement.",
      { sources: ["revshare-split", "teamworks-personnel"] },
    ),
    stages: [
      { id: "target", name: "Pick the school", owner: "Growth lead", detail: read("A program with a volleyball or women's basketball story, and an NIL lead who has to report results.") },
      { id: "demo", name: "Demo on their own roster", owner: "Growth lead", detail: read("Score their actual athletes before the meeting. A generic demo is easy to ignore.") },
      { id: "pilot", name: "Pilot", owner: "School NIL lead", detail: read("One or two teams, a fixed term and a success measure agreed up front.") },
      { id: "procure", name: "Procurement", owner: "School purchasing", detail: read("Public universities buy through purchasing rules, and their contracts can often be reached by records requests, so terms become visible to rivals.") },
      { id: "onboard", name: "Athlete onboarding", owner: "School and platform", detail: read("Athletes connect accounts and stats. Coverage decides whether the school sees value.") },
      { id: "renew", name: "Renewal", owner: "Growth lead", detail: read("Renewal rests on deals generated for athletes, not on logins.") },
    ],
    links: [],
    leaks: [
      {
        id: "pilot-stall",
        at: "pilot",
        severity: "high",
        what: read("Pilots without a success measure and an end date drift into free use and never convert. The common failure for early school software."),
      },
      {
        id: "incumbent",
        at: "demo",
        severity: "high",
        what: sourced(
          "Teamworks sells a general-manager tool for roster planning and total athlete earnings, and bought PFF's enterprise football data business in March 2026.",
          ["teamworks-personnel", "teamworks-pff"],
        ),
      },
      {
        id: "low-coverage",
        at: "onboard",
        severity: "medium",
        what: read("If only a fraction of the roster connects accounts, the school's view is incomplete and the product looks thin."),
      },
    ],
    kpis: [
      { name: "Pilots with a signed success measure", why: "Separates a real pilot from a free trial." },
      { name: "Pilot-to-paid conversion", why: "The number investors will ask for first." },
      { name: "Share of roster onboarded", why: "Leads the school's sense of value." },
    ],
    firstMove: read(
      "Write one pilot agreement and use it everywhere: two teams, one semester, a paid conversion price agreed on day one, and the success measure stated as brand dollars brought to athletes.",
    ),
  },
  {
    id: "athlete-supply",
    name: "Get athletes scored and keep them active",
    jd: ["supply"],
    oneLiner: read(
      "Brands and schools are only buying access to athletes. The supply side has to be built before either sale is easy, and today sign-up isn't open.",
      { sources: ["arc-get-started"] },
    ),
    stages: [
      { id: "signup", name: "Sign up", owner: "Athlete", detail: sourced("The site's sign-up page says sign-up is not yet available.", "arc-get-started") },
      { id: "connect", name: "Connect accounts and stats", owner: "Athlete", detail: read("Social handles plus performance data. Every missing input weakens the score.") },
      { id: "score", name: "Get the score", owner: "Platform", detail: sourced("The site promises each athlete their ArcScore and a read on their NIL potential.", "arc-site") },
      { id: "visible", name: "Visible to brands", owner: "Platform", detail: read("The profile goes into brand search and school dashboards.") },
      { id: "first-deal", name: "First deal", owner: "Athlete and brand", detail: read("The moment the athlete decides the platform is worth keeping.") },
      { id: "active", name: "Stays current", owner: "Athlete", detail: read("Stats and follower counts refresh each season; stale profiles mislead buyers.") },
    ],
    links: [],
    leaks: [
      {
        id: "score-no-deal",
        at: "first-deal",
        severity: "high",
        what: read("A score with no deal behind it is a vanity number. Athletes who see one and hear nothing from brands stop updating their profiles."),
      },
      {
        id: "small-audiences",
        at: "score",
        severity: "medium",
        what: sourced(
          "Few athletes have large followings: on Opendorse, 2.4% of women's volleyball players and 6.4% of football players have ten thousand or more.",
          "opendorse-report-2026",
        ),
      },
    ],
    kpis: [
      { name: "Scored athletes per sport", why: "The inventory brands search." },
      { name: "Athletes with a deal within ninety days", why: "The supply-side retention signal." },
    ],
    firstMove: read(
      "Recruit whole teams, not single athletes: two women's rosters at a pilot school, so a brand searching that school sees a full team on day one.",
    ),
  },
  {
    id: "score-trust",
    name: "Make the score something buyers trust",
    jd: ["credibility"],
    oneLiner: read(
      "The score is the product's claim. A buyer will ask what it predicts, how it was tested and why it differs from the numbers they already see.",
      { sources: ["on3-valuation-shift"] },
    ),
    stages: [
      { id: "inputs", name: "Inputs", owner: "Data team", detail: sourced("The clearinghouse compares deals on market reach, social media presence and on-field performance.", "roc-update") },
      { id: "value", name: "Score and dollar value", owner: "Data team", detail: read("One index for ranking, one dollar range for pricing.") },
      { id: "backtest", name: "Back-test", owner: "Data team", detail: read("Check the suggested range against deals that actually cleared, by sport and level.") },
      { id: "explain", name: "Explain it", owner: "Growth lead", detail: read("A one-page method note and an example athlete, shown in every sales meeting.") },
      { id: "used", name: "Used in a decision", owner: "Brand or school", detail: read("A brand budgets with it, or a school uses it to price a deal before submitting it.") },
    ],
    links: [{ from: "used", to: "backtest", label: "Outcomes feed back" }],
    leaks: [
      {
        id: "black-box",
        at: "explain",
        severity: "high",
        what: sourced(
          "Even the clearinghouse's own range moved: Georgia athletes' deals were out of range in March and in range after a model update in May.",
          "csc-georgia",
        ),
      },
      {
        id: "benchmark-shift",
        at: "value",
        severity: "medium",
        what: sourced("On3 moved its NIL Valuation from an algorithm-based model to a deal-based one reflecting current player contract value in July 2026.", "on3-valuation-shift"),
      },
    ],
    kpis: [
      { name: "Error against cleared deals", why: "The one number that makes the score defensible." },
      { name: "Deals priced with the score", why: "Whether buyers rely on it, not just view it." },
    ],
    firstMove: read(
      "Publish a short method note and a back-test against a sample of public deals before the next investor meeting. A score with a stated error rate beats a score with a nicer chart.",
    ),
  },
  {
    id: "raise",
    name: "Run the raise",
    jd: ["fundraise", "cadence"],
    oneLiner: read(
      "Pre-launch rounds are priced on the team and the story, and the next one on contracts. The raise is a sales pipeline with a data room attached.",
      { sources: ["out2win-seed", "teamworks-series-f"] },
    ),
    stages: [
      {
        id: "story",
        name: "Story",
        owner: "Founder",
        detail: sourced(
          "The why-now: the Senate-passed bill would lock the revenue-sharing model and the $600 reporting rule into federal law.",
          ["pcsa-analysis", "pcsa-senate"],
        ),
      },
      { id: "list", name: "Investor list", owner: "Growth lead", detail: read("Sports-tech funds, consumer-brand angels from the founder's network, and athletes as angels.") },
      { id: "meetings", name: "First meetings", owner: "Founder", detail: read("Tight sequencing so term conversations happen in the same few weeks.") },
      { id: "diligence", name: "Diligence", owner: "Growth lead", detail: read("Pipeline, pilots, the score's back-test, and the answer to 'why not Teamworks'.") },
      { id: "close", name: "Close", owner: "Founder", detail: read("Commitments signed and wired.") },
      { id: "update", name: "Monthly update", owner: "Growth lead", detail: read("The same metrics every month, to investors and to the next round's prospects.") },
    ],
    links: [{ from: "update", to: "list", label: "Warm the next round" }],
    leaks: [
      {
        id: "no-traction",
        at: "diligence",
        severity: "high",
        what: read("Without signed pilots, diligence becomes a debate about the market. One paid school and two repeat brands change the conversation."),
      },
      {
        id: "crowded-category",
        at: "meetings",
        severity: "medium",
        what: sourced("Investors will have seen athlete-score pitches before: Out2Win raised a seed for an athlete marketability score in 2025.", "out2win-seed"),
      },
      {
        id: "quiet-months",
        at: "update",
        severity: "medium",
        what: model(
          "Say a raise touches forty investors and closes eight. If the other thirty-two hear nothing for six months, the next round starts cold.",
          { note: "Invented numbers to show the mechanism, not ArcScore's." },
        ),
      },
    ],
    kpis: [
      { name: "Meetings to second meetings", why: "Whether the story lands." },
      { name: "Days from first meeting to commitment", why: "Momentum; long gaps kill rounds." },
    ],
    firstMove: read(
      "Build the data room and the monthly update template in week one, and lead every investor meeting with the regulatory 'why now' and the first pilot, not the product demo.",
    ),
  },
] satisfies WorkflowsInput;
