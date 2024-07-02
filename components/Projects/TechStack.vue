<template>
  <div class="rounded-full p-1 ring-1 ring-neutral-800">
    <UIImage :src="`/img/library/${$props.name}.png`" class="w-12 h-12 rounded-full"/>
  </div>
</template>

<script lang="ts" setup>
defineProps(["name"])
</script>

<style>

</style>