<template>
  <NuxtLink class="text-neutral-900 dark:text-gray-200 hover:text-primary-600 cursor-pointer text-2xl font-semibold font-['Inter'] leading-7" :to="$props.to">
    <slot/>
  </NuxtLink>
</template>

<script lang="ts" setup>
defineProps(["to"])
</script>

<style>

</style>