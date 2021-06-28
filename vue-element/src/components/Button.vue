<template>
  <div>
    <br>
    <el-row>
      <el-button>默认按钮</el-button>
      <el-button type="primary">主要按钮</el-button>
      <el-button type="success">成功按钮</el-button>
      <el-button type="info">信息按钮</el-button>
      <el-button type="warning">警告按钮</el-button>
      <el-button type="danger">危险按钮</el-button>
    </el-row>
    <br>

    <el-row>
      <!--如果只写属性，就是 plain=true 的简写-->
      <!--所有属性都是直接写在标签上-->
      <el-button plain>朴素按钮</el-button>
      <el-button type="primary"
        plain>主要按钮
      </el-button>
      <el-button type="success"
        plain>成功按钮
      </el-button>
      <el-button type="info"
        plain>信息按钮
      </el-button>
      <el-button type="warning"
        plain>警告按钮
      </el-button>
      <el-button type="danger"
        plain>危险按钮
      </el-button>
    </el-row>
    <br>

    <el-row>
      <el-button round>圆角按钮</el-button>
      <el-button type="primary"
        round>主要按钮
      </el-button>
      <el-button type="success"
        round>成功按钮
      </el-button>
      <el-button type="info"
        round>信息按钮
      </el-button>
      <el-button type="warning"
        round>警告按钮
      </el-button>
      <el-button type="danger"
        round>危险按钮
      </el-button>
    </el-row>
    <br>

    <el-row>
      <el-button icon="el-icon-search"
        circle></el-button>
      <el-button type="primary"
        icon="el-icon-edit"
        circle></el-button>
      <el-button type="success"
        icon="el-icon-check"
        circle></el-button>
      <el-button type="info"
        icon="el-icon-message"
        circle></el-button>
      <el-button type="warning"
        icon="el-icon-star-off"
        circle></el-button>
      <el-button type="danger"
        icon="el-icon-delete"
        circle></el-button>
    </el-row>
    <br>

    <!--按钮组（取消按钮之间的间隔，适合翻页组件）-->
    <el-button-group>
      <el-button type="primary"
        icon="el-icon-arrow-left">上一页
      </el-button>
      <el-button type="primary">下一页<i class="el-icon-arrow-right el-icon--right"></i></el-button>
    </el-button-group>
    <el-button-group>
      <el-button type="primary"
        icon="el-icon-edit"></el-button>
      <el-button type="primary"
        icon="el-icon-share"></el-button>
      <el-button type="primary"
        icon="el-icon-delete"></el-button>
    </el-button-group>
  </div>
</template>

<script>
export default {
  name: "Button"
}
</script>

<style scoped>

</style>
