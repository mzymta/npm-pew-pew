<script setup lang="ts">
  import { NSlider } from 'naive-ui';
  import { computed } from 'vue';

  // TODO: pass types with $attrs
  // https:// www.naiveui.com/en-US/dark/components/slider#Slider-Props
  type SliderValue = number | number[];
  type SliderFormatTooltip = (value: number) => string | number;

  const props = withDefaults(defineProps<{
    value: SliderValue;
    isMaxValue?: boolean;
    isReversed?: boolean;
    isRange?: boolean;
    max?: number;
    min?: number;
    formatTooltip?: SliderFormatTooltip;
  }>(), {
    isMaxValue: true,
    isReversed: false,
    isRange: false,
    max: 100,
    min: 0,
    formatTooltip: undefined,
  });

  const emit = defineEmits<{
    (e: 'update:value', value: SliderValue): void;
  }>();

  const computedReversed = computed<boolean>(() => props.isReversed || (!props.isRange && !props.isMaxValue));

  function getMinValue(value: number) {
    return props.min + props.max - value;
  }

  const computedValue = computed<SliderValue>(() => {
    if (props.isMaxValue || props.isRange) {
      return props.value;
    }

    return getMinValue(props.value as number);
  });

  function handleUpdateValue(value: SliderValue) {
    if (props.isMaxValue || props.isRange) {
      emit('update:value', value);

      return;
    }

    emit('update:value', getMinValue(value as number));
  }

  const computedFormatTooltip = computed<SliderFormatTooltip | undefined>(() => {
    if (props.isMaxValue || props.isRange) {
      return props.formatTooltip;
    }

    return (value) => props.formatTooltip?.(getMinValue(value)) ?? getMinValue(value);
  });
</script>

<template>
  <NSlider
    ref="input"
    class="c-input"
    v-bind="$attrs"
    :value="computedValue"
    :range="isRange"
    :reverse="computedReversed"
    :max="max"
    :min="min"
    :format-tooltip="computedFormatTooltip"
    @update:value="handleUpdateValue"
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
  </NSlider>
</template>

<style lang="scss" scoped>
  .c-slider {
    cursor: pointer;

    &--disabled {
      cursor: not-allowed;
    }
  }
</style>
