<template>
  <button
    class="px-2 py-1 bg-blue-600 rounded text-white focus:outline-none focus:border-transparent focus:ring focus:ring-blue-400 focus:ring-opacity-75"
    @click="handleClick"
  >
    <!-- @slot Default to label prop -->
    <slot>{{ label }}</slot>
  </button>
</template>

<script>
export default {
  name: "Button",
  props: {
    /**
     * Model example
     */
    label: {
      type: String,
      default: "Label"
    }
  },
  methods: {
    handleClick() {
      /**
       * Passthrough click event
       * @type {Event}
       */
      this.$emit("onClick");
    }
  }
};
</script>

<style></style>
