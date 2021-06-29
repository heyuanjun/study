<template>
  <div id="app">
    <router-link :to="{name: 'Button'}">
      按钮组件
    </router-link>
    <br>
    <router-link :to="{name: 'Link'}">
      文字链接组件
    </router-link>
    <br>
    <router-link :to="{name: 'Layout'}">
      Layout 布局组件
    </router-link>
    <br>
    <router-link :to="{name: 'Container'}">
      Container 容器组件
    </router-link>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
</style>
