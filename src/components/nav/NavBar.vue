
<template>
  <div class="sticky top-0 flex">
    <div class="justify-start bg-gray-400">
        <LogoComp class="ml-2 h-12 w-12"/>
    </div>
    <div class="flex w-full justify-center bg-gray-400">
        <RouterLink :to="{name:'home'}" active-class="active">
        <NavItem -name="Home"/>
      </RouterLink>
      <RouterLink :to="{name:'about'}" active-class="active">
        <NavItem -name="About"/>
      </RouterLink>
      <RouterLink :to="{name:'delivery'}" active-class="active">
        <NavItem -name="Delivery"/>
      </RouterLink>
      <RouterLink :to="{name:'feedback'}" active-class="active">
        <NavItem -name="Feedback"/>
      </RouterLink>
    </div>
    <button @click="themeStore.toggleTheme()" class="p-2 rounded-lg bg-gray-200 dark:bg-gray-700">
    {{ themeStore.darkMode ? "🌙 Dark Mode" : "☀️ Light Mode" }}
  </button>
    <div class="justify-end bg-gray-400" >
      <RouterLink :to="{name:'profile'}" active-class="active" class="rounded-3xl bg-black">
        <NavItem -name="Profile"/>
      </RouterLink>
    </div>
  </div>


</template>


<script setup>
import LogoComp from '@/components/UI/LogoComp.vue';
import NavItem from '@/components/nav/NavItem.vue';

import { RouterLink } from 'vue-router';

import { useThemeStore } from "@/stores/useThemeStore";

const themeStore = useThemeStore();

</script>

<style scoped>
.active{
  @apply border-b border-slate-800 text-xl
  /* border-bottom: 1px solid darkblue; */
}
</style>
