<script setup lang="ts">
const team = ['Gringo', 'Maryfer', 'Paulis', 'Javier', 'Javier', 'Isra', 'Waldo', 'Cobos', 'Fernanda', 'Eder']
</script>

<template>
  <div class="container">
    <header class="flex flex-col pt-36">
      <div class="mx-auto max-w-3xl py-20 text-center">
        <h1 class="mb-8 text-5xl font-bold">
          ¿Quienes somos?
        </h1>
        <p class="max-w-prose text-lg font-light leading-relaxed text-gray-400">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris est ipsum, volutpat id nisl tempor, auctor
          ultricies diam. Aliquam non metus libero. Donec in dolor non mi condimentum
        </p>
      </div>
    </header>

    <main>
      <!-- start Team -->
      <section class="pb-20 pt-10">
        <h2 class="mb-12 text-center text-4xl font-bold">
          Nuestro equipo
        </h2>
        <div class="flex items-center justify-center gap-x-8 pb-20 pt-6">
          <div class="flex h-40 w-40 items-center justify-center rounded-full bg-gray-100">
            <Icon name="carbon:user" color="black" size="32" />
          </div>
          <div class="max-w-md">
            <p class="text-2xl font-bold">
              Carlos Fernandez de Castro
            </p>
            <p class="text-lg font-bold">
              International realtor / Founder
            </p>
            <p class="mt-8 font-light text-gray-400">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. A alias aliquam consequuntur cupiditate dicta
              dolorum exercitationem fugiat impedit.
            </p>
          </div>
        </div>
        <div class="mx-auto grid max-w-3xl grid-cols-5 gap-12">
          <div v-for="item in team" :key="item" class="flex flex-col items-center justify-center">
            <div class="flex h-28 w-28 items-center justify-center rounded-full bg-gray-100">
              <Icon name="carbon:user" color="black" size="32" />
            </div>
            <p class="mt-2">
              {{ item }}
            </p>
          </div>
        </div>
      </section>
      <!-- end Team -->

      <!-- start Partners -->
      <section class="pb-20 pt-10">
        <h2 class="mb-12 text-center text-4xl font-bold">
          Partners
        </h2>
        <div class="grid grid-cols-8 gap-4">
          <div
            v-for="item in [1, 2, 3, 4, 5, 6, 7, 8]" :key="item"
            class="flex items-center justify-center"
          >
            <div class="flex h-28 w-28 items-center justify-center rounded-full bg-gray-100">
              <Icon name="carbon:home" color="black" size="36" />
            </div>
          </div>
        </div>
      </section>
      <!-- end Partners -->

      <!-- start Contact -->
      <FormContact />
      <!-- end Contact -->

      <!-- start Blog carrousel -->
      <BlogCarrousel />
      <!-- end Blog carrousel -->
    </main>
  </div>
</template>
