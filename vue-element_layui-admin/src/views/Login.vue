<!-- 登陆 -->
<template>
  <div class="el-lgRgPs-container">
    <bj-swiper />
    <div class="el-lg-rg-fg-container el-form-wrapper">
      <div class="el-content-panel">
        <div class="el-panel-body">
          <div class="el-mar-ver">
            <h3 class="el-login-title">element-admin</h3>
            <p class="el-text-muted">请登录您的帐户</p>
          </div>
          <el-form ref="login_form"
                   :model="login_form"
                   status-icon
                   label-width="80px">
            <el-form-item prop="userName"
                          :rules="[
                        { required: true, message: '用户名不能为空.'}
                        ]">
              <el-input prefix-icon="iconfont icon-yonghu1"
                        type="text"
                        maxlength="16"
                        v-model="login_form.userName"></el-input>
            </el-form-item>

            <el-form-item prop="password"
                          :rules="[
                        { required: true, message: '密码不能为空.'}
                        ]">
              <el-input prefix-icon="iconfont icon-Group-1"
                        type="password"
                        maxlength="16"
                        v-model="login_form.password"></el-input>
            </el-form-item>
            <el-form-item prop="code"
                          :rules="[
                        { required: true, message: '验证码不能为空'},
                        { min: 4,message: '您输入的验证码长度未达到4位.', trigger: 'blur' }
                        ]">
              <el-row :gutter="10">
                <el-col :span="16">
                  <el-input prefix-icon="iconfont icon-ecurityCode"
                            maxlength="4"
                            v-model="login_form.code"></el-input>
                </el-col>
                <el-col :span="8"
                        style="height:40px;"><img src="../assets/images/code.jpg"
                       width="100%"
                       height="40"
                       alt="验证码"></el-col>
              </el-row>

            </el-form-item>
            <el-form-item>
              <el-row :gutter="10">
                <el-col :span="12"
                        class="el-label-jzPass">
                  <el-checkbox v-model="checked">记住密码</el-checkbox>
                </el-col>
                <el-col :span="12"
                        class="el-reg-pass">
                  <el-button type="text"
                             @click="$router.push({name: '注册'});">注册账号</el-button>
                  <span>|</span>
                  <el-button type="text"
                             @click="$router.push({name: '忘记密码'});">忘记密码？</el-button>
                </el-col>
              </el-row>

            </el-form-item>
            <el-form-item style="margin-bottom:0;">
              <el-button v-if="!btn_loading"
                         type="primary"
                         class="el-btn-block"
                         @click="login_submitForm('login_form')">登 入</el-button>
              <el-button v-else
                         type="primary"
                         :loading="btn_loading"
                         class="el-btn-block">登 入</el-button>
            </el-form-item>
          </el-form>
        </div>

        <div class="el-pad-all">
          <div class="el-line-wrapper">
            <span>第三方登陆</span>
          </div>
          <el-row :gutter="0"
                  class="el-row-icon">
            <el-col :span="8">
              <span class="iconfont icon-logo-qq"></span>
            </el-col>
            <el-col :span="8">
              <span class="iconfont icon-weixin-copy"></span>
            </el-col>
            <el-col :span="8">
              <span class="iconfont icon-weibo-copy"></span>
            </el-col>
          </el-row>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
// import { mapMutations } from "vuex";
import BjSwiper from "@/components/bjSwiper/BjSwiper.vue";
export default {
  name: "Login",
  data() {
    return {
      checkCode: "7s3c",
      btn_loading: false,
      login_form: {
        userName: "admin",
        password: "admin",
        code: "7s3c"
      },
      checked: true
    };
  },
  components: {
    BjSwiper
  },
  created() {
    this.$store.commit("changeJumpLogin");
  },
  methods: {
    //   ...mapMutations("menus", ["delete_tabs", "set_active_index"]),
    login_submitForm(formName) {
      let _that = this;
      if (this.checkCode != this.login_form.code) {
        this.$message.error("验证码不正确.");
        return;
      }
      this.$refs[formName].validate(valid => {
        if (valid) {
          this.btn_loading = true;
          setTimeout(function() {
            _that.$message({
              message: "登陆成功！正在为您跳转页面.",
              type: "success",
              onClose() {
                _that.$router.push({ name: "首页" });
              }
            });
          }, 3000);
        }
      });
    }
  }
};
</script>
<style lang='scss' scoped>
@import "../assets/scss/lgon_reg_pass";
</style>
