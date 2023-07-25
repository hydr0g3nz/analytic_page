<template>
  <div class="border">
    <div style="padding:1rem">
         <b-row style="margin:0.5rem 0 0.5rem 0;" >
          <span>
            <strong><p>ข้อมูลของเดือน</p></strong>
          </span>
          <calender v-model="selectedMonth"></calender>
          <span>
            <strong><p>ถึง</p></strong>
          </span>
          <calender v-model="selectedMonth"></calender>
        </b-row>
      <b-row>
        <b-col cols="7">
          <vdoView></vdoView>
        </b-col>
        <b-col cols="5">
          <dowloadCourse></dowloadCourse>
        </b-col>
      </b-row>
    </div>
  </div>
</template>

<script >
import vdoView from "./course_info_table_vdo_viewer";
import dowloadCourse from "./course_info_table_dowload_course";
import calender from "../datepicker"
export default {
  components: {
    vdoView,
    dowloadCourse,calender
  }
};
</script>
<style  scoped>

</style>