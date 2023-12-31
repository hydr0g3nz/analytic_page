import { Pie, mixins } from 'vue-chartjs'
const { reactiveProp } = mixins
import ChartDataLabels from "chartjs-plugin-datalabels";
export default {
  extends: Pie,
  mixins: [reactiveProp],
  props: ['options'],
  mounted () {
    // this.chartData is created in the mixin.
    // If you want to pass options please create a local options object
    this.addPlugin(ChartDataLabels)
    this.renderChart(this.chartData, this.options)
  }
}