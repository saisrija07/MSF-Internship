<template>
  <ButtonComp class=" animate-pulse">
    <div class=" flex items-center justify-center">
      <Loader class=" animate-spin"/>
    </div>

  </ButtonComp>
</template>


<script setup lang="ts">
import ButtonComp from '@/components/UI/ButtonComp.vue';
import { Loader } from 'lucide-vue-next';


</script>
