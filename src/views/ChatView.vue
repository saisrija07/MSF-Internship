<template>
  <div class="h-screen flex p-4 gap-8">
    <!-- Sidebar -->
    <ChatSidebar/>
    <!-- Chat Section -->
    <ChatMain/>
  </div>
</template>

<script setup>
import ChatMain from '@/components/chat/ChatMain.vue';
import ChatSidebar from '@/components/chat/ChatSidebar.vue';


</script>

<style scoped>
/* Additional styles if needed */
</style>
