<template>
  <NuxtLink :to="$props.link">
    <UICard class="cursor-pointer hover:shadow-lg shadow-primary" padding="p-6">
    <div class="flex flex-row justify-start items-center gap-5">
      <div class="p-3 rounded-lg bg-primary-500 dark:bg-green-500">
        <UIIcon :name="$props.logo" class="text-3xl text-white font-bold" />
      </div>
      
      <div class="flex flex-col gap-3 justify-start items-start">
        <UIP color="dark:text-gray-200 text-neutral-900">{{ $props.title.toUpperCase() }}</UIP>
        <UIP bold="bold" color="text-primary-600 dark:text-green-600">{{ $props.text }}</UIP>
      </div>
    </div>
  </UICard>
  </NuxtLink>
  
</template>

<script lang="ts" setup>
defineProps(["logo", "title", "text", "link"])
</script>

<style>

</style>