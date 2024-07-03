<template>
  <section class="w-full h-screen md:h-screen justify-start items-center gap-10 flex flex-col p-5" :id="$props.id">
    <div class="flex flex-col justify-center items-center gap-3" v-if="$props.title">
      <UIP class="text-5xl" color="text-primary-600 dark:text-green-600" leading="10" bold="bold">{{ $props.title }}</UIP>
      <UIP color="text-neutral-900 dark:text-gray-200">{{ $props.description }}</UIP>
    </div>
    <slot/>
  </section>
</template>

<script lang="ts" setup>
defineProps(["title", "description", "id"])
</script>

<style>

</style>