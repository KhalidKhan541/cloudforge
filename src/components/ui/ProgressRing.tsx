import { cn } from '@/lib/utils'
export default function ProgressRing({ value, max, size = 'md', color = '#3b82f6', label }: { value: number; max: number; size?: 'sm' | 'md' | 'lg'; color?: string; label?: string }) {
  const pct = Math.min(Math.round((value / max) * 100), 100)
  const sz = { sm: 'w-10 h-10', md: 'w-16 h-16', lg: 'w-24 h-24' }
  const ts = { sm: 'text-[10px]', md: 'text-sm', lg: 'text-lg' }
  const r = size === 'sm' ? 12 : size === 'lg' ? 24 : 18
  return (
    <div className="flex flex-col items-center gap-1">
      <div className={cn('relative', sz[size])}>
        <svg className={cn('transform -rotate-90', sz[size])} viewBox="0 0 36 36">
          <circle cx="18" cy="18" r={r} fill="none" stroke="currentColor" strokeWidth="2.5" className="text-gray-100 dark:text-gray-800" />
          <circle cx="18" cy="18" r={r} fill="none" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeDasharray={`${pct} ${100 - pct}`} />
        </svg>
        <span className={cn('absolute inset-0 flex items-center justify-center font-bold text-gray-900 dark:text-white', ts[size])}>{pct}%</span>
      </div>
      {label && <span className="text-xs text-gray-500">{label}</span>}
    </div>
  )
}
