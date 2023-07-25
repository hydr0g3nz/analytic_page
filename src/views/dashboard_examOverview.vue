<template >
  <div style="margin:20px 20px">
    <b-row>

      <b-col cols="3">
        
           <b-col cols="12">
              <examInSystem></examInSystem> 
           </b-col>
           <b-col cols="12">
              <testerPerYear></testerPerYear>
           </b-col>
      </b-col>

      <b-col cols="9">
        <mostExamTested></mostExamTested>
      </b-col>
    </b-row>
    <b-row>
      <b-col cols="12">
        <listTester></listTester>
      </b-col>
 
    </b-row>
  </div>
</template>
<script>
import examInSystem from "../components/dashboard_examOverview/exam_in_system";
import listTester from "../components/dashboard_examOverview/list_tester";
import mostExamTested from "../components/dashboard_examOverview/most_exam_tested";
import testerPerYear from "../components/dashboard_examOverview/tester_peryear";

export default {
  components: {
    examInSystem,listTester,mostExamTested,testerPerYear
  },
  data() {
    return {};
  }
};
</script>
<style >
</style>