<script setup lang="ts">
const { getItems } = useDirectusItems()
const { data: posts } = await useAsyncData('posts', () => getItems({ collection: 'posts' }))
</script>

<template>
  <div class="container">
    <header class="mt-36">
      <h1 class="mb-8 text-5xl font-bold">
        Blog
      </h1>
      <div class="flex items-center justify-between pb-24 pt-12">
        <p class="max-w-prose text-lg font-light leading-relaxed text-gray-600">
          Suscríbete y mantente al tanto de tips de inversión y eventos
        </p>

        <FormKit
          type="form" :actions="false" :incomplete-message="false" name="newsletter"
        >
          <FormKit
            type="email"
            name="email"
            validation="required|email"
            :classes="{
              label: 'block text-sm',
              inner: 'border border-gray-400 rounded-md mb-1 overflow-hidden focus-within:border-blue-500',
              input: 'w-full h-10 px-3 border-none text-base text-gray-700 placeholder-gray-400',
              message: 'text-xs text-red-500',
            }"
          />
          <FormKit
            type="submit"
            label="Enviar"
            :classes="{
              outer: 'rounded-full mb-1 bg-gray-200 inline-block px-6 text-base text-gray-700 font-bold hover:bg-gray-300',
              label: 'block mb-1 text-sm',
              inner: 'max-w-md border border-gray-400 rounded-lg mb-1 overflow-hidden focus-within:border-blue-500',
              input: 'w-full h-10 px-3 border-none text-base text-gray-700 placeholder-gray-400',
            }"
          />
        </FormKit>
      </div>
    </header>

    <main v-if="posts.length" class="border-t-2">
      <!-- start Feature post -->
      <article class="my-20 grid h-72 grid-cols-2 gap-x-12">
        <div class="bg-cover bg-center" style="background-image: url('/placeholder.png')" />
        <nuxt-link :to="`/blog/${posts[0].id}`" class="group flex flex-col justify-between">
          <div>
            <h1 class="mb-4 text-4xl font-bold group-hover:text-indigo-700">
              {{ posts[0].title }}
            </h1>

            <p class="max-w-prose font-light leading-relaxed text-gray-600 group-hover:text-indigo-800">
              {{ posts[0].content }}
            </p>
          </div>

          <p class="text-lg font-medium text-gray-400">
            {{ formatDate(posts[0].date_created) }}
          </p>
        </nuxt-link>
      </article>
      <!-- end Feature post -->

      <!-- start Post list -->
      <section v-if="posts.length" class="my-24 grid grid-cols-2 gap-8">
        <article
          v-for="post in posts" :key="post.id"
          class="group flex cursor-pointer items-center gap-4 transition-all hover:translate-x-3 hover:shadow"
        >
          <div class="h-32 w-32 bg-cover bg-center" style="background-image: url('/placeholder.png')" />
          <nuxt-link :to="`/blog/${post.id}`" class="flex h-full flex-1 flex-col justify-center">
            <h1 class="mb-1 text-xl font-bold group-hover:text-gray-500">
              {{ post.title }}
            </h1>
            <p class="font-light text-gray-400">
              {{ formatDate(post.date_created) }}
            </p>
          </nuxt-link>
        </article>
      </section>
      <!-- end Post list -->

      <!-- start Contact -->
      <FormContact />
      <!-- end Contact -->
    </main>
  </div>
</template>

<style>
form[name="newsletter"] {
  @apply space-x-6 flex flex-row items-start justify-center;
}
</style>
