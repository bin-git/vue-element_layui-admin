
<template>
  <el-tabs v-model="activeIndex"
           @tab-click="tabClick"
           @tab-remove="closeTab"
           v-if="options.length"
           type="card"
           class="content-body el-item-tabs">
    <!-- <el-tab-pane
        label="首页"
        name="0">
          <admin-index></admin-index>
    </el-tab-pane>-->
    <el-tab-pane v-for="(item,index) in options"
                 :label="item.name"
                 :key="item.route"
                 :closable="item.closable"
                 :name="item.route">
      <span slot="label"
            v-if="index === 0">
        <i class="iconfont icon-shouye"></i>
      </span>
      <keep-alive>
        <router-view v-if="item.route === menus_activeIndex" />
      </keep-alive>
      <!-- v-for="item in options"
        :label="item.label"
        :key="item.index"
        :name="item.index"
      :closable="item.closable">-->
      <!-- <async-component :componentPath='item.component' :delay="delay" /> -->
    </el-tab-pane>
  </el-tabs>
</template>

<script>
import { mapState, mapMutations } from "vuex";
// import AdminIndex from '../AdminIndex'
// import { mapActions, mapState } from 'vuex'
// import AsyncComponent from '../AsyncComponent'
export default {
  data() {
    return {
      loading: true,
      // 页面模块延迟加载 （单位：毫秒）
      delay: 3000
      // activeTabs: this.activeItem
    };
  },
  mounted() {
    // this.loading = false
  },
  computed: {
    ...mapState("menus", {
      options: "options",
      menus_activeIndex: "activeIndex",
      homePage: "homePage",
      userInfo: "userInfo"
    }),
    ...mapState(["rcLoading"]),
    timestamp() {
      return new Date().getTime();
    },
    activeIndex: {
      get() {
        return this.menus_activeIndex;
      },
      set() {
        this.set_active_index(this.$route.path);
      }
    }
  },
  components: {
    // AdminIndex,
    // AsyncComponent
  },
  methods: {
    ...mapMutations("menus", ["set_active_index", "add_tabs", "delete_tabs"]),
    ...mapMutations(["changeRcLoading"]),
    // tab切换时，动态的切换路由
    tabClick(tab) {
      let path = tab;
      // 用户详情页的时候，对应了二级路由，需要拼接添加第二级路由
      //   if (this.activeIndex === "/userInfo") {
      //     path = this.activeIndex + "/" + this.userInfo.name;
      //   }
      this.$router.push({ path: path.name });
    },
    closeTab(targetName) {
      console.log(targetName);
      // eslint-disable-next-line
      this.delete_tabs(targetName);
      if (this.activeIndex === targetName) {
        // 设置当前激活的路由
        if (this.options && this.options.length >= 1) {
          this.set_active_index(this.options[this.options.length - 1].route);
          this.$router.push({ path: this.activeIndex });
        } else {
          //首页
          this.$router.push({ path: this.homePage.route });
        }
      }
    }
  },
  watch: {
    $route(to) {
      let flag = false;
      for (let option of this.options) {
        if (option.name === to.name) {
          flag = true;
          this.set_active_index(to.path);
          break;
        }
      }
      if (!flag) {
        this.add_tabs({ route: to.path, name: to.name });
        this.set_active_index(to.path);
      }
    }
  }
};
</script>
<style lang='scss'>
.posi_abc {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: auto;
}
.content-body {
  height: 100%;
  background-color: #f2f2f2;
}
.el-item-tabs {
  > .el-tabs__header {
    margin-bottom: 0;
    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1);
    background: #fff;
    border-bottom: 0;
    z-index: 99;
    > .el-tabs__nav-wrap {
      margin-right: 40px;
      border-right: 1px solid #f2f2f2;
      &.is-scrollable {
        padding-left: 40px;
        padding-right: 40px;
        > .el-tabs__nav-prev,
        .el-tabs__nav-next {
          width: 40px;
          text-align: center;
          font-size: 18px;
        }
        > .el-tabs__nav-prev {
          border-right: 1px solid #f2f2f2;
        }
        > .el-tabs__nav-next {
          border-left: 1px solid #f2f2f2;
        }
      }
      z-index: 99;

      > .el-tabs__nav-scroll {
        > .el-tabs__nav {
          border: 0;
          border-right: 1px solid #f2f2f2;
          > .el-tabs__item {
            -webkit-transition: all 0.2s;
            border-bottom: 0;

            color: #000;
            &:hover {
              padding-left: 20px;
              padding-right: 20px;
            }
            &:hover::after {
              width: 100%;
              border: none;
              height: 2px;
              background-color: #292b34;
            }
            &::after {
              content: "";
              position: absolute;
              top: 0;
              left: 0;
              width: 0;
              height: 2px;
              border-radius: 0;
              background-color: #292b34;
              transition: all 0.3s;
              -webkit-transition: all 0.3s;
            }
            &.is-active {
              &::after {
                width: 100%;
                border: none;
                height: 2px;
                background-color: #292b34;
              }
              background-color: #f6f6f6;
            }
            > .el-icon-close {
              &:hover {
                background-color: #ff5722;
                color: #fff;
              }
              width: 14px;
            }
          }

          border-radius: 0;
          border-top: 0;
        }
      }
    }
  }

  > .el-tabs__content {
    @extend .posi_abc;
    top: 40px;
    background-color: #f2f2f2;
    overflow-y: auto;
    > .el-tab-pane {
      min-height: 100%;
      > div {
        // background-color: #fff !important;
      }
    }
    padding: 15px 15px 15px 15px;
    box-sizing: border-box;
  }
  @extend .posi_abc;
}
</style>
