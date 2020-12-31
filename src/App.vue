<template>
  <div>
    <header class="p-4 bg-gray-800 flex items-baseline space-x-8">
      <h1 class="text-3xl text-gray-50">Mistify</h1>
      <nav class="flex space-x-2 text-gray-50">
        <router-link to="/">Home</router-link>
        <router-link to="/about">About</router-link>
      </nav>
    </header>
    <main class="container mx-auto mt-4 ">
      <router-view />
    </main>
  </div>
</template>

<style></style>
