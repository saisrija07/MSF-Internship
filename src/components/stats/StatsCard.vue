<template>
  <SingleCard class="grid grid-cols-1 place-items-center p-6 mt-6 cursor-default">
    <div v-if="$slots.heading" class="w-full border-b border-b-black p-2 pt-0">
      <h2 class="flex items-end justify-center">
        <slot name="heading"></slot>
        <div v-if="$slots.symbol" class="ml-2 text-2xl">
          <slot name="symbol"></slot>
        </div>
      </h2>
      <div v-if="$slots.miniheading" class="flex justify-center mt-1 text-lg">
        <slot name="miniheading"></slot>
      </div>
    </div>

    <div v-if="$slots.subheading" class="flex items-center justify-center w-full border-b border-b-black p-2 ">
      <h3 class=" font-semibold"><slot name="subheading"></slot></h3>
    </div>

    <div v-if="$slots.description" class="w-full border-b border-b-black p-2 flex justify-center items-center text-base font-normal text-center" >
      <slot name="description"></slot>
    </div>


  </SingleCard>
</template>

<script setup>
import SingleCard from '@/components/UI/SingleCard.vue';

const props = defineProps({
  heading: String,
  subheading: String,
  description: String
})


</script>
