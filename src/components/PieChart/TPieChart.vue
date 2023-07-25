<template>
  <div class="container">
    <div>
      <PieChart
        :chart-data="datacollection"
        :options="option"
        :width="500"
        :height="500"
        
      ></PieChart>
     
      <button @click="fillData()">Randomize</button>
    </div>
  </div>
</template>

<script>
import PieChart from "./PieChart";


export default {
  components: {
    PieChart
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
      let randomdata = this.getRandomInt();
      let data = [randomdata.n1, randomdata.n2, randomdata.n3];
      this.datacollection = {
        labels: [
          `ข้อที่ผิด ${data[0]}`,
          `ข้อที่ถูก ${data[1]}`,
          `ข้อที่ไม่ได้ตอบ ${data[2]}`
        ],
        datasets: [
          {
            label: "Point",
            backgroundColor: ["#EB8123", "#FFBE4F", "#0EA7B5"],

            data: data
          }
        ],
        borderWidth: 5
      };
    },
    fillOption() {
      this.option = {
        plugins: {
          
          datalabels: {
            color: "white",
            labels: {
              title: {
                font: {
                  weight: "bold",
                  size:20
                }
              },
              
            },
            formatter: (value, ctx) => {
              let sum = 0;
              let dataArr = ctx.chart.data.datasets[0].data;
              dataArr.map(data => {
                sum += data;
              });
              let percentage = ((value * 100) / sum).toFixed(2) + "%";
              return percentage;
            }
          }
        },

        elements: {
          arc: {
            borderWidth: 0
          }
        },
        legend: {
          display: true,
          position: "right",
          labels: {
            fontSize: 20,
            fontColor: "#000"
          }
        },
        maintainAspectRatio: false,
        responsive: true
      };
      console.log(this.option);
    },
    getRandomInt() {
      let n1 = Math.floor(Math.random() * (70 - 0 + 1)) + 0;
      let n2 = Math.floor(Math.random() * (100 - n1 - 0 + 1)) + 0;
      let n3 = 100 - n2 - n1;
      n1 = n1 * 2;
      n2 = n2 * 2;
      n3 = n3 * 3;
      console.log(`n1 : ${n1} n2 : ${n2} n3 : ${n3}`);
      return { n1, n2, n3 };
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