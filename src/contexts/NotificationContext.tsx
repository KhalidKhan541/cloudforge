'use client'
import { createContext, useContext, useState, useCallback, ReactNode } from 'react'
import { MOCK_NOTIFICATIONS } from '@/lib/mock-data'
interface NotificationContextType { notifications: typeof MOCK_NOTIFICATIONS; unreadCount: number; markAsRead: (id: string) => void; markAllRead: () => void }
const Ctx = createContext<NotificationContextType | undefined>(undefined)
export function NotificationProvider({ children }: { children: ReactNode }) {
  const [notifications, setNotifications] = useState(MOCK_NOTIFICATIONS)
  const unreadCount = notifications.filter(n => !n.read).length
  const markAsRead = useCallback((id: string) => setNotifications(p => p.map(n => n.id === id ? { ...n, read: true } : n)), [])
  const markAllRead = useCallback(() => setNotifications(p => p.map(n => ({ ...n, read: true }))), [])
  return <Ctx.Provider value={{ notifications, unreadCount, markAsRead, markAllRead }}>{children}</Ctx.Provider>
}
export function useNotifications() { const c = useContext(Ctx); if (!c) throw new Error('useNotifications must be within NotificationProvider'); return c }
