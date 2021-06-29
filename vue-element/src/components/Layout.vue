<template>
  <div>
    <!--el 表示一行，一行中，默认为 24 等份，超出自动换行-->
    <el-row>
      <el-col :span="6"
        :style="{border: '1px solid hotpink'}">我占 6 份
      </el-col>
      <el-col :span="6"
        :style="{border: '1px solid hotpink'}">我占 6 份
      </el-col>
      <el-col :span="6"
        :style="{border: '1px solid hotpink'}">我占 6 份
      </el-col>
      <el-col :span="6"
        :style="{border: '1px solid hotpink'}">我占 6 份
      </el-col>
    </el-row>
    <br>

    <!--el 表示一行，一行中，默认为 24 等份，超出自动换行-->
    <el-row>
      <!--offset 表示从从第几份开始 -->
      <el-col :span="6"
        :offset="3"
        :style="{border: '1px solid hotpink'}">我占 6 份
      </el-col>
      <!--使用 push 相当于用了浮动，会叠加-->
      <el-col :span="6"
        :push="2"
        :style="{border: '1px solid hotpink'}">我占 6 份
      </el-col>
      <el-col :span="6"
        :style="{border: '1px solid hotpink'}">我占 6 份
      </el-col>
      <el-col :span="6"
        :style="{border: '1px solid hotpink'}">我占 6 份
      </el-col>
    </el-row>
    <br>

    <!-- gutter 是直接在 col 上增加 style -->
    <!-- 所以我们的自定义样式不能直接加到 el-col 上，不然会引起重叠 -->
    <el-row :gutter="30">
      <el-col :span="6">
        <div class="col-border">
          我占 6 份
        </div>
      </el-col>
      <el-col :span="6">
        <div class="col-border">
          我占 6 份
        </div>
      </el-col>
      <el-col :span="6">
        <div class="col-border">
          我占 6 份
        </div>
      </el-col>
      <el-col :span="6">
        <div class="col-border">
          我占 6 份
        </div>
      </el-col>
    </el-row>
    <br>

    <el-row type="flex" justify="space-around">
      <el-col :span="4">
        <div class="col-border">
          我占 4 份
        </div>
      </el-col>
      <el-col :span="4">
        <div class="col-border">
          我占 4 份
        </div>
      </el-col>
      <el-col :span="4">
        <div class="col-border">
          我占 4 份
        </div>
      </el-col>
      <el-col :span="4">
        <div class="col-border">
          我占 4 份
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: "Layout"
}
</script>

<style scoped>
.col-border {
  border: 1px solid hotpink
}
</style>
