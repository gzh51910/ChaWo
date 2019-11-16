<template>
    <div style="padding:20px">
        <el-button type="success" icon="el-icon-plus">添加</el-button>
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
              <el-button type="primary" icon="el-icon-edit" >修改</el-button>
              <el-button type="danger" icon="el-icon-delete">删除</el-button>
            </el-table-column>
        </el-table>
        <div style="margin-top: 20px">
            <el-button @click="toggleSelection()">取消选择</el-button>
        </div>
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
        let {data:{data}} =await this.$axios.get("http://localhost:8010/goods/classify");
        this.tableData=data
      },
     
    },
     created(){
        this.getDataClassify()
      }
  }

</script>
<style>
</style>