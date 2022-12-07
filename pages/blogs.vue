<template>
  <main class="px-5 md:px-0 pt-4 md:pt-10">
    <h1 class="display-1-b md:display-3-b text-coolgray-800 mb-8">Blog</h1>
    <ContentList path="/blog" v-slot="{ list }">
      <CommonListBox :list="list"></CommonListBox>
    </ContentList>
  </main>
</template>
<script setup>
useHead({
  title: 'Blog | Whatamelon',
  meta: [
    { name: 'description', content: 'Thinkin in insomnia' }
  ],
  bodyAttrs: {
    class: 'blog-main'
  },
  script: [ { children: 'console.log(\'Hello world\')' } ]
});

</script>