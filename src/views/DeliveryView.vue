<template>
  <div>
    <div class="flex items-center justify-center mt-6">
      <CustomerDeliveries v-if="role === 'customer'"/>
      <AgentDeliveries v-else-if="role === 'agent'"/>
    </div>
  </div>
</template>

<script setup>
import CustomerDeliveries from '@/components/delivery/CustomerDeliveries.vue';
import AgentDeliveries from '@/components/delivery/AgentDeliveries.vue';

const role = localStorage.getItem('role');
</script>

