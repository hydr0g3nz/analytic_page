<template>
  <div style>
    <b-row>
      <b-col cols>
        <layout :height="250">
          <template v-slot:header>
            <h6>จำนวนผู้เรียน</h6>
          </template>
          <template v-slot:body>
            <div style="padding:0.5rem">
            <p class="text-right">ทั้งหมด {{ legendValue[0]+legendValue[1]}} คน</p>
            <b-row>
              <b-col cols="6">
                <PieChart :chart-data="datacollection" :options="option"  :height="200"></PieChart>
              </b-col>
              <b-col cols="6">
                
                  <my-legend :num="2" :color="['rgb(235,129,35)', 'rgb(237,237,237)']">
                    <template v-slot:1>ผู้เรียนที่ Active {{legendValue[0]}} คน</template>
                    <template v-slot:2>ผู้เรียนที่หมดสิทธิ์เข้าเรียน {{legendValue[1]}} คน</template>
                  </my-legend>
                
              </b-col>
            </b-row>
            </div>
          </template>
        </layout>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import PieChart from "../PieChart/PieChart";
import layout from "../Layout";
import myLegend from "../legend_piechart"
export default {
  components: {
    PieChart,
    layout,myLegend
  },
  data() {
    return {
      datacollection: null,
      option: null,
      legendValue: [0, 0]
    };
  },
  mounted() {
    this.fillData();
    this.fillOption();
  },
  methods: {
    fillData() {
      let randomdata = this.getRandomInt();
      let data = [randomdata.n1, randomdata.n2];
      this.legendValue[0] = randomdata.n1;
      this.legendValue[1] = randomdata.n2;
      this.datacollection = {
        labels: [
          `ผู้เรียนที่Active ${data[0]} คน`,
          `ผู้เรียนที่หมดสิทธิ์เข้าเรียน ${data[1]} คน`
        ],
        datasets: [
          {
            backgroundColor: ["rgb(235,129,35)", "rgb(237,237,237)"],

            data: data
          }
        ],
        borderWidth: 5
      };
    },
    fillOption() {
      this.option = {
        legend: {
          display: false,
          position: "right",
          labels: {
            fontSize: 20,
            fontColor: "#000"
          }
        }, 
        plugins: {
          datalabels: {
            color: "black",
            labels: {
              title: {
                font: {
                  weight: "bold",
                  size: 16
                }
              }
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

        maintainAspectRatio: false,
        responsive: true
      };
      console.log(this.option);
    },
    getRandomInt() {
      let n = Math.floor(Math.random() * (1000 - 500 + 1)) + 500;
      let n1 = Math.floor(Math.random() * (n - 0 + 1)) + 0;
      let n2 = n - n1;

      return { n1, n2 };
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
</style>