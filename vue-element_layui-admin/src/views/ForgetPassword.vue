<!-- 忘记密码 -->
<template>
  <div class="el-lgRgPs-container">
    <bj-swiper />
    <div class="el-lg-rg-fg-container el-form-wrapper">
      <div class="el-content-panel">
        <div class="el-panel-body">
          <div class="el-mar-ver">
            <h3 class="el-login-title">element-admin</h3>
            <p class="el-text-muted">请找回您的账户</p>
          </div>
          <el-form ref="forgetPass_form"
                   :model="forgetPass_form"
                   :rules="forgetPass_rules"
                   label-width="80px">
            <el-form-item prop="phone">
              <el-input prefix-icon="iconfont icon-shouji"
                        type="text"
                        placeholder="请输入手机号码"
                        maxlength="11"
                        v-model="forgetPass_form.phone"></el-input>
            </el-form-item>
            <el-form-item prop="code">
              <el-row :gutter="10">
                <el-col :span="16">
                  <el-input prefix-icon="iconfont icon-ecurityCode"
                            type="text"
                            maxlength="4"
                            placeholder="请输入验证码"
                            v-model="forgetPass_form.code"></el-input>
                </el-col>
                <el-col :span="8">
                  <el-button type="button"
                             class="el-btn-block">获取验证码</el-button>
                </el-col>
              </el-row>
            </el-form-item>
            <el-form-item prop="password">
              <el-input prefix-icon="iconfont icon-Group-1"
                        type="password"
                        maxlength="16"
                        placeholder="请输入密码"
                        v-model="forgetPass_form.password"></el-input>
            </el-form-item>
            <el-form-item prop="affirm_password">
              <el-input prefix-icon="iconfont icon-Group-1"
                        type="password"
                        maxlength="16"
                        placeholder="请输入确认密码"
                        v-model="forgetPass_form.affirm_password"></el-input>
            </el-form-item>
            <el-form-item>
              <el-row :gutter="0">
                <el-col :span="16"
                        class="el-label-jzPass">
                </el-col>
                <el-col :span="8">
                  <el-button type="text"
                             @click="$router.push({name: '登陆'});">知道帐号？登入</el-button>
                </el-col>
              </el-row>

            </el-form-item>
            <el-form-item style="margin-bottom:0;">
              <el-button v-if="!btn_loading"
                         type="primary"
                         class="el-btn-block"
                         @click="forget_submitForm('forgetPass_form')">找回密码</el-button>
              <el-button v-else
                         type="primary"
                         :loading="btn_loading"
                         class="el-btn-block">找回密码</el-button>
            </el-form-item>
          </el-form>
        </div>

      </div>
    </div>
  </div>

</template>

<script>
import BjSwiper from "@/components/bjSwiper/BjSwiper.vue";
export default {
  name: "ForgetPassword",
  data() {
    let _that = this;
    return {
      forgetPass_form: {
        phone: "",
        password: "",
        affirm_password: "",
        code: ""
      },
      forgetPass_rules: {
        phone: [
          { required: true, message: "请输入手机号码.", trigger: "blur" },
          {
            trigger: "blur",
            validator: function(rule, value, callback) {
              if (!/^1[34578]\d{9}$/.test(value)) {
                callback(new Error("请输入正确的手机号码."));
              } else {
                callback();
              }
            }
          }
        ],
        code: [
          { required: true, message: "请输入验证码.", trigger: "blur" },
          { min: 4, message: "您输入的验证码长度未达到4位.", trigger: "blur" }
        ],
        password: [
          { required: true, message: "请输入密码.", trigger: "blur" },
          { min: 6, message: "您输入的密码长度未达到6位.", trigger: "blur" }
        ],
        affirm_password: [
          { required: true, message: "请再次输入密码.", trigger: "blur" },
          {
            trigger: "blur",
            validator: function(rule, value, callback) {
              console.log(_that);
              if (value !== _that.forgetPass_form.password) {
                callback(new Error("两次输入密码不一致!"));
              } else {
                callback();
              }
            }
          }
        ]
      },
      checked: true,
      btn_loading: false
    };
  },
  components: {
    BjSwiper
  },
  methods: {
    forget_submitForm(formName) {
      let _that = this;
      this.$refs[formName].validate(valid => {
        if (valid) {
          this.btn_loading = true;
          setTimeout(function() {
            _that.$message({
              message: "找回密码成功！正在为您跳转页面.",
              type: "success",
              onClose() {
                _that.$router.push({ name: "登陆" });
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
