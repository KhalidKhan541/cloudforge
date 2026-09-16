'use client'
import { useState } from 'react'
import Card, { CardHeader, CardTitle } from '@/components/ui/Card'
import Badge from '@/components/ui/Badge'
import Tabs from '@/components/ui/Tabs'
import StatusIndicator from '@/components/ui/StatusIndicator'
import { MOCK_K8S, K8S_EVENTS } from '@/lib/mock-data'
import { cn } from '@/lib/utils'

export default function KubernetesPage() {
  const k = MOCK_K8S
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div><h2 className="text-2xl font-bold text-gray-900 dark:text-white">Kubernetes</h2><p className="text-gray-500">{k.clusters.length} clusters, {k.clusters.reduce((s, c) => s + c.pods, 0)} pods</p></div>
        <button className="px-5 py-2.5 bg-forge-600 text-white rounded-xl text-sm font-medium">+ Create Cluster</button>
      </div>
      <div className="grid grid-cols-3 gap-4">
        {k.clusters.map(cl => (
          <Card key={cl.id} hover glow>
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-base font-semibold text-gray-900 dark:text-white">{cl.name}</h3>
              <StatusIndicator status="running" />
            </div>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between"><span className="text-gray-500">Version</span><span className="font-mono text-gray-700 dark:text-gray-300">K8s {cl.version}</span></div>
              <div className="flex justify-between"><span className="text-gray-500">Nodes</span><span className="text-gray-900 dark:text-white">{cl.nodes}</span></div>
              <div className="flex justify-between"><span className="text-gray-500">Pods</span><span className="text-gray-900 dark:text-white">{cl.pods}</span></div>
              <div className="flex justify-between"><span className="text-gray-500">Services</span><span className="text-gray-900 dark:text-white">{cl.services}</span></div>
              <div className="flex justify-between"><span className="text-gray-500">CPU</span><span className="text-forge-600 font-medium">{cl.cpu}</span></div>
              <div className="flex justify-between"><span className="text-gray-500">Memory</span><span className="text-forge-600 font-medium">{cl.memory}</span></div>
            </div>
            <div className="flex gap-1 mt-3 pt-3 border-t border-gray-100 dark:border-gray-800">
              {cl.nodeStatus.map((ns, i) => <span key={i} className={cn('w-2 h-2 rounded-full', ns === 'Ready' ? 'bg-emerald-500' : 'bg-red-500')} />)}
              <span className="text-xs text-gray-400 ml-2">{cl.nodes} nodes healthy</span>
            </div>
          </Card>
        ))}
      </div>
      <Tabs tabs={[
        { label: 'Deployments', content: (
          <Card padding={false}>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead><tr className="border-b border-gray-100 dark:border-gray-800 bg-gray-50/50">
                  <th className="text-left px-5 py-3 text-xs font-semibold text-gray-500 uppercase">Deployment</th>
                  <th className="text-left px-5 py-3 text-xs font-semibold text-gray-500 uppercase">Namespace</th>
                  <th className="text-center px-5 py-3 text-xs font-semibold text-gray-500 uppercase">Replicas</th>
                  <th className="text-center px-5 py-3 text-xs font-semibold text-gray-500 uppercase">Status</th>
                  <th className="text-left px-5 py-3 text-xs font-semibold text-gray-500 uppercase">Image</th>
                  <th className="text-left px-5 py-3 text-xs font-semibold text-gray-500 uppercase">Resources</th>
                </tr></thead>
                <tbody>
                  {k.deployments.map(d => (
                    <tr key={d.name} className="border-b border-gray-50 dark:border-gray-800/50 hover:bg-gray-50 dark:hover:bg-gray-800/50">
                      <td className="px-5 py-3.5 text-sm font-medium text-gray-900 dark:text-white font-mono">{d.name}</td>
                      <td className="px-5 py-3.5"><Badge>{d.namespace}</Badge></td>
                      <td className="px-5 py-3.5 text-center text-sm">{d.replicas}</td>
                      <td className="px-5 py-3.5 text-center"><Badge variant={d.status === 'running' ? 'success' : 'warning'} dot>{d.status}</Badge></td>
                      <td className="px-5 py-3.5 text-sm text-gray-500 font-mono text-xs">{d.image}</td>
                      <td className="px-5 py-3.5 text-sm text-gray-500">{d.cpu} · {d.memory}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Card>
        )},
        { label: 'Events', content: (
          <Card padding={false}>
            <div className="divide-y divide-gray-50 dark:divide-gray-800/50">
              {K8S_EVENTS.map((e, i) => (
                <div key={i} className="flex items-center gap-4 px-5 py-3 hover:bg-gray-50 dark:hover:bg-gray-800/50">
                  <Badge variant={e.type === 'Warning' ? 'warning' : 'default'}>{e.type}</Badge>
                  <span className="text-xs text-gray-400 w-20 shrink-0">{e.time}</span>
                  <span className="text-sm text-gray-700 dark:text-gray-300 flex-1">{e.message}</span>
                  <span className="text-xs text-gray-400 font-mono">{e.source}</span>
                </div>
              ))}
            </div>
          </Card>
        )},
      ]} />
    </div>
  )
}
