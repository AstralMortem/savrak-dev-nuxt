<template>
  <div class="w-screen h-full">
    <NavBar/>
    <UIImageWrapper class="overflow-x-clip"/>
    <div class="mx-[100px] flex flex-col gap-5 ">
      <slot />
    </div>
    <NavFooter/>
  </div>
</template>

<script lang="ts" setup>

</script>

<style>
html{
  scroll-behavior: smooth;
}
</style>