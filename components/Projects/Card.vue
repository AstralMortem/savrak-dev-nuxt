<template>
  <UICard>
    <div class="w-full h-full flex flex-col-reverse gap-4 md:flex-row justify-start md:justify-between items-center md:items-start">
      <div class="flex flex-col justify-start items-center lg:items-start gap-4 w-full lg:w-1/2">
        <div class="flex flex-row justify-start items-center gap-4">
          <UIImage :src="$props.logo" class=" w-16 h-16 "/>
          <UIP size="5xl" bold="semibold" color="text-neutral-900 dark:text-green-600">{{ $props.title }}</UIP>
        </div>
        <div class="flex flex-row justify-start items-center gap-2 flex-wrap">
          <ProjectsTechStack v-for="item in $props.techStack" :name="item"/>
        </div>
        <UIP color="text-neutral-900 dark:text-white">{{ $props.description }}</UIP>
        <div class="flex flex-row justify-start items-center gap-2">
          <UIButton trailing-icon="ph:arrow-right" :to="$props.previewLink" v-if="$props.previewLink" color="bg-primary-600 dark:bg-green-600">Preview</UIButton>
          <UIButton trailing-icon="ph:github-logo" :to="$props.gitLink" v-if="$props.gitLink" only-icon rounded="full" color="dark:bg-gray-200 dark:text-neutral-900 bg-neutral-900 text-white"/>
        </div>
      </div>
      <div>
        <UIImage :src="$props.image"/>
      </div>
    </div>
  </UICard>
</template>

<script lang="ts" setup>
defineProps({
  image: String,
  logo: String,
  title: String,
  description: String,
  previewLink: String,
  gitLink: String,
  techStack: Array<String>
})
</script>

<style>

</style>