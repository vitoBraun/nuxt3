<script lang="ts">
export default {
  props: {
    label: String,
    name: String,
    value: String,
    type: String,
  },
  data() {
    return { internalValue: this.value, inputType: this.type || "text" };
  },
};
</script>

<template>
  <v-text-field
    v-bind:label="label"
    class="mt-4"
    v-bind:type="inputType"
    @input="$emit('update:modelValue', internalValue)"
    v-model="internalValue"
  />
</template>
