import Store from "../../store/store";

/* eslint-disable */
Store.registerModule('menus', {
    namespaced: true,
    state: {
        homePage: {
            route: '/main',
            name: '主页面'
        },
        options: [],
        activeIndex: '',
        userInfo: {}
    },
    mutations: {
        // 添加tabs
        add_tabs (state, data) {
            if (data.route === state.homePage.route) {
                data.closable = false; //右边选项卡主页面不关闭
            } else {
                data.closable = true;//其他选项卡页面关闭
            }
            state.options.push(data);
            console.log(state.options)
        },
        // 删除tabs
        delete_tabs (state, route) {
            for (let [index, val] of state.options.entries()) {
                if (val.route === route) {
                    state.options.splice(index, 1);
                    break;
                }
            }
        },
        // 设置当前激活的tab
        set_active_index (state, index) {
            state.activeIndex = index;
        },
        // 设置详情信息
        save_detail_info (state, info) {
            state.userInfo = info;
        }
    },
    actions: {
        //关闭其他标签页
        close_else_label (context, o) {
            context.state.options = [];
            context.commit('add_tabs', context.state.homePage);
            if (o.route === context.state.homePage.route) {
                return;
            }
            // context.state.activeIndex = o.route;
            context.commit('add_tabs', o);
        },
        //关闭所有标签页 只保留 home页
        close_all_label (context) {
            let _homePage = context.state.homePage;
            context.state.options = [];
            context.state.activeIndex = _homePage.route;
            context.commit('add_tabs', _homePage);
        }
    }
})
