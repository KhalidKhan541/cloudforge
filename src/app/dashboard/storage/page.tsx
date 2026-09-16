import Card, { CardHeader, CardTitle } from '@/components/ui/Card'
import Badge from '@/components/ui/Badge'
import { MOCK_STORAGE } from '@/lib/mock-data'
import { formatBytes } from '@/lib/utils'

export default function StoragePage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div><h2 className="text-2xl font-bold text-gray-900 dark:text-white">Object Storage</h2><p className="text-gray-500">S3-compatible object storage</p></div>
        <button className="px-5 py-2.5 bg-forge-600 text-white rounded-xl text-sm font-medium">+ Create Bucket</button>
      </div>
      <div className="grid grid-cols-4 gap-4">
        <Card><p className="text-sm text-gray-500">Total Buckets</p><p className="text-2xl font-bold text-forge-600 mt-1">{MOCK_STORAGE.buckets.length}</p></Card>
        <Card><p className="text-sm text-gray-500">Total Size</p><p className="text-2xl font-bold text-gray-900 dark:text-white mt-1">21.7 TB</p></Card>
        <Card><p className="text-sm text-gray-500">Total Objects</p><p className="text-2xl font-bold text-gray-900 dark:text-white mt-1">381K</p></Card>
        <Card><p className="text-sm text-gray-500">Bandwidth</p><p className="text-2xl font-bold text-gray-900 dark:text-white mt-1">3.2 TB</p></Card>
      </div>
      <Card padding={false}>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead><tr className="border-b border-gray-100 dark:border-gray-800 bg-gray-50/50">
              <th className="text-left px-5 py-3 text-xs font-semibold text-gray-500 uppercase">Bucket</th>
              <th className="text-left px-5 py-3 text-xs font-semibold text-gray-500 uppercase">Region</th>
              <th className="text-right px-5 py-3 text-xs font-semibold text-gray-500 uppercase">Size</th>
              <th className="text-right px-5 py-3 text-xs font-semibold text-gray-500 uppercase">Objects</th>
              <th className="text-right px-5 py-3 text-xs font-semibold text-gray-500 uppercase">Bandwidth</th>
              <th className="text-center px-5 py-3 text-xs font-semibold text-gray-500 uppercase">Encryption</th>
              <th className="text-center px-5 py-3 text-xs font-semibold text-gray-500 uppercase">Versioning</th>
            </tr></thead>
            <tbody>
              {MOCK_STORAGE.buckets.map(b => (
                <tr key={b.id} className="border-b border-gray-50 dark:border-gray-800/50 hover:bg-gray-50 dark:hover:bg-gray-800/50">
                  <td className="px-5 py-3.5 text-sm font-medium text-gray-900 dark:text-white font-mono">{b.name}</td>
                  <td className="px-5 py-3.5 text-sm text-gray-500">{b.region}</td>
                  <td className="px-5 py-3.5 text-right text-sm font-medium text-gray-900 dark:text-white">{b.size}</td>
                  <td className="px-5 py-3.5 text-right text-sm text-gray-600">{b.objects.toLocaleString()}</td>
                  <td className="px-5 py-3.5 text-right text-sm text-gray-600">{b.bandwidth}</td>
                  <td className="px-5 py-3.5 text-center">{b.encryption ? '🔒' : '🔓'}</td>
                  <td className="px-5 py-3.5 text-center">{b.versioning ? <Badge variant="success">On</Badge> : <Badge>Off</Badge>}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  )
}
