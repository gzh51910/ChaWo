<template>
  <el-button type="text" @click="open">点击打开 Message Box</el-button>
</template>
<script>
import { MessageBox } from 'element-ui';
  export default {
    data() {
      return {
        checked: true
      };
    },
    methods: {
      open() {
        // console.log(this);
        
        this.MessageBox.confirm ('此操作将永久删除该文件, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.MessageBox.message({
            type: 'success',
            message: '删除成功!'
          });
        }).catch(() => {
          this.MessageBox.message ({
            type: 'info',
            message: '已取消删除'
          });          
        });
      }
    }
  };
</script>