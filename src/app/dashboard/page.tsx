'use client'
import Card, { CardHeader, CardTitle, CardDescription } from '@/components/ui/Card'
import Badge from '@/components/ui/Badge'
import MetricCard from '@/components/ui/MetricCard'
import StatusIndicator from '@/components/ui/StatusIndicator'
import { MOCK_USER, MOCK_SERVERS, MOCK_DATABASES, MOCK_MONITORING, MOCK_ACTIVITY, MOCK_PIPELINES, MOCK_ALERTS } from '@/lib/mock-data'
import { formatNumber, formatBytes, cn } from '@/lib/utils'
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'

export default function DashboardPage() {
  const runningServers = MOCK_SERVERS.filter(s => s.status === 'running').length
  const runningDbs = MOCK_DATABASES.filter(d => d.status === 'running').length
  const activeAlerts = MOCK_ALERTS.filter(a => a.status === 'active' && a.severity === 'critical').length
  const successPipelines = MOCK_PIPELINES.filter(p => p.status === 'success').length

  return (
    <div className="space-y-6">
      <div><h2 className="text-2xl font-bold text-gray-900 dark:text-white">Infrastructure Overview</h2><p className="text-gray-500 dark:text-gray-400">Your cloud resources at a glance</p></div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <MetricCard label="Servers" value={`${runningServers}/${MOCK_SERVERS.length}`} change="+2 this month" positive icon="🖥️" />
        <MetricCard label="Databases" value={`${runningDbs}/${MOCK_DATABASES.length}`} change="+1 this month" positive icon="🗄️" />
        <MetricCard label="Bandwidth" value="18.4 TB" change="+12.3% vs last month" positive icon="🌐" />
        <MetricCard label="Monthly Spend" value={`$${MOCK_USER.monthlySpend}`} change="+8.2% vs last month" positive={false} icon="💰" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card className="lg:col-span-2">
          <CardHeader><div><CardTitle>Request Traffic</CardTitle><CardDescription>Requests per minute over 24h</CardDescription></div></CardHeader>
          <ResponsiveContainer width="100%" height={300}>
            <AreaChart data={MOCK_MONITORING.requestsPerMin}>
              <defs><linearGradient id="reqG" x1="0" y1="0" x2="0" y2="1"><stop offset="5%" stopColor="#3b82f6" stopOpacity={0.3} /><stop offset="95%" stopColor="#3b82f6" stopOpacity={0} /></linearGradient></defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
              <XAxis dataKey="time" tick={{ fontSize: 12, fill: '#9ca3af' }} />
              <YAxis tick={{ fontSize: 12, fill: '#9ca3af' }} tickFormatter={v => `${(v/1000).toFixed(0)}K`} />
              <Tooltip contentStyle={{ background: 'white', border: '1px solid #e5e7eb', borderRadius: '12px' }} formatter={(v: number) => [`${formatNumber(v)} req/min`, 'Traffic']} />
              <Area type="monotone" dataKey="value" stroke="#3b82f6" fillOpacity={1} fill="url(#reqG)" strokeWidth={2} />
            </AreaChart>
          </ResponsiveContainer>
        </Card>
        <Card>
          <CardTitle className="mb-4">System Health</CardTitle>
          <div className="space-y-4">
            <div className="flex items-center justify-between"><span className="text-sm text-gray-500">CPU Average</span><span className="text-sm font-semibold text-gray-900 dark:text-white">{MOCK_MONITORING.metrics.cpuAvg}%</span></div>
            <div className="w-full h-2 bg-gray-100 dark:bg-gray-800 rounded-full overflow-hidden"><div className="h-full bg-forge-500 rounded-full" style={{ width: `${MOCK_MONITORING.metrics.cpuAvg}%` }} /></div>
            <div className="flex items-center justify-between"><span className="text-sm text-gray-500">Memory Average</span><span className="text-sm font-semibold text-gray-900 dark:text-white">{MOCK_MONITORING.metrics.memAvg}%</span></div>
            <div className="w-full h-2 bg-gray-100 dark:bg-gray-800 rounded-full overflow-hidden"><div className="h-full bg-emerald-500 rounded-full" style={{ width: `${MOCK_MONITORING.metrics.memAvg}%` }} /></div>
            <div className="flex items-center justify-between"><span className="text-sm text-gray-500">Disk Average</span><span className="text-sm font-semibold text-gray-900 dark:text-white">{MOCK_MONITORING.metrics.diskAvg}%</span></div>
            <div className="w-full h-2 bg-gray-100 dark:bg-gray-800 rounded-full overflow-hidden"><div className="h-full bg-amber-500 rounded-full" style={{ width: `${MOCK_MONITORING.metrics.diskAvg}%` }} /></div>
          </div>
          <div className="mt-4 pt-4 border-t border-gray-100 dark:border-gray-800 grid grid-cols-2 gap-4 text-center">
            <div><p className="text-lg font-bold text-gray-900 dark:text-white">{MOCK_MONITORING.metrics.uptime}%</p><p className="text-xs text-gray-400">Uptime</p></div>
            <div><p className="text-lg font-bold text-gray-900 dark:text-white">{MOCK_MONITORING.metrics.avgResponseTime}ms</p><p className="text-xs text-gray-400">Avg Response</p></div>
          </div>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader><CardTitle>Recent Activity</CardTitle></CardHeader>
          <div className="space-y-2">
            {MOCK_ACTIVITY.slice(0, 7).map(a => (
              <div key={a.id} className="flex items-center gap-3 p-2.5 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors">
                <div className="w-8 h-8 rounded-lg bg-forge-50 dark:bg-forge-500/10 flex items-center justify-center text-sm">
                  {a.type === 'compute' ? '🖥️' : a.type === 'deploy' ? '🚀' : a.type === 'alert' ? '🚨' : a.type === 'security' ? '🛡️' : a.type === 'backup' ? '💾' : '📋'}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm text-gray-700 dark:text-gray-300 truncate"><span className="font-medium text-gray-900 dark:text-white">{a.user}</span> {a.action}</p>
                  <p className="text-xs text-gray-400">{a.time}</p>
                </div>
              </div>
            ))}
          </div>
        </Card>
        <Card>
          <CardHeader><CardTitle>Active Alerts</CardTitle><a href="/dashboard/alerts" className="text-sm text-forge-600 hover:text-forge-500 font-medium">View All →</a></CardHeader>
          <div className="space-y-2">
            {MOCK_ALERTS.filter(a => a.status === 'active').map(alert => (
              <div key={alert.id} className="flex items-center justify-between p-3 rounded-xl bg-gray-50 dark:bg-gray-800/50">
                <div className="flex items-center gap-3">
                  <Badge variant={alert.severity === 'critical' ? 'danger' : 'warning'}>{alert.severity}</Badge>
                  <div><p className="text-sm font-medium text-gray-900 dark:text-white">{alert.name}</p><p className="text-xs text-gray-400">{alert.condition}</p></div>
                </div>
                <span className="text-xs text-gray-400">{alert.triggered}</span>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  )
}
