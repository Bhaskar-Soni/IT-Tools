<template>
  <div class="link-form" @click.stop>
    <div class="form-header">
      <h3 v-if="!editingIndex">Add New Link</h3>
      <h3 v-else>Edit Link</h3>
    </div>
    
    <div class="form-group">
      <label>Title *</label>
      <input
        v-model="form.title"
        type="text"
        placeholder="e.g., GitHub"
        class="form-input"
      />
    </div>
    
    <div class="form-group">
      <label>URL *</label>
      <input
        v-model="form.url"
        type="url"
        placeholder="https://example.com"
        class="form-input"
      />
    </div>
    
    <div class="form-group">
      <label>Description (optional)</label>
      <textarea
        v-model="form.description"
        placeholder="What is this link about?"
        class="form-textarea"
        rows="3"
      />
    </div>
    
    <div class="form-actions">
      <button class="btn btn-primary" @click="submitForm">
        {{ editingIndex !== null ? 'Update Link' : 'Add Link' }}
      </button>
      <button v-if="editingIndex !== null" class="btn btn-secondary" @click="cancelEdit">
        Cancel
      </button>
    </div>
    
    <div v-if="error" class="error-message">
      {{ error }}
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';

interface Link {
  title: string;
  url: string;
  description?: string;
  category?: string;
  icon?: any;
}

const props = defineProps<{
  editingIndex?: number | null;
  editingLink?: Link | null;
}>();

const emit = defineEmits<{
  submit: [link: Link];
  cancel: [];
}>();

const form = ref<Link>({
  title: '',
  url: '',
  description: '',
  category: '',
});

const error = ref('');

// Pre-fill form if editing
onMounted(() => {
  if (props.editingIndex !== null && props.editingLink) {
    form.value = { ...props.editingLink };
  }
});

function submitForm() {
  error.value = '';
  
  if (!form.value.title.trim()) {
    error.value = 'Title is required';
    return;
  }
  
  if (!form.value.url.trim()) {
    error.value = 'URL is required';
    return;
  }
  
  // Basic URL validation
  try {
    new URL(form.value.url);
  } catch {
    error.value = 'Please enter a valid URL (e.g., https://example.com)';
    return;
  }
  
  emit('submit', {
    title: form.value.title.trim(),
    url: form.value.url.trim(),
    description: form.value.description?.trim() || undefined,
    category: form.value.category?.trim() || 'General',
  });
  
  // Reset form
  form.value = { title: '', url: '', description: '', category: '' };
}

function cancelEdit() {
  form.value = { title: '', url: '', description: '', category: '' };
  error.value = '';
  emit('cancel');
}
</script>

<style scoped lang="less">
.link-form {
  background: #161b22;
  border: 1px solid #30363d;
  border-radius: 0;
  padding: 20px;
  margin-bottom: 24px;
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 16px;
    height: 16px;
    border-left: 2px solid #30363d;
    border-top: 2px solid #30363d;
  }
  
  &::after {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    width: 16px;
    height: 16px;
    border-right: 2px solid #30363d;
    border-top: 2px solid #30363d;
  }
  
  .form-header {
    margin-bottom: 16px;
    position: relative;
    
    h3 {
      margin: 0;
      font-size: 18px;
      font-weight: 600;
      color: #c9d1d9;
    }
  }
  
  .form-group {
    margin-bottom: 16px;
    display: flex;
    flex-direction: column;
    gap: 6px;
    
    label {
      font-size: 14px;
      font-weight: 500;
      color: #c9d1d9;
    }
  }
  
  .form-input,
  .form-textarea {
    padding: 10px 12px;
    border: 1px solid #30363d;
    border-radius: 4px;
    background: #0d1117;
    color: #c9d1d9;
    font-family: inherit;
    font-size: 14px;
    transition: all 0.2s;
    
    &:focus {
      outline: none;
      border-color: #58a6ff;
      box-shadow: 0 0 0 2px rgba(88, 166, 255, 0.2);
    }
    
    &::placeholder {
      color: #6e7681;
    }
  }
  
  .form-textarea {
    resize: vertical;
    min-height: 80px;
  }
  
  .form-actions {
    display: flex;
    gap: 10px;
    margin-top: 20px;
    
    .btn {
      padding: 10px 20px;
      border: 1px solid #30363d;
      border-radius: 0;
      font-size: 14px;
      font-weight: 500;
      cursor: pointer;
      transition: all 0.2s;
    }
    
    .btn-primary {
      background: transparent;
      color: #c9d1d9;
      border-color: #30363d;
      
      &:hover {
        background: rgba(48, 54, 61, 0.5);
        border-color: #58a6ff;
        color: #58a6ff;
      }
    }
    
    .btn-secondary {
      background: transparent;
      color: #c9d1d9;
      border-color: #30363d;
      
      &:hover {
        background: rgba(48, 54, 61, 0.5);
        border-color: #58a6ff;
        color: #58a6ff;
      }
    }
  }
  
  .error-message {
    margin-top: 12px;
    padding: 8px 12px;
    background: rgba(248, 81, 73, 0.1);
    color: #f85149;
    border-radius: 4px;
    font-size: 13px;
  }
}
</style>
