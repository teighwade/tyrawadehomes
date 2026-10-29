# tyrawadehomes.com: content brief (read fully before writing)

One website that combines Teigh Wade's three sites (tyrawadehomes.com, teighwadehomes.com/rrealt.com, and tyrawade.com/teighwade.com). Real estate is the main focus. Mobile notary is second. Wedding officiant and the "More than a Realtor" wellness/other services are brief. Goal: SEO and AEO, meaning pages that answer real questions directly and that search engines and AI answer engines can quote.

## Verified facts (use exactly; never invent others)
- Name: **Teigh Wade**, REALTOR®. Licensed name with the Arizona Department of Real Estate (ADRE): Teigh Wade, salesperson license **SA709148000**, Active. Also known as Tyra Wade / Tyra Woods-Wade ("T", "The Real T"). Use "Teigh Wade" everywhere; the site mentions "Tyra" only on the About page.
- Brokerage: **HomeSmart**, the employing broker per ADRE (Phoenix, 85012). Team/brand: **HomeSmart Elite Group**. When naming the brokerage in text, write "HomeSmart Elite Group, HomeSmart" or "with HomeSmart". The site footer adds the legal disclosure, so you don't have to.
- Real estate phone (call or text): **480-550-2871**. Email: **tyrawadehomes@gmail.com**.
- Notary line: **833-363-7244** (833-EnerCHI). Notary appointments: by appointment, Monday–Sunday. Office by appointment: 17505 N 79th Ave, Suite 206, Glendale, AZ 85308.
- Arizona native: born in Phoenix and lived mostly in the West Valley. Lives in Surprise, AZ, and works all over the Valley. Has wanted to work in real estate since the early 2000s.
- Real estate services: listing agent (pricing strategy, listing preparation, staging tips, marketing, showings, negotiation through closing) and buyer's agent (pre-approval referrals, home tours, offers, negotiation, inspections, closing). Mobile buyer's and listing consultations: she comes to you. She has a strong referral network (lenders for pre-approval, title companies, inspectors, and so on). She does not set or promise rates.
- Mission (her words, quote as is): "“Getting The Sale” is NOT my mission. Helping people navigate through every process of Real Estate is."
- Taglines: "More Than Just a Realtor". "With me, you get THE Real T!"
- Service areas: Surprise, Waddell, Wickenburg, Phoenix and the greater West Valley (Glendale, Peoria, Sun City, Sun City West, El Mirage, Goodyear, Buckeye, Litchfield Park), with buyer and listing representation throughout Arizona.
- Home search: an IDX Broker property search with live MLS listings. Her own active, pending and sold listings show on /my-listings/ and update automatically. Link to /search/ for "search homes" and to /my-listings/ for her listings.
- Notary facts:
  - Notary public serving the Surprise area since 2010.
  - Completed the NNA (National Notary Association) certified signing agent program, with mortgage/loan document experience.
  - Statewide service.
  - Services: mobile notary, loan signings and closings, mobile fingerprinting, processing papers, translation services. She holds an FBI background clearance card.
  - Short-notice, last-minute and emergency appointments welcome, 24 hours a day, 7 days a week. She travels to your home, office, hospital, care facility, or a public place.
- Notary fees (Arizona law, verified):
  - Arizona caps notary fees at **$10 per notarial act / per signature** (Ariz. Admin. Code R2-12-1102). Travel fees are separate and agreed before the appointment.
  - Her standard: "Most services are $25 ($10 notary fee plus a travel fee that is usually $15)."
  - Loan signing rates vary; call for a quote.
- Notary document types: real estate forms; business documents (contracts, corporate, employment, financial); medical documents (living wills, powers of attorney, healthcare directives); family documents (adoption, divorce, domestic partnership, wills); motor vehicle documents; acknowledgments, authorizations, jurats, oaths, passport-related documents, documents for people in jail.
- Certified wedding officiant. She can also notarize divorce paperwork.
- Other licenses and services:
  - Licensed Massage Therapist.
  - Licensed Insurance Producer (Arizona).
  - Reiki Master/Teacher; certified master practitioner in several wellness modalities.
  - Hypnotherapist through EnerCHI (https://enerchi.me/, 833-EnerCHI).
  - Web design through Visibly Online (480-369-1683).
  - Keep these short and link out. They are "More than a Realtor" background, not the focus.
- Personal: three dogs (Monsieur Olie', Paris and ChiChi) and a rat named Templeton. Loves meeting people and watching them succeed.
- Social: Facebook (RealtywithRrealT), Instagram (2023realt), YouTube and X (TheRealTRealty), LinkedIn, Google reviews.

## Legal and honesty rules (very important)
- **Fair Housing:**
  - Describe property, places and amenities, never people. Never say or imply who an area is "good for" or "ideal for": families, singles, retirees, young professionals, religion, race, national origin, disability and so on.
  - Never say "safe", "low crime", "good neighborhood", "family-friendly", "exclusive", "great schools", "walking distance to church", or "master bedroom" (say primary bedroom).
  - You may state factual things: "Sun City West is an age-restricted (55+) community", "the area is served by the Dysart Unified School District" (only if verified), "homes built in the 1990s", distance to a freeway.
- **No invented numbers.**
  - No median prices, days on market, appreciation, sales counts, "X homes sold", "top 1%", awards, reviews, testimonials, or client stories.
  - For prices, say values vary by home and market and invite a call for a comparative market analysis (CMA).
  - Never promise a sale price, timeline, or that a home will sell.
- **No legal, tax or lending advice.** Notaries can't give legal advice or choose a document type for someone; say so on notary pages. Real estate: suggest people talk to a lender, attorney or tax professional where appropriate.
- Verify facts with web search before stating them (city facts, school district names, freeways, landmarks, programs). If unsure, leave it out. Don't copy text from other websites.
- Use REALTOR® correctly: all caps with ®, used as a title, not as a verb or generic noun.
- Don't use "free" for notary services (fees apply). For real estate, "no-obligation consultation" is fine.

## Voice
Warm, confident, plain English, a little personality (she's "THE Real T"). Short paragraphs, answer-first, sentence-case headings, active voice, "I" in Teigh's voice on about/service pages and neutral or "Teigh" on guides and area pages. No clichés ("look no further", "dream home" no more than once per page, "nestled", "in today's market").

## Page JSON format (one file per page)
```
{
  "path": "/sell-your-home/",
  "title": "H1 text",
  "seoTitle": "50–62 chars ending with | Teigh Wade REALTOR®",
  "description": "140–158 chars",
  "eyebrow": "short label",
  "summary": "40–60 word direct answer to the page's main question (AEO snippet)",
  "sections": [ { "h2": "...", "html": "<p>...</p>" } ],
  "faqs": [ { "q": "Question?", "a": "40–90 words, first sentence answers directly" } ],
  "related": ["/buy-a-home/", "/contact/"]
}
```
Allowed HTML in `html`: `<p> <ul> <ol> <li> <strong> <em> <h3>` and `<a href="/internal-path/">` linking only to the real site paths below. Escape & as &amp;.

## Site paths (internal links may use only these)
/ /about/ /contact/ /search/ /my-listings/ /sell-your-home/ /whats-my-home-worth/ /buy-a-home/ /first-time-home-buyers/ /areas/ /areas/surprise/ /areas/waddell/ /areas/wickenburg/ /areas/glendale/ /areas/peoria/ /areas/sun-city/ /areas/sun-city-west/ /areas/el-mirage/ /areas/goodyear/ /areas/buckeye/ /areas/litchfield-park/ /areas/phoenix/ /guides/ /guides/home-selling-checklist/ /guides/arizona-home-buying-process/ /guides/buying-in-a-55-plus-community/ /guides/moving-to-the-west-valley/ /mobile-notary/ /loan-signing-agent/ /fingerprinting-and-more/ /wedding-officiant/ /more-than-a-realtor/ /faq/
