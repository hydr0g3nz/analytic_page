<template>
  <div style>
    <b-row>
      <b-col cols>
        <layout>
          <template v-slot:header>
            <h5>สรุปจำนวนผู้ทำข้อสอบ</h5>
          </template>
          <template v-slot:body>
            <b-col cols="12">
              <PieChart :chart-data="datacollection" :options="option" :width="500" :height="500"></PieChart>
            </b-col>
            <!--    <b-col cols="">
                <ul class="legend">
                  <li>
                    <span class="superawesome"></span> Super Awesome
                  </li>
                  <li>
                    <span class="awesome"></span> Awesome
                  </li>
                </ul>
            </b-col>-->
          </template>
        </layout>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import PieChart from "../PieChart/PieChart";
import layout from "../Layout";

export default {
  components: {
    PieChart,layout
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
      let data = [randomdata.n1, randomdata.n2,randomdata.n3];
      this.datacollection = {
        labels: [
          `ชำระเงินผ่านทางเคาน์เตอร์เซอร์วิส ${data[0]} ครั้ง`,
          `ชำระเงินผ่านทางเคาน์เตอร์เซอร์วิส ${data[1]} ครั้ง`,
          `ชำระเงินผ่านทางเคาน์เตอร์เซอร์วิส ${data[2]} ครั้ง`,
        ],
        datasets: [
          {
            label: "Point",
            backgroundColor: ["rgb(21,67,123)", "rgb(61,167,179)","rgb(235,129,35)"],

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
          position: "bottom",
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
      let n1 = Math.floor(Math.random() * (100 - 0 + 1)) + 0;
      let n2 = Math.floor(Math.random() * (100- n1 - 0 + 1)) + 0;
      let n3 = 100-n1-n2
      n1 = n1 * 5;
      n2 = n2 * 5;
      n3 = n3 *5
      console.log(`n1 : ${n1} n2 : ${n2} n:${n3}`);
      return { n1, n2,n3};
    }
  }
};
</script>

<style scoped>
.std-all-box {
  font-size: 15px;
  color: white;
  background-color: #eb8123;
}
.text{
    font-size: 10rem;
}
/* basic positioning */
.legend {
  list-style: none;
}
.legend li {
  float: left;
  margin-right: 10px;
}
.legend span {
  float: left;
  width: 1rem;
  height: 1rem;
  margin: 2px;
}
/* your colors */
.legend .superawesome {
  background-color: #ff00ff;
}
.legend .awesome {
  background-color: #00ffff;
}
.legend .kindaawesome {
  background-color: #0000ff;
}
.legend .notawesome {
  background-color: #000000;
}
</style>