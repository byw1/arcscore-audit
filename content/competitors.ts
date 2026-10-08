import { read, sourced, stat } from "@/lib/claims";
import type { CompetitorsInput } from "@/lib/schema/public";

/**
 * The field, where each player sits, and where each is heading on the
 * evidence of their own public moves in the last twelve months. Positions on
 * the map are my placement (an outside-in read); the moves are sourced.
 */
export default {
  axes: {
    x: { label: "Who they sell to first", low: "Brands", high: "Schools" },
    y: { label: "What the value rests on", low: "Reach and engagement", high: "Performance and contracts" },
  },
  self: {
    now: { x: 50, y: 50 },
    heading: { x: 45, y: 55 },
    why: read(
      "The site pitches all three sides at once and says the score blends social and performance data. That puts ArcScore in the middle of both axes, which is either its edge or its problem. My read is that it should lean toward brands first, where the money is outside the school cap.",
      { sources: ["arc-site"] },
    ),
  },
  field: [
    {
      id: "teamworks",
      name: "Teamworks",
      domain: "teamworks.com",
      kind: "Athletic department operating system",
      tags: ["Incumbent", "Roster and cap tools", "Marketplace"],
      oneLiner: sourced(
        "Software most athletic departments already run, now including a general-manager tool for roster planning and athlete earnings, an NIL marketplace (formerly INFLCR) and payments.",
        ["teamworks-personnel"],
      ),
      now: { x: 92, y: 78 },
      heading: { x: 92, y: 92 },
      threat: "high",
      moves: [
        { date: "2026-01-15", fact: sourced("Acquired Sportlogiq, an AI sports analytics company, to feed player performance and value models.", "teamworks-sportlogiq") },
        { date: "2026-03-30", fact: sourced("Acquired PFF's enterprise business, the football data used across the NFL and college programs.", "teamworks-pff") },
        { date: "2026-07-08", fact: sourced("Murray State expanded to Teamworks' department-wide platform.", "teamworks-murray") },
      ],
      direction: read(
        "Buying the performance data, then the valuation models, then the cap tool, then the payment rail. A Teamworks athlete-value number inside its general-manager tool is a matter of when, not if.",
      ),
      threatRead: read(
        "The highest threat on the school side. It is already installed, already trusted, and now owns the football data a performance-based score would rely on.",
      ),
      response: read(
        "Don't fight Teamworks for the school's roster spreadsheet. Be the brand-value number Teamworks doesn't have, and offer it into their tools as data rather than as a rival system.",
      ),
      stats: [stat("$235M", sourced("Series F, June 2025, at a pre-money valuation above $1B", "teamworks-series-f"))],
    },
    {
      id: "dropback",
      name: "Dropback",
      domain: "dropback.com",
      kind: "Front-office software for college sports",
      tags: ["Y Combinator", "Roster value", "Cap scenarios"],
      oneLiner: sourced(
        "Front-office software that lets college general managers value athletes in dollars and model roster spend.",
        ["dropback-yc", "dropback-hudl"],
      ),
      now: { x: 88, y: 84 },
      heading: { x: 90, y: 92 },
      threat: "high",
      moves: [
        { date: "2026-03-03", fact: sourced("Data partnership with Sports Info Solutions, so valuation models built in Dropback start from its performance data.", "dropback-sis") },
        { date: "2026-08-20", fact: sourced("Hudl partnership: Hudl IQ data syncs into Dropback so GMs can value athletes in dollars and forecast roster spend.", "dropback-hudl") },
      ],
      direction: read("Stacking performance-data feeds behind a school-side valuation model. It is the closest product to ArcScore's school pitch."),
      threatRead: read(
        "High on the school side. A small team, but it has the data partners and the buyer (the GM) that ArcScore's roster-value pitch would also chase.",
      ),
      response: read(
        "Concede the pure performance model. Win on what Dropback doesn't measure: what a brand would pay for an athlete, which is the part of value that sits outside the cap.",
      ),
    },
    {
      id: "student-athlete-score",
      name: "Student Athlete Score",
      domain: "studentathletescore.com",
      kind: "Athlete marketing intelligence",
      tags: ["Schools", "Social data"],
      oneLiner: sourced(
        "Tracks athletes' social reach and brand activity so athletic departments can measure and benchmark their roster's marketing value.",
        ["sas-mason", "sas-fairfield"],
      ),
      now: { x: 72, y: 18 },
      heading: { x: 72, y: 28 },
      threat: "high",
      moves: [
        { date: "2025-10-01", fact: sourced("Michigan State partnership to support its NIL strategy.", "sas-msu") },
        { date: "2025-10-16", fact: sourced("Fairfield partnership, to track athlete marketing value.", "sas-fairfield") },
        { date: "2025-11-14", fact: sourced("George Mason partnership: social analytics, campaign tracking and benchmarking across the roster.", "sas-mason") },
      ],
      direction: read("Signing athletic departments one at a time with a social-data scorecard, and supplying deal data to the trade press."),
      threatRead: read(
        "The incumbent ArcScore would displace in an athletic department's NIL office. It already sells a marketability number to the same buyer.",
      ),
      response: read(
        "Differentiate on the dollar figure, not the dashboard: a value a brand can price a deal against and a school can defend to the clearinghouse.",
      ),
    },
    {
      id: "opendorse",
      name: "Opendorse",
      domain: "opendorse.com",
      kind: "NIL marketplace and payments",
      tags: ["Marketplace", "Retail media", "Compliance"],
      oneLiner: sourced(
        "The main marketplace and payment rail between athletes, schools and brands, now selling athlete content tied to retailer purchase data.",
        ["opendorse-one"],
      ),
      now: { x: 45, y: 25 },
      heading: { x: 28, y: 25 },
      threat: "high",
      moves: [
        { date: "2025-10-02", fact: sourced("Took over agreements and payment processing for collectives left behind when SANIL shut down.", "opendorse-sanil") },
        { date: "2026-04-09", fact: sourced("Heartland Collegiate Athletic Conference signed a conference-wide partnership.", "opendorse-heartland") },
        { date: "2026-06-19", fact: sourced("Launched a curated athlete tier tied to retail media networks including Walmart Connect, Roundel and Amazon Ads.", "opendorse-one") },
        { date: "2026-06-22", fact: sourced("Published its 2026 NIL report, putting the total market at $4.5B for 2026-27.", "opendorse-report-2026") },
      ],
      direction: read("Moving up-market to national brands, and selling measured sales outcomes rather than reach."),
      threatRead: read(
        "High on the brand side. It owns the rail most deals already run on and could add a value score whenever it wants one.",
      ),
      response: read(
        "Treat Opendorse as the rail, not the enemy: let deals close wherever they close, and make ArcScore the number brands use to decide which athletes to put on it.",
      ),
    },
    {
      id: "out2win",
      name: "Out2Win",
      domain: "out2win.com",
      kind: "Athlete marketability score",
      tags: ["Seed-stage", "Brands", "Schools"],
      oneLiner: sourced(
        "An athlete marketability score built from public social data, sold to brands and athletic departments.",
        ["out2win-seed"],
      ),
      now: { x: 42, y: 15 },
      heading: { x: 48, y: 20 },
      threat: "high",
      moves: [{ date: "2026-02-10", fact: sourced("Syracuse Athletics partnership for NIL education, athlete positioning and brand partnerships.", "out2win-syracuse") }],
      direction: read("Adding school deals to a brand-side score. The nearest thing to ArcScore's own thesis in the market."),
      threatRead: read(
        "High, because it is the comparison every investor and buyer will make first. It is small and seed-funded, so it is beatable.",
      ),
      response: read(
        "Have a one-line answer ready to 'how are you different from Out2Win': the blend of performance and social data, and a dollar value rather than an index.",
      ),
      stats: [stat("$1.3M", sourced("Seed round, March 2025", "out2win-seed"))],
    },
    {
      id: "on3",
      name: "On3",
      domain: "on3.com",
      kind: "Recruiting media and NIL valuations",
      tags: ["Media", "Public benchmark"],
      oneLiner: sourced(
        "A recruiting media network whose NIL Valuation is the number the press and fans quote for what an athlete is worth.",
        ["on3-valuation-shift"],
      ),
      now: { x: 55, y: 60 },
      heading: { x: 55, y: 88 },
      threat: "medium",
      moves: [
        {
          date: "2026-07-01",
          fact: sourced("Moved its NIL Valuation from an algorithm-based model to one based on reported player contracts.", "on3-valuation-shift"),
        },
      ],
      direction: read("Out of predicting value and into reporting confirmed contracts. That leaves the forward-looking appraisal without a well-known owner."),
      threatRead: read("Medium. It shapes the reference number everyone argues with, but it is a media business, not a tool schools or brands buy."),
      response: read("Position ArcScore as what an athlete could earn, against On3's record of what they did earn. Don't compete for headlines."),
    },
    {
      id: "nil-club",
      name: "NIL Club",
      domain: "nilclub.com",
      kind: "Athlete app and performance marketing",
      tags: ["Athletes", "Brands", "Conversions"],
      oneLiner: sourced("A free athlete app and a performance-marketing network for brands, priced on conversions.", "nilclub-newsroom"),
      now: { x: 10, y: 10 },
      heading: { x: 8, y: 8 },
      threat: "medium",
      moves: [
        { date: "2025-12-15", fact: sourced("Said it passed three million verified conversions in 2025.", "nilclub-newsroom") },
        { date: "2026-01-06", fact: sourced("Ran a Subway campaign through 174 athlete creators.", "nilclub-newsroom") },
      ],
      direction: read("Selling brands outcomes from many small athletes, without any value score at all."),
      threatRead: read("Medium on the brand side: it competes for the same marketing budget with conversion data instead of appraisal."),
      response: read("Learn from it: brands want proof of results, so every ArcScore match should report back what it delivered."),
    },
    {
      id: "learfield",
      name: "Learfield",
      domain: "learfield.com",
      kind: "Multimedia rights and NIL services",
      tags: ["Channel", "Local brands"],
      oneLiner: sourced(
        "Holds the sponsorship rights at many schools and runs on-campus NIL content days that connect its sponsors with athletes.",
        ["learfield-media-days"],
      ),
      now: { x: 60, y: 20 },
      heading: { x: 55, y: 22 },
      threat: "medium",
      moves: [
        { date: "2026-07-28", fact: sourced("Reported female athlete participation in its NIL programs up 123% year on year.", "learfield-women") },
        { date: "2026-08-19", fact: sourced("Began a run of fall NIL media days at partner schools, starting at Tennessee.", "learfield-media-days") },
      ],
      direction: read("Turning its sponsor relationships into NIL programs at its partner schools."),
      threatRead: read("Medium as a rival; higher as a gatekeeper. It already owns the local brand relationships ArcScore would want to reach."),
      response: read("Pitch Learfield as a channel: a score that helps its sponsors pick athletes is a product it can resell at every partner school."),
    },
  ],
  openings: [
    read(
      "Forward-looking value. On3 now reports contracts, and the school tools model performance. Nobody well known owns 'what a brand should pay this athlete next season'.",
      { sources: ["on3-valuation-shift", "dropback-hudl"] },
    ),
    read(
      "Money outside the cap. Most of the dollars the clearinghouse cleared in July and August came from entities tied to the schools. Real third-party brand money is the scarce thing, and matching it is the job.",
      { sources: ["csc-jul-aug"] },
    ),
    read(
      "Defensible pricing. The clearinghouse tests deals against a range of pay for comparable athletes, using reach, social presence and on-field performance. A score built on the same inputs can help a brand or a school price a deal that clears.",
      { sources: ["roc-update", "csc-georgia"] },
    ),
    read(
      "Volleyball and women's sports. Audiences and participation are growing faster than deal sizes, so the first platform to price these athletes well sets the market.",
      { sources: ["espn-volleyball", "learfield-women", "opendorse-report-2026"] },
    ),
  ],
} satisfies CompetitorsInput;
