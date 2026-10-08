import { quote, read } from "@/lib/claims";
import type { RoleInput } from "@/lib/schema/public";

/**
 * The role. ArcScore has no public posting, so the lines below are quoted
 * from the author's own role brief (content/jd.md, source "brief"): the seat
 * a pre-launch, three-sided NIL platform needs filled. They describe the
 * work, not anything ArcScore has said.
 */
export default {
  summary: read(
    "The first commercial owner at a pre-launch company: closes the first schools and brands, builds the revenue model, keeps athlete supply flowing, and runs the raise with the founder. At this stage those are one job, because investors will price the round on the first contracts.",
    { sources: ["brief", "arc-get-started"] },
  ),

  responsibilities: [
    {
      id: "close",
      area: "First customers",
      jd: quote("Close the first paying schools and brands, and turn pilots into renewals.", "brief"),
    },
    {
      id: "revenue-model",
      area: "Revenue model",
      jd: quote("Build the revenue model: who pays, for what, and at what price, across schools, brands and athletes.", "brief"),
    },
    {
      id: "supply",
      area: "Athlete supply",
      jd: quote("Sign up athletes in the sports brands are buying, and keep their data current enough to score.", "brief"),
    },
    {
      id: "credibility",
      area: "Score credibility",
      jd: quote(
        "Make the ArcScore credible to buyers: show what it predicts, and how it fits the College Sports Commission's rules.",
        "brief",
      ),
    },
    {
      id: "fundraise",
      area: "Fundraising",
      jd: quote(
        "Run the fundraising process with the founder: the story, the metrics, the data room and the investor pipeline.",
        "brief",
      ),
    },
    {
      id: "cadence",
      area: "Operating cadence",
      jd: quote(
        "Set the operating cadence: weekly pipeline review, one metric owner per number, and a monthly investor update.",
        "brief",
      ),
    },
  ],

  requirements: [
    { id: "multi-sided", jd: quote("Has sold to more than one side of a marketplace, and knows a pilot is not a contract.", "brief") },
    { id: "build-from-scratch", jd: quote("Comfortable with a pipeline, a model and a data room, and building each from scratch.", "brief") },
    { id: "credible", jd: quote("Credible with athletic departments, brand marketers and investors in the same week.", "brief") },
    { id: "founder-speed", jd: quote("Works at founder speed with no team underneath, then hires the first one.", "brief") },
  ],

  placement: {
    reportsTo: {
      id: "founder",
      label: "Founder",
      person: "Maurice Cooper",
      note: read("The founder, a consumer-brand marketing executive, appears to be leading the company directly. The seat would report to the founder directly."),
    },
    role: {
      note: read("The single owner of revenue and the raise while the founder owns the vision, the brand relationships the founder brings, and the product."),
    },
    peers: [
      { id: "product-data", label: "Product and data", note: read("Whoever builds the score and the app. The site and a sign-in page exist, so someone is building; who is not public.") },
    ],
    reports: [
      { id: "athlete-ambassadors", label: "Campus ambassadors", note: read("Not a team yet. The first hire I'd make is a part-time network of athlete ambassadors in the sports I'd start with.") },
    ],
    upstream: [
      { id: "athletes", label: "Athletes", note: read("The supply side. Without enough scored athletes, there is nothing to sell to brands or schools.") },
      { id: "data", label: "Social and performance data", note: read("The inputs to the score. Who supplies them, and on what terms, decides how defensible it is.") },
    ],
    downstream: [
      { id: "brands", label: "Brands and agencies", note: read("Pay to find and contract athletes. The money here sits outside the schools' revenue-share cap.") },
      { id: "schools", label: "Athletic departments", note: read("Pay for roster-value and compliance insight, on longer procurement cycles.") },
      { id: "investors", label: "Investors", note: read("Fund the build. They will price the next round on contracts and usage, not on the score alone.") },
    ],
  },
} satisfies RoleInput;
