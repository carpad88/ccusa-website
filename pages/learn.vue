<script setup lang="ts">

</script>

<template>
  <div class="container">
    <header class="flex flex-col pt-36">
      <div class="mx-auto max-w-3xl py-20 text-center">
        <h1 class="mb-8 text-5xl font-bold">
          ¿Cómo funciona CCUSA?
        </h1>
        <p class="max-w-prose text-lg font-light leading-relaxed text-gray-400">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris est ipsum, volutpat id nisl tempor, auctor
          ultricies diam. Aliquam non metus libero. Donec in dolor non mi condimentum
        </p>
      </div>

      <div class="flex items-center justify-center">
        <img src="/video.png" alt="video" class="w-3/5">
      </div>
    </header>

    <main>
      <!-- start Reasons texts -->
      <section class="grid grid-cols-3 gap-12 pb-20 pt-32">
        <div class="p-4 text-center">
          <h3 class="mb-3 text-2xl font-bold">
            Calidad
          </h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris est ipsum, volutpat id nisl tempor, auctor
            ultricies diam. Aliquam non metus libero. Donec in dolor non mi condimentum
          </p>
        </div>
        <div class="p-4 text-center ">
          <h3 class="mb-3 text-2xl font-bold">
            Personalizado
          </h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris est ipsum, volutpat id nisl tempor, auctor
            ultricies diam. Aliquam non metus libero. Donec in dolor non mi condimentum
          </p>
        </div>
        <div class="p-4 text-center ">
          <h3 class="mb-3 text-2xl font-bold">
            Retorno
          </h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris est ipsum, volutpat id nisl tempor, auctor
            ultricies diam. Aliquam non metus libero. Donec in dolor non mi condimentum
          </p>
        </div>
      </section>
      <!-- end Reasons texts -->

      <!-- start Benefits -->
      <section class="py-20">
        <h2 class="mb-12 text-center text-4xl font-bold">
          Beneficios
        </h2>
        <div class="grid grid-cols-3 gap-20 ">
          <div
            v-for="item in [1, 2, 3, 4, 5, 6]"
            :key="item"
          >
            <h4 class="mb-4 text-2xl font-bold">
              Beneficio {{ item }}
            </h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris est ipsum, volutpat id nisl tempor, auctor
              ultricies diam. Aliquam non metus libero. Donec in dolor non mi condimentum
            </p>
          </div>
        </div>
      </section>
      <!-- end Benefits -->

      <!-- start Process -->
      <section class="py-20">
        <h2 class="mb-12 text-center text-4xl font-bold">
          Proceso
        </h2>
        <div class="grid grid-cols-4 gap-20 ">
          <div
            v-for="item in ['LLC', 'Compra', 'Rentabilidad', 'Patrimonio']"
            :key="item"
          >
            <h4 class="mb-4 text-2xl font-bold">
              {{ item }}
            </h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris est ipsum, volutpat id nisl tempor, auctor
              ultricies diam. Aliquam non metus libero. Donec in dolor non mi condimentum
            </p>
          </div>
        </div>
      </section>
      <!-- end Benefits -->

      <!-- start Contact -->
      <FormContact />
      <!-- end Contact -->

      <!-- start Blog carrousel -->
      <BlogCarrousel />
      <!-- end Blog carrousel -->
    </main>
  </div>
</template>
