'use client'
import { useTheme } from '@/contexts/ThemeContext'
import { useNotifications } from '@/contexts/NotificationContext'
import { useSidebar } from '@/contexts/SidebarContext'
import Avatar from '@/components/ui/Avatar'
import { cn } from '@/lib/utils'
import { useState } from 'react'

export default function TopBar() {
  const { resolvedTheme, setTheme } = useTheme()
  const { notifications, unreadCount, markAsRead, markAllRead } = useNotifications()
  const { toggle } = useSidebar()
  const [showNotif, setShowNotif] = useState(false)
  return (
    <header className="sticky top-0 z-30 bg-white/80 dark:bg-gray-950/80 backdrop-blur-xl border-b border-gray-100 dark:border-gray-800">
      <div className="flex items-center justify-between h-16 px-6">
        <button onClick={toggle} className="p-2 text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-xl transition-colors">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" /></svg>
        </button>
        <div className="flex items-center gap-4">
          <div className="hidden md:flex items-center gap-2 px-3 py-1.5 bg-gray-100 dark:bg-gray-800 rounded-xl text-sm">
            <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
            <span className="text-gray-600 dark:text-gray-400">All Systems Operational</span>
          </div>
          <button onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')} className="p-2 text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-xl transition-colors">
            {resolvedTheme === 'dark' ? '☀️' : '🌙'}
          </button>
          <div className="relative">
            <button onClick={() => setShowNotif(!showNotif)} className="relative p-2 text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-xl transition-colors">
              🔔{unreadCount > 0 && <span className="absolute top-1 right-1 w-4 h-4 bg-red-500 text-white text-[10px] font-bold rounded-full flex items-center justify-center">{unreadCount}</span>}
            </button>
            {showNotif && (
              <div className="absolute right-0 top-full mt-2 w-80 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl shadow-xl z-50">
                <div className="flex items-center justify-between px-4 py-3 border-b border-gray-100 dark:border-gray-800">
                  <h3 className="text-sm font-semibold text-gray-900 dark:text-white">Notifications</h3>
                  <button onClick={markAllRead} className="text-xs text-forge-600 hover:text-forge-500">Mark all read</button>
                </div>
                <div className="max-h-64 overflow-y-auto">
                  {notifications.map(n => (
                    <div key={n.id} onClick={() => markAsRead(n.id)} className={cn('px-4 py-3 border-b border-gray-50 dark:border-gray-800/50 cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-800/50', !n.read && 'bg-forge-50/50 dark:bg-forge-500/5')}>
                      <p className="text-sm font-medium text-gray-900 dark:text-white">{n.title}</p>
                      <p className="text-xs text-gray-500 mt-0.5">{n.message}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
          <Avatar name="Khalid Khan" size="sm" />
        </div>
      </div>
    </header>
  )
}
