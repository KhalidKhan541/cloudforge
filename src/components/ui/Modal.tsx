'use client'
import { useEffect, ReactNode } from 'react'
import { cn } from '@/lib/utils'
interface ModalProps { open: boolean; onClose: () => void; title?: string; children: ReactNode; size?: 'sm' | 'md' | 'lg' }
export default function Modal({ open, onClose, title, children, size = 'md' }: ModalProps) {
  useEffect(() => { if (open) document.body.style.overflow = 'hidden'; else document.body.style.overflow = ''; return () => { document.body.style.overflow = '' } }, [open])
  if (!open) return null
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={onClose} />
      <div className={cn('relative bg-white dark:bg-gray-900 rounded-2xl shadow-2xl w-full max-h-[85vh] overflow-y-auto', { 'max-w-sm': size === 'sm', 'max-w-lg': size === 'md', 'max-w-3xl': size === 'lg' })}>
        {title && <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100 dark:border-gray-800"><h2 className="text-lg font-semibold text-gray-900 dark:text-white">{title}</h2><button onClick={onClose} className="text-gray-400 hover:text-gray-600">✕</button></div>}
        <div className="p-6">{children}</div>
      </div>
    </div>
  )
}
