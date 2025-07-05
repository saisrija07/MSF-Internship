<template>
  <div class="flex items-center justify-center min-h-screen">
    <MultiCard class="p-12 text-2xl grid grid-cols-1 w-[600px]">
      <div class="flex justify-center mb-16">
        <LogoComp class="h-32 w-32" />
      </div>
      <h2 class="text-3xl font-bold text-center mb-6">Register</h2>
      <form @submit.prevent="handleRegister">
        <SingleCard class="mb-6">
          <input v-model="name" type="text" placeholder="Username"
                 class="w-full px-4 py-2 border rounded-lg dark:text-black" required />
        </SingleCard>

        <SingleCard class="mb-6">
          <input v-model="email" type="email" placeholder="Email"
                 class="w-full px-4 py-2 border rounded-lg dark:text-black" required />
        </SingleCard>

        <SingleCard class="mb-6">
          <input v-model="age" type="number" placeholder="Age" min = 0 max = 100
                 class="w-full px-4 py-2 border rounded-lg dark:text-black" required />
        </SingleCard>

        <!-- Gender Dropdown -->
        <SingleCard class="mb-6">
          <select v-model="gender"
                  class="w-full px-4 py-2 border rounded-lg dark:text-black" required>
            <option disabled value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
            <option value="prefer_not_to_say">Prefer Not to Say</option>
          </select>
        </SingleCard>

        <SingleCard class="mb-6">
          <select v-model="role"
                  class="w-full px-4 py-2 border rounded-lg dark:text-black" required>
            <option disabled value="">Select Role</option>
            <option value="admin">Admin</option>
            <option value="customer">Customer</option>
            <option value="agent">Agent</option>
          </select>
        </SingleCard>

        <SingleCard class="mb-6">
          <input v-model="password" type="password" placeholder="Password"
                 class="w-full px-4 py-2 border rounded-lg dark:text-black" required />
        </SingleCard>

        <SingleCard class="mb-6">
          <input v-model="phone" type="text" placeholder="Phone No"
                 class="w-full px-4 py-2 border rounded-lg dark:text-black" required />
        </SingleCard>

        <ButtonComp class="w-full">
          SIGN-UP
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
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { useNotifications } from '@/composables/useNotifications';

const router = useRouter();
const { addNotification } = useNotifications();

let name = ref('');
let email = ref('');
let age = ref('');
let gender = ref('');
let role = ref('');
let phone = ref('');
let password = ref('');

const handleRegister = async () => {
  const data = {
    name: name.value,
    email_address: email.value,
    age: age.value,
    gender: gender.value,
    role: role.value,
    password: password.value,
    phone_number: phone.value
  };

  try {
  const response = await apiClient.post('/auth/register', data);
  console.log(response.data);

  // Redirect to Login Page
  addNotification('Registration Successful. Please Login')
  router.push('/login');

  } catch (error) {
    if (error.response) {
      console.error('Server responded with error:', error.response.data);
    } else {
      console.error('Network error:', error);
    }
  }

};



</script>
