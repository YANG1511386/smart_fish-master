<template>
<div>
   <a-spin :spinning="spinning" tip="客官请稍等，小的马上就来">
  <a-table :pagination="pagination"  :columns="columns" :data-source="data">
    <a  slot-scope="text">{{ text }}</a>
    <span slot="customTitle">ID</span>
    <span slot="action" slot-scope="text, record">
      <!-- <a>Invite 一 {{ record.name }}</a>
      <a-divider type="vertical" />
      <a>Delete</a>
      <a-divider type="vertical" /> -->
      <a @click="()=>edit(record)" class="ant-dropdown-link">播放 </a>
        <a-divider type="vertical" />
      <a @click="()=>recover(record)" class="ant-dropdown-link">修改</a>
        <a-divider type="vertical" />
       <a @click="()=>deletedevices(record)" class="ant-dropdown-link">删除</a>
    </span>
  </a-table>
         <a-modal
 :visible="visible"
 title="水上云台控制"
 @cancel="handleCancel"
  @create="handleCreate">
    <LivePlayer :videoUrl="videoUrl" fluent autoplay live stretch></LivePlayer>
     <div class="move">
      <div class="button1"><a-button @click="()=>submitB1()" type="primary">向上</a-button></div>
      <div class="button2"><a-button @click="()=>submitB2()" type="primary">向下</a-button></div>
      <div class="button3"><a-button @click="()=>submitB3()" type="primary">向左</a-button></div>
      <div class="button4"><a-button @click="()=>submitB4()" type="primary">向右</a-button></div>
      <div class="button3"><a-button @click="()=>submitB5()" type="primary">放大</a-button></div>
      <div class="button4"><a-button @click="()=>submitB6()" type="primary">缩小</a-button></div>
    </div>
</a-modal>
   </a-spin>
</div>

</template>

<script>

const columns = [
      {
    title: '名称',
    dataIndex: 'myname',
    key: 'myname',
  },
   {
    title: '服务器地址',
    dataIndex: 'myip',
    key: 'myip',
  },
 {
    title: '端口号',
    dataIndex: 'myport',
    key: 'myport',
  },
  {
    title: 'AppName',
    dataIndex: 'myappname',
    key: 'myappname',
  },
    {
    title: '串流密钥',
    dataIndex: 'mymishi',
    key: 'mymishi',
  },
  {
    title: '播放格式',
    dataIndex: 'mytype',
    key: 'mytype',
   
  },
    {
    title: '时间',
    dataIndex: 'mytime',
    key: 'mytime',
  },

  {
    title: '操作',
    key: 'action',
    scopedSlots: { customRender: 'action' },
  },
];

// let data = [
//   {
//     key: '1',
//     myip: '172.22.12.6',
//     myport: "3001",
//     passid: '34020000001320000001',
//      mytype: 'https-flv',
//     mytime:"2021-04-10",
    
//   },

// ];
    // let listobject={
    //         key: "",
    //         id: "",
    //         name: "",
    //         time: 0,
    //         state: true,
    //       }


import  axios from 'axios'
import LivePlayer from '@liveqing/liveplayer'
export default {
 
  name:"ConmonList",
   props:['list'],
  data() {
    return {
       videoUrl:"",
        visible:false,
      pagination:{
       pageSize:7
      },

      mypath:"",
      spinning:false,
      data:[
           {
    key: '1',
      myname: '室内测试',
    myip: '172.22.12.6',
    myport: "3001",
    myappname:"live",
    mymishi:"stream",
     mytype: 'http-flv',
    mytime:"2021-04-10",
    
  },
      ],
      columns,
       mykey:1,
      
    };
  },
beforeDestroy(){
  this.videoUrl=null
},
components:{
   LivePlayer 
},
  beforeCreate(){
    
  },
  created(){
    this.videoUrl=window.g.live_videoUrl
    this.spinning=false//加载中动画
  },
  methods:{
      edit(item){
         this.visible=true
         console.log("播放")
      },
      handleCancel(){
          this.visible=false
      },
      handleCreate(){
          this.visible=false
      },
      submitB1(){
        console.log("向上")
          axios.get("https://ptz.rslly.top/api/v1/gb28181?action=sip_ptz&id=34020000001320000001&chid=34020000001320000005&ptzcmd=up&speed=136")
          .then(response =>{
            console.log(response)
          }) 
          axios.get("http://ptz.rslly.top/api/v1/gb28181?action=sip_ptz&id=34020000001320000001&chid=34020000001320000005&ptzcmd=stop&speed=136")
           .then(response =>{
            console.log(response)
          }) 
      },
      submitB2(){
        console.log("向下")
          axios.get("https://ptz.rslly.top/api/v1/gb28181?action=sip_ptz&id=34020000001320000001&chid=34020000001320000005&ptzcmd=down&speed=136")
          .then(response =>{
            console.log(response)
          }) 
           axios.get("http://ptz.rslly.top/api/v1/gb28181?action=sip_ptz&id=34020000001320000001&chid=34020000001320000005&ptzcmd=stop&speed=136")
           .then(response =>{
            console.log(response)
          }) 
      },
      submitB3(){
        console.log("向左")
          axios.get("https://ptz.rslly.top/api/v1/gb28181?action=sip_ptz&id=34020000001320000001&chid=34020000001320000005&ptzcmd=left&speed=136")
          .then(response =>{
            console.log(response)
          }) 
           axios.get("http://ptz.rslly.top/api/v1/gb28181?action=sip_ptz&id=34020000001320000001&chid=34020000001320000005&ptzcmd=stop&speed=136")
           .then(response =>{
            console.log(response)
          }) 
      },
      submitB4(){
        console.log("向右")
          axios.get("https://ptz.rslly.top/api/v1/gb28181?action=sip_ptz&id=34020000001320000001&chid=34020000001320000005&ptzcmd=right&speed=136")
          .then(response =>{
            console.log(response)
          }) 
           axios.get("http://ptz.rslly.top/api/v1/gb28181?action=sip_ptz&id=34020000001320000001&chid=34020000001320000005&ptzcmd=stop&speed=136")
           .then(response =>{
            console.log(response)
          }) 
      },
      submitB5(){
        console.log("放大")
          axios.get("https://ptz.rslly.top/api/v1/gb28181?action=sip_ptz&id=34020000001320000001&chid=34020000001320000005&ptzcmd=zoomin&speed=136")
          .then(response =>{
            console.log(response)
          }) 
      },
      submitB6(){
        console.log("缩小")
          axios.get("https://ptz.rslly.top/api/v1/gb28181?action=sip_ptz&id=34020000001320000001&chid=34020000001320000005&ptzcmd=zoomout&speed=136")
          .then(response =>{
            console.log(response)
          }) 
      }

  }
};
</script>
<style>
   .move{
     display: flex;
     
   }
   .button1{
     margin-left:10px;
     margin-right:10px;
   }
   .button2{
     margin-right:10px;
   }
   .button3{
     margin-right:10px;
   }
   .button4{
     margin-right:10px;
   }
   .button5{
     margin-right:10px;
   }

</style>