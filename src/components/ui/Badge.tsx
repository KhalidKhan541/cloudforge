import { cn } from '@/lib/utils'
import { ReactNode } from 'react'
const v = { default: 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300', success: 'bg-emerald-50 dark:bg-emerald-500/10 text-emerald-700 dark:text-emerald-400', warning: 'bg-amber-50 dark:bg-amber-500/10 text-amber-700 dark:text-amber-400', danger: 'bg-red-50 dark:bg-red-500/10 text-red-700 dark:text-red-400', info: 'bg-blue-50 dark:bg-blue-500/10 text-blue-700 dark:text-blue-400', forge: 'bg-forge-50 dark:bg-forge-500/10 text-forge-700 dark:text-forge-400' }
export default function Badge({ children, variant = 'default', dot, className }: { children: ReactNode; variant?: keyof typeof v; dot?: boolean; className?: string }) {
  return <span className={cn('inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-medium', v[variant], className)}>{dot && <span className={cn('w-1.5 h-1.5 rounded-full', variant === 'success' ? 'bg-emerald-500' : variant === 'warning' ? 'bg-amber-500' : variant === 'danger' ? 'bg-red-500' : variant === 'forge' ? 'bg-forge-500' : 'bg-gray-400')} />}{children}</span>
}
