'use client'
import Card, { CardHeader, CardTitle, CardDescription } from '@/components/ui/Card'
import Badge from '@/components/ui/Badge'
import { MOCK_MONITORING, MOCK_SERVERS } from '@/lib/mock-data'
import { formatNumber, cn } from '@/lib/utils'
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line } from 'recharts'

export default function MonitoringPage() {
  const m = MOCK_MONITORING.metrics
  return (
    <div className="space-y-6">
      <div><h2 className="text-2xl font-bold text-gray-900 dark:text-white">Monitoring</h2><p className="text-gray-500">Real-time infrastructure metrics</p></div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {[{ l: 'CPU Avg', v: `${m.cpuAvg}%`, i: '⚡' }, { l: 'Memory Avg', v: `${m.memAvg}%`, i: '🧠' }, { l: 'Disk Avg', v: `${m.diskAvg}%`, i: '💾' }, { l: 'Network In', v: m.networkIn, i: '📥' }, { l: 'Network Out', v: m.networkOut, i: '📤' }, { l: 'Connections', v: formatNumber(m.activeConnections), i: '🔗' }].map(s => (
          <Card key={s.l}><div className="flex items-center gap-3"><span className="text-xl">{s.i}</span><div><p className="text-xs text-gray-500">{s.l}</p><p className="text-lg font-bold text-gray-900 dark:text-white">{s.v}</p></div></div></Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader><div><CardTitle>CPU Usage (24h)</CardTitle><CardDescription>Average across all servers</CardDescription></div></CardHeader>
          <ResponsiveContainer width="100%" height={300}>
            <AreaChart data={MOCK_MONITORING.cpuHistory}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
              <XAxis dataKey="time" tick={{ fontSize: 12, fill: '#9ca3af' }} />
              <YAxis tick={{ fontSize: 12, fill: '#9ca3af' }} domain={[0, 100]} />
              <Tooltip contentStyle={{ background: 'white', border: '1px solid #e5e7eb', borderRadius: '12px' }} />
              <Area type="monotone" dataKey="api" stroke="#3b82f6" fill="none" strokeWidth={2} name="API" />
              <Area type="monotone" dataKey="worker" stroke="#10b981" fill="none" strokeWidth={2} name="Worker" />
              <Area type="monotone" dataKey="db" stroke="#f59e0b" fill="none" strokeWidth={2} name="DB" />
            </AreaChart>
          </ResponsiveContainer>
        </Card>
        <Card>
          <CardHeader><div><CardTitle>Requests/min (24h)</CardTitle><CardDescription>Total incoming requests</CardDescription></div></CardHeader>
          <ResponsiveContainer width="100%" height={300}>
            <AreaChart data={MOCK_MONITORING.requestsPerMin}>
              <defs><linearGradient id="rpg" x1="0" y1="0" x2="0" y2="1"><stop offset="5%" stopColor="#8b5cf6" stopOpacity={0.3} /><stop offset="95%" stopColor="#8b5cf6" stopOpacity={0} /></linearGradient></defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
              <XAxis dataKey="time" tick={{ fontSize: 12, fill: '#9ca3af' }} />
              <YAxis tick={{ fontSize: 12, fill: '#9ca3af' }} tickFormatter={v => `${(v/1000).toFixed(0)}K`} />
              <Tooltip contentStyle={{ background: 'white', border: '1px solid #e5e7eb', borderRadius: '12px' }} formatter={(v: number) => [formatNumber(v), 'Requests']} />
              <Area type="monotone" dataKey="value" stroke="#8b5cf6" fillOpacity={1} fill="url(#rpg)" strokeWidth={2} />
            </AreaChart>
          </ResponsiveContainer>
        </Card>
      </div>

      <Card>
        <CardHeader><CardTitle>Server Health</CardTitle></CardHeader>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead><tr className="border-b border-gray-100 dark:border-gray-800">
              <th className="text-left px-4 py-3 text-xs font-semibold text-gray-500 uppercase">Server</th>
              <th className="text-left px-4 py-3 text-xs font-semibold text-gray-500 uppercase">Region</th>
              <th className="text-center px-4 py-3 text-xs font-semibold text-gray-500 uppercase">Status</th>
              <th className="text-center px-4 py-3 text-xs font-semibold text-gray-500 uppercase">CPU</th>
              <th className="text-center px-4 py-3 text-xs font-semibold text-gray-500 uppercase">Memory</th>
              <th className="text-center px-4 py-3 text-xs font-semibold text-gray-500 uppercase">Disk</th>
            </tr></thead>
            <tbody>
              {MOCK_SERVERS.map(s => (
                <tr key={s.id} className="border-b border-gray-50 dark:border-gray-800/50 hover:bg-gray-50 dark:hover:bg-gray-800/50">
                  <td className="px-4 py-3 text-sm font-medium text-gray-900 dark:text-white">{s.name}</td>
                  <td className="px-4 py-3 text-sm text-gray-500">{s.region}</td>
                  <td className="px-4 py-3 text-center"><Badge variant={s.status === 'running' ? 'success' : 'default'} dot>{s.status}</Badge></td>
                  <td className="px-4 py-3 text-center"><span className={cn('text-sm font-medium', s.cpuUsage > 90 ? 'text-red-500' : s.cpuUsage > 70 ? 'text-amber-500' : 'text-gray-700 dark:text-gray-300')}>{s.cpuUsage}%</span></td>
                  <td className="px-4 py-3 text-center"><span className={cn('text-sm font-medium', s.memUsage > 90 ? 'text-red-500' : s.memUsage > 70 ? 'text-amber-500' : 'text-gray-700 dark:text-gray-300')}>{s.memUsage}%</span></td>
                  <td className="px-4 py-3 text-center"><span className={cn('text-sm font-medium', s.diskUsage > 90 ? 'text-red-500' : s.diskUsage > 70 ? 'text-amber-500' : 'text-gray-700 dark:text-gray-300')}>{s.diskUsage}%</span></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  )
}
