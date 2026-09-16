import Card, { CardHeader, CardTitle } from '@/components/ui/Card'
import Badge from '@/components/ui/Badge'
import StatusIndicator from '@/components/ui/StatusIndicator'
import { MOCK_LOADBALANCERS } from '@/lib/mock-data'

export default function LoadBalancersPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div><h2 className="text-2xl font-bold text-gray-900 dark:text-white">Load Balancers</h2><p className="text-gray-500">{MOCK_LOADBALANCERS.length} load balancers</p></div>
        <button className="px-5 py-2.5 bg-forge-600 text-white rounded-xl text-sm font-medium">+ Create Load Balancer</button>
      </div>
      <div className="space-y-4">
        {MOCK_LOADBALANCERS.map(lb => (
          <Card key={lb.id} hover glow>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-forge-50 dark:bg-forge-500/10 flex items-center justify-center text-xl">⚖️</div>
                <div>
                  <div className="flex items-center gap-2"><h3 className="text-base font-semibold text-gray-900 dark:text-white">{lb.name}</h3><StatusIndicator status="active" /><Badge>{lb.type}</Badge></div>
                  <p className="text-sm text-gray-500 mt-1">{lb.region} · {lb.protocol}:{lb.port}</p>
                </div>
              </div>
              <div className="flex gap-8 text-center">
                <div><p className="text-lg font-bold text-gray-900 dark:text-white">{lb.targets}</p><p className="text-xs text-gray-400">Targets</p></div>
                <div><p className="text-lg font-bold text-emerald-600">{lb.healthy}/{lb.targets}</p><p className="text-xs text-gray-400">Healthy</p></div>
                <div><p className="text-lg font-bold text-forge-600">{lb.requests}</p><p className="text-xs text-gray-400">Req/s</p></div>
                <div><p className="text-lg font-bold text-gray-900 dark:text-white">{lb.latency}</p><p className="text-xs text-gray-400">Latency</p></div>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  )
}
