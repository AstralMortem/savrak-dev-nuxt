<template>
  <div class="rounded-full p-1 ring-2 w-max h-max ring-neutral-800 dark:ring-green-800 overflow-clip">
    <UIImage :src="`/img/library/${$props.name}.png`" class="w-12 h-12 p-1 "/>
  </div>
</template>

<script lang="ts" setup>
defineProps(["name"])
</script>

<style>

</style>