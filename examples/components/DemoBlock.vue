<template>
  <div class="demo-block" :class="blockClass">
    <!-- 源码运行 -->
    <div class="source" :style="{ 'border-bottom': isExpanded ? '1px solid #eee' : '1px solid transparent' }">
      <slot name="source"></slot>
    </div>
    <!-- 源码 -->
    <div class="meta" ref="meta">
      <!-- 描述 -->
      <div class="description" v-if="$slots.default">
        <slot></slot>
      </div>
      <!-- 源码 -->
      <div class="highlight">
        <slot name="highlight"></slot>
      </div>
    </div>
    <!-- 源码 显示或者隐藏 -->
    <div class="demo-block-control" ref="control" :class="{ 'is-fixed': fixedControl }" @click="isExpanded = !isExpanded">
      <transition name="text-slide">
        <span>{{ controlText }}</span>
      </transition>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      isExpanded: false,
      fixedControl: false,
      scrollParent: null
    }
  },

  computed: {
    lang() {
      return this.$route.path.split('/')[1]
    },

    blockClass() {
      return `demo-${this.lang} demo-${this.$router.currentRoute.path.split('/').pop()}`
    },
    controlText() {
      return this.isExpanded ? '隐藏代码' : '显示代码'
    },
    codeArea() {
      return this.$el.getElementsByClassName('meta')[0]
    },
    codeAreaHeight() {
      if (this.$el.getElementsByClassName('description').length > 0) {
        return this.$el.getElementsByClassName('description')[0].clientHeight + this.$el.getElementsByClassName('highlight')[0].clientHeight + 20
      }
      return this.$el.getElementsByClassName('highlight')[0].clientHeight
    }
  },
  watch: {
    isExpanded(val) {
      this.codeArea.style.height = val ? `${this.codeAreaHeight + 1}px` : '0'
      if (!val) {
        this.fixedControl = false
        this.$refs.control.style.left = '0'
      }
    }
  }
}
</script>
<style lang="less">
.demo-block {
  margin-top: 8px;
  border: 1px solid #eee;
  border-radius: 4px;
  transition: 0.2s;
  overflow: hidden;
  .source {
    padding: 8px;
    // border-bottom: 1px solid #eee;
  }
  .meta {
    border-radius: 4px;
    overflow: hidden;
    height: 0;
    transition: height 0.2s;
  }

  .description {
    box-sizing: border-box;
    font-size: 14px;
    padding: 0 8px;
  }
  .demo-block-control {
    border-top: solid 1px #eee;
    height: 44px;
    box-sizing: border-box;
    background-color: #fff;
    text-align: center;
    color: #d3dce6;
    cursor: pointer;
    position: relative;

    &.is-fixed {
      position: fixed;
      bottom: 0;
      width: 868px;
    }

    i {
      font-size: 16px;
      line-height: 44px;
      transition: 0.3s;
      &.hovering {
        transform: translateX(-40px);
      }
    }

    > span {
      position: absolute;
      transform: translateX(-30px);
      font-size: 14px;
      line-height: 44px;
      transition: 0.3s;
      display: inline-block;
    }

    &:hover {
      color: #409eff;
    }

    & .text-slide-enter,
    & .text-slide-leave-active {
      opacity: 0;
      transform: translateX(10px);
    }

    .control-button {
      line-height: 26px;
      position: absolute;
      top: 0;
      right: 0;
      font-size: 14px;
      padding-left: 5px;
      padding-right: 25px;
    }
  }
}
</style>