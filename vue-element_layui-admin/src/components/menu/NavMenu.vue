<template>
  <div class="navMenu">
    <template v-for="navMenu in navMenus">
      <!-- 最后一级菜单 -->
      <el-menu-item v-if="navMenu.leaf"
                    :key="navMenu.id"
                    :index="navMenu.route"
                    :route="navMenu.route">
        <i :class="navMenu.icon?navMenu.icon:'el-icon-message'"></i>
        <span slot="title">{{navMenu.text}}</span>
      </el-menu-item>

      <!-- 此菜单下还有子菜单 -->
      <el-submenu v-if="!navMenu.leaf"
                  :key="navMenu.id"
                  :index="JSON.stringify(navMenu.id)">
        <template slot="title">
          <i :class="navMenu.icon?navMenu.icon:'el-icon-message'"></i>
          <span> {{navMenu.text}}</span>
        </template>
        <!-- 递归 -->
        <nav-menu :navMenus="navMenu.children" />
      </el-submenu>
    </template>
  </div>
</template>

<script>
export default {
  name: "NavMenu",
  props: {
    navMenus: Array
  },
  data() {
    return {};
  }
};
</script>

<style scoped>
</style>
