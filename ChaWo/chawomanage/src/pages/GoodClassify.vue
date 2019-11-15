<template>
    <div style="padding:20px">
        <el-button type="success" icon="el-icon-plus">添加</el-button>
        <el-button type="danger" icon="el-icon-delete">删除</el-button>
          <el-table
            ref="multipleTable"
            :data="tableData"
            tooltip-effect="dark"
            style="width: 100%"
            @selection-change="handleSelectionChange">
            <el-table-column
            type="selection"
            width="55">
            </el-table-column>
            <el-table-column
            label="添加时间"
            width="120">
            <template slot-scope="scope">{{ scope.row.date }}</template>
            </el-table-column>
            <el-table-column
            prop="name"
            label="商品分类"
            width="120">
            </el-table-column>
            <el-table-column
            prop="address"
            label="添加时间"
            show-overflow-tooltip>
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
        tableData: [{
          date: '2016-05-03',
          name: '普洱茶',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-02',
          name: '红茶',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-04',
          name: '绿茶',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-01',
          name: '乌龙茶',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-08',
          name: '黑茶',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-06',
          name: '白茶',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-07',
          name: '花草茶',
          address: '上海市普陀区金沙江路 1518 弄'
        }],
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
      }
    }
  }

</script>
<style lang="stylus" scoped>

</style>