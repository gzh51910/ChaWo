<template>
    <div style="padding:20px">
        <el-row size="medium">
            <el-button type="success" icon="el-icon-plus">添加</el-button>
            <el-button type="danger" icon="el-icon-delete">删除</el-button>
            <div class="search-wrap">
            <el-input class="Input-search" placeholder="请输入内容" v-model="input">
            </el-input>
                <el-dropdown split-button type="primary" trigger="click" placement="bottom" size="medium" style="margin:0 20px">
                    请选择分类
                    <el-dropdown-menu slot="dropdown" >
                        <el-dropdown-item>普洱茶</el-dropdown-item>
                        <el-dropdown-item>红茶</el-dropdown-item>
                        <el-dropdown-item>绿茶</el-dropdown-item>
                        <el-dropdown-item>乌龙茶</el-dropdown-item>
                        <el-dropdown-item>黑茶</el-dropdown-item>
                        <el-dropdown-item>白茶</el-dropdown-item>
                        <el-dropdown-item>花草茶</el-dropdown-item>
                    </el-dropdown-menu>
                </el-dropdown>
                <el-button type="success" icon="el-icon-search">搜索</el-button>
            </div>
        </el-row>
      <template>
        <el-table :data="tableData" border style="width: 100%;margin-bottom:15px" class="table table-striped">
            <el-table-column label="全选" > <el-checkbox v-model="checked2"></el-checkbox></el-table-column>
            <el-table-column label="序号" style="width:20px">
                
                <template slot-scope="scope">
                    <span>{{scope.$index+1 }}</span>
                </template>
            </el-table-column>
            <el-table-column label="商品名称">
                <template slot-scope="scope">
                    <span>{{ scope.row.brad_name }}</span>
                </template>
            </el-table-column>
            <el-table-column label="商品ID">
                <template slot-scope="scope">
                    <span>{{ scope.row._id }}</span>
                </template>
            </el-table-column>
            <el-table-column  prop="Title" label="商品标题">
                <template slot-scope="scope">
                    <span>{{ scope.row.Title }}</span>
                </template>
            </el-table-column>
            <el-table-column label="商品价格">
                <template slot-scope="scope">
                    <span >{{ scope.row.Price }}</span>
                </template>
            </el-table-column>
            <el-table-column label="商品销量">
                <template slot-scope="scope">
                    <span>{{ scope.row.Xl }}</span>
                </template>
            </el-table-column>
            <el-table-column  label="操作" >
                <template slot-scope="scope">
                    <el-button type="primary" icon="el-icon-edit" size="mini" ></el-button>
                    <el-button type="danger" icon="el-icon-delete" size="mini" @click="removeItem(scope.row._id)"></el-button>
                </template>
                
            </el-table-column>
        </el-table>

    </template>
      <el-pagination
      class="pagination"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="currentPage4"
      :page-sizes="[50, 100]"
      :page-size="100"
      layout="total, sizes, prev, pager, next, jumper"
      :total="400">
    </el-pagination>
    </div>
</template>
<script>
export default {
    data(){
        return {
            input:'',
            checked2:"",
            number:1,

            tableData:[],//保存数据
            currentPage1: 5,
            currentPage2: 5,
            currentPage3: 5,
            currentPage4: 4
        }
    },
     methods: {
        //  发送请求获取数据
        async  getData(){

             let {data:{data}}= await this.$axios.get("http://localhost:8010/goods");
            //  console.log(data);
            //  let {_id,brad_name,Title,Price,Xl}=data;
            //  console.log(data[0]._id);
            console.log(data);
            this.tableData=data;
            
             
             
         },
         removeItem(id){
             window.console.log(id)
             this.tableData=this.tableData.filter(item=>item._id!=id)
         },
            handleSizeChange(val) {
            window.console.log(`每页 ${val} 条`);
            },
            handleCurrentChange(val) {
            window.console.log(`当前页: ${val}`);
            },
    },
       created() {
        this.getData();
    },

    
}
</script>
<style>
    .Input-search{
        width: 300px;
        height: 80px;
    }
    .search-wrap{
        float: right;
        margin-right: 80px;
    }
    .pagination{
        width: 200px;
        margin: 0 auto;
    }
</style>