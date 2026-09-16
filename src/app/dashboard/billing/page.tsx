import Card, { CardTitle, CardDescription } from '@/components/ui/Card'
import Badge from '@/components/ui/Badge'
import Button from '@/components/ui/Button'
import { MOCK_BILLING } from '@/lib/mock-data'
import { formatCurrency } from '@/lib/utils'

const plans = [
  { name: 'Starter', price: 0, features: ['1 server', '1 database', '1 TB bandwidth', 'Community support'] },
  { name: 'Pro', price: 49, features: ['5 servers', '3 databases', '5 TB bandwidth', 'Email support', 'CI/CD'], popular: true },
  { name: 'Business', price: 249, features: ['25 servers', '10 databases', '20 TB bandwidth', 'Priority support', 'Kubernetes', 'CDN'] },
  { name: 'Enterprise', price: 999, features: ['Unlimited', 'Unlimited', '100 TB bandwidth', 'Dedicated support', 'Custom SLA', 'On-premise'] },
]

export default function BillingPage() {
  const u = MOCK_BILLING.usage
  const total = Object.values(u).reduce((s, v) => s + v, 0)
  return (
    <div className="space-y-6">
      <div><h2 className="text-2xl font-bold text-gray-900 dark:text-white">Billing</h2><p className="text-gray-500">Manage your subscription and payments</p></div>
      <Card className="bg-gradient-to-br from-forge-500 via-blue-600 to-indigo-600 text-white border-0">
        <div className="flex items-center justify-between">
          <div><Badge className="bg-white/20 text-white">Current Plan</Badge><h3 className="text-3xl font-bold mt-3">Business</h3><p className="text-white/70 mt-1">Next renewal: Oct 1, 2026</p></div>
          <div className="text-right"><p className="text-4xl font-bold">$249<span className="text-base font-normal text-white/60">/mo</span></p><Button variant="outline" className="mt-3 border-white/30 text-white hover:bg-white/10">Manage</Button></div>
        </div>
      </Card>
      <Card><CardTitle className="mb-3">Usage Breakdown</CardTitle>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {Object.entries(u).map(([k, v]) => (
            <div key={k} className="p-3 bg-gray-50 dark:bg-gray-800/50 rounded-xl">
              <p className="text-xs text-gray-500 capitalize">{k}</p>
              <p className="text-lg font-bold text-gray-900 dark:text-white mt-1">{formatCurrency(v)}</p>
              <div className="w-full h-1.5 bg-gray-200 dark:bg-gray-700 rounded-full mt-2 overflow-hidden"><div className="h-full bg-forge-500 rounded-full" style={{ width: `${(v / total) * 100}%` }} /></div>
            </div>
          ))}
        </div>
      </Card>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {plans.map(p => (
          <Card key={p.name} className={p.popular ? 'ring-2 ring-forge-500' : ''}>
            {p.popular && <div className="text-center mb-2"><Badge variant="forge">Current</Badge></div>}
            <h3 className="text-base font-bold text-gray-900 dark:text-white">{p.name}</h3>
            <p className="text-2xl font-bold text-gray-900 dark:text-white mt-2">{p.price === 0 ? 'Free' : formatCurrency(p.price)}<span className="text-sm text-gray-500">{p.price > 0 ? '/mo' : ''}</span></p>
            <ul className="mt-4 space-y-2">{p.features.map(f => <li key={f} className="flex items-center gap-2 text-xs text-gray-600 dark:text-gray-400"><span className="text-emerald-500">✓</span>{f}</li>)}</ul>
            <Button variant={p.popular ? 'primary' : 'outline'} className="w-full mt-5" size="sm" disabled={p.popular}>{p.popular ? 'Current' : 'Upgrade'}</Button>
          </Card>
        ))}
      </div>
      <Card><CardTitle className="mb-3">Invoices</CardTitle>
        <div className="space-y-2">{MOCK_BILLING.invoices.map(inv => (
          <div key={inv.id} className="flex items-center justify-between p-3 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-800/50">
            <div className="flex items-center gap-4"><span className="text-sm font-mono font-medium text-gray-900 dark:text-white">{inv.id}</span><span className="text-sm text-gray-500">{inv.date}</span></div>
            <div className="flex items-center gap-4"><Badge variant="success">{inv.status}</Badge><span className="text-sm font-semibold text-gray-900 dark:text-white">{formatCurrency(inv.amount)}</span></div>
          </div>
        ))}</div></Card>
    </div>
  )
}
