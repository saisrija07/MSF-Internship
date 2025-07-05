<template>
  <MultiCard class="p-12 text-2xl grid grid-cols-1 w-[600px]">
    <CloseButton @close="$emit('cancel')"/>
    <div class="flex justify-center mb-12">
      <LogoComp class="h-32 w-32" />
    </div>
    <h2 class="text-3xl font-bold text-center mb-6">Create Delivery</h2>

    <form @submit.prevent="createDelivery">
      <SingleCard class="mb-6">
        <input
          v-model="pickup"
          type="text"
          placeholder="Pickup Location"
          required
          class="w-full px-4 py-2 border rounded-lg dark:text-black"
        />
      </SingleCard>

      <SingleCard class="mb-6">
        <input
          v-model="drop"
          type="text"
          placeholder="Drop Location"
          required
          class="w-full px-4 py-2 border rounded-lg dark:text-black"
        />
      </SingleCard>

      <SingleCard class="mb-6">
        <input
          v-model="desc"
          type="text"
          placeholder="Item Description"
          required
          class="w-full px-4 py-2 border rounded-lg dark:text-black"
        />
      </SingleCard>

      <SingleCard class="mb-6">
        <input
          v-model="phone"
          type="text"
          placeholder="Phone Number"
          required
          class="w-full px-4 py-2 border rounded-lg dark:text-black"
        />
      </SingleCard>

      <div class="flex items-center justify-center">
        <ButtonComp type="submit" class="w-full" variant="orange">Create Delivery</ButtonComp>
      </div>
    </form>
  </MultiCard>
</template>

<script setup>
import { ref } from 'vue';
import apiClient from '@/api/axios';
import MultiCard from '@/components/UI/MultiCard.vue';
import SingleCard from '@/components/UI/SingleCard.vue';
import ButtonComp from '@/components/UI/ButtonComp.vue';
import LogoComp from '@/components/UI/LogoComp.vue';
import { defineEmits } from 'vue';
import CloseButton from '@/components/UI/CloseButton.vue';
import { useNotifications } from '@/composables/useNotifications';

const pickup = ref('');
const drop = ref('');
const desc = ref('');
const phone = ref('');

const emit = defineEmits(['cancel']);
const { addNotification } = useNotifications();

const createDelivery = async () => {
  const data = {
    pickup_location: pickup.value,
    drop_location: drop.value,
    item_description: desc.value,
    phone_number: phone.value,
  };

  try {
    await apiClient.post('/deliveries/', data);
    addNotification('Delivery created successfully!');
    emit('cancel');

  } catch (err) {
    console.error('Error:', err.response?.data || err.message);
    addNotification('Failed to create delivery.');
  }
};
</script>
