<template>
    <div class="text-style">
      <h3>Shop Now →</h3>
    </div>
</template>

<script>
export default {
  name: 'ButtonComponent',
  props: {
    buttonColor: {
      type: String,
      default: '#3BB77E',
    },
  },
}
</script>

<style scoped>
.text-style{
  color: #FFFFFF;
  padding: 5px 10px;
  font-size: 12px;
  font-weight: bold;
  background-color: v-bind('buttonColor');
  width: fit-content;
  border-radius: 3px;
}
</style>
