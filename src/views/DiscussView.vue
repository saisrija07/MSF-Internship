<template>
  <div class="h-full pt-2">
    <splitpanes class="border shadow-lg h-full">
      <!-- Left Panel (Question) -->
      <pane min-size="20" max-size="40" class="bg-gray-100 border-r p-2">
        <QuestionDetails>
          <template #heading>
            {{ db.questions[0].title }}
          </template>
          <template #description>
            {{ db.questions[0]['detailed description'] }}
          </template>
          <template #constraints>
            <MultiCanvas>
              <template #heading> Constraints </template>
              <template #content>
                <MultiCard v-for="constraint in db.questions[0].constraints" :key="constraint.id" class="p-4">
                  <template #default> {{ constraint.id }} : {{ constraint.con }} </template>
                </MultiCard>
              </template>
            </MultiCanvas>
          </template>
        </QuestionDetails>
      </pane>

      <!-- Right Panel (Code Editor & Test Cases) -->
      <pane class="flex flex-col p-4">
        <!-- Top Pane (Code Editor) -->
        <splitpanes horizontal>
          <pane min-size="60" class="flex flex-col">
            <div class="p-4 flex justify-between items-center bg-gray-200">
              <select class="p-2 border rounded-md">
                <option value="python">Python</option>
              </select>
              <div class="flex gap-4">
                <ButtonComp variant="green">Run</ButtonComp>
                <ButtonComp variant="blue">Submit</ButtonComp>
              </div>
            </div>

            <!-- Monaco Editor -->
            <div class="flex-1 border-t p-4 bg-white">
              <div class="border rounded-md h-96 flex items-center justify-center text-gray-400">
                Code Editor Placeholder
              </div>
            </div>
          </pane>

          <!-- Bottom Pane (Test Cases) -->
          <pane min-size="20" max-size="40" class="p-4 bg-gray-100 border-t">
            <MultiCanvas>
              <template #heading> Test Cases </template>
              <template #content>
                <MultiCard v-for="example in db.questions[0].examples" :key="example.id" class="p-4 mb-4">
                  <template #default>
                    <span class="font-semibold">Input: </span>{{ example.input }} <br />
                    <span class="font-semibold">Actual Output: </span>{{ example.output }}<br />
                    <span class="font-semibold">Your Output: </span>{{ example.output }}<br />
                  </template>
                </MultiCard>
              </template>
            </MultiCanvas>
          </pane>
        </splitpanes>
      </pane>
    </splitpanes>
  </div>
</template>

<style>
.splitpanes__splitter {
  background-color: #ccc;
  width: 6px;
  cursor: ew-resize;
}
</style>

<script setup>
import MultiCanvas from '@/components/UI/MultiCanvas.vue'
import MultiCard from '@/components/UI/MultiCard.vue'
import QuestionDetails from '@/components/questions/QuestionDetails.vue'
import ButtonComp from '@/components/UI/ButtonComp.vue'
import { Splitpanes, Pane } from 'splitpanes'
import 'splitpanes/dist/splitpanes.css'

// import MonacoEditor from 'monaco-editor-vue3';

const db = {
  questions: [
    {
      id: 1,
      title: 'Two Sum',
      description: 'Find two numbers that sum to target',
      'detailed description':
        'Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target. You may assume that each input would have exactly one solution, and you may not use the same element twice. You can return the answer in any order.',
      constraints: [
        {
          id: 1,
          con: 'Value less than 2^100',
        },
      ],
      author: 'SHRI',
      examples: [
        {
          id: 1,
          input: 'nums = [2,7,11,15], target = 9',
          output: '[0,1]',
          explanation: '2 + 7 sum to 9',
        },
        {
          id: 2,
          input: 'nums = [2,7,2,15], target = 4',
          output: '[0,2]',
        },
      ],
    },
    {
      id: 2,
      title: 'Arithmetic Progression',
      description: 'Find Next Term in AP',
      'detailed description':
        'Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target. You may assume that each input would have exactly one solution, and you may not use the same element twice. You can return the answer in any order.',
      constraints: [
        {
          id: 1,
          con: 'Value less than 2^100',
        },
      ],
      author: 'SHRI',
      examples: [
        {
          id: 1,
          input: 'nums = [2,4,6,8]',
          output: '10',
        },
        {
          id: 2,
          input: 'nums = [1,2,3,4]',
          output: '5',
        },
      ],
    },
  ],
}
</script>
