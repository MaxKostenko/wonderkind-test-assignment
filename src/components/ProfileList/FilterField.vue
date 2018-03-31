<template>
  <div>
    <input
      type="text"
      :value="value"
      @input="filterChange"
    />
  </div>
</template>

<script>
  export default {
    name: 'filter-field',
    props: {
      value: {
        type: String,
      },
    },
    methods: {
      filterChange(event) {
       this.$emit('input', event.target.value);
      }
    }
  }
</script>
