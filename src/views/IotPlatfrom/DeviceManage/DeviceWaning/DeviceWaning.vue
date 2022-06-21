<template>
    <div>
         <Breadcrumb :home="devicetitle"/><!--管理上1-->
         <SearchWaning/><!--中间-->
         <DeviceWaning/><!--下1-->
    </div>
</template>
<script>
import SearchWaning from '../../../../components/IotPlatfrom/DeviceWaning/SearchWaning.vue'
import Breadcrumb from '../../../../components/IotPlatfrom/commont/Breadcrumb.vue'
import DeviceWaning from '../../../../components/IotPlatfrom/DeviceWaning/DeviceWaning.vue'
export default {
   
    data(){
      return{
               devicetitle:{
                path:"/IotPlatfrom/Buding",
                title:"设备管理",
                secondtitle:"设备报警"
            },
      }
    },
    components:{
         Breadcrumb,
         DeviceWaning,
         SearchWaning
    }
}
</script>