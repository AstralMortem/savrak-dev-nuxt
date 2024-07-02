<template>
  <div class="px-24 h-20 py-5 border-b border-primary-100 justify-between items-center inline-flex w-full fixed top-0 left-0 bg-white">
    <UILogo/>
    <div class="flex flex-row justify-start items-center gap-12">
      <NavLink v-for="(link, idx) in links" :key="idx" :to="link.to">{{ link.label }}</NavLink>
    </div>
  </div>
</template>

<script lang="ts" setup>
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