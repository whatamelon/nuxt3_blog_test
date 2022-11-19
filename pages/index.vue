<template>
  <div class="px-5 md:px-0 pt-8 md:pt-20 md:pb-96">
    <div class="flex flex-col space-y-4 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-8 mb-4 md:mb-8">
      <PartialsHomeBox :key="'Home_'+v.title" v-for="v in menuList" :data="v"></PartialsHomeBox>
    </div>
  </div>
</template>
<script setup>
const menuList = [
  {
    title: 'Blog',
    body:"Thinkin' in insomnia",
    to:'/blogs'
  },
  {
    title: 'Dev',
    body:"Every step's record.<br/>Being write more good Code than before,,,",
    to:'/devs'
  },
  {
    title:'Food',
    body:"There's three different happiness. Caffeine Nicotine Alcohol. Those things have in common. Food!",
    to:'/foods'
  },
  {
    title: 'About',
    body:"Shorten Resume",
    to:'/about'
  },
];
</script>