<template>
  <div
    :class="{
      'k-btn': true,
      'k-btn--primary': type === 'primary',
      'k-btn--success': type === 'success',
      'k-btn--danger': type === 'danger'
    }"
    @click="$emit('click')"
  >
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'KButton',
  props: {
    type: {
      type: String,
      default: ''
    }
  }
}
</script>

<style scoped>
.k-btn + .k-btn {
  margin-left: 8px;
}
.k-btn {
  display: inline-block;
  font-size: 14px;
  line-height: 1;
  padding: 8px 12px;
  border-radius: 4px;
  cursor: pointer;
}
.k-btn--primary {
  color: #fff;
  background-color: #409eff;
}
.k-btn--primary:hover {
  opacity: 0.6;
}
.k-btn--success {
  color: #fff;
  background-color: #67c23a;
}
.k-btn--success:hover {
  opacity: 0.6;
}
.k-btn--danger {
  color: #fff;
  background-color: #f56c6c;
}
.k-btn--danger:hover {
  opacity: 0.6;
}
</style>