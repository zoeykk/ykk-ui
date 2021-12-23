<template>
  <div class="btn" @click="$emit('click')">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'YkkButton'
}
</script>

<style scoped >
.btn {
  display: inline-block;
  height: 32px;
  line-height: 32px;
  padding: 0 8px;
  border: 1px solid #aaa;
  border-radius: 4px;
  cursor: pointer;
}
.btn:hover {
  background-color: #41b883;
  color: #fff;
  border: 1px solid #41b883;
}
</style>