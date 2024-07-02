<template>
  <ClientOnly>
    <div class="flex flex-col justify-start items-start gap-10 md:gap-5 relative">
    <div class="w-[1px] absolute top-0 left-0 bg-primary-400 dark:bg-green-400 z-10" :style="computedHeight"/>
    <BioItem v-for="item in list" :question="item.title" :answer="item.text"/>
  </div>
  </ClientOnly>
  
</template>

<script lang="ts" setup>
const props = defineProps(["list"])
const gap = computed(()=>{
  if(window.innerWidth <= 500){
    return 40
  }
  return 20
})

const height = computed(()=>{
  if(window.innerWidth <= 500){
    return 80
  }
  return 48
})

const computedHeight = computed(()=>{
  const length = props.list.length
  let val = (gap.value + height.value) * length - height.value // (gap + height) * length - height

  return {
    height: val + "px"
  }
})
</script>

<style>

</style>