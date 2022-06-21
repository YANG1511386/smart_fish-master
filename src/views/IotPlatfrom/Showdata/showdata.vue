<template>
  <div class="flexmain" style="width: 100%; height: 100%; display: flex">
    <!-- 为 坐标轴 准备一个定义了宽高的 DOM -->
    <div id="first" style="position: absolute; width: 65%; height: 80%"></div>
    <!-- 为 温度仪表盘 准备一个定义了宽高的 DOM -->
    <div id="panel" style="height: 100%">
      <div
        id="second"
        style="position: absolute; right: 3%; top: 6%; height: 55%; width: 20%"
      ></div>
      <!-- 为 溶氧仪表盘 准备一个定义了宽高的 DOM -->
      <div
        id="three"
        style="position: absolute; right: 3%; top: 45%; height: 50%; width: 20%"
      ></div>
    </div>
  </div>
</template>

<script>
import * as echarts from "echarts";
import axios from "axios";

export default {
  inject: ["reload"],
  data: () => ({
    mypath: null,
    // status: false,
    temp: null,
    oxygen: null,
    hun: null,
    ph: null,
  }),

  methods: {
    searchPH: async function () {
      let that= this
      this.mypath= window.g.read_data
      var books;
      var topic = "watertemp";
      var secondtopic = "wateroxygen";
      var threetopic = "waterhun";
      var fourtopic = "waterph";
      //获取当前时间戳
      var endtime = Date.parse(new Date());
      //获取当天0点时间戳
      var starttime =
        new Date(new Date().toLocaleDateString()).getTime() / 1000;
      console.log(starttime);
      var this_ = this;
      //水循环温度请求
      var res = await axios({
        url: that.mypath,
        headers: {
          Authorization: localStorage.getItem("Authorization"),
        },
        method: "get",
        contentType: "application/json",
        params: {
          time1: 0,
          time2: endtime,
          dataId: 9,
        },
      })
        .then((res) => {
          if(res.data.errorCode===2001){
               this_.$message.error("权限认证失效，请重新登录")
                this_.$router.push('/Login');
          }
          console.log(res.data);
          this_.temp = res.data.data;
          return this_.temp;
        }, 2000)
        .catch(function (error) {
          //alert("请求数据失败");
        });
      //水循环溶氧量请求
      var restwo = await axios({
        url: that.mypath,
        headers: {
          Authorization: localStorage.getItem("Authorization"),
        },
        method: "get",
        contentType: "application/json",
        params: {
          time1: 0,
          time2: endtime,
          dataId: 10,
        },
      })
        .then((res) => {
         
          this_.oxygen = res.data.data;
          return this_.oxygen;
        }, 2000)
        .catch(function (error) {
          //alert("请求数据失败");
        });
      //水循环浑浊度请求
      var resthree = await axios({
        url: that.mypath,
        headers: {
          Authorization: localStorage.getItem("Authorization"),
        },
        method: "get",
        contentType: "application/json",
        params: {
          time1: 0,
          time2: endtime,
          dataId: 11,
        },
      })
        .then((res) => {
         
          this_.hun = res.data.data;
          return this_.hun;
        }, 2000)
        .catch(function (error) {
          //alert("请求数据失败");
        });
      //水循环浑浊度请求
      var resfour = await axios({
        url: that.mypath,
        headers: {
          Authorization: localStorage.getItem("Authorization"),
        },
        method: "get",
        contentType: "application/json",
        params: {
          time1: 0,
          time2: endtime,
          dataId: 12,
        },
      })
        .then((res) => {
         
          this_.ph = res.data.data;
          return this_.ph;
        }, 2000)
        .catch(function (error) {
          // alert("请求数据失败");
        });
      this.oxygen = restwo;
      this.temp = res;
      this.hun = resthree;
      this.ph = resfour;

      // alert(this.oxygen)
      this.first();
    },

    first: function () {
      const colors = [
        "#47bbad",
        "rgba(187,154,52,0.6)",
        "#fd7347",
        "rgba(46,83,196,0.78)",
      ];
      var firstoption;
      //     username:name
      // }
      // console.log(resp.data.data)
      var dom = document.getElementById("first");
      var myChart = echarts.init(dom, null, {
        renderer: "canvas",
        useDirtyRect: false,
      });
      firstoption = {
        dataZoom: [
          {
            show: true,
            start: 0,
            end: 100,
          },
          {
            type: "inside",
            start: 0,
            end: 100,
          },
        ],
        color: colors,
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "cross",
          },
          formatter:
            "{a0}: {c0}<br />{a1}: {c1}JTU<br />{a2}: {c2}°C<br />{a3}: {c3}mg/L",
        },
        grid: {
          right: "16%",
          left: "16%",
        },
        toolbox: {
          feature: {
            dataView: { show: true, readOnly: false },
            restore: { show: true },
            saveAsImage: { show: true },
          },
        },
        legend: {
          data: ["PH值", "浑浊度", "温度", "溶氧"],
        },
        xAxis: [
          {
            type: "category",
            axisTick: {
              alignWithLabel: true,
            },
            // prettier-ignore
            data: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
          },
        ],
        yAxis: [
          {
            type: "value",
            name: "PH值",
            position: "right",
             min: "dataMin", //取最小值为最小刻度
            max: "dataMax", //取最大值为最大刻度

            min: function (value) {
              //取最小值向下取整为最小刻度
              return Math.floor(value.min);
            },
            max: function (value) {
              //取最大值向上取整为最大刻度
              return Math.ceil(value.max);
            },

            minInterval: 0.1, //分割刻度
            scale: true, //自适应
            alignTicks: true,
            axisLine: {
              show: true,
              lineStyle: {
                color: colors[0],
              },
            },
            axisLabel: {
              
              formatter: "{value} ",
            },
          },
          {
            type: "value",
            name: "浑浊度",
            position: "right",
             min: "dataMin", //取最小值为最小刻度
            max: "dataMax", //取最大值为最大刻度

            min: function (value) {
              //取最小值向下取整为最小刻度
              return Math.floor(value.min);
            },
            max: function (value) {
              //取最大值向上取整为最大刻度
              return Math.ceil(value.max);
            },


            scale: true, //自适应
            alignTicks: true,
            offset: 60,
            axisLine: {
              show: true,
              lineStyle: {
                color: colors[1],
              },
            },
            axisLabel: {
              
              formatter: "{value} JTU",
            },
          },
          {
            type: "value",
            name: "温度",
            position: "left",
             min: "dataMin", //取最小值为最小刻度
            max: "dataMax", //取最大值为最大刻度

            min: function (value) {
              console.log(Math.floor(value.min))
              //取最小值向下取整为最小刻度
              return Math.floor(value.min);
            },
            max: function (value) {
              console.log(Math.ceil(value.max))
              //取最大值向上取整为最大刻度
              return Math.ceil(value.max);
            },
            
            

            scale: true, //自适应
            alignTicks: true,
            axisLine: {
              show: true,
              lineStyle: {
                color: colors[2],
              },
            },
            axisLabel: {
              
              formatter: "{value} °C",
            },
          },
          {
            type: "value",
            name: "溶氧",
            position: "left",
            alignTicks: true,

            min: "dataMin", //取最小值为最小刻度
            max: "dataMax", //取最大值为最大刻度

            min: function (value) {
              //取最小值向下取整为最小刻度
              return Math.floor(value.min);
            },
            max: function (value) {
              //取最大值向上取整为最大刻度
              return Math.ceil(value.max);
            },


            scale: true, //自适应
            

            offset: 60,
            axisLine: {
              show: true,
              lineStyle: {
                color: colors[3],
              },
            },
            axisLabel: {
              
              formatter: "{value} mg/L",
            },
          },
        ],
        series: [
          {
            name: "PH值",
            barWidth: 40,
            type: "bar",
            textAlign: "center",
            data: this.ph,
          },
          {
            barGap: "-75%" /*这里设置包含关系，只需要这一句话*/,
            barWidth: 20,
            name: "浑浊度",
            type: "bar",
            textAlign: "center",
            yAxisIndex: 1,
            data: this.hun,
          },
          {
            name: "温度",
            type: "line",
            itemStyle: {
              normal: {
                lineStyle: {
                  width: 3,
                },
              },
            },
            smooth: true,
            yAxisIndex: 2,
            data: this.temp,
          },
          {
            name: "溶氧",
            type: "line",
            smooth: true,
            itemStyle: {
              normal: {
                lineStyle: {
                  width: 3,
                  type: "dotted", //'dotted'虚线 'solid'实线
                },
              },
            },
            yAxisIndex: 3,
            data: this.oxygen,
          },
        ],
      };
      if (firstoption && typeof firstoption === "object") {
        myChart.setOption(firstoption);
      }
      window.addEventListener("resize", function () {
        myChart.resize();
      });
    },
  },
  async created() {
    await this.searchPH();
  },
  async mounted() {
    const colors = [
      "#47bbad",
      "rgba(187,154,52,0.6)",
      "#fd7347",
      "rgba(46,83,196,0.78)",
    ];
    // var firstoption;
    // var dom = document.getElementById('first');
    // var myChart = echarts.init(dom, null, {
    //     renderer: 'canvas',
    //     useDirtyRect: false
    // });
    //     username:name
    // }
    // console.log(resp.data.data)
    // var dom = document.getElementById('first');
    // var myChart = echarts.init(dom, null, {
    //     renderer: 'canvas',
    //     useDirtyRect: false
    // });
    var secondoption;
    var chartDom = document.getElementById("second");
    var secondmyChart = echarts.init(chartDom);
    secondoption = {
      // grid: {
      //     right: '0%',
      //     left:'16%'
      // },
      series: [
        {
          type: "gauge",
          center: ["50%", "60%"],
          startAngle: 200,
          endAngle: -20,
          min: 0,
          max: 60,
          splitNumber: 12,
          itemStyle: {
            color: "#FFAB91",
          },
          progress: {
            show: true,
            width: 60,
          },
          pointer: {
            show: false,
          },
          axisLine: {
            lineStyle: {
              width: 20,
            },
          },
          axisTick: {
            distance: -35,
            splitNumber: 5,
            lineStyle: {
              width: 2,
              color: "#999",
            },
          },
          splitLine: {
            distance: -42,
            length: 14,
            lineStyle: {
              width: 2,
              color: "#999",
            },
          },
          axisLabel: {
            distance: -11,
            color: "#999",
            fontSize: 15,
          },
          anchor: {
            show: false,
          },
          title: {
            show: false,
          },
          detail: {
            valueAnimation: true,
            width: "80%",
            lineHeight: 20,
            borderRadius: 8,
            offsetCenter: [0, "-15%"],
            fontSize: 15,
            fontWeight: "bolder",
            formatter: "{value} °C",
            color: "auto",
          },
          data: [
            {
              value: 20,
            },
          ],
        },
        {
          type: "gauge",
          center: ["50%", "60%"],
          startAngle: 200,
          endAngle: -20,
          min: 0,
          max: 60,
          itemStyle: {
            color: "#fd7347",
          },
          progress: {
            show: true,
            width: 8,
          },
          pointer: {
            show: false,
          },
          axisLine: {
            show: false,
          },
          axisTick: {
            show: false,
          },
          splitLine: {
            show: false,
          },
          axisLabel: {
            show: false,
          },
          detail: {
            show: false,
          },
          data: [
            {
              value: 20,
            },
          ],
        },
      ],
    };
    secondoption && secondmyChart.setOption(secondoption);
    var threeoption;
    var threechartDom = document.getElementById("three");
    var threemyChart = echarts.init(threechartDom);
    threeoption = {
      tooltip: {
        formatter: "{a} <br/>{b} : {c}%",
      },
      series: [
        {
          name: "Pressure",
          type: "gauge",
          progress: {
            show: true,
          },
          detail: {
            valueAnimation: true,
            textStyle: {
              fontSize: 19,
            },
            formatter: "{value}mg/L",
          },
          title: {
            //设置仪表盘中间显示文字样式
            textStyle: {
              fontWeight: "bold",
              fontSize: 1,
            },
          },
          data: [
            {
              value: 50,
              name: "溶氧量",
            },
          ],
        },
      ],
    };
    threeoption && threemyChart.setOption(threeoption);
  },
};
</script>

<style scoped>
</style>