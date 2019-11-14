<template>
  <div class="container">
    <p style="height:40px;line-height:40px;text-align:center"><i class="el-icon-house" style="float:left;margin-top:8px"></i>注册茶窝会员<el-button plain @click="goto('/login')" style="border:0;float:right;color:red">登录</el-button></p>
    <el-form  ref="regForm" :rules="rules" :model="regForm"> 
      <el-form-item  prop="phone" style="border:1px solid #ccc">
        <span style="width:25%;padding-left:20px">手机号</span>
        <el-input v-model="regForm.phone" placeholder="请输入手机号码" style="width:75%;float:right;border：none;outline: medium"></el-input>
      </el-form-item>
      <el-form-item  prop="value" style="border:1px solid #ccc">
          <el-input v-model="regForm.value" style="width:65%"></el-input>
          <el-button size="small" type="info" @click.native="movepwd(regForm.value)">获取动态码</el-button>
      </el-form-item>
      <el-form-item  prop="password" style="border:1px solid #ccc">
        <span style="width:25%;padding-left:20px">密码</span>
        <el-input type="password" v-model="regForm.password" placeholder="请输入6~20位密码" style="width:75%;float:right"></el-input>
      </el-form-item>
      <el-form-item  prop="confirmPassword" style="border:1px solid #ccc">
        <span style="width:25%;padding-left:20px">确认密码</span>
        <el-input type="password" v-model="regForm.confirmPassword" placeholder="请再次输入密码" style="width:75%;float:right"></el-input>
      </el-form-item>
      <el-form-item prop="agree">
        <el-radio label="同意用户注册协议" v-model="regForm.agree"></el-radio>
      </el-form-item>     
        <el-button type="success" @click="submitForm('numberValidateForm')" style="width:100%">注册</el-button>
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

    var checkPassword = (rule, value, callback) => {
      if (value !== this.regForm.password) {
        callback(new Error("两次输入密码不一致!"));
      } else {
        callback();
      }
    };
    return {
      regForm: {
        phone: "",
        value:"",
        password: "",
        confirmPassword: "",
        agree:""
      },
      rules: {
        phone: [
          { required: true, message: "请输入用户名", trigger: "blur" },
          { validator: checkPhone, trigger: "blur" }
        ],
        value:[{ required: true, message: "请输入动态码", trigger: "blur" },],
        password: [
          { required: true, message: "请输入密码", trigger: "blur" },
          { min: 6, max: 20, message: "长度在 6 到 20 个字符", trigger: "blur" }
        ],
        confirmPassword: [{ validator: checkPassword, trigger: "blur" }],
        agree: [
            { required: true, message: '请同意注册协议', trigger: 'change' }
          ],
      }
    };
  },
  methods:{
      goto(path){
          this.$router.push(path)
      },
      movepwd(){
          return 
      },
      submitForm(){
          this.$refs.regForm.validate(async (valid) => {
            if (valid) {
                // 校验成功发起ajax请求
                console.log('success');

                let {phone,password} = this.regForm;
                 let {data} = await my.post('/reg',{
                    phone,
                    password
                });
                console.log(data)
                if(data.status === 1){
                    this.$router.replace('/login')
                }
            } else {
                console.log('error submit!!');
                return false;
            }
        });
      }
  }
};
</script>
<style>
      
</style>