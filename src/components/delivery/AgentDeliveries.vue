<template>
  <!-- Delivery Cards -->
   <div class="grid grid-cols-2 gap-12">
    <MultiCard v-if="pending_deliveries.length > 0" class="p-12">
      <h2> Pending Deliveries </h2>
      <div class="grid gap-8 grid-cols-2 mt-4">
        <SingleCard
          v-for="delivery in pending_deliveries"
          :key="delivery.id"
          class="p-4 border rounded-lg shadow grid grid-cols-1 gap-2 cursor-pointer text-xl"
          @click="showDelivery(delivery.id)"
        >
          <p><strong>ID:</strong> {{ delivery.id }}</p>
          <p><strong>Pickup:</strong> {{ delivery.pickup_location }}</p>
          <p><strong>Drop:</strong> {{ delivery.drop_location }}</p>
          <p><strong>Status:</strong> Pending</p>
        </SingleCard>
      </div>
    </MultiCard>

    <MultiCard v-if="my_deliveries.length > 0" class="p-12">
      <h2> My Deliveries </h2>
      <div class="grid gap-8 grid-cols-2 mt-4">
        <SingleCard
          v-for="delivery in my_deliveries"
          :key="delivery.id"
          class="p-4 border rounded-lg shadow grid grid-cols-1 gap-2 cursor-pointer text-xl"
          @click="showDelivery(delivery.id)"
        >
          <p><strong>ID:</strong> {{ delivery.id }}</p>
          <p><strong>Pickup:</strong> {{ delivery.pickup_location }}</p>
          <p><strong>Drop:</strong> {{ delivery.drop_location }}</p>
          <p><strong>Status:</strong> {{ capitalize(delivery.status) }}</p>
        </SingleCard>
      </div>
    </MultiCard>

  <SingleCard v-else class="p-6 text-3xl font-bold">
    No deliveries currently!
  </SingleCard>

   </div>

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

      <div class="grid grid-cols-2 gap-6">

        <ButtonComp
        @click="close"
        class="mt-4 px-4 py-2 rounded"
        variant="orange"
        >
          Close
        </ButtonComp>

        <ButtonComp
        v-if="!selectedDelivery.status"
          @click="acceptDelivery(selectedDelivery.id)"
          class="mt-4 px-4 py-2 rounded"
          variant="green"
        >
          Accept
        </ButtonComp>

        <ButtonComp
        v-else-if="selectedDelivery.status === 'accepted'"
          @click="updateStatus(selectedDelivery.id, 'in-transit')"
          class="mt-4 px-4 py-2 rounded"
          variant="green"
        >
          Start Delivery
        </ButtonComp>

        <ButtonComp
        v-else-if="selectedDelivery.status === 'in-transit'"
          @click="updateStatus(selectedDelivery.id, 'delivered')"
          class="mt-4 px-4 py-2 rounded"
          variant="green"
        >
          Finish Delivery
        </ButtonComp>

      </div>

    </MultiCard>
  </div>
</template>

<script setup>
import { ref, onMounted, capitalize } from 'vue';
import apiClient from '@/api/axios';
import MultiCard from '@/components/UI/MultiCard.vue';
import SingleCard from '@/components/UI/SingleCard.vue';
import ButtonComp from '@/components/UI/ButtonComp.vue';

const pending_deliveries = ref([]);
const my_deliveries = ref([]);
const selectedDelivery = ref(null);

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

const showPending = async () => {
  const response = await apiClient.get('/deliveries/pending');
  pending_deliveries.value = response.data['Pending deliveries'];
};

const showMy = async () => {
  const response = await apiClient.get('/deliveries/my');
  console.log(response.data)
  my_deliveries.value = response.data['my deliveries'];
};

const showDelivery = async (id) => {
  // const response = await apiClient.get(`/deliveries/${id}`); // slight delay
  const sel = [...pending_deliveries.value, ...my_deliveries.value] // check in both
  .find((delivery) => delivery.id === id);
 // fast
  selectedDelivery.value = sel;
};

const acceptDelivery = async (delivery_id) => {
  try{
    await apiClient.post(`/deliveries/${delivery_id}/accept`);
    alert("Delivery Accepted Successfully");
    close();
  }
  catch(error){
    console.log(error);
  }

}

const updateStatus = async (delivery_id, newStatus) => {
  const data = {
    status: newStatus
  }

  try{
    await apiClient.patch(`deliveries/${delivery_id}/status`, data);
    alert('Status Updated Successfully');
    close();
  }
  catch (error){
    console.log(error);
  }
}

const close = () => {
  selectedDelivery.value = null;
}

onMounted(() => {
  showPending();
  showMy();
});
</script>
