<template>
  <div class>
    <div>
         <layout>
        <template v-slot:header>
            <h5>รายได้ตามช่องทางที่นักเรียนรู้จัก</h5>
        </template>
        <b-col>
            ข้อมูลเดือน
        </b-col>
        <template v-slot:body>
                <BarChart :chart-data="datacollection" :options="option" :height="300"></BarChart>
      <!-- <button @click="fillData()">Randomize</button> -->
        </template>
      </layout> 

    </div>
  </div>
</template>

<script>
import BarChart from "../BarChart/BarChart"
import layout from "../Layout"
export default {
  components: {
    BarChart,layout
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
        labels:  [
            "Facebook","Youtube","Google","อื่นๆ"
        ],
        datasets: [
          {
            label: "",
            backgroundColor: ["#DF8447","rgb(12,69,125)","rgb(14,167,181)","rgb(255,190,79)"],

            data: [...Array(4).keys()].map(() => this.getRandomInt(2000,10000))
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
                min: 50
                //stepSize: 0.5
              }
            }
          ]
        }
      };
      console.log(this.option);
    },
    getRandomInt(max,min) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }
  }
};
</script>

<style scoped>
.small {
  width: 500px;
  margin: auto;
}
</style>