<template>
    <div style="padding:20px">
        <el-row size="medium">
            <el-button type="success" icon="el-icon-plus" @click="addItem('./addgood')">添加</el-button>
            <el-button type="danger" icon="el-icon-delete">删除</el-button>
            <div class="search-wrap">
            <el-input class="Input-search" placeholder="请输入商品名称" v-model="input">
            </el-input>
            <el-select v-model="form.region" placeholder="请选择">
                <el-option label="普洱茶" value="shanghai"></el-option>
                <el-option label="红茶" value="beijing"></el-option>
                <el-option label="绿茶" value="shanghai"></el-option>
                <el-option label="乌龙茶" value="beijing"></el-option>
                <el-option label="黑茶" value="shanghai"></el-option>
                <el-option label="白茶" value="beijing"></el-option>
                <el-option label="花草茶" value="shanghai"></el-option>
            </el-select>

                <el-button type="success" icon="el-icon-search">搜索</el-button>
            </div>
        </el-row>
      <template>
        <el-table :data="tableData" border style="width: 100%;margin-bottom:15px" class="table table-striped">
            <el-table-column label="全选" type="selection"></el-table-column>
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
            <el-table-column label="商品编号">
                <template slot-scope="scope">
                    <span>{{ scope.row._id }}</span>
                </template>
            </el-table-column>
            <el-table-column  prop="Title" label="商品标题">
                <template slot-scope="scope">
                    <span>{{ (scope.row.Title).slice(0,25) }}</span>
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
                    <el-button type="primary" icon="el-icon-edit" size="mini" @click="updateItem(scope.row._id)"></el-button>
                    <el-button type="danger" icon="el-icon-delete" size="mini" @click="removeItem(scope.row._id)"></el-button>
                </template>
                
            </el-table-column>
        </el-table>

    </template>

    <el-pagination
        class="pagination"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        background
        layout="prev, pager, next"
        :total="810">
    </el-pagination>
    </div>
</template>
<script>
export default {
    data(){
        return {

            input:'',
            checked2:"",
            size:10,
            page:1,
            tableData:[],//保存数据
            // classify:["普洱茶","红茶","绿茶","乌龙茶","黑茶","白茶","花草茶"]
             form: {
                name: '',
                region: '',
            },
        }
    },
     methods: {
        //  发送请求获取数据
        async  getData(){
            let {data:{data}}= await this.$axios.get("http://localhost:8010/goods/find"+`?page=${this.page}+&size=${this.size}`);
            this.tableData=data;
            },
            addItem(path){
                this.$router.push(path);
            },
            updateItem(id){
                this.$router.push({path:"/goodamend",query:{id:id}})
            },
            removeItem(id){
                window.console.log(id)
                this.tableData=this.tableData.filter(item=>item._id!=id);
                this.$axios.delete("http://localhost:8010/goods/del/"+id)
            },
            handleSizeChange(val) {
            window.console.log(`每页 ${val} 条`);
            },
            handleCurrentChange(val) {
            this.page=val;
            window.console.log(this.page)
            this.getData();
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
    }
    .pagination{
        width: 200px;
        margin: 0 auto;
    }
</style>