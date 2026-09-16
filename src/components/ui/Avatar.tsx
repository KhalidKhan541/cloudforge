import { cn } from '@/lib/utils'
const sizes = { xs: 'w-6 h-6 text-[10px]', sm: 'w-8 h-8 text-xs', md: 'w-10 h-10 text-sm', lg: 'w-12 h-12', xl: 'w-16 h-16 text-lg' }
const colors = ['bg-forge-500', 'bg-emerald-500', 'bg-amber-500', 'bg-rose-500', 'bg-cyan-500', 'bg-violet-500', 'bg-pink-500', 'bg-indigo-500']
function getColor(n: string) { let h = 0; for (let i = 0; i < n.length; i++) h = n.charCodeAt(i) + ((h << 5) - h); return colors[Math.abs(h) % colors.length] }
export default function Avatar({ name, src, size = 'md', className }: { name: string; src?: string; size?: keyof typeof sizes; className?: string }) {
  const initials = name.split(' ').map(n => n[0]).join('').toUpperCase().slice(0, 2)
  if (src) return <img src={src} alt={name} className={cn('rounded-full object-cover ring-2 ring-white dark:ring-gray-900', sizes[size], className)} />
  return <div className={cn('rounded-full flex items-center justify-center font-semibold text-white ring-2 ring-white dark:ring-gray-900', sizes[size], getColor(name), className)}>{initials}</div>
}
