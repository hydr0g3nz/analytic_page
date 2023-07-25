<template>
  <div class>
    <layout>
      <template v-slot:header>
        <h2>รายชื่อผู้เรียนที่เข้าทำข้อสอบ</h2>
      </template>
      <div class="text-right">
        <a href="#">ดูทั้งหมด</a>
      </div>
      <template v-slot:body>
        <div class>
          <b-table
            table-class="tbNumber text-left "
            :items="items"
            :fields="fields"
            small
            sort-icon-left
            responsive
            :busy="isBusy"
            hover
          >
            <template v-slot:cell(fullName)="data">
              <span>{{ data.item.first_name +' '+data.item.last_name |cut}}</span>
            </template>

            <template v-slot:cell(score)>
              <span>{{getRandomInt(1,5000)}}</span>
            </template>
            <template v-slot:cell(date)="data">
              <span>{{ data.item.date}}</span>
            </template>

            <template v-slot:cell(testTimes)>
              <span>{{getRandomInt(1,10)}}</span>
            </template>
            <template v-slot:cell(grade)>
              <span>A</span>
            </template>
            

            <template v-slot:table-busy>
              <div class="text-center text-danger my-2">
                <b-spinner class="align-middle"></b-spinner>
                <strong>Loading...</strong>
              </div>
            </template>
          </b-table>
        </div>
      </template>
    </layout>
  </div>
</template>

<script >
import layout from "../Layout";


export default {
  components: {
    layout
  },
  data() {
    return {
      isBusy: true,
      fields: [
        { key: "fullName", sortable: true, label: "ชื่อ-นามสกุล" },
        {
          key: "score",
          sortable: true,
          label: "คะแนนที่สอบได้"
        },
        {
          key: "date",
          sortable: true,
          label: "วันที่ทำข้อสอบ"
        },
        {
          key: "testTimes",
          sortable: true,
          label: "จำนวนครั้งที่ทำข้อสอบ"
        },
        {
          key: "grade",
          sortable: true,
          label: "เกรด"
        },
       
      ],
      items: []
    };
  },
  methods: {
    getRandomInt(max, min) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }
  },
  mounted: function() {
    setTimeout(() => {
      this.isBusy = false;
    }, 1 * 1000);
    this.items = this.$store.getters.data;
  }
};
</script>
