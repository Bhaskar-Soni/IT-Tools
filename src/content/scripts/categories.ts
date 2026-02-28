export const scriptCategories = [
  {
    name: 'Uncategorized', items: [],
  },
  {
    name: 'Automation', items: ['bash-automation', 'log-rotation-manager', 'backup-retention', 'postgres-dump-rotation', 'redis-backup-restore-helper'],
  },
  {
    name: 'Data Processing', items: ['csv-to-json-normalizer', 'json-schema-validator-batch'],
  },
  {
    name: 'System', items: ['docker-cleanup-prune', 'process-watchdog', 'failed-login-audit', 'package-update-reporter', 'user-expiry-audit', 'file-integrity-baseline'],
  },
  {
    name: 'Monitoring', items: ['health-check', 'ssl-certificate-expiry-checker', 'api-uptime-monitor', 'disk-usage-alert', 'systemd-service-health-monitor', 'nginx-access-anomaly-summary', 'website-sitemap-health-check'],
  },
  {
    name: 'Deployment', items: ['nginx-blue-green-deploy', 'env-config-drift-checker'],
  },
  {
    name: 'Testing', items: [],
  },
];
