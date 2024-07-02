<template>
  <img :src="imageURL" @error="imageURL='/img/not-found.png'">
</template>

<script lang="ts" setup>
const props = defineProps(["src"])
const imageURL = ref(props.src)
</script>

<style>

</style>