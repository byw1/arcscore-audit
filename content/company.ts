import { read, sourced, stat } from "@/lib/claims";
import type { CompanyInput } from "@/lib/schema/public";

/**
 * ArcScore: what it is, how it plans to make money, the numbers that matter,
 * and the thesis in two minutes. The company is pre-launch, so its own public
 * record is a website, an SEC notice and a trademark application. The market
 * around it is well documented.
 */
export default {
  oneLiner: sourced(
    "A pre-launch platform that gives college athletes an NIL value score and connects them with the brands and schools that pay them.",
    ["arc-site", "trademark"],
  ),
  model: sourced(
    "It plans to sell software and data: NIL valuation and pricing tools, revenue-sharing tools for athletic departments, and campaign planning and return-on-investment measurement for brands and agencies.",
    "trademark",
  ),

  stats: [
    stat("$4M", sourced("SAFE round offered, per the company's SEC notice of June 2026", "form-d")),
    stat("$21.3M", sourced("Most a school can share directly with its athletes in 2026-27, the cap under the House settlement", "cap-2026")),
    stat("$4.5B", sourced("Opendorse's estimate of total NIL spend in 2026-27", "opendorse-report-2026")),
    stat("$188.6M", sourced("Of the $227M+ in NIL deals cleared in July and August 2026, the part with entities tied to the schools", "csc-jul-aug")),
  ],

  thesis: {
    headline: "Price the money that sits outside the cap.",
    points: [
      {
        title: "Fair value became a compliance question",
        fact: read(
          "Since mid-2025, deals worth $600 or more are checked against what comparable athletes earn, on reach, social presence and on-field performance. Those are ArcScore's own inputs. A defensible appraisal now has a regulator's reason to exist, and the Senate has voted to put the system into federal law.",
          { sources: ["roc-update", "csc-georgia", "pcsa-senate", "trademark"] },
        ),
      },
      {
        title: "Start with brands, where the scarce money is",
        fact: read(
          "Schools' own money is capped and mostly committed to football and men's basketball. Most cleared deal dollars come from entities tied to the schools, and most commercial deals come from brands doing their first one. Those brands need someone to tell them who to sign and what to pay. A founder who ran marketing at Target, Wingstop and Bath & Body Works has been that buyer.",
          { sources: ["house-settlement", "csc-jul-aug", "opendorse-report-2026", "revshare-split", "target-svp", "bbw-cco"] },
        ),
      },
      {
        title: "Enter schools as data, not as another system",
        fact: read(
          "Teamworks and Dropback are building roster and cap tools on bought performance data, and Student Athlete Score already sells social scorecards to athletic departments. ArcScore wins schools by pricing what those tools don't: brand value, and the sports they underweight, like volleyball.",
          { sources: ["teamworks-pff", "dropback-hudl", "sas-mason", "espn-volleyball"] },
        ),
      },
    ],
  },

  overview: [
    sourced(
      "ArcScore, Inc. is a Delaware corporation formed in 2025 and based in Studio City, California. Its SEC notice reports no revenue.",
      "form-d",
    ),
    sourced(
      "The site speaks to three audiences. Athletes get their score and connect with brands. Schools monitor NIL activity and compliance. Brands find athletes who fit their values through data-driven matching.",
      "arc-site",
    ),
    sourced("Sign-up is not open yet, a sign-in page exists for the app, and the help centre lists API documentation as coming soon.", [
      "arc-get-started",
      "arc-help",
    ]),
    read(
      "This is a company at the end of building and the start of selling. The next six months decide whether the score becomes a product people pay for or a feature someone else ships.",
    ),
  ],

  timeline: [
    { date: "2025", title: "Incorporated in Delaware", fact: sourced("ArcScore, Inc. is formed.", "form-d") },
    { date: "2025-10-14", title: "Domain registered", fact: sourced("arcscore.ai is registered.", "domain") },
    { date: "2025-12-21", title: "Trademark filed", fact: sourced("An intent-to-use application for ARCSCORE covers NIL valuation software, data and analytics services.", "trademark") },
    { date: "2026-03", title: "Founder on the circuit", fact: sourced("Maurice Cooper is listed as CEO of ArcScore among attendees of The Outcome Summit.", "outcome-summit") },
    { date: "2026-05-06", title: "First SAFE sale", fact: sourced("The first sale in the company's SAFE offering.", "form-d") },
    { date: "2026-06-22", title: "SEC notice filed", fact: sourced("A Form D for a $4M SAFE offering under Rule 506(b).", "form-d") },
    { date: "2026-10", title: "Site live, sign-up pending", fact: sourced("The public site is up; sign-up is marked as not yet available.", "arc-get-started") },
  ],

  funding: [
    {
      date: "2026-06",
      round: "SAFE",
      amount: stat("$4M", sourced("Offering size", "form-d")),
      fact: sourced(
        "At filing, $360,083 had been sold to eight investors, with a $50,000 minimum investment and no sales commissions paid. The amount sold will have moved since.",
        "form-d",
      ),
    },
  ],

  leadership: [
    {
      name: "Maurice Cooper",
      title: "Founder, President & CEO",
      fact: sourced(
        "Previously Chief Customer Officer at Bath & Body Works (from 2023), SVP of Marketing at Target (from 2020), and CMO, then Chief Growth & Experience Officer, at Wingstop (2018–2019). Earlier at Coca-Cola and IHG.",
        ["form-d", "bcp-bio", "bbw-cco", "target-svp", "wingstop-cmo", "wingstop-cgo"],
      ),
      linkedin: "https://www.linkedin.com/in/maurice-cooper-016661/",
    },
    { name: "Joshua DuBois", title: "Co-founder", fact: sourced("Named as a co-founder in the company's SEC notice.", "form-d") },
    { name: "Errol Williams", title: "Treasurer & CFO", fact: sourced("Named as an executive officer in the company's SEC notice.", "form-d") },
  ],

  businessModel: [
    sourced(
      "For schools: software for budget allocation and revenue-sharing optimisation, plus compliance tools for NIL rules.",
      "trademark",
    ),
    sourced(
      "For brands and agencies: advertising investment planning for sports endorsements, with return-on-investment measurement and attribution.",
      "trademark",
    ),
    sourced("For everyone: valuation and pricing of NIL rights, fee calculators, and APIs for athlete performance data, social metrics and valuation scores.", "trademark"),
    read(
      "The filing lists everything a platform could sell. The early question is which one side pays first. Athletes are the supply, and making them pay would slow the supply down.",
    ),
  ],

  revenueLines: [
    { name: "School software", what: sourced("Revenue-sharing, budget and compliance tools for athletic departments.", "trademark") },
    { name: "Brand planning and matching", what: sourced("Investment planning and ROI measurement for brands and agencies.", "trademark") },
    { name: "Data and API access", what: sourced("Valuation scores and athlete data delivered through APIs.", ["trademark", "arc-help"]) },
  ],
} satisfies CompanyInput;
