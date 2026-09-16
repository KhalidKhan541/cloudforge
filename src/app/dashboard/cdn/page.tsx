import Card, { CardHeader, CardTitle } from '@/components/ui/Card'
import Badge from '@/components/ui/Badge'
import { MOCK_CDN } from '@/lib/mock-data'

export default function CDNPage() {
  const s = MOCK_CDN.stats
  return (
    <div className="space-y-6">
      <div><h2 className="text-2xl font-bold text-gray-900 dark:text-white">CDN</h2><p className="text-gray-500">Content Delivery Network configuration</p></div>
      <div className="grid grid-cols-5 gap-4">
        {[{ l: 'Bandwidth', v: s.bandwidth }, { l: 'Requests', v: s.requests }, { l: 'Cached', v: s.cached }, { l: 'Hit Rate', v: s.hitRate }, { l: 'Avg Latency', v: s.avgLatency }].map(m => (
          <Card key={m.l}><p className="text-sm text-gray-500">{m.l}</p><p className="text-xl font-bold text-gray-900 dark:text-white mt-1">{m.v}</p></Card>
        ))}
      </div>
      <div className="space-y-4">
        {MOCK_CDN.zones.map(z => (
          <Card key={z.id} hover glow>
            <div className="flex items-center justify-between">
              <div><div className="flex items-center gap-2"><h3 className="text-base font-semibold text-gray-900 dark:text-white">{z.domain}</h3><Badge variant="success" dot>Active</Badge>{z.ssl && <Badge variant="forge">SSL</Badge>}</div><p className="text-sm text-gray-500 mt-1">Origin: {z.origin}</p></div>
              <div className="flex gap-8 text-center">
                <div><p className="text-lg font-bold text-gray-900 dark:text-white">{z.bandwidth}</p><p className="text-xs text-gray-400">Bandwidth</p></div>
                <div><p className="text-lg font-bold text-emerald-600">{z.cache}</p><p className="text-xs text-gray-400">Cache Hit</p></div>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  )
}
