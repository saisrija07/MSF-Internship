<template>
  <button @click="checkAgent">Check Agent</button>
  <button @click="checkCust">Check Cust</button>

</template>

<script setup>
import apiClient from '@/api/axios';

const id = localStorage.getItem('user_id');
const checkAgent = async () => {
  const response = await apiClient.get(`/feedback/driver/${id}`);
  console.log(response.data);
}

const checkCust = async () => {
  const response = await apiClient.get(`/feedback/customer/${id}`);
  console.log(response.data);
}

</script>
