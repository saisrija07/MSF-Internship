<template>
  <MultiCard class="w-full">
    <button @click="curUser" class="text-2xl text-blue-800 font-bold"> See who's working</button><br>
    <button @click="allUsers" class="text-2xl text-blue-800 font-bold"> All users </button>

    <p class="text-xl font-semibold text-gray-800">
      {{ content }}
    </p>

    <ul v-if="users.length > 0" class="text-xl font-semibold text-gray-800 list-disc ml-6">
      <li v-for="user in users" :key="user.user_id">
        {{ user }}
      </li>
    </ul>

  </MultiCard>

</template>

<script setup>
import MultiCard from '@/components/UI/MultiCard.vue';
import apiClient from '@/api/axios';
import { ref } from 'vue';

const content = ref('');
const users = ref([]);

const allUsers = async () => {
  try {
    const response = await apiClient.get('/read_all_users');
    users.value = response.data;
  } catch (err) {
    console.error('Error fetching all users:', err.response?.data || err.message);
    content.value = "INTERNAL SERVER ERROR"
  }
};


const curUser = async () => {
  const userId = localStorage.getItem('user_id');
  const response = await apiClient.get(`/user/${userId}`);
  content.value = "Logged in as:\t" + response.data.name + "\tRole:\t" + response.data.role + "\tPhoneNo:\t" + response.data.phone_number;
}

</script>
