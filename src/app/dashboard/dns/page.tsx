import Card, { CardHeader, CardTitle } from '@/components/ui/Card'
import Badge from '@/components/ui/Badge'
import Button from '@/components/ui/Button'
import { MOCK_DNS } from '@/lib/mock-data'

export default function DNSPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div><h2 className="text-2xl font-bold text-gray-900 dark:text-white">DNS Management</h2><p className="text-gray-500">{MOCK_DNS.length} records across your domains</p></div>
        <Button>+ Add Record</Button>
      </div>
      <Card padding={false}>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead><tr className="border-b border-gray-100 dark:border-gray-800 bg-gray-50/50">
              <th className="text-left px-5 py-3 text-xs font-semibold text-gray-500 uppercase">Domain</th>
              <th className="text-left px-5 py-3 text-xs font-semibold text-gray-500 uppercase">Type</th>
              <th className="text-left px-5 py-3 text-xs font-semibold text-gray-500 uppercase">Value</th>
              <th className="text-right px-5 py-3 text-xs font-semibold text-gray-500 uppercase">TTL</th>
              <th className="text-center px-5 py-3 text-xs font-semibold text-gray-500 uppercase">Status</th>
            </tr></thead>
            <tbody>
              {MOCK_DNS.map(d => (
                <tr key={d.id} className="border-b border-gray-50 dark:border-gray-800/50 hover:bg-gray-50 dark:hover:bg-gray-800/50">
                  <td className="px-5 py-3.5 text-sm font-medium text-gray-900 dark:text-white">{d.domain}</td>
                  <td className="px-5 py-3.5"><Badge variant="forge">{d.type}</Badge></td>
                  <td className="px-5 py-3.5 text-sm text-gray-500 font-mono">{d.value}</td>
                  <td className="px-5 py-3.5 text-right text-sm text-gray-500">{d.ttl}s</td>
                  <td className="px-5 py-3.5 text-center"><Badge variant="success" dot>{d.status}</Badge></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  )
}
