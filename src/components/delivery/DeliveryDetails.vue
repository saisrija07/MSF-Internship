<template>
  <MultiCard class="p-8 w-[600px] text-xl leading-loose">
    <CloseButton @close="close"/>
    <h2 class="text-3xl font-bold mb-4 ">Delivery Details</h2>
    <p><strong>ID:</strong> {{ props.selectedDelivery.id }}</p>
    <p><strong>Pickup:</strong> {{ props.selectedDelivery.pickup_location }}</p>
    <p><strong>Drop:</strong> {{ props.selectedDelivery.drop_location }}</p>
    <p><strong>Phone:</strong> {{ props.selectedDelivery.phone_number }}</p>
    <p><strong>Request Time: </strong> {{ props.selectedDelivery.requested_at ? formatDate(props.selectedDelivery.requested_at) : 'NA' }}</p>
    <p><strong>Delivered:</strong> {{ props.selectedDelivery.delivered_at ? formatDate(props.selectedDelivery.delivered_at) : 'NA' }}</p>
    <p><strong>Status:</strong> {{ props.selectedDelivery.status ? capitalize(props.selectedDelivery.status) : 'Pending' }}</p>
    <slot></slot>
    </MultiCard>
</template>

<script setup>
import MultiCard from '@/components/UI/MultiCard.vue';
import { defineProps } from 'vue';
import { capitalize } from 'vue';
import CloseButton from '@/components/UI/CloseButton.vue';

const props = defineProps({
  'selectedDelivery': Object,
  'close': Function,
})

const formatDate = (time) => {
  const cleanedTime = time.split('.')[0] + 'Z'; // Append Z to explicitly indicate UTC
  const date = new Date(cleanedTime);

  return date.toLocaleString('en-IN', {
    timeZone: 'Asia/Kolkata',
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    hour12: true,
  });
};

</script>
