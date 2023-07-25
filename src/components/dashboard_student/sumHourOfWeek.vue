<template>
  <div class="">
    <div>
      <BarChart :chart-data="datacollection" :options="option"   :height="300"></BarChart>
      <!-- <button @click="fillData()">Randomize</button> -->
    </div>
  </div>
</template>

<script>
import BarChart from "../BarChart/BarChart"

export default {
  components: {
    BarChart
  },
 
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
      this.datacollection = {
        labels: [
          "จันทร์",
          "อังคาร",
          "พุธ",
          "พฤหัส",
          "ศุกร์",
          "เสาร์",
          "อาทิตย์"
        ],
        datasets: [
          {
            label: "",
            backgroundColor: "#FFBE4F",
           

            data: [
              this.getRandomInt(),
              this.getRandomInt(),
              this.getRandomInt(),
              this.getRandomInt(),
              this.getRandomInt(),
              this.getRandomInt(),
              this.getRandomInt()
            ]
          }
        ]
      };
    },
    fillOption() {
      this.option = {
        responsive: true,
        maintainAspectRatio: false,
        legend: { display: false },
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
              },
              ticks: {
                callback: function(value) {
                  return value;
                },
                beginAtZero: true,
                maxTicksLimit: 6,
                //max: 120,
                min: 50,
                //stepSize: 0.5
                
              }
            }
          ]
        }
      };
      console.log(this.option);
    },
    getRandomInt() {
      return Math.floor(Math.random() * (111 - 95 + 1)) + 95;
    }
  }
};
</script>

<style scoped>

</style>