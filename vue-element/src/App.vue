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
    <br>
    <router-link :to="{name: 'Radio'}">
      单选按钮 组件
    </router-link>
    <br>
    <router-link :to="{name: 'Checkbox'}">
      复选框 组件
    </router-link>
    <br>
    <a id='idMsg' @click="msg='hello world'">点我测试{{msg}}</a>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      msg: '我是 msg'
    }
  },
  beforeUpdate() {
    console.log(this.msg)
    console.log(document.getElementById('idMsg').innerText)
  },
  updated() {
    console.log(this.msg)
    console.log(document.getElementById('idMsg').innerText)
  }
}
</script>

<style>
</style>
