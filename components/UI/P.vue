<template>
  <p class="font-['Inter']" :class="[$props.color, sizeValue, boldValue, leadingValue]">
    <slot/>
  </p>
</template>

<script lang="ts" setup>

const props = defineProps({
  color:{
    type: String,
    default: "text-neutral-900"
  },
  size: {
    type: String,
    validator: (value: string) => ["sm", "base", "md", "lg", "xl", "2xl", "3xl", "4xl", "5xl"].includes(value),
    default: "base"
  },
  bold: {
    type: String,
    validator: (value: string) => ["normal", "bold", "semibold"].includes(value),
    default: "normal"
  },
  leading: {
    type: String,
    default: "none"
  }
})


const sizeValue = computed(()=>`text-${props.size}`)
const boldValue = computed(()=>`font-${props.bold}`)
const leadingValue = computed(()=> `leading-${props.leading}`)

</script>

<style>

</style>