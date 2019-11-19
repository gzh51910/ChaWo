<template>
    <div style="padding:20px;width:500px">
      <template>
        <el-button type="success" icon="el-icon-plus" @click="addClassify">添加</el-button>
        <!-- <el-button type="danger" icon="el-icon-delete">删除</el-button> -->
          <el-table ref="multipleTable" :data="tableData"  tooltip-effect="dark"
            style="width: 100%"
            @selection-change="handleSelectionChange">
            <el-table-column
            type="selection"
            width="55">
            </el-table-column>
            <el-table-column label="序号" width="120">
            <template slot-scope="scope">{{ scope.$index+1 }}</template>
            </el-table-column>
            <el-table-column prop="gc_name" label="商品分类" width="120">
            </el-table-column>
            <el-table-column prop="address" label="操作" >
              <!-- <el-button type="primary" icon="el-icon-edit" >修改</el-button>
              <el-button type="danger" icon="el-icon-delete" @click="removeClassify()">删除</el-button> -->

               <template slot-scope="scope">
                    <el-button type="primary" icon="el-icon-edit" size="mini"></el-button>
                    <el-button type="danger" icon="el-icon-delete" size="mini" @click="removeClassify(scope.row._id)"></el-button>
                </template>
            </el-table-column>
        </el-table>
        <div style="margin-top: 20px">
            <el-button @click="toggleSelection()">取消选择</el-button>
        </div>
        </template>
    </div>
</template>
<script>
export default {
     data() {
      return {
        // tableData:[],
        tableData: [],
        multipleSelection: []
      }
    },

    methods: {
      toggleSelection(rows) {
        if (rows) {
          rows.forEach(row => {
            this.$refs.multipleTable.toggleRowSelection(row);
          });
        } else {
          this.$refs.multipleTable.clearSelection();
        }
      },
      handleSelectionChange(val) {
        this.multipleSelection = val;
      },
      // 发送请求获取商品分类
     async getDataClassify(){
        let {data:{data}} =await this.$axios.get("http://121.199.11.112:8010/goods/classify");
        this.tableData=data
      },
      // 路由跳转
     addClassify(){
       this.$router.push('/addclassify')
     },
    //  删除
     removeClassify(_id){
       this.tableData=this.tableData.filter(item=>item._id!=_id)
       this.$axios.delete("http://121.199.11.112:8010/goods/removeClassify/"+_id)
     }
    },
     created(){
        this.getDataClassify()
      }
  }

</script>
<style>
</style>