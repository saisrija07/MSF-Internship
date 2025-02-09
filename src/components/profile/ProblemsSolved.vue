<template>
  <MultiCard class="flex w-full h-full items-center gap-2 p-4">
            <div class="w-3/4 h-full p-2">
              <SingleCard class="flex items-center justify-center h-full align-middle text-3xl">
                <CirclePercent class="h-2/4 w-2/4"/>
              </SingleCard>
            </div>
            <EasyMediumHard/>
          </MultiCard>
</template>

<script setup>
import MultiCard from '../UI/MultiCard.vue';
import SingleCard from '../UI/SingleCard.vue';
import EasyMediumHard from './EasyMediumHard.vue';
import { CirclePercent } from 'lucide-vue-next';
</script>
