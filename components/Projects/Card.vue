<template>
  <UICard>
    <div class="w-full h-full flex flex-row justify-between items-start">
      <div class="flex flex-col justify-start items-start gap-4">
        <div class="flex flex-row justify-start items-center">
          <UIImage :src="$props.logo" class=" w-16 h-16 gap-3"/>
          <UIP size="5xl">{{ $props.title }}</UIP>
        </div>
        <div class="flex flex-row justify-start items-center gap-2">
          <ProjectsTechStack v-for="item in $props.techStack" :name="item"/>
        </div>
        <UIP>{{ $props.description }}</UIP>
        <div class="flex flex-row justify-start items-center">
          <UIButton trailing-icon="ph:arrow-right" :to="$props.previewLink" v-if="$props.previewLink">Preview</UIButton>
          <UIButton trailing-icon="ph:github-logo" :to="$props.gitLink" v-if="$props.gitLink" only-icon rounded="full"/>
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