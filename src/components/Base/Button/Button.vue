<template>
  <button
    class="px-2 py-1 bg-blue-600 rounded text-white focus:outline-none focus:border-transparent focus:ring focus:ring-blue-400 focus:ring-opacity-75"
    @click="handleClick"
  >
    <slot />
  </button>
</template>

<script>
export default {
  name: "Button",
  methods: {
    handleClick() {
      this.$emit("onClick");
    }
  }
};
</script>

<style></style>
