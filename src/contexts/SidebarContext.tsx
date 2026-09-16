'use client'
import { createContext, useContext, useState, ReactNode } from 'react'
interface SidebarContextType { collapsed: boolean; toggle: () => void }
const Ctx = createContext<SidebarContextType | undefined>(undefined)
export function SidebarProvider({ children }: { children: ReactNode }) {
  const [collapsed, setCollapsed] = useState(false)
  return <Ctx.Provider value={{ collapsed, toggle: () => setCollapsed(p => !p) }}>{children}</Ctx.Provider>
}
export function useSidebar() { const c = useContext(Ctx); if (!c) throw new Error('useSidebar must be within SidebarProvider'); return c }
