<template>
  <div class="flex flex-col justify-center items-center gap-2">
    <UIImage :src="`/img/library/${$props.name}.png`" class="w-16 h-16 rounded-lg"/>
    <UIP bold="semibold" color="text-neutral-700 dark:text-green-200">{{ $props.name?.toUpperCase() }}</UIP>
  </div>
</template>

<script lang="ts" setup>
defineProps({
  name: String
})
</script>

<style>

</style>