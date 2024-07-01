<template>
  <div class="h-10 p-3 rounded-lg border border-zink-800 justify-center items-center gap-2 inline-flex text-white cursor-pointer" :class="[roundedVariant,colorVariant, typeVariant]">
      <UIIcon v-if="$props.leadingIcon" :name="$props.leadingIcon"/>
      <div class="text-base font-semibold font-['Inter'] leading-none" v-if="!$props.onlyIcon">
        <slot />
      </div>
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
    validation: () => ["full", "small", "square"]
  },
  color: {
    type: String,
    validation: () => ["primary", "gray"]
  },
  type: {
    type: String,
    validation: () => ["solid", "outlined", "soft"]
  },
  onlyIcon:{
    type: Boolean,
    default: false
  }
})

const roundedVariant = computed(()=>{
  switch(props.rounded){
    case "full": return "rounded-lg";
    case "small": return "rounded-sm";
    case "square": return "rounded-none";
    default: return "rounded-lg";
  }
})

const colorVariant = computed(()=>{
  switch(props.color){
    case "primary": return "bg-primary-500 hover:bg-primary-600";
    case "gray": return "bg-slate-500"
    default: return "bg-primary-500 hover:bg-primary-600"
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