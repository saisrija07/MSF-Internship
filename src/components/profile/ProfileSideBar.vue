<template>
  <ProfileSideSection>
    <template #heading>
      Social
    </template>
    <template #lucide>
      <Activity/>
    </template>
    <template #content>
      <div><span class="font-semibold">Followers: </span>142</div>
      <div><span class="font-semibold">Following: </span>333</div>
      <div><span class="font-semibold">Views: </span>24</div>
    </template>
  </ProfileSideSection>

  <ProfileSideSection>
    <template #heading>
      Languages
    </template>
    <template #lucide>
      <BookOpenCheck />
    </template>
    <template #content>
      <div><span class="font-semibold">Python3: </span>42 problems</div>
      <div><span class="font-semibold">Python: </span>33 problems</div>
    </template>
  </ProfileSideSection>

  <ProfileSideSection>
    <template #heading>
      Skills Gained
    </template>
    <template #lucide>
      <Bolt />
    </template>
    <template #content>
      <div><span class="font-semibold">Arrays: </span>26 times</div>
      <div><span class="font-semibold">Dynamic Programming: </span>12 times</div>
      <div><span class="font-semibold">Linked Lists: </span>2 times</div>
    </template>
  </ProfileSideSection>

  <ProfileSideSection>
    <template #heading>
      Solved with AI
    </template>
    <template #lucide>
      <Brain />
    </template>
    <template #content>
      <div><span class="font-semibold">Easy: </span>2 times</div>
      <div><span class="font-semibold">Medium: </span>12 times</div>
      <div><span class="font-semibold">Hard: </span>42 times</div>
    </template>
  </ProfileSideSection>
</template>

<script setup>
import ProfileSideSection from '@/components/profile/ProfileSideSection.vue';
import { Activity,BookOpenCheck,Bolt,Brain } from 'lucide-vue-next';
</script>
