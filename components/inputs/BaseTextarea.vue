<template>
  <div>
    <textarea
      :name="name"
      class="form-control form-control-lg font-14 fw-300"
      :class="{ 'is-invalid': form.errors.has(field) }"
      :rows="rows"
      :placeholder="placeholder"
      @input="handleInput"
      :value="value"
    />
    <has-error :form="form" :field="field"></has-error>
  </div>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      required: true
    },
    rows: {
      type: Number,
      default: 3
    },
    value: {
      type: String,
      default: ""
    },
    placeholder: {
      type: String,
      default: ""
    },
    form: {
      type: Object,
      required: true
    },
    field: {
      type: String,
      required: true
    }
  },
  methods: {
    handleInput(e) {
      this.$emit("input", e.target.value);
    }
  }
};
</script>

<style></style>
