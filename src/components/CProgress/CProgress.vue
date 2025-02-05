<script setup lang="ts">
  import { NProgress } from 'naive-ui';

  // TODO: pass types with $attrs
  // https://www.naiveui.com/en-US/dark/components/progress#Progress-Slots
</script>

<template>
  <NProgress
    class="c-progress"
    v-bind="$attrs"
  >
    <template
      v-for="slot of Object.keys($slots)"
      #[slot]
    >
      <slot :name="slot"></slot>
    </template>
  </NProgress>
</template>
