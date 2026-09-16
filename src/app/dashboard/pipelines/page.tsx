'use client'
import Card, { CardHeader, CardTitle } from '@/components/ui/Card'
import Badge from '@/components/ui/Badge'
import Tabs from '@/components/ui/Tabs'
import StatusIndicator from '@/components/ui/StatusIndicator'
import { MOCK_PIPELINES, MOCK_PIPELINES_RUNS } from '@/lib/mock-data'
import { cn } from '@/lib/utils'

export default function PipelinesPage() {
  const statusVariant = { success: 'success' as const, running: 'forge' as const, failed: 'danger' as const, pending: 'default' as const }
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div><h2 className="text-2xl font-bold text-gray-900 dark:text-white">CI/CD Pipelines</h2><p className="text-gray-500">{MOCK_PIPELINES.length} pipelines</p></div>
        <button className="px-5 py-2.5 bg-forge-600 text-white rounded-xl text-sm font-medium">+ New Pipeline</button>
      </div>
      <Tabs tabs={[
        { label: 'Pipelines', content: (
          <div className="space-y-4">
            {MOCK_PIPELINES.map(p => (
              <Card key={p.id} hover glow>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <h3 className="text-base font-semibold text-gray-900 dark:text-white font-mono">{p.name}</h3>
                    <StatusIndicator status={p.status} />
                  </div>
                  <div className="flex items-center gap-4 text-sm text-gray-500">
                    <span>{p.branch}</span><span>{p.lastRun}</span><span>{p.runs} runs</span><span className="font-medium text-emerald-600">{p.successRate}%</span>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  {p.stages.map((stage, i) => (
                    <div key={i} className="flex items-center gap-2 flex-1">
                      <div className={cn('flex-1 h-2 rounded-full',
                        stage.status === 'success' ? 'bg-emerald-500' : stage.status === 'running' ? 'bg-forge-500 animate-pulse' : stage.status === 'failed' ? 'bg-red-500' : 'bg-gray-200 dark:bg-gray-700'
                      )} />
                      <div className="text-center shrink-0" style={{ width: '80px' }}>
                        <p className="text-[10px] text-gray-400">{stage.name}</p>
                        <p className="text-[10px] font-medium text-gray-600 dark:text-gray-400">{stage.duration}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        )},
        { label: 'Recent Runs', content: (
          <Card padding={false}>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead><tr className="border-b border-gray-100 dark:border-gray-800 bg-gray-50/50">
                  <th className="text-left px-5 py-3 text-xs font-semibold text-gray-500 uppercase">Pipeline</th>
                  <th className="text-left px-5 py-3 text-xs font-semibold text-gray-500 uppercase">Commit</th>
                  <th className="text-left px-5 py-3 text-xs font-semibold text-gray-500 uppercase">Message</th>
                  <th className="text-left px-5 py-3 text-xs font-semibold text-gray-500 uppercase">Author</th>
                  <th className="text-center px-5 py-3 text-xs font-semibold text-gray-500 uppercase">Status</th>
                  <th className="text-left px-5 py-3 text-xs font-semibold text-gray-500 uppercase">Duration</th>
                </tr></thead>
                <tbody>
                  {MOCK_PIPELINES_RUNS.map(r => (
                    <tr key={r.id} className="border-b border-gray-50 dark:border-gray-800/50 hover:bg-gray-50 dark:hover:bg-gray-800/50">
                      <td className="px-5 py-3.5 text-sm font-medium text-gray-900 dark:text-white font-mono">{r.pipeline}</td>
                      <td className="px-5 py-3.5 text-sm text-gray-500 font-mono">{r.commit}</td>
                      <td className="px-5 py-3.5 text-sm text-gray-600 dark:text-gray-400 max-w-xs truncate">{r.message}</td>
                      <td className="px-5 py-3.5 text-sm text-gray-500">{r.author}</td>
                      <td className="px-5 py-3.5 text-center"><Badge variant={statusVariant[r.status as keyof typeof statusVariant]}>{r.status}</Badge></td>
                      <td className="px-5 py-3.5 text-sm text-gray-500">{r.duration}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Card>
        )},
      ]} />
    </div>
  )
}
