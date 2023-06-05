<script setup lang="ts">

</script>

<template>
  <div>
    <header class="flex min-h-[35rem] items-center bg-gray-100">
      <div class="container">
        <div class="max-w-xl">
          <h1 class="mb-4 text-6xl font-bold">
            La manera más fácil de invertir
          </h1>
          <p class="text-lg font-light text-gray-500">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris est ipsum, volutpat id nisl tempor, auctor
            ultricies diam. Aliquam non metus libero. Donec in dolor non mi condimentum
          </p>
        </div>
      </div>
    </header>

    <main class="container px-8">
      <!-- start Reasons texts -->
      <section class="grid grid-cols-3 gap-12 py-20">
        <div class="p-4 text-center ">
          <h3 class="mb-3 text-3xl font-bold">
            Invierte
          </h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris est ipsum, volutpat id nisl tempor, auctor
            ultricies diam. Aliquam non metus libero. Donec in dolor non mi condimentum
          </p>
        </div>
        <div class="p-4 text-center ">
          <h3 class="mb-3 text-3xl font-bold">
            Vacaciona
          </h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris est ipsum, volutpat id nisl tempor, auctor
            ultricies diam. Aliquam non metus libero. Donec in dolor non mi condimentum
          </p>
        </div>
        <div class="p-4 text-center ">
          <h3 class="mb-3 text-3xl font-bold">
            Vive
          </h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris est ipsum, volutpat id nisl tempor, auctor
            ultricies diam. Aliquam non metus libero. Donec in dolor non mi condimentum
          </p>
        </div>
      </section>
      <!-- end Reasons texts -->

      <!-- start States cards -->
      <section class="py-20">
        <h2 class="mb-10 text-center text-4xl font-bold">
          Estados con mejor rentabilidad
        </h2>
        <div class="grid grid-cols-3 gap-8 ">
          <article v-for="state in ['California', 'Texas', 'Florida']" :key="state">
            <img src="/placeholder.png" alt="placeholder">
            <h1 class="mt-3 text-center text-2xl font-bold">
              {{ state }}
            </h1>
          </article>
        </div>
      </section>
      <!-- end States cards -->

      <!-- start Why invert video -->
      <section class="grid grid-cols-2 items-center gap-8 py-20">
        <div class="sm:pr-8">
          <h2 class="mb-8 max-w-sm text-4xl font-bold">
            ¿Por qué invertir en inmuebles en USA?
          </h2>
          <p class="text-lg font-light  text-gray-500">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris est ipsum, volutpat id nisl tempor, auctor
            ultricies diam. Aliquam non metus libero. Donec in dolor non mi condimentum egestas ut eu enim
          </p>
        </div>
        <img src="/video.png" alt="placeholder">
      </section>
      <!-- end Why invert video -->

      <!-- start TOP 3 -->
      <section class="py-20">
        <h2 class="mb-10 text-center text-4xl font-bold">
          TOP 3 desarrollos en USA
        </h2>
        <div class="grid grid-cols-3 gap-12 ">
          <article
            v-for="(item, index) in ['Villas Marbella', 'The Woodlands', 'David\'s ranch']"
            :key="index"
          >
            <img src="/placeholder.png" alt="placeholder">
            <h1 class="mt-3 text-center text-2xl font-bold">
              {{ item }}
            </h1>
          </article>
        </div>
      </section>
      <!-- end TOP 3 -->

      <!-- start Contact -->
      <FormContact />
      <!-- end Contact -->

      <!-- start Blog carrousel -->
      <BlogCarrousel />
      <!-- end Blog carrousel -->
    </main>
  </div>
</template>
