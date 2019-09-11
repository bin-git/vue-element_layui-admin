<!-- 模板组件，用于模拟不同路由下的组件显示 -->
<template>
  <el-card class="box-card">
    <div slot="header"
         class="clearfix">
      <span>{{$route.name}}</span>
      <el-button style="float: right; padding: 3px 0"
                 type="text">操作按钮</el-button>
    </div>
    <div class="text item">
      {{$route.name+' 内容 '}}
    </div>
  </el-card>
  <!-- 
  <div class="router-template">
    <div class="template-wrap">
      {{$route.name}}
    </div>
  </div> -->
</template>

<script>
export default {
  data() {
    return {};
  }
};
</script>
<style lang='scss'>
.box-card {
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05) !important;
}
.router-template {
  color: #000;
  font-size: 20px;
  font-weight: 700;
  height: 100%;
}
.template-wrap {
  height: 100%;
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
}
</style>
