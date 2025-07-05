<template>

  <StatsCard v-if="!loadingTotalDel">
    <template #heading>{{ total_deliveries }}+</template>
    <template #subheading>Total Deliveries Completed</template>
    <template #description>
      <span>
        Quick Deliver Lite has completed over <strong class=" text-lg">{{ total_deliveries }}</strong> deliveries. We are on the way to become <strong class="text-lg">India's No.1 Online Parcel Service !!</strong>
      </span>
    </template>
  </StatsCard>
  <StatsLoading v-else/>

  <StatsCard v-if="!loadingRating">
    <template #heading>{{ rating }}</template>
    <template #symbol>★</template>
    <template #miniheading>({{ driver_feedbacks }} Reviews)</template>
    <template #subheading>Average Rating</template>
    <template #description>Agents with better rating get special benefits !!</template>
  </StatsCard>
  <StatsLoading v-else />

  <StatsCard v-if="!loadingAgentDel">
    <template #heading>{{ driver_deliveries }}</template>
    <template #subheading>Completed Deliveries</template>
    <template #description>
      <span>
        You have completed <strong class=" text-lg">{{ driver_deliveries }}</strong> deliveries. Complete more deliveries from the pending ones available on the platform !!
      </span>
    </template>
  </StatsCard>
  <StatsLoading v-else />
</template>


<script setup>
import apiClient from '@/api/axios';
import StatsCard from '@/components/stats/StatsCard.vue';
import { onMounted, ref } from 'vue';
import StatsLoading from '@/components/UI/Loading/StatsLoading.vue';

const loadingTotalDel = ref(false);
const loadingRating = ref(false);
const loadingAgentDel = ref(false);

const driver_id = localStorage.getItem('user_id');

const rating = ref(0);
const total_deliveries = ref(0);
const driver_feedbacks = ref(0);
const driver_deliveries = ref(0);

// For fictional purpose only. To be changed with actual API call
const getTotalDeliveries = async () => {
  try {
    loadingTotalDel.value = true;
    await new Promise(resolve => {
      setTimeout(() => {
        total_deliveries.value = 1234;
        resolve();
      }, 3000);
    });

    loadingTotalDel.value = false;
  } catch (error) {
    console.log(error);
    getTotalDeliveries();
  }
};

const getRating = async () => {
  loadingRating.value = true;
  const response = await apiClient.get(`/driver/${driver_id}/average-rating`);
  rating.value = response.data['average_rating'];
  driver_feedbacks.value = response.data['total_feedbacks'];
  loadingRating.value = false;
}

const getDriverDeliveries = async () => {
  loadingAgentDel.value = true;
  const response = await apiClient.get(`/driver/${driver_id}/completed-deliveries`);
  driver_deliveries.value = response.data['completed_deliveries'];
  loadingAgentDel.value = false;
}


onMounted(() => {
  getTotalDeliveries();
  getRating();
  getDriverDeliveries();
})

</script>
