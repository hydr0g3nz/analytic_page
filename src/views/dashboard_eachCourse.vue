<template >
  <div style="margin:0 1rem 0 1rem">
    <b-row>
      <b-col cols="3">
        <courseInfo :title="'ส่งมอบแทรกเตอร์'" :author="'Ethan Palme'" :url="url" :rating="rating"></courseInfo>
      </b-col>
      <b-col cols="3"><studentAmount></studentAmount></b-col>
      <b-col cols="3"><courseStat></courseStat></b-col>
      <b-col cols="3"><compareTest></compareTest></b-col>
    </b-row>
    <b-row style="margin-top:1rem">
     <b-col cols="4"><studentNotActive></studentNotActive></b-col>
      <b-col cols="8"><totalTimeStudy></totalTimeStudy></b-col>
    </b-row>
    <b-col cols="12" style="padding:0;margin-top:1rem"><infoTable></infoTable></b-col>
    <b-col cols="12" style="padding:0"><stdInfo></stdInfo></b-col>
  </div>
</template>
<script>
import courseInfo from "../components/dashboard_eachCourse/course_info";
import studentAmount from "../components/dashboard_eachCourse/student_amount";
import courseStat from "../components/dashboard_eachCourse/course_stat";
import compareTest from "../components/dashboard_eachCourse/compareTest";
import studentNotActive from "../components/dashboard_eachCourse/student_not_active"
import totalTimeStudy from "../components/dashboard_eachCourse/total_time_study"
import infoTable from "../components/dashboard_eachCourse/course_info_table"
import stdInfo from "../components/dashboard_eachCourse/student_info"

export default {
  components: {
    courseInfo,
    studentAmount,courseStat,compareTest,studentNotActive,totalTimeStudy,infoTable,stdInfo
  },
  data() {
    return {
      title: "ส่งมอบแทรกเตอร์",
      author: "Ethan Palme",
      url:
        "https://st.focusedcollection.com/14026668/i/650/focused_174708782-stock-photo-male-farmer-cap-driving-tractor.jpg",

      rating: 5
    };
  }
};
</script>