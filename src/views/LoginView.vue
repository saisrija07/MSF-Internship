<template>
  <div class="flex items-center justify-center min-h-screen">
    <MultiCard class=" p-12 text-2xl grid grid-cols-1 w-[600px]">
      <div class="flex justify-center mb-16">
        <LogoComp class="h-32 w-32"/>
      </div>
      <h2 class="text-3xl font-bold text-center mb-6">Login</h2>
      <form @submit.prevent="handleLogin">
        <SingleCard class=" mb-6">
          <input v-model="email" type="email" id="email" required placeholder="Email"
                 class="w-full px-4 py-2 border rounded-lg dark:text-black" />
        </SingleCard>

        <SingleCard class="mb-6">
          <input v-model="password" type="password" id="password" required placeholder="Password"
                 class="w-full px-4 py-2 border rounded-lg dark:text-black" />
        </SingleCard>

          <ButtonComp class=" w-full">
            LOGIN
          </ButtonComp>

      </form>
    </MultiCard>
  </div>
</template>

<script setup>

import ButtonComp from '@/components/UI/ButtonComp.vue';
import LogoComp from '@/components/UI/LogoComp.vue';
import MultiCard from '@/components/UI/MultiCard.vue';
import SingleCard from '@/components/UI/SingleCard.vue'
import apiClient from '@/api/axios';
import { useRouter } from 'vue-router';

const router = useRouter();

let email = '';
let password = '';

const handleLogin = async () => {
  const data = {
    email_address: email,
    password: password
  };

  try {
  const response = await apiClient.post('/auth/login', data);
  console.log('Login successful:', response.data);

  // 1. Extract data
  const { access_token, token_type, user_id, role } = response.data;

  // 2. Store in localStorage
  localStorage.setItem('token', access_token);
  localStorage.setItem('token_type', token_type);
  localStorage.setItem('user_id', user_id);
  localStorage.setItem('role', role);

  // Go to home
  alert('Login Successful');
  router.push('/');

  } catch (error) {
    if (error.response) {
      if (error.response.status === 401) {
        alert('Invalid email or password');
      } else {
        alert(`Error: ${error.response.data.detail || 'Something went wrong'}`);
      }
    } else {
      alert('Network error. Please try again.');
    }
  }
};



</script>
