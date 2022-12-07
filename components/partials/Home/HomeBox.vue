<template>
    <NuxtLink :to="data.to">
      <div class="w-full h-40 p-4 text-center flex flex-col justify-center rounded-md border border-solid border-coolgray-400 hover:border-2 hover:border-coolgray-800">
        <h3 class="subhead-2-b text-coolgray-800">{{ data.title }}</h3>
        <p class="body-long-2-m text-coolgray-400 pt-2">{{ data.body }}</p>
      </div>
    </NuxtLink>
</template>
<script setup>
defineProps({
  data: Object
})
</script>