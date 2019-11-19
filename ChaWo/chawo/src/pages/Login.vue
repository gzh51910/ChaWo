<template>
  <div class="container">
    <div class="Lway" style="margin:20px 0">
      <i class="el-icon-s-home" style="float:left;margin:6 10px" @click="goto('/homes')"></i>
        <el-button plain icon="el-icon-mobile" style="margin-right:20%;border:0">手机登录</el-button>
        <el-button plain icon="el-icon-user" style="border:0">普通登录</el-button>
    </div>
    <el-form
      label-position="right"
      label-width="100px"
      ref="loginForm"
      :rules="rules"
      :model="loginForm"
    >
      <el-form-item label="手机号" prop="phone" :error="errorMsg" >
        <el-input v-model="loginForm.phone"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password" :error="errorMsg">
        <el-input type="password" v-model="loginForm.password"></el-input>
      </el-form-item>
      <el-form-item prop="mdl">
        <el-checkbox v-model="loginForm.mdl">30天自动登录</el-checkbox>
      </el-form-item>
        <el-button type="success" @click="submitForm('numberValidateForm')" style="width:100%">登录</el-button>
        <el-button @click="goto('./Regs')" style="width:100%;margin:10px 0 0">注册</el-button>
    </el-form>
  </div>
</template>
<script>
import {my} from '../api'
export default {
  data() {
      var checkPhone= (rule, value, callback) => {
        if (!/^1[3-9]\d{9}$/i.test(value)) {
        callback(new Error("请输入正确的手机格式"));
      }else {
        callback();
      }
    };
    return {
        errorMsg:'',
      loginForm: {
        phone: "",
        password: "",
        mdl:true
      },
      rules: {
        phone: [
          { required: true, message: "请输入手机号", trigger: "blur" },
          { validator: checkPhone, trigger: "blur" }
        ],
        password: [
          { required: true, message: "请输入密码", trigger: "blur" },
          { min: 6, max: 20, message: "长度在 6 到 20 个字符", trigger: "blur" }
        ]
      }
    };
  },
  methods:{
      goto(path){
          this.$router.push(path);
      },
      submitForm(){
          this.$refs.loginForm.validate(async (valid) => {
            if (valid) {
                // 校验成功发起ajax请求
                // console.log('success');

                let {phone,password} = this.loginForm;
                let result = await my.get('/login',{
                  phone,
                  password
                });
                // console.log('result:',result);
                let {data,headers} = result;
                if(data.status === 0){
                    // console.log('不行')
                    this.errorMsg = '用户名或密码错误'
                }else{
                    

                    let user = data.data[0];
                    // 从响应头中获取Authorization
                    user.Authorization = headers.authorization
                    this.$store.commit('login',user)
                    let redirectUrl = this.$route.query.redirectUrl || '/mines';

                    this.$router.push(redirectUrl)
                }
            } else {
               
                return false;
            }
        });
      }
  }
};
</script>