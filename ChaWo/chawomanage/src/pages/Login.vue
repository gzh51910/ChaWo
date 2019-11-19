<template>
    <div class="loginWrap">
        <el-form :model="ruleForm" 
            status-icon :rules="rules" 
            ref="ruleForm" label-width="100px"
             class="demo-ruleForm"
             style="padding:150px 0 0 30px"
             >
            <el-form-item label="用户名" prop="name">
                <el-input v-model="ruleForm.name" style="200px" placeholder="请输入用户名"></el-input>
            </el-form-item>
            <el-form-item label="密码" prop="password">
                <el-input type="password" v-model="ruleForm.password" autocomplete="off" placeholder="请输入密码"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" style="width:300px" @click="submitForm('ruleForm')">登录</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>
<script>

  export default {
    data() {
      return {
        ruleForm: {
          name:'',
          password: '',
        },
        rules: {
          name: [ { required: true, message: '请输入用户名',trigger:'blur' } ],
          password: [ { required: true, message: '请输入密码',trigger:'blur' } ]
        }
      };
    },
    methods: {
      submitForm(){
          this.$refs.ruleForm.validate(async (valid) => {
            if (valid) {
                // 校验成功发起ajax请求
                // console.log('success');

                let {name,password} = this.ruleForm;
                // console.log(name,password);
                let result = await this.$axios.get('http://121.199.11.112:8010/admin',{
                params:{
                  name,
                  password
                }
                });
                // console.log('result:',result);
                let {data,headers} = result;
                if(data.status === 0){
                    // console.log('不行')
                    this.errorMsg = '用户名或密码错误';
                }else{
                    

                    let user = data.data[0];
                    // 从响应头中获取Authorization
                    user.Authorization = headers.authorization
                    this.$store.commit('login',user);
                    this.$router.push('/home');
                }
            } else {
                console.log('error submit!!');
                return false;
            }
        });
      }
    }
  }
</script>

<style>

    .loginWrap{
        width: 500px;
        height: 500px;
        margin: 0 auto;
        background: palegoldenrod;
        /* border:2px solid red; */
        position: absolute;
        top: 50%;
        left: 50%;
        margin-left: -250px;
        margin-top: -250px;
    }
    .el-input{
        width:300px;
    }
</style>