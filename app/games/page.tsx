'use client'

import { useMemo, useState } from 'react'
import { ArrowLeft, ArrowRight, Check, Gamepad2, Gavel, Search, ShieldCheck, Ticket, Users, X } from 'lucide-react'
import { Button } from '@/components/ui/button'

const campaigns = [
  { id: 'ps5', title: 'PlayStation 5 Slim', category: 'Consoles', value: '₹49,990', cap: '50,000', filled: 68, ends: '3d 14h', image: 'https://images.unsplash.com/photo-1606813907291-d86efa9b94db?auto=format&fit=crop&w=1000&q=85', tag: 'Featured' },
  { id: 'switch', title: 'Nintendo Switch OLED', category: 'Consoles', value: '₹34,990', cap: '35,000', filled: 39, ends: '6d 08h', image: 'https://images.unsplash.com/photo-1578303512597-81e6cc155b3e?auto=format&fit=crop&w=1000&q=85', tag: 'New' },
  { id: 'bundle', title: 'Ultimate gaming bundle', category: 'Games & accessories', value: '₹24,990', cap: '25,000', filled: 84, ends: '1d 22h', image: 'https://images.unsplash.com/photo-1593305841991-05c297ba4575?auto=format&fit=crop&w=1000&q=85', tag: 'Almost full' },
  { id: 'headset', title: 'Pro wireless headset', category: 'Games & accessories', value: '₹18,990', cap: '19,000', filled: 27, ends: '9d 04h', image: 'https://images.unsplash.com/photo-1599669454699-248893623440?auto=format&fit=crop&w=1000&q=85', tag: 'New' },
]

export default function GamesPage() {
  const [query, setQuery] = useState('')
  const [category, setCategory] = useState('All items')
  const [authOpen, setAuthOpen] = useState(false)
  const [joined, setJoined] = useState<string | null>(null)
  const filtered = useMemo(() => campaigns.filter((item) => `${item.title} ${item.category}`.toLowerCase().includes(query.toLowerCase()) && (category === 'All items' || item.category === category)), [query, category])

  return (
    <main className="min-h-screen bg-[#f8f9f7] text-[#17221d]">
      <div className="border-b border-[#dce4dc] bg-[#edf5ed] px-5 py-2 text-center text-xs font-medium text-[#356346]">Prototype preview · Gaming campaigns are illustrative and not open for real-money transactions.</div>
      <header className="border-b border-[#e5ebe5] bg-[#f8f9f7]">
        <div className="mx-auto flex h-[72px] max-w-[1240px] items-center justify-between px-5 lg:px-8">
          <a href="/" className="flex items-center gap-3" aria-label="Aucvia home"><span className="flex size-10 items-center justify-center rounded-xl bg-[#183c29] text-[#d9f17e]"><Gavel className="size-5" /></span><span className="text-[21px] font-semibold tracking-[-0.04em]">aucvia<span className="text-[#8a9f37]">.</span></span></a>
          <nav className="hidden items-center gap-8 text-sm font-medium text-[#5d695f] md:flex"><a href="/">Properties</a><a className="text-[#183c29]" href="/games">PS5 & games</a><a href="/#how-it-works">How it works</a><a href="/#support">Support</a></nav>
          <div className="flex items-center gap-3"><Button variant="ghost" onClick={() => setAuthOpen(true)} className="hidden text-[#506056] sm:inline-flex">Sign in</Button><Button onClick={() => setAuthOpen(true)} className="rounded-full bg-[#183c29] px-5 text-white hover:bg-[#28563b]">Create account</Button></div>
        </div>
      </header>

      <section className="mx-auto max-w-[1240px] px-5 pb-14 pt-14 lg:px-8 lg:pt-20">
        <a href="/" className="inline-flex items-center gap-2 text-sm font-medium text-[#68766b] hover:text-[#183c29]"><ArrowLeft data-icon="inline-start" /> Back to properties</a>
        <div className="mt-8 grid gap-10 lg:grid-cols-[1fr_.8fr] lg:items-end"><div><div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#d5e2c1] bg-[#e7f0dc] px-3 py-1.5 text-xs font-semibold text-[#527124]"><Gamepad2 className="size-3.5" /> Dedicated category</div><h1 className="max-w-2xl text-5xl font-medium leading-[1.02] tracking-[-.065em] text-[#183c29] sm:text-7xl">Play more. <span className="text-[#91a93d]">Chance more.</span></h1><p className="mt-6 max-w-xl text-lg leading-8 text-[#647169]">A dedicated home for consoles, games and gear. Every campaign uses the same simple ₹1 slot model and a transparent random draw.</p></div><div className="rounded-3xl bg-[#183c29] p-6 text-[#f5f8ef] shadow-[0_20px_60px_rgba(28,66,42,.14)]"><p className="text-xs font-bold uppercase tracking-[.18em] text-[#d9f17e]">How this category works</p><div className="mt-5 grid gap-4 sm:grid-cols-3 lg:grid-cols-1"><MiniStep icon={<Ticket />} text="Pick a campaign and claim ₹1 slots." /><MiniStep icon={<ShieldCheck />} text="See the cap, progress and closing date." /><MiniStep icon={<Users />} text="A random draw chooses one winner." /></div></div></div>
      </section>

      <section className="border-y border-[#e1e9e1] bg-[#f0f5ed] px-5 py-10 lg:px-8"><div className="mx-auto flex max-w-[1240px] flex-col gap-5 md:flex-row md:items-center md:justify-between"><div><p className="text-xs font-bold uppercase tracking-[.2em] text-[#80953d]">Open campaigns</p><h2 className="mt-2 text-3xl font-medium tracking-[-.04em] text-[#183c29]">Find your next setup.</h2></div><div className="flex flex-col gap-3 sm:flex-row"><div className="relative"><Search className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-[#8b978e]" /><input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search campaigns" className="h-11 w-full rounded-full border border-[#dce4dc] bg-white pl-9 pr-4 text-sm outline-none focus:border-[#78904d] sm:w-60" /></div><select value={category} onChange={(e) => setCategory(e.target.value)} aria-label="Filter gaming category" className="h-11 rounded-full border border-[#dce4dc] bg-white px-4 text-sm text-[#34523c] outline-none"><option>All items</option><option>Consoles</option><option>Games & accessories</option></select></div></div></section>

      <section className="mx-auto max-w-[1240px] px-5 py-12 lg:px-8"><div className="grid gap-6 md:grid-cols-2">{filtered.map((item) => <article key={item.id} className="overflow-hidden rounded-3xl border border-[#e0e8df] bg-white shadow-[0_8px_28px_rgba(31,64,39,.05)]"><div className="relative"><img src={item.image} alt={item.title} className="h-64 w-full object-cover" /><span className="absolute left-4 top-4 rounded-full bg-[#d9f17e] px-3 py-1 text-xs font-bold text-[#234632]">{item.tag}</span></div><div className="p-6"><div className="flex items-start justify-between gap-4"><div><p className="text-xs font-semibold uppercase tracking-[.16em] text-[#80953d]">{item.category}</p><h3 className="mt-2 text-2xl font-semibold tracking-[-.04em] text-[#183c29]">{item.title}</h3></div><p className="whitespace-nowrap text-sm font-semibold text-[#34523c]">{item.value}</p></div><div className="mt-6 flex items-center justify-between text-xs text-[#68766b]"><span>{Math.round(Number(item.cap.replace(/,/g, '')) * item.filled / 100).toLocaleString('en-IN')} / {item.cap} slots filled</span><span>{item.ends} left</span></div><div className="mt-2 h-2 overflow-hidden rounded-full bg-[#e8eee7]"><div className="h-full rounded-full bg-[#91a93d]" style={{ width: `${item.filled}%` }} /></div><div className="mt-6 flex items-center justify-between gap-3"><p className="text-sm text-[#68766b]">Each slot <strong className="text-[#183c29]">₹1</strong></p><Button onClick={() => setAuthOpen(true)} className="rounded-full bg-[#183c29] text-white hover:bg-[#28563b]">{joined === item.id ? 'Account needed' : 'Join campaign'} <ArrowRight data-icon="inline-end" /></Button></div></div></article>)}</div>{filtered.length === 0 && <p className="py-16 text-center text-sm text-[#68766b]">No campaigns match your search.</p>}</section>

      <footer className="border-t border-[#dce7dc] px-5 py-8 text-center text-xs text-[#778278]"><p>© 2026 aucvia. Prototype concept for India.</p></footer>
      {authOpen && <div className="fixed inset-0 z-50 flex items-end justify-center bg-[#102016]/50 p-4 backdrop-blur-sm sm:items-center"><div className="w-full max-w-md rounded-3xl bg-[#f8f9f7] p-6 shadow-2xl sm:p-8"><div className="flex items-start justify-between"><div><p className="text-xs font-bold uppercase tracking-[.18em] text-[#80953d]">Join a campaign</p><h2 className="mt-2 text-3xl font-semibold tracking-[-.04em] text-[#183c29]">Create your account</h2><p className="mt-2 text-sm leading-6 text-[#6a766d]">Sign in to reserve slots and track your entries.</p></div><Button variant="ghost" size="icon" onClick={() => setAuthOpen(false)} aria-label="Close account dialog"><X /></Button></div><div className="mt-7 grid gap-3"><Button variant="outline" className="h-12 rounded-full border-[#cfdacf] bg-white text-[#294a32]"><span className="mr-2 flex size-6 items-center justify-center rounded-full bg-[#f5f0e8] text-xs font-bold text-[#4285f4]">G</span>Continue with Google</Button><Button onClick={() => setAuthOpen(false)} className="h-12 rounded-full bg-[#183c29] text-white hover:bg-[#28563b]">Continue with email</Button></div><div className="mt-6 flex items-center gap-2 text-xs text-[#879389]"><Check className="size-4 text-[#80953d]" /> Prototype account flow — no payment is taken.</div></div></div>}
    </main>
  )
}

function MiniStep({ icon, text }: { icon: React.ReactNode; text: string }) { return <div className="flex items-center gap-3 text-sm leading-5 text-[#d5e1d5]"><span className="flex size-9 shrink-0 items-center justify-center rounded-xl bg-white/10 text-[#d9f17e]">{icon}</span>{text}</div> }
