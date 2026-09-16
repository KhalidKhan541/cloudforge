'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'
import { useSidebar } from '@/contexts/SidebarContext'
import { SIDEBAR_NAV } from '@/lib/constants'

export default function Sidebar() {
  const pathname = usePathname()
  const { collapsed } = useSidebar()
  return (
    <aside className={cn('fixed left-0 top-0 z-40 h-screen bg-white dark:bg-gray-950 border-r border-gray-200 dark:border-gray-800 flex flex-col transition-all', collapsed ? 'w-[68px]' : 'w-64')}>
      <div className="flex items-center gap-3 px-5 h-16 border-b border-gray-100 dark:border-gray-800 shrink-0">
        <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-forge-500 to-blue-500 flex items-center justify-center text-white text-sm font-bold shrink-0">CF</div>
        {!collapsed && <span className="text-lg font-bold text-gray-900 dark:text-white">CloudForge</span>}
      </div>
      <nav className="flex-1 px-3 py-4 space-y-4 overflow-y-auto">
        {SIDEBAR_NAV.map(section => (
          <div key={section.section}>
            {!collapsed && <p className="px-3 text-[10px] font-semibold text-gray-400 uppercase tracking-wider mb-2">{section.section}</p>}
            {section.items.map(item => {
              const active = pathname === item.href || (item.href !== '/dashboard' && pathname.startsWith(item.href))
              return (
                <Link key={item.name} href={item.href} title={collapsed ? item.name : undefined}
                  className={cn('flex items-center gap-3 rounded-xl text-sm font-medium transition-all mb-1',
                    collapsed ? 'px-3 py-2.5 justify-center' : 'px-3 py-2.5',
                    active ? 'bg-forge-50 dark:bg-forge-500/10 text-forge-700 dark:text-forge-400' : 'text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-900'
                  )}>
                  <span className="shrink-0">{item.icon}</span>
                  {!collapsed && <span className="truncate">{item.name}</span>}
                </Link>
              )
            })}
          </div>
        ))}
      </nav>
      {!collapsed && (
        <div className="mx-3 mb-3 p-3 bg-gradient-to-br from-forge-50 to-blue-50 dark:from-forge-500/10 dark:to-blue-500/10 rounded-xl shrink-0">
          <p className="text-xs font-medium text-gray-700 dark:text-gray-300">Resource Usage</p>
          <p className="text-sm font-bold text-forge-600 dark:text-forge-400 mt-1">12 servers · 8 databases</p>
          <div className="w-full h-1.5 bg-forge-100 dark:bg-forge-500/20 rounded-full mt-2 overflow-hidden">
            <div className="h-full bg-forge-500 rounded-full" style={{ width: '68%' }} />
          </div>
        </div>
      )}
      <div className="px-3 py-3 border-t border-gray-100 dark:border-gray-800 shrink-0">
        <div className={cn('flex items-center gap-3', collapsed && 'justify-center')}>
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-forge-500 to-blue-500 flex items-center justify-center text-white text-xs font-bold">KK</div>
          {!collapsed && <div className="flex-1 min-w-0"><p className="text-sm font-medium text-gray-900 dark:text-white truncate">Khalid Khan</p><p className="text-[10px] text-gray-400">Owner</p></div>}
        </div>
      </div>
    </aside>
  )
}
