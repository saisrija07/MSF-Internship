<template>
  <div class="h-full pt-2">
    <splitpanes class="border shadow-lg h-full">

      <!-- Left Panel (Question) -->
      <pane min-size="20" max-size="40" class="bg-gray-100 border-r p-2">
        <QuestionDetails/>
      </pane>

      <!-- Right Panel (Code Editor & Test Cases) -->
      <pane class="flex flex-col p-4">
        <!-- Top Pane (Code Editor) -->
        <splitpanes horizontal>
          <pane min-size="60" class="flex flex-col">
            <TopSection/>

            <!-- Monaco Editor -->
            <MonacoEditor/>
          </pane>

          <!-- Bottom Pane (Test Cases) -->
          <pane min-size="20" max-size="40" class="p-4 bg-gray-100 border-t">
            <TestCases/>
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

import QuestionDetails from '@/components/questions/QuestionDetails.vue'
import TopSection from '@/components/questionDetails/TopSection.vue';
import MonacoEditor from '@/components/questionDetails/MonacoEditor.vue';
import { Splitpanes, Pane } from 'splitpanes'
import 'splitpanes/dist/splitpanes.css'
import TestCases from '@/components/questionDetails/TestCases.vue'




</script>
