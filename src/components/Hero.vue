<template>
  <div class="min-h-screen bg-gray-50/0">

    <!-- MAIN WRAPPER -->
    <div class="max-w-full mx-auto px-4 py-6">

      <!-- GRID -->
      <div class="grid grid-cols-1 lg:grid-cols-[20%_79%] gap-6">

        <!-- ================= LEFT SIDEBAR (20%) ================= -->
        <aside class="bg-white rounded-xl shadow-md p-4
         lg:sticky lg:top-6 h-fit space-y-6">

          <!-- IMAGE CARD TEMPLATE -->
          <div class="text-center">

            <!-- IMAGE WRAPPER -->
            <div class="mx-auto w-[180px] h-[240px]
             overflow-hidden rounded-lg
             bg-gray-100 shadow-sm">

              <img src="/president.jpg" alt="President of Senegal" class="w-full h-full object-cover object-center" />
            </div>

            <p class="mt-3 font-semibold text-sm">
              S.E.M Bassirou Diomaye Diakhar FAYE
            </p>
            <p class="text-xs text-gray-600">
              Président de la République du Sénégal
            </p>
          </div>

          <!-- MINISTER -->
          <div class="text-center">

            <div class="mx-auto w-[180px] h-[240px]
             overflow-hidden rounded-lg
             bg-gray-100 shadow-sm">

              <img src="/minister.png" alt="Minister of Foreign Affairs"
                class="w-full h-full object-cover object-center" />
            </div>

            <p class="mt-3 font-semibold text-sm">
              S.E.M Cheikh NIANG
            </p>
            <p class="text-xs text-gray-600">
              Ministre de l’Intégration africaine,<br>
              des Affaires étrangères et des Sénégalais de l’extérieur
            </p>
          </div>

          <!-- AMBASSADOR -->
          <div class="text-center">

            <div class="mx-auto w-[180px] h-[240px]
           overflow-hidden rounded-lg
           bg-gray-100 shadow-sm">

              <img src="/ambassador.jpeg" alt="Ambassador of Senegal to Rwanda" class="w-full h-full object-cover
             object-[50%_20%]
             scale-x-[-1]
             rotate-[0.5deg]" />
            </div>

            <p class="mt-3 font-semibold text-sm">
              S.E.M. Doudou SOW
            </p>
            <p class="text-xs text-gray-600">
              Ambassadeur de la République du Sénégal<br>
              en République du Rwanda
            </p>

          </div>


        </aside>


        <!-- ================= RIGHT CONTENT (80%) ================= -->
        <main class="bg-white rounded-xl shadow-md p-6">

          <!-- PAGE TITLE -->
          <h1 class="text-xl md:text-2xl font-bold mb-4">
            {{ pageTitle }}
          </h1>

          <!-- PAGE CONTENT -->
          <div class="text-gray-700 leading-relaxed space-y-4">
            <slot />
          </div>

        </main>

      </div>
    </div>

  </div>
</template>

<script>
export default {

}
</script>

<style></style>