<template>
  <div>
    <layout>
      <template v-slot:header>
        <h6>เวลาเข้าเรียนรวม</h6>
      </template>
      <template v-slot:body>
        <Area-chart :chart-data="data" :options="options"></Area-chart>
      </template>
    </layout>
  </div>
</template>

<script>
import AreaChart from "../AreaChart/AreaChartjs";
import layout from "../Layout";
export default {
  components: {
    AreaChart,
    layout
  },
  data() {
    return {
      data: {
        labels: [
          "00:00",
          "01:00",
          "02:00",
          "03:00",
          "04:00",
          "05:00",
          "06:00",
          "07:00",
          "08:00",
          "09:00",
          "10:00",
          "11:00",
          "12:00",
          "13:00",
          "14:00",
          "15:00",
          "16:00",
          "17:00",
          "18:00",
          "19:00",
          "20:00",
          "21:00",
          "22:00",
          "23:00"
        ],
        datasets: [
          {
            // Name the series
            data: [...Array(24).keys()].map(() => this.getRandomInt()), // Specify the data values array
            fill: true,
        // Add custom color border (Line)
            backgroundColor: "rgb(255,190,79)", // Add custom color background (Points and Fill)
          borderWidth: 0
          },
          {
           // Name the series
            data: [...Array(24).keys()].map(() => this.getRandomInt()), // Specify the data values array
            fill: true,
            // Add custom color border (Line)
            backgroundColor: "rgb(85,193,203)", 
            // Add custom color background (Points and Fill)
            // Specify bar border width
            borderWidth: 0
          }
        ]
      },
      options: {
        responsive: true, // Instruct chart js to respond nicely.
        maintainAspectRatio: false,
        elements: {
          point: {
            radius: 0
          }
        },
        scales: {
          xAxes: [
            {
              gridLines: {
                display: true,
                drawBorder: true,
                drawOnChartArea: false
              }
            }
          ],
          yAxes: [
            {
              gridLines: {
                display: true,
                drawBorder: true,
                drawOnChartArea: false
              }
            }
          ]
        } // Add to prevent default behaviour of full-width/height
      }
    };
  },
  methods:{
      getRandomInt() {
      return Math.floor(Math.random() * (430 - 0 + 1)) + 0;
    }
  }
};
</script>