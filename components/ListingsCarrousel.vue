<script setup lang="ts">

</script>

<template>
  <section class="mb-24 pt-10">
    <h2 class="mb-10 text-center text-4xl font-bold">
      Más casas en Huston
    </h2>
    <div class="grid grid-cols-3 gap-4 ">
      <article v-for="post in [1, 2, 3]" :key="`post-${post}`">
        <img src="/placeholder.png" alt="placeholder">
        <h1 class="mt-3 text-xl font-bold">
          Blog {{ post }}
        </h1>
        <p class="line-clamp-2 pr-4 text-sm font-light leading-relaxed text-gray-500">
          Desciption Lorem ipsum dolor sit amet, consectetur adipisicing elit. A dolore eos et id illo inventore
          iusto officia, quaerat quasi tempore. Accusantium adipisci, aliquam aspernatur assumenda expedita laborum
          nam quod suscipit?
        </p>
      </article>
    </div>
  </section>
</template>
