<template>
  <div class="w-full h-full flex flex-col ">
    <SkillsCard v-for="(skill, idx) in $props.data" :title="skill.title" :tech-list="skill.techList"/>
  </div>
</template>

<script lang="ts" setup>
import { type Skills } from '~/types/type';

defineProps({
  data: Array<Skills>
})
</script>

<style>

</style>