<template>
  <div class>
    <layout>
      <template v-slot:header>
        <h2>ช่องทางการชำระ</h2>
      </template>

      <template v-slot:body>
        <div>
          <b-tabs content-class="mt-3" fill>
            <b-tab title="รายได้ตามคอร์ส" active>
               <tableAverage></tableAverage>
            </b-tab>
            <b-tab title="รายได้ตามแท็ก">
              
               <tableCourse></tableCourse>
            </b-tab>
            <b-tab title="รายได้ตามผู้สอน">
               <tableTeacher></tableTeacher>
            </b-tab>
          </b-tabs>
        </div>
      </template>
    </layout>
  </div>
</template>

<script >
import layout from "../Layout";

import tableAverage from "./payment_table_average";
import tableCourse from "./payment_table_course";
import tableTeacher from "./payment_table_teacher";

export default {
  components: {
    layout,tableAverage,tableCourse,tableTeacher
  },
 
};
</script>
