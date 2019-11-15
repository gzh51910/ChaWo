<template>
    <div style="padding:20px">
    <template>
        <el-table :data="user" border style="width: 100%;margin-bottom:15px">
            <el-table-column label="全选" > <el-checkbox v-model="checked1"></el-checkbox></el-table-column>
            <el-table-column prop="id" label="序号"></el-table-column>
            <el-table-column prop="name" label="用户名"></el-table-column>
            <el-table-column prop="timer" label="添加时间"></el-table-column>
            <el-table-column  label="操作">
                <el-button type="primary" icon="el-icon-edit" size="mini" ></el-button>
                <el-button type="danger" icon="el-icon-delete" size="mini" ></el-button>
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
            user:[
                {   
                    id:1,
                    name:'韦云洪',
                    timer:'2019-11-15',
                },
                 {   
                    id:2,
                    name:'董伟东',
                    timer:'2019-11-15',
                },
                 {   
                    id:3,
                    name:'吕紫薇',
                    timer:'2019-11-15',
                },
                {   
                    id:4,
                    name:'周石坤',
                    timer:'2019-11-15',
                }
            ]
        }
    }
}
</script>
<style>
  .el-table .el-table-column{
      text-align: center;
  }
</style>