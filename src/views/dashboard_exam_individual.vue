tem<template >
  <div style="margin:20px 20px">
    <b-row>
      <!--  -->
     <b-col cols="12">
         <b-row>
        <b-col cols="2">
          <examInfo></examInfo>
        </b-col>
        <b-col cols="10">
          <examSection></examSection>
        </b-col>
      </b-row>
     </b-col>
    
      <!--  -->
      <b-col cols="12">
         <b-row>
        <b-col cols="4">
          <testerSummary></testerSummary>
        </b-col>
        <b-col cols="2">
          <scoreMax></scoreMax>
        </b-col>
        <b-col cols="6">
          <scoreAverage></scoreAverage>
        </b-col>
      </b-row>
     </b-col>
    
      <!--  -->
     
      <b-col cols="12">
        <statisticExam></statisticExam>
      </b-col>
      <!--  -->
      <b-col cols="12">
        <b-row>
        <b-col cols="6">
          <gradeOverview></gradeOverview>
        </b-col>
        <b-col cols="6">
          <answerRatio></answerRatio>
        </b-col>
      </b-row>
     </b-col>
     
      <!--  -->
      
      <b-col cols="12">
        <tester></tester>
      </b-col>
    </b-row>
  </div>
</template>
<script>
import answerRatio from "../components/dashboard_exam_individual/answer_ratio";
import examInfo from "../components/dashboard_exam_individual/exam_info";
import examSection from "../components/dashboard_exam_individual/exam_section";
import gradeOverview from "../components/dashboard_exam_individual/garde_overview";
import scoreAverage from "../components/dashboard_exam_individual/score_average";
import scoreMax from "../components/dashboard_exam_individual/score_max";
import statisticExam from "../components/dashboard_exam_individual/statistic_exam";
import tester from "../components/dashboard_exam_individual/tester";
import testerSummary from "../components/dashboard_exam_individual/tester_summary";

export default {
  components: {
    answerRatio,
    examInfo,
    examSection,
    gradeOverview,
    scoreAverage,
    scoreMax,
    statisticExam,
    tester,
    testerSummary
  },
  data() {
    return {};
  }
};
</script>
<style >
</style>