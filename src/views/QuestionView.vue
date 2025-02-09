<template>
    <div class="flex p-4">
      <QuestionsSideBar/>
      <QuestionDetails>
        <template #buttons>
          <ButtonsContainer/>
        </template>
      </QuestionDetails>
  </div>
</template>

<script setup>
import QuestionsSideBar from "@/components/questions/QuestionsSideBar.vue";
import QuestionDetails from "@/components/questions/QuestionDetails.vue";
import ButtonsContainer from "@/components/questions/ButtonsContainer.vue";
import { useQuestionsStore } from "@/stores/questionsStore";
import { onMounted } from "vue";


const questionsStore = useQuestionsStore();
onMounted(() => {
  if(questionsStore.questions.length == 0){
    questionsStore.fetchQuestions()
}})

const db = {
    "questions": [
        {
            "id": 1,
            "title": "Two Sum",
            "description":"Find two numbers that sum to target",
            "detailed description":"Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target. You may assume that each input would have exactly one solution, and you may not use the same element twice. You can return the answer in any order.",
            "constraints":"None",
            "author": "SHRI",
            "examples":[
                {
                    "id":1,
                    "input":"nums = [2,7,11,15], target = 9",
                    "output":"[0,1]",
                    "explanation":"2 + 7 sum to 9"
                },
                {
                    "id":2,
                    "input":"nums = [2,7,2,15], target = 4",
                    "output":"[0,2]"
                }
            ]
        },
        {
            "id": 2,
            "title": "Arithmetic Progression",
            "description":"Find Next Term in AP",
            "detailed description":"Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target. You may assume that each input would have exactly one solution, and you may not use the same element twice. You can return the answer in any order.",
            "constraints":"None",
            "author": "SHRI",
            "examples":[
                {
                    "id":1,
                    "input":"nums = [2,4,6,8]",
                    "output":"10"
                },
                {
                    "id":2,
                    "input":"nums = [1,2,3,4]",
                    "output":"5"
                }
            ]
        }
    ]
  }
</script>
