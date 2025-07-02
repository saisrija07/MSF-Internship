<template>
  <!-- Delivery Cards -->
  <MultiCard v-if="deliveries.length > 0" class="p-12">
    <h2> My Orders </h2>
    <div class="grid gap-8 grid-cols-3 mt-4">
      <SingleCard
        v-for="delivery in deliveries"
        :key="delivery.id"
        class="p-4 border rounded-lg shadow grid grid-cols-1 gap-2 cursor-pointer text-xl"
        @click="showDelivery(delivery.id)"
      >
        <p><strong>ID:</strong> {{ delivery.id }}</p>
        <p><strong>Pickup:</strong> {{ delivery.pickup_location }}</p>
        <p><strong>Drop:</strong> {{ delivery.drop_location }}</p>
        <p><strong>Status:</strong> {{ delivery.status ? capitalize(delivery.status) : 'Pending' }}</p>
      </SingleCard>
    </div>
  </MultiCard>

  <SingleCard v-else class="p-6 text-3xl font-bold">
    No deliveries currently!
  </SingleCard>

  <!-- Popup Modal -->
  <div v-if="selectedDelivery" class="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center">
    <MultiCard class="p-8 w-[600px] text-xl leading-loose">
      <h2 class="text-3xl font-bold mb-4 ">Delivery Details</h2>
      <p><strong>ID:</strong> {{ selectedDelivery.id }}</p>
      <p><strong>Pickup:</strong> {{ selectedDelivery.pickup_location }}</p>
      <p><strong>Drop:</strong> {{ selectedDelivery.drop_location }}</p>
      <p><strong>Item:</strong> {{ selectedDelivery.item_description }}</p>
      <p><strong>Phone:</strong> {{ selectedDelivery.phone_number }}</p>
      <p><strong>Request Time: </strong> {{ formatDate(selectedDelivery.requested_at) || 'NA' }}</p>
      <p><strong>Delivered:</strong> {{ selectedDelivery.delivered_at || 'NA' }}</p>
      <p><strong>Status:</strong> {{ selectedDelivery.status ? capitalize(selectedDelivery.status) : 'Pending' }}</p>

      <GiveFeedback :del="selectedDelivery" :useClose="close" v-if="selectedDelivery.status === 'delivered'"/>
      <ButtonComp
        @click="close"
        class="mt-4 px-4 py-2"
        variant="orange"
      >
        Close
      </ButtonComp>

    </MultiCard>
  </div>
</template>

<script setup>
import { ref, onMounted, capitalize } from 'vue';
import apiClient from '@/api/axios';
import MultiCard from '@/components/UI/MultiCard.vue';
import SingleCard from '@/components/UI/SingleCard.vue';
import ButtonComp from '@/components/UI/ButtonComp.vue';
import GiveFeedback from '@/components/feedback/GiveFeedback.vue';

const deliveries = ref([]);
const selectedDelivery = ref(null);
const feedbackOption = ref(false);

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

const showAll = async () => {
  const response = await apiClient.get('/deliveries/customer');
  deliveries.value = response.data['deliveries'];
};

const showDelivery = async (id) => {
  // const response = await apiClient.get(`/deliveries/${id}`); // slight delay
  const sel = deliveries.value.find((delivery) => delivery.id === id); // fast
  selectedDelivery.value = sel;
};

const close = () => {
  selectedDelivery.value = null;
  console.log("CLOSED")
}

const openFeedback = () => {
  feedbackOption.value = true;
}

onMounted(() => {
  showAll();
});
</script>
