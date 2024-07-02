<template>
  <div class="h-10 p-3 border border-zink-800 justify-center items-center gap-2 inline-flex text-white cursor-pointer" :class="[roundedVariant,$props.color, typeVariant]">
      <UIIcon v-if="$props.leadingIcon" :name="$props.leadingIcon"/>
      <UIP v-if="!$props.onlyIcon"><slot /></UIP>
      <UIIcon v-if="$props.trailingIcon" :name="$props.trailingIcon"/>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps({
  trailingIcon: String, 
  leadingIcon: String,
  to: String,
  rounded:{
    type: String,
    validation: (value) => ["full", "small", "square"].includes(value)
  },
  color: {
    type: String,
    default: "bg-neutral-800"
  },
  type: {
    type: String,
    validation: (value) => ["solid", "outlined", "soft"].includes(value)
  },
  onlyIcon:{
    type: Boolean,
    default: false
  }
})

const roundedVariant = computed(()=>{
  switch(props.rounded){
    case "full": return "rounded-full";
    case "small": return "rounded-sm";
    case "square": return "rounded-none";
    default: return "rounded-lg";
  }
})

const typeVariant = computed(()=>{
  switch(props.type){
    case "outlined": return "bg-transparent text-primary-500";
  }
})




</script>

<style>

</style>