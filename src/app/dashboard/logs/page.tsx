'use client'
import { useState } from 'react'
import Card, { CardTitle } from '@/components/ui/Card'
import Badge from '@/components/ui/Badge'
import { MOCK_LOGS } from '@/lib/mock-data'
import { cn } from '@/lib/utils'

export default function LogsPage() {
  const [level, setLevel] = useState('all')
  const filtered = level === 'all' ? MOCK_LOGS : MOCK_LOGS.filter(l => l.level === level)
  const levelVariant = { info: 'default' as const, warn: 'warning' as const, error: 'danger' as const }
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div><h2 className="text-2xl font-bold text-gray-900 dark:text-white">Logs</h2><p className="text-gray-500">Real-time log streaming from all services</p></div>
        <div className="flex gap-2">
          {['all', 'info', 'warn', 'error'].map(l => (
            <button key={l} onClick={() => setLevel(l)} className={cn('px-3 py-1.5 rounded-lg text-xs font-medium', level === l ? 'bg-forge-600 text-white' : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400')}>{l === 'all' ? 'All' : l.toUpperCase()}</button>
          ))}
        </div>
      </div>
      <Card padding={false}>
        <div className="p-4 bg-gray-900 rounded-2xl max-h-[600px] overflow-y-auto font-mono text-sm">
          {filtered.map((log, i) => (
            <div key={i} className="flex items-start gap-3 py-1.5 hover:bg-gray-800/50 px-2 rounded">
              <span className="text-gray-500 shrink-0">{new Date(log.timestamp).toLocaleTimeString()}</span>
              <Badge variant={levelVariant[log.level as keyof typeof levelVariant]} className="shrink-0 text-[10px]">{log.level.toUpperCase()}</Badge>
              <span className="text-forge-400 shrink-0">{log.service}</span>
              <span className="text-gray-300">{log.message}</span>
              <span className="text-gray-600 shrink-0 ml-auto text-xs">{log.source}</span>
            </div>
          ))}
        </div>
      </Card>
    </div>
  )
}
