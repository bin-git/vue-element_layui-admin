<template>
  <div class="el-menu-wrapper">
    <div class="ui-admin-logo">
      <span v-if="!isCollapse">elementAdmin-demo</span>
      <span v-else
            class="logo-img"></span>
    </div>
    <el-menu :default-active="$route.path"
             background-color="#20222A"
             text-color="rgba(255,255,255,.7)"
             active-text-color="#FFF"
             :collapse="isCollapse"
             :unique-opened="true"
             router>
      <nav-menu :navMenus="menu" />
    </el-menu>
  </div>
</template>

<script>
import { mapState, mapMutations, mapActions } from "vuex";
import NavMenu from "./NavMenu.vue";

export default {
  name: "Menu",
  data() {
    return {
      menu: [
        {
          route: "/",
          text: "首页",
          id: 1,
          leaf: true
        },
        {
          route: "",
          text: "用户管理",
          id: 2,
          leaf: false,
          children: [
            {
              route: "",
              text: "用户详情-1",
              id: 3,
              leaf: false,
              children: [
                {
                  route: "/userInfo-1-1",
                  text: "用户详情-1-1",
                  id: 4,
                  leaf: true
                },
                {
                  route: "/userInfo-1-2",
                  text: "用户详情-1-2",
                  id: 5,
                  leaf: true
                }
              ]
            },
            {
              route: "/userInfo",
              text: "用户详情-2",
              id: 6,
              leaf: false,
              children: [
                {
                  route: "/userInfo-2-1",
                  text: "用户详情-2-1",
                  id: 7,
                  leaf: true
                },
                {
                  route: "/userInfo-2-2",
                  text: "用户详情-2-2",
                  id: 8,
                  leaf: true
                }
              ]
            },
            {
              route: "/userInfo",
              text: "用户详情-3",
              id: 9,
              leaf: false,
              children: [
                {
                  route: "/userInfo-3-1",
                  text: "用户详情-3-1",
                  id: 10,
                  leaf: true
                },
                {
                  route: "/userInfo-3-2",
                  text: "用户详情-3-2",
                  id: 11,
                  leaf: true
                }
              ]
            }
          ]
        },
        {
          route: "/psd",
          text: "密码管理",
          id: 12,
          leaf: true
        },
        {
          route: "/salary",
          text: "工资管理",
          id: 13,
          leaf: true
        },
        {
          route: "/attendence",
          text: "考勤管理",
          id: 14,
          leaf: true
        },
        {
          route: "/perform",
          text: "绩效管理",
          id: 15,
          leaf: true
        },
        {
          route: "/admin",
          text: "系统管理",
          id: 16,
          leaf: true
        },
        {
          route: "/feedback",
          text: "意见反馈",
          id: 17,
          leaf: true
        }
      ],
      menus: []
    };
  },
  props: {
    isCollapse: Boolean
  },
  components: {
    NavMenu
  },
  computed: {
    ...mapState("menus", ["homePage"])
  },
  methods: {
    ...mapMutations("menus", ["add_tabs", "set_active_index"]),
    ...mapActions("menus", ["close_else_label", "close_all_label"]),
    // 获取菜单栏数据
    getMenu() {
      //   Request.get("framework/menu/loadMenuTreeByIdentityId.do", null, re => {
      //     if (re.data.SUCCESS) {
      //       this.menus = re.data.DATA[0].children;
      //     } else {
      //       this.$message.error(re.data.DESC);
      //     }
      //   });
    },
    tabsInit() {
      let _homePage = this.homePage;
      // 刷新时以当前路由做为tab加入tabs
      //   if (this.$route.path !== _homePage.route) {
      if (this.$route.path !== "/" && this.$route.path !== _homePage.route) {
        this.add_tabs(_homePage);
        this.add_tabs({
          route: this.$route.path,
          name: this.$route.name
        });
        this.set_active_index(this.$route.path);
      } else {
        // this.add_tabs(_homePage);
        // this.$router.push(_homePage.route);
        // this.set_active_index(this.$route.path);
        this.close_all_label();
        this.$router.push({ path: _homePage.route });
      }
    }
  },
  mounted() {
    this.getMenu();
    this.tabsInit();
  }
};
</script>
<style lang='scss' scoped>
.el-menu {
  border: 0;
}
.el-aside .el-submenu__title,
.el-aside .el-menu-item {
  // color: rgba(255, 255, 255, 0.7) !important;
}
.el-aside .el-submenu__title:hover,
.el-aside .el-menu-item:hover,
.el-aside .el-submenu__title:hover i,
.el-aside .el-menu-item:hover i {
  transition: border-color 0.3s, background-color 0.3s, color 0.3s;
  color: #fff !important;
}
.el-aside .el-submenu {
  &.is-opened {
    &.is-active {
      .el-submenu__title {
        background: #000 !important;
      }
    }
    > ul li {
      background: #000 !important;
    }
    > .el-submenu__title {
      > i {
        color: #ffffff !important;
      }
      color: #ffffff !important;
    }
    .el-submenu__title {
      background: #000 !important;
    }
    > .el-menu.el-menu--inline {
      background-color: rgba(0, 0, 0, 0.3);
    }
  }
}

.el-menu--collapse {
  > .navMenu {
    > .el-submenu {
      > .el-submenu__title span {
        height: 0;
        width: 0;
        overflow: hidden;
        visibility: hidden;
        display: inline-block;
      }
    }
  }
}
</style>
