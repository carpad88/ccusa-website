<script setup lang="ts">

</script>

<template>
  <section class="flex flex-col items-center py-20">
    <h2 class="mb-10 text-center text-4xl font-bold">
      Contáctanos
    </h2>
    <p class="mb-12 max-w-prose text-center">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab accusantium alias assumenda doloremque eligendi
      eveniet expedita facilis, illo ipsa ipsam maxime minus nam non possimus, quaerat saepe sit ut, voluptates.
    </p>
    <FormKit
      type="form" :actions="false" :classes="{ message: 'text-xs text-red-500' }"
    >
      <div class="grid w-full grid-cols-2 gap-x-12">
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
            inner: 'max-w-md border border-gray-400 rounded-lg mb-1 overflow-hidden focus-within:border-blue-500',
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
            inner: 'max-w-md border border-gray-400 rounded-lg mb-1 overflow-hidden focus-within:border-blue-500',
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
            inner: 'max-w-md border border-gray-400 rounded-lg mb-1 overflow-hidden focus-within:border-blue-500',
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
  </section>
</template>

<style>
.formkit-form {
  @apply flex flex-col items-end;
}
</style>
