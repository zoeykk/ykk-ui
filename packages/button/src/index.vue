<template>
  <div class="btn" @click="$emit('click')">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'KButton'
}
</script>

<style scoped>
.btn {
  display: inline-block;
  height: 30px;
  line-height: 30px;
  padding: 0 8px;
  border: 1px solid #eee;
  border-radius: 4px;
  cursor: pointer;
}
.btn:hover {
  background-color: #41b883;
  color: #fff;
  border: 1px solid #41b883;
}
</style>