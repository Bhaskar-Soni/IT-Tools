<template>
  <div class="link-sections">
    <div v-if="groupedLinks.length === 0" class="empty-state">
      <p>No links added yet. Click "Add Link" to get started!</p>
    </div>
    
    <div v-else class="sections-container">
      <div
        v-for="section in groupedLinks"
        :key="section.category"
        class="section"
      >
        <div class="section-header" @click="toggleSection(section.category)">
          <div class="header-content">
            <span class="chevron" :class="{ expanded: expandedSections[section.category] }">
              ▶
            </span>
            <h3 class="section-title">{{ section.category }}</h3>
            <span class="link-count">{{ section.links.length }}</span>
          </div>
        </div>
        
        <transition name="collapse">
          <div v-if="expandedSections[section.category]" class="section-content">
            <a
              v-for="(link, index) in section.links"
              :key="index"
              :href="link.url"
              target="_blank"
              rel="noopener noreferrer"
              class="link-item"
              @mouseenter="hoveredLink = `${section.category}-${index}`"
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
              
              <button
                v-if="showEditButtons && hoveredLink === `${section.category}-${index}`"
                class="delete-btn"
                @click.prevent="$emit('delete', findGlobalIndex(section.category, index))"
                :title="`Delete ${link.title}`"
              >
                ✕
              </button>
            </a>
          </div>
        </transition>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';
import { NIcon } from 'naive-ui';

interface Link {
  title: string;
  url: string;
  description?: string;
  icon?: any;
  category?: string;
}

interface Section {
  category: string;
  links: Link[];
}

const props = withDefaults(
  defineProps<{
    links: Link[];
    showEditButtons?: boolean;
  }>(),
  { showEditButtons: false }
);

defineEmits<{
  delete: [index: number];
}>();

const expandedSections = ref<Record<string, boolean>>({});
const hoveredLink = ref<string | null>(null);

// Group links by category
const groupedLinks = computed(() => {
  const sections: Section[] = [];
  const categoryMap = new Map<string, Link[]>();
  
  // Group links by category
  props.links.forEach(link => {
    const category = link.category || 'General';
    if (!categoryMap.has(category)) {
      categoryMap.set(category, []);
    }
    categoryMap.get(category)!.push(link);
  });
  
  // Convert to array and auto-expand first section
  categoryMap.forEach((links, category) => {
    sections.push({ category, links });
    if (sections.length === 1) {
      expandedSections.value[category] = true;
    } else if (!(category in expandedSections.value)) {
      expandedSections.value[category] = false;
    }
  });
  
  return sections;
});

function toggleSection(category: string) {
  expandedSections.value[category] = !expandedSections.value[category];
}

function findGlobalIndex(category: string, indexInSection: number): number {
  let globalIndex = 0;
  for (const link of props.links) {
    if ((link.category || 'General') === category) {
      if (indexInSection === 0) return globalIndex;
      indexInSection--;
    }
    globalIndex++;
  }
  return globalIndex;
}
</script>

<style scoped lang="less">
.link-sections {
  width: 100%;
  
  .empty-state {
    text-align: center;
    padding: 40px 20px;
    color: var(--n-text-color-2);
    
    p {
      font-size: 16px;
    }
  }
  
  .sections-container {
    display: flex;
    flex-direction: column;
    gap: 12px;
  }
  
  .section {
    border: 1px solid var(--n-border-color);
    border-radius: 8px;
    overflow: hidden;
    background: var(--n-color);
    
    .section-header {
      padding: 14px 16px;
      background: linear-gradient(135deg, var(--n-color) 0%, var(--n-color-pressed) 100%);
      cursor: pointer;
      user-select: none;
      transition: all 0.2s;
      
      &:hover {
        background: linear-gradient(135deg, var(--n-color-hover) 0%, var(--n-color-pressed) 100%);
      }
      
      .header-content {
        display: flex;
        align-items: center;
        gap: 12px;
        
        .chevron {
          display: inline-block;
          width: 16px;
          text-align: center;
          font-size: 12px;
          transition: transform 0.2s;
          color: var(--n-text-color-2);
          
          &.expanded {
            transform: rotate(90deg);
          }
        }
        
        .section-title {
          margin: 0;
          font-size: 16px;
          font-weight: 600;
          flex: 1;
          color: var(--n-text-color-1);
        }
        
        .link-count {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          min-width: 24px;
          height: 24px;
          padding: 0 6px;
          background: var(--n-primary-color);
          color: white;
          border-radius: 12px;
          font-size: 12px;
          font-weight: 600;
        }
      }
    }
    
    .section-content {
      display: flex;
      flex-direction: column;
      border-top: 1px solid var(--n-border-color);
      max-height: 500px;
      overflow-y: auto;
      
      .link-item {
        display: flex;
        align-items: center;
        gap: 12px;
        padding: 12px 16px;
        color: inherit;
        text-decoration: none;
        border-bottom: 1px solid var(--n-border-color);
        transition: all 0.2s;
        position: relative;
        
        &:last-child {
          border-bottom: none;
        }
        
        &:hover {
          background: var(--n-color-pressed);
          padding-right: 40px;
          
          .delete-btn {
            opacity: 1;
          }
        }
        
        .link-icon {
          width: 28px;
          height: 28px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: var(--n-color-hover);
          border-radius: 4px;
          flex-shrink: 0;
          
          .icon-placeholder {
            font-size: 14px;
          }
        }
        
        .link-info {
          flex: 1;
          min-width: 0;
          display: flex;
          flex-direction: column;
          gap: 2px;
          
          .link-title {
            font-size: 14px;
            font-weight: 500;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
            color: var(--n-primary-color);
          }
          
          .link-description {
            font-size: 12px;
            color: var(--n-text-color-2);
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
          }
        }
        
        .delete-btn {
          position: absolute;
          right: 8px;
          top: 50%;
          transform: translateY(-50%);
          width: 24px;
          height: 24px;
          border: none;
          background: var(--n-error-color);
          color: white;
          border-radius: 3px;
          cursor: pointer;
          font-size: 14px;
          opacity: 0;
          transition: opacity 0.2s;
          display: flex;
          align-items: center;
          justify-content: center;
          
          &:hover {
            background: var(--n-error-color-hover);
          }
        }
      }
    }
  }
}

.collapse-enter-active,
.collapse-leave-active {
  transition: all 0.3s ease;
}

.collapse-enter-from {
  opacity: 0;
  max-height: 0;
}

.collapse-leave-to {
  opacity: 0;
  max-height: 0;
}

@media (max-width: 768px) {
  .link-sections .section .section-content {
    max-height: 400px;
    
    .link-item {
      padding: 10px 12px;
    }
  }
}
</style>
