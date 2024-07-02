<template>
  <div class=" bg-white rounded-2xl border border-zinc-300 flex-col justify-start items-start gap-4 inline-flex" :class="[$props.padding]">
    <slot/>
  </div>
</template>

<script lang="ts" setup>
defineProps({
  padding: {
    type: String,
    default: 'p-12'
  }
})
</script>

<style>

</style>