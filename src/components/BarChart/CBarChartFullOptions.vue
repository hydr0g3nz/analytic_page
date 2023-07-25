<template>
  <div>
    <div class="container small">
      <BarChart :chart-data="datacollection" :options="option"></BarChart>
    </div>
  </div>
</template>

<script>
import BarChart from "./BarChart";

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
    this.datacollection = {
      labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
      datasets: [
        {
          label: "# of Votes",
          data: [110, 80, 109, 96, 99, 110],
          backgroundColor: [
            "rgba(255, 99, 132, 0.2)",
            "rgba(54, 162, 235, 0.2)",
            "rgba(255, 206, 86, 0.2)",
            "rgba(75, 192, 192, 0.2)",
            "rgba(153, 102, 255, 0.2)",
            "rgba(255, 159, 64, 0.2)"
          ],
          borderColor: [
            "rgba(255, 99, 132, 1)",
            "rgba(54, 162, 235, 1)",
            "rgba(255, 206, 86, 1)",
            "rgba(75, 192, 192, 1)",
            "rgba(153, 102, 255, 1)",
            "rgba(255, 159, 64, 1)"
          ],

          //------------Interactions-----------//
          hoverBackgroundColor: [
            "rgba(255, 99, 132, 1)",
            "rgba(54, 162, 235, 1)",
            "rgba(255, 206, 86, 1)",
            "rgba(75, 192, 192, 1)",
            "rgba(153, 102, 255, 1)",
            "rgba(255, 159, 64, 1)"
          ],
          hoverBorderColor: [
            "rgba(255, 99, 132, 1)",
            "rgba(54, 162, 235, 1)",
            "rgba(255, 206, 86, 1)",
            "rgba(75, 192, 192, 1)",
            "rgba(153, 102, 255, 1)",
            "rgba(255, 159, 64, 1)"
          ],
          hoverBorderWidth: [1, 2, 3, 4, 5, 6, 7],
          borderWidth: [1, 2, 3, 4, 5, 6, 7]
        }
      ]
    };
    this.option = {
      plugins: [
        {
          labels: {
            render: 'value'
          }
        }
      ],
      legend: { display: false },
      title: {
        display: true,
        text: "Predicted world population (millions) in 2050"
      },
      scales: {
        xAxes: [
          {
            gridLines: {
              display: false
            },
            ticks: {
              min: ""
            }
          }
        ],
        yAxes: [
          {
            /*scaleLabel: {
              display: true,
              labelString: "ชั่วโมงเรียน",
              fontSize: 18
            },*/
            gridLines: {
              display: false
            },

            ticks: {
              callback: function(value) {
                return value + " ชั่วโมง";
              },
              beginAtZero: true,
              maxTicksLimit: 9,
              //max: 120,
              min: 50
              //stepSize: 0.5
            }
          }
        ]
      }
    };
  }
};
</script>

<style scoped>
.small {
  max-width: 500px;
}
</style>