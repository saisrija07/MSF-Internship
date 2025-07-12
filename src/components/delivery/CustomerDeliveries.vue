<template>
  <!-- Delivery Cards -->
  <MultiCard class="p-12">
    <h2> My Orders </h2>
    <div v-if="!loading">
      <div v-if="deliveries.length > 0" class="grid gap-8 grid-cols-4 mt-4">
        <SingleCard
          v-for="delivery in deliveries"
          :key="delivery.id"
          class="p-4 grid grid-cols-1 gap-2 cursor-pointer text-xl"
          :class="{
                '!bg-blue-200': delivery.status === 'pending',
                'dark:!bg-blue-700': delivery.status === 'pending',

                '!bg-green-200': delivery.status === 'accepted',
                'dark:!bg-green-700': delivery.status === 'accepted',

                '!bg-yellow-200': delivery.status === 'in-transit',
                'dark:!bg-yellow-700': delivery.status === 'in-transit',

                '!bg-red-200': delivery.status === 'delivered',
                'dark:!bg-red-700': delivery.status === 'delivered'
            }"
          @click="showDelivery(delivery.id)"
        >
          <p><strong>ID:</strong> {{ delivery.id }}</p>
          <p><strong>Pickup:</strong> {{ delivery.pickup_location }}</p>
          <p><strong>Drop:</strong> {{ delivery.drop_location }}</p>
          <p><strong>Status:</strong> {{ delivery.status ? capitalize(delivery.status) : 'Pending' }}</p>
        </SingleCard>
      </div>
      <div v-else class="flex items-center p-6 text-xl font-bold">
        No deliveries currently!
      </div>
      <div class="flex justify-center items-center mt-8">
      <ButtonComp @click="showForm" class="flex items-center gap-2">
        <Plus />
        <span>Create New</span>
      </ButtonComp>
    </div>
    </div>
    <div v-else>
      <div class="grid gap-8 grid-cols-3 mt-4">
          <OrdersLoading/>
          <OrdersLoading/>
          <OrdersLoading/>
      </div>
      <div class="flex justify-center items-center mt-8">
        <ButtonLoading class=" w-[210px] h-12"/>
      </div>
    </div>
  </MultiCard>

  <div v-if="showing" class="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center">
    <div class="relative w-full h-full overflow-auto flex justify-center items-start pt-16">
      <CreateDelivery @cancel="closeForm"/>
    </div>
  </div>

  <!-- Popup -->
  <div v-if="selectedDelivery" class="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center">
    <DeliveryDetails :selectedDelivery="selectedDelivery" :close="close">
      <GiveFeedback :del="selectedDelivery" :close="close" v-if="selectedDelivery.status === 'delivered'"/>
    </DeliveryDetails>
  </div>
</template>

<script setup>
import { ref, onMounted, capitalize } from 'vue';
import apiClient from '@/api/axios';
import MultiCard from '@/components/UI/MultiCard.vue';
import SingleCard from '@/components/UI/SingleCard.vue';
import ButtonComp from '@/components/UI/ButtonComp.vue';
import GiveFeedback from '@/components/feedback/GiveFeedback.vue';
import OrdersLoading from '@/components/UI/Loading/OrdersLoading.vue';
import DeliveryDetails from './DeliveryDetails.vue';
import { Plus } from 'lucide-vue-next';
import CreateDelivery from '@/components/delivery/CreateDelivery.vue';
import ButtonLoading from '../UI/Loading/ButtonLoading.vue';

const deliveries = ref([]);
const selectedDelivery = ref(null);

const loading = ref(false);

const showAll = async () => {
  loading.value = true;
  const response = await apiClient.get('/deliveries/customer');
  console.log(response.data)
  deliveries.value = response.data['deliveries'];
  loading.value = false;
};

const showDelivery = async (id) => {
  // const response = await apiClient.get(`/deliveries/${id}`); // slight delay
  // console.log(response.data)
  const sel = deliveries.value.find((delivery) => delivery.id === id); // fast
  selectedDelivery.value = sel;
};

const close = () => {
  selectedDelivery.value = null;
}

const showing = ref(false);

const showForm = () => {
  showing.value = true;
};

const closeForm = () => {
  showing.value = false;
};

onMounted(() => {
  showAll();
});

</script>
