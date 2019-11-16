<template>
    <div style="padding:20px">
        <el-form  :model="form" label-width="85px" :rules="rules" ref="form">
            <el-form-item label="商品名称" prop="name">
                <el-input v-model="form.name" placeholder="请输入名称" style="width:800px" ></el-input>
            </el-form-item>
            <el-form-item label="商品标题" prop="title">
                <el-input v-model="form.title"  placeholder="请输入标题" style="width:800px" ></el-input>
            </el-form-item>
            <el-form-item label="商品价格" prop="price">
                <el-col :span="11" style="width: 420px;">
                <el-input style="width:300px;"  v-model.number="form.price"></el-input>
                </el-col>
            
            </el-form-item>
            <el-form-item label="商品分类" prop="region">
                <el-select v-model="form.region" placeholder="请选择" >
                    <el-option label="普洱茶" value="普洱茶"></el-option>
                    <el-option label="红茶" value="红茶"></el-option>
                    <el-option label="绿茶" value="绿茶"></el-option>
                    <el-option label="乌龙茶" value="乌龙茶"></el-option>
                    <el-option label="黑茶" value="黑茶"></el-option>
                    <el-option label="白茶" value="白茶"></el-option>
                    <el-option label="花草茶" value="花草茶"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="商品图片" prop="url">
                <el-input  placeholder="URL格式" style="width:800px" v-model="form.url" ></el-input>
            </el-form-item>
            <el-form-item label="优惠券">
               <el-input  placeholder="可不填" style="width:800px" v-model="form.juan"></el-input>
            </el-form-item>
            <el-form-item label="销量">
               <el-input  placeholder="可不填" style="width:800px" v-model="form.xl"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="getGoodData('form')">确定</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>
<script>
export default {
     data() {
      return {
        radio: '1',
        form: {
          name: '',
          region: '',
          title:'',
          price:'',
          url:'',
          juan:'',
          xl:''
        },
        rules:{
            name:[{required:true,message:'请输入商品名称',trigger:'blur'}],
            title:[{required:true,message:'请输入商品标题',trigger:'blur'}],
            price:[{required:true,message:'请输入价格',trigger:'blur',type: 'number'}],
            region:[{required:true,message:'请选择分类',trigger:'blur'}],
            url:[{required:true,message:'请输入图片地址',trigger:'blur'}]
        }
      };
    },
    methods: {
        
      onSubmit() {
        window.console.log('submit!');
      },
      getGoodData(form){
        //   如果全部验证通过
          this.$refs[form].validate((valid)=>{
              if(valid){
                    let dwd=1;
                    let brad_name=this.form.name;
                    let Title=this.form.title;
                    let Price=this.form.price;
                    let gc_name=this.form.region;
                    let ImgMin=this.form.url;
                    let Juan=this.form.juan;
                    let Xl=this.form.xl;
                    this.$axios.post("http://localhost:8010/goods/add",
                    {  dwd,gc_name,brad_name,ImgMin,Title,Price,Juan,Xl}
                    );
                    this.form.name="";
                    this.form.title="";
                    this.form.price="";
                    this.form.region="";
                    this.form.url="";
                    this.form.juan="";
                    this.form.xl="";
                    alert("商品添加成功")
              }else{
                  window.console.log('添加失败');
                  return false;
              }
          })
      }
    }
}
</script>
<style lang="stylus" scoped>

</style>