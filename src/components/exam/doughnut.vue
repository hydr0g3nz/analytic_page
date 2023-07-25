<template>
  <div class>
    <div>
      <doughnut
        :chart-data="datacollection"
        :options="option"
        :height="100"
      ></doughnut>
      <!-- <button @click="fillData()">Randomize</button> -->
    </div>
  </div>
</template>

<script>
import doughnut from "../PieChart/doughtnuChart";

export default {
  components: {
    doughnut,
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
      let r = 3;
      this.datacollection = {
        labels: ["ทำถูก", "ทำผิด", "ไม่ได้ทำ"],
        datasets: [
          {
            label: "",
            backgroundColor: [
              "rgb(84, 216, 254)",
              "rgb(255, 218, 130)",
              "rgb(163, 160, 251)",
            ],

            data: [...Array(r).keys()].map(() => this.getRandomInt(1, 10)),
          },
        ],
      };
    },
    fillOption() {
      this.option = {
        plugins: {
          datalabels: {
            display:false,
            color: "white",
            labels: {
              title: {
                font: {
                  weight: "bold",
                  size: 20,
                },
              },
            },
          },
        },
        
        responsive: true,
        legend: {
          position: "right",
          labels:{}
        },
        title: {
          display: false,
          text: "Chart.js Doughnut Chart",
        },
        animation: {
          animateScale: true,
          animateRotate: true,
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
