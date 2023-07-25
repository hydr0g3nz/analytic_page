<template>
  <div class>
    <div>
      <BarChart :chart-data="datacollection" :options="option" :height="300"></BarChart>
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
    let  r = this.getRandomInt(1,10)
      this.datacollection = {
        labels: [...Array(r).keys()].map(i => 'ครั้งที่' + (i + 1).toString()),
        datasets: [
          {
            label: "",
            backgroundColor: "#E78C06",

            data: [...Array(r).keys()].map(()=>this.getRandomInt(1,10))
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
                drawOnChartArea: true
              },
              ticks: {
                callback: function(value) {
                  return value;
                },
                beginAtZero: true,
                
              }
            }
          ]
        }
      };
      console.log(this.option);
    },
    getRandomInt(max, min) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    },
  }
};
</script>

<style scoped>
.small {
  width: 500px;
  margin: auto;
}
</style>