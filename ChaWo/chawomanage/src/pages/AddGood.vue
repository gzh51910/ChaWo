<template>
    <div style="padding:20px">
        <el-form  :model="form" label-width="80px">
            <el-form-item label="商品名称">
                <el-input v-model="form.name" placeholder="请输入名称" style="width:800px" ></el-input>
            </el-form-item>
            <el-form-item label="商品标题">
                <el-input v-model="form.title"  placeholder="请输入标题" style="width:800px" ></el-input>
            </el-form-item>
            <el-form-item label="商品价格">
                <el-col :span="11" style="width: 420px;">
                <el-input style="width:300px;"  v-model="form.price"></el-input>
                </el-col>
            
            </el-form-item>
            <el-form-item label="商品分类">
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
            <el-form-item label="商品图片">
                <el-input  placeholder="URL格式" style="width:800px" v-model="form.url" ></el-input>
            </el-form-item>
            <el-form-item label="优惠券">
               <el-input  placeholder="可不填" style="width:800px" v-model="form.juan"></el-input>
            </el-form-item>
            <el-form-item label="销量">
               <el-input  placeholder="可不填" style="width:800px" v-model="form.xl"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="getGoodData">确定</el-button>
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

      }
    },
    methods: {
        
      onSubmit() {
        window.console.log('submit!');
      },
      getGoodData(){
          
          let dwd=1;
          let brad_name=this.form.name;
          let Title=this.form.title;
          let Price=this.form.price;
          let gc_name=this.form.region;
          let ImgMin=this.form.url;
          let Juan=this.form.juan;
          let Xl=this.form.xl;
        //  console.log(dwd,brad_name,Title,Price,gc_name,ImgMin,Juan,Xl);
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
      }
    }
}
</script>
<style lang="stylus" scoped>

</style>