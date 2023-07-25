<template>
  <div class="">
    <div class="">
      <layout>

        <template v-slot:header>
          <div>
              <h6>จํานวนชัวโมงเรียนรวมในแต่ละช่วงเวลา</h6>
          </div>
        </template>
        <template v-slot:body>
          <div class="">
            <Line-chart></Line-chart>
          </div>
        </template>
      </layout>
      
    </div>
  </div>
</template>

<script>
import LineChart from "../components/LineChart/TLineChart";
import layout from "../components/Layout"
export default {
  components: {
    LineChart,
    layout,
  },
  
  
};
</script>

<style scoped>
.small {
  max-width: 600px;
  margin: 150px auto;
}
</style>