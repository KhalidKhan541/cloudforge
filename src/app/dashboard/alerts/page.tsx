import Card, { CardHeader, CardTitle } from '@/components/ui/Card'
import Badge from '@/components/ui/Badge'
import Button from '@/components/ui/Button'
import { MOCK_ALERTS } from '@/lib/mock-data'

export default function AlertsPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div><h2 className="text-2xl font-bold text-gray-900 dark:text-white">Alerts</h2><p className="text-gray-500">Monitor and configure alert rules</p></div>
        <Button>+ Create Alert</Button>
      </div>
      <div className="grid grid-cols-3 gap-4">
        <Card><p className="text-sm text-gray-500">Active Alerts</p><p className="text-2xl font-bold text-forge-600 mt-1">{MOCK_ALERTS.filter(a => a.status === 'active').length}</p></Card>
        <Card><p className="text-sm text-gray-500">Critical</p><p className="text-2xl font-bold text-red-600 mt-1">{MOCK_ALERTS.filter(a => a.severity === 'critical').length}</p></Card>
        <Card><p className="text-sm text-gray-500">Muted</p><p className="text-2xl font-bold text-gray-400 mt-1">{MOCK_ALERTS.filter(a => a.status === 'muted').length}</p></Card>
      </div>
      <div className="space-y-3">
        {MOCK_ALERTS.map(alert => (
          <Card key={alert.id}>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <Badge variant={alert.severity === 'critical' ? 'danger' : 'warning'}>{alert.severity}</Badge>
                <div>
                  <div className="flex items-center gap-2"><h3 className="text-sm font-semibold text-gray-900 dark:text-white">{alert.name}</h3><Badge variant={alert.status === 'active' ? 'success' : 'default'} dot>{alert.status}</Badge></div>
                  <p className="text-xs text-gray-500 font-mono mt-0.5">{alert.condition}</p>
                </div>
              </div>
              <div className="flex items-center gap-6 text-sm text-gray-500">
                <div className="text-center"><p className="font-medium">{alert.triggered}</p><p className="text-xs">Triggered</p></div>
                <div className="text-center"><p>{alert.lastTriggered}</p><p className="text-xs">Last</p></div>
                <div className="text-center"><p className="text-xs">{alert.servers.join(', ')}</p><p className="text-xs">Targets</p></div>
                <button className="p-2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg">⚙️</button>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  )
}
