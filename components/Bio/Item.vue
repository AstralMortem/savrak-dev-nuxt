<template>
  <div class="flex flex-row justify-start items-center gap-5 h-12">
    <div class="w-28 h-4 rounded-bl-lg border-l border-b border-primary-400"/>
    <div class="flex flex-col justify-start items-start font-semibold font-['Inter'] text-base">
      <p class="text-primary-400">{{ $props.question }}</p>
      <p class="text-neutral-900">{{$props.answer}}</p>
    </div>
  </div>
</template>

<script lang="ts" setup>
defineProps(["question", "answer"])

</script>

<style>

</style>