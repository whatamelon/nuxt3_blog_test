<template>
    <NuxtLink :to="data.to">
      <div class="w-full h-40 p-4 hover:underline text-center flex flex-col justify-center rounded-md border border-coolgray-400">
        <h3 class="subhead-2-b text-coolgray-800">{{ data.title }}</h3>
        <p class="body-2-m text-coolgray-400 pt-2">{{ data.body }}</p>
      </div>
    </NuxtLink>
</template>
<script setup>
defineProps({
  data: Object
})
</script>