<template>
  <div class="">
    <div class="" style="">
      <LineChart :chart-data="datacollection" :options="option" :width="1000" :height="300"></LineChart>
    </div>
  </div>
</template>

<script>
import LineChart from "./LineChart";
import datatest from './datatest'
//import moment from "moment";
export default {
  components: {
    LineChart
  },
  props: ["mstyle"],
  data() {
    return {
      datacollection: null,

      option: null
    };
  },
  mounted() {
    this.fillData();
    this.fillOption();
  },
  methods: {
    fillData() {
      console.log(this.getRandomInt());
      this.datacollection = {
        labels:datatest.time_24h,
        datasets: [
          {
            data: datatest.dataRandom1,
            label: "วันจันทร์",
            borderColor: "#FFCE00",
            fill: false,
            lineTension: 0
          },
           {
            data: datatest.dataRandom2,
            label: "วันอังคาร",
            borderColor: "#D91FBD",
            fill: false,
            lineTension: 0
          },
           {
            data: datatest.dataRandom3,
            label: "วันพุธ",
            borderColor: "#168E00",
            fill: false,
            lineTension: 0
          }, {
            data: datatest.dataRandom4,
            label: "วันพฤหัส",
            borderColor: "#FF980B",
            fill: false,
            lineTension: 0
          }, {
            data: datatest.dataRandom5,
            label: "วันศุกร์",
            borderColor: "#437DFF",
            fill: false,
            lineTension: 0
          },
           {
            data: datatest.dataRandom6,
            label: "วันเสาร์",
            borderColor: "#FF4848",
            fill: false,
            lineTension: 0
          },
           {
            data: datatest.dataRandom7,
            label: "วันอาทิตย์",
            borderColor: "#3e95cd",
            fill: false,
            lineTension: 0
          }
        ]
      };
    },
    fillOption() {
      this.option = {
        
        elements: {
                    point:{
                        radius: 0
                    },
                    line:{
                      borderWidth:1.5
                    }
                },
        maintainAspectRatio: false,
        responsive:true,
     
       
        scales:{
          xAxes: [
         {gridLines: {
                display: true,
                drawBorder: true,
                drawOnChartArea: false
              }}
        ],
         yAxes: [
         {gridLines: {
                display: true,
                drawBorder: true,
                drawOnChartArea: false
              }}
        ]
        }
      };
      console.log(this.option);
    },
    getRandomInt() {
      return Math.floor(Math.random() * (400 - 0 + 1)) + 0;
    }
  }
};
</script>

<style scoped>
.small {
  max-width: 600px;
  max-height: 200px;
  margin: auto;
}
</style>