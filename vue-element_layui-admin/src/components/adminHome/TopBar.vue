<!--  -->
<template>
  <div class="el-header-box">

    <ul class="el-nav-wrapper el-fl-left">
      <!-- eslint-disable-->
      <li :title='!isCollapse ? "收缩":"展开"'
          @click="changeMenu(!isCollapse)">
        <i class="iconfont icon-weibiaoti26"
           v-if="!isCollapse"></i>
        <i class="iconfont icon-weibiaoti25"
           v-else></i>

      </li>
      <li title="刷新"
          @click="refresh"><i class="iconfont icon-refresh-1-copy"></i></li>
      <li title="前台"><a href="http://www.qijiee.com/"
           target="_blank"><i class="iconfont icon-diqiu"></i></a></li>
    </ul>

    <el-menu class="el-menu-demo el-fl-right"
             mode="horizontal">
      <el-menu-item index="3">
        <ThemePicker />
      </el-menu-item>
      <el-menu-item index="4"
                    @click="getFullCreeen"
                    :title="n%2 === 0 ?'全屏': '退出'">
        <i class="iconfont icon-zhankai"
           v-if="n%2 === 0"></i>
        <i class="iconfont icon-Group-"
           v-else></i>

      </el-menu-item>
      <el-submenu index="5"
                  class="userInfo ">
        <template slot="title"><img class="el-head-img"
               src="../../assets/images/head_img.jpg" /><span>张三</span></template>
        <el-menu-item index="4-1">基本资料</el-menu-item>
        <el-menu-item index="4-2">修改密码</el-menu-item>
        <div class="QJ-line"></div>
        <el-menu-item index="4-3">退出</el-menu-item>
      </el-submenu>

    </el-menu>

  </div>
</template>

<script>
import ThemePicker from "@/components/ThemePicker";
// import I18n from "@/components/I18n";
import { mapState, mapMutations } from "vuex";
export default {
  name: "TopBar",
  components: {
    // I18n,
    ThemePicker
  },
  data() {
    return {
      n: 0
    };
  },
  computed: {
    ...mapState(["isCollapse"])
  },
  methods: {
    ...mapMutations(["changeMenu"]),
    refresh() {
      this.$router.push(this.$route.path + "?v=" + new Date().getTime());
      // console.log();
    },
    getFullCreeen() {
      console.log(this.n);
      this.n++;
      this.n % 2 === 0
        ? this.outFullCreeen(document)
        : this.inFullCreeen(document.documentElement);
    },
    inFullCreeen(element) {
      let el = element;
      let rfs =
        el.requestFullScreen ||
        el.webkitRequestFullScreen ||
        el.mozRequestFullScreen ||
        el.msRequestFullScreen;
      if (typeof rfs !== "undefined" && rfs) {
        rfs.call(el);
      } else if (typeof window.ActiveXObject !== "undefined") {
        // eslint-disable-next-line
        let wscript = new ActiveXObject("WScript.Shell");
        if (wscript != null) {
          wscript.SendKeys("{F11}");
        }
      }
    },
    outFullCreeen(element) {
      let el = element;
      let cfs =
        el.cancelFullScreen ||
        el.webkitCancelFullScreen ||
        el.mozCancelFullScreen ||
        el.exitFullScreen;
      if (typeof cfs !== "undefined" && cfs) {
        cfs.call(el);
      } else if (typeof window.ActiveXObject !== "undefined") {
        // eslint-disable-next-line
        let wscript = new ActiveXObject("WScript.Shell");
        if (wscript != null) {
          wscript.SendKeys("{F11}");
        }
      }
    }
  }
};
</script>
<style lang='scss'>
.el-header-box {
  width: 100%;
  padding: 0 10px;
  > .el-menu {
    > .el-menu-item,
    > .el-submenu {
      .el-head-img {
        width: 35px;
        height: 35px;
        border-radius: 50%;
        margin-right: 7px;
      }
      > .el-submenu__title {
        padding: 0 !important;
        height: 50px;
        line-height: 50px;
      }
      > i {
        color: #333;
        font-size: 16px;
        margin-right: 0;
      }
      &.is-active {
        > .el-submenu__title {
          border-bottom: 0 !important;
        }
        border-bottom: 0;
      }
      &::after {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        width: 0;
        height: 3px;
        background-color: #333;
        transition: all 0.3s;
      }
      &:hover::after {
        width: 100%;
      }

      position: relative;
      padding: 0 5px;
      margin: 0 10px;
      height: 50px;
      line-height: 50px;
      background-color: initial !important;
    }
  }
}

.el-nav-wrapper {
  transition: all 0.3s;
  box-sizing: border-box;
  > li {
    position: relative;
    display: inline-block;
    vertical-align: middle;
    height: 50px;
    line-height: 50px;
    padding: 0 2px;
    margin: 0 12px;
    font-size: 16px;
    cursor: pointer;
    color: #333;
    &:hover:after {
      width: 100%;
    }
    &::after {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      width: 0;
      height: 2.5px;
      background-color: #333;
      transition: all 0.3s;
    }
  }
}
</style>
