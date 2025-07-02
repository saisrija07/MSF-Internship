<template>
  <SingleCard class="p-8 mt-4">
    <h1>Rate Your Delivery for <span class="text-lg font-medium">{{ props.del.id }}</span></h1>

    <div class="flex mb-4 mt-4">
      <h2 class=" flex justify-start">Rate Us:</h2>
      <span><StarRating v-model="rating" class="mt-1 ml-3"/></span>
    </div>

    <div class="mb-4">
      <h2 class=" flex justify-start">Comments:</h2>
      <textarea v-model="comment" rows="4" class="w-full px-3 py-2 border rounded-lg dark:text-black"></textarea>
    </div>

    <div class="flex items-center justify-center">
      <ButtonComp
      @click="submitFeedback(props.del.id)"
      class="mt-4 ml-6 px-4 py-2"
    >
      Submit Feedback
    </ButtonComp>
    </div>

  </SingleCard>

</template>

<script setup>
import apiClient from '@/api/axios';
import SingleCard from '@/components/UI/SingleCard.vue';
import ButtonComp from '@/components/UI/ButtonComp.vue';
import { ref } from 'vue';
import StarRating from '@/components/UI/StarRating.vue';

const props = defineProps({
  del: Object,
  useClose: Function,
});


const rating = ref(0)
const comment = ref('')

const submitFeedback = async (delivery_id) => {
  try{
    const data = {
      id: delivery_id,
      delivery_id: delivery_id,
      customer_id: "1",
      driver_id: "2",
      rating: rating.value,
      comment: comment.value,
      timestamp: "2025-07-02T12:10:30.747Z"
    }
    await apiClient.post('/feedback/submit', data);
    alert("Feedback Submitted Successfully");
    // console.log(data)
    props.useClose();
  }
  catch(error){
    console.log(error);
  }
}

</script>
