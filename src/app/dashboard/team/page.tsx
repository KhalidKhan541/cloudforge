'use client'
import { useState } from 'react'
import Card from '@/components/ui/Card'
import Badge from '@/components/ui/Badge'
import Avatar from '@/components/ui/Avatar'
import Button from '@/components/ui/Button'
import { MOCK_TEAM } from '@/lib/mock-data'
import { cn } from '@/lib/utils'

const roleVariant: Record<string, 'danger' | 'info' | 'forge' | 'success' | 'default'> = { owner: 'danger', admin: 'info', manager: 'forge', member: 'success', viewer: 'default' }

export default function TeamPage() {
  const [filter, setFilter] = useState('all')
  const filtered = filter === 'all' ? MOCK_TEAM : MOCK_TEAM.filter(m => m.role === filter)

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div><h2 className="text-2xl font-bold text-gray-900 dark:text-white">Team</h2><p className="text-gray-500">{MOCK_TEAM.length} members across {new Set(MOCK_TEAM.map(m => m.department)).size} departments</p></div>
        <Button>+ Invite Member</Button>
      </div>
      <div className="flex gap-2">
        {['all', 'owner', 'admin', 'manager', 'member', 'viewer'].map(r => (
          <button key={r} onClick={() => setFilter(r)} className={cn('px-3 py-1.5 rounded-lg text-sm font-medium', filter === r ? 'bg-forge-600 text-white' : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400')}>{r === 'all' ? 'All' : r.charAt(0).toUpperCase() + r.slice(1)}</button>
        ))}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
        {filtered.map(m => (
          <Card key={m.id} hover>
            <div className="flex items-center gap-4">
              <Avatar name={m.name} size="lg" />
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2"><h3 className="text-sm font-semibold text-gray-900 dark:text-white truncate">{m.name}</h3><Badge variant={roleVariant[m.role]}>{m.role}</Badge></div>
                <p className="text-xs text-gray-500 mt-0.5">{m.email}</p>
                <p className="text-xs text-gray-400 mt-0.5">{m.department} · Joined {new Date(m.joined).toLocaleDateString('en-US', { month: 'short', year: 'numeric' })}</p>
              </div>
              <Badge variant={m.status === 'active' ? 'success' : 'default'} dot>{m.status}</Badge>
            </div>
          </Card>
        ))}
      </div>
    </div>
  )
}
