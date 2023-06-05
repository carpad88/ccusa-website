<script setup lang="ts">
const { getItems } = useDirectusItems()
const { data: posts } = await useAsyncData('posts',
  () => getItems({ collection: 'posts', params: { limit: 9 } }),
)
</script>

<template>
  <div>
    <main>
      <section class="mb-12 grid h-full grid-cols-[20rem_1fr] gap-8 pr-8">
        <aside class="h-full bg-gray-200 px-8 pt-20">
          <h2 class="text-2xl font-bold">
            Filtros
          </h2>
          <ul class="mt-12 space-y-4 text-xl font-medium">
            <li>Ciudad</li>
            <li>Recámaras</li>
            <li>Precio</li>
            <li>Entrega</li>
          </ul>
        </aside>
        <div class="pb-12">
          <header class="mt-20">
            <h1 class="mb-20 text-5xl font-bold">
              Casas en Huston <span class="text-3xl font-light text-gray-400">(500 resultados)</span>
            </h1>
          </header>
          <!-- start Post list -->
          <div class="grid grid-cols-3 gap-12 ">
            <article v-for="post in posts" :key="`post-${post.id}`">
              <nuxt-link :to="`/listings/${post.id}`" class="flex h-full flex-1 flex-col justify-center">
                <img src="/placeholder.png" alt="placeholder">
                <h1 class="mt-3 line-clamp-1 text-xl font-bold">
                  {{ post.title }}
                </h1>
                <p class="line-clamp-2 pr-4 text-sm font-light leading-relaxed text-gray-500">
                  {{ post.content }}
                </p>
              </nuxt-link>
            </article>
          </div>
        <!-- end Post list -->
        </div>
      </section>

      <!-- start Contact -->
      <FormContact />
    <!-- end Contact -->
    </main>
  </div>
</template>
