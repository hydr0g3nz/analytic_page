<template>
  <div class>
    <h1>สรุปผู้เรียนทั้งหมด</h1>

  
      <!-- 1 -->
      <b-row style="">
        <b-col cols="6">
          <top10></top10>
        </b-col>
        <b-col cols="6">
          <mostlogin></mostlogin>
        </b-col>
      </b-row>

      <!-- 2 -->
      <b-row style="">
        <b-col>
          <recentlyLogin></recentlyLogin>
        </b-col>
      </b-row>

      <!-- 3 -->
      <b-row style="">
        <b-col cols="6">
          <mymap></mymap>
        </b-col>

        <b-col cols="6">
          <loginManyProvince></loginManyProvince>
        </b-col>
      </b-row>
   
  </div>
</template>
<script>
import top10 from "../../components/dashboard_student/top10StdActive";
import mostlogin from "../../components/dashboard_student/mostlogin";
import recentlyLogin from "../../components/dashboard_student/recentlyLogin";
import loginManyProvince from "../../components/dashboard_student/loginManyProvince";
import mymap from "../../components/dashboard_student/map";
export default {
  components: {
    top10,
    mostlogin,
    recentlyLogin,
    loginManyProvince,
    mymap
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
</style>
