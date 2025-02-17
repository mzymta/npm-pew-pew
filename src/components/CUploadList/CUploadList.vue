<script setup lang="ts" generic="T extends FileUploadItem">
  import { type FileUploadItem } from '../../types';
  import CUploadItem from '../CUploadItem/CUploadItem.vue';

  const props = withDefaults(
    defineProps<{
      items: T[];
      hasRetry?: boolean;
      hasDelete?: boolean;
      hasCancel?: boolean;
    }>(),
    {
      hasRetry: true,
      hasDelete: true,
      hasCancel: true,
    },
  );

  const emit = defineEmits<{
    (e: 'delete', item: T): void;
    (e: 'cancel', item: T): void;
    (e: 'retry', item: T): void;
  }>();
</script>

<template>
  <div class="c-upload-list">
    <CUploadItem
      v-for="item in props.items"
      :key="item.id"
      class="c-upload-list__item"
      :item="item"
      :has-retry="hasRetry"
      :has-delete="hasDelete"
      :has-cancel="hasCancel"
      @cancel="() => emit('cancel', item)"
      @delete="() => emit('delete', item)"
      @retry="() => emit('retry', item)"
    >
      <template #pending-text>
        <slot
          name="pending-text"
          v-bind="{ item }"
        ></slot>
      </template>
      <template #error-text>
        <slot
          name="error-text"
          v-bind="{ item }"
        ></slot>
      </template>
      <template #success-text>
        <slot
          name="success-text"
          v-bind="{ item }"
        ></slot>
      </template>
    </CUploadItem>
  </div>
</template>

<style lang="scss" scoped>
  @use '../../styles/utils' as utils;

  .c-upload-list {
    display: flex;
    flex-direction: column;
    gap: utils.unit(2);
  }
</style>
