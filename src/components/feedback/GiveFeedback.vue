<template>
  <SingleCard class="p-8 mt-4">
    <h1>
      {{ isAgent ? 'Feedback Given For' : feedbackGiven ? 'Your Feedback For' : 'Rate Your Delivery' }}
      <span class="text-lg font-medium">{{ props.del.id }}</span>
    </h1>

    <div v-if="!loading">
      <div class="flex mb-4 mt-4">
        <h2 class="flex justify-start">Rating:</h2>
        <span>
          <StarRating
            v-model="rating"
            :disabled="isAgent || feedbackGiven"
            class="mt-1 ml-3"
          />
        </span>
      </div>

      <div class="mb-4">
        <h2 class="flex justify-start mb-1">Feedback:</h2>
        <textarea
          v-model="comment"
          :readonly="isAgent || feedbackGiven"
          rows="3"
          class="w-full px-3 py-2 border rounded-lg dark:text-black bg-white dark:bg-gray-200"
        ></textarea>
      </div>

      <div class="flex items-center justify-center">
        <ButtonComp
          v-if="!isAgent"
          @click="submitFeedback(props.del.id)"
          class="mt-4 ml-6 px-4 py-2"
          variant="orange"
          :disabled="feedbackGiven"
        >
          Submit Feedback
        </ButtonComp>
      </div>
    </div>
    <div v-else>
      <FeedbackLoading/>
    </div>
  </SingleCard>
</template>


<script setup>
import apiClient from '@/api/axios';
import SingleCard from '@/components/UI/SingleCard.vue';
import ButtonComp from '@/components/UI/ButtonComp.vue';
import { ref, onMounted } from 'vue';
import StarRating from '@/components/UI/StarRating.vue';
import FeedbackLoading from '@/components/UI/Loading/FeedbackLoading.vue';
import { useNotifications } from '@/composables/useNotifications';

const isAgent = localStorage.getItem('role') === 'agent';

const props = defineProps({
  del: Object,
  close: Function,
});
const { addNotification } = useNotifications();

const loading = ref(false);

const rating = ref(0)
const comment = ref('')
const feedbackGiven = ref(false);

const submitFeedback = async (delivery_id) => {
  try{
    const data = {
      id: delivery_id,
      delivery_id: delivery_id,
      rating: rating.value,
      comment: comment.value,
    }
    await apiClient.post('/feedback/submit', data);
    addNotification("Feedback Submitted Successfully");
    props.close();
  }
  
  catch(error){
    console.log(error);
  }
}

const checkFeedbacks = async (delivery_id) => {
  try{
    loading.value = true;
    const response = await apiClient.get(`/feedback/delivery/${delivery_id}`);
    rating.value = response.data['rating'];
    comment.value = response.data['comment'];
    feedbackGiven.value = true;
    loading.value = false;
  }
  catch(error){
    if(error.response){
      if(error.response.status === 404){
        console.log("NO FEEDBACKS");
        loading.value = false;
      }
    }
  }

}

onMounted (() => {
  checkFeedbacks(props.del.id);
});

</script>
