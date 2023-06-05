<script setup lang="ts">
const route = useRoute()

const { getItemById } = useDirectusItems()
const { data: post } = await useAsyncData('posts',
  () => getItemById({ collection: 'posts', id: route.params.id as string }),
)
</script>

<template>
  <div class="container">
    <header class="mt-36">
      <h1 class="mb-4 text-4xl font-bold">
        {{ post.title }}
      </h1>
      <div class="mt-12 grid h-[30rem] grid-cols-4 grid-rows-2 gap-4">
        <div
          class="col-span-2 row-span-2 w-full bg-cover bg-center"
          style="background-image: url('/placeholder.png')"
        />
        <div class="w-full bg-cover bg-center" style="background-image: url('/placeholder.png')" />
        <div class="w-full bg-cover bg-center" style="background-image: url('/placeholder.png')" />
        <div class="w-full bg-cover bg-center" style="background-image: url('/placeholder.png')" />
        <div class="w-full bg-cover bg-center" style="background-image: url('/placeholder.png')" />
      </div>
    </header>

    <main>
      <!-- start Details -->
      <section class="my-20 grid grid-cols-[2fr_1fr]">
        <div class="max-w-prose space-y-6">
          <h2 class="mb-4 text-4xl font-bold">
            USD $300,000
          </h2>
          <p class="mb-4 text-lg font-light leading-relaxed text-gray-500">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum justo mauris, maximus id interdum eget,
            pharetra vitae arcu. Nulla eros nisi, malesuada non mattis at, ornare quis ipsum. Suspendisse potenti. Nunc
            rutrum, metus ac mollis egestas, ligula ipsum convallis ipsum, non pellentesque mi ipsum vitae ex. Aliquam
            nec urna egestas, faucibus nulla eu, consectetur enim. Curabitur vel fringilla massa. Proin accumsan nulla
            ut sem placerat finibus.
          </p>

          <div class="w-full h-80 bg-cover bg-center" style="background-image: url('/placeholder.png')" />

          <p class="text-lg font-light leading-relaxed text-gray-500">
            Nulla vel lacus a ligula viverra scelerisque non et felis. Vestibulum ante ipsum primis in faucibus orci
            luctus et ultrices posuere cubilia curae; Cras pellentesque cursus facilisis. Sed sem erat, ornare vitae
            tristique sed, consectetur at nulla. Nullam est erat, consectetur nec arcu nec, fermentum placerat neque.
            Sed dignissim lectus sed mi ornare consequat. Morbi diam diam, scelerisque non gravida vel, dictum sit amet
            mauris. Donec consectetur tristique consectetur. Nulla ornare neque sem, sed faucibus eros luctus ac.
            Curabitur sit amet mattis elit, id tincidunt magna. Praesent accumsan arcu rhoncus felis porttitor, sed
            laoreet tortor semper. Donec interdum, risus sit amet elementum ultricies, nulla augue pulvinar elit, eu
            elementum massa felis vel justo.
          </p>

          <div class="w-full h-80 bg-cover bg-center" style="background-image: url('/placeholder.png')" />
        </div>
        <aside class="border-2 p-6">
          <h2 class="mb-12 text-2xl font-bold">
            Agenda una cita con un asesor
          </h2>
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
        </aside>
      </section>
      <!-- end Details -->

      <!-- start Blog carrousel -->
      <ListingsCarrousel />
      <!-- end Blog carrousel -->

      <!-- start Contact -->
      <FormContact />
      <!-- end Contact -->
    </main>
  </div>
</template>
