<template>
  <div class>
    <h1>สรุปผู้เรียนรายเดือน</h1>

    <b-container fluid class="test-div">
      <div class="container">
        <!-- month picker -->
        <b-row style="margin:3rem 0 2rem 0;">
          <span>
            <strong><p>ข้อมูลของเดือน</p></strong>
          </span>
          <calender v-model="selectedMonth"></calender>
          <span>
            <strong><p>สาขา</p></strong>
          </span>
          <div style="margin:0 1rem 0 1rem">
            <b-form-select v-model="selected" :options="options"></b-form-select>
          </div>
          <span>
            <strong><p>กลุ่มตำแหน่ง</p></strong>
          </span>
          <div style="margin:0 1rem 0 1rem">
            <b-form-select v-model="selected" :options="options"></b-form-select>
          </div>
        </b-row>
      </div>
      <b-row>
        <b-col cols="2" class="" style="padding-top:1rem">
          <div class="box">
            <span>จำนวนผู้เข้าเรียนทั้งหมด</span>
            <div class="price-box">
              <span>402</span>
            </div>
            <div class="info-box">
              <span>คนที่เข้าเรียน</span>
            </div>
          </div>
        </b-col>
        <b-col cols="10" class=" ">
          <lineChart></lineChart>
        </b-col>
      </b-row>

      <b-row style>
        <b-col cols="4" class="">
          <layout>
            <template v-slot:header><h6>จำนวนชั่วโมงเรียนในแต่ละวันของสัปดาห์</h6></template>
            <template v-slot:body>
              <sumHourOfWeek></sumHourOfWeek>
            </template>
          </layout>
        </b-col>

        <b-col cols="8">
          <layout>
            <template v-slot:header><h6>จำนวนชั่วโมงเรียนในแต่ละวันของเดือน</h6></template>
            <template v-slot:body>
              <sumHourOfMonth></sumHourOfMonth>
            </template>
          </layout>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>
<script>
import lineChart from "../lineChart";
import sumHourOfWeek from "../../components/dashboard_student/sumHourOfWeek";
import sumHourOfMonth from "../../components/dashboard_student/sumHourOfMonth";
import layout from "../../components/Layout";
import calender from "../../components/datepicker";
export default {
  components: {
    lineChart,
    sumHourOfWeek,
    sumHourOfMonth,
    layout,
    calender
  },
  data() {
    return {
      selected: null,
      options: [
        { value: null, text: "Selected" },
        { value: "a", text: "This is First option" },
        { value: "b", text: "Default Selected Option" },
        { value: "c", text: "This is another option" },
        { value: "d", text: "This one is disabled", disabled: true }
      ]
    };
  }
};
</script>
<style scoped>
.test-div > div > * {
  border: 0px solid black;
}
.std-all-box {
  font-size: 15px;
  width: 100%;
  height: 100%;
  color: white;
  background-color: #eb8123;
}
.box {
   font-family: 'Mitr', sans-serif;
  display: flex;
  background-color: rgb(235, 129, 35);
  padding: 1rem;
  color: #fff;
  flex-direction: column;
  height: 100%;
  font-size: 1.5rem;
  text-align: center;
  box-sizing: border-box;
 
}
.price-box {
  font-size: 4rem!important;
  margin: auto;
  color: white;
}
.info-box {
  align-self: flex-end;
  margin: auto;
  color: #fff;
}
</style>
