import { ref } from "vue";

let notifications = ref([]);

const addNotification = (message) => {
  const id = Date.now().toString();
  const data = {
    id,
    message
  }
  notifications.value.push(data);
  setTimeout(() => removeNotification(id), 5000);
}

const removeNotification = (id) => {
  notifications.value = notifications.value.filter((notification) => notification.id !== id);
}

export function useNotifications() {
  return {
    notifications,
    addNotification,
    removeNotification
  }
}
