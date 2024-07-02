<template>
  <img :src="$props.src" >
</template>

<script lang="ts" setup>
const props = defineProps(["src"])
const imageURL = ref(props.src)
</script>

<style>

</style>