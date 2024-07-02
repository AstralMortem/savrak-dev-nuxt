<template>
  <NuxtLink :to="$props.link">
    <UICard class="cursor-pointer hover:shadow-lg" padding="p-6">
    <div class="flex flex-row justify-start items-center gap-5">
      <div class="p-3 rounded-lg bg-primary-500">
        <UIIcon :name="$props.logo" class="text-3xl text-white font-bold" />
      </div>
      
      <div class="flex flex-col gap-3 justify-start items-start">
        <UIP>{{ $props.title.toUpperCase() }}</UIP>
        <UIP bold="bold" color="text-primary-600">{{ $props.text }}</UIP>
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