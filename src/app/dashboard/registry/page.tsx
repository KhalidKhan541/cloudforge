import Card, { CardHeader, CardTitle } from '@/components/ui/Card'
import Badge from '@/components/ui/Badge'

const images = [
  { name: 'cloudforge/api-server', tags: ['v3.2.1', 'v3.2.0', 'v3.1.8'], size: '245 MB', pulls: 12400, updated: '2 hours ago' },
  { name: 'cloudforge/frontend', tags: ['v3.2.0', 'v3.1.9', 'v3.1.8'], size: '128 MB', pulls: 8900, updated: '5 hours ago' },
  { name: 'cloudforge/worker', tags: ['v3.1.8', 'v3.1.7', 'v3.1.6'], size: '312 MB', pulls: 6700, updated: '1 day ago' },
  { name: 'cloudforge/scheduler', tags: ['v2.5.0', 'v2.4.2'], size: '89 MB', pulls: 3200, updated: '3 days ago' },
  { name: 'cloudforge/notifications', tags: ['v2.0.1', 'v2.0.0'], size: '67 MB', pulls: 2100, updated: '1 week ago' },
  { name: 'cloudforge/analytics', tags: ['v1.8.0', 'v1.7.5', 'v1.7.0'], size: '456 MB', pulls: 4500, updated: '12 hours ago' },
]

export default function RegistryPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div><h2 className="text-2xl font-bold text-gray-900 dark:text-white">Container Registry</h2><p className="text-gray-500">{images.length} images · Private registry</p></div>
        <button className="px-5 py-2.5 bg-forge-600 text-white rounded-xl text-sm font-medium">+ Push Image</button>
      </div>
      <Card><p className="text-sm text-gray-500 mb-2">Registry URL</p><div className="flex items-center gap-2 px-4 py-2.5 bg-gray-900 rounded-xl"><code className="text-sm text-green-400 font-mono">registry.cloudforge.io</code><button className="ml-auto text-gray-400 hover:text-white text-xs">Copy</button></div></Card>
      <div className="space-y-3">
        {images.map(img => (
          <Card key={img.name} hover>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <span className="text-2xl">🐳</span>
                <div><h3 className="text-sm font-semibold text-gray-900 dark:text-white font-mono">{img.name}</h3><p className="text-xs text-gray-400 mt-0.5">Updated: {img.updated}</p></div>
              </div>
              <div className="flex items-center gap-6">
                <div className="flex gap-1">{img.tags.map(t => <Badge key={t} variant="forge">{t}</Badge>)}</div>
                <div className="text-center"><p className="text-sm font-semibold text-gray-900 dark:text-white">{img.size}</p><p className="text-xs text-gray-400">Size</p></div>
                <div className="text-center"><p className="text-sm font-semibold text-gray-900 dark:text-white">{img.pulls.toLocaleString()}</p><p className="text-xs text-gray-400">Pulls</p></div>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  )
}
