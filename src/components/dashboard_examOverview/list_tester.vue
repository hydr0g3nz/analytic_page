<template>
  <div class>
    <layout>
      <template v-slot:header>
        <h2>รายชื่อผู้เรียนทีเข้าทําแบบทดสอบ (จากตารางผลคะแนนล่าสุดเพิ่มหนึ่งคอลัมได้แก่เวลาทีใช้ทํา)</h2>
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
            <template v-slot:cell(fullname)="data">
              <span>{{ data.item.first_name+' '+data.item.last_name |cut}}</span></template>
            <template v-slot:cell(exam)="data">
              <span>{{ data.item.course |cut}}</span>
            </template>

            <template
              v-slot:cell(time)
            >
            <span>{{getRandomInt(1,3)}}:{{getRandomInt(1,60)}}:{{getRandomInt(1,60)}}</span></template>

            <template v-slot:cell(date)="data">
              <span>{{ data.item.date}}</span>
            </template>

            <template v-slot:cell(score)>
              <span>{{getRandomInt(30,100)}}</span>
            </template>

            <template v-slot:cell(btn)>
              <b-button size="sm" variant="outline-primary">
                <span>ดูข้อมูล</span>
              </b-button>
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
        { key: "fullname", sortable: true, label: "ผู้เรียน" },
        { key: "exam", sortable: true, label: "ข้อสอบ" },
        {
          key: "time",
          sortable: true,
          label: "เวลาที่ทำ"
        },
        {
          key: "date",
          sortable: true,
          label: "วันที่ทำข้อสอบ"
        },
        {
          key: "score",
          sortable: true,
          label: "คะแนน"
        },
        {
          key: "btn",

          label: ""
        }
      ],
      items:[]
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
