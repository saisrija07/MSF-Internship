<template>
  <MultiCard class="h-screen p-4">
    <h1>
      App Statistics
    </h1>

    <StatsCard v-if="!loading">
      <template #heading>{{ totalDel }}</template>
      <template #subheading>Total Deliveries</template>
      <template #description>
        <span>
          We have completed <strong class=" text-lg">{{ totalDel }}</strong> deliveries
        </span>
    </template>
    </StatsCard>
    <StatsLoading v-else class=" h-[180px]"/>

    <StatsCard v-if="!loading">
      <template #heading>{{ totalPending }}</template>
      <template #subheading>Pending Deliveries</template>
      <template #description>
        <span>
          We have <strong class=" text-lg">{{ totalPending }}</strong> deliveries which are pending
        </span>
      </template>
    </StatsCard>
    <StatsLoading v-else class=" h-[180px]" />

    <StatsCard v-if="!loading">
      <template #heading>{{ totalTrans }}</template>
      <template #subheading>Ongoing Deliveries</template>
      <template #description>
        <span>
          We have <strong class=" text-lg">{{ totalTrans }}</strong> deliveries which are ongoing
        </span>
      </template>
    </StatsCard>
    <StatsLoading v-else class=" h-[180px]" />

    <StatsCard v-if="!loading">
      <template #heading>{{ totalAcc }}</template>
      <template #subheading>Accepted Deliveries</template>
      <template #description>
        <span>
          We have <strong class=" text-lg">{{ totalAcc }}</strong> deliveries which are accepted
        </span>
      </template>
    </StatsCard>
    <StatsLoading v-else class=" h-[180px]" />

  </MultiCard>
</template>

<script setup>
import MultiCard from '@/components/UI/MultiCard.vue';
import StatsCard from '@/components/stats/StatsCard.vue';
import apiClient from '@/api/axios';
import { onMounted, ref } from 'vue';
import StatsLoading from '@/components/UI/Loading/StatsLoading.vue';

const loading = ref(false);

const totalDel = ref(0);
const totalPending = ref(0);
const totalAcc = ref(0);
const totalTrans = ref(0);

const getDeliveries = async () => {
  loading.value = true;
  const response = await apiClient.get('/app-stats');
  totalDel.value = response.data['total_deliveries'];
  totalPending.value = response.data['total_pending'];
  totalAcc.value = response.data['total_accepted'];
  totalTrans.value = response.data['total_in_transit'];
  loading.value = false;
}

onMounted(() => {
  getDeliveries();
})

</script>
