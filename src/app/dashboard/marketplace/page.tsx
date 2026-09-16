import Card, { CardTitle } from '@/components/ui/Card'
import Badge from '@/components/ui/Badge'
import Button from '@/components/ui/Button'
import { MARKETPLACE_APPS } from '@/lib/mock-data'
import { formatNumber } from '@/lib/utils'

export default function MarketplacePage() {
  return (
    <div className="space-y-6">
      <div><h2 className="text-2xl font-bold text-gray-900 dark:text-white">Marketplace</h2><p className="text-gray-500">One-click deploy popular applications</p></div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
        {MARKETPLACE_APPS.map(app => (
          <Card key={app.id} hover glow>
            <div className="flex items-start gap-4">
              <span className="text-4xl">{app.icon}</span>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2"><h3 className="text-base font-semibold text-gray-900 dark:text-white">{app.name}</h3><Badge variant="forge">{app.category}</Badge></div>
                <p className="text-sm text-gray-500 mt-1">{app.desc}</p>
                <div className="flex items-center justify-between mt-4 pt-3 border-t border-gray-50 dark:border-gray-800/50">
                  <span className="text-xs text-gray-400">{formatNumber(app.installs)} installs</span>
                  <Button size="sm" variant="outline">Deploy</Button>
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  )
}
