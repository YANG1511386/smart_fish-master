<template>
<!-- 物模型 -->
   <div class="DeviceStatus">
           <Breadcrumb :home="devicetitle"/>
          <StatusTotal :total="devises"/><!--管理上半部分，关于设备三个状态，全部设备，在线，离线-->
          <NewDevice/>
          <a-divider />
          <StatusTable v-bind:list="devises"/><!--管理下半部分，设备的id，名称，注册时间，状态，-->
        </div>
</template>

<script>
// 这个面包屑是共有组件
import NewDevice from '../../../components/IotPlatfrom/add_model/add_model'
import Breadcrumb from '../../../components/IotPlatfrom/commont/Breadcrumb'
import StatusTotal from '../../../components/IotPlatfrom/pro_model/model_StatusTotal'
import StatusTable from '../../../components/IotPlatfrom/pro_model/model_StatusTable'
import axios from 'axios'
export default {
  name:"DeviceStatus",
  components:{
    Breadcrumb,
    StatusTotal,
    StatusTable,
    NewDevice
  },
  data(){
    return{
        timer:null,
        mypath:"",
        devises:[],
         devicetitle:{
                path:"/IotPlatfrom/Analysis",
                title:"设备管理",
                secondtitle:"设备状态"
            },
    }
  },
  beforeDestroy(){
    clearTimeout(this.timer)
  },

  created(){
     this.mytimer()
  },
  methods:{
     mytimer(){
       let this_ = this
       this_.timer = setInterval(function getdata() {
        
         this_.mypath = window.g.model_list
        axios.get(this_.mypath,{
            headers:{
          Authorization:localStorage.getItem('Authorization')
      }
         })
         .then(response =>{
          // console.log(response.data)
         // this.devises = response.data.data
          // console.log(typeof(response.data))
        if(response.data.errorCode===2001){
               this_.$message.error("权限认证失效，请重新登录")
                this_.$router.push('/Login');
          }
         this_.devises=response.data.data
        //console.log(response.data)
         
         })
      },2000)
    }
  },


}
</script>
