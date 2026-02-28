<template>
  <div class="links-manager">
    <div class="container">
      <!-- Create New Box Section -->
      <div class="create-box-wrapper">
        <div class="create-box-section">
          <input
            v-model="newBoxName"
            type="text"
            placeholder="Enter box name (e.g., OSINT Resources, Development Tools)"
            class="box-input"
            @keyup.enter="createBox"
          />
          <button class="btn-create-box" @click="createBox">
            <n-icon size="18" :component="plusIcon" />
            Create Box
          </button>
          <button 
            class="btn-save" 
            @click="saveAllLinks"
            :disabled="isSaving"
          >
            <n-icon size="18" :component="floppyIcon" />
            {{ isSaving ? 'Saving...' : 'Save All' }}
          </button>
          <button 
            class="btn-export" 
            @click="exportData"
            title="Export data as JSON"
          >
            <n-icon size="18" :component="downloadIcon" />
            Export
          </button>
          <button 
            class="btn-import" 
            @click="triggerImport"
            title="Import data from JSON"
          >
            <n-icon size="18" :component="uploadIcon" />
            Import
          </button>
          <input
            ref="fileInput"
            type="file"
            accept=".json"
            style="display: none"
            @change="handleFileImport"
          />
        </div>
      </div>
      
      <!-- Boxes Grid -->
      <div v-if="boxes.length === 0" class="empty-state">
        <p>No boxes created yet. Create your first box to start adding links!</p>
      </div>
      
      <div v-else class="boxes-container">
        <div
          v-for="(box, boxIndex) in boxes"
          :key="`${box.name}-${box.createdAt || boxIndex}`"
          class="box-card"
          draggable="true"
          :class="{ 'dragging': draggingBoxIndex === boxIndex, 'dragover': dragoverBoxIndex === boxIndex }"
          @dragstart="startDragging(boxIndex)"
          @dragover.prevent="onDragOver(boxIndex)"
          @dragleave="onDragLeave"
          @drop.prevent="onDrop(boxIndex)"
          @dragend="endDragging"
        >
          <!-- Box Header -->
          <div class="box-header">
            <!-- Header Row 1: Title (Left) + Actions (Right) -->
            <div class="header-row-1">
              <div class="title-with-toggle">
                <h3 
                  class="box-title" 
                  @click.stop="toggleBoxExpansion(boxIndex)"
                  :class="{ 'collapsed': isBoxCollapsed(boxIndex) }"
                >
                  {{ box.name }}
                </h3>
                <button
                  class="btn-toggle-expand"
                  @click.stop="toggleBoxExpansion(boxIndex)"
                  :title="isBoxCollapsed(boxIndex) ? 'Expand' : 'Collapse'"
                >
                  <n-icon size="14" :component="isBoxCollapsed(boxIndex) ? chevronDownIcon : chevronUpIcon" />
                </button>
              </div>
              <div class="header-actions">
                <button
                  class="btn-action btn-add-link-header"
                  @click.stop="toggleAddLinkForm(boxIndex)"
                  :title="'Add link to this box'"
                >
                  +
                </button>
                <div class="menu-container">
                  <button
                    class="btn-action btn-menu"
                    @click="toggleMenu(boxIndex)"
                    :title="'More options'"
                  >
                    <n-icon size="16" :component="dotsIcon" />
                  </button>
                  <transition name="fade">
                    <div v-if="openMenuBox === boxIndex" class="dropdown-menu">
                      <button
                        class="menu-item"
                        @click="startRenaming(boxIndex); openMenuBox = null"
                      >
                        Edit title
                      </button>
                      <div class="menu-divider"></div>
                      <div class="menu-label">Sort Links</div>
                      <button
                        class="menu-item"
                        :class="{ 'active': getBoxSortKey(boxIndex).startsWith('title') }"
                        @click="toggleSort(boxIndex, 'title')"
                      >
                        Title
                        <n-icon v-if="getBoxSortKey(boxIndex) === 'title-asc'" size="14" :component="arrowUpIcon" class="sort-indicator" />
                        <n-icon v-if="getBoxSortKey(boxIndex) === 'title-desc'" size="14" :component="arrowDownIcon" class="sort-indicator" />
                      </button>
                      <button
                        class="menu-item"
                        :class="{ 'active': getBoxSortKey(boxIndex).startsWith('age') }"
                        @click="toggleSort(boxIndex, 'age')"
                      >
                        Age
                        <n-icon v-if="getBoxSortKey(boxIndex) === 'age-newest'" size="14" :component="arrowUpIcon" class="sort-indicator" />
                        <n-icon v-if="getBoxSortKey(boxIndex) === 'age-oldest'" size="14" :component="arrowDownIcon" class="sort-indicator" />
                      </button>
                      <button
                        class="menu-item"
                        :class="{ 'active': getBoxSortKey(boxIndex).startsWith('domain') }"
                        @click="toggleSort(boxIndex, 'domain')"
                      >
                        Domain
                        <n-icon v-if="getBoxSortKey(boxIndex) === 'domain-asc'" size="14" :component="arrowUpIcon" class="sort-indicator" />
                        <n-icon v-if="getBoxSortKey(boxIndex) === 'domain-desc'" size="14" :component="arrowDownIcon" class="sort-indicator" />
                      </button>
                      <button
                        class="menu-item"
                        :class="{ 'active': getBoxSortKey(boxIndex).startsWith('url') }"
                        @click="toggleSort(boxIndex, 'url')"
                      >
                        URL
                        <n-icon v-if="getBoxSortKey(boxIndex) === 'url-asc'" size="14" :component="arrowUpIcon" class="sort-indicator" />
                        <n-icon v-if="getBoxSortKey(boxIndex) === 'url-desc'" size="14" :component="arrowDownIcon" class="sort-indicator" />
                      </button>
                      <div class="menu-divider"></div>
                      <button
                        class="menu-item delete-item"
                        @click="deleteBox(boxIndex)"
                      >
                        Delete bookmark
                      </button>
                    </div>
                  </transition>
                </div>
              </div>
            </div>
            
            <!-- Header Row 2: Link Count + Expand Button -->
            <div class="header-row-2">
              <span class="link-count">{{ box.links.length }} link{{ box.links.length !== 1 ? 's' : '' }}</span>
              <button
                v-show="isBoxCollapsed(boxIndex)"
                class="btn-expand"
                @click.stop="toggleBoxExpansion(boxIndex)"
                :title="'Expand box'"
              >
                <n-icon size="16" :component="chevronUpIcon" />
              </button>
            </div>
          </div>
          
          <!-- Rename Box Form -->
          <transition name="slide-fade">
            <div v-if="renamingBoxIndex === boxIndex" class="rename-form-section">
              <input
                v-model="renameBoxName"
                type="text"
                class="rename-input"
                placeholder="Enter new box name"
                @keyup.enter="confirmRename(boxIndex)"
                @keyup.esc="cancelRename"
                autofocus
              />
              <div class="rename-actions">
                <button class="btn-confirm" @click="confirmRename(boxIndex)">Save</button>
                <button class="btn-cancel" @click="cancelRename">Cancel</button>
              </div>
            </div>
          </transition>
          
          <!-- Add Link Form (moved to header, shown below header when active) -->
          <transition name="slide-fade">
            <div v-if="showAddLinkForm === boxIndex" class="add-link-form-section" @click.stop>
              <link-form
                :editing-index="editingBoxIndex === boxIndex ? editingLinkIndex : null"
                :editing-link="editingBoxIndex === boxIndex && editingLinkIndex !== null ? boxes[boxIndex].links[editingLinkIndex] : null"
                @submit="(link) => handleLinkSubmit(boxIndex, link)"
                @cancel="cancelEditLink"
              />
            </div>
          </transition>
          
          <!-- Links in Box - Wrapped with box-card-wrapper for bottom brackets -->
          <div class="box-card-wrapper">
            <div class="box-links" v-show="shouldShowLinks(boxIndex)">
              <div v-if="box.links.length === 0" class="no-links">
                <p>No links in this box yet</p>
              </div>
              
              <a
                v-for="(link, linkIndex) in box.links"
                :key="linkIndex"
                :href="link.url"
                target="_blank"
                rel="noopener noreferrer"
                class="link-item"
                @mouseenter="hoveredLink = `${boxIndex}-${linkIndex}`"
                @mouseleave="hoveredLink = null"
              >
                <div class="link-icon">
                  <n-icon v-if="link.icon" size="20" :component="link.icon" />
                  <span v-else class="icon-placeholder">🔗</span>
                </div>
                
                <div class="link-info">
                  <div class="link-title">{{ link.title }}</div>
                  <div v-if="link.description" class="link-description">{{ link.description }}</div>
                </div>
                
                <div v-if="hoveredLink === `${boxIndex}-${linkIndex}`" class="link-actions">
                  <button
                    v-if="linkIndex > 0"
                    class="action-btn move-up-btn"
                    @click.prevent="moveLink(boxIndex, linkIndex, -1)"
                    title="Move up"
                  >
                    <n-icon size="16" :component="chevronUpIcon" />
                  </button>
                  <button
                    v-if="linkIndex < box.links.length - 1"
                    class="action-btn move-down-btn"
                    @click.prevent="moveLink(boxIndex, linkIndex, 1)"
                    title="Move down"
                  >
                    <n-icon size="16" :component="chevronDownIcon" />
                  </button>
                  <button
                    class="action-btn edit-btn"
                    @click.prevent="startEditLink(boxIndex, linkIndex)"
                    :title="`Edit ${link.title}`"
                  >
                    <n-icon size="16" :component="pencilIcon" />
                  </button>
                  <button
                    class="action-btn delete-btn"
                    @click.prevent="deleteLink(boxIndex, linkIndex)"
                    :title="`Delete ${link.title}`"
                  >
                    <n-icon size="16" :component="trashIcon" />
                  </button>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, onMounted, markRaw } from 'vue';
import { NIcon } from 'naive-ui';
import { Plus, DatabaseExport, FileImport, FileExport, Pencil, Dots, ChevronUp, ChevronDown, Trash, ArrowUp, ArrowDown } from '@vicons/tabler';
import LinkForm from '@/components/LinkForm.vue';
import { useLinksStorage, type Link, type Box } from '@/composable/useLinksStorage';

const API_URL = '/api/links/cli-tools/boxes';

// Mark icons as raw to prevent Vue reactivity checks
const plusIcon = markRaw(Plus);
const floppyIcon = markRaw(DatabaseExport);
const downloadIcon = markRaw(FileExport);
const uploadIcon = markRaw(FileImport);
const pencilIcon = markRaw(Pencil);
const dotsIcon = markRaw(Dots);
const chevronUpIcon = markRaw(ChevronUp);
const chevronDownIcon = markRaw(ChevronDown);
const trashIcon = markRaw(Trash);
const arrowUpIcon = markRaw(ArrowUp);
const arrowDownIcon = markRaw(ArrowDown);

// Initialize storage composable
const {
  boxes,
  isLoading,
  error,
  initialize,
  save,
  createBox: createBoxStorage,
  deleteBox: deleteBoxStorage,
  renameBox: renameBoxStorage,
  addLink: addLinkStorage,
  deleteLink: deleteLinkStorage,
  reorderBoxes: reorderBoxesStorage,
} = useLinksStorage(API_URL);

const newBoxName = ref('');
const showAddLinkForm = ref<number | null>(null);
const openMenuBox = ref<number | null>(null);
const renamingBoxIndex = ref<number | null>(null);
const renameBoxName = ref('');
const hoveredLink = ref<string | null>(null);
const draggingBoxIndex = ref<number | null>(null);
const dragoverBoxIndex = ref<number | null>(null);
const isSaving = ref(false);
const fileInput = ref<HTMLInputElement | null>(null);
const editingBoxIndex = ref<number | null>(null);
const editingLinkIndex = ref<number | null>(null);
// Use box name as key instead of index to prevent expansion issues
const collapsedBoxes = reactive<Record<string, boolean>>({});

// Track sort state per box (using box name as key)
const boxSortKeys = reactive<Record<string, string>>({});

// Extract domain from URL
function getDomain(url: string): string {
  try {
    return new URL(url).hostname.replace(/^www\./, '');
  } catch {
    return url;
  }
}

// Get the current sort key for a box
function getBoxSortKey(boxIndex: number): string {
  const box = boxes.value[boxIndex];
  const key = box?.name || `box-${boxIndex}`;
  return boxSortKeys[key] || '';
}

// Sort links within a specific box
function sortLinksInBox(boxIndex: number, sortKey: string) {
  const box = boxes.value[boxIndex];
  if (!box) return;
  
  // Store the sort key for this box
  const boxKey = box.name || `box-${boxIndex}`;
  boxSortKeys[boxKey] = sortKey;
  
  const sortedLinks = [...box.links];
  
  sortedLinks.sort((a, b) => {
    switch (sortKey) {
      case 'title-asc':
        return (a.title || '').localeCompare(b.title || '');
      case 'title-desc':
        return (b.title || '').localeCompare(a.title || '');
      case 'age-newest':
        return (b.createdAt || 0) - (a.createdAt || 0);
      case 'age-oldest':
        return (a.createdAt || 0) - (b.createdAt || 0);
      case 'domain-asc':
        return getDomain(a.url).localeCompare(getDomain(b.url));
      case 'domain-desc':
        return getDomain(b.url).localeCompare(getDomain(a.url));
      case 'url-asc':
        return (a.url || '').localeCompare(b.url || '');
      case 'url-desc':
        return (b.url || '').localeCompare(a.url || '');
      default:
        return 0;
    }
  });
  
  boxes.value[boxIndex].links = sortedLinks;
  boxes.value[boxIndex].updatedAt = Date.now();
  
  // Close the menu after sorting
  openMenuBox.value = null;
}

// Toggle sort direction for a category (first click = asc/newest, second click = desc/oldest)
function toggleSort(boxIndex: number, category: string) {
  const currentKey = getBoxSortKey(boxIndex);
  let newKey: string;
  
  if (category === 'age') {
    // Age uses newest/oldest instead of asc/desc
    if (currentKey === 'age-newest') {
      newKey = 'age-oldest';
    } else {
      newKey = 'age-newest';
    }
  } else {
    // Title, Domain, URL use asc/desc
    if (currentKey === `${category}-asc`) {
      newKey = `${category}-desc`;
    } else {
      newKey = `${category}-asc`;
    }
  }
  
  sortLinksInBox(boxIndex, newKey);
}

// Get stable key for a box
function getBoxKey(box: Box, boxIndex: number): string {
  return box.name || `box-${boxIndex}`;
}

// Initialize on mount
onMounted(async () => {
  await initialize();
});

// Toggle box expansion using box name as key
function toggleBoxExpansion(boxIndex: number) {
  const key = getBoxKey(boxes.value[boxIndex], boxIndex);
  if (collapsedBoxes[key]) {
    delete collapsedBoxes[key];
  } else {
    collapsedBoxes[key] = true;
  }
}

// Check if box should show links (not collapsed) using box name as key
function shouldShowLinks(boxIndex: number): boolean {
  const key = getBoxKey(boxes.value[boxIndex], boxIndex);
  return !collapsedBoxes[key];
}

// Check if box is collapsed using box name as key
function isBoxCollapsed(boxIndex: number): boolean {
  const key = getBoxKey(boxes.value[boxIndex], boxIndex);
  return !!collapsedBoxes[key];
}

// Manual save function - saves to API and localStorage
async function saveAllLinks() {
  isSaving.value = true;
  try {
    await save();
    // Reload from API to ensure frontend shows what's actually saved
    await initialize();
    console.log('Links saved successfully and reloaded from server');
  } catch (error) {
    console.error('Failed to save links:', error);
  } finally {
    isSaving.value = false;
  }
}

// Deprecated function - keeping for compatibility
async function saveBoxesToStorage() {
  // No longer auto-saves - use saveAllLinks() instead
}

// Create new box
function createBox() {
  if (!newBoxName.value.trim()) {
    alert('Please enter a box name');
    return;
  }
  
  createBoxStorage(newBoxName.value);
  newBoxName.value = '';
}

// Start renaming box
function startRenaming(boxIndex: number) {
  renamingBoxIndex.value = boxIndex;
  renameBoxName.value = boxes.value[boxIndex].name;
}

// Confirm rename
function confirmRename(boxIndex: number) {
  if (!renameBoxName.value.trim()) {
    alert('Please enter a box name');
    return;
  }
  
  renameBoxStorage(boxIndex, renameBoxName.value);
  renamingBoxIndex.value = null;
  renameBoxName.value = '';
}

// Cancel rename
function cancelRename() {
  renamingBoxIndex.value = null;
  renameBoxName.value = '';
}

// Delete box
function deleteBox(boxIndex: number) {
  if (confirm(`Delete "${boxes.value[boxIndex].name}" box? This will remove all links in it.`)) {
    deleteBoxStorage(boxIndex);
  }
}

// Toggle add link form
function toggleAddLinkForm(boxIndex: number) {
  if (showAddLinkForm.value === boxIndex) {
    showAddLinkForm.value = null;
    editingBoxIndex.value = null;
    editingLinkIndex.value = null;
  } else {
    // Close any open menus
    openMenuBox.value = null;
    // Close renaming
    renamingBoxIndex.value = null;
    // Show the form
    showAddLinkForm.value = boxIndex;
    editingBoxIndex.value = null;
    editingLinkIndex.value = null;
  }
}

// Toggle menu dropdown
function toggleMenu(boxIndex: number) {
  openMenuBox.value = openMenuBox.value === boxIndex ? null : boxIndex;
}

// Drag and drop handlers
function startDragging(boxIndex: number) {
  draggingBoxIndex.value = boxIndex;
}

function onDragOver(boxIndex: number) {
  dragoverBoxIndex.value = boxIndex;
}

function onDragLeave() {
  dragoverBoxIndex.value = null;
}

function onDrop(targetIndex: number) {
  if (draggingBoxIndex.value !== null && draggingBoxIndex.value !== targetIndex) {
    // Swap boxes using storage composable
    reorderBoxesStorage(draggingBoxIndex.value, targetIndex);
  }
  dragoverBoxIndex.value = null;
}

function endDragging() {
  draggingBoxIndex.value = null;
  dragoverBoxIndex.value = null;
}

// Add link to box
function saveLink(boxIndex: number, link: Link) {
  addLinkStorage(boxIndex, link);
  showAddLinkForm.value = null;
}

// Start editing a link
function startEditLink(boxIndex: number, linkIndex: number) {
  editingBoxIndex.value = boxIndex;
  editingLinkIndex.value = linkIndex;
  showAddLinkForm.value = boxIndex;
}

// Handle link submit (add or edit)
function handleLinkSubmit(boxIndex: number, link: Link) {
  if (editingBoxIndex.value === boxIndex && editingLinkIndex.value !== null) {
    // Update existing link
    boxes.value[boxIndex].links[editingLinkIndex.value] = link;
    boxes.value[boxIndex].updatedAt = Date.now();
  } else {
    // Add new link
    addLinkStorage(boxIndex, link);
  }
  cancelEditLink();
}

// Cancel editing
function cancelEditLink() {
  editingBoxIndex.value = null;
  editingLinkIndex.value = null;
  showAddLinkForm.value = null;
}

// Move link up or down within a box
function moveLink(boxIndex: number, linkIndex: number, direction: number) {
  const newIndex = linkIndex + direction;
  
  // Check bounds
  if (newIndex < 0 || newIndex >= boxes.value[boxIndex].links.length) {
    return;
  }
  
  // Swap links
  const temp = boxes.value[boxIndex].links[linkIndex];
  boxes.value[boxIndex].links[linkIndex] = boxes.value[boxIndex].links[newIndex];
  boxes.value[boxIndex].links[newIndex] = temp;
  
  // Update timestamp
  boxes.value[boxIndex].updatedAt = Date.now();
}

// Delete link from box
function deleteLink(boxIndex: number, linkIndex: number) {
  if (confirm('Delete this link?')) {
    deleteLinkStorage(boxIndex, linkIndex);
  }
}

// Export data as JSON file
function exportData() {
  const json = JSON.stringify(boxes.value, null, 2);
  const blob = new Blob([json], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `links-backup-${new Date().toISOString().slice(0, 10)}.json`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
  console.log('Data exported successfully');
}

// Trigger file input for import
function triggerImport() {
  if (fileInput.value) {
    fileInput.value.click();
  }
}

// Handle file import
async function handleFileImport(event: Event) {
  const target = event.target as HTMLInputElement;
  const file = target.files?.[0];
  
  if (!file) return;

  try {
    const text = await file.text();
    const data = JSON.parse(text);

    // Validate that it's an array of boxes
    if (!Array.isArray(data)) {
      alert('Invalid JSON format. Expected an array of boxes.');
      return;
    }

    // Ask for confirmation
    if (confirm(`Import ${data.length} boxes? This will replace your current data.`)) {
      boxes.value = data;
      console.log('Data imported successfully');
      alert('Data imported successfully! Click "Save All" to persist changes.');
    }
  } catch (error) {
    console.error('Import failed:', error);
    alert(`Import failed: ${error instanceof Error ? error.message : String(error)}`);
  }

  // Reset file input
  if (fileInput.value) {
    fileInput.value.value = '';
  }
}
</script>

<style lang="less" scoped>
.links-manager {
  width: 100%;
  padding: 20px 0;
  
  .container {
    width: 100%;
  }
  
  .empty-state {
    text-align: center;
    padding: 60px 20px;
    color: var(--n-text-color-2);
    
    p {
      font-size: 16px;
    }
  }
  
  .create-box-wrapper {
    position: relative;
    margin-bottom: 30px;
  }

  .create-box-wrapper::before {
    content: '';
    position: absolute;
    top: -1px;
    left: -1px;
    width: 20px;
    height: 20px;
    border-top: 2px solid var(--border-color, #30363d);
    border-left: 2px solid var(--border-color, #30363d);
    pointer-events: none;
    z-index: 11;
  }

  .create-box-wrapper::after {
    content: '';
    position: absolute;
    top: -1px;
    right: -1px;
    width: 20px;
    height: 20px;
    border-top: 2px solid var(--border-color, #30363d);
    border-right: 2px solid var(--border-color, #30363d);
    pointer-events: none;
    z-index: 11;
  }
  
  .create-box-section {
    display: flex;
    gap: 10px;
    padding: 16px;
    background: var(--bg-primary, #0d1117);
    border: none;
    border-radius: 0;
    position: relative;
  }

  .create-box-section::before {
    content: '';
    position: absolute;
    bottom: -1px;
    left: -1px;
    width: 20px;
    height: 20px;
    border-bottom: 2px solid var(--border-color, #30363d);
    border-left: 2px solid var(--border-color, #30363d);
    pointer-events: none;
    z-index: 11;
  }

  .create-box-section::after {
    content: '';
    position: absolute;
    bottom: -1px;
    right: -1px;
    width: 20px;
    height: 20px;
    border-bottom: 2px solid var(--border-color, #30363d);
    border-right: 2px solid var(--border-color, #30363d);
    pointer-events: none;
    z-index: 11;
  }

  .create-box-wrapper:focus-within::before,
  .create-box-wrapper:focus-within::after {
    border-color: var(--border-color-active, #58a6ff);
  }

  .create-box-wrapper:focus-within .create-box-section::before,
  .create-box-wrapper:focus-within .create-box-section::after {
    border-color: var(--border-color-active, #58a6ff);
  }
    
  .box-input {
    flex: 1;
    padding: 10px 16px;
    border: 1px solid var(--border-color, #30363d);
    border-radius: 0;
    background: var(--bg-primary, #0d1117);
    color: var(--text-primary, #c9d1d9);
    font-size: 14px;
    transition: all 0.2s ease;
  }

  .box-input::placeholder {
    color: var(--text-secondary, #8b949e);
  }

  .box-input:hover {
    border-color: var(--border-color-active, #58a6ff);
  }

  .box-input:focus {
    outline: none;
    background: rgba(88, 166, 255, 0.05);
    border-color: var(--border-color-active, #58a6ff);
    box-shadow: 0 0 0 2px rgba(88, 166, 255, 0.1);
  }
    
  .btn-create-box {
    padding: 10px 20px;
    background: transparent;
    color: #c9d1d9;
    border: 1px solid #30363d;
    border-radius: 0;
    font-size: 14px;
    font-weight: 500;
    cursor: pointer;
    transition: all 0.2s;
    white-space: nowrap;
    display: flex;
    align-items: center;
    gap: 8px;
  }

  .btn-create-box:hover {
    background: rgba(48, 54, 61, 0.5);
    border-color: #58a6ff;
    color: #58a6ff;
  }

  .btn-save {
    padding: 10px 20px;
    background: transparent;
    color: #c9d1d9;
    border: 1px solid #30363d;
    border-radius: 0;
    font-size: 14px;
    font-weight: 500;
    cursor: pointer;
    transition: all 0.2s;
    white-space: nowrap;
    display: flex;
    align-items: center;
    gap: 8px;
  }

  .btn-save:hover:not(:disabled) {
    background: rgba(48, 54, 61, 0.5);
    border-color: #58a6ff;
    color: #58a6ff;
  }

  .btn-save:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }

  .btn-export {
    padding: 10px 20px;
    background: transparent;
    color: #c9d1d9;
    border: 1px solid #30363d;
    border-radius: 0;
    font-size: 14px;
    font-weight: 500;
    cursor: pointer;
    transition: all 0.2s;
    white-space: nowrap;
    display: flex;
    align-items: center;
    gap: 8px;
  }

  .btn-export:hover {
    background: rgba(48, 54, 61, 0.5);
    border-color: #58a6ff;
    color: #58a6ff;
  }

  .btn-import {
    padding: 10px 20px;
    background: transparent;
    color: #c9d1d9;
    border: 1px solid #30363d;
    border-radius: 0;
    font-size: 14px;
    font-weight: 500;
    cursor: pointer;
    transition: all 0.2s;
    white-space: nowrap;
    display: flex;
    align-items: center;
    gap: 8px;
  }

  .btn-import:hover {
    background: rgba(48, 54, 61, 0.5);
    border-color: #58a6ff;
    color: #58a6ff;
  }
  
  .boxes-container {
    display: grid;
    grid-template-columns: repeat(3, minmax(350px, 1fr));
    gap: 24px;
    align-items: start;
  }
  
  .box-card {
    position: relative;
    cursor: move;
    transition: all 0.3s ease;
    display: flex;
    flex-direction: column;
    overflow: visible;
  }
  
  .box-card::before {
    content: '';
    position: absolute;
    top: -1px;
    left: -1px;
    width: 20px;
    height: 20px;
    border-top: 2px solid #30363d;
    border-left: 2px solid #30363d;
    pointer-events: none;
    transition: border-color 200ms ease;
    z-index: 11;
  }
  
  .box-card::after {
    content: '';
    position: absolute;
    top: -1px;
    right: -1px;
    width: 20px;
    height: 20px;
    border-top: 2px solid #30363d;
    border-right: 2px solid #30363d;
    pointer-events: none;
    transition: border-color 200ms ease;
    z-index: 11;
  }
  
  .box-card:hover::before,
  .box-card:hover::after {
    border-color: #58a6ff;
  }
  
  .box-card:hover .box-header {
    border-bottom-color: #58a6ff;
  }
  
  .box-card:hover .box-card-content {
    background-color: #21262d;
  }
  
  .box-card.dragging {
    opacity: 0.5;
  }
  
  .box-card.dragover {
    transform: scale(1.02);
  }
  
  .box-card-wrapper {
    flex: 1;
    display: flex;
    flex-direction: column;
    background-color: #161b22;
    position: relative;
    overflow: visible;
  }
  
  .box-card-wrapper::before {
    content: '';
    position: absolute;
    bottom: -1px;
    left: -1px;
    width: 20px;
    height: 20px;
    border-bottom: 2px solid #30363d;
    border-left: 2px solid #30363d;
    pointer-events: none;
    transition: border-color 200ms ease;
    z-index: 11;
  }
  
  .box-card-wrapper::after {
    content: '';
    position: absolute;
    bottom: -1px;
    right: -1px;
    width: 20px;
    height: 20px;
    border-bottom: 2px solid #30363d;
    border-right: 2px solid #30363d;
    pointer-events: none;
    transition: border-color 200ms ease;
    z-index: 11;
  }
  
  .box-card:hover .box-card-wrapper::before,
  .box-card:hover .box-card-wrapper::after {
    border-color: #58a6ff;
  }
  
  .box-header {
    padding: 20px;
    background-color: transparent;
    border-bottom: 1px solid #30363d;
    display: flex;
    flex-direction: column;
    gap: 12px;
    position: relative;
    transition: border-color 200ms ease;
    
    .header-row-1 {
      display: flex;
      justify-content: space-between;
      align-items: center;
      
      .title-with-toggle {
        display: flex;
        align-items: center;
        gap: 8px;
        flex: 1;
        min-width: 0;
        overflow: hidden;
        
        .box-title {
          margin: 0;
          font-size: 14px;
          font-weight: 600;
          color: #c9d1d9;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          cursor: pointer;
          transition: all 0.2s;
        }
        
        .btn-toggle-expand {
          width: 24px;
          height: 24px;
          border: none;
          background: transparent;
          color: #8b949e;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          transition: all 0.2s;
          
          &:hover {
            color: #58a6ff;
          }
        }
      }
      
      .link-count {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        min-width: 40px;
        height: 24px;
        padding: 0 8px;
        background: #58a6ff;
        color: white;
        border-radius: 12px;
        font-size: 12px;
        font-weight: 600;
        white-space: nowrap;
      }
    }
    
    .header-row-2 {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 12px;
      width: 100%;
      
      .btn-expand {
        width: 28px;
        height: 28px;
        border: none;
        background: transparent;
        color: #8b949e;
        border-radius: 4px;
        cursor: pointer;
        font-size: 12px;
        transition: all 0.2s;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-shrink: 0;
        
        &:hover {
          background: rgba(88, 166, 255, 0.1);
          color: #58a6ff;
        }
      }
    }
    
    .header-actions {
      display: flex;
      gap: 6px;
      flex-shrink: 0;
      
      .btn-action {
        width: 28px;
        height: 28px;
        border: none;
        border-radius: 4px;
        cursor: pointer;
        font-size: 14px;
        transition: all 0.2s;
        display: flex;
        align-items: center;
        justify-content: center;
        
        &.btn-rename {
          background: var(--n-color);
          color: var(--n-text-color-1);
          
          &:hover {
            background: var(--n-primary-color);
            color: white;
          }
        }
        
        &.btn-add-link-header {
          background: var(--n-color);
          color: var(--n-primary-color);
          font-size: 18px;
          font-weight: 700;
          padding: 4px 8px;
          width: auto;
          height: auto;
          
          &:hover {
            background: var(--n-primary-color);
            color: white;
          }
        }
        
        &.btn-menu {
          background: var(--n-color);
          color: var(--n-text-color-1);
          font-size: 18px;
          
          &:hover {
            background: var(--n-color-hover);
          }
        }
      }
      
      .menu-container {
        position: relative;
        
        .dropdown-menu {
          position: absolute;
          right: 0;
          top: 100%;
          margin-top: 4px;
          background: #161b22;
          border: 1px solid #30363d;
          border-radius: 0;
          min-width: 160px;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.4);
          z-index: 10;
          overflow: hidden;
          max-height: 400px;
          overflow-y: auto;
          
          .menu-label {
            padding: 6px 12px;
            font-size: 11px;
            font-weight: 600;
            color: #8b949e;
            text-transform: uppercase;
            letter-spacing: 0.5px;
          }
          
          .menu-divider {
            height: 1px;
            background: #30363d;
            margin: 4px 0;
          }
          
          .menu-item {
            width: 100%;
            padding: 8px 12px;
            border: none;
            background: none;
            color: #c9d1d9;
            text-align: left;
            font-size: 13px;
            cursor: pointer;
            transition: all 0.2s;
            display: flex;
            align-items: center;
            justify-content: space-between;
            
            .sort-indicator {
              margin-left: 8px;
              color: #58a6ff;
            }
            
            &:hover {
              background: #21262d;
            }
            
            &.active {
              background: rgba(88, 166, 255, 0.1);
              color: #58a6ff;
            }
            
            &.delete-item {
              color: #f85149;
              
              &:hover {
                background: rgba(248, 81, 73, 0.1);
              }
            }
          }
        }
      }
    }
  }
  
  .add-link-form-section {
    padding: 16px;
    background: var(--n-color-pressed);
    border-bottom: 1px solid var(--n-border-color);
  }
  
  .rename-form-section {
    padding: 12px 16px;
    background: var(--n-color-pressed);
    border-bottom: 1px solid var(--n-border-color);
    display: flex;
    gap: 8px;
    align-items: center;
    
    .rename-input {
      flex: 1;
      padding: 8px 12px;
      border: 2px solid #58a6ff;
      border-radius: 0;
      background: var(--n-color);
      color: var(--n-text-color-1);
      font-size: 14px;
      box-shadow: 0 0 0 1px rgba(88, 166, 255, 0.2);
      transition: all 0.2s;
      
      &:focus {
        outline: none;
        border-color: #58a6ff;
        box-shadow: 0 0 0 2px rgba(88, 166, 255, 0.3);
      }
    }
    
    .rename-actions {
      display: flex;
      gap: 6px;
      
      .btn-confirm {
        padding: 6px 12px;
        background: transparent;
        color: #c9d1d9;
        border: 1px solid #30363d;
        border-radius: 0;
        font-size: 12px;
        font-weight: 500;
        cursor: pointer;
        transition: all 0.2s;
        
        &:hover {
          background: rgba(48, 54, 61, 0.5);
          border-color: #58a6ff;
          color: #58a6ff;
        }
      }
      
      .btn-cancel {
        padding: 6px 12px;
        background: transparent;
        color: #c9d1d9;
        border: 1px solid #30363d;
        border-radius: 0;
        font-size: 12px;
        font-weight: 500;
        cursor: pointer;
        transition: all 0.2s;
        
        &:hover {
          background: rgba(48, 54, 61, 0.5);
          border-color: #58a6ff;
          color: #58a6ff;
        }
      }
    }
  }
  
  .rename-modal {
    padding: 12px 16px;
    background: var(--n-color-pressed);
    border-bottom: 1px solid var(--n-border-color);
    display: flex;
    gap: 8px;
    
    .rename-input {
      flex: 1;
      padding: 6px 10px;
      border: 1px solid var(--n-border-color);
      border-radius: 3px;
      background: var(--n-input-color);
      color: var(--n-text-color-1);
      font-size: 13px;
      
      &:focus {
        outline: none;
        border-color: var(--n-primary-color);
      }
    }
    
    .btn-rename-confirm,
    .btn-rename-cancel {
      padding: 6px 12px;
      border: none;
      border-radius: 3px;
      font-size: 12px;
      font-weight: 500;
      cursor: pointer;
      transition: all 0.2s;
      white-space: nowrap;
    }
    
    .btn-rename-confirm {
      background: var(--n-primary-color);
      color: white;
      
      &:hover {
        opacity: 0.9;
      }
    }
    
    .btn-rename-cancel {
      background: var(--n-color-hover);
      color: var(--n-text-color-1);
      
      &:hover {
        background: var(--n-border-color);
      }
    }
  }
  
  .add-link-section {
    padding: 12px 16px;
    border-bottom: 1px solid var(--n-border-color);
    
    .btn-add-link {
      width: 100%;
      padding: 8px 12px;
      background: var(--n-color-pressed);
      color: var(--n-primary-color);
      border: 1px solid var(--n-border-color);
      border-radius: 4px;
      font-size: 13px;
      font-weight: 500;
      cursor: pointer;
      transition: all 0.2s;
      
      &:hover {
        background: var(--n-primary-color);
        color: white;
      }
    }
  }
  
  :deep(.link-form) {
    margin: 0;
    border: none;
    padding: 12px 16px;
    border-bottom: 1px solid var(--n-border-color);
  }
  
  .box-links {
    display: flex;
    flex-direction: column;
    max-height: 400px;
    overflow-y: auto;
    background-color: #161b22;
    padding: 16px;
    gap: 8px;
    
    .no-links {
      padding: 24px 16px;
      text-align: center;
      color: #8b949e;
      font-size: 13px;
    }
    
    .link-item {
      display: flex;
      align-items: center;
      gap: 10px;
      padding: 12px;
      color: #c9d1d9;
      text-decoration: none;
      border-radius: 6px;
      transition: all 0.2s;
      position: relative;
      background-color: rgba(88, 166, 255, 0.05);
      border: 1px solid transparent;
      
      &:hover {
        background-color: rgba(88, 166, 255, 0.1);
        border-color: #58a6ff;
      }
      
      .link-icon {
        width: 24px;
        height: 24px;
        display: flex;
        align-items: center;
        justify-content: center;
        background: rgba(88, 166, 255, 0.1);
        border-radius: 3px;
        flex-shrink: 0;
        color: #58a6ff;
        
        .icon-placeholder {
          font-size: 12px;
        }
      }
      
      .link-info {
        flex: 1;
        min-width: 0;
        display: flex;
        flex-direction: column;
        gap: 2px;
        
        .link-title {
          font-size: 13px;
          font-weight: 500;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          color: #58a6ff;
        }
        
        .link-description {
          font-size: 11px;
          color: #8b949e;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
      }
      
      .link-actions {
        display: flex;
        gap: 6px;
        flex-shrink: 0;
      }
      
      .action-btn {
        width: 24px;
        height: 24px;
        border: none;
        border-radius: 3px;
        cursor: pointer;
        font-size: 12px;
        transition: all 0.2s;
        display: flex;
        align-items: center;
        justify-content: center;
      }
      
      .move-up-btn,
      .move-down-btn {
        background: var(--n-warning-color);
        color: white;
        
        &:hover {
          opacity: 0.8;
        }
      }
      
      .edit-btn {
        background: var(--n-primary-color);
        color: white;
        
        &:hover {
          opacity: 0.8;
        }
      }
      
      .delete-btn {
        background: var(--n-error-color);
        color: white;
        
        &:hover {
          opacity: 0.8;
        }
      }
    }
  }
}

.slide-fade-enter-active,
.slide-fade-leave-active {
  transition: all 0.3s ease;
}

.slide-fade-enter-from {
  transform: translateY(-10px);
  opacity: 0;
}

.slide-fade-leave-to {
  transform: translateY(-10px);
  opacity: 0;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

@media (max-width: 1024px) {
  .links-manager .boxes-container {
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  }
}

@media (max-width: 768px) {
  .links-manager {
    .controls-section {
      flex-direction: column;
    }
    
    .create-box-section {
      flex-direction: column;
      
      .btn-create-box {
        width: 100%;
      }
    }
    
    .boxes-container {
      grid-template-columns: 1fr;
    }
  }
}
</style>
