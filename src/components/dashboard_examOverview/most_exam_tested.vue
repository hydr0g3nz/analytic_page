<template>
  <div class>
    <layout>
      <template v-slot:header>
        <h2>
          ข้อสอบทีมีคนทํามากทีสุด (จากการ์ดจํานวนข้อสอบเพิ่มเติมข้อมูล)
        </h2>
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
            <template v-slot:cell(exam)="data"><span>{{ data.item.course |cut}}</span></template>
            <template v-slot:cell(testerPass)>
              <span>{{ getRandomInt(1,100)}}</span>
            </template>

            <template v-slot:cell(tester)>
              <span>{{getRandomInt(100,2000)}}</span>
            </template>

            <template v-slot:cell(scoreAverage)>
              <span>{{ getRandomInt(30,100)}}</span>
            </template>

            <template v-slot:cell(scoreMax)>
              <span>{{getRandomInt(30,100)}}</span>
            </template>
            <template v-slot:cell(dateCreated)="data">
              <span>{{ data.item.date}}</span>
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
        { key: "exam", sortable: true, label: "ข้อสอบ" },
        { key: "testerPass", sortable: true, label: "จำนวนผู้สอบผ่าน(%)" },
        {
          key: "tester",
          sortable: true,
          label: "จำนวนผู้เข้าสอบ"
        },
        {
          key: "scoreAverage",
          sortable: true,
          label: "คะแนนเฉลี่ย"
        },
        {
          key: "scoreMax",
          sortable: true,
          label: "คะแนนเต็ม"
        },
        {
          key: "dateCreated",
          sortable: true,
          label: "วันที่สร้าง"
        },
        {
          key: "btn",

          label: ""
        }
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
