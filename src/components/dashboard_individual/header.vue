<template>
  <div>
    <b-row>
      <!--  -->
      <b-col>
        <layout>
          <template v-slot:header>
            <h5>ข้อมูลผู้เรียน</h5>
          </template>
          <template v-slot:body>
            <h1 class="text-head">no content</h1>
          </template>
        </layout>
      </b-col>
       <!--  -->
      <b-col>
        <layout>
          <template v-slot:header>
            <h5>จำนวนคอร์สที่เรียนจบ</h5>
          </template>
          <template v-slot:body>
            <h1 class="text-head">11</h1>
          </template>
        </layout>
      </b-col>
       <!--  -->
      <b-col>
        <layout>
          <template v-slot:header>
            <h5>จำนวนคอร์สที่ลงเรียน</h5>
          </template>
          <template v-slot:body>
            <h1 class="text-head">26</h1>
          </template>
        </layout>
      </b-col>
       <!--  -->
      <b-col>
        <layout>
          <template v-slot:header>
            <h5>จำนวน lecture ที่เรียนได้</h5>
          </template>
          <template v-slot:body>
            <h1 class="text-head">650</h1>
          </template>
        </layout>
      </b-col>
       <!--  -->
      <b-col>
        <layout>
          <template v-slot:header>
            <h5>ความก้าวหน้ารวมของทุกหลักสูตรคิดเป็นเปอร์เซ็นต์</h5>
          </template>
          <template v-slot:body>
            <h1 class="text-head">nocontent</h1>
          </template>
        </layout>
      </b-col>
    </b-row>
  </div>
</template>
<script>
import layout from "../Layout";
export default {
  components: {
    layout
  },
  data() {
    return {};
  }
};
</script>
<style scoped>
.text-head {
  color: rgb(235, 129, 35);
  font-size: 8vmin;
  text-align: center;
}
</style>