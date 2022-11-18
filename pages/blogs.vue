<template>
  <div>
    <h1 class="text-3xl font-bold underline">
      This is Blog List Page!
    </h1>
  </div>
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
})
</script>