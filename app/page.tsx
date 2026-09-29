'use client'

import { useMemo, useState } from 'react'
import {
  ArrowRight,
  ArrowLeft,
  BadgeCheck,
  Bell,
  Building2,
  CalendarDays,
  ChevronDown,
  CircleHelp,
  Clock3,
  FileCheck2,
  Gavel,
  Grid2X2,
  IndianRupee,
  LayoutDashboard,
  LockKeyhole,
  Mail,
  MapPin,
  Menu,
  Search,
  ShieldCheck,
  Headphones,
  MessageCircleQuestion,
  SlidersHorizontal,
  Smartphone,
  Sparkles,
  Ticket,
  Users,
  WalletCards,
  X,
} from 'lucide-react'
import { Button } from '@/components/ui/button'

const properties = [
  {
    id: 1,
    title: '2BHK Apartment in Koramangala',
    location: 'Koramangala, Bengaluru',
    bank: 'State Bank of India',
    value: '₹86.5L',
    campaign: '₹98.0L',
    slots: '98,000',
    filled: 74,
    ends: '12d 08h',
    image: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=900&q=85',
    tag: 'Most popular',
  },
  {
    id: 2,
    title: 'Independent House near Whitefield',
    location: 'Whitefield, Bengaluru',
    bank: 'Canara Bank',
    value: '₹1.24Cr',
    campaign: '₹1.40Cr',
    slots: '1,40,000',
    filled: 42,
    ends: '18d 04h',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=900&q=85',
    tag: 'New campaign',
  },
  {
    id: 3,
    title: 'Commercial Office Space',
    location: 'Andheri East, Mumbai',
    bank: 'Punjab National Bank',
    value: '₹2.10Cr',
    campaign: '₹2.35Cr',
    slots: '2,35,000',
    filled: 61,
    ends: '21d 12h',
    image: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=900&q=85',
    tag: 'Commercial',
  },
]

export default function Page() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [selected, setSelected] = useState<(typeof properties)[number] | null>(null)
  const [search, setSearch] = useState('')
  const [joined, setJoined] = useState(false)
  const [authMode, setAuthMode] = useState<'sign-in' | 'create' | null>(null)
  const [supportOpen, setSupportOpen] = useState(false)
  const [supportSent, setSupportSent] = useState(false)

  const filtered = useMemo(
    () => properties.filter((property) => `${property.title} ${property.location}`.toLowerCase().includes(search.toLowerCase())),
    [search],
  )

  return (
    <main className="min-h-screen bg-[#f8f9f7] text-[#17221d]">
      <div className="border-b border-[#dce4dc] bg-[#edf5ed] px-4 py-2 text-center text-xs font-medium text-[#356346]">
        Prototype preview · Campaigns are illustrative and not open for real money or property transactions.
      </div>
      <header className="sticky top-0 z-20 border-b border-[#e5ebe5]/90 bg-[#f8f9f7]/95 backdrop-blur-md">
        <div className="mx-auto flex h-[72px] max-w-[1240px] items-center justify-between px-5 lg:px-8">
          <a href="#top" className="flex items-center gap-3" aria-label="Aucvia home">
            <span className="flex size-10 items-center justify-center rounded-xl bg-[#183c29] text-[#d9f17e]"><Gavel className="size-5" /></span>
            <span className="text-[21px] font-semibold tracking-[-0.04em]">aucvia<span className="text-[#8a9f37]">.</span></span>
          </a>
          <nav className="hidden items-center gap-8 text-sm font-medium text-[#5d695f] md:flex">
            <a className="text-[#183c29]" href="#auctions">Browse auctions</a><a href="#how-it-works">How it works</a><a href="#support">Customer support</a>
          </nav>
          <div className="hidden items-center gap-3 md:flex"><Button variant="ghost" onClick={() => setAuthMode('sign-in')} className="text-[#506056]">Sign in</Button><Button onClick={() => setAuthMode('create')} className="rounded-full bg-[#183c29] px-5 text-white hover:bg-[#28563b]">Create account</Button></div>
          <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setMobileOpen(!mobileOpen)} aria-label="Toggle menu">{mobileOpen ? <X /> : <Menu />}</Button>
        </div>
        {mobileOpen && <nav className="flex flex-col gap-4 border-t border-[#e5ebe5] px-5 py-5 text-sm font-medium md:hidden"><a href="#auctions">Browse auctions</a><a href="#how-it-works">How it works</a><a href="#support">Customer support</a><Button onClick={() => setAuthMode('create')} className="rounded-full bg-[#d9f17e] text-[#183c29] hover:bg-[#c9e466]">Create account</Button></nav>}
      </header>

      <section id="top" className="mx-auto grid max-w-[1240px] gap-12 px-5 pb-20 pt-16 lg:grid-cols-[1.02fr_.98fr] lg:items-center lg:px-8 lg:pb-28 lg:pt-24">
        <div>
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#d5e2c1] bg-[#f0f7e4] px-3 py-1.5 text-xs font-semibold text-[#527124]"><Sparkles className="size-3.5" /> A simpler way to discover bank assets</div>
          <h1 className="max-w-[600px] text-[48px] font-medium leading-[1.03] tracking-[-0.065em] text-[#183c29] sm:text-[64px]">Your next property, <span className="text-[#91a93d]">by chance.</span></h1>
          <p className="mt-6 max-w-[520px] text-[17px] leading-7 text-[#647169]">Explore verified bank-auction properties. Join a transparent ₹1 slot campaign and let a fair, independently auditable draw decide the winner.</p>
          <div className="mt-8 flex flex-wrap gap-3"><Button onClick={() => document.getElementById('auctions')?.scrollIntoView({ behavior: 'smooth' })} className="h-12 rounded-full bg-[#183c29] px-6 text-base text-white hover:bg-[#28563b]">Explore properties <ArrowRight data-icon="inline-end" /></Button><Button variant="outline" className="h-12 rounded-full border-[#cfdacf] bg-transparent px-6 text-base text-[#34523c]">See how it works</Button></div>
          <div className="mt-12 flex items-center gap-8 border-t border-[#dce4dc] pt-6"><div><p className="text-2xl font-semibold tracking-tight text-[#183c29]">₹4.8Cr+</p><p className="mt-1 text-xs text-[#78847b]">Property value listed</p></div><div><p className="text-2xl font-semibold tracking-tight text-[#183c29]">100%</p><p className="mt-1 text-xs text-[#78847b]">Verified listings</p></div><div><p className="text-2xl font-semibold tracking-tight text-[#183c29]">₹1</p><p className="mt-1 text-xs text-[#78847b]">Per campaign slot</p></div></div>
        </div>
        <div className="relative overflow-hidden rounded-[28px] bg-[#234632] p-3 shadow-[0_20px_60px_rgba(28,66,42,.16)]"><img className="h-[420px] w-full rounded-[21px] object-cover" src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1100&q=85" alt="Modern home with a warm living room" /><div className="absolute bottom-7 left-7 right-7 rounded-2xl border border-white/20 bg-[#173c29]/90 p-5 text-white backdrop-blur-md"><div className="flex items-center justify-between"><div><p className="text-xs text-[#b9cfb9]">Featured campaign</p><p className="mt-1 font-medium">Modern villa · Pune</p></div><span className="rounded-full bg-[#d9f17e] px-3 py-1 text-xs font-bold text-[#234632]">₹1 slot</span></div><div className="mt-4 flex items-center justify-between text-xs text-[#d4dfd4]"><span>67,420 / 1,20,000 slots filled</span><span>14 days left</span></div><div className="mt-2 h-1.5 overflow-hidden rounded-full bg-white/20"><div className="h-full w-[56%] rounded-full bg-[#d9f17e]" /></div></div></div>
      </section>

      <section id="how-it-works" className="border-y border-[#e1e9e1] bg-[#eff5ef] px-5 py-16 lg:px-8"><div className="mx-auto max-w-[1240px]"><div className="flex flex-col justify-between gap-5 md:flex-row md:items-end"><div><p className="text-xs font-bold uppercase tracking-[.2em] text-[#80953d]">Simple by design</p><h2 className="mt-3 text-3xl font-medium tracking-[-.04em] text-[#183c29]">From discovery to draw.</h2></div><p className="max-w-sm text-sm leading-6 text-[#68766b]">Every campaign follows the same clear process, with verification at every step.</p></div><div className="mt-10 grid gap-4 md:grid-cols-3"><Step icon={<Search />} number="01" title="Find a property" text="Browse bank-verified properties with clear reserve values, documents and campaign terms." /><Step icon={<Ticket />} number="02" title="Claim your slots" text="Choose as many ₹1 slots as you like while the campaign is open. One person, one fair chance." /><Step icon={<BadgeCheck />} number="03" title="Watch the draw" text="A random winner is selected after the campaign closes, with the draw record available to everyone." /></div></div></section>

      <section id="auctions" className="mx-auto max-w-[1240px] px-5 py-16 lg:px-8"><div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between"><div><p className="text-xs font-bold uppercase tracking-[.2em] text-[#80953d]">Live campaigns</p><h2 className="mt-3 text-3xl font-medium tracking-[-.04em] text-[#183c29]">Properties worth a closer look.</h2></div><div className="flex gap-3"><div className="relative"><Search className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-[#8b978e]" /><input value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search city or property" className="h-10 w-full rounded-full border border-[#dce4dc] bg-white pl-9 pr-4 text-sm outline-none placeholder:text-[#9ba59c] focus:border-[#78904d] md:w-56" /></div><Button variant="outline" size="icon" className="rounded-full border-[#dce4dc] bg-white" aria-label="Filter"><SlidersHorizontal /></Button></div></div><div className="mt-9 grid gap-5 lg:grid-cols-3">{filtered.map((property) => <PropertyCard key={property.id} property={property} onClick={() => setSelected(property)} />)}</div>{filtered.length === 0 && <p className="py-14 text-center text-sm text-[#68766b]">No properties match your search.</p>}</section>

      <section id="protection" className="bg-[#183c29] px-5 py-16 text-[#f5f8ef] lg:px-8"><div className="mx-auto grid max-w-[1240px] gap-12 lg:grid-cols-[.8fr_1.2fr] lg:items-center"><div><p className="text-xs font-bold uppercase tracking-[.2em] text-[#d9f17e]">Built for confidence</p><h2 className="mt-4 max-w-md text-4xl font-medium tracking-[-.05em]">A new model needs old-fashioned trust.</h2><p className="mt-5 max-w-md text-sm leading-6 text-[#bed0c0]">We make the details visible: where the property came from, how many slots remain and how the winner was chosen.</p></div><div className="grid gap-3 sm:grid-cols-2"><Trust icon={<FileCheck2 />} title="Bank documents" text="Property papers and reserve details are shown before you join." /><Trust icon={<LockKeyhole />} title="Secure entries" text="Your campaign entries are recorded against your account." /><Trust icon={<Users />} title="Fair by design" text="Every slot has the same ₹1 value and equal draw odds." /><Trust icon={<ShieldCheck />} title="Audit trail" text="Campaign close and draw results are logged for review." /></div></div></section>

      <section id="support" className="border-t border-[#dce7dc] bg-[#f2f6f0] px-5 py-16 lg:px-8"><div className="mx-auto max-w-[1240px]"><div className="grid gap-10 lg:grid-cols-[.8fr_1.2fr] lg:items-start"><div><p className="text-xs font-bold uppercase tracking-[.2em] text-[#80953d]">Customer support</p><h2 className="mt-3 max-w-md text-4xl font-medium tracking-[-.05em] text-[#183c29]">Help when you need it.</h2><p className="mt-5 max-w-md text-sm leading-6 text-[#68766b]">Questions about a campaign, your entries or the draw? Start with the right support path and our team will help you move forward.</p><div className="mt-7 flex flex-wrap gap-3"><Button onClick={() => { setSupportOpen(true); setSupportSent(false) }} className="rounded-full bg-[#183c29] text-white hover:bg-[#28563b]"><Headphones data-icon="inline-start" />Contact support</Button><Button variant="outline" className="rounded-full border-[#cfdacf] bg-transparent text-[#34523c]"><MessageCircleQuestion data-icon="inline-start" />Read FAQs</Button></div></div><div className="grid gap-4 sm:grid-cols-2"><SupportCard icon={<CircleHelp />} title="Campaign questions" text="Understand campaign caps, slot counts, closing dates and draw rules." /><SupportCard icon={<LockKeyhole />} title="Account & security" text="Get help with sign-in, profile details and keeping your account secure." /><SupportCard icon={<Ticket />} title="Entry support" text="We can help you review demo entries and explain what happens next." /><SupportCard icon={<Clock3 />} title="Response times" text="Message us any day. Typical replies arrive within one business day." /></div></div></div></section>

      <footer className="mx-auto flex max-w-[1240px] flex-col gap-4 px-5 py-8 text-xs text-[#778278] sm:flex-row sm:items-center sm:justify-between lg:px-8"><p>© 2026 aucvia. Prototype concept for India.</p><div className="flex gap-5"><a href="#protection">Trust & safety</a><a href="#top">Terms</a><a href="#top">Contact</a></div></footer>

      {supportOpen && <div className="fixed inset-0 z-50 flex items-end justify-center bg-[#102016]/50 p-4 backdrop-blur-sm sm:items-center" role="dialog" aria-modal="true" aria-label="Contact support"><div className="w-full max-w-lg rounded-3xl bg-[#f8f9f7] p-6 shadow-2xl sm:p-8"><div className="flex items-start justify-between"><div><p className="text-xs font-bold uppercase tracking-[.18em] text-[#80953d]">Customer support</p><h2 className="mt-2 text-3xl font-semibold tracking-[-.04em] text-[#183c29]">How can we help?</h2><p className="mt-2 text-sm leading-6 text-[#6a766d]">Send us a message and our support team will get back to you within one business day.</p></div><Button variant="ghost" size="icon" onClick={() => setSupportOpen(false)} aria-label="Close support dialog"><X /></Button></div>{supportSent ? <div className="mt-7 rounded-2xl bg-[#eff5ef] p-5 text-sm leading-6 text-[#34523c]" role="status"><p className="font-semibold text-[#183c29]">Message received.</p><p className="mt-1">Thanks for reaching out. We&apos;ll follow up shortly.</p><Button onClick={() => setSupportOpen(false)} className="mt-5 rounded-full bg-[#183c29] text-white hover:bg-[#28563b]">Done</Button></div> : <form className="mt-7 grid gap-4" onSubmit={(event) => { event.preventDefault(); setSupportSent(true) }}><label className="grid gap-1.5 text-sm font-medium text-[#34523c]">Your email<input required type="email" placeholder="you@example.com" className="h-11 rounded-xl border border-[#cfdacf] bg-white px-3 font-normal outline-none focus:border-[#78904d]" /></label><label className="grid gap-1.5 text-sm font-medium text-[#34523c]">What do you need help with?<select required defaultValue="" className="h-11 rounded-xl border border-[#cfdacf] bg-white px-3 font-normal outline-none focus:border-[#78904d]"><option value="" disabled>Select a topic</option><option>Campaign question</option><option>Account and security</option><option>Entry support</option><option>Other</option></select></label><label className="grid gap-1.5 text-sm font-medium text-[#34523c]">Message<textarea required rows={4} placeholder="Tell us how we can help" className="resize-none rounded-xl border border-[#cfdacf] bg-white p-3 font-normal outline-none focus:border-[#78904d]" /></label><Button type="submit" className="h-12 rounded-full bg-[#183c29] text-white hover:bg-[#28563b]">Send message <ArrowRight data-icon="inline-end" /></Button></form>}</div></div>}

      {authMode && <div className="fixed inset-0 z-40 flex items-end justify-center bg-[#102016]/50 p-4 backdrop-blur-sm sm:items-center" role="dialog" aria-modal="true" aria-label={authMode === 'sign-in' ? 'Sign in' : 'Create account'}><div className="w-full max-w-md rounded-3xl bg-[#f8f9f7] p-6 shadow-2xl sm:p-8"><div className="flex items-start justify-between"><div><p className="text-xs font-bold uppercase tracking-[.18em] text-[#80953d]">Welcome to aucvia</p><h2 className="mt-2 text-3xl font-semibold tracking-[-.04em] text-[#183c29]">{authMode === 'sign-in' ? 'Sign in to continue' : 'Create your account'}</h2><p className="mt-2 text-sm leading-6 text-[#6a766d]">Save campaigns, reserve slots and keep your entries in one secure place.</p></div><Button variant="ghost" size="icon" onClick={() => setAuthMode(null)} aria-label="Close account dialog"><X /></Button></div><div className="mt-7 grid gap-3"><Button variant="outline" className="h-12 rounded-full border-[#cfdacf] bg-white text-[#294a32]"><span className="mr-2 flex size-6 items-center justify-center rounded-full bg-[#f5f0e8] text-xs font-bold text-[#4285f4]">G</span>Continue with Google</Button><Button variant="outline" className="h-12 rounded-full border-[#cfdacf] bg-white text-[#294a32]"><Mail data-icon="inline-start" />Continue with email</Button><Button variant="outline" className="h-12 rounded-full border-[#cfdacf] bg-white text-[#294a32]"><Smartphone data-icon="inline-start" />Continue with mobile</Button></div><div className="my-6 flex items-center gap-3 text-xs text-[#9aa59b]"><span className="h-px flex-1 bg-[#dce4dc]" />or<span className="h-px flex-1 bg-[#dce4dc]" /></div><Button className="h-12 w-full rounded-full bg-[#183c29] text-white hover:bg-[#28563b]">{authMode === 'sign-in' ? 'Sign in with password' : 'Create with email and password'}</Button><p className="mt-5 text-center text-xs leading-5 text-[#879389]">By continuing, you agree to aucvia&apos;s Terms and Privacy Policy.</p><p className="mt-4 text-center text-sm text-[#68766b]">{authMode === 'sign-in' ? 'New to aucvia?' : 'Already have an account?'} <button className="font-semibold text-[#527124] underline-offset-4 hover:underline" onClick={() => setAuthMode(authMode === 'sign-in' ? 'create' : 'sign-in')}>{authMode === 'sign-in' ? 'Create an account' : 'Sign in'}</button></p></div></div>}

      {selected && <div className="fixed inset-0 z-30 flex items-end justify-center bg-[#102016]/50 p-4 backdrop-blur-sm sm:items-center" role="dialog" aria-modal="true" aria-label="Join property campaign"><div className="w-full max-w-lg rounded-3xl bg-[#f8f9f7] p-6 shadow-2xl"><div className="flex items-start justify-between"><div><p className="text-xs font-bold uppercase tracking-[.18em] text-[#80953d]">Campaign preview</p><h3 className="mt-2 text-2xl font-semibold tracking-tight text-[#183c29]">{selected.title}</h3><p className="mt-1 flex items-center gap-1.5 text-sm text-[#6a766d]"><MapPin className="size-3.5" />{selected.location}</p></div><Button variant="ghost" size="icon" onClick={() => setSelected(null)} aria-label="Close"><X /></Button></div><div className="my-6 grid grid-cols-3 divide-x divide-[#dce4dc] rounded-2xl border border-[#dce4dc] bg-white py-4"><Metric label="Campaign cap" value={selected.campaign} /><Metric label="Slot price" value="₹1" /></div><div className="rounded-2xl bg-[#eff5ef] p-4 text-sm leading-6 text-[#536258]"><div className="flex gap-2"><CircleHelp className="mt-1 size-4 shrink-0 text-[#78923d]" />This is a prototype interaction. No payment is collected and no real property rights are created.</div></div><Button onClick={() => setJoined(true)} className="mt-5 h-12 w-full rounded-full bg-[#183c29] text-white hover:bg-[#28563b]">{joined ? 'Demo slot reserved' : 'Reserve a demo slot'}</Button></div></div>}
    </main>
  )
}

function Step({ icon, number, title, text }: { icon: React.ReactNode; number: string; title: string; text: string }) { return <div className="rounded-2xl border border-[#dce7dc] bg-white/70 p-6"><div className="flex items-center justify-between"><span className="flex size-10 items-center justify-center rounded-xl bg-[#e6f0dc] text-[#557631]">{icon}</span><span className="text-sm font-semibold text-[#a7b6a8]">{number}</span></div><h3 className="mt-8 font-semibold text-[#183c29]">{title}</h3><p className="mt-2 text-sm leading-6 text-[#6c796f]">{text}</p></div> }
function Trust({ icon, title, text }: { icon: React.ReactNode; title: string; text: string }) { return <div className="rounded-2xl border border-white/10 bg-white/[.07] p-5"><span className="flex size-9 items-center justify-center rounded-lg bg-[#d9f17e] text-[#183c29]">{icon}</span><h3 className="mt-5 font-semibold">{title}</h3><p className="mt-2 text-sm leading-6 text-[#bed0c0]">{text}</p></div> }
function Metric({ label, value }: { label: string; value: string }) { return <div className="px-3 text-center"><p className="text-[10px] uppercase tracking-wider text-[#8a958b]">{label}</p><p className="mt-1 font-semibold text-[#183c29]">{value}</p></div> }
function SupportCard({ icon, title, text }: { icon: React.ReactNode; title: string; text: string }) { return <article className="rounded-2xl border border-[#dce7dc] bg-white p-5"><span className="flex size-9 items-center justify-center rounded-lg bg-[#e6f0dc] text-[#557631]">{icon}</span><h3 className="mt-5 font-semibold text-[#183c29]">{title}</h3><p className="mt-2 text-sm leading-6 text-[#6c796f]">{text}</p><a href="#support" className="mt-4 inline-flex text-xs font-semibold text-[#547331]">Learn more <ArrowRight data-icon="inline-end" /></a></article> }
function PropertyCard({ property, onClick }: { property: (typeof properties)[number]; onClick: () => void }) { return <article className="group overflow-hidden rounded-2xl border border-[#dce4dc] bg-white transition hover:-translate-y-1 hover:shadow-xl hover:shadow-[#20462d]/10"><div className="relative"><img src={property.image} alt={property.title} className="h-56 w-full object-cover transition duration-500 group-hover:scale-105" /><span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-[11px] font-semibold text-[#365238] backdrop-blur">{property.tag}</span><span className="absolute bottom-4 right-4 flex items-center gap-1 rounded-full bg-[#183c29] px-3 py-1.5 text-xs font-semibold text-[#d9f17e]"><Clock3 className="size-3.5" /> {property.ends}</span></div><div className="p-5"><h3 className="font-semibold tracking-[-.01em] text-[#1e3527]">{property.title}</h3><p className="mt-1 flex items-center gap-1 text-sm text-[#748077]"><MapPin className="size-3.5" />{property.location}</p><div className="mt-5 border-y border-[#e8eee8] py-4"><p className="text-[10px] uppercase tracking-wide text-[#8b968d]">Campaign cap</p><p className="mt-1 text-sm font-semibold text-[#294a32]">{property.campaign}</p></div><div className="mt-4 flex items-center justify-between text-xs text-[#78847a]"><span>{property.filled}% slots filled</span><span className="font-medium text-[#45634c]">{property.slots} total</span></div><div className="mt-2 h-1.5 overflow-hidden rounded-full bg-[#e8eee7]"><div className="h-full rounded-full bg-[#9eb950]" style={{ width: `${property.filled}%` }} /></div><Button onClick={onClick} className="mt-5 h-10 w-full rounded-full bg-[#eff5ef] text-[#294d35] hover:bg-[#e2eddf]">View campaign <ArrowRight data-icon="inline-end" /></Button></div></article> }
