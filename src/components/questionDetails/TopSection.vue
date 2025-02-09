<template>
  <div class="p-4 flex justify-between items-center bg-gray-200">
              <select class="p-2 border rounded-md">
                <option value="python">Python</option>
              </select>
              <div class="flex gap-4">
                <ButtonComp variant="green">Run</ButtonComp>
                <ButtonComp variant="blue">Submit</ButtonComp>
              </div>
            </div>
</template>

<script setup>
import ButtonComp from '@/components/UI/ButtonComp.vue';
</script>
