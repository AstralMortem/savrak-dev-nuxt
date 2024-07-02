<template>
  <div class="flex flex-col justify-start items-start gap-5 relative">
    <div class="w-[1px] absolute top-0 left-0 bg-primary-400 z-10" :style="computedHeight"/>
    <BioItem v-for="item in list" :question="item.title" :answer="item.text"/>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps(["list"])
const computedHeight = computed(()=>{
  const length = props.list.length
  const val = (20 + 48) * length - 48  // 20px - gap between items. 48px item height
  return {
    height: val + "px"
  }
})
</script>

<style>

</style>