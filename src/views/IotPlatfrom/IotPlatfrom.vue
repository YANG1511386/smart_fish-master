<template>
  <a-layout id="components-layout-demo-custom-trigger">
    <a-layout-sider v-model="collapsed" :trigger="null" collapsible>
       <div class="ant-pro-sider-menu-logo">
          <img src="../../assets/logo.png" style="width:170px" alt="logo"/>
        </div>
       

      <a-menu theme="dark" mode="inline" :default-selected-keys="['17']">

        <a-menu-item  key="17">
          <router-link to="/IotPlatfrom/Buding">
          <a-icon type="home" />
          <span>
           数字孪生鱼塘
            </span>
          </router-link>
        </a-menu-item>
        <a-menu-item key="4_8">
               <router-link to="/IotPlatfrom/pro_ctrl_status">
               <a-icon type="bank" />
              <span>
                产品行为指令
                </span>
               </router-link>
            </a-menu-item>

           <a-menu-item  key="1">
          <router-link to="/IotPlatfrom/Analysis">
          <a-icon type="pie-chart" />
          <span>
           统计分析
            </span>
          </router-link>
        </a-menu-item>
        

        <a-sub-menu key="sub1">
            <span slot="title"><a-icon type="dashboard" />设备管理</span>

             <a-menu-item key="4_1">
               <router-link to="/IotPlatfrom/DeviceStatus">
               <a-icon type="safety" />
              <span>
                产品配置
                </span>
               </router-link>
            </a-menu-item>

     <a-menu-item key="4_2">
               <router-link to="/IotPlatfrom/DeviceWaning">
               <a-icon type="alert" />
              <span>
                设备报警
                </span>
               </router-link>
            </a-menu-item>

          </a-sub-menu>

    <a-sub-menu key="sub2">
            <span slot="title"><a-icon type="robot" />规则引擎</span>

             <a-menu-item key="5_1">
               <router-link to="/IotPlatfrom/RulesInstance">
               <a-icon type="safety" />
              <span>
                规则实例
                </span>
               </router-link>
            </a-menu-item>
          </a-sub-menu>
    
    <a-menu-item key="4_7">
               <router-link to="/IotPlatfrom/pro_model">
               <a-icon type="lock" />
              <span>
                物模型
                </span>
               </router-link>
            </a-menu-item>
      
      <!--<a-menu-item key="4_4">
               <router-link to="/IotPlatfrom/pro_readdata">
               <a-icon type="safety" />
              <span>
                产品数据读取
                </span>
               </router-link>
            </a-menu-item>-->
      <a-menu-item key="4_3">
               <router-link to="/IotPlatfrom/product_data">
               <a-icon type="clock-circle" />
              <span>
                配置接收协议
                </span>
               </router-link>
            </a-menu-item>
      <!--<a-menu-item key="4_3">
               <router-link to="/IotPlatfrom/pro_status">
               <a-icon type="safety" />
              <span>
                产品状态
                </span>
               </router-link>
            </a-menu-item>-->

       <!--<a-sub-menu key="sub3">
            <span slot="title"><a-icon type="line-chart" />数据可视化</span>

          <a-menu-item key="7">
               <router-link to="/IotPlatfrom/ClassroomLive">
              课室情况
               </router-link>
            </a-menu-item>
          <a-menu-item key="16">
              <router-link to="/IotPlatfrom/Live">
              现场情况
              </router-link>
            </a-menu-item>

          </a-sub-menu>-->

       <a-sub-menu key="sub5">
            <span slot="title"><a-icon type="play-square" />视频网关</span>

             <!-- <a-menu-item key="7">
               <router-link to="/IotPlatfrom/Tentsensor">
              帐篷传感器
               </router-link>
            </a-menu-item> -->
          <a-menu-item key="20">
               <router-link to="/IotPlatfrom/Basiconfig">
               <a-icon type="key" />
              基本配置
               </router-link>
            </a-menu-item>
          <a-menu-item key="21">
              <router-link to="/IotPlatfrom/VideoDevices">
              <a-icon type="rocket" />
               视频设备
              </router-link>
            </a-menu-item>
             <a-menu-item key="22">
              <router-link to="/IotPlatfrom/Splitscreen">
              <a-icon type="sliders" />
               分屏展示
              </router-link>
            </a-menu-item>
          </a-sub-menu>

          <a-menu-item key="23">
              <router-link to="/IotPlatfrom/Showdata">
                  <a-icon type="pie-chart" />
                  <span>
                 数据展示
                </span>
              </router-link>
          </a-menu-item>

          <a-menu-item key="sub6">
               <router-link to="/logout">
               <a-icon type="logout" />
              <span>
                 注销
                </span>
               </router-link>
            </a-menu-item>


          <!-- <a-menu-item  key="13">
          <router-link to="/Home/Show">
          <a-icon type="link" />
          <span>
           返回主菜单
             </span>
          </router-link>
        </a-menu-item> -->

          <!-- <a-menu-item  key="14">
          <router-link to="/IotPlatfrom/Classroom">
          <a-icon type="upload" />
          <span>
           测试
             </span>
          </router-link>
        </a-menu-item> -->
      </a-menu>
    </a-layout-sider>
    <a-layout>
      <a-layout-header style="background: #fff; padding: 0">
        <a-icon
          class="trigger"
          :type="collapsed ? 'menu-unfold' : 'menu-fold'"
          @click="() => (collapsed = !collapsed)"
        />
         <a-avatar class="mylogo" style="backgroundColor:#87d068" icon="user" />
      </a-layout-header>
      <a-layout-content
        :style="{ margin: '24px 16px', padding: '0', background: '#fff', minHeight: '280px' }"
      >
     
       <router-view/>
     
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>
<script>
export default {
  data() {
    return {
      collapsed: false,
    };
  },
};
</script>
<style scoped>
#components-layout-demo-custom-trigger .trigger {
  font-size: 18px;
  line-height: 64px;
  padding: 0 24px;
  cursor: pointer;
  transition: color 0.3s;
}

#components-layout-demo-custom-trigger .trigger:hover {
  color: #1890ff;
}

#components-layout-demo-custom-trigger .logo {
  height: 32px;
  background: rgba(255, 255, 255, 0.2);
  margin: 16px;
}

.ant-layout{
  height: 100%;
}
.ant-pro-sider-menu-logo{
  overflow: hidden;
}
.mylogo{
  margin-top: 20px;
  margin-right: 20px;
  float: right;
}
</style>