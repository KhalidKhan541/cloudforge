import { cn } from '@/lib/utils'
const statusConfig = {
  running: { color: 'bg-emerald-500', pulse: true, label: 'Running' },
  stopped: { color: 'bg-gray-400', pulse: false, label: 'Stopped' },
  error: { color: 'bg-red-500', pulse: true, label: 'Error' },
  pending: { color: 'bg-amber-500', pulse: true, label: 'Pending' },
  provisioning: { color: 'bg-blue-500', pulse: true, label: 'Provisioning' },
  active: { color: 'bg-emerald-500', pulse: true, label: 'Active' },
  success: { color: 'bg-emerald-500', pulse: false, label: 'Success' },
  failed: { color: 'bg-red-500', pulse: false, label: 'Failed' },
  warning: { color: 'bg-amber-500', pulse: true, label: 'Warning' },
} as const
export default function StatusIndicator({ status, showLabel = true, size = 'sm' }: { status: keyof typeof statusConfig; showLabel?: boolean; size?: 'xs' | 'sm' | 'md' }) {
  const cfg = statusConfig[status] || statusConfig.pending
  const sz = { xs: 'w-1.5 h-1.5', sm: 'w-2 h-2', md: 'w-2.5 h-2.5' }
  return (
    <span className="inline-flex items-center gap-1.5">
      <span className={cn('rounded-full', cfg.color, sz[size], cfg.pulse && 'animate-pulse')} />
      {showLabel && <span className="text-xs font-medium text-gray-600 dark:text-gray-400">{cfg.label}</span>}
    </span>
  )
}
