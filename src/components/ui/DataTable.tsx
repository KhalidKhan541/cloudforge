import { ReactNode } from 'react'
import { cn } from '@/lib/utils'
interface Column<T> { key: string; header: string; className?: string; render?: (row: T) => ReactNode }
interface DataTableProps<T> { columns: Column<T>[]; data: T[]; onRowClick?: (row: T) => void; emptyMessage?: string }
export default function DataTable<T extends Record<string, any>>({ columns, data, onRowClick, emptyMessage = 'No data' }: DataTableProps<T>) {
  if (!data.length) return <div className="text-center py-12 text-gray-400">{emptyMessage}</div>
  return (
    <div className="overflow-x-auto">
      <table className="w-full">
        <thead><tr className="border-b border-gray-100 dark:border-gray-800 bg-gray-50/50 dark:bg-gray-900/50">
          {columns.map(c => <th key={c.key} className={cn('text-left px-5 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wider', c.className)}>{c.header}</th>)}
        </tr></thead>
        <tbody>
          {data.map((row, i) => (
            <tr key={i} onClick={() => onRowClick?.(row)} className={cn('border-b border-gray-50 dark:border-gray-800/50 transition-colors', onRowClick && 'cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-800/50')}>
              {columns.map(c => <td key={c.key} className={cn('px-5 py-3.5 text-sm', c.className)}>{c.render ? c.render(row) : row[c.key]}</td>)}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
