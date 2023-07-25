<template>
  <div class="container">
    <div class="">
      <layout>

        <template v-slot:header>
          <div>
              <h3>จํานวนชัวโมงเรียนรวมในแต่ละช่วงเวลา</h3>
          </div>
        </template>
        <template v-slot:body>
          <div class="container">
            <Pie-chart></Pie-chart>
          </div>
        </template>
      </layout>
      
    </div>
  </div>
</template>

<script>
import PieChart from "../components/PieChart/TPieChart";
import layout from "../components/Layout"
export default {
  components: {
    PieChart,
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