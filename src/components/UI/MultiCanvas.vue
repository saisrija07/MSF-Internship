<template>
  <h2 class="mt-4">
    <slot v-if="$slots.heading" name="heading"></slot>
  </h2>
  <h3>
    <slot v-if="$slots.subheading" name="subheading"></slot>
  </h3>
  <div class="bg-gray-100 p-5 rounded-lg text-md">
    <slot v-if="$slots.content" name="content"></slot>
  </div>
</template>

<script setup>
</script>
