<template>
  <MultiCard class="flex flex-col gap-4 h-screen p-6 overflow-y-auto">
    <h1>
      What's New
    </h1>
    <AgentStats v-if="role === 'agent'"/>
    <CustomerStats v-else/>

  </MultiCard>

</template>

<script setup>
import MultiCard from '@/components/UI/MultiCard.vue';
import StatsCard from '@/components/stats/StatsCard.vue';
import AgentStats from '../stats/AgentStats.vue';
import CustomerStats from '@/components/stats/CustomerStats.vue';

const role = localStorage.getItem('role');



</script>
