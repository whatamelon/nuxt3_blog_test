<template>
    <NuxtLink
    v-for="article in list" 
    :key="article._path"
    :to="article._path"
    >
    <div class="mb-4 w-full bg-coolgray-50 border border-solid border-coolgray-50 p-4 md:p-6 rounded-lg shadow hover:border-2 hover:border-coolgray-600">
        <div class="flex justify-between">
        <h2 class="subhead-2-b md:display-1-b text-coolgray-800">{{ article.title }}</h2>
        <p class="body-long-2-m md:subhead-long-3-m text-coolgray-800">{{ dateSplit(article.createdAt) }}</p>
        </div>
        <p class="pt-2 body-long-2-m md:subhead-long-3-m text-coolgray-400">{{ article.description }}</p>
    </div>
    </NuxtLink>
</template>
<script setup>
defineProps({
    list: Array
});

const dateSplit = (date) => {
  return date.slice(0,10).replaceAll('-','.');
}
</script>