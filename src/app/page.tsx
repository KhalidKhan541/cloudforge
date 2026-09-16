import Link from 'next/link'
import { MARKETPLACE_APPS } from '@/lib/constants'

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white">
      <nav className="flex items-center justify-between px-6 lg:px-8 py-4 max-w-7xl mx-auto">
        <div className="flex items-center gap-2"><div className="w-9 h-9 rounded-lg bg-gradient-to-br from-forge-500 to-blue-500 flex items-center justify-center text-white text-sm font-bold">CF</div><span className="text-xl font-bold text-gray-900">CloudForge</span></div>
        <div className="flex items-center gap-4"><Link href="/dashboard" className="text-sm text-gray-600 hover:text-gray-900 font-medium">Demo</Link><Link href="/dashboard" className="px-5 py-2.5 bg-forge-600 text-white rounded-xl text-sm font-medium shadow-sm shadow-forge-500/25">Get Started →</Link></div>
      </nav>
      <section className="text-center px-6 pt-24 pb-28 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight">Enterprise cloud infrastructure,<br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-forge-600 to-blue-500">simplified</span></h1>
        <p className="text-xl text-gray-500 mt-6 max-w-2xl mx-auto">Servers, Kubernetes, CI/CD pipelines, databases, DNS, CDN, and {MARKETPLACE_APPS.length}+ marketplace apps — managed from one platform.</p>
        <div className="flex items-center justify-center gap-4 mt-10"><Link href="/dashboard" className="px-8 py-3.5 bg-gradient-to-r from-forge-500 to-blue-500 text-white rounded-xl font-semibold shadow-lg">Start Free →</Link><Link href="#pricing" className="px-8 py-3.5 border border-gray-200 rounded-xl font-semibold text-gray-700">View Pricing</Link></div>
      </section>
      <section className="px-6 py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto"><h2 className="text-3xl font-bold text-gray-900 text-center">Everything you need to deploy</h2><p className="text-gray-500 mt-2 text-center">From bare metal to production in minutes</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
            {[{ i: '🖥️', t: 'Servers', d: 'Scalable compute from $5/mo' }, { i: '☸️', t: 'Kubernetes', d: 'Managed K8s clusters' }, { i: '🔄', t: 'CI/CD', d: 'Automated deployments' }, { i: '🗄️', t: 'Databases', d: 'PostgreSQL, MySQL, Redis, MongoDB' }, { i: '🌐', t: 'CDN', d: 'Global edge caching' }, { i: '🔗', t: 'DNS', d: 'Managed DNS records' }, { i: '🛡️', t: 'Firewall', d: 'DDoS protection & rules' }, { i: '🛒', t: 'Marketplace', d: `${MARKETPLACE_APPS.length}+ apps` }].map(f => (
                <div key={f.t} className="p-5 bg-white rounded-2xl border border-gray-100 hover:shadow-lg transition-all text-center"><span className="text-3xl">{f.i}</span><h3 className="text-sm font-semibold text-gray-900 mt-3">{f.t}</h3><p className="text-xs text-gray-400 mt-1">{f.d}</p></div>
              ))}
          </div></div>
      </section>
      <section className="px-6 py-24" id="pricing">
        <div className="max-w-5xl mx-auto text-center"><h2 className="text-3xl font-bold text-gray-900">Simple, transparent pricing</h2><p className="text-gray-500 mt-2">No hidden fees. Pay for what you use.</p>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-12">
            {[{ n: 'Starter', p: 0, f: ['1 server', '1 database', '1 TB bandwidth', 'Community support'] }, { n: 'Pro', p: 49, f: ['5 servers', '3 databases', '5 TB bandwidth', 'CI/CD', 'Email support'], pop: true }, { n: 'Business', p: 249, f: ['25 servers', '10 databases', '20 TB bandwidth', 'Kubernetes', 'CDN', 'Priority support'] }, { n: 'Enterprise', p: 999, f: ['Unlimited everything', '100 TB bandwidth', 'Custom SLA', 'Dedicated support', 'On-premise'] }].map(p => (
                <div key={p.n} className={`p-6 rounded-2xl border text-left ${p.pop ? 'border-forge-500 shadow-lg' : 'border-gray-200'} relative`}>
                  {p.pop && <div className="absolute -top-3 left-6 px-3 py-0.5 bg-forge-600 text-white text-xs font-semibold rounded-full">Popular</div>}
                  <h3 className="text-base font-bold text-gray-900">{p.n}</h3>
                  <p className="text-3xl font-bold text-gray-900 mt-2">{p.p === 0 ? 'Free' : `$${p.p}`}<span className="text-sm text-gray-400">{p.p > 0 ? '/mo' : ''}</span></p>
                  <ul className="mt-4 space-y-2">{p.f.map(f => <li key={f} className="flex items-center gap-2 text-xs text-gray-600"><span className="text-emerald-500">✓</span>{f}</li>)}</ul>
                  <Link href="/dashboard" className={`block mt-5 text-center py-2.5 rounded-xl text-sm font-medium ${p.pop ? 'bg-forge-600 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}>Get Started</Link>
                </div>
              ))}</div></div>
      </section>
      <footer className="border-t border-gray-100 px-6 py-8 text-center text-sm text-gray-400"><p>© 2026 CloudForge. Built by <a href="https://github.com/KhalidKhan541" className="text-forge-600">KhalidKhan541</a></p></footer>
    </div>
  )
}
