<template>
  <div class="el-container-wrapper">
    <div :class="[this.$store.state.isCollapse?'el-left-container el-closeMenu':'el-left-container el-openMenu']">
      <left-nav />
    </div>
    <el-container class="el-right-container">
      <el-header class="el-header-wrapper">
        <top-bar />
      </el-header>
      <el-main class="el-main-wrapper">
        <div class="el-tabs-tools-wrapper">
          <el-dropdown @command="close_label">
            <span class="el-dropdown-link">
              <i class="el-icon-arrow-down el-icon--right"></i>
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item command="3">关闭当前标签页</el-dropdown-item>
              <el-dropdown-item command="1">关闭其它标签页</el-dropdown-item>
              <el-dropdown-item command="2"
                                divided>关闭全部标签页</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>

        </div>
        <right-tabs />

      </el-main>
      <!-- <el-footer>Footer</el-footer> -->
    </el-container>
  </div>
</template>

<script>
import { mapState, mapActions, mapMutations } from "vuex";
import LeftNav from "@/components/adminHome/LeftNav.vue";
import TopBar from "@/components/adminHome/TopBar.vue";
import RightTabs from "@/components/adminHome/RightTabs.vue";
export default {
  name: "Main",
  components: {
    LeftNav,
    TopBar,
    RightTabs
  },
  data: function() {
    return {
      title: "内部信息化-企业管理员",
      treedata: null,
      defaultProps: {
        children: "children",
        label: "text"
      },
      isCollapse: false
    };
  },
  computed: {
    ...mapState("menus", ["homePage", "options", "activeIndex"])
  },
  methods: {
    ...mapMutations("menus", ["delete_tabs", "set_active_index"]),
    ...mapActions("menus", ["close_else_label", "close_all_label"]),
    /**
     * type
     *  1 关闭其他页面
     *  2 关闭所有页面
     *  3 关闭当前页面
     */
    close_label(type) {
      let __homePage = this.homePage;
      let _targetName = this.$route.path;
      switch (type) {
        case "1":
          this.close_else_label({
            route: this.$route.path,
            name: this.$route.name
          });
          break;
        case "2":
          this.close_all_label();
          this.$router.push({ path: __homePage.route });
          break;
        case "3":
          this.delete_tabs(_targetName);

          if (this.activeIndex === _targetName) {
            // 设置当前激活的路由
            if (this.options && this.options.length > 1) {
              this.set_active_index(
                this.options[this.options.length - 1].route
              );
              this.$router.push({ path: this.activeIndex });
            } else {
              this.$router.push({ path: __homePage.route });
            }
          }
      }
    },
    scaling() {
      this.isCollapse = !this.isCollapse;
    },
    loginOut: function() {},
    handleNodeClick(data) {
      alert(data.attributes.PATH);
    }
  },
  mounted: function() {
    //测试
    // if (this.$store.state.isJumpLogin) {
    //   this.$router.push({ name: "登陆" });
    //   //   window.location.href = "./login";
    // }
    // this.$request.get(
    //   'framework/menu/loadMenuTreeByIdentityId.do',
    //   null,
    //   re => {
    //     if (re.data.SUCCESS) {
    //       this.treedata = re.data.DATA
    //     } else {
    //       this.$message.error(re.data.DESC)
    //     }
    //   }
    // )
    // this.$router.push({ path: '/welcome' })
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" >
.el-header-wrapper {
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  height: 50px !important;
  padding: 0;
  font-size: 14px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
  border-bottom: 1px solid #f2f2f2;
  box-sizing: border-box;
  background-color: #fff;
}
.el-main-wrapper {
  position: relative;
  padding: 0;
  > .el-tabs-tools-wrapper {
    span {
      > i {
        margin-left: 0;
      }
      display: block;
      width: 100%;
      height: 100%;
      font-size: 18px;
    }
    > .el-dropdown {
      width: 100%;
      height: 100%;
      cursor: pointer;
    }
    &:hover {
      background: #f2f2f2;
    }
    display: block;
    width: 40px;
    height: 40px;
    position: absolute;
    top: 0;
    right: 0;
    box-sizing: border-box;
    z-index: 999;
    line-height: 40px;
    text-align: center;
    transition: all 0.3s;
    -webkit-transition: all 0.3s;
  }
}
</style>
