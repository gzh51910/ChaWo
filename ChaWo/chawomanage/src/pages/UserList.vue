<template>
    <div style="padding:20px;    width: 680px;">
    <template>
        <el-table :data="user" border style="width: 100%;margin-bottom:15px">
            <el-table-column label="全选" type="selection" ></el-table-column>
           <!--  <el-table-column prop="id" label="序号"></el-table-column>
            <el-table-column prop="name" label="管理员"></el-table-column>
            <el-table-column prop="name" label="性别"></el-table-column>
            <el-table-column prop="name" label="职位"></el-table-column>
            <el-table-column prop="timer" label="添加时间"></el-table-column> -->
            <el-table-column label="序号" width="120">
                <template slot-scope="scope" style="text-aigin:center">{{ scope.$index+1 }}</template>
            </el-table-column>
             <el-table-column label="管理员" width="120">
                <template slot-scope="scope">{{ scope.row.name }}</template>
            </el-table-column>
             <el-table-column label="性别" width="120">
                <template slot-scope="scope">{{ scope.row.sex }}</template>
            </el-table-column>
             <el-table-column label="职位" width="120">
                <template slot-scope="scope">{{ scope.row.position }}</template>
            </el-table-column>

            <el-table-column  label="操作"> 
                <template slot-scope="scope">
                    <el-button type="primary" icon="el-icon-edit" size="mini" @click="updateuser(scope.row._id)"></el-button>
                    <el-button type="danger" icon="el-icon-delete" size="mini" @click="removeuser(scope.row._id)"></el-button>
                </template>
            </el-table-column>
        </el-table>
    </template>
    </div>
</template>
<script>
export default {
    data(){
        return {
            checked1:"",
            user:[]
        }
    },
    methods:{
      async  getUser(){
            let {data:{data}}=await this.$axios.get("http://localhost:8010/goods/manager");
            this.user=data;
        },
        removeuser(id){
            this.user=this.user.filter(item=>item._id!=id);
            this.$axios.delete("http://localhost:8010/goods/removeuser/"+id)
        },
        updateuser(id){
            // 写到这里
            this.$router.push({path:'./updateuser',query:{_id:id}})
        }
    },
    created(){
        this.getUser(); 
    }
    
}
</script>
<style> 
  .el-table .el-table-column{
      text-align: center;
  }
  .cell{
      text-align: center;
  }
</style>