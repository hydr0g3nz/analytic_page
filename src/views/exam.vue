<template>
  <div>
    <h1>
      Exam
    </h1>
    <b-container>
      <!-- head -->
      <b-col cols="12">
        <b-row>
          <b-col cols="12">
            <headerBox></headerBox>
          </b-col>
        </b-row>
      </b-col>
      <!-- /head -->
      <!-- bar -->
      <b-col cols="12">
        <div class="box border">
          <p>เปรียบเทียบคะแนนแต่ละครั้ง</p>
          <p style="color:#A3A0FB;">Avg. 150 คะแนน</p>
          <barChart></barChart>
        </div>
      </b-col>
      <!-- /bar -->
      <!-- piechart + tablePoint -->
     <div class="">
        <b-col cols="12" class="border box">
       <p>เทียบคะแนนที่สอบแต่ละครั้ง</p>
        <b-row>
          <b-col cols="12">
            
            <doughnut></doughnut>
          </b-col>
          <b-col cols="12" style="">
            
            <tablePoint></tablePoint>
          </b-col>
        </b-row>
      </b-col>
     </div>
      <!-- /piechart + tablePoint -->
    </b-container>
  </div>
</template>

<script>
import barChart from "../components/exam/barchart";
import doughnut from "../components/exam/doughnut";
import tablePoint from "../components/exam/tablePoint";
import headerBox from "../components/exam/headerBox";
export default {
  components: {
    barChart,
    doughnut,
    tablePoint,
    headerBox,
  },
};
</script>

<style scoped>
.box {
  background-color: white;
  padding: 1rem;
  margin: 1rem;
  border: solid black 0.5px;
}
</style>
