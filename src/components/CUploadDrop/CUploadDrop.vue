<script setup lang="ts">
  import { ref } from 'vue';
  import { type FileUploadItem, FileUploadStatus } from '../../types/upload';
  import CIcon from '../CIcon/CIcon.vue';
  import { GeneralHelper } from '../../helpers';

  const props = withDefaults(
    defineProps<{
      isDisabled?: boolean;
      isMultiple?: boolean;
      hasError?: boolean;
      accept?: string;
    }>(),
    {
      isDisabled: false,
      isMultiple: true,
      hasError: false,
      accept: undefined,
    },
  );

  const emit = defineEmits<{
    (e: 'input', fileUploadItems: FileUploadItem[]): void;
  }>();

  const fileInput = ref<HTMLInputElement | null>(null);

  const isDragover = ref(false);

  function setDragover(value: boolean) {
    if (props.isDisabled) {
      return;
    }

    isDragover.value = value;
  }

  function resetFileInput() {
    if (!fileInput.value) {
      return;
    }

    fileInput.value.value = '';
  }

  function handleFilesDrop(fileList: FileList | null) {
    if (!fileList) {
      return;
    }

    const fileUploadItems: FileUploadItem[] = Array.from(fileList).map((file) => ({
      id: GeneralHelper.uniqueId(),
      file,
      name: file.name,
      size: file.size,
      uploadProgress: 0,
      status: FileUploadStatus.DEFAULT,
      meta: {},
    }));

    emit('input', fileUploadItems);
    resetFileInput();
  }
</script>

<template>
  <label
    tabindex="0"
    class="c-upload-drop"
    :class="{
      'c-upload-drop--dragover': isDragover,
      'c-upload-drop--disabled': isDisabled,
      'c-upload-drop--error': hasError,
    }"
    @dragover="setDragover(true)"
    @dragleave="setDragover(false)"
    @drop="setDragover(false)"
    @keydown.enter="fileInput?.click()"
  >
    <input
      ref="fileInput"
      type="file"
      :multiple="isMultiple"
      class="c-upload-drop__input"
      :accept="accept"
      :disabled="isDisabled"
      @change="event => handleFilesDrop((event.target as HTMLInputElement).files)"
    >

    <span class="c-upload-drop__area-content">
      <slot>
        <div class="drop-content">
          <CIcon
            class="drop-content__icon"
            :name="isDragover ? 'contract' : 'cloud-upload'"
          />

          <slot name="text-content">
            <p class="drop-content__text">
              <slot
                v-if="!isDragover"
                name="text"
              >
                Drag and drop your file(s) here.
              </slot>
              <slot
                v-else
                name="drop-text"
              >
                Drop your file(s) here.
              </slot>
            </p>
            <p
              v-if="$slots.meta"
              class="drop-content__meta"
            >
              <slot name="meta"></slot>
            </p>
          </slot>
        </div>
      </slot>
    </span>
  </label>
</template>

<style lang="scss" scoped>
  @use '../../styles/utils' as utils;

  .c-upload-drop {
    display: block;
    width: 100%;
    border: 1px dashed var(--card-border-color);
    border-radius: utils.$border-radius;
    background-color: var(--upload-dragger-color);
    position: relative;
    cursor: pointer;
    transition: background-color utils.$transition-duration,
      border-color utils.$transition-duration;

    &--disabled {
      background-color: transparent;
      cursor: default;
      opacity: 0.5;
    }

    &:not(.c-upload-drop--disabled) {
      &:hover {
        background-color: var(--upload-hover-color);
        border-color: var(--success-color);

        .drop-content__icon {
          color: var(--success-color);
        }
      }

      &:active {
        background-color: var(--upload-active-color);
        border-color: var(--success-color);

        .drop-content__icon {
          color: var(--success-color);
        }
      }

      &.c-upload-drop--dragover {
        background-color: var(--upload-active-color);
        border-color: var(--success-color);

        .drop-content__icon {
          color: var(--success-color);
        }
      }

      &.c-upload-drop--error {
        border-color: var(--error-color);

        .drop-content__icon {
          color: var(--error-color);
        }
      }
    }

    &__input {
      @include utils.absolute-fit;
      opacity: 0;
      width: 100%;
      cursor: pointer;

      &:disabled {
        cursor: default;
      }
    }

    &__area-content {
      display: block;
    }
  }

  .drop-content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    min-height: 148px;
    padding: utils.unit(8);
    gap: utils.unit(2);

    &__icon {
      color: var(--text-color-3);
      transition: color utils.$transition-duration;
      width: 40px;
      height: 40px;
    }

    &__meta {
      @include utils.apply-styles(utils.$text-small);
      color: var(--text-color-3);
    }
  }
</style>
