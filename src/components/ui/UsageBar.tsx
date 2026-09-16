import { cn } from '@/lib/utils'
export default function UsageBar({ label, value, max, unit = '', color = 'forge' }: { label: string; value: number; max: number; unit?: string; color?: string }) {
  const pct = Math.min(Math.round((value / max) * 100), 100)
  const barColor = pct > 90 ? 'bg-red-500' : pct > 70 ? 'bg-amber-500' : color === 'forge' ? 'bg-forge-500' : `bg-${color}-500`
  return (
    <div className="space-y-1.5">
      <div className="flex items-center justify-between text-sm">
        <span className="text-gray-600 dark:text-gray-400">{label}</span>
        <span className="font-medium text-gray-900 dark:text-white">{value.toLocaleString()}{unit} / {max.toLocaleString()}{unit}</span>
      </div>
      <div className="w-full h-2 bg-gray-100 dark:bg-gray-800 rounded-full overflow-hidden">
        <div className={cn('h-full rounded-full transition-all', barColor)} style={{ width: `${pct}%` }} />
      </div>
    </div>
  )
}
