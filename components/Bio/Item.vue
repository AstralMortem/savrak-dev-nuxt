<template>
  <div class="flex flex-row justify-start items-center gap-5 h-20 md:h-12">
    <div class="w-16 lg:w-28 h-4 rounded-bl-lg border-l border-b border-primary-400 dark:border-green-400"/>
    <div class="flex flex-col justify-start items-start font-semibold font-['Inter'] text-base ">
      <p class="text-primary-400 dark:text-green-400">{{ $props.question }}</p>
      <p class="text-neutral-900 dark:text-gray-200">{{$props.answer}}</p>
    </div>
  </div>
</template>

<script lang="ts" setup>
defineProps(["question", "answer"])

</script>

<style>

</style>