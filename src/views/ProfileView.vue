<template>
  <div class="flex p-4 h-screen gap-6">
    <MultiCard class="w-1/5 h-fit p-4">
      <ProfileSideBar/>
    </MultiCard>

    <div class="grid grid-cols-1 gap-4 w-4/5 h-screen rounded-2xl grid-rows-[25%_25%_auto]">
      <ProfileMidUpper/>
      <MultiCard class="p-8">
        <ProfileMidCenter/>
      </MultiCard>
      <MultiCard class="p-6">
        <ProfileMidLower/>
      </MultiCard>
    </div>
  </div>
</template>

<script setup>
import ProfileMidCenter from '@/components/profile/ProfileMidCenter.vue';
import ProfileMidLower from '@/components/profile/ProfileMidLower.vue';
import ProfileMidUpper from '@/components/profile/ProfileMidUpper.vue';
import ProfileSideBar from '@/components/profile/ProfileSideBar.vue';
import MultiCard from '@/components/UI/MultiCard.vue';
// import SingleCard from '@/components/UI/SingleCard.vue';

</script>
