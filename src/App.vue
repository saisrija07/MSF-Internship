
<template>
  <NavBar/>
  <div>
    <RouterView/>
  </div>
  <NotificationList/>
</template>

<script setup>
import { RouterView } from 'vue-router'
import NavBar from '@/components/nav/NavBar.vue';

import { useThemeStore } from "@/stores/useThemeStore";
import NotificationList from '@/components/UI/NotificationList.vue';

const themeStore = useThemeStore();

// Apply the theme when the app loads
if (themeStore.darkMode) {
  document.documentElement.classList.add("dark");
} else {
  document.documentElement.classList.remove("dark");
}

</script>
