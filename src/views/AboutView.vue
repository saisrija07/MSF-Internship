<template>
  <section class="py-12 px-6 h-screen">
    <div class="max-w-4xl mx-auto text-center">
      <h2>About Us</h2>
      <p class="mt-4 text-md">
        Welcome to <span class="font-bold">QuickDeliverLite</span>,
        your trusted partner in managing and streamlining last-mile deliveries.
        Whether you're running a logistics company, managing freelance delivery agents,
        or coordinating internal package transfers, our platform helps you operate efficiently and transparently.
      </p>
    </div>

    <div class="max-w-4xl mx-auto mt-8 grid gap-8 md:grid-cols-2">
      <TitleDescription>
        <template #title>
          Seamless Delivery Tracking
        </template>
        <template #badge>
          <ScrollText />
        </template>
        <template #description>
          Monitor all your deliveries in real-time with minimal effort.
        </template>
      </TitleDescription>
      <TitleDescription>
        <template #title>
          Smart Assignment System
        </template>
        <template #badge>
          <Globe />
        </template>
        <template #description>
          Automatically assign the best available delivery agent for each task.
        </template>
      </TitleDescription>
      <TitleDescription>
        <template #title>
          Insightful Analytics
        </template>
        <template #badge>
          <Brain />
        </template>
        <template #description>
          Make better decisions with performance reports and route efficiency insights.
        </template>
      </TitleDescription>
      <TitleDescription>
        <template #title>
          Role-Based Access
        </template>
        <template #badge>
          <ShieldHalf />
        </template>
        <template #description>
          Manage customers, drivers, and admins with tailored access control.
        </template>
      </TitleDescription>
    </div>

    <div class="text-center mt-8">
      <p class=" text-xl font-semibold text-gray-700 dark:text-gray-300">Join QuickDeliverLite and optimize your delivery operations today! 🚚</p>
    </div>
  </section>
</template>


<script setup>
import TitleDescription from '@/components/UI/TitleDescription.vue';
import { Globe } from 'lucide-vue-next';
import { ScrollText } from 'lucide-vue-next';
import { Brain } from 'lucide-vue-next';
import { ShieldHalf } from 'lucide-vue-next';

</script>
