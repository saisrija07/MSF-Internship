<template>
  <!-- <div class="flex items-center p-6"> -->
    <CustomerDeliveries v-if="role === 'customer'"/>
    <AgentDeliveries v-else-if="role === 'agent'"/>
  <!-- </div> -->

</template>

<script setup>
import CustomerDeliveries from '@/components/delivery/CustomerDeliveries.vue';
import AgentDeliveries from '@/components/delivery/AgentDeliveries.vue';

const role = localStorage.getItem('role');
</script>
