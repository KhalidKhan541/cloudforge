import Card, { CardHeader, CardTitle } from '@/components/ui/Card'
import Badge from '@/components/ui/Badge'
import StatusIndicator from '@/components/ui/StatusIndicator'
import UsageBar from '@/components/ui/UsageBar'
import { MOCK_DATABASES, DB_ENGINES } from '@/lib/mock-data'
import { cn } from '@/lib/utils'

export default function DatabasesPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div><h2 className="text-2xl font-bold text-gray-900 dark:text-white">Databases</h2><p className="text-gray-500">{MOCK_DATABASES.length} databases across {new Set(MOCK_DATABASES.map(d => d.engine)).size} engines</p></div>
        <button className="px-5 py-2.5 bg-forge-600 text-white rounded-xl text-sm font-medium">+ Create Database</button>
      </div>
      <div className="grid grid-cols-5 gap-4">
        {DB_ENGINES.map(e => (
          <Card key={e.id} hover>
            <div className="flex items-center gap-3">
              <span className="text-2xl">{e.icon}</span>
              <div><p className="text-sm font-semibold text-gray-900 dark:text-white">{e.name}</p><p className="text-xs text-gray-400">{MOCK_DATABASES.filter(d => d.engine === e.id).length} instances</p></div>
            </div>
          </Card>
        ))}
      </div>
      <div className="space-y-4">
        {MOCK_DATABASES.map(db => (
          <Card key={db.id} hover glow>
            <div className="flex items-start justify-between">
              <div className="flex items-center gap-4">
                <span className="text-3xl">{DB_ENGINES.find(e => e.id === db.engine)?.icon || '🗄️'}</span>
                <div>
                  <div className="flex items-center gap-2"><h3 className="text-base font-semibold text-gray-900 dark:text-white">{db.name}</h3><StatusIndicator status={db.status} /><Badge variant="forge">{db.engine} {db.version}</Badge></div>
                  <p className="text-sm text-gray-500 mt-1">{db.region} · {db.server}</p>
                </div>
              </div>
              <div className="flex gap-2">
                <button className="px-3 py-1.5 text-xs font-medium bg-gray-100 dark:bg-gray-800 rounded-lg text-gray-600 dark:text-gray-400">Configure</button>
                <button className="px-3 py-1.5 text-xs font-medium bg-red-50 dark:bg-red-500/10 rounded-lg text-red-600">Delete</button>
              </div>
            </div>
            <div className="grid grid-cols-4 gap-6 mt-4 pt-4 border-t border-gray-100 dark:border-gray-800">
              <div><p className="text-xs text-gray-400 mb-1">Storage</p><UsageBar label="" value={parseInt(db.storageUsed)} max={parseInt(db.storage)} unit=" GB" /></div>
              <div><p className="text-xs text-gray-400 mb-1">Connections</p><p className="text-lg font-bold text-gray-900 dark:text-white">{db.connections}<span className="text-sm text-gray-400 font-normal">/{db.maxConnections}</span></p></div>
              <div><p className="text-xs text-gray-400 mb-1">Queries</p><p className="text-lg font-bold text-gray-900 dark:text-white">{db.queries}</p></div>
              <div><p className="text-xs text-gray-400 mb-1">Replication</p><Badge variant={db.replication === 'none' ? 'default' : 'forge'}>{db.replication}</Badge></div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  )
}
