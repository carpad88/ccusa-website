<script setup lang="ts">
const route = useRoute()

const { getItemById } = useDirectusItems()
const { data: post } = await useAsyncData('posts',
  () => getItemById({ collection: 'posts', id: route.params.id as string }),
)
</script>

<template>
  <div class="container">
    <header class="mx-auto mt-36 max-w-prose">
      <h1 class="mb-4 text-4xl font-bold">
        {{ post.title }}
      </h1>
      <p class="text-lg font-medium text-gray-400">
        {{ formatDate(post.date_created) }}
      </p>
      <div class="mt-8 h-80 w-full bg-cover bg-center" style="background-image: url('/placeholder.png')" />
    </header>

    <main>
      <div class="mx-auto my-20 max-w-prose" v-html="post.content" />

      <!-- start Blog carrousel -->
      <BlogCarrousel />
      <!-- end Blog carrousel -->

      <!-- start Contact -->
      <FormContact />
      <!-- end Contact -->
    </main>
  </div>
</template>
