<template>
  <main class="px-5 md:px-0 pt-4 md:pt-10">
    <h1 class="display-1-b md:display-3-b text-coolgray-800 mb-4">Blog</h1>
    <ContentList path="/blog" v-slot="{ list }">
      <NuxtLink
        v-for="article in list" 
        :key="article._path"
        :to="article._path"
      >
        <div class="w-full bg-coolgray-50 border border-solid border-coolgray-50 p-4 md:p-6 rounded-lg shadow hover:border-coolgray-600">
          <div class="flex justify-between">
            <h2 class="subhead-2-b md:display-1-b text-coolgray-800">{{ article.title }}</h2>
            <p class="body-long-2-m md:subhead-long-3-m text-coolgray-800">{{ dateSplit(article.createdAt) }}</p>
          </div>
          <p class="pt-2 body-long-2-m md:subhead-long-3-m text-coolgray-400">{{ article.description }}</p>
        </div>
      </NuxtLink>
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

const dateSplit = (date) => {
  return date.slice(0,10).replaceAll('-','.');
}
</script>