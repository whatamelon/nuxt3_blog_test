<template>
  <div class="container mb-20 px-5 md:px-0">
    <div class="flex flex-col space-y-4 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-8 pt-8 mb-4 md:mb-8">
      <PartialsHomeBox :key="'Home_'+v.title" v-for="v in menuList" :data="v"></PartialsHomeBox>
    </div>
    <PartialsHomeBox :key="'Home_shuffle'" :data="menu2"></PartialsHomeBox>
  </div>
</template>
<script setup>
const menuList = useState('menuList', () => [
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
  title:'Shuffle',
  body:"Shuffle writings randomly",
  to:'/shuffles'
},
]);

const menu2 = useState('menu2');
menu2.value = {
  title: 'About',
  body:"Shorten Resume",
  to:'/about'
};

// const menu2 = useState('menu2', () => [{
//   title:'Shuffle',
//   body:"Shuffle writings randomly",
//   to:'/shuffles'
// }]);
</script>