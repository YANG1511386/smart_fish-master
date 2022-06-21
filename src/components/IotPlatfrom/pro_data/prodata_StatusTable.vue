<template>
<div>
   <a-spin :spinning="spinning" tip="客官请稍等，小的马上就来">
  <a-table :pagination="pagination"  :columns="columns" :data-source="data" :scroll="scroll">
    <a  slot-scope="text">{{ text }}</a>
    <span slot="customTitle">ID</span>
    <span slot="action" slot-scope="text, record">
      <!-- <a>Invite 一 {{ record.name }}</a>
      <a-divider type="vertical" />
      <a>Delete</a>
      <a-divider type="vertical" /> -->
      <!--<a @click="()=>edit(record)" class="ant-dropdown-link">禁止 </a>
       <a-divider type="vertical" />
      <a @click="()=>recover(record)" class="ant-dropdown-link">恢复 </a>
       <a-divider type="vertical" />-->
       <a @click="()=>deletedevices(record)" class="ant-dropdown-link">删除信息 </a>
    </span>
  </a-table>
   </a-spin>
</div>


</template>

<script>
const columns = [
   {
    title: 'ID',
    dataIndex: 'myid',
    key: 'myid',
  },
  {
    title: 'jsonKey',
    dataIndex: 'jsonKey',
    key: 'jsonKey',
  },
  {
    title: '模型Id',
    dataIndex: 'modelId',
    key: 'modelId',
  },
  {
    title: '操作',
    key: 'action',
    scopedSlots: { customRender: 'action' },
  },
  
];
           /* "id": 1,
            "topic": "SW_LED",
            "message": "LED_ON",
            "behavior": "开灯",
            "modelId": 1*/

import  axios from 'axios'
export default {            //在模板中渲染成html后调用，通常初始化页面完成后在对html的dom进行操作
 
  name:"pro_statusTable",
   props:['list'],
  data() {            //为变量赋值
    return {
      
        //分页栏
          pagination: {
              position:'bottom',
              pageSize: 10,
              current: 1,
              total: 0
          },           
          //表格数据是否正在加载
          loading: false,
          //表格表头筛选条件
          filteredInfo: null,
          //表格表头排序条件
          sortedInfo: null,
          //表格选中行
          selectedRowKeys: [],
          //表格横向与纵向宽度
          //设置表格锁定表头和列时必须设置此配置
          scroll: {
              x: 1000,
              y: "calc(100vh - 450px)",
          },
      mypath:"",
      spinning:false,
      data:[],
      columns,
       mykey:1,
      
    };
  },

/*
            "id": 1,
            "keyvalue": "1234",
            "register": 1,
            "mqttUser": 1,
            "productName": "lamp"
 */
  watch:{//监听一个值的变化，然后执行对应函数
   
      list(n,o){
      //遍历数组
      this.spinning=false
      let this_1=this
      this.spinning=false
     this.data= n.map(item_1=>{
       return{
            jsonKey: item_1.jsonKey,
            myid: item_1.id,
            modelId: item_1.modelId  
            
       }
     })
   
      
    }
  },
  created(){                         ///////
    this.spinning=true
  },
  methods:{//编写js函数
    /*edit(recode){                                 ///////
      let _this=this
      _this.mypath = window.g.recover_devices
     // console.log(recode)
        axios.get(_this.mypath,
      { 
        headers:{
          Authorization:localStorage.getItem('Authorization')               //////
      },
        params:{
           id:recode.myid,
           
        }
      })
         .then(response =>{
         // this.devises = response.data.data
          // console.log(typeof(response.data))
          //console.log(response)
          if(response.data.code===200){
             _this.$message.success("禁止成功，三秒后更新列表")
          }else if(response.data.msg===44||response.data.msg===40){
               _this.$message.error("权限认证失效，请重新登录")
                _this.$router.push('/IotPlatfrom/Loging');
          }
          else{
             _this.$message.error("禁止失败，三秒后更新列表")
          }
        
        
         })
    },
    recover(recode){
        let _this=this
        _this.mypath = window.g.recover_devices
         axios.get(_this.mypath,
      { headers:{
          Authorization:localStorage.getItem('Authorization')
      },
        params:{
           hardwareid:recode.myid,
           status:true
        }
      })
         .then(response =>{
         // this.devises = response.data.data
          // console.log(typeof(response.data))
          //console.log(response)
         if(response.data.code===200){
             _this.$message.success("恢复成功，三秒后更新列表")
          }else if(response.data.msg===44||response.data.msg===40){
               _this.$message.error("权限认证失效，请重新登录")
                _this.$router.push('/IotPlatfrom/Loging');
          }
          else{
             _this.$message.error("恢复失败，三秒后更新列表")
          }
         })
    },*/
    deletedevices(recode){
      let _this=this
        _this.mypath =window.g.pro_data_delete
          axios.delete(_this.mypath,
      { headers:{
          Authorization:localStorage.getItem('Authorization')
      },
        params:{
           id:recode.myid,
        }
      })
         .then(response =>{
         // this.devises = response.data.data
          // console.log(typeof(response.data))
          //console.log(response)
         if(response.data.errorCode===200){
             _this.$message.success("删除设备成功，三秒后更新列表")
          }else if(response.data.msg===44||response.data.msg===40){
               _this.$message.error("权限认证失效，请重新登录")
                _this.$router.push('/IotPlatfrom/Loging');
          } else if(response.data.message===44||response.data.message===40){
               this_1.$message.error("权限认证失效，请重新登录")
                this_1.$router.push('/IotPlatfrom/Login');
          }
          else{
             _this.$message.error("删除设备失败，三秒后更新列表")
          }
         })
    },
       formatTime (time) {
        let unixtime = time
        let unixTimestamp = new Date(unixtime * 1000)
        let Y = unixTimestamp.getFullYear()
        let M = ((unixTimestamp.getMonth() + 1) > 10 ? (unixTimestamp.getMonth() + 1) : '0' + (unixTimestamp.getMonth() + 1))
        let D = (unixTimestamp.getDate() > 10 ? unixTimestamp.getDate() : '0' + unixTimestamp.getDate())
        let toDay = Y + '-' + M + '-' + D
        return toDay
      }
  }
};
</script>