<template>
 <div class="block">
   <router-view/>
   <Footer/>
  </div>
</template>

<script>
import Footer from './components/Footer.vue'

export default {
   components:{
      Footer
   }
};
</script>

<style>
 *{
    margin: 0;
    padding: 0;
    font-size: 16px;
    list-style: none;
 }

</style>
