import { ref, watch, onMounted } from 'vue';

// Simple debounce helper
function debounce(func: () => void, wait: number) {
  let timeout: ReturnType<typeof setTimeout>;
  return () => {
    clearTimeout(timeout);
    timeout = setTimeout(func, wait);
  };
}

export interface Link {
  title: string;
  url: string;
  description?: string;
  category?: string;
  icon?: any;
  createdAt?: number;
}

export interface Box {
  name: string;
  links: Link[];
  createdAt?: number;
  updatedAt?: number;
}

/**
 * Composable for managing persistent links storage
 * Uses localStorage with automatic saving and recovery
 */
export function useLinksStorage(apiUrl = '/api/links/test-link/boxes') {
  // Generate unique storage keys based on link name extracted from API URL
  // Extract link name from URL like /api/links/{linkName}/boxes
  const linkNameMatch = apiUrl.match(/\/api\/links\/([^\/]+)\/boxes/);
  const linkName = linkNameMatch ? linkNameMatch[1] : 'default';
  const STORAGE_KEY = `it-tools_links_${linkName}`;
  const BACKUP_STORAGE_KEY = `it-tools_links_${linkName}_backup`;

  const boxes = ref<Box[]>([]);
  const isLoading = ref(false);
  const error = ref<string | null>(null);
  const lastSyncTime = ref<number | null>(null);
  const isInitialized = ref(false);

  /**
   * Load boxes from localStorage
   */
  function loadFromLocalStorage(): Box[] {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      return stored ? JSON.parse(stored) : [];
    } catch (err) {
      // Try backup
      try {
        const backup = localStorage.getItem(BACKUP_STORAGE_KEY);
        return backup ? JSON.parse(backup) : [];
      } catch (backupErr) {
        return [];
      }
    }
  }

  /**
   * Save boxes to localStorage
   */
  function saveToLocalStorage(data: Box[]): boolean {
    try {
      // Create backup before saving
      const existing = localStorage.getItem(STORAGE_KEY);
      if (existing) {
        localStorage.setItem(BACKUP_STORAGE_KEY, existing);
      }
      // Save new data
      localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
      return true;
    } catch (err) {
      error.value = 'Failed to save data to local storage';
      return false;
    }
  }

  /**
   * Load boxes from API
   */
  async function loadFromAPI(): Promise<Box[]> {
    try {
      isLoading.value = true;
      error.value = null;
      const response = await fetch(apiUrl);
      if (!response.ok) {
        throw new Error(`API error: ${response.status}`);
      }
      const data = await response.json();
      return Array.isArray(data) ? data : [];
    } catch (err) {
      error.value = `Failed to load from server: ${err instanceof Error ? err.message : String(err)}`;
      return [];
    } finally {
      isLoading.value = false;
    }
  }

  /**
   * Save boxes to API
   */
  async function saveToAPI(data: Box[]): Promise<boolean> {
    try {
      isLoading.value = true;
      error.value = null;
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error(`API error: ${response.status}`);
      }

      const result = await response.json();
      lastSyncTime.value = Date.now();
      return result.success !== false;
    } catch (err) {
      error.value = `Failed to save to server: ${err instanceof Error ? err.message : String(err)}`;
      return false;
    } finally {
      isLoading.value = false;
    }
  }

  /**
   * Initialize: Load from API first, fallback to localStorage
   */
  async function initialize() {
    // Try to load from API first (server is source of truth)
    try {
      const apiData = await loadFromAPI();
      
      if (apiData && Array.isArray(apiData)) {
        boxes.value = apiData;
        isInitialized.value = true;
        // Save to localStorage for offline access
        if (apiData.length > 0) {
          saveToLocalStorage(apiData);
        }
        return;
      }
    } catch (err) {
      // API load failed, will try localStorage
    }
    
    // Fallback to localStorage
    const localData = loadFromLocalStorage();
    boxes.value = localData;
    isInitialized.value = true;
  }

  /**
   * Save data (to both localStorage and API) - debounced
   */
  async function save() {
    // Don't save during initialization
    if (!isInitialized.value) {
      return false;
    }

    // Always save to localStorage first (local-first approach)
    const saved = saveToLocalStorage(boxes.value);

    if (!saved) {
      return false;
    }

    // Try to sync with API
    const apiSaved = await saveToAPI(boxes.value);

    return true;
  }

  // Create debounced save function (wait 500ms after changes stop)
  const debouncedSave = debounce(() => {
    save();
  }, 500);

  /**
   * Create a new box
   */
  function createBox(name: string): Box {
    const box: Box = {
      name: name.trim(),
      links: [],
      createdAt: Date.now(),
      updatedAt: Date.now(),
    };
    boxes.value.push(box);
    return box;
  }

  /**
   * Delete a box by index
   */
  function deleteBox(boxIndex: number): boolean {
    if (boxIndex >= 0 && boxIndex < boxes.value.length) {
      boxes.value.splice(boxIndex, 1);
      return true;
    }
    return false;
  }

  /**
   * Rename a box
   */
  function renameBox(boxIndex: number, newName: string): boolean {
    if (boxIndex >= 0 && boxIndex < boxes.value.length) {
      boxes.value[boxIndex].name = newName.trim();
      boxes.value[boxIndex].updatedAt = Date.now();
      return true;
    }
    return false;
  }

  /**
   * Add a link to a box
   */
  function addLink(boxIndex: number, link: Link): boolean {
    if (boxIndex >= 0 && boxIndex < boxes.value.length) {
      const linkWithTimestamp = {
        ...link,
        createdAt: link.createdAt || Date.now(),
      };
      boxes.value[boxIndex].links.push(linkWithTimestamp);
      boxes.value[boxIndex].updatedAt = Date.now();
      return true;
    }
    return false;
  }

  /**
   * Delete a link from a box
   */
  function deleteLink(boxIndex: number, linkIndex: number): boolean {
    if (
      boxIndex >= 0 && boxIndex < boxes.value.length &&
      linkIndex >= 0 && linkIndex < boxes.value[boxIndex].links.length
    ) {
      boxes.value[boxIndex].links.splice(linkIndex, 1);
      boxes.value[boxIndex].updatedAt = Date.now();
      return true;
    }
    return false;
  }

  /**
   * Reorder boxes (for drag and drop)
   */
  function reorderBoxes(fromIndex: number, toIndex: number): boolean {
    if (
      fromIndex >= 0 && fromIndex < boxes.value.length &&
      toIndex >= 0 && toIndex < boxes.value.length &&
      fromIndex !== toIndex
    ) {
      const box = boxes.value[fromIndex];
      boxes.value.splice(fromIndex, 1);
      boxes.value.splice(toIndex, 0, box);
      return true;
    }
    return false;
  }

  /**
   * Get total number of links across all boxes
   */
  function getTotalLinksCount(): number {
    return boxes.value.reduce((sum, box) => sum + box.links.length, 0);
  }

  /**
   * Export all data as JSON
   */
  function exportAsJSON(): string {
    return JSON.stringify(boxes.value, null, 2);
  }

  /**
   * Import data from JSON
   */
  function importFromJSON(jsonString: string): boolean {
    try {
      const data = JSON.parse(jsonString);
      if (Array.isArray(data)) {
        boxes.value = data;
        return true;
      }
      return false;
    } catch (err) {
      error.value = 'Invalid JSON format';
      return false;
    }
  }

  /**
   * Clear all data
   */
  function clear(): void {
    boxes.value = [];
    localStorage.removeItem(STORAGE_KEY);
    localStorage.removeItem(BACKUP_STORAGE_KEY);
  }

  // Watch removed - using manual save button instead
  // User must call save() explicitly to persist changes

  return {
    // State
    boxes,
    isLoading,
    error,
    lastSyncTime,

    // Lifecycle
    initialize,
    save,

    // Box operations
    createBox,
    deleteBox,
    renameBox,
    reorderBoxes,

    // Link operations
    addLink,
    deleteLink,

    // Data operations
    getTotalLinksCount,
    exportAsJSON,
    importFromJSON,
    clear,

    // Direct access
    loadFromAPI,
    loadFromLocalStorage,
    saveToLocalStorage,
  };
}



