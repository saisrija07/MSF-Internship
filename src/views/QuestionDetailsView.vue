<template>
  <div class="h-full pt-2">
    <splitpanes class="border shadow-lg h-full">

      <!-- Left Panel (Question) -->
      <pane min-size="20" max-size="40" class="p-2">
        <MultiCard>
          <QuestionDetails/>
        </MultiCard>
      </pane>

      <!-- Right Panel (Code Editor & Test Cases) -->
      <pane class="flex flex-col p-4">

        <!-- Top Pane (Code Editor) -->
        <splitpanes horizontal>
          <pane min-size="60" class="flex flex-col">
            <MultiCard>
              <TopSection/>

            <!-- Monaco Editor -->
            <MonacoEditor/>
            </MultiCard>
          </pane>

          <!-- Bottom Pane (Test Cases) -->
          <pane min-size="20" max-size="40" class="p-4 border-t bg-gray-100 dark:bg-gray-800">
            <TestCases/>
          </pane>
        </splitpanes>
      </pane>

    </splitpanes>
  </div>
</template>

<style>
.splitpanes__splitter {
  /* background-color: #ccc;
  width: 6px;
  cursor: ew-resize; */
  @apply w-2 cursor-ew-resize bg-gray-600 dark:bg-gray-400
}
</style>

<script setup>

import QuestionDetails from '@/components/questions/QuestionDetails.vue'
import TopSection from '@/components/questionDetails/TopSection.vue';
import MonacoEditor from '@/components/questionDetails/MonacoEditor.vue';
import { Splitpanes, Pane } from 'splitpanes'
import 'splitpanes/dist/splitpanes.css'
import TestCases from '@/components/questionDetails/TestCases.vue'
import MultiCard from '@/components/UI/MultiCard.vue'



</script>
