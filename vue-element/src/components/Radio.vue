<template>
  <div>
    <el-radio v-model="sex"
      @change="changeSex()"
      border
      label="1">男
    </el-radio>
    <el-radio v-model="sex"
      @change="changeSex()"
      border
      label="0">女
    </el-radio>

    <h1>单选组</h1>
    <el-radio-group v-model="label">
      <el-radio v-for="v in items"
        @change="changeSex()"
        border
        :key="v.label"
        :label="v.label">
        {{ v.name }}
      </el-radio>
    </el-radio-group>
  </div>
</template>

<script>
export default {
  name: "Radio",
  data() {
    return {
      sex: '0',
      label: '0',
      items: [
        {name: '封灵档案', label: '0'},
        {name: '永劫无间', label: '1'},
        {name: '赛博朋克', label: '2'}
      ]
    }
  },
  methods: {
    changeSex() {
      console.log(this.label)
    }
  }

}
</script>

<style scoped>

</style>
