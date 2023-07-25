<template>
  <div class="container">
    <layout>
      <template v-slot:header>จำนวนชั่วโมงเรียนในแต่ละสัปดาห์</template>
      <template v-slot:body>
        <Test-bar-chart></Test-bar-chart>
      </template>
    </layout>
  </div>
</template>

<script>
import TestBarChart from "../components/BarChart/CBarChartFullOptions";

import layout from "../components/Layout";
export default {
  components: {
    TestBarChart,
  
    layout
  }
};
</script>

