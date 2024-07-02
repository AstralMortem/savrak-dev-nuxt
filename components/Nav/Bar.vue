<template>
  <div class="px-4 lg:px-24 h-20 py-5 border-b border-primary-100 dark:border-neutral-600 justify-between items-center inline-flex w-full fixed top-0 left-0 bg-white dark:bg-neutral-800 z-50">
    <UILogo/>
    <UIIcon :name="showMenu?'ph:x':'ph:list'" @click="showMenu = !showMenu" only-icon class="lg:hidden text-black dark:text-white text-3xl "/>
    <div class="flex flex-col lg:flex-row justify-start items-center gap-12" :class="showMenu?'fixed top-20 left-0 pt-[25%] bg-white dark:bg-neutral-900 w-full h-full':'lg:flex hidden'">
      <NavLink v-for="(link, idx) in links" :key="idx" :to="link.to" @click="showMenu = false">{{ link.label }}</NavLink>
      <UIColorToggle/>
    </div>
  </div>
</template>

<script lang="ts" setup>
const showMenu = ref(false)

const links = [{
  label: "Home",
  to: "/"
},{
  label: "Biography",
  to: "/#bio"
},{
  label: "Projects",
  to: "/#projects"
},{
  label: "Skills",
  to: "/#skills"
},{
  label: "Contacts",
  to: "/#contacts"
}]
</script>

<style>

</style>