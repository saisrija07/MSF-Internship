<template>
  <MultiCard v-if="user" class="p-10 max-w-xl mx-auto mt-10 shadow-xl text-xl">
    <div class="flex flex-col items-center">
      <div class="w-32 h-32 bg-blue-500 rounded-full flex items-center justify-center text-white text-5xl font-bold">
        {{ initials }}
      </div>
      <h2 class="mt-4 text-3xl font-bold">{{ user.name }}</h2>
      <p class="text-gray-500 text-lg">{{ user.email_address }}</p>
    </div>

    <div class="mt-8 grid gap-4 text-2xl">
      <div class="flex items-center gap-2">
        <p><strong>User ID:</strong> {{ user.user_id }}</p>
        <button
          @click="copyToClipboard(user.user_id)"
          class="flex items-center text-blue-900 dark:text-blue-200"
        >
          <component :is="copied ? CopyCheck : Copy" class="w-5 h-5 mr-1 ml-2" />
          <span class=" text-base">{{ copied ? 'Copied' : 'Copy' }}</span>
        </button>
      </div>
      <p><strong>Gender:</strong> {{ capitalize(user.gender) }}</p>
      <p><strong>Phone No:</strong> {{ user.phone_number }} </p>
      <p><strong>Age:</strong> {{ user.age }} </p>
    </div>
    <div class="flex items-center justify-center mt-12">
      <ButtonComp @click="handleLogout" class="rounded-full">
        Logout
      </ButtonComp>
    </div>
  </MultiCard>
  <ProfileLoading v-else/>
</template>

<script setup>
import apiClient from '@/api/axios';
import MultiCard from '@/components/UI/MultiCard.vue';
import { capitalize, onMounted, ref } from 'vue';
import { Copy, CopyCheck } from 'lucide-vue-next';
import ButtonComp from '@/components/UI/ButtonComp.vue';
import { useRouter } from 'vue-router';
import { useNotifications } from '@/composables/useNotifications';
import ProfileLoading from '@/components/UI/Loading/ProfileLoading.vue';

const { addNotification } = useNotifications();

let user = ref(null);
let initials = ref('');
// let roleLabel = ref('');

const getProfile = async () => {
  const response = await apiClient.get('/auth/me');
  console.log(response.data);
  user.value = response.data;
  initials.value = user.value.email_address[0].toUpperCase();
}

let copied = ref(false);

const copyToClipboard = (text) => {
  navigator.clipboard.writeText(text)
    .then(() => {
      copied.value = true;
      setTimeout(() => copied.value = false, 3000);
    })
    .catch(err => console.error('Failed to copy:', err));
  addNotification("User ID Copied");
};

const router = useRouter();

const logout = () => {
  localStorage.removeItem('token');
  addNotification("Logged Out Successfully");
  router.push('/login');
};

const handleLogout = () => {
  if(confirm("Are you sure you want to logout?")){
    logout();
  }
}

onMounted(() => {
  getProfile();
})

</script>
