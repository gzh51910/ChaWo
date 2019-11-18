<template>
    <div>
        <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
            <el-form-item label="用户名" prop="name" >
                <el-input v-model="ruleForm.name" style="width:200px"></el-input>
            </el-form-item>
            <el-form-item label="性别" prop="sex" >
                 <el-input  v-model="ruleForm.sex" autocomplete="off" style="width:200px"></el-input>
            </el-form-item>
              <el-form-item label="职位" prop="position" >
                 <el-input  v-model="ruleForm.position" autocomplete="off" style="width:200px"></el-input>
            </el-form-item>
            <el-form-item label="密码" prop="pass" >
                 <el-input type="password" v-model="ruleForm.pass" autocomplete="off" style="width:200px"></el-input>
            </el-form-item>
            <el-form-item label="确认密码" prop="checkPass">
                <el-input type="password" v-model="ruleForm.checkPass" autocomplete="off" style="width:200px"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
                <el-button @click="resetForm('ruleForm')">重置</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>
<script>
export default {
    data() {
      var validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'));
        } else {
          if (this.ruleForm.checkPass !== '') {
            this.$refs.ruleForm.validateField('checkPass');
          }
          callback();
        }
      };
      var validatePass2 = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请再次输入密码'));
        } else if (value !== this.ruleForm.pass) {
          callback(new Error('两次输入密码不一致!'));
        } else {
          callback();
        }
      };
      return {
        ruleForm: {
          pass: '',
          checkPass: '',
          name: '',
          sex:'',
          position:''
        },
        rules: {
          pass: [{ validator: validatePass, trigger: 'blur' }],
          checkPass: [{ validator: validatePass2, trigger: 'blur'}],
          name: [
                { required: true, message: '请输入用户名', trigger: 'blur' },
                { min: 2, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
                ],
        }
      };
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            // 验证成功
            let name=this.ruleForm.name;
            let password=this.ruleForm.checkPass;
            let sex=this.ruleForm.sex
            let position=this.ruleForm.position
            this.$axios.post("http://localhost:8010/goods/adduser",{
              name,password,sex,position
            })
            // 清空输入框
            this.ruleForm.name="";
            this.ruleForm.pass="";
            this.ruleForm.checkPass="";
            this.ruleForm.sex="";
            this.ruleForm.position="";
            alert('添加成功!');
            
          } else {
            window.console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      },

    }
  }

</script>
<style lang="stylus" scoped>

</style>

