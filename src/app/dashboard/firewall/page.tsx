import Card, { CardHeader, CardTitle } from '@/components/ui/Card'
import Badge from '@/components/ui/Badge'
import Button from '@/components/ui/Button'
import { MOCK_FIREWALL } from '@/lib/mock-data'

export default function FirewallPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div><h2 className="text-2xl font-bold text-gray-900 dark:text-white">Firewall</h2><p className="text-gray-500">Network security rules and DDoS protection</p></div>
        <Button>+ Add Rule</Button>
      </div>
      <div className="grid grid-cols-3 gap-4">
        <Card><div className="flex items-center gap-3"><span className="text-2xl">🛡️</span><div><p className="text-sm text-gray-500">DDoS Protection</p><Badge variant="success" dot>Active</Badge></div></div></Card>
        <Card><div className="flex items-center gap-3"><span className="text-2xl">🚫</span><div><p className="text-sm text-gray-500">Blocked Requests</p><p className="text-xl font-bold text-gray-900 dark:text-white">{MOCK_FIREWALL.ddos.blocked.toLocaleString()}</p></div></div></Card>
        <Card><div className="flex items-center gap-3"><span className="text-2xl">📊</span><div><p className="text-sm text-gray-500">Attack Rate</p><p className="text-xl font-bold text-gray-900 dark:text-white">{MOCK_FIREWALL.ddos.rate}</p></div></div></Card>
      </div>
      <Card padding={false}>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead><tr className="border-b border-gray-100 dark:border-gray-800 bg-gray-50/50">
              <th className="text-left px-5 py-3 text-xs font-semibold text-gray-500 uppercase">Name</th>
              <th className="text-left px-5 py-3 text-xs font-semibold text-gray-500 uppercase">Protocol</th>
              <th className="text-left px-5 py-3 text-xs font-semibold text-gray-500 uppercase">Port</th>
              <th className="text-left px-5 py-3 text-xs font-semibold text-gray-500 uppercase">Source</th>
              <th className="text-center px-5 py-3 text-xs font-semibold text-gray-500 uppercase">Action</th>
              <th className="text-center px-5 py-3 text-xs font-semibold text-gray-500 uppercase">Priority</th>
              <th className="text-left px-5 py-3 text-xs font-semibold text-gray-500 uppercase">Targets</th>
            </tr></thead>
            <tbody>
              {MOCK_FIREWALL.rules.map(r => (
                <tr key={r.id} className="border-b border-gray-50 dark:border-gray-800/50 hover:bg-gray-50 dark:hover:bg-gray-800/50">
                  <td className="px-5 py-3.5 text-sm font-medium text-gray-900 dark:text-white">{r.name}</td>
                  <td className="px-5 py-3.5 text-sm text-gray-500 font-mono">{r.protocol}</td>
                  <td className="px-5 py-3.5 text-sm text-gray-500 font-mono">{r.port}</td>
                  <td className="px-5 py-3.5 text-sm text-gray-500 font-mono">{r.source}</td>
                  <td className="px-5 py-3.5 text-center"><Badge variant={r.action === 'allow' ? 'success' : 'danger'}>{r.action}</Badge></td>
                  <td className="px-5 py-3.5 text-center text-sm text-gray-500">{r.priority}</td>
                  <td className="px-5 py-3.5 text-sm text-gray-500">{r.targets}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  )
}
