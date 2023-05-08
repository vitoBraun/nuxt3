<script lang="ts">
export default {
  name: "TextField",
  props: {
    label: String,
    name: String,
    value: String,
    type: String,
  },
  data() {
    return { internalValue: this.value, inputType: this.type || "text" };
  },
  watch: {
    internalValue(newValue) {
      this.$emit("update:value", newValue);
    },
    value(newValue) {
      this.internalValue = newValue;
    },
  },
};
</script>

<template>
  <div class="form-group">
    <label for="formGroupExampleInput2">{{ label }}</label>
    <input
      v-bind:type="inputType"
      class="form-control"
      id="formGroupExampleInput2"
      v-model="internalValue"
    />
  </div>
</template>
