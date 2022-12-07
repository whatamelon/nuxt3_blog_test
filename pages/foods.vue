<template>
  <main class="px-5 md:px-0 pt-4 md:pt-10">
    <h1 class="display-1-b md:display-3-b text-coolgray-800 mb-8">Food</h1>
    <ContentList path="/food" v-slot="{ list }">
      <CommonListBox :list="list"></CommonListBox>
    </ContentList>
  </main>
</template>
<script setup>
useHead({
  title: 'Food | Whatamelon',
  meta: [
    { name: 'description', content: "There's three different happiness. Caffeine Nicotine Alcohol. Those things have in common. Food!" }
  ],
  bodyAttrs: {
    class: 'food-main'
  },
});

</script>