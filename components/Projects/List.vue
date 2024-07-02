<template>
  <div class="w-full h-full flex flex-col gap-5">
    <ProjectsCard v-for="(project, idx) in data" :key="idx" :image="project.image" :description="project.description" :git-link="project.gitLink" :logo="project.logo"
    :preview-link="project.previewLink" :tech-stack="project.techStack" :title="project.title"/>
  </div>
</template>

<script lang="ts" setup>
import type {Project} from '~/types/type'
defineProps({
  data: Array<Project>
})
</script>

<style>

</style>