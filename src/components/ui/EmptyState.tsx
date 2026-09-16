import { ReactNode } from 'react'
import Button from './Button'
export default function EmptyState({ icon = '📋', title, description, action }: { icon?: string; title: string; description: string; action?: { label: string; onClick: () => void } }) {
  return (
    <div className="flex flex-col items-center justify-center py-16 text-center">
      <span className="text-5xl mb-4">{icon}</span>
      <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{title}</h3>
      <p className="text-sm text-gray-500 max-w-sm mt-1">{description}</p>
      {action && <Button className="mt-4" onClick={action.onClick}>{action.label}</Button>}
    </div>
  )
}
