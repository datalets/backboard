<template>
  <div class="editor-overlay" @click.self="$emit('close')">
    <div class="editor-container" :class="{ 'markdown-mode': isMarkdown }">
      <div class="editor-header">
        <h3>Edit {{ label }}</h3>
        <button @click="$emit('close')" class="close-btn">✕</button>
      </div>
      <div class="editor-content">
        <textarea
          v-model="localValue"
          class="editor-textarea"
          :placeholder="'Enter ' + label"
          ref="editorTextarea"
        ></textarea>
        <div v-if="isMarkdown" class="editor-preview">
          <Markdown :source="localValue" />
        </div>
      </div>
      <div class="editor-footer">
        <button @click="save" class="save-btn">Save</button>
        <button @click="$emit('close')" class="cancel-btn">Cancel</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue';
import Markdown from 'vue3-markdown-it';

const props = defineProps({
  modelValue: String,
  label: String,
  isMarkdown: Boolean
});

const emit = defineEmits(['update:modelValue', 'save', 'close']);

const localValue = ref(props.modelValue || '');
const editorTextarea = ref(null);

import { onMounted } from 'vue';
onMounted(() => {
  if (editorTextarea.value) {
    editorTextarea.value.focus();
  }
});

watch(() => props.modelValue, (newVal) => {
  localValue.value = newVal || '';
});

const save = () => {
  emit('update:modelValue', localValue.value);
  emit('save', localValue.value);
};
</script>

<style scoped>
.editor-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2000;
}

.editor-container {
  background: white;
  width: 50%;
  max-height: 80%;
  display: flex;
  flex-direction: column;
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  color: black;
}

.editor-container.markdown-mode {
  width: 90%;
  height: 90%;
  max-height: 95%;
}

.editor-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 15px;
}

.editor-header h3 {
  margin: 0;
}

.editor-content {
  display: flex;
  flex: 1;
  gap: 20px;
  overflow: hidden;
  min-height: 0;
}

.editor-textarea {
  flex: 1;
  padding: 10px;
  font-family: monospace;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
  resize: none;
}

.editor-preview {
  flex: 1;
  padding: 10px;
  border: 1px solid #eee;
  border-radius: 4px;
  overflow-y: auto;
  text-align: left;
  background: #fafafa;
}

.editor-footer {
  margin-top: 15px;
  display: flex;
  justify-content: flex-end;
  gap: 10px;
}

.save-btn {
  background: #28a745;
  color: white;
  border: none;
  padding: 8px 16px;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
}

.cancel-btn {
  background: #6c757d;
  color: white;
  border: none;
  padding: 8px 16px;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
}

.close-btn {
  background: none;
  border: none;
  font-size: 20px;
  cursor: pointer;
  color: #999;
}

.close-btn:hover {
  color: #333;
}

@media (max-width: 768px) {
  .editor-container {
    width: 95%;
    height: 95%;
  }
  .editor-content {
    flex-direction: column;
  }
  .editor-preview {
    display: none;
  }
}
</style>
