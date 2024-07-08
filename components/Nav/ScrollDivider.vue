<template>
  <div class="relative w-1.5 h-[230px] hidden md:block " ref="el">
    <div class="w-1.5  bg-gradient-to-b from-primary-900 via-pink-500 to-emerald-500 rounded-full absolute z-10 top-0 left-0 " :style="styleHeight"/>
    <div class="w-1.5 h-[230px] bg-transparent rounded-full border border-neutral-900 absolute"/>
  </div>
  
</template>

<script lang="ts" setup>
const props = defineProps(["num"])
const height = ref(0)
const el = ref()
const styleHeight = computed(()=>{
  return {
    height: height.value + "px"
  }
})

function handleScroll() {
  const scrollTop = window.innerHeight   - window.scrollY * props.num
  console.log(scrollTop)
  const maxHeight = 230 ;
  height.value = Math.min(scrollTop, maxHeight);
}

onMounted(()=>{
  window.addEventListener("scroll", handleScroll)

})

onUnmounted(()=>{
  window.removeEventListener("scroll", handleScroll)
})

</script>

<style>

</style>