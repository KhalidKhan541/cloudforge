'use client'
import { createContext, useContext, useEffect, useState, ReactNode } from 'react'
type Theme = 'light' | 'dark' | 'system'
interface ThemeContextType { theme: Theme; resolvedTheme: 'light' | 'dark'; setTheme: (t: Theme) => void }
const Ctx = createContext<ThemeContextType | undefined>(undefined)
export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<Theme>('system')
  const [resolved, setResolved] = useState<'light' | 'dark'>('light')
  useEffect(() => {
    const root = document.documentElement
    root.classList.remove('light', 'dark')
    let r: 'light' | 'dark' = theme === 'system' ? (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light') : theme
    root.classList.add(r); setResolved(r); localStorage.setItem('cf-theme', theme)
  }, [theme])
  useEffect(() => { const s = localStorage.getItem('cf-theme') as Theme | null; if (s) setTheme(s) }, [])
  return <Ctx.Provider value={{ theme, resolvedTheme: resolved, setTheme }}>{children}</Ctx.Provider>
}
export function useTheme() { const c = useContext(Ctx); if (!c) throw new Error('useTheme must be within ThemeProvider'); return c }
