<template>
    <div style="padding:20px">
        <el-form ref="form" :model="form" label-width="80px">
            <el-form-item label="商品名称">
                <el-input v-model="form.name" placeholder="请输入名称" style="width:800px"></el-input>
            </el-form-item>
            <el-form-item label="商品标题">
                <el-input  placeholder="请输入标题" style="width:800px"></el-input>
            </el-form-item>
            <el-form-item label="商品价格">
                <el-col :span="11" style="width: 420px;">
                <el-input style="width:300px;" ></el-input>
                </el-col>
                <!-- <el-col :span="11">
                <el-form-item label="销售价格" >
                    <el-input style="width:300px"></el-input>
                </el-form-item>
                </el-col> -->
            
            </el-form-item>
            <el-form-item label="商品分类">
                <el-select v-model="form.region" placeholder="请选择">
                    <el-option label="手机" value="shanghai"></el-option>
                    <el-option label="电脑" value="beijing"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="商品图片">
                <el-upload
                    action="https://jsonplaceholder.typicode.com/posts/"
                    list-type="picture-card"
                    :on-preview="handlePictureCardPreview"
                    :on-remove="handleRemove"
                    >
                <i class="el-icon-plus"></i>
                </el-upload>
                <el-dialog :visible.sync="dialogVisible">
                <img width="100%" :src="dialogImageUrl" alt="">
                </el-dialog>
            </el-form-item>
            <!-- <el-form-item label="商品属性">
                <el-radio v-model="radio" label="热卖" border>热卖</el-radio>
                <el-radio v-model="radio" label="推荐" border>推荐</el-radio>
                <el-radio v-model="radio" label="促销" border>促销</el-radio>
            </el-form-item> -->
            <!-- <el-form-item label="上架">
                <el-switch v-model="form.delivery"></el-switch>
            </el-form-item> -->
            <!-- <el-form-item label="特殊资源">
                <el-radio-group v-model="form.resource">
                <el-radio label="线上品牌商赞助"></el-radio>
                <el-radio label="线下场地免费"></el-radio>
                </el-radio-group>
            </el-form-item> -->
            <el-form-item label="商品描述">
                <el-input type="textarea" v-model="form.desc" style="width:500px"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="onSubmit">确定</el-button>
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
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        },
        dialogImageUrl: '',
        dialogVisible: false
      }
    },
    methods: {
      onSubmit() {
        window.console.log('submit!');
      },
      handleRemove(file, fileList) {
        window.console.log(file, fileList);
      },
      handlePictureCardPreview(file) {
        this.dialogImageUrl = file.url;
        this.dialogVisible = true;
      }
    }
}
</script>
<style lang="stylus" scoped>

</style>