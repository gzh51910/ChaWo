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
            <el-table-column label="序号">
                
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
                <template >
                    <el-button type="primary" icon="el-icon-edit" size="mini" ></el-button>
                    <el-button type="danger" icon="el-icon-delete" size="mini" @click="removeItem(scope.row._id)"></el-button>
                     <!-- <el-button type="danger" @click="open"></el-button> -->
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
            tableData: [{
                // number:1,
                _id:"5dccc52c70ec773229417fe6",
                brad_name:"普洱茶",
                ImgMin:"http://www.chawo.com/data/upload/shop/store/goods/2/2019/01/2_05999364496194725_360.jpg",
                Title:"2017年普秀 甲沱 生茶 100克/沱 1沱",
                Price:"7.80",
                Juan:"优选",
                Xl:"54872沱"

                }, {
                // number:2,
                _id :"5dccc52c70ec773229417fe7",
                brad_name : "普洱茶",
                ImgMin : "http://www.chawo.com/data/upload/shop/store/goods/2/2015/06/2_04865837228613250_360.jpg",
                Title : "2007年八角亭 黎明普洱 生茶 357克/饼  黎明茶厂 单片",
                Price : "75.00",
                Juan : null,
                Xl : "11991饼"

                },
                {
                // number:3,
                _id : "5dccc52c70ec773229417fe8",
                brad_name : "普洱茶",
                ImgMin : "http://www.chawo.com/data/upload/shop/store/goods/2/2017/12/2_05671890230647455_360.jpg",
                Title : "2017年中茶 7581 单片装 熟茶 250克/砖",
                Price : "108.00",
                Juan : null,
                Xl : "10622砖"
                }
                ,
                {
                // number:4,
               _id : "5dccc52c70ec773229417fe9",
                brad_name : "普洱茶",
                ImgMin : "http://www.chawo.com/data/upload/shop/store/goods/2/2015/01/2_04740401887582215_360.jpg",
                Title : "2014年大益 7572（新版）熟茶 357克/饼",
                Price : "105.00",
                Juan : null,
                Xl : "4372饼"

                }],
                currentPage1: 5,
                currentPage2: 5,
                currentPage3: 5,
                currentPage4: 4
        }
    },
     methods: {
         removeItem(id){
             window.console.log(id)
            //  window.console.log(this.tableData)
             this.tableData=this.tableData.filter(item=>item._id!=id)
            //  state.goodslist = state.goodslist.filter(item => item.id != id)
         },
    //   open() {
    //       window.console.log(this)
    //     this.$confirm('此操作将永久删除该商品, 是否继续?', '提示', {
    //       confirmButtonText: '确定',
    //       cancelButtonText: '取消',
    //       type: 'warning'
    //     })
    //     .then(() => {
    //       this.$message({
    //         type: 'success',
    //         message: '删除成功!'
    //       });
    //     }).catch(() => {
    //       this.$message({
    //         type: 'info',
    //         message: '已取消删除'
    //       });          
    //     });
    //   },
        handleSizeChange(val) {
        window.console.log(`每页 ${val} 条`);
        },
        handleCurrentChange(val) {
        window.console.log(`当前页: ${val}`);
      }
    }
    
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