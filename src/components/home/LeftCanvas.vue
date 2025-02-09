<template>
  <MultiCard class="flex flex-col gap-4 h-screen p-2 overflow-y-auto">
    <h2>
      What's New
    </h2>

    <SingleCard
        v-for="news in news_list" :key="news.id"
        class="border border-gray-200">
        <a :href="news.link" target="_blank">
          <TitleDescription>
            <template #title>
              {{ truncate(news.title,10) }}
            </template>
            <template #description>
              {{ truncate(news.description,15) }}
            </template>
          </TitleDescription>
        </a>
    </SingleCard>
  </MultiCard>
</template>

<script setup>
import MultiCard from '@/components/UI/MultiCard.vue';
import TitleDescription from '@/components/UI/TitleDescription.vue';
import SingleCard from '@/components/UI/SingleCard.vue';

function truncate(str,WordLimit){
  const words = str.split(' ');
  return words.length > WordLimit
    ? words.slice(0,WordLimit).join(" ") + ' ...'
    : str;
}

const news_list = [
  {
    id: 1,
    title: "Tech Giants Unveil AI Breakthrough",
    description: "Leading tech companies announced a new AI model that surpasses human-level performance in various tasks.",
    link: "https://www.google.com/search?q=tech+giants+ai+breakthrough"
  },
  {
    id: 2,
    title: "Global Markets React to Economic Policies",
    description: "Stock markets saw major fluctuations after new economic policies were introduced by global financial leaders.",
    link: "https://www.google.com/search?q=global+markets+economic+policies"
  },
  {
    id: 3,
    title: "Scientists Discover Earth-Like Exoplanet",
    description: "Astronomers have identified a new exoplanet with conditions that could support life, sparking excitement in the scientific community.",
    link: "https://www.google.com/search?q=earth-like+exoplanet+discovery"
  },
  {
    id: 4,
    title: "Major Breakthrough in Cancer Research",
    description: "Researchers have developed a new treatment that significantly improves survival rates in aggressive cancer cases.",
    link: "https://www.google.com/search?q=breakthrough+cancer+research"
  },
  {
    id: 5,
    title: "Electric Vehicle Sales Hit Record High",
    description: "EV adoption continues to rise as more consumers switch to sustainable transportation options.",
    link: "https://www.google.com/search?q=electric+vehicle+sales+record"
  },
  {
    id: 6,
    title: "Government Announces New Cybersecurity Measures",
    description: "Officials have introduced stricter cybersecurity protocols to combat rising cyber threats and data breaches.",
    link: "https://www.google.com/search?q=government+cybersecurity+measures"
  },
  {
    id: 7,
    title: "Historic Climate Agreement Signed",
    description: "World leaders have come together to sign a landmark agreement aimed at reducing global carbon emissions.",
    link: "https://www.google.com/search?q=historic+climate+agreement"
  },
  {
    id: 8,
    title: "Breakthrough in Renewable Energy Storage",
    description: "Scientists have developed a new battery technology that could revolutionize energy storage for solar and wind power.",
    link: "https://www.google.com/search?q=renewable+energy+storage+breakthrough"
  },
  {
    id: 9,
    title: "Tech Startups Raise Record Investments",
    description: "Tech startups have raised a record amount of investments this quarter, attracting interest from global venture capitalists.",
    link: "https://www.google.com/search?q=tech+startups+record+investment"
  },
  {
    id: 10,
    title: "Breakthrough in Quantum Computing",
    description: "A major advancement in quantum computing brings us closer to solving complex problems at unprecedented speeds.",
    link: "https://www.google.com/search?q=quantum+computing+breakthrough"
  }
];


</script>
