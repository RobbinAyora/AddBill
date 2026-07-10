import type { LucideIcon } from "lucide-react"
import { Calculator, FileText, FileSignature, LineChart, Wallet } from "lucide-react"

export type ProcessStep = {
  title: string
  description: string
}

export type IncludedItem = {
  title: string
  description: string
}

export type Service = {
  slug: string
  name: string
  tagline: string
  icon: LucideIcon
  overview: string[]
  included: IncludedItem[]
  process: ProcessStep[]
}

export const services: Service[] = [
  {
    slug: "cost-estimation",
    name: "Cost Estimation & Budgeting",
    tagline: "Dependable budgets and feasibility figures before you commit a shilling.",
    icon: Calculator,
    overview: [
      "Cost estimation is the foundation of every sound construction decision. At Addbill, we translate your brief, drawings, and specifications into a clear financial picture — so you understand exactly what a project will cost long before a single contractor is appointed.",
      "Our quantities surveyors prepare both preliminary estimates for early-stage planning and fully detailed bills of quantities once designs are developed. Every figure is built from current market rates, historical data, and a disciplined, methodology-driven approach that removes guesswork.",
      "The result is a realistic, defensible budget that protects your investment, supports financing and approvals, and gives you the confidence to move forward without fear of costly surprises later in the build.",
    ],
    included: [
      { title: "Preliminary Estimates", description: "Early-order-of-cost advice to test feasibility and shape the brief." },
      { title: "Detailed BOQs", description: "Elemental and trade-level bills of quantities for accurate pricing." },
      { title: "Elemental Cost Plans", description: "Structured cost plans that allocate budget across building elements." },
      { title: "Budget Forecasts", description: "Lifecycle and whole-project budget forecasts with contingency advice." },
      { title: "Feasibility Studies", description: "Option appraisals comparing cost, value, and risk across scenarios." },
      { title: "Benchmarking", description: "Market-rate benchmarking against comparable regional projects." },
    ],
    process: [
      { title: "Brief & Data Gathering", description: "We collect drawings, specifications, and your objectives to scope the estimate." },
      { title: "Measure & Price", description: "We quantify works and price them against current market rates and rates databases." },
      { title: "Build the Cost Plan", description: "We structure costs element-by-element with an agreed contingency allowance." },
      { title: "Review & Report", description: "We present a clear report, flag risks, and advise on value-engineering opportunities." },
      { title: "Refine to Lock", description: "We update the estimate as designs develop until a firm budget is locked." },
    ],
  },
  {
    slug: "tendering-procurement",
    name: "Tendering & Procurement",
    tagline: "Clear tender documents and fair supplier selection that drive competitive pricing.",
    icon: FileText,
    overview: [
      "Tendering and procurement decide who delivers your project and on what terms. Addbill prepares the documentation and runs the process that attracts the right contractors and suppliers — and keeps everything transparent, fair, and competitive.",
      "We help you choose the most suitable procurement route for your project, then produce the bills of quantities, tender packs, and instructions that bidders need to price accurately. This reduces ambiguity, limits variation disputes, and produces comparable, like-for-like bids.",
      "Once tenders are returned, we evaluate them objectively, advise on the strongest offer, and support contract award — so you secure the best balance of price, quality, and capability rather than simply the lowest headline number.",
    ],
    included: [
      { title: "Procurement Strategy", description: "Advice on the right route — open, selective, negotiated, or framework." },
      { title: "Tender Documentation", description: "Complete, consistent tender packs and pre-qualification questionnaires." },
      { title: "Bills of Quantities", description: "Accurate BOQs that enable fair, comparable contractor pricing." },
      { title: "Bid Evaluation", description: "Structured analysis of price, compliance, and contractor capability." },
      { title: "Recommendations", description: "Clear, defensible advice to support award decisions." },
      { title: "Award Support", description: "Assistance with letters of appointment and contract setup." },
    ],
    process: [
      { title: "Strategy & Route", description: "We agree the procurement route that fits your timeline, risk, and budget." },
      { title: "Prepare Documents", description: "We compile BOQs, specs, and tender instructions into a complete pack." },
      { title: "Issue & Manage", description: "We issue tenders, run the query period, and handle addenda fairly." },
      { title: "Evaluate Bids", description: "We score submissions on price, compliance, and capability." },
      { title: "Award & Mobilise", description: "We support appointment and hand over a clean start to the contract." },
    ],
  },
  {
    slug: "contract-administration",
    name: "Contract Administration",
    tagline: "Sound contract management that keeps obligations, risks, and payments in order.",
    icon: FileSignature,
    overview: [
      "A well-administered contract is what keeps a project fair, documented, and dispute-free. Addbill acts as your impartial contract administrator — managing the day-to-day commercial relationship between client and contractor.",
      "We handle variations, assess claims, certify interim payments, and keep a clear audit trail of decisions and instructions. Every obligation and risk is recorded, so both parties understand where they stand at all times.",
      "By administering contracts professionally, we protect your interests, maintain cash-flow discipline, and significantly reduce the likelihood of costly disputes, delays, or adversarial relationships on site.",
    ],
    included: [
      { title: "Contract Setup", description: "Review and setup of contract conditions, roles, and responsibilities." },
      { title: "Variation Management", description: "Assessment, agreement, and recording of changes to scope." },
      { title: "Payment Certification", description: "Independent certification of interim and final payments." },
      { title: "Claims Assessment", description: "Objective review of extension-of-time and loss/expense claims." },
      { title: "Site Instructions", description: "Issuing and logging instructions with full traceability." },
      { title: "Dispute Prevention", description: "Proactive records and dialogue that head off disagreements." },
    ],
    process: [
      { title: "Mobilise", description: "We confirm contract terms, responsibilities, and reporting lines at start." },
      { title: "Administer Daily", description: "We issue instructions, log records, and manage variations as they arise." },
      { title: "Certify Payments", description: "We assess and certify valuations on the agreed payment cycle." },
      { title: "Manage Claims", description: "We evaluate time and cost claims with supporting evidence." },
      { title: "Close Out", description: "We finalise accounts and hand over a complete contract record." },
    ],
  },
  {
    slug: "project-valuation",
    name: "Project Valuation",
    tagline: "Independent valuations that reflect the true value of work completed.",
    icon: LineChart,
    overview: [
      "Project valuation gives clients and funders an accurate, independent view of work completed and value due. Addbill carries out interim and final valuations that protect both sides of the payment equation.",
      "Our surveyors measure progress on site, reconcile it against the contract, and certify the value of work properly executed. This ensures payments release in step with real progress — never ahead, never unfairly behind.",
      "Robust valuation underpins healthy cash flow, satisfies lenders and auditors, and provides the evidence base for final accounts, helping projects close with confidence and clarity.",
    ],
    included: [
      { title: "Interim Valuations", description: "Regular on-site measurement of works completed to date." },
      { title: "Final Accounts", description: "Agreed final account reconciling all works, variations, and claims." },
      { title: "Progress Certification", description: "Independent certification of value for payment release." },
      { title: "Funder Reporting", description: "Clear valuation reports for lenders and stakeholders." },
      { title: "Materials On-Site", description: "Valuation of off-site and on-site materials in line with contract." },
      { title: "Retention Management", description: "Accurate calculation and release of retention sums." },
    ],
    process: [
      { title: "Schedule Valuations", description: "We agree a valuation cadence aligned to the payment cycle." },
      { title: "Measure On Site", description: "We inspect and measure completed works against the contract." },
      { title: "Reconcile", description: "We match progress to BOQ, variations, and certified values." },
      { title: "Certify", description: "We issue an independent valuation for payment release." },
      { title: "Finalise", description: "We prepare and agree the final account at project completion." },
    ],
  },
  {
    slug: "cost-control",
    name: "Cost Control & Monitoring",
    tagline: "Proactive monitoring and forecasting that keep your project on budget.",
    icon: Wallet,
    overview: [
      "Even the best budget fails without active control. Addbill provides continuous cost monitoring that keeps your project financially on track from first mobilization to final account.",
      "We track expenditure against the cost plan, forecast remaining cash flow, and report clearly on where the money is going. Early warning on potential overruns means there is always time to act, re-prioritise, or value-engineer before it becomes a problem.",
      "With disciplined cost control, you stay in command of the budget, protect margin and funding, and deliver the project you committed to — without the late-stage shocks that derail so many builds.",
    ],
    included: [
      { title: "Cost Monitoring", description: "Ongoing tracking of committed and forecast spend vs. the plan." },
      { title: "Cash-Flow Forecasting", description: "Forward projections of drawdown and funding requirements." },
      { title: "Change Control", description: "Impact assessment of every change before it is approved." },
      { title: "Financial Reporting", description: "Clear, regular reports tailored to client and funder needs." },
      { title: "Value Engineering", description: "Cost-saving options that protect scope and quality." },
      { title: "Risk & Contingency", description: "Tracking of contingency use and emerging cost risks." },
    ],
    process: [
      { title: "Baseline", description: "We lock the agreed cost plan as the control baseline." },
      { title: "Track Spend", description: "We monitor commitments and actuals against that baseline." },
      { title: "Forecast", description: "We project final cost and cash flow to highlight variance early." },
      { title: "Report", description: "We deliver clear reports with recommended actions." },
      { title: "Act & Close", description: "We support corrective action and reconcile the final account." },
    ],
  },
]

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((service) => service.slug === slug)
}
