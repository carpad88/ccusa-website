<script setup lang="ts">
</script>

<template>
  <main class="container">
    <h1 class="mt-36 text-6xl font-bold">
      Contactanos
    </h1>
    <div class="mb-20 grid grid-cols-[2fr_1fr] gap-20">
      <div class="">
        <p class="mt-4 max-w-prose">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium atque aut autem consequatur deleniti
          eum, excepturi, explicabo fugiat magnam mollitia neque nesciunt nisi placeat quo quod recusandae reiciendis
          vitae voluptates?
        </p>

        <div class="mt-24 space-y-1 text-gray-500">
          <p>
            333 333 3333
          </p>
          <p>
            my-email@bussiness.com
          </p>
          <p class="!mt-6">
            5th avenue, New York<br>
            10001, United States
          </p>
        </div>
      </div>
      <FormKit
        type="form" :actions="false" :classes="{ message: 'text-xs text-red-500' }"
      >
        <div class="w-full">
          <FormKit
            name="name"
            label="Nombre"
            validation="required"
            :classes="{
              outer: 'mb-6',
              label: 'block mb-1 text-sm',
              inner: 'border border-gray-400 rounded-lg mb-1 overflow-hidden focus-within:border-blue-500',
              input: 'w-full h-10 px-3 border-none text-base text-gray-700 placeholder-gray-400',
              message: 'text-xs text-red-500',
            }"
          />

          <FormKit
            type="tel"
            name="phone"
            label="Teléfono"
            validation="required"
            :classes="{
              outer: 'mb-6',
              label: 'block mb-1 text-sm',
              inner: 'border border-gray-400 rounded-lg mb-1 overflow-hidden focus-within:border-blue-500',
              input: 'w-full h-10 px-3 border-none text-base text-gray-700 placeholder-gray-400',
              message: 'text-xs text-red-500',
            }"
          />

          <FormKit
            type="email"
            name="email"
            label="Correo electrónico"
            validation="required|email"
            :classes="{
              outer: 'mb-6 col-span-2',
              label: 'block mb-1 text-sm',
              inner: 'border border-gray-400 rounded-lg mb-1 overflow-hidden focus-within:border-blue-500',
              input: 'w-full h-10 px-3 border-none text-base text-gray-700 placeholder-gray-400',
              message: 'text-xs text-red-500',
            }"
          />

          <FormKit
            type="select"
            label="Monto a invertir"
            name="amount"
            :options="['5 000', '10 000', '20 000']"
            :classes="{
              outer: 'mb-6',
              label: 'block mb-1 text-sm',
              inner: 'border border-gray-400 rounded-lg mb-1 overflow-hidden focus-within:border-blue-500',
              input: 'w-full h-10 px-3 border-none text-base text-gray-700 bg-white',
              help: 'text-xs text-gray-500',
              message: 'text-xs text-red-500',
            }"
          />

          <FormKit
            type="select"
            label="Inmediatez"
            name="immediately"
            placeholder="Select a class"
            :options="['3 meses', '6 meses', '1 año']"
            :classes="{
              outer: 'mb-6',
              label: 'block mb-1 text-sm',
              inner: 'border border-gray-400 rounded-lg mb-1 overflow-hidden focus-within:border-blue-500',
              input: 'w-full h-10 px-3 border-none text-base text-gray-700 bg-white',
              help: 'text-xs text-gray-500',
              message: 'text-xs text-red-500',
            }"
          />
        </div>

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

    <!-- start Blog carrousel -->
    <BlogCarrousel />
    <!-- end Blog carrousel -->
  </main>
</template>
