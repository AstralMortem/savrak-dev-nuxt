<template>
  <Icon :icon="$props.name"/>
</template>

<script lang="ts" setup>
import { Icon } from '@iconify/vue';
import type { IconifyIcon } from '@iconify/vue';

defineProps({
  name:{
    required: true,
    type: [String]
  }
  
})
</script>

<style>

</style>