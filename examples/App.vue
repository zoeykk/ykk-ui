<template>
  <div id="app">
    <div class="app-content">
      <div class="header">
        <div class="logo">YKK-UI</div>
        <div class="header-right">组件</div>
      </div>
      <div class="main">
        <div class="sidebar">
          <nav-side :data="navsData"></nav-side>
        </div>
        <div class="view page-container">
          <router-view></router-view>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import navSide from './components/menuCom'
import navsData from './router/routerCon.json'
export default {
  components: {
    navSide
  },
  data() {
    return {
      navsData
    }
  }
}
</script>
<style lang="scss" scoped>
$header-height: 64px;
html,
body {
  margin: 0;
}
.app-content {
  min-height: 100vh;
  width: 1140px;
  margin: 0 auto;
}
.header {
  box-sizing: border-box;
  height: $header-height;
  display: flex;
  border-bottom: 1px solid #eee;
  .logo {
    width: 200px;
    line-height: $header-height;
    text-align: center;
    font-size: 18px;
  }
  .header-right {
    flex: 1;
    line-height: $header-height;
  }
}
.main {
  display: flex;
}
.sidebar {
  min-height: calc(100vh - $header-height);
  box-sizing: border-box;
  width: 200px;
  padding: 0 8px;
}
.view {
  padding: 0 0 80px 0;
  height: calc(100% - 50px);
  width: calc(100% - 203px);
}
</style>
