'use client'
import Sidebar from './Sidebar'
import TopBar from './TopBar'
import { useSidebar } from '@/contexts/SidebarContext'
import { cn } from '@/lib/utils'
export default function DashboardShell({ children }: { children: React.ReactNode }) {
  const { collapsed } = useSidebar()
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950">
      <Sidebar />
      <div className={cn('transition-all', collapsed ? 'ml-[68px]' : 'ml-64')}>
        <TopBar />
        <main className="p-6">{children}</main>
      </div>
    </div>
  )
}
