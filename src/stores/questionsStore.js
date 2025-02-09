import { ref,computed } from 'vue';
import { defineStore } from 'pinia';
import apiClient from '@/api/axios';

export const useQuestionsStore = defineStore('questionStore', () => {
  const questions = ref([]);
  const selectedQuestionID = ref(null);
  const loading = ref(false)

  const fetchQuestions = async () => {
    try{
      loading.value = true
      const data = await apiClient.get('/questions'); // from global route
      questions.value = data['data']; // no need of .json()
    }
    catch(error){
      console.error("Error Fetching Data: " + error)
    }
    finally{
      loading.value = false;
    }
  };

  const isLoading = computed(() => loading.value)

  const selectQuestion = (id) => {
    selectedQuestionID.value = id;
  };

  const selectedQuestion = computed(() =>
    questions.value.find((q) => q.id === selectedQuestionID.value) || null
  );


  return {
    questions,
    selectedQuestion,
    selectedQuestionID,
    selectQuestion,
    fetchQuestions,
    isLoading,
  };
});


