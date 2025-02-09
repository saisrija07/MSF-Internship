<template>
  <aside class="w-1/4 bg-white shadow-md p-4 overflow-y-auto h-screen rounded-lg">
    <h3 class="mb-5">Questions</h3>

    <div v-if="isLoading" class="grid gap-6">
      <LoadingQuestions/>
    </div>
    <div v-else class="grid gap-6">
      <SingleCard
      v-for="question in questions"
      :key="question.id"
      class="p-4"
      :class="question.id === selectedQuestionID ? 'text-2xl font-bold' : 'text-md font-semibold'"
      @click="questionsStore.selectQuestion(question.id)"
    >
      {{ question.title }}
    </SingleCard>
    </div>

  </aside>
</template>

<script setup>
import SingleCard from '@/components/UI/SingleCard.vue';
import { useQuestionsStore } from '@/stores/questionsStore';
import { storeToRefs } from 'pinia';
import LoadingQuestions from '@/components/questions/LoadingQuestions.vue';

const questionsStore = useQuestionsStore();
const { questions,isLoading,selectedQuestionID } = storeToRefs(questionsStore)

// const

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
        },
        {
            "id": 3,
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
        },
        {
            "id": 4,
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
        },
        {
            "id": 5,
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
        },
        {
            "id": 6,
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
        },
        {
            "id": 7,
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
        },
        {
            "id": 8,
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
        },
        {
            "id": 9,
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
        },
        {
            "id": 10,
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
        },
        {
            "id": 11,
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
        },
        {
            "id": 12,
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
