<template>
  <div class="flex items-center justify-center gap-6">
        <ButtonComp
        v-if="!props.selectedDelivery.status"
          @click="acceptDelivery(props.selectedDelivery.id)"
          class="mt-4 px-4 py-2 rounded"
          variant="green"
        >
          Accept
        </ButtonComp>

        <ButtonComp
        v-else-if="props.selectedDelivery.status === 'accepted'"
          @click="updateStatus(props.selectedDelivery.id, 'in-transit')"
          class="mt-4 px-4 py-2 rounded"
          variant="green"
        >
          Start Delivery
        </ButtonComp>

        <ButtonComp
        v-else-if="props.selectedDelivery.status === 'in-transit'"
          @click="updateStatus(props.selectedDelivery.id, 'delivered')"
          class="mt-4 px-4 py-2 rounded"
          variant="green"
        >
          Finish Delivery
        </ButtonComp>

      </div>
</template>


<script setup>
import ButtonComp from '@/components/UI/ButtonComp.vue';
import { defineProps } from 'vue';
import apiClient from '@/api/axios';
import { useNotifications } from '@/composables/useNotifications';

const props = defineProps({
  'selectedDelivery': Object,
  'showPending': Function,
  'showMy': Function,
  'close': Function,
})

const { addNotification } = useNotifications();

const acceptDelivery = async (delivery_id) => {
  try{
    await apiClient.post(`/deliveries/${delivery_id}/accept`);
    addNotification("Delivery Accepted Successfully")
    props.close();
    await props.showPending();
    await props.showMy();
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
    addNotification('Status Updated Successfully')
    props.close();
    await props.showPending();
    await props.showMy();
  }
  catch (error){
    console.log(error);
  }
}

</script>
