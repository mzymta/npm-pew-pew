<script setup lang="ts">
  import { NModal } from 'naive-ui';
  import CTile from '../CTile/CTile.vue';

  withDefaults(defineProps<{
    isShown: boolean;
    autoFocus?: boolean;
    closeOnEsc?: boolean;
    to?: string | HTMLElement; // teleport to
    isLoading?: boolean;
    hasCloseBtn?: boolean;
    size?: 'small' | 'medium' | 'large';
    width?: number;
    maskClosable?: boolean;
  }>(), {
    autoFocus: true,
    closeOnEsc: true,
    to: 'body',
    isLoading: false,
    hasCloseBtn: true,
    size: 'medium',
    width: undefined,
    maskClosable: true,
  });
  const emit = defineEmits<{
    (e: 'update:isShown', value: boolean): void;
    (e: 'esc'): void;
    (e: 'maskClick'): void;
    (e: 'close'): void;
    (e: 'afterLeave'): void;
  }>();

  function handleIsShownUpdate(value: boolean) {
    emit('update:isShown', value);

    if (!value) {
      emit('close');
    }
  }
</script>

<template>
  <NModal
    :show="isShown"
    :auto-focus="autoFocus"
    :close-on-esc="closeOnEsc"
    :to="to"
    :mask-closable="maskClosable"
    transform-origin="center"
    class="c-modal"
    @esc="emit('esc')"
    @mask-click="emit('maskClick')"
    @update:show="handleIsShownUpdate"
    @after-leave="emit('afterLeave')"
  >
    <CTile
      :is-loading="isLoading"
      :is-closable="hasCloseBtn"
      class="c-modal__content"
      :class="`c-modal__content--${size}`"
      :style="{ maxWidth: `${width}px` }"
      role="dialog"
      aria-modal="true"
      :aria-busy="isLoading"
      @close="handleIsShownUpdate(false)"
    >
      <template
        v-for="slot of Object.keys($slots)"
        #[slot]
      >
        <slot :name="slot"></slot>
      </template>
    </CTile>
  </NModal>
</template>

<style lang="scss" scoped>
  @use '../../styles/utils' as utils;

  .c-modal {
    &__content {
      width: 100%;
      max-width: 600px;

      &--small {
        max-width: 400px;
      }

      &--large {
        max-width: 800px;
      }
    }
  }

  :global(.c-modal-mask) {
    backdrop-filter: blur(2px);
  }

  :global(.c-modal-scroll-content) {
    padding: utils.unit(6);

    @include utils.mobile {
      padding: utils.unit(2);
    }
  }
</style>
