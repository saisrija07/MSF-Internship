<template>
  <!-- Delivery Cards -->
   <div class="grid grid-cols-2 gap-12 items-start">
    <MultiCard class="p-12">
      <h2> Available Deliveries </h2>
      <div v-if="!loadingPending">
        <div v-if="pending_deliveries.length > 0" class="grid gap-8 grid-cols-2 mt-4">
          <SingleCard
            v-for="delivery in pending_deliveries"
            :key="delivery.id"
            class="p-4 grid grid-cols-1 gap-2 text-xl"
            @click="showDelivery(delivery.id)"
          >
            <p><strong>ID:</strong> {{ delivery.id }}</p>
            <p><strong>Pickup:</strong> {{ delivery.pickup_location }}</p>
            <p><strong>Drop:</strong> {{ delivery.drop_location }}</p>
            <p><strong>Status:</strong> Pending</p>
          </SingleCard>

        </div>
        <div v-else class="flex items-center p-6 text-xl font-bold">
          No deliveries currently!
        </div>
      </div>
      <div v-else class="grid gap-8 grid-cols-2 mt-4">
        <OrdersLoading/>
        <OrdersLoading/>
      </div>
    </MultiCard>

    <MultiCard class="p-12">
      <h2> My Deliveries </h2>
      <div v-if="!loadingMy">
        <div v-if="my_deliveries.length > 0" class="grid gap-8 grid-cols-2 mt-4">
          <SingleCard
            v-for="delivery in my_deliveries"
            :key="delivery.id"
            class="p-4 grid grid-cols-1 gap-2 cursor-pointer text-xl"
            @click="showDelivery(delivery.id)"
          >
            <p><strong>ID:</strong> {{ delivery.id }}</p>
            <p><strong>Pickup:</strong> {{ delivery.pickup_location }}</p>
            <p><strong>Drop:</strong> {{ delivery.drop_location }}</p>
            <p><strong>Status:</strong> {{ capitalize(delivery.status) }}</p>
          </SingleCard>
        </div>
        <div v-else class="flex items-center p-6 text-xl font-bold">
          No deliveries currently!
        </div>
      </div>
      <div v-else class="grid gap-8 grid-cols-2 mt-4">
        <OrdersLoading/>
        <OrdersLoading/>
      </div>
    </MultiCard>
   </div>

  <!-- Popup -->
  <div v-if="selectedDelivery" class="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center">
    <DeliveryDetails :selectedDelivery="selectedDelivery" :close="close">
      <AgentActions
      :selectedDelivery="selectedDelivery"
      :showMy="showMy"
      :showPending="showPending"
      :close="close"/>
      <GiveFeedback :del="selectedDelivery" :close="close" v-if="selectedDelivery.status === 'delivered'"/>
    </DeliveryDetails>

  </div>
</template>


<script setup>
import { ref, onMounted, capitalize } from 'vue';
import apiClient from '@/api/axios';
import MultiCard from '@/components/UI/MultiCard.vue';
import SingleCard from '@/components/UI/SingleCard.vue';
import OrdersLoading from '@/components/UI/Loading/OrdersLoading.vue';
import DeliveryDetails from './DeliveryDetails.vue';
import AgentActions from '@/components/delivery/AgentActions.vue';
import GiveFeedback from '@/components/feedback/GiveFeedback.vue';

const loadingPending = ref(false);
const loadingMy = ref(false);

const pending_deliveries = ref([]);
const my_deliveries = ref([]);
const selectedDelivery = ref(null);

const showPending = async () => {
  loadingPending.value = true;
  const response = await apiClient.get('/deliveries/pending');
  pending_deliveries.value = response.data['Pending deliveries'];
  loadingPending.value = false;
};

const showMy = async () => {
  loadingMy.value = true;
  const response = await apiClient.get('/deliveries/my');
  my_deliveries.value = response.data['my deliveries'];
  loadingMy.value = false;
};

const showDelivery = async (id) => {
  // const response = await apiClient.get(`/deliveries/${id}`); // slight delay
  const sel = [...pending_deliveries.value, ...my_deliveries.value] // check in both
  .find((delivery) => delivery.id === id); // fast
  selectedDelivery.value = sel;
};

const close = () => {
  selectedDelivery.value = null;
}

onMounted(() => {
  showPending();
  showMy();
});
</script>
