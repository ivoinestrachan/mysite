import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";

const Memo: NextPage = () => {
  return (
    <div className="max-w-5xl mx-auto bg-white">
      <Head>
        <title>Investment Memo - dberi | Ivoine Strachan</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="w-full px-6 md:px-12 py-8 mb-20">
        {/* Back button */}
        <Link href="/" className="inline-flex items-center gap-2 font-mono text-[13px] text-gray-600 hover:text-gray-900 mb-8 transition-colors">
          ← back
        </Link>

        {/* Title */}
        <h1 className="font-bold text-[28px] mb-6 text-gray-900">Investment memo - dberi</h1>

        {/* Basic Info Table */}
        <div className="mb-8 overflow-x-auto border border-gray-300">
          <table className="w-full text-[14px] border-collapse">
            <tbody>
              <tr className="border-b border-gray-300">
                <td className="py-3 px-4 font-semibold bg-gray-50 w-1/4">Founder(s)</td>
                <td className="py-3 px-4 w-1/4">Ivoine Strachan</td>
                <td className="py-3 px-4 font-semibold bg-gray-50 w-1/4">Website</td>
                <td className="py-3 px-4 w-1/4">N/A</td>
              </tr>
              <tr className="border-b border-gray-300">
                <td className="py-3 px-4 font-semibold bg-gray-50">Stage</td>
                <td className="py-3 px-4">Pre-seed</td>
                <td className="py-3 px-4 font-semibold bg-gray-50">Round size</td>
                <td className="py-3 px-4">TBC</td>
              </tr>
              <tr className="border-b border-gray-300">
                <td className="py-3 px-4 font-semibold bg-gray-50">Raising</td>
                <td className="py-3 px-4">$1,500,000</td>
                <td className="py-3 px-4 font-semibold bg-gray-50">Valuation (post)</td>
                <td className="py-3 px-4">TBC</td>
              </tr>
              <tr className="border-b border-gray-300">
                <td className="py-3 px-4 font-semibold bg-gray-50">Investment</td>
                <td className="py-3 px-4">TBC</td>
                <td className="py-3 px-4 font-semibold bg-gray-50">Domicile</td>
                <td className="py-3 px-4">The Bahamas</td>
              </tr>
              <tr>
                <td className="py-3 px-4 font-semibold bg-gray-50">Operating Jurisdictions</td>
                <td className="py-3 px-4" colSpan={3}>The Bahamas, expanding to wider Caribbean</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Summary */}
        <section className="mb-10">
          <h2 className="font-bold text-[22px] mb-4 text-gray-900">Summary</h2>
          <p className="text-[15px] leading-[1.7] text-gray-800 mb-4 text-justify">
            Tourism is the backbone of the Caribbean economy. In The Bahamas, it drives over 50% of GDP. Yet the financial infrastructure serving this economy is broken: tourists overpay on FX, local merchants haemorrhage 3–5% on every card transaction, and cross-border remittances cost 8–10%. The infrastructure failure runs deeper than fees. ATMs across Nassau regularly sit broken for days — locals report hitting two or three branches on a regular weekday and still finding none working. Bank servers go down on Friday evenings, leaving merchants unable to accept cards at peak trading hours. The result: Bahamians are forced to keep emergency cash at home because they cannot rely on the system. Tourists arrive to the same chaos.
          </p>
          <p className="text-[15px] leading-[1.7] text-gray-800 text-justify">
            dberi is the payments and remittance platform built to fix this, enabling seamless, low-cost payment acceptance for local merchants, drastically reducing cross-border transaction fees, and connecting the tourist dollar directly to the local economy. This is the starting point for a much larger mission: building the foundational financial infrastructure for high-tourism, cash-heavy economies that global payment giants have ignored.
          </p>
        </section>

        {/* Investment Thesis */}
        <section className="mb-10">
          <h2 className="font-bold text-[22px] mb-4 text-gray-900">Investment Thesis</h2>

          <h3 className="font-bold text-[18px] mb-3 text-gray-900">The Shape of the Bet</h3>
          <p className="text-[15px] leading-[1.7] text-gray-800 mb-4 text-justify">
            <strong>Vision and Scale:</strong> dberi&apos;s vision is to become the dominant payments infrastructure layer for the Caribbean tourism economy, enabling frictionless transactions between the 35+ million annual tourists and local merchants. This targets a market plagued by high card fees (3–5%), high remittance costs (averaging 8–10%), and limited digital access for small merchants.
          </p>
          <p className="text-[15px] leading-[1.7] text-gray-800 mb-5 text-justify">
            The Total Addressable Market (TAM) is substantial but requires grounding. The Caribbean sees over $65 billion in tourism spending annually, with The Bahamas alone seeing ~$4 billion per year. However, the realistic near-term serviceable market is the independent merchant ecosystem: the restaurants, tour operators, craft vendors, and service providers that tourists encounter outside of all-inclusive resorts (whose spend is largely pre-paid via corporate card). A bottoms-up view of the Bahamas opportunity:
          </p>

          {/* Market Table */}
          <div className="overflow-x-auto mb-6">
            <table className="w-full text-[13px] border border-gray-300">
              <thead>
                <tr className="bg-gray-50">
                  <th className="border border-gray-300 px-3 py-2.5 text-left font-semibold">Layer</th>
                  <th className="border border-gray-300 px-3 py-2.5 text-left font-semibold">Assumption</th>
                  <th className="border border-gray-300 px-3 py-2.5 text-left font-semibold">Estimate</th>
                  <th className="border border-gray-300 px-3 py-2.5 text-left font-semibold">Notes</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 px-3 py-2.5">TAM — Caribbean tourism spend</td>
                  <td className="border border-gray-300 px-3 py-2.5">35M+ visitors, $65B total</td>
                  <td className="border border-gray-300 px-3 py-2.5">$65B/yr</td>
                  <td className="border border-gray-300 px-3 py-2.5">Ceiling</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-3 py-2.5">SAM — Card-present indie merchant spend (Bahamas)</td>
                  <td className="border border-gray-300 px-3 py-2.5">7M visitors × ~$200 discretionary at local merchants</td>
                  <td className="border border-gray-300 px-3 py-2.5">~$1.4B/yr</td>
                  <td className="border border-gray-300 px-3 py-2.5">Excl. all-inclusive resorts</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-3 py-2.5">SOM — Year 1–2 realistic capture</td>
                  <td className="border border-gray-300 px-3 py-2.5">100–500 merchants, 3–5% volume penetration</td>
                  <td className="border border-gray-300 px-3 py-2.5">$40M–$70M/yr</td>
                  <td className="border border-gray-300 px-3 py-2.5">Based on merchant pipeline</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-3 py-2.5">Revenue at 1.5% take rate (SOM)</td>
                  <td className="border border-gray-300 px-3 py-2.5">Conservative net take after settlement costs</td>
                  <td className="border border-gray-300 px-3 py-2.5">$600K–$1M/yr</td>
                  <td className="border border-gray-300 px-3 py-2.5">Year 2 target</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="text-[15px] leading-[1.7] text-gray-800 mb-6 text-justify">
            Comparable payment platforms in emerging markets M-Pesa, GrabPay, GCash demonstrate the viability of this model. dberi&apos;s integrated approach (tourist payments + local merchant acceptance + remittance capabilities) positions it to capture a larger share of wallet than single-purpose solutions. Revenue will be generated from transaction fees, FX spreads, and eventually value-added services like working capital loans to merchants.
          </p>
        </section>

        {/* What We Need to Believe */}
        <section className="mb-10">
          <h3 className="font-bold text-[18px] mb-3 text-gray-900">What We Need to Believe</h3>
          <p className="text-[15px] leading-[1.7] text-gray-800 mb-3 text-justify">
            For this thesis to hold, three things must prove true:
          </p>
          <ul className="text-[15px] leading-[1.7] text-gray-800 mb-6 space-y-4 ml-5">
            <li className="text-justify">
              <strong>• dberi can deliver meaningfully lower costs than incumbents.</strong> We assume the platform can achieve transaction costs at least 50% below current credit card and remittance fees through modern payment rails and direct integration. This is crucial to win merchants (who face 3–5% card fees) and tourists (who face unfavourable FX rates and ATM fees). The substantial FX spread in the Caribbean creates a healthy margin opportunity for dberi while offering better rates.
            </li>
            <li className="text-justify">
              <strong>• The team can acquire and retain both tourists and merchants cost-effectively.</strong> Two-sided marketplaces are challenging. We need to believe dberi can cost-effectively reach tourists (via hotel/airport partnerships, pre-travel app downloads) and convince merchants to adopt a new system. The founder&apos;s local knowledge is key to initial merchant acquisition. Tourist acquisition benefits from the immediate &apos;pain point moment&apos; of currency conversion upon arrival.
            </li>
            <li className="text-justify">
              <strong>• Regulatory and compliance hurdles are manageable.</strong> Payment systems touching remittances and FX face heavy scrutiny. We assume dberi can navigate Bahamian Central Bank requirements, AML/KYC regulations, and licensing across Caribbean jurisdictions. The BaaS partnership route provides a licensed operating wrapper while dberi applies for its own Money Services Business (MSB) licence in parallel.
            </li>
          </ul>
        </section>

        {/* Upside Case */}
        <section className="mb-10">
          <h3 className="font-bold text-[18px] mb-3 text-gray-900">Upside Case</h3>
          <p className="text-[15px] leading-[1.7] text-gray-800 mb-3 text-justify">
            If these beliefs hold, dberi could become the category-defining payment infrastructure for Caribbean tourism. We see dberi:
          </p>
          <ul className="text-[15px] leading-[1.7] text-gray-800 mb-4 ml-5 space-y-2">
            <li>• Reaching 10,000+ merchant locations across the Caribbean within 3–5 years (~$50M+ annual revenue opportunity at scale).</li>
            <li>• Processing $500M+ in annual transaction volume at a 1.5% take rate = $7.5M+ annual net revenue.</li>
            <li>• Expanding into adjacent services: B2B supplier payments, merchant lending, and currency hedging.</li>
            <li>• Achieving profitability at scale through strong transaction economics and cross-sell revenue.</li>
          </ul>
          <p className="text-[15px] leading-[1.7] text-gray-800 text-justify">
            The strategic endgame could be acquisition by a regional bank, a global payments player seeking Caribbean coverage, or continued growth as a standalone platform with expansion into other high-tourism, high-friction markets globally.
          </p>
        </section>

        {/* The Team and Their Right to Win */}
        <section className="mb-10">
          <h2 className="font-bold text-[22px] mb-4 text-gray-900">The Team and Their Right to Win</h2>

          <h3 className="font-bold text-[17px] mb-3 text-gray-900">Ivoine Strachan – Founder & CEO</h3>
          <div className="space-y-4 mb-6">
            <p className="text-[15px] leading-[1.7] text-gray-800 text-justify">
              <strong>Local Market Expertise & Lived Experience:</strong> Born, raised, and currently operating in The Bahamas. Deep understanding of the distinct pain points of both the tourist and the local merchant. This is not an idea drawn from a spreadsheet but from direct observation of daily inefficiencies in the Bahamian tourism economy.
            </p>
            <p className="text-[15px] leading-[1.7] text-gray-800 text-justify">
              <strong>Technical Capability:</strong> Proven full-stack builder with the ability to architect and ship the core platform infrastructure in-house, significantly reducing early-stage outsourcing costs and execution risk.
            </p>
            <p className="text-[15px] leading-[1.7] text-gray-800 text-justify">
              <strong>Community Network:</strong> Strong local connections within merchant communities, tourism stakeholders, and government/regulatory bodies — the foundation for low-CAC go-to-market and faster licensing. Merchant conversations are already underway with local Nassau businesses.
            </p>
            <p className="text-[15px] leading-[1.7] text-gray-800 text-justify">
              <strong>Personal Conviction & Vision:</strong> The problem is a personal one. Ivoine grew up watching Bahamians lose money to inefficient systems every day. The ambition is not simply to build a payments app but to modernise the foundational financial infrastructure of his home country and, ultimately, the Caribbean. This is a founder who wants to change how an entire economy works from the ground up.
            </p>
          </div>

          <h3 className="font-bold text-[17px] mb-3 text-gray-900">Right to Win</h3>
          <p className="text-[15px] leading-[1.7] text-gray-800 mb-6 text-justify">
            The founder&apos;s primary right to win is local market knowledge, authenticity, and technical leadership. International payment companies have not prioritised the Caribbean due to complexity and perceived scale. Local banks are slow incumbents. This vacuum creates a window for a locally-built solution that can genuinely understand and serve the market — a strategy that is difficult for foreign competitors to replicate quickly.
          </p>
        </section>

        {/* Unique Insight and Company Edge */}
        <section className="mb-10">
          <h2 className="font-bold text-[22px] mb-4 text-gray-900">Unique Insight and Company Edge</h2>

          <h3 className="font-bold text-[17px] mb-3 text-gray-900">Core Insight: Tourism economies have unique payment dynamics that generic solutions don&apos;t address</h3>
          <ul className="text-[15px] leading-[1.7] text-gray-800 mb-6 space-y-3 ml-5">
            <li className="text-justify">
              <strong>• Massive FX Spread Exploitation:</strong> Both tourists (5–10% markups) and merchants (3–5% card fees) are losing significant value to incumbents. dberi splits this saving, creating a genuine win-win value proposition.
            </li>
            <li className="text-justify">
              <strong>• &apos;Closed-Loop&apos; Opportunity:</strong> Many Caribbean destinations are semi-closed resort economies. Embedding dberi at key tourist touchpoints upon arrival creates natural network effects and rapid compounding adoption.
            </li>
            <li className="text-justify">
              <strong>• Local Trust & Regulatory Advantage:</strong> A locally-built, compliant solution is more likely to receive favourable treatment from regulators than foreign fintechs, especially if positioned as supporting local economic leakage reduction.
            </li>
          </ul>

          <h3 className="font-bold text-[17px] mb-3 text-gray-900">Company Edge</h3>
          <div className="space-y-4 mb-6">
            <p className="text-[15px] leading-[1.7] text-gray-800 text-justify">
              <strong>1. Local-First Go-to-Market:</strong> dberi is built for the Caribbean from day one. The local founder can build trust and navigate local business culture far more effectively than external competitors.
            </p>
            <p className="text-[15px] leading-[1.7] text-gray-800 text-justify">
              <strong>2. Integrated Tourist + Merchant Solution:</strong> Few competitors integrate both sides. dberi creates a powerful closed-loop where tourist adoption drives merchant value and vice versa, creating network effects that act as a strong competitive moat.
            </p>
            <p className="text-[15px] leading-[1.7] text-gray-800 text-justify">
              <strong>3. Mobile-First, Modern Rails:</strong> By leveraging modern infrastructure (direct bank APIs, instant settlement systems), dberi can offer cost and speed advantages that legacy systems and incumbents cannot match.
            </p>
          </div>

          <h3 className="font-bold text-[17px] mb-3 text-gray-900">Defensibility</h3>
          <p className="text-[15px] leading-[1.7] text-gray-800 mb-6 text-justify">
            Defensibility will come from: Network Effects (more merchants attract more tourists), Switching Costs (integration into merchant operations), Regulatory Licences (multi-jurisdiction licensing is a significant moat), and Local Brand Trust.
          </p>
        </section>

        {/* Market & Competitive Landscape */}
        <section className="mb-10">
          <h2 className="font-bold text-[22px] mb-4 text-gray-900">Market & Competitive Landscape</h2>

          <h3 className="font-bold text-[18px] mb-3 text-gray-900">Competitive Landscape</h3>
          <p className="text-[15px] leading-[1.7] text-gray-800 mb-5 text-justify">
            dberi occupies a unique position as the only platform purpose-built for the integrated tourist-merchant payment dynamic in the Caribbean. The honest competitive question is not &apos;Visa vs. dberi&apos; but why a tourist would not simply use Revolut (near-zero FX fees, already in their pocket) and why a merchant would not wait for Square or SumUp. These are the real threats:
          </p>

          {/* Competitive Landscape Table */}
          <div className="overflow-x-auto mb-6">
            <table className="w-full text-[13px] border border-gray-300">
              <thead>
                <tr className="bg-gray-50">
                  <th className="border border-gray-300 px-3 py-2.5 text-left font-semibold">Competitor</th>
                  <th className="border border-gray-300 px-3 py-2.5 text-left font-semibold">Tourist Threat</th>
                  <th className="border border-gray-300 px-3 py-2.5 text-left font-semibold">Merchant Threat</th>
                  <th className="border border-gray-300 px-3 py-2.5 text-left font-semibold">dberi Advantage</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 px-3 py-2.5">Revolut</td>
                  <td className="border border-gray-300 px-3 py-2.5">High — tourists already carry it, near-zero FX</td>
                  <td className="border border-gray-300 px-3 py-2.5">None — no merchant acquiring</td>
                  <td className="border border-gray-300 px-3 py-2.5">Merchant side is entirely uncontested. Tourist acquisition via merchant QR codes, not standalone app download.</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-3 py-2.5">Square</td>
                  <td className="border border-gray-300 px-3 py-2.5">None</td>
                  <td className="border border-gray-300 px-3 py-2.5">Medium — could enter with existing infrastructure</td>
                  <td className="border border-gray-300 px-3 py-2.5">Local licensing, regulatory relationships, and network lock-in make late entry costly. Speed is the defence.</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-3 py-2.5">KanooPay / Island Pay</td>
                  <td className="border border-gray-300 px-3 py-2.5">Low</td>
                  <td className="border border-gray-300 px-3 py-2.5">Low-Medium — already in market</td>
                  <td className="border border-gray-300 px-3 py-2.5">Single-purpose (domestic or remittance only). dberi integrates tourist + merchant + remittance — a structurally different product.</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-3 py-2.5">Visa / Mastercard / WU</td>
                  <td className="border border-gray-300 px-3 py-2.5">Embedded — default option</td>
                  <td className="border border-gray-300 px-3 py-2.5">Embedded — default option</td>
                  <td className="border border-gray-300 px-3 py-2.5">The incumbents are the problem. Lower cost and instant settlement are a compelling switch for margin-squeezed merchants.</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="text-[15px] leading-[1.7] text-gray-800 mb-6 text-justify">
            The Revolut risk is real but addressable: dberi&apos;s tourist value proposition is not &apos;a better FX card&apos; but &apos;a payment method accepted everywhere locally, with integrated merchant access and lower conversion friction.&apos; The moat is on the merchant side, not the tourist side.
          </p>
        </section>

        {/* Regulatory Pathway */}
        <section className="mb-10">
          <h3 className="font-bold text-[18px] mb-3 text-gray-900">Regulatory Pathway</h3>
          <p className="text-[15px] leading-[1.7] text-gray-800 mb-4 text-justify">
            The regulatory landscape requires a candid assessment. While the Bahamas has shown an appetite for financial innovation, the Central Bank&apos;s experience with the Sand Dollar CBDC reveals the structural difficulty of building adoption in this market and the specific hurdles dberi must navigate.
          </p>
          <p className="text-[15px] leading-[1.7] text-gray-800 mb-4 text-justify">
            The Sand Dollar, launched in October 2020 as the world&apos;s first national CBDC, circulates at just 0.39% of physical cash in circulation despite five years of operation. Total transaction throughput over that period reached only $14 million, compared to $1 billion in card payments. The primary barriers were structural: absent bank integration, weak merchant networks, and a voluntary framework that gave commercial banks no incentive to distribute the product. The Central Bank has since acknowledged the failure of voluntary engagement and announced plans to mandate commercial bank distribution by 2026.
          </p>
          <p className="text-[15px] leading-[1.7] text-gray-800 mb-4 text-justify">
            This matters for dberi in two ways. First, it confirms the market failure dberi is solving: Bahamians and tourists are digitising payments (internet banking grew 39% in 2024), but not through incumbent channels — creating a clear opening for a better-designed product. Second, it highlights the regulatory pathway dberi must follow carefully:
          </p>
          <ul className="text-[15px] leading-[1.7] text-gray-800 mb-4 ml-5 space-y-3">
            <li className="text-justify">• The BaaS route provides a licensed operating wrapper while dberi applies for its own MSB licence in parallel. This is the right strategy, and a BaaS partner should be identified and named during due diligence. Potential candidates operating in the region include CIBC FirstCaribbean and Banco General. Note that PayPal and Stripe do not currently support The Bahamas, which removes two major incumbent threats and strengthens the case for a locally-built solution. The rise of dollar-pegged stablecoins (USDC) also opens an additional rails opportunity for low-cost cross-border settlement that dberi should actively evaluate.</li>
            <li className="text-justify">• The Bahamas has FATF obligations and has historically appeared on international financial watchlists. AML/KYC compliance will be more burdensome than the original memo implied. Any BaaS partner will require robust compliance infrastructure before onboarding.</li>
            <li className="text-justify">• Multi-jurisdiction expansion means re-licensing in each territory. The $300K regulatory allocation should be modelled per-jurisdiction, not treated as a one-time cost.</li>
          </ul>
          <p className="text-[15px] leading-[1.7] text-gray-800 mb-6 text-justify">
            The broader lesson from the Sand Dollar is that regulatory openness alone does not create adoption. dberi&apos;s advantage is that it is solving for a customer pain point with a clear value proposition — lower fees, instant settlement, tourist-facing UX — rather than asking users to adopt infrastructure for its own sake.
          </p>
        </section>

        {/* Risks and Mitigants */}
        <section className="mb-10">
          <h2 className="font-bold text-[22px] mb-4 text-gray-900">Risks and Mitigants</h2>
          <div className="space-y-4">
            <p className="text-[15px] leading-[1.7] text-gray-800 text-justify">
              <strong>1. Regulatory and Licensing Risk:</strong> Risk: Slow or blocked licensing processes. Mitigants: BaaS wrapper provides immediate operating licence. Parallel MSB application. Founder&apos;s local regulatory relationships accelerate process.
            </p>
            <p className="text-[15px] leading-[1.7] text-gray-800 text-justify">
              <strong>2. Customer Acquisition / Two-Sided Marketplace:</strong> Risk: Chicken-and-egg problem; high CAC. Mitigants: Merchant-first strategy — onboard merchants via direct sales and local network before tourist launch. High-density Nassau focus for initial network density. Hotel partnerships embed the tourist acquisition hook at the point of FX pain.
            </p>
            <p className="text-[15px] leading-[1.7] text-gray-800 text-justify">
              <strong>3. Competition from Neobanks (Revolut / Wise):</strong> Risk: Tourists already carry near-zero FX cards. Mitigants: dberi&apos;s value prop is merchant-side access, not card replacement. The moat is built through the merchant network, not the tourist wallet.
            </p>
            <p className="text-[15px] leading-[1.7] text-gray-800 text-justify">
              <strong>4. Competition from Well-Funded Incumbents:</strong> Risk: Large players could enter the market. Mitigants: Speed of licensing and network effects are the defence. Local brand trust is difficult to replicate quickly. Global players have not prioritised this market for structural reasons.
            </p>
          </div>
        </section>

        {/* Milestones */}
        <section className="mb-10">
          <h2 className="font-bold text-[22px] mb-4 text-gray-900">Milestones for Next 12–18 Months (Post-Seed Funding)</h2>
          <div className="overflow-x-auto mb-6">
            <table className="w-full text-[13px] border border-gray-300">
              <thead>
                <tr className="bg-gray-50">
                  <th className="border border-gray-300 px-3 py-2.5 text-left font-semibold">Timeline</th>
                  <th className="border border-gray-300 px-3 py-2.5 text-left font-semibold">Milestone Focus</th>
                  <th className="border border-gray-300 px-3 py-2.5 text-left font-semibold">Key Metric</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 px-3 py-2.5">Q3 2025</td>
                  <td className="border border-gray-300 px-3 py-2.5">MVP Launch & Pilot</td>
                  <td className="border border-gray-300 px-3 py-2.5">Pilot merchants live. BaaS partner secured.</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-3 py-2.5">Q4 2025</td>
                  <td className="border border-gray-300 px-3 py-2.5">Regulatory Pathway & Fundraising</td>
                  <td className="border border-gray-300 px-3 py-2.5">Licensing pathway confirmed. Seed round closed.</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-3 py-2.5">Q1 2026</td>
                  <td className="border border-gray-300 px-3 py-2.5">Public Launch in Bahamas</td>
                  <td className="border border-gray-300 px-3 py-2.5">100+ merchants live. Meaningful transaction volume.</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-3 py-2.5">Q2–Q3 2026</td>
                  <td className="border border-gray-300 px-3 py-2.5">Product Expansion & Network Effects</td>
                  <td className="border border-gray-300 px-3 py-2.5">Remittance live. Merchant services launched. Unit economics positive.</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-3 py-2.5">Q4 2026</td>
                  <td className="border border-gray-300 px-3 py-2.5">Regional Expansion</td>
                  <td className="border border-gray-300 px-3 py-2.5">Second Caribbean market entered. Regional playbook established.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Fundraising and Use of Funds */}
        <section className="mb-10">
          <h2 className="font-bold text-[22px] mb-4 text-gray-900">Fundraising and Use of Funds ($1.5M Seed)</h2>
          <div className="overflow-x-auto mb-6">
            <table className="w-full text-[13px] border border-gray-300">
              <thead>
                <tr className="bg-gray-50">
                  <th className="border border-gray-300 px-3 py-2.5 text-left font-semibold w-1/5">Category</th>
                  <th className="border border-gray-300 px-3 py-2.5 text-left font-semibold w-1/6">Amount</th>
                  <th className="border border-gray-300 px-3 py-2.5 text-left font-semibold">Key Investments & Deliverables</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 px-3 py-2.5">Product Development & Engineering</td>
                  <td className="border border-gray-300 px-3 py-2.5">$500K</td>
                  <td className="border border-gray-300 px-3 py-2.5">Core Platform: Complete MVP (payment rails & mobile wallet V1 — $150K). Merchant Ecosystem: POS integration API/tools ($125K). Security & Scale: Fraud/compliance automation engine ($75K). Team: 2–3 full-time engineers × 6 months ($150K).</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-3 py-2.5">Regulatory, Compliance & Licensing</td>
                  <td className="border border-gray-300 px-3 py-2.5">$300K</td>
                  <td className="border border-gray-300 px-3 py-2.5">Legal Foundation: Incorporation + contracts ($50K). Compliance: Setup and advisory ($75K). Market Access: MSB/money transmission licence application ($100K). Infrastructure: BaaS partnership setup and fees ($75K).</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-3 py-2.5">Go-to-Market & Strategic Partnerships</td>
                  <td className="border border-gray-300 px-3 py-2.5">$275K</td>
                  <td className="border border-gray-300 px-3 py-2.5">Sales Team: 2 Merchant Acquisition Reps × 6 months ($100K). Key Integrations: Hotel/tour operator partnerships ($75K). Customer Acquisition: Tourist-facing digital campaigns and launch events ($100K).</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-3 py-2.5">Operations, Team & Contingency</td>
                  <td className="border border-gray-300 px-3 py-2.5">$425K</td>
                  <td className="border border-gray-300 px-3 py-2.5">Leadership: Head of Compliance/Ops × 6 months ($125K). Infrastructure: Operational setup and tools ($50K). Buffer: ~28% contingency reserve for unforeseen regulatory, hiring, or market costs ($250K). Includes ~6 months runway to support next-round fundraising.</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-3 py-2.5 font-semibold">TOTAL</td>
                  <td className="border border-gray-300 px-3 py-2.5 font-semibold">$1.5M</td>
                  <td className="border border-gray-300 px-3 py-2.5">Runway: ~20–22 months at budgeted burn, including 6-month buffer for next-round fundraising. Breakeven target at $2M+ monthly transaction volume.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Conclusion */}
        <section className="mb-10">
          <h2 className="font-bold text-[22px] mb-4 text-gray-900">Conclusion and Recommendation</h2>
          <p className="text-[15px] leading-[1.7] text-gray-800 mb-5 text-justify">
            dberi represents a high-potential opportunity to build category-defining payment infrastructure for the Caribbean tourism economies. The market is large, underserved, and ready for a modern, cost-effective solution.
          </p>

          <h3 className="font-bold text-[17px] mb-3 text-gray-900">Key Investment Highlights:</h3>
          <ul className="text-[15px] leading-[1.7] text-gray-800 mb-6 ml-5 space-y-3">
            <li className="text-justify"><strong>• Large, Growing Market:</strong> $65B+ annual tourism TAM with clear remittance opportunity and a realistic Year 1–2 SOM of $40M–$70M in the Bahamas alone.</li>
            <li className="text-justify"><strong>• Clear Value Proposition:</strong> Demonstrably better economics (lower fees, instant settlement) than all incumbents, with a win-win structure for both merchants and tourists.</li>
            <li className="text-justify"><strong>• Exceptional Founder-Market Fit:</strong> Ivoine&apos;s local market knowledge, technical capability, and authentic community trust are a significant, non-replicable advantage.</li>
            <li className="text-justify"><strong>• Favourable Timing:</strong> Post-COVID digital adoption, proven demand for payment alternatives (as evidenced by 39% internet banking growth in 2024), and regulatory openness create the right window.</li>
            <li className="text-justify"><strong>• Validated Pain Point:</strong> Merchant conversations already underway in Nassau confirm supply-side demand for lower-cost payment acceptance. Community forums corroborate the depth of the problem: locals routinely hit multiple broken ATMs on a single weekday, face card failures on Friday evenings, and are effectively forced back to cash exactly the gap dberi fills.</li>
          </ul>
        </section>

        {/* Back button at bottom */}
        <Link href="/" className="inline-flex items-center gap-2 font-mono text-[13px] text-gray-600 hover:text-gray-900 mt-8 transition-colors">
          ← back to home
        </Link>
      </main>
    </div>
  );
};

export default Memo;
