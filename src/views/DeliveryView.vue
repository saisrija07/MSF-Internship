<template>
  <div>

    <div class="flex items-center justify-center mt-6">
      <AllDeliveries/>
    </div>

    <div v-if="role === 'customer'" class="flex justify-center items-center mt-4 text-lg">
      <ButtonComp @click="showForm" class="flex items-center gap-2">
        <Plus />
        <span>Create New</span>
      </ButtonComp>
    </div>



    <!-- Fullscreen Overlay -->
    <div v-if="showing" class="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center">
      <div class="relative w-full h-full overflow-auto flex justify-center items-start pt-16">
        <CreateDelivery @cancel="closeForm"/>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import CreateDelivery from '@/components/delivery/CreateDelivery.vue';
import AllDeliveries from '@/components/delivery/AllDeliveries.vue';
import ButtonComp from '@/components/UI/ButtonComp.vue';
import { Plus } from 'lucide-vue-next';

const role = localStorage.getItem('role');

const showing = ref(false);

const showForm = () => {
  showing.value = true;
};

const closeForm = () => {
  showing.value = false;
};
</script>
