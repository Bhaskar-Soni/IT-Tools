import { ref, computed, watch } from 'vue';
import { useRoute, useRouter } from 'vue-router';

type QPOpts<T> = {
  name: string;
  storageName?: string;
  defaultValue?: T;
};

function coerceValue<T>(raw: any, defaultValue?: T): T | string {
  if (raw === undefined || raw === null || raw === '') {
    return (defaultValue as any) ?? '';
  }
  // If no default provided, return raw string
  if (defaultValue === undefined) return raw;

  const t = typeof defaultValue;
  try {
    if (t === 'number') return (Number(raw) as any);
    if (t === 'boolean') return (raw === 'true' || raw === true) as any;
    if (t === 'object') return JSON.parse(raw) as any;
    return raw as any;
  } catch {
    return raw;
  }
}

// Hook for using query parameters
type UseQPArg<T> = string | ({ tool?: string; name: string; defaultValue?: T });

export function useQueryParam<T = string>(arg: UseQPArg<T>, maybeDefault?: T) {
  const route = useRoute();
  const router = useRouter();

  let name: string;
  let defaultValue: T | undefined;
  if (typeof arg === 'string') {
    name = arg;
    defaultValue = maybeDefault as T | undefined;
  } else {
    name = arg.name;
    defaultValue = arg.defaultValue as T | undefined;
  }

  const value = computed<T | string>({
    get: () => {
      const qv = route.query[name] as string | undefined;
      if (qv !== undefined) return coerceValue(qv, defaultValue) as any;
      return (defaultValue as any) ?? '';
    },
    set: (newValue: T | string) => {
      const query = { ...route.query, [name]: String(newValue ?? '') };
      if (newValue === '' || newValue === undefined || newValue === null) delete query[name];
      router.push({ query }).catch(() => {});
    },
  });

  return value as any;
}

// Hook for using query param or localStorage
// Supports two call signatures:
// useQueryParamOrStorage(key: string, storageKey?: string)
// useQueryParamOrStorage({ name, storageName, defaultValue })
export function useQueryParamOrStorage<T = string>(arg: string | QPOpts<T>, maybeStorage?: string) {
  const route = useRoute();
  const router = useRouter();

  let name: string;
  let storageName: string | undefined;
  let defaultValue: T | undefined;

  if (typeof arg === 'string') {
    name = arg;
    storageName = maybeStorage;
    defaultValue = undefined;
  } else {
    name = arg.name;
    storageName = arg.storageName;
    defaultValue = arg.defaultValue;
  }

  const sKey = storageName || name;

  const value = computed<T | string>({
    get: () => {
      const queryValue = route.query[name] as string | undefined;
      if (queryValue !== undefined) return coerceValue(queryValue, defaultValue);
      try {
        const stored = localStorage.getItem(sKey);
        if (stored !== null) return coerceValue(stored, defaultValue);
      } catch {
        // ignore
      }
      return (defaultValue as any) ?? '';
    },
    set: (newValue: T | string) => {
      try {
        const toStore = typeof newValue === 'object' ? JSON.stringify(newValue) : String(newValue ?? '');
        localStorage.setItem(sKey, toStore);
      } catch {
        // Ignore localStorage errors
      }
      const query = { ...route.query, [name]: String(newValue ?? '') };
      if (newValue === '' || newValue === undefined || newValue === null) {
        delete query[name];
      }
      router.push({ query }).catch(() => {
        // Ignore navigation errors
      });
    },
  });

  return value as any;
}

// Hook for using localStorage directly with a default value
export function useITStorage(storageKey: string, defaultValue: string = '') {
  const value = ref<string>(defaultValue);

  // Load from localStorage on mount
  try {
    const stored = localStorage.getItem(storageKey);
    if (stored !== null) {
      value.value = stored;
    }
  } catch {
    // Ignore localStorage errors
  }

  // Watch for changes and persist to localStorage
  watch(value, (newValue) => {
    try {
      if (newValue === defaultValue || newValue === '') {
        localStorage.removeItem(storageKey);
      } else {
        localStorage.setItem(storageKey, newValue);
      }
    } catch {
      // Ignore localStorage errors
    }
  });

  return value;
}
