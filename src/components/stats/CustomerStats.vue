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
  <StatsLoading v-else class=" h-[240px]"/>

  <StatsCard v-if="!loadingCustomerFeed">
    <template #heading>{{ customer_feedbacks }}</template>
    <template #subheading>Feedbacks Given</template>
    <template #description>
      <span>
        Thank You for giving <strong class=" text-lg">{{ customer_feedbacks }}</strong> feedbacks. <br>Your feedbacks help us improve our service. If you have any complaints, feel free to call us on the Tollfree Number <strong class="text-lg underline">1800 123 4567</strong>
      </span>
    </template>
  </StatsCard>
  <StatsLoading v-else class=" h-[242px]"/>

  <StatsCard v-if="!loadingCustomerDel">
    <template #heading>{{ customer_deliveries }}</template>
    <template #subheading>Total Orders</template>
    <template #description>
      <span>
        You have ordered from us <strong class=" text-lg">{{ customer_deliveries }}</strong> times. <br>Thank You for trusting us for your needs. <br>We stay committed in delivering your orders Safely and Securely !!
      </span>
    </template>
  </StatsCard>
  <StatsLoading v-else class=" h-[242px]"/>

</template>


<script setup>
import apiClient from '@/api/axios';
import StatsCard from '@/components/stats/StatsCard.vue';
import { onMounted, ref } from 'vue';
import StatsLoading from '@/components/UI/Loading/StatsLoading.vue';

const loadingTotalDel = ref(false);
const loadingCustomerFeed = ref(false);
const loadingCustomerDel = ref(false);

const customer_id = localStorage.getItem('user_id');

const total_deliveries = ref(0);
const customer_feedbacks = ref(0);
const customer_deliveries = ref(0);

const getTotalDeliveries = async () => {
  loadingTotalDel.value = true;
  const response = await apiClient.get('/app-stats');
  total_deliveries.value = response.data['total_deliveries'];
  loadingTotalDel.value = false;
};


const getCustomerFeedbacks = async () => {
  try{
    loadingCustomerFeed.value = true;
    const response = await apiClient.get(`/customer/${customer_id}/feedback-summary`);
    customer_feedbacks.value = response.data['total_feedbacks_given'];
    loadingCustomerFeed.value = false;
  }
  catch(error){
    console.log(error);
    getCustomerFeedbacks();
  }
}

const getCustomerDeliveries = async () => {
  try{
    loadingCustomerDel.value = true;
    const response = await apiClient.get(`/customer/${customer_id}/deliveries`);
    customer_deliveries.value = response.data['total_deliveries'];
    loadingCustomerDel.value = false;
  }
  catch(error){
    console.log(error);
    getCustomerFeedbacks();
  }
}

onMounted(() => {
  getTotalDeliveries();
  getCustomerFeedbacks();
  getCustomerDeliveries();
})

</script>
