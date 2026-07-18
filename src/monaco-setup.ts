// Monaco editor web worker setup (must run before any monaco import)
import editorWorkerUrl from 'monaco-editor/esm/vs/editor/editor.worker?worker&url';
import jsonWorkerUrl from 'monaco-editor/esm/vs/language/json/json.worker?worker&url';
import cssWorkerUrl from 'monaco-editor/esm/vs/language/css/css.worker?worker&url';
import htmlWorkerUrl from 'monaco-editor/esm/vs/language/html/html.worker?worker&url';
import tsWorkerUrl from 'monaco-editor/esm/vs/language/typescript/ts.worker?worker&url';

const workerUrlMap: Record<string, string> = {
  json: jsonWorkerUrl,
  css: cssWorkerUrl,
  scss: cssWorkerUrl,
  less: cssWorkerUrl,
  html: htmlWorkerUrl,
  handlebars: htmlWorkerUrl,
  razor: htmlWorkerUrl,
  typescript: tsWorkerUrl,
  javascript: tsWorkerUrl,
  editor: editorWorkerUrl,
};

(globalThis as typeof globalThis & {
  MonacoEnvironment?: {
    getWorkerUrl?: (moduleId: string, label: string) => string;
    getWorker?: (moduleId: string, label: string) => Worker;
  };
}).MonacoEnvironment = {
  getWorkerUrl: (_moduleId, label) => workerUrlMap[label] ?? editorWorkerUrl,
  getWorker: (_moduleId, label) =>
    new Worker(workerUrlMap[label] ?? editorWorkerUrl, { type: 'module' }),
};
