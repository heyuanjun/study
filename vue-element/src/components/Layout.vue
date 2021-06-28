<template>
  <div>
    <!--el 表示一行，一行中，默认为 24 等份，超出自动换行-->
    <el-row>
      <el-col :span="6">我占 6 份</el-col>
      <el-col :span="6">我占 6 份</el-col>
      <el-col :span="6">我占 6 份</el-col>
      <el-col :span="6">我占 6 份</el-col>
    </el-row>

    <!--el 表示一行，一行中，默认为 24 等份，超出自动换行-->
    <el-row>
      <!--offset 表示从从第几份开始 -->
      <el-col :span="6" :offset="2">我占 6 份</el-col>
      <el-col :span="6">我占 6 份</el-col>
      <el-col :span="6">我占 6 份</el-col>
      <el-col :span="6">我占 6 份</el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: "Layout"
}
</script>

<style scoped>

</style>
