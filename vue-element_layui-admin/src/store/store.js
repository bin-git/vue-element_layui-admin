import Vue from "vue";
import vuex from "vuex";
Vue.use(vuex);

export default new vuex.Store({
  state: {
    isJumpLogin: true,
    // 做菜单栏 （伸缩）
    isCollapse: false,
    rcLoading: true
  },
  mutations: {
    changeMenu(state, n) {
      state.isCollapse = n;
    },
    changeRcLoading(state, n) {
      state.rcLoading = n;
    },
    changeJumpLogin(state) {
      state.isJumpLogin = false;
    }
  },
  actions: {}
});
