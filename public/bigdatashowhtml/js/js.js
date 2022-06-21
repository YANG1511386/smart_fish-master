 $(window).load(function(){  
             $(".loading").fadeOut()
            })  	
$(function () {
echarts_21();
echarts_22();
echarts_1();
echarts_2();
echarts_3();
echarts_4();
echarts_5();
function echarts_21() {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('echart21'));

       option1 = {

    tooltip: {
        trigger: 'axis',
        axisPointer: { type: 'shadow'}
    },
    grid: {
        left: '0%',
		top:'10px',
        right: '0%',
        bottom: '0px',
       containLabel: true
    },
    xAxis: [{
        type: 'category',
      		data: ['6月15日', '6月16日', '6月17日', '6月18日', '6月19日','6月20日', '6月21日'],
        axisLine: {
            show: true,
         lineStyle: {
                color: "rgba(255,255,255,.1)",
                width: 1,
                type: "solid"
            },
        },
		
        axisTick: {
            show: false,
        },
		axisLabel:  {
                interval: 0,
               // rotate:50,
                show: true,
                splitNumber: 15,
                textStyle: {
 					color: "rgba(255,255,255,.6)",
                    fontSize: '12',
                },
            },
    }],
    yAxis: [{
        type: 'value',
        axisLabel: {
           //formatter: '{value} %'
			show:true,
			 textStyle: {
 					color: "rgba(255,255,255,.6)",
                    fontSize: '12',
                },
        },
        axisTick: {
            show: false,
        },
        axisLine: {
            show: true,
            lineStyle: {
                color: "rgba(255,255,255,.1	)",
                width: 1,
                type: "solid"
            },
        },
        splitLine: {
            lineStyle: {
               color: "rgba(255,255,255,.1)",
            }
        }
    }],
    series: [
		{
        type: 'line',
        data: [7.27, 7.0, 7.11,7.25,7.13, 7.16, 7.44],

        itemStyle: {
            normal: {
                color:'#37a3ff',
                opacity: 1,
				
				BorderRadius: 3,
            }
        }
    }
	]
};
 
        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option1);
        window.addEventListener("resize",function(){
            myChart.resize();
        });
	

    }
function echarts_22() {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('echart22'));

	   option1 = {
  //  backgroundColor: '#00265f',
    tooltip: {
        trigger: 'axis',
        axisPointer: { type: 'shadow'}
    },
    grid: {
        left: '0%',
		top:'5px',
        right: '0%',
        bottom: '0px',
       containLabel: true
    },
    xAxis: [{
        type: 'category',
      		data: ['6月14日', '6月15日', '6月16日', '6月17日', '6月18日','6月19日', '6月20日'],
        axisLine: {
            show: true,
         lineStyle: {
                color: "rgba(255,255,255,.1)",
                width: 1,
                type: "solid"
            },
        },
		
        axisTick: {
            show: false,
        },
		axisLabel:  {
                interval: 0,
               // rotate:50,
                show: true,
                splitNumber: 15,
                textStyle: {
 					color: "rgba(255,255,255,.6)",
                    fontSize: '12',
                },
            },
    }],
    yAxis: [{
		
        type: 'value',
        axisLabel: {
           //formatter: '{value} %'
			show:true,
			 textStyle: {
 					color: "rgba(255,255,255,.6)",
                    fontSize: '12',
                },
        },
        axisTick: {
            show: false,
        },
        axisLine: {
            show: true,
            lineStyle: {
                color: "rgba(255,255,255,.1	)",
                width: 1,
                type: "solid"
            },
        },
        splitLine: {
            lineStyle: {
               color: "rgba(255,255,255,.1)",
            }
        }
    }],
    series: [
		{
        type: 'line',
        data: [16.5, 15.3, 14.3, 16.2, 16.8,15.8, 17],

        itemStyle: {
            normal: {
                color:'#37a3ff',
                opacity: 1,
				barBorderRadius: 3,
            }
        }
    }
		
	]
};
        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option1);
        window.addEventListener("resize",function(){
            myChart.resize();
        });

    }

	function echarts_1() {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('feng01'));
        //溶氧量的值
        var gauge_value=7;

option = {
   title: {
			x: "center",
			bottom: 10,
            text:gauge_value,
			subtext: '溶氧量',
			textStyle: {
				fontWeight: 'normal',
				fontSize: 18,
				color: "#fff"
			},
		},
		tooltip: {
			show: true,
		 
		 
		},
		series: [
		    {
            type: 'gauge',
           	radius:'60%',  
           	center: ['50%', '55%'],
            splitNumber: 7, //刻度数量
            min: 0,
            max:70,
          	startAngle: 225,
			endAngle: -45,
            axisLine: {
                show: true,
                lineStyle: {
                    width: 2,
                    shadowBlur: 0,
                    color: [
                        [1, '#8f8f8f']
                    ]
                }
            },
            axisTick: {
                show: false,
                lineStyle: {
                    color: '#8f8f8f',
                    width: 1
                },
                length: -5,
                splitNumber: 7
            },
            splitLine: {
                show: true,
                length: -5,
                lineStyle: {
                    color: "rgba(255,255,255,.2)",
                }
            },
            axisLabel: {
                distance: -15,
               
                	formatter: function(e) {
					switch(e + "") {
					    case "0":
							return "5";
						case "10":
							return "10";
 
						case "20":
							return "15";

						case "30":
							return "20";

						case "40":
							return "25";
							
						case "50":
							return "30";
							
						case "60":
							return "35";
								
						case "70":
							return "40";
							
						default:
							return e;
					}
				},
				textStyle: {
					fontSize: 10,
					 color: "rgba(255,255,255,.6)",
				}

            },
            pointer: { //仪表盘指针
                show: 0
            },
            detail: {
                show: false
            },
            data: [{
                name: "",
                value: 100
            }]
        } ,
         
		{
			name: '溶氧量mg/L',
			type: 'gauge',
			startAngle: 225,
			endAngle: -45,
			radius: '56%',
		center: ['50%', '55%'], // 默认全局居中  
			 
			min: 0,
			max: 100,

			axisLine: {
				show: false,
				lineStyle: {
					width:5,
					shadowBlur: 0,
					color: [
					
						[1, '#82b440']
					]
				}
			},
			axisTick: {
                show: false,
                 
            },
			splitLine: {
				show: false,
				length: 20,

			},

			axisLabel: {
			    show:false
			},
			pointer: {
				show: true,
				length: '65%',
                width: 4
			},
			detail: {
                show:false,
				offsetCenter: [0, 0],
				textStyle: {
					fontSize: 10
				}
			},
			itemStyle: {
            normal: {
                color: "#82b440",
                
            }
        },
			data: [{
				name: "",
				value: Math.floor(gauge_value)
			}]
		}]
};
        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
        window.addEventListener("resize",function(){
            myChart.resize();
        });
    }
	function echarts_2() {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('feng02'));
var gauge_value=60;
option = {
   title: {
			x: "center",
			bottom: 0,
			text: gauge_value,
			subtext: '水位',
			textStyle: {
				fontWeight: 'normal',
				fontSize: 18,
				color: "#fff"
			},
		},
		tooltip: {
			show: true,
		 
		 
		},
		series: [
		    {
            type: 'gauge',
           	radius:'60%',  
           	center: ['50%', '55%'],
            splitNumber: 7, //刻度数量
            min: 0,
            max:70,
          	startAngle: 225,
			endAngle: -45,
            axisLine: {
                show: true,
                lineStyle: {
                    width: 2,
                    shadowBlur: 0,
                    color: [
                        [1, '#8f8f8f']
                    ]
                }
            },
            axisTick: {
                show: false,
                lineStyle: {
                    color: '#8f8f8f',
                    width: 1
                },
                length: -5,
                splitNumber: 7
            },
            splitLine: {
                show: true,
                length: -5,
                lineStyle: {
                    color: "rgba(255,255,255,.2)",
                }
            },
            axisLabel: {
                distance: -15,
          
				textStyle: {
					fontSize: 10,
					 color: "rgba(255,255,255,.6)",
				}

            },
            pointer: { //仪表盘指针
                show: 0
            },
            detail: {
                show: false
            },
            data: [{
                name: "",
                value: 100
            }]
        } ,
         
		{
			name: '水位 cm',
			type: 'gauge',
			startAngle: 225,
			endAngle: -45,
			radius: '56%',
		center: ['50%', '55%'], // 默认全局居中  
			 
			min: 0,
			max: 70,

			axisLine: {
				show: false,
				lineStyle: {
					width:5,
					shadowBlur: 0,
					color: [
					
						[1, '#2ea7ff']
					]
				}
			},
			axisTick: {
                show: false,
                 
            },
			splitLine: {
				show: false,
				length: 20,

			},

			axisLabel: {
			    show:false
			},
			pointer: {
				show: true,
				length: '65%',
                width: 4
			},
			detail: {
                show:false,
				offsetCenter: [0, 0],
				textStyle: {
					fontSize: 10
				}
			},
			itemStyle: {
            normal: {
                color: "#2ea7ff",
                
            }
        },
			data: [{
				name: "",
				value: Math.floor(gauge_value)
			}]
		}]
};
        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
        window.addEventListener("resize",function(){
            myChart.resize();
        });
    }
	function echarts_3() {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('feng03'));
var gauge_value=25;
option = {
   title: {
			x: "center",
			bottom: 0,
			text:gauge_value,
			subtext: '温度',
			textStyle: {
				fontWeight: 'normal',
				fontSize: 18,
				color: "#fff"
			},
		},
		tooltip: {
			show: true,
		 
		 
		},
		series: [
		    {
            type: 'gauge',
           	radius:'60%',  
           	center: ['50%', '55%'],
            splitNumber: 10, //刻度数量
            min: 0,
            max:100,
          	startAngle: 225,
			endAngle: -45,
            axisLine: {
                show: true,
                lineStyle: {
                    width: 2,
                    shadowBlur: 0,
                    color: [
                        [1, '#8f8f8f']
                    ]
                }
            },
            axisTick: {
                show: false,
                lineStyle: {
                   color: "rgba(255,255,255,.1)",
                    width: 1
                },
                length: -5,
                splitNumber: 7
            },
            splitLine: {
                show: true,
                length: -5,
                lineStyle: {
                   color: "rgba(255,255,255,.2)",
                }
            },
            axisLabel: {
                distance: -15,
				textStyle: {
					fontSize: 10,
					 color: "rgba(255,255,255,.6)",
				}

            },
            pointer: { //仪表盘指针
                show: 0
            },
            detail: {
                show: false
            },
            data: [{
                name: "",
                value: 100
            }]
        } ,
         
		{
			name: '温度 °C',
			type: 'gauge',
			startAngle: 225,
			endAngle: -45,
			radius: '56%',
		center: ['50%', '55%'], // 默认全局居中  
			 
			min: 0,
			max: 100,

			axisLine: {
				show: false,
				lineStyle: {
					width:5,
					shadowBlur: 0,
					color: [
					
						[1, '#ff7109']
					]
				}
			},
			axisTick: {
                show: false,
                 
            },
			splitLine: {
				show: false,
				length: 20,

			},

			axisLabel: {
			    show:false
			},
			pointer: {
				show: true,
				length: '65%',
                width: 4
			},
			detail: {
                show:false,
				offsetCenter: [0, 0],
				textStyle: {
					fontSize: 10
				}
			},
			itemStyle: {
            normal: {
                color: "#ff7109",
                
            }
        },
			data: [{
				name: "",
				value: Math.floor(gauge_value)
			}]
		}]
};
        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
        window.addEventListener("resize",function(){
            myChart.resize();
        });
    }
	function echarts_4() {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('echart4'));

      option = {
        tooltip: {
       trigger: 'axis',
       axisPointer: {type: 'shadow'},
      },"grid": {
        "top": "20%",
      "right":"50",
      "bottom":"20",
      "left":"30",
      },
      legend: {
        data: ['投放鱼塘数量', '工作时长', '输送饲料量'],
        right: 'center', width:'100%',
        textStyle: {
            color: "rgba(255,255,255,.5)"
        },
        itemWidth: 12,
        itemHeight: 10,
      },
      
      
      
       "xAxis": [
         {
           "type": "category",
           data: ['6月14日', '6月15日', '6月16日', '6月17日', '6月18日','6月19日', '6月20日'],
           axisLine:{ show: false,},
           axisLabel:  { textStyle: {
			   fontSize:14,
             color: "rgba(255,255,255,.5)",
			    },
               },
       
           },
      ],
       "yAxis": [
         {
             
           "type": "value",
          // "name": "单位万",
			
           axisTick: {show: false},
           splitLine: { show: false,},
           axisLine: { show: false,},
           "axisLabel": {
             "show": true,
			   fontSize:14,
             color: "rgba(255,255,255,.5)"
            
           },
           axisLine: {
            min:0,
            max:10,
            show:false
            },//左线色
           
         },
         {
           "type": "value",
           //"name": "增速",
           "show": true,
           "axisLabel": {
             formatter: "{value} %",
            fontSize:14,
             color: "rgba(255,255,255,.5)"},
           axisTick: {show: false},
           splitNumber:3,
         axisLine: {show:false},//右线色
          splitLine: {lineStyle: {color:'rgba(255,255,255,.05)'}},//x轴线
         },
       ],
       "series": [
        
         {
           "name": "投放鱼塘数量",
           "type": "bar",
           "data": [8,8,8,8,8,8,8],
           "barWidth": "10%",
           "itemStyle": {
             "normal": {
              barBorderRadius:15,
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                offset: 0,
                color: '#8bd46e'
            }, {
                offset: 1,
                color: '#09bcb7'
            }]),
             }
           },
           "barGap": "0.2"
         },
         {
          "name": "工作时长",
          "type": "bar",
          "data":[5.5,5.1,5.4,5.2,5.3,5.2,5.3],
          "barWidth": "10%",
          "itemStyle": {
            "normal": {
             barBorderRadius: 15,
             color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
              offset: 0,
              color: '#248ff7'
          }, {
              offset: 1,
              color: '#6851f1'
          }]),
            }
          },
          "barGap": "0.2"
        },
        {
          "name": "输送饲料量",
          "type": "bar",
          "data":[10,10, 10, 10,10,10,10],
          "barWidth": "10%",
          "itemStyle": {
            "normal": {
             barBorderRadius: 15,
             color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
               offset: 0,
               color: '#fccb05'
           }, {
               offset: 1,
               color: '#f5804d'
           }]),
            }
          },
          "barGap": "0.2"
        }
       //   ,
       //   {
       //     "name": "增幅",
       //     "type": "line",
       //     "yAxisIndex": 1,
       //
       //     "data": [3, 1, 5,2.3],
       //   lineStyle: {
       //   normal: {
       //     width: 2
       //   },
       // },
       //     "itemStyle": {
       //       "normal": {
       //         "color": "#3496f8",
       //
       //       }
       //     },
       // //   "smooth": true,
       //     symbolSize:0,
       //   }
       ]
      };
      
        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
        window.addEventListener("resize",function(){
            myChart.resize();
        });
    }
function echarts_5() {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('echart5'));

   var lightBlue = {
	type: 'linear',
	x: 0,
	y: 0,
	x2: 0,
	y2: 1,
	colorStops: [{
		offset: 0,
		color: 'rgba(41, 121, 255, 1)'
	}, {
		offset: 1,
		color: 'rgba(0, 192, 255, 1)'
	}],
	globalCoord: false
}

var option = {
	tooltip: {
		show: false
	},
	grid: {
		top: '0%',
		left: '50',
		right: '50',
		bottom: '0%',
	},
	xAxis: {
		min: 0,
		//max: 12000,
		splitLine: {
			show: false
		},
		axisTick: {
			show: false
		},
		axisLine: {
			show: false
		
		},
		axisLabel: {
			show: false
		}
	},
	yAxis: {
		data: ['14日','15日','16日','17日','18日','19日','20日'],
		//offset: 15,
		axisTick: {
			show: false
		},
		axisLine: {
			show: false
		},
		axisLabel: {
			color: 'rgba(255,255,255,.6)',
			fontSize: 14,
		
			
		}
	},
	series: [{
		type: 'bar',
		label: {
			show: true,
			zlevel: 10000,
			position: 'right',
			padding: 6,
			color: '#4e84a1',
			fontSize: 14,
			formatter: '{c}'
			
		},
		itemStyle: {
			  barBorderRadius: 25,
			color:'#3facff'
		},
		barWidth: '15',
       
		data: [ 21600, 21600, 21600, 21600, 21600, 21600, 21600],
		z: 6
	}
		],
};
		
      
        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
        window.addEventListener("resize",function(){
            myChart.resize();
        });
    }


	
	
	
})



		
		
		


		









