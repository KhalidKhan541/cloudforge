import Card, { CardHeader, CardTitle } from '@/components/ui/Card'
import Badge from '@/components/ui/Badge'

const functions = [
  { name: 'process-webhook', runtime: 'Node.js 20', memory: '256 MB', timeout: '30s', invocations: 45200, avgDuration: '120ms', status: 'active', lastDeployed: '2 hours ago' },
  { name: 'send-notification', runtime: 'Node.js 20', memory: '128 MB', timeout: '10s', invocations: 28400, avgDuration: '85ms', status: 'active', lastDeployed: '1 day ago' },
  { name: 'resize-image', runtime: 'Python 3.12', memory: '512 MB', timeout: '60s', invocations: 12800, avgDuration: '2.3s', status: 'active', lastDeployed: '3 days ago' },
  { name: 'generate-report', runtime: 'Node.js 20', memory: '256 MB', timeout: '120s', invocations: 3400, avgDuration: '8.5s', status: 'active', lastDeployed: '1 week ago' },
  { name: 'cleanup-expired', runtime: 'Python 3.12', memory: '128 MB', timeout: '300s', invocations: 1200, avgDuration: '45s', status: 'active', lastDeployed: '2 weeks ago' },
]

export default function FunctionsPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div><h2 className="text-2xl font-bold text-gray-900 dark:text-white">Serverless Functions</h2><p className="text-gray-500">{functions.length} functions deployed</p></div>
        <button className="px-5 py-2.5 bg-forge-600 text-white rounded-xl text-sm font-medium">+ Deploy Function</button>
      </div>
      <div className="space-y-3">
        {functions.map(f => (
          <Card key={f.name} hover glow>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-forge-50 dark:bg-forge-500/10 flex items-center justify-center text-lg">⚡</div>
                <div>
                  <div className="flex items-center gap-2"><h3 className="text-sm font-semibold text-gray-900 dark:text-white font-mono">{f.name}</h3><Badge variant="success" dot>Active</Badge></div>
                  <p className="text-xs text-gray-400 mt-0.5">{f.runtime} · {f.memory} · {f.timeout}</p>
                </div>
              </div>
              <div className="flex items-center gap-8 text-center">
                <div><p className="text-sm font-semibold text-gray-900 dark:text-white">{f.invocations.toLocaleString()}</p><p className="text-xs text-gray-400">Invocations</p></div>
                <div><p className="text-sm font-semibold text-forge-600">{f.avgDuration}</p><p className="text-xs text-gray-400">Avg Duration</p></div>
                <div><p className="text-xs text-gray-400">{f.lastDeployed}</p><p className="text-xs text-gray-500">Last Deploy</p></div>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  )
}
