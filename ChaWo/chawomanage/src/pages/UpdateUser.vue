<template>
    <div style="padding:20px">
        <el-form :model="ruleForm"  label-width="100px" :rules="rules" ref="ruleForm" class="demo-ruleForm">
            <el-form-item label="用户名" prop="name">
                <el-input v-model="ruleForm.name" style="width:200px"></el-input>
            </el-form-item>
            <el-form-item label="性别"  prop="sex">
                 <el-input  v-model="ruleForm.sex" autocomplete="off" style="width:200px"></el-input>
            </el-form-item>
              <el-form-item label="职位"  prop="position">
                 <el-input  v-model="ruleForm.position" autocomplete="off" style="width:200px"></el-input>
            </el-form-item>
            <el-form-item label="密码" prop="password" >
                 <el-input type="password" v-model="ruleForm.password" autocomplete="off" style="width:200px"></el-input>
            </el-form-item>
            <el-form-item label="确认密码" prop="checkPass">
                <el-input type="password" v-model="ruleForm.checkPass" autocomplete="off" style="width:200px"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary">提交</el-button>
                <el-button >重置</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
export default {
    data(){
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
            } else if (value !== this.ruleForm.password) {
            callback(new Error('两次输入密码不一致!'));
            } else {
            callback();
            }
      };
        return {
            ruleForm: {
                password: '',
                checkPass: '',
                name: '',
                sex:'',
                position:''
                },
            rules: {
                password: [{ validator: validatePass, trigger: 'blur' }],
                checkPass: [{ validator: validatePass2, trigger: 'blur'}],
                name:[{required:true,message:'请输入用户名',trigger:'blur'}],
                sex:[{required:true,message:'请输入性别',trigger:'blur'}],
                position:[{required:true,message:'请输入职位',trigger:'blur'}]
        }
        }
    },
    created(){

        // 创建阶段获取id相对应的数据显示到视图
        console.log(this.$route);
        
    }
}
</script>