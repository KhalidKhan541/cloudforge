'use client'
import { useState } from 'react'
import Card, { CardHeader, CardTitle } from '@/components/ui/Card'
import Badge from '@/components/ui/Badge'
import Button from '@/components/ui/Button'
import StatusIndicator from '@/components/ui/StatusIndicator'
import UsageBar from '@/components/ui/UsageBar'
import DataTable from '@/components/ui/DataTable'
import Modal from '@/components/ui/Modal'
import { MOCK_SERVERS, REGIONS, SERVER_PLANS } from '@/lib/mock-data'
import { formatBytes, cn } from '@/lib/utils'

export default function ServersPage() {
  const [filter, setFilter] = useState('all')
  const [showProvision, setShowProvision] = useState(false)
  const filtered = filter === 'all' ? MOCK_SERVERS : MOCK_SERVERS.filter(s => s.status === filter)

  const columns = [
    { key: 'name', header: 'Server', render: (r: typeof MOCK_SERVERS[0]) => (
      <div><p className="font-medium text-gray-900 dark:text-white">{r.name}</p><p className="text-xs text-gray-400 font-mono">{r.ip}</p></div>
    )},
    { key: 'region', header: 'Region', className: 'text-gray-500' },
    { key: 'plan', header: 'Plan', render: (r: typeof MOCK_SERVERS[0]) => <Badge variant="forge">{r.plan}</Badge> },
    { key: 'cpu', header: 'CPU/RAM', className: 'text-sm', render: (r: typeof MOCK_SERVERS[0]) => `${r.cpu} vCPU · ${r.ram}` },
    { key: 'status', header: 'Status', render: (r: typeof MOCK_SERVERS[0]) => <StatusIndicator status={r.status} /> },
    { key: 'cpuUsage', header: 'CPU', render: (r: typeof MOCK_SERVERS[0]) => <span className={cn('font-medium', r.cpuUsage > 90 ? 'text-red-500' : r.cpuUsage > 70 ? 'text-amber-500' : '')}>{r.cpuUsage}%</span> },
    { key: 'memUsage', header: 'Memory', render: (r: typeof MOCK_SERVERS[0]) => <span className={cn('font-medium', r.memUsage > 90 ? 'text-red-500' : r.memUsage > 70 ? 'text-amber-500' : '')}>{r.memUsage}%</span> },
  ]

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div><h2 className="text-2xl font-bold text-gray-900 dark:text-white">Servers</h2><p className="text-gray-500">{MOCK_SERVERS.length} servers across {new Set(MOCK_SERVERS.map(s => s.region)).size} regions</p></div>
        <Button variant="gradient" onClick={() => setShowProvision(true)}>+ Provision Server</Button>
      </div>
      <div className="grid grid-cols-4 gap-4">
        <Card><p className="text-sm text-gray-500">Running</p><p className="text-2xl font-bold text-emerald-600 mt-1">{MOCK_SERVERS.filter(s => s.status === 'running').length}</p></Card>
        <Card><p className="text-sm text-gray-500">Stopped</p><p className="text-2xl font-bold text-gray-400 mt-1">{MOCK_SERVERS.filter(s => s.status === 'stopped').length}</p></Card>
        <Card><p className="text-sm text-gray-500">Total CPU</p><p className="text-2xl font-bold text-forge-600 mt-1">{MOCK_SERVERS.reduce((s, sv) => s + sv.cpu, 0)} cores</p></Card>
        <Card><p className="text-sm text-gray-500">Total RAM</p><p className="text-2xl font-bold text-gray-900 dark:text-white mt-1">{MOCK_SERVERS.reduce((s, sv) => s + parseInt(sv.ram), 0)} GB</p></Card>
      </div>
      <div className="flex gap-2">
        {['all', 'running', 'stopped'].map(s => (
          <button key={s} onClick={() => setFilter(s)} className={cn('px-3 py-1.5 rounded-lg text-sm font-medium transition-all', filter === s ? 'bg-forge-600 text-white' : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400')}>{s === 'all' ? 'All' : s.charAt(0).toUpperCase() + s.slice(1)}</button>
        ))}
      </div>
      <Card padding={false}><DataTable columns={columns} data={filtered as any} /></Card>
      <Modal open={showProvision} onClose={() => setShowProvision(false)} title="Provision New Server" size="lg">
        <div className="space-y-4">
          <div><label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Server Name</label><input placeholder="my-server" className="w-full px-4 py-2.5 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl text-sm focus:ring-2 focus:ring-forge-500 outline-none" /></div>
          <div className="grid grid-cols-2 gap-4">
            <div><label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Region</label><select className="w-full px-4 py-2.5 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl text-sm">{REGIONS.map(r => <option key={r}>{r}</option>)}</select></div>
            <div><label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">OS</label><select className="w-full px-4 py-2.5 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl text-sm"><option>Ubuntu 22.04</option><option>Ubuntu 24.04</option><option>Debian 12</option><option>CentOS 9</option></select></div>
          </div>
          <div><label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Plan</label>
            <div className="grid grid-cols-3 gap-3">{SERVER_PLANS.map(p => (
              <div key={p.name} className="p-3 border border-gray-200 dark:border-gray-700 rounded-xl text-center cursor-pointer hover:border-forge-500 transition-all">
                <p className="text-sm font-semibold text-gray-900 dark:text-white">{p.name}</p>
                <p className="text-xs text-gray-500 mt-1">{p.cpu} vCPU · {p.ram}</p>
                <p className="text-lg font-bold text-forge-600 mt-2">${p.price}/mo</p>
              </div>
            ))}</div>
          </div>
          <div className="flex justify-end gap-2"><Button variant="ghost" onClick={() => setShowProvision(false)}>Cancel</Button><Button variant="gradient">Provision Server</Button></div>
        </div>
      </Modal>
    </div>
  )
}
