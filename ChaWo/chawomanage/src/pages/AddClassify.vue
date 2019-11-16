<template>
    <div style="padding:20px">
        <el-form ref="form" :model="form" label-width="80px">
            <el-form-item label="分类名称">
                <el-input v-model="form.name" class="Input" placeholder="请输入分类名称"></el-input>
            </el-form-item>
            <el-form-item label="备注">
                <el-input type="textarea" v-model="form.desc" class="Input"></el-input>
            </el-form-item>
              <el-form-item>
                <el-button type="primary" @click="addclassify" >提交</el-button>
            </el-form-item>
         </el-form>
    </div>
</template>
<script>
export default {
    data() {
      return {
        form: {
          name: '',
          desc: ''
        }
      }
    },

    methods:{
        addclassify(){
        if((this.form.name).trim()==0){
            alert("请输入分类名称！")
            return;
        }else{
            let gc_name=this.form.name;
            let type_name=this.form.desc;
            this.$axios.post('http://localhost:8010/goods/addclassify',{gc_name,type_name});
            this.form.name="";
            this.form.desc="";
            alert('添加成功')
        }
        
    }
    }

}
</script>
<style>
    .Input{
        width: 300px;
    }
    .Textarea{
        height: 200px;
    }
</style>