<template>
  <button class="px-2 py-1 bg-blue-600 rounded text-white" @click="handleClick">
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
