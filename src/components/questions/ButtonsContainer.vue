<template>
  <div class="mt-4 grid gap-4 grid-cols-3 w-full p-6">
    <ButtonComp variant="green">
      <RouterLink :to="{name: 'question-details'}">Solve</RouterLink>
    </ButtonComp>
    <ButtonComp variant="blue">Solve with AI</ButtonComp>
    <ButtonComp variant="default">Discuss</ButtonComp>
  </div>
</template>

<script setup>
import ButtonComp from '@/components/UI/ButtonComp.vue';
import { RouterLink } from 'vue-router';

</script>
