<template>
      <div style="padding:20px; width:900px">
    <template>
        <el-table :data="user" border style="width: 100%;margin-bottom:15px">
            <el-table-column label="全选" type="selection" ></el-table-column>
            <el-table-column label="序号" width="120">
                <template slot-scope="scope" style="text-aigin:center">{{ scope.$index+1 }}</template>
            </el-table-column>
            <el-table-column label="用户编号" width="300">
                <template slot-scope="scope">{{ scope.row._id }}</template>
            </el-table-column>
             <el-table-column label="用户名" width="120">
                <template slot-scope="scope">{{ scope.row.phone }}</template>
            </el-table-column>
             <el-table-column label="密码" width="120">
                <template slot-scope="scope">{{ scope.row.password }}</template>
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
// import LoginVue from './Login.vue';
export default {
    data(){
        return {
            user:[],
        }
    },
    methods:{
      async  getUserList(){
            let {data:{data}}= await this.$axios.get("http://121.199.11.112:8010/goods/userall");
            this.user=data;
        },
        removeuser(id){
            this.user=this.user.filter(item=>item._id!=id)
            this.$axios.delete("http://121.199.11.112:8010/goods/removeuser/"+`${id}`)
        },
    },
    created(){
        this.getUserList();
    }
}
</script>
<style>
    .el-table_1_column_3 {
        width: 500px;
    }
</style>