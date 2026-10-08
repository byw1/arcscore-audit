# Fact-check pass

- **Date:** 2026-10-08
- **Checked:** every claim in `content/` against its source (primary PDFs, the SEC Form D, the USPTO record and the registry RDAP record read in full).
- **Totals (public content):** 3 BLOCKER, 22 FIX, 12 NOTE. Every BLOCKER and FIX is resolved below.

## Changed or cut

| Rating | Where | Original | Now | Why |
| --- | --- | --- | --- | --- |
| BLOCKER | workflows › school-sale › procure | Sourced: school software contracts are public records | Unsourced read on records requests | The cited article doesn't cover software contracts |
| BLOCKER | company › thesis 1 | "deals worth $600 or more are checked against what comparable athletes earn" | Only deals tied to a school face the range check, which is built from comparable athletes' outside deals | Unaffiliated brand deals get minimal review; most associated deals under $15,000 skip the range check from July 2026 |
| BLOCKER | jd.md, role, workflows, ideas | Named sports and "focus sports" | "The sports brands are buying" / "the sports I'd start with" / women's sports as the author's recommendation | No public source names ArcScore's sports |
| FIX | workflows › brand-deal › disclose | NIL Go checks every deal over $600 for range | Reported over $600; range check for school-tied deals, most under $15,000 exempt from July 2026 | Same as thesis 1 |
| FIX | workflows › brand-deal | "Not cleared: reprice" loop, priced-out leak at review, "cleared on first review" KPI | Loop removed; leak moved to the unpriced shortlist (read); KPI is offers accepted at the suggested price | The range check doesn't apply to unaffiliated brands |
| FIX | workflows › raise › story; thesis 1 | Bill would write "the clearinghouse" into law | "Revenue-sharing model and the $600 reporting rule" | Source doesn't say the bill codifies the clearinghouse |
| FIX | company › leadership | Wingstop "(2018–2019)" | "(from 2018)" | Cited sources give no end date |
| FIX | company › oneLiner | "connects them with the brands and schools that pay them" | Connects them with brands; monitoring and compliance tools for schools | Site doesn't say schools pay athletes through it |
| FIX | competitors › Teamworks | "most athletic departments", "(formerly INFLCR)" | "more than 240 Division I programs", "Influencer" | Source wording |
| FIX | competitors › Opendorse | "The main marketplace and payment rail" | "An NIL technology platform" | Source doesn't say "main" |
| FIX | competitors › Opendorse move | Heartland "conference-wide partnership" | NIL consulting and education for its leadership | Source wording |
| FIX | competitors › Out2Win | "built from public social data" | Social metrics, NIL performance and brand spending data | Source wording |
| FIX | competitors › NIL Club | "free athlete app… priced on conversions" | "A performance-marketing platform for brands working with college athletes" | Cited page supports only this |
| FIX | competitors › On3; workflows › score-trust | "the number the press and fans quote", "best-known", "reported contracts" | Plain description; "deal-based model reflecting current player contract value" | Interpretation moved to reads |
| FIX | competitors › self | "the site says the score blends social and performance data" | Trademark filing lists performance data and social metrics | Re-sourced |
| FIX | public record, company overview | Site quotes for schools, brands and meta description | Kept; source note records they were read word for word from the page head and JS bundle | Verified on 2026-10-08 |
| FIX | workflows › first-time-brands | "…so most buyers don't know what to pay" | "76.1% of commercial NIL deals came from first-time deal senders" | Interpretation moved to its own read |
| FIX | ideas › wedge; competitors › openings | "volleyball rosters grew", "audiences growing faster than prices", "beauty and food" | Up to eighteen roster spots vs twelve scholarships; growth claims cut; "beauty and fashion"; idea reframed as women's sports | Unsupported comparisons |
| FIX | competitors › Learfield move | "up 123% year on year" | "up 123% over its 2025-26 fiscal year" | Source wording |
| FIX | workflows › priced-out leak | Rejected deals "much larger on average" (sourced) | Replaced by a read about unpriced shortlists | Averages were derived, not stated |
| FIX | workflows › incumbent leak | "The incumbent… a roster-value score would use" | The GM tool and the PFF acquisition, stated plainly | Interpretation removed |
| FIX | sources › titles | Paraphrased headlines | Real headlines; figure-bearing headlines quoted in notes | Titles can't carry figures |
| FIX | sources › domain | rdap.org URL (403) | Registry RDAP URL | Reachable source |
| FIX | sources › revshare-total | Forbes, cited for scale | Cut | Unreachable; figure reported elsewhere as $1.77B |
| FIX | company › stats | $21.3M cap sourced to On3 only | Adds Opendorse, which names the season | Season wasn't in the first source |
| FIX | public record › decisioning | Quote with no speaker | Speaker: Bellarmine event biography | Not the company's own words |

Also changed, from the reviewer's notes: Sportlogiq is "hockey-analytics"; the Murray State move is "began rolling out across its department"; the Learfield media days are dated July 2026; Opendorse's launch is named Athlete Commerce Media and "Amazon Advertising"; follower shares are 2.4% (women's volleyball) and 6.4% (football), on Opendorse; the recall stat says "ten recent Division I deals tested"; the outreach stage cites the 24–48 hour activation window; the sign-in claim cites the site; the funding hedge moved to the source note; the ESPN date is 2025-12-05; Student Athlete Score's card now says it already sells valuation tools; and two lines that read as flattery were made neutral.

## Notes left as they are

- The Michigan State (Student Athlete Score) and SANIL (Opendorse) moves sit at the edge of the twelve-month window; later moves for both carry the direction of travel.
- `teamworks-murray`, `out2win-syracuse` and `sas-msu` pages didn't render for the checker; search copies of the same releases support the claims.
