<template>
  <MultiCard class="bg-white py-10 px-4 overflow-hidden">
    <h2 class="mb-8">
      What People Are Saying
    </h2>

    <div class="w-full overflow-hidden">
      <div class="flex w-max animate-scroll gap-6">
        <SingleCard
          v-for="(testimonial, index) in repeatedTestimonials"
          :key="index"
          class="flex-shrink-0 w-[300px] p-4 !cursor-default"
        >
          <div class="flex items-center gap-3 mb-3">
            <img
              :src="testimonial.image"
              alt="User photo"
              class="w-20 h-20 rounded-full object-cover"
            />
            <div>
              <h3>{{ testimonial.name }}</h3>
              <p class=" font-semibold text-lg">{{ testimonial.role }}</p>
            </div>
          </div>
          <p class=" text-base">
            "{{ testimonial.message }}"
          </p>
        </SingleCard>
      </div>
    </div>
  </MultiCard>
</template>

<script setup>

import t1 from '@/assets/static/testimonials/t_1.png'
import t2 from '@/assets/static/testimonials/t_2.png'
import t3 from '@/assets/static/testimonials/t_3.png'
import t4 from '@/assets/static/testimonials/t_4.png'
import t5 from '@/assets/static/testimonials/t_5.png'
import t6 from '@/assets/static/testimonials/t_6.png'
import t7 from '@/assets/static/testimonials/t_7.png'
import t8 from '@/assets/static/testimonials/t_8.png'
import t9 from '@/assets/static/testimonials/t_9.png'
import t10 from '@/assets/static/testimonials/t_10.png'
import MultiCard from '../UI/MultiCard.vue'
import SingleCard from '../UI/SingleCard.vue'


const baseTestimonials = [
  {
    name: 'Aarav Kumar',
    role: 'Customer',
    image: t1,
    message: 'The delivery experience was seamless and super fast.'
  },
  {
    name: 'Neha Sharma',
    role: 'Rider',
    image: t2,
    message: 'Clear routes, real-time updates — I love using the app daily.'
  },
  {
    name: 'Rakesh Verma',
    role: 'Dispatcher',
    image: t3,
    message: 'Managing deliveries is smooth and efficient now.'
  },
  {
    name: 'Tanya Das',
    role: 'Customer',
    image: t4,
    message: 'Great service! My package arrived early.'
  },
  {
    name: 'Mohit Jain',
    role: 'Rider',
    image: t5,
    message: 'Flexible shifts and easy navigation make this job awesome.'
  },
  {
    name: 'Divya Kapoor',
    role: 'Customer',
    image: t6,
    message: 'Super easy to track everything. 10/10!'
  },
  {
    name: 'Sahil Mehta',
    role: 'Dispatcher',
    image: t7,
    message: 'We’ve reduced missed deliveries by 80%.'
  },
  {
    name: 'Priya Rao',
    role: 'Customer',
    image: t8,
    message: 'Loved the support and real-time delivery updates.'
  },
  {
    name: 'Ankit Roy',
    role: 'Rider',
    image: t9,
    message: 'Best rider experience I’ve had so far.'
  },
  {
    name: 'Sneha Kulkarni',
    role: 'Customer',
    image: t10,
    message: 'Intuitive interface and great customer support.'
  }
]

// Duplicate testimonials to create seamless infinite scroll
const repeatedTestimonials = [...baseTestimonials, ...baseTestimonials]
</script>

<style scoped>
@keyframes scroll {
  0% {
    transform: translateX(0%);
  }
  100% {
    transform: translateX(-50%);
  }
}
.animate-scroll {
  animation: scroll 50s linear infinite;
}
</style>
