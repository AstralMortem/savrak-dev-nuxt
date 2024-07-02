<template>
  <UICard>
    <div class="flex flex-col gap-4 justify-start items-start">
      <UIP bold="semibold" size="3xl" color="text-neutral-400 dark:text-neutral-200">{{ $props.title?.toUpperCase() }}</UIP>
      <div class="flex flex-row justify-start items-center gap-2">
        <SkillsTech v-for="tech in $props.techList" :name="tech"/>
      </div>
    </div>
  </UICard>
</template>

<script lang="ts" setup>
defineProps({
  title: String,
  techList: Array<String>
})
</script>

<style>

</style>