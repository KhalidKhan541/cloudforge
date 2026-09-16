'use client'
import Card, { CardTitle, CardDescription } from '@/components/ui/Card'
import Button from '@/components/ui/Button'
import { useTheme } from '@/contexts/ThemeContext'
import { cn } from '@/lib/utils'

export default function SettingsPage() {
  const { theme, setTheme } = useTheme()
  return (
    <div className="space-y-6 max-w-3xl">
      <div><h2 className="text-2xl font-bold text-gray-900 dark:text-white">Settings</h2><p className="text-gray-500">Manage your account and preferences</p></div>
      <Card><CardTitle>Profile</CardTitle><CardDescription>Your account information</CardDescription>
        <div className="space-y-4 mt-4">
          <div className="grid grid-cols-2 gap-4">
            <div><label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Name</label><input defaultValue="Khalid Khan" className="w-full px-4 py-2.5 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl text-sm focus:ring-2 focus:ring-forge-500 outline-none" /></div>
            <div><label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Email</label><input defaultValue="khalid@cloudforge.io" className="w-full px-4 py-2.5 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl text-sm focus:ring-2 focus:ring-forge-500 outline-none" /></div>
          </div>
          <div className="flex justify-end"><Button>Save Changes</Button></div>
        </div></Card>
      <Card><CardTitle>Appearance</CardTitle>
        <div className="grid grid-cols-3 gap-3 mt-4">
          {(['light', 'dark', 'system'] as const).map(t => (
            <button key={t} onClick={() => setTheme(t)} className={cn('p-4 rounded-xl border-2 text-center transition-all', theme === t ? 'border-forge-500 bg-forge-50 dark:bg-forge-500/10' : 'border-gray-200 dark:border-gray-700')}>
              <span className="text-2xl">{t === 'light' ? '☀️' : t === 'dark' ? '🌙' : '💻'}</span>
              <p className="text-sm font-medium text-gray-900 dark:text-white mt-2 capitalize">{t}</p>
            </button>
          ))}
        </div></Card>
      <Card><CardTitle>Security</CardTitle>
        <div className="space-y-4 mt-4">
          <div className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-800/50 rounded-xl"><div><p className="text-sm font-medium text-gray-900 dark:text-white">Two-Factor Authentication</p><p className="text-xs text-gray-500">Add an extra layer of security</p></div><Badge variant="success">Enabled</Badge></div>
          <div className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-800/50 rounded-xl"><div><p className="text-sm font-medium text-gray-900 dark:text-white">SSH Keys</p><p className="text-xs text-gray-500">Manage your SSH keys for server access</p></div><span className="text-sm text-forge-600 font-medium cursor-pointer">Manage →</span></div>
          <div className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-800/50 rounded-xl"><div><p className="text-sm font-medium text-gray-900 dark:text-white">Session History</p><p className="text-xs text-gray-500">View active sessions and revoke access</p></div><span className="text-sm text-forge-600 font-medium cursor-pointer">View →</span></div>
        </div></Card>
      <Card className="border-red-200 dark:border-red-500/30"><div className="flex items-center justify-between">
        <div><p className="text-sm font-medium text-red-600">Delete Account</p><p className="text-xs text-gray-500">Permanently delete all data and resources</p></div>
        <Button variant="danger" size="sm">Delete</Button>
      </div></Card>
    </div>
  )
}
