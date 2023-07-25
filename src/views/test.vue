<template>
  <div style class="container">
    <b-row>
      <b-col cols>
        <layout>
          <template v-slot:header>
            <h5>สถิติเรียนจบคอร์ส</h5>
          </template>
          <template v-slot:body>
            <div style="padding:2rem">
              <b-row>
                <b-col cols="6">
                  <PieChart
                    :chart-data="datacollection"
                    :options="option"
                    :width="500"
                    :height="500"
                  ></PieChart>
                </b-col>
                <b-col cols="6" style>
                  <LG :num=2 :color="['rgb(235,129,35)','rgb(237,237,237)']"> 
                    <template v-slot:1>
                          ผู้เรียนที Active
284 คน
                    </template>
                    <template v-slot:2>
                          ผู้เรียนที Active
284 คน
                    </template>
                    <template v-slot:3>
                          ผู้เรียนที Active
284 คน
                    </template>
                  </LG>
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
import PieChart from "../components/PieChart/PieChart";
import layout from "../components/Layout";
import LG from "../components/legend_piechart"

export default {
  components: {
    PieChart,
    layout,LG
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
      let data = [randomdata.n1, randomdata.n2];
      this.datacollection = {
        labels: [
          `ผู้เรียนที่เรียนจบ ${data[0]} คน`,
          `ผู้เรียนที่เรียนยังไม่จบ ${data[1]} คน`
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
                  size: 25
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
.test{
  display: flex;
  flex-direction: row;
  align-items: baseline;
}
.box-center {
  height: 100%;

  display: flex;
  justify-content: left;
}
.std-all-box {
  font-size: 15px;
  color: white;
  background-color: #eb8123;
}
/* basic positioning */
.legend {
  list-style: none;
  margin: auto auto auto 0;
}
.legend li {
  margin-right: 2rem;
}
.legend span {
  float: left;
  width: 1rem;
  height: 1rem;
  margin-right: 1rem;
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