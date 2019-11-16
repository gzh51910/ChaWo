<template>
    <div style="width:100%">
        <dl style="width:100%">
			<dt v-for="(item) in dl" :key="item.cid" @click="go(item.cid)" style="width:100%"><p><i :class="item.col"></i>{{item.text}}<i class="el-icon-arrow-right"></i></p></dt>
        </dl>
    </div>
</template>
<script>
export default {
   data(){
       return {
           dl:[{
              col:"green",
              text:"滇红茶",
              gcid:4,
              cid:17
           },{
               col:"hotpink",
              text:"金骏眉",
              gcid:4,
              cid:44
           },{
               col:"gray",
              text:"正山小种",
              gcid:4,
              cid:42
           },{
               col:"pink",
              text:"祁门红茶",
              gcid:4,
              cid:43
           },{
               col:"yellow",
              text:"英德红茶",
              gcid:4,
              cid:54
           },{
               col:"red",
              text:"其他红茶",
              gcid:4,
              cid:45
           }]
       }
   },
   methods:{
       go(cid){
           this.$router.replace('/list',{
               parms:cid
           })
       }
   }
}
</script>
<style>
    
</style>