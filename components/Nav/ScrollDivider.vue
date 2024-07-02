<template>
  <div class="relative w-1.5 h-[140px] " ref="el">
    <div class="w-1.5  bg-gradient-to-b from-primary-900 via-pink-500 to-emerald-500 rounded-full absolute z-10 " :style="styleHeight"/>
    <div class="w-1.5 h-[140px] bg-transparent rounded-full border border-neutral-900 absolute"/>
  </div>
  
</template>

<script lang="ts" setup>
const height = ref(0)
const el = ref()
const styleHeight = computed(()=>{
  let h = height.value
  if(h > 140){
    h = 140
  }
  return {
    height: h + "px"
  }
})

const options = {
        root: null, // relative to document viewport
        rootMargin: '0px',
        threshold: 0.1 // 10% of the div must be visible
      };

const observer = new IntersectionObserver((entries, observer) => {
  console.log(entries)
}, options)

function onScroll(){
  observer.observe(el.value)
}

onMounted(()=>{
  document.addEventListener("scroll", onScroll)
})

onUnmounted(()=>{
  document.removeEventListener("scroll", onScroll)
})

</script>

<style>

</style>