<template>
   <div class="schoolroom">
         <div class="school_contain">
             <div class="buding_title"><h1 style="font-size:.46875rem;">数 字 孪 生 智 慧 鱼 塘</h1></div>
            <img width="90%" height="600" style="display: inline-block;" src="../../assets/IotPlatfrom/image002.jpg" alt="" srcset="">
           
            
      </div>
</div>


</template>
<style scoped>

/* 标题 */
.buding_title{
    display: inline-block;
    position: absolute;
    width: 10.9375rem;
    top: .78125rem;
    left: 3.1625rem;
    transform: scale(0.6);
    text-align: center;
   border: 2px solid;
   background-color: rgb(185, 209, 235);
   
}

/* 背景 */
.schoolroom{
   margin-top: -5%;
   height: 100%;
   width: 100%;
   background-color: #fff;
}
/* 布局大小 */
.school_contain{
    margin: 0 auto;
    position: relative;
      width: 19.2rem;
   
}

</style>
<script>
// import Left from '../components/Buding/Left/Left.vue'
import Left from '../../components/IotPlatfrom/Buding/Left/Left'
import Right from '../../components/IotPlatfrom/Buding/Right/Right'
import Center from '../../components/IotPlatfrom/Buding/Center/Center'





export default {
     name:"Buding",
     components:{
       Left,
       Center,
       Right
     
        
     },
    
}
</script>
