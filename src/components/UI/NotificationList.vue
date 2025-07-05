<template>
  <Teleport to="body">
    <ol class="notification-list">
      <li v-for="notification in notifications" :key="notification.id" class="notification-item">
        <div>
          {{ notification.message }}
        </div>
        <button @click="removeNotification(notification.id)" class="notification-ack-button">
          OK
        </button>
      </li>
    </ol>
  </Teleport>
</template>

<script setup lang="ts">
import { useNotifications } from '@/composables/useNotifications';
import { X } from 'lucide-vue-next';

const { notifications, removeNotification } = useNotifications();
</script>
