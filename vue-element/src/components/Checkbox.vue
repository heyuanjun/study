<template>
  <!--直接上 复选框 组-->
  <el-checkbox-group v-model="checkList"
    :max="2"
    @change="changeCheckBox()">
    <el-checkbox v-for="v in options"
      border
      :style="{border: '1px solid #pink', padding: '5px'}"
      :key="v.label"
      :label="v.label">
      {{ v.name }}
    </el-checkbox>
  </el-checkbox-group>

</template>

<script>
export default {
  name: "Checkbox",
  data() {
    return {
      checkList: [],
      options: [
        {name: '封灵档案', label: '0'},
        {name: '永劫无间', label: '1'},
        {name: '赛博朋克', label: '2'},
        {name: '英雄联盟', label: '3'},
        {name: '绝地求生', label: '4'},
      ]
    }
  },
  methods: {
    changeCheckBox() {
      console.log(this.checkList)
    }
  }
}
</script>

<style scoped>

</style>
