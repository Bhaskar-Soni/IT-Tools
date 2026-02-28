import { resolve } from 'node:path';
import { URL, fileURLToPath } from 'node:url';
import fs from 'node:fs';
import type { IncomingMessage, ServerResponse } from 'node:http';

import { defineConfig } from 'vite';
import type { ViteDevServer } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';

import AutoImport from 'unplugin-auto-import/vite';

import { NaiveUiResolver } from 'unplugin-vue-components/resolvers';
import Components from 'unplugin-vue-components/vite';

import Unocss from 'unocss/vite';
import markdown from 'vite-plugin-vue-markdown';
import svgLoader from 'vite-svg-loader';
import { VitePWA } from 'vite-plugin-pwa';
import monacoEditorPlugin from 'vite-plugin-monaco-editor';

import { configDefaults } from 'vitest/config';

const baseUrl = process.env.BASE_URL ?? '/';

// Custom plugin for API routes
const apiPlugin = {
  name: 'api-plugin',
  apply: 'serve',
  configureServer(server: ViteDevServer) {
    // Attach middleware BEFORE default Vite middleware
    server.middlewares.use((req: IncomingMessage, res: ServerResponse, next: () => void) => {
      // Match dynamic links API endpoints: /api/links/{linkName}/boxes (ignore query params)
      const linksMatch = req.url?.match(/^\/api\/links\/([^\/]+)\/boxes/);

      if (linksMatch) {
        const linkName = linksMatch[1];

        if (req.method === 'GET') {
          const dataPath = resolve(__dirname, `src/content/links/${linkName}/data/boxes.json`);
          try {
            const data = fs.readFileSync(dataPath, 'utf-8');
            res.setHeader('Content-Type', 'application/json');
            res.setHeader('Cache-Control', 'no-cache');
            res.end(data);
            return;
          } catch (error) {
            res.setHeader('Content-Type', 'application/json');
            res.statusCode = 200;
            res.end(JSON.stringify([]));
            return;
          }
        } else if (req.method === 'POST') {
          const dataPath = resolve(__dirname, `src/content/links/${linkName}/data/boxes.json`);
          let body = '';

          req.setEncoding('utf8');
          req.on('data', (chunk: string) => {
            body += chunk;
          });

          req.on('end', () => {
            try {
              const parsed = JSON.parse(body);
              fs.writeFileSync(dataPath, body, 'utf-8');
              res.setHeader('Content-Type', 'application/json');
              res.statusCode = 200;
              res.end(JSON.stringify({ success: true }));
            } catch (error) {
              res.setHeader('Content-Type', 'application/json');
              res.statusCode = 400;
              res.end(JSON.stringify({ success: false, error: error instanceof Error ? error.message : 'Unknown error' }));
            }
          });
          return;
        }
      }
      next();
    });
  },
};

// Force curlconverter's browser parser to use our shim.
const curlconverterWebParserShim = {
  name: 'curlconverter-webparser-shim',
  enforce: 'pre' as const,
  resolveId(id: string, importer?: string) {
    const shimPath = fileURLToPath(new URL('./src/shims/curlconverter-webParser.ts', import.meta.url));
    const normalizedId = id.replace(/\\/g, '/');
    const normalizedImporter = importer ? importer.replace(/\\/g, '/') : '';
    if (normalizedId.includes('curlconverter/dist/src/shell/webParser')) {
      return shimPath;
    }
    if (normalizedImporter.includes('curlconverter/dist/src/shell') && normalizedId.endsWith('/Parser.js')) {
      return shimPath;
    }
    if (normalizedImporter.includes('curlconverter/dist/src/shell') && normalizedId === './Parser.js') {
      return shimPath;
    }
    return null;
  },
};

// Force isolated-vm (Node-only) to a browser-safe shim during production bundling.
const isolatedVmBrowserShim = {
  name: 'isolated-vm-browser-shim',
  enforce: 'pre' as const,
  resolveId(id: string) {
    const shimPath = fileURLToPath(new URL('./src/shims/isolated-vm.ts', import.meta.url));
    const normalizedId = id.replace(/\\/g, '/');

    if (
      normalizedId === 'isolated-vm'
      || normalizedId.endsWith('/isolated-vm')
      || normalizedId.includes('/out/isolated_vm')
      || normalizedId.includes('isolated_vm?commonjs-external')
    ) {
      return shimPath;
    }

    return null;
  },
};

export default defineConfig({
  plugins: [
    apiPlugin,
    curlconverterWebParserShim,
    isolatedVmBrowserShim,
    // âœ… Vue + Markdown
    vue({
      include: [/\.vue$/, /\.md$/],
      template: {
        compilerOptions: {
          isCustomElement: (tag) => {
            // Handle dynamic icon components (icon-mdi-*, icon-tabler-*, etc.)
            return /^icon-/.test(tag);
          },
        },
      },
    }),
    vueJsx(),
    (markdown as any).default ? (markdown as any).default() : (markdown as any)(),

    // âœ… Auto imports
    AutoImport({
      imports: [
        'vue',
        'vue-router',
        '@vueuse/core',
        {
          'naive-ui': ['useDialog', 'useMessage', 'useNotification', 'useLoadingBar'],
        },
      ],
      vueTemplate: true,
      eslintrc: {
        enabled: true,
      },
    }),

    // âœ… Components auto-register (RESTORED UI)
    ((Components as any).default ? (Components as any).default : (Components as any))({
      dts: 'components.d.ts',

      dirs: [
        'src/components',
        'src/layouts',
        'src/pages',
        'src/ui',
        'src/modules',
        'src/content/tools',
      ],

      extensions: ['vue'],
      include: [/\.vue$/, /\.vue\?vue/],

      // âŒ prevent conflicts from new architecture
      exclude: [
        /\.md$/,
      ],

      resolvers: [
        NaiveUiResolver(),
      ],
    }),

    // âœ… Styling & assets
    Unocss(),
    svgLoader(),
    (monacoEditorPlugin as any).default ? (monacoEditorPlugin as any).default({
      languageWorkers: ['editorWorkerService', 'json', 'css', 'html', 'typescript'],
    }) : (monacoEditorPlugin as any)({
      languageWorkers: ['editorWorkerService', 'json', 'css', 'html', 'typescript'],
    }),

    // âœ… PWA
    VitePWA({
      registerType: 'autoUpdate',
      strategies: 'generateSW',
      manifest: {
        name: 'IT-Tools',
        description: 'The Hidden Side of the Internet',
        display: 'standalone',
        lang: 'en',
        start_url: `${baseUrl}?utm_source=pwa&utm_medium=pwa`,
        orientation: 'any',
        theme_color: '#18a058',
        background_color: '#f1f5f9',
        icons: [
          { src: '/favicon-16x16.png', type: 'image/png', sizes: '16x16' },
          { src: '/favicon-32x32.png', type: 'image/png', sizes: '32x32' },
          { src: '/android-chrome-192x192.png', type: 'image/png', sizes: '192x192' },
          { src: '/android-chrome-512x512.png', type: 'image/png', sizes: '512x512', purpose: 'any maskable' },
        ],
      },
    }),
  ],

  base: baseUrl,

  resolve: {
    alias: [
      {
        find: '@',
        replacement: fileURLToPath(new URL('./src', import.meta.url)),
      },
      {
        // Match both with/without extension and with possible Vite query strings.
        find: /curlconverter\/dist\/src\/shell\/webParser(\.js)?(\?.*)?$/,
        replacement: fileURLToPath(new URL('./src/shims/curlconverter-webParser.ts', import.meta.url)),
      },
      {
        // Provide a default export for yamljs (CJS).
        find: /^yamljs$/,
        replacement: fileURLToPath(new URL('./src/shims/yamljs.ts', import.meta.url)),
      },
      {
        find: /^node:fs\/promises$/,
        replacement: fileURLToPath(new URL('./src/shims/fs-promises.ts', import.meta.url)),
      },
      {
        find: /^node:url$/,
        replacement: fileURLToPath(new URL('./src/shims/node-url.ts', import.meta.url)),
      },
      {
        find: /^node:stream$/,
        replacement: fileURLToPath(new URL('./src/shims/node-stream.ts', import.meta.url)),
      },
      {
        find: /^isolated-vm$/,
        replacement: fileURLToPath(new URL('./src/shims/isolated-vm.ts', import.meta.url)),
      },
    ],
  },

  optimizeDeps: {
    include: [
      'web-tree-sitter',
    ],
    // Exclude problematic dependencies that can't be bundled for browser
    exclude: [
      'isolated-vm',
      'curlconverter',
      'chardet',         // Uses Node.js modules (fs, etc)
      'libbase64',       // Node.js only
      'libmime',         // Node.js only
      '@zone-eu/mailsplit', // Node.js only
      'md-editor-v3',    // Requires Vue 3.4+ but we have 3.3.4
      'rtf-stream-parser', // Class inheritance issues in browser
      '@kenjiuno/msgreader', // Depends on rtf-stream-parser
    ],
  },

  define: {
    'import.meta.env.PACKAGE_VERSION': JSON.stringify(process.env.npm_package_version),
  },

  test: {
    exclude: [...configDefaults.exclude, '**/*.e2e.spec.ts'],
  },

  build: {
    target: 'esnext',
    sourcemap: false,
    minify: 'esbuild',
    reportCompressedSize: false,
    chunkSizeWarningLimit: 2000,
    rollupOptions: {
      maxParallelFileOps: 3,
    },
  },
});




