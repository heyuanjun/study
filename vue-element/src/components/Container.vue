<template>
  <div>
    <!--有 header 或者 footer 时，子元素会从上到下排列-->
    <el-container>
      <el-header>
        <span>我是标题</span>
      </el-header>
      <!--container 可以看作一个 row-->
      <el-container>
        <el-aside>
          我是侧边栏
        </el-aside>

        <el-main>
          我是内容
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
export default {
  name: "Container"
}
</script>

<style scoped>
.el-header, .el-footer {
  background-color: #B3C0D1;
  color: #333;
  text-align: center;
  line-height: 60px;
}

.el-aside {
  background-color: #D3DCE6;
  color: #333;
  text-align: center;
  line-height: 200px;
}

.el-main {
  background-color: #E9EEF3;
  color: #333;
  text-align: center;
  line-height: 160px;
}
</style>
