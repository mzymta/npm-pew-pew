<script setup lang="ts">
  import { computed } from 'vue';
  import CSlider from '../CSlider/CSlider.vue';

  const props = withDefaults(
    defineProps<{
      value: number;
      isMaxValue?: boolean;
      isReversed?: boolean;
      max?: number;
      min?: number;
      middle?: number;
    }>(),
    {
      isMaxValue: true,
      isReversed: false,
      isRange: false,
      max: 100,
      min: 0,
      middle: undefined,
    },
  );

  const emit = defineEmits<{
    (e: 'update:value', value: number): void;
  }>();

  const length = computed(() => props.max - props.min);
  const gradualMiddle = computed(() => {
    if (props.middle !== undefined) {
      return props.middle;
    }

    return Math.ceil(length.value * 0.5);
  });
  const gradualStartLength = computed(() => gradualMiddle.value - props.min);
  const gradualEndLength = computed(
    () => length.value - gradualStartLength.value,
  );
  const linearHalfLength = computed(() => length.value / 2);
  const linearMiddle = computed(() => props.min + linearHalfLength.value);

  const linearValue = computed<number>(() => convertToLinear(props.value));

  function handleLinearValueUpdate(value: number | number[]) {
    if (Array.isArray(value)) {
      return;
    }

    emit('update:value', convertToExponential(value));
  }

  function convertToLinear(value: number) {
    if (value <= gradualMiddle.value) {
      return (
        props.min +
        Math.ceil(
          linearHalfLength.value *
            ((value - props.min) / gradualStartLength.value),
        )
      );
    }

    return (
      linearMiddle.value +
      Math.ceil(
        linearHalfLength.value *
          ((value - gradualMiddle.value) / gradualEndLength.value),
      )
    );
  }

  function convertToExponential(value: number) {
    if (value <= linearMiddle.value) {
      return (
        props.min +
        Math.ceil(
          gradualStartLength.value *
            ((value - props.min) / linearHalfLength.value),
        )
      );
    }

    return (
      gradualMiddle.value +
      Math.ceil(
        gradualEndLength.value *
          ((value - linearMiddle.value) / linearHalfLength.value),
      )
    );
  }
</script>

<template>
  <CSlider
    ref="input"
    class="c-slider-gradual"
    :value="linearValue"
    :is-reversed="isReversed"
    :is-max-value="isMaxValue"
    :max="max"
    :min="min"
    :format-tooltip="() => value"
    @update:value="handleLinearValueUpdate"
  >
    <template
      v-for="(slot, index) of Object.keys($slots)"
      :key="index"
      #[slot]="scope"
    >
      <slot
        v-bind="scope"
        :name="slot"
      ></slot>
    </template>
  </CSlider>
</template>

<style lang="scss" scoped>
  @use '../../styles/utils' as utils;

  .c-slider-gradual {
    &:not(.c-slider--active) {
      ::v-deep(.c-slider-handle-wrapper) {
        transition:
          right utils.$transition-duration,
          left utils.$transition-duration;
      }

      ::v-deep(.c-slider-rail__fill) {
        transition: width utils.$transition-duration;
      }
    }
  }
</style>
