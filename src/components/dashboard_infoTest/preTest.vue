<template>
  <div style>
    <b-row>
      <b-col cols>
        <layout>
          <template v-slot:header>
            <h5>Pre-test</h5>
          </template>
          <template v-slot:body>
            <b-row>
              <b-col cols="6">
                  <p>คะแนน</p>
                  <p class="text">30</p>
              </b-col>
             <b-col cols="6">
                  <p>พัฒนาการ</p>
                  <p class="text">-</p>
              </b-col>
            </b-row>

            <p>สัดส่วนข้อถูกและข้อผิดและยังไม่ได้ตอบ</p>
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