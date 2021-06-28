<template>
  <div>
    <el-link disabled>默认链接</el-link>
    <el-link type="primary"
      disabled>主要链接
    </el-link>
    <el-link type="success"
      disabled>成功链接
    </el-link>
    <el-link type="warning"
      href="https://www.baidu.com"
      target
      :underline="false"
    >百度
    </el-link>
    <el-link type="danger"
      disabled>危险链接
    </el-link>
    <el-link type="info"
    >信息链接
    </el-link>
  </div>
</template>

<script>
export default {
  name: "Link"
}
</script>

<style scoped>

</style>
