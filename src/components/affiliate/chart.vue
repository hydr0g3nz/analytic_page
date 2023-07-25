<template>
  <div class>
    <div>
      <layout>
        <template v-slot:header>
          <h5>สรุปรวมรายได้</h5>
        </template>
        <!-- select picker -->
        <b-col>
          <b-row>
            <span>
              <p>เริ่มจาก</p>
            </span>
            <calender v-model="selectedMonth"></calender>
            <span> <p>ถึง</p> </span>
            <calender v-model="selectedMonth"></calender>
          </b-row>
          <!-- /select picker -->
        </b-col>
        <template v-slot:body>
          <BarChart
            :chart-data="datacollection"
            :options="option"
            :height="300"
          ></BarChart>
          <!-- <button @click="fillData()">Randomize</button> -->
        </template>
      </layout>
    </div>
  </div>
</template>

<script>
import BarChart from "../BarChart/BarChart";
import layout from "../Layout";
import calender from "../datepicker";
export default {
  components: {
    BarChart,
    layout,
    calender,
  },

  data() {
    return {
      datacollection: null,

      option: null,
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
          "มกราคม",
          "กุมภาพันธ์",
          "มีนาคม",
          "เมษายน",
          "พฤษภาคม",
          "มิถุนายน",
          "กรกฎาคม",
          "สิงหาคม",
          "กันยายน",
          "ตุลาคม",
          "พฤศจิกายน",
          "ธันวาคม",
        ],
        datasets: [
          {
            label: "Name 1",
            backgroundColor: "#E78C06",

            data: [...Array(12).keys()].map(() =>
              this.getRandomInt(2000, 10000)
            ),
          },
          {
            label: "Name 2",
            backgroundColor: "rgb(75,165,28)",

            data: [...Array(12).keys()].map(() =>
              this.getRandomInt(2000, 10000)
            ),
          },
          {
            label: "Name 3",
            backgroundColor: "rgb(254,196,1)",

            data: [...Array(12).keys()].map(() =>
              this.getRandomInt(2000, 10000)
            ),
          },
          {
            label: "อื่นๆ",
            backgroundColor: "rgb(78,132,255)",

            data: [...Array(12).keys()].map(() =>
              this.getRandomInt(2000, 10000)
            ),
          },
        ],
      };
    },
    fillOption() {
      this.option = {
        responsive: true,
        maintainAspectRatio: false,
        legend: { display: true, position: "bottom" },
        scales: {
          xAxes: [
            {
              gridLines: {
                display: true,
                drawBorder: true,
                drawOnChartArea: false,
              },
              stacked: true,
            },
          ],
          yAxes: [
            {
              stacked: true,
              gridLines: {
                display: true,
                drawBorder: true,
                drawOnChartArea: false,
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
              },
            },
          ],
        },
      };
      console.log(this.option);
    },
    getRandomInt(max, min) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    },
  },
};
</script>

<style scoped>
.small {
  width: 500px;
  margin: auto;
}
</style>
