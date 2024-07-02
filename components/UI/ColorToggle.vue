<template>
  <div class="w-16 h-10 flex items-center cursor-pointer rounded-full p-1 duration-300 ease-in-out" :class="toggleActive ? 'bg-green-400': 'bg-yellow-300'" @click="toggleActive = !toggleActive">
      <div class="w-8 h-8 text-xl rounded-full shadow-md transform duration-300 ease-in-out flex justify-center items-center" 
        :class="toggleActive?'translate-x-6 bg-neutral-800': 'bg-white'">
        <UIIcon name="ph:moon-fill" v-if="toggleActive" class="text-green-500 font-bold" />
        <UIIcon name="ph:sun-fill" v-else class="text-yellow-500 font-bold"/>
      </div>
    </div>
</template>

<script lang="ts" setup>
const colorMode = useColorMode()
const toggleActive = ref(false)

watch(toggleActive, () => {
  if(toggleActive.value){
    colorMode.preference = "dark"
  }else{
    colorMode.preference = "light"
  }
})

onMounted(()=>{
  toggleActive.value = colorMode.value == "dark"
})

</script>

<style>

.dark-mode body {
  @apply bg-neutral-800
}

</style>