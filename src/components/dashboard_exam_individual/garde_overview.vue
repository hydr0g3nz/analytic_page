<template>
  <div style>
    <b-row>
      <b-col cols>
        <layout>
          <template v-slot:header>
            <h5>ภาพรวมเกรด</h5>
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
      let data = [randomdata.n1, randomdata.n2,randomdata.n3,randomdata.n4];
      this.datacollection = {
        labels: [
          `เกรด A ${((data[0] * 100) / randomdata.sum).toFixed(2)}%`,
         `เกรด B ${((data[1] * 100) / randomdata.sum).toFixed(2)}%`,
         `เกรด C ${((data[2] * 100) / randomdata.sum).toFixed(2)}%`,
         `เกรด D ${((data[3] * 100) / randomdata.sum).toFixed(2)}%`,
        ],
        datasets: [
          {
            label: "Point",
            backgroundColor: ["rgb(14,167,181)", "rgb(49,178,190)","rgb(88,195,205)",'rgb(222,252,255)'],

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
              
            color: ["white","white","white","rgb(110,108,110)"],
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
      let n1 = Math.floor(Math.random() * (50 - 0 + 1)) + 0;
      let n2 = 50-n1
       let n3 = Math.floor(Math.random() * (50 - 0 + 1)) + 0;
        let n4 = 50-n3
      n1 = n1 * 5;
      n2 = n2 * 5;
      n3 = n3 *5
      n4 = n4 * 5
        let sum = n1+n2+n3+n4
      return { n1, n2,n3,n4,sum};
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