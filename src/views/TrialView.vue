<template>
  <button @click="run">RUN</button>
</template>

<script setup>
import { useNotifications } from '@/composables/useNotifications';

const { addNotification } = useNotifications();

const run = () => {
  addNotification("WORKING");
}

</script>
