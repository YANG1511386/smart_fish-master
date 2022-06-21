<template>
  <div class="co2_contain">
    
    <div id="Co2" class="co2"></div>
  </div>
</template>

<style scoped>
.co2_contain {
  display: flex;
}

.co2 {
  position: absolute;
  width: 536px;
  height: 558px;
  padding: 0px;
  margin: 0px;
  border-width: 0px;
  cursor: default;
}
</style>

<script>
import * as echarts from "echarts/core";
import { GridComponent } from "echarts/components";
import { LineChart } from "echarts/charts";
import { UniversalTransition } from "echarts/features";
import { CanvasRenderer } from "echarts/renderers";
import axios from "axios";

echarts.use([GridComponent, LineChart, CanvasRenderer, UniversalTransition]);
export default {
  data() {
    return {
      data1: [ 0],
      data2: [0]
    };
  },
  mounted() {
    this.drawLine();
  },
  methods: {
    drawLine() {
      let _this = this;
      let chartDom = document.getElementById("Co2");
      this.myChart = echarts.init(chartDom);
      axios
        .get("https://api.rslly.top/api/v2/readData", {
          headers: {
            Authorization: localStorage.getItem("Authorization"),
          },
          params: {
            time1: 1654001937,
            time2: 1654002034,
            dataId: 10,
          },
        })
        .then((response) => {
          let temp = response.data;
          for(var i=0;i<temp.data.length;i++){
          _this.data1[i] = temp.data[i].value;
          _this.data2[i]=i+1
          }
          console.log(_this.data1);
          this.myChart.setOption({
            xAxis: {
              type: "category",
              data: _this.data2,
            },
            yAxis: {
              type: "value",
            },
            series: [
              {
                data: _this.data1,
                type: "line",
              },
            ],
          });
        });
    },
  },
};
</script>

<style>
</style>