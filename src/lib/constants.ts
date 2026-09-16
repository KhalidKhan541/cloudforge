export const APP_NAME = 'CloudForge'
export const APP_DESCRIPTION = 'Enterprise Cloud Infrastructure & DevOps Platform'

export const SIDEBAR_NAV = [
  { section: 'Overview', items: [
    { name: 'Dashboard', href: '/dashboard', icon: '📊' },
    { name: 'Monitoring', href: '/dashboard/monitoring', icon: '🔍' },
    { name: 'Alerts', href: '/dashboard/alerts', icon: '🚨' },
  ]},
  { section: 'Compute', items: [
    { name: 'Servers', href: '/dashboard/servers', icon: '🖥️' },
    { name: 'Kubernetes', href: '/dashboard/kubernetes', icon: '☸️' },
    { name: 'Functions', href: '/dashboard/functions', icon: '⚡' },
  ]},
  { section: 'Data', items: [
    { name: 'Databases', href: '/dashboard/databases', icon: '🗄️' },
    { name: 'Object Storage', href: '/dashboard/storage', icon: '📦' },
    { name: 'CDN', href: '/dashboard/cdn', icon: '🌐' },
  ]},
  { section: 'Networking', items: [
    { name: 'DNS', href: '/dashboard/dns', icon: '🔗' },
    { name: 'Load Balancers', href: '/dashboard/loadbalancers', icon: '⚖️' },
    { name: 'Firewall', href: '/dashboard/firewall', icon: '🛡️' },
  ]},
  { section: 'DevOps', items: [
    { name: 'CI/CD Pipelines', href: '/dashboard/pipelines', icon: '🔄' },
    { name: 'Container Registry', href: '/dashboard/registry', icon: '🐳' },
    { name: 'Logs', href: '/dashboard/logs', icon: '📝' },
    { name: 'Terminal', href: '/dashboard/terminal', icon: '💻' },
  ]},
  { section: 'Platform', items: [
    { name: 'Marketplace', href: '/dashboard/marketplace', icon: '🛒' },
    { name: 'Team', href: '/dashboard/team', icon: '👥' },
    { name: 'API & Webhooks', href: '/dashboard/api', icon: '🔑' },
    { name: 'Billing', href: '/dashboard/billing', icon: '💳' },
    { name: 'Settings', href: '/dashboard/settings', icon: '⚙️' },
  ]},
]

export const SERVER_PLANS = [
  { name: 'Starter', cpu: 1, ram: '1 GB', disk: '25 GB SSD', price: 5, bandwidth: '1 TB' },
  { name: 'Basic', cpu: 2, ram: '2 GB', disk: '50 GB SSD', price: 12, bandwidth: '2 TB' },
  { name: 'Professional', cpu: 4, ram: '8 GB', disk: '160 GB SSD', price: 40, bandwidth: '5 TB' },
  { name: 'Business', cpu: 8, ram: '16 GB', disk: '320 GB SSD', price: 80, bandwidth: '8 TB' },
  { name: 'Enterprise', cpu: 16, ram: '32 GB', disk: '640 GB SSD', price: 160, bandwidth: '12 TB' },
  { name: 'Titan', cpu: 32, ram: '64 GB', disk: '1 TB SSD', price: 320, bandwidth: '20 TB' },
]

export const DB_ENGINES = [
  { id: 'postgresql', name: 'PostgreSQL', icon: '🐘', versions: ['16.3', '15.7', '14.12'], color: 'from-blue-500 to-indigo-500' },
  { id: 'mysql', name: 'MySQL', icon: '🐬', versions: ['8.4', '8.0', '5.7'], color: 'from-orange-500 to-amber-500' },
  { id: 'mongodb', name: 'MongoDB', icon: '🍃', versions: ['7.0', '6.0', '5.0'], color: 'from-green-500 to-emerald-500' },
  { id: 'redis', name: 'Redis', icon: '🔴', versions: ['7.4', '7.2', '6.2'], color: 'from-red-500 to-rose-500' },
  { id: 'elasticsearch', name: 'Elasticsearch', icon: '🔎', versions: ['8.15', '8.14', '7.17'], color: 'from-yellow-500 to-amber-500' },
]

export const PIPELINE_STAGES = ['Source', 'Build', 'Test', 'Deploy', 'Monitor']

export const REGIONS = ['us-east-1', 'us-west-2', 'eu-west-1', 'eu-central-1', 'ap-southeast-1', 'ap-northeast-1']

export const MARKETPLACE_APPS = [
  { id: 'wordpress', name: 'WordPress', icon: '📝', category: 'CMS', desc: 'Popular CMS & blogging platform', installs: 45200 },
  { id: 'grafana', name: 'Grafana', icon: '📊', category: 'Monitoring', desc: 'Open source analytics & monitoring', installs: 32100 },
  { id: 'prometheus', name: 'Prometheus', icon: '🔥', category: 'Monitoring', desc: 'Metrics collection & alerting', installs: 28400 },
  { id: 'nginx', name: 'Nginx', icon: '🌐', category: 'Web Server', desc: 'High-performance web server', installs: 52000 },
  { id: 'redis-stack', name: 'Redis Stack', icon: '🔴', category: 'Database', desc: 'In-memory data store', installs: 18900 },
  { id: 'minio', name: 'MinIO', icon: '📦', category: 'Storage', desc: 'S3-compatible object storage', installs: 15600 },
  { id: 'gitlab', name: 'GitLab CE', icon: '🦊', category: 'DevOps', desc: 'Complete DevOps platform', installs: 22300 },
  { id: 'traefik', name: 'Traefik', icon: '🚀', category: 'Networking', desc: 'Cloud-native reverse proxy', installs: 19800 },
  { id: 'vault', name: 'HashiCorp Vault', icon: '🔐', category: 'Security', desc: 'Secrets management', installs: 14200 },
  { id: 'rabbitmq', name: 'RabbitMQ', icon: '🐰', category: 'Messaging', desc: 'Message broker', installs: 11800 },
]

export const K8S_EVENTS = [
  { time: '2 min ago', type: 'Normal', message: 'Pod api-server-7b8f4d scaled up to 3 replicas', source: 'deployment/api-server' },
  { time: '5 min ago', type: 'Warning', message: 'High memory usage detected on node-3 (87%)', source: 'node/node-3' },
  { time: '12 min ago', type: 'Normal', message: 'Ingress route updated for app.cloudforge.io', source: 'ingress/main' },
  { time: '18 min ago', type: 'Normal', message: 'ConfigMap app-config updated', source: 'configmap/app-config' },
  { time: '25 min ago', type: 'Warning', message: 'Pod worker-5a2c1 OOMKilled', source: 'pod/worker-5a2c1' },
  { time: '30 min ago', type: 'Normal', message: 'PersistentVolumeClaim data-pvc bound', source: 'pvc/data-pvc' },
  { time: '45 min ago', type: 'Normal', message: 'Service api-server created', source: 'service/api-server' },
  { time: '1 hr ago', type: 'Normal', message: 'Deployment nginx-ingress rolled out', source: 'deployment/nginx-ingress' },
]

export type ResourceStatus = 'running' | 'stopped' | 'error' | 'pending' | 'provisioning'
export type Severity = 'info' | 'warning' | 'critical'
