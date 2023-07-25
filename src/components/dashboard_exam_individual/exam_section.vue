<template>
  <div class>
    <layout>
      <template v-slot:header>
        <h2>ข้อสอบแบ่งออกเป็น {{ items.length}} ตอน</h2>
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
            <template v-slot:cell(section)="data">
              <span>{{ data.index + 1}}</span>
            </template>

            <template v-slot:cell(name)="data">
              <span>{{data.item.course |cut}}</span>
            </template>
            <template v-slot:cell(questions)>
              <span>{{getRandomInt(1,5000)}}</span>
            </template>

            <template v-slot:cell(questionsAll)>
              <span>{{getRandomInt(1,5000)}}</span>
            </template>
            <template v-slot:cell(sectionScore)>
              <span>{{getRandomInt(1,5000)}}</span>
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
        { key: "section", sortable: true, label: "ตอนที่" },
        {
          key: "name",
          sortable: true,
          label: "ชื่อตอน"
        },
        {
          key: "questions",
          sortable: true,
          label: "จำนวนคำถาม"
        },
        {
          key: "questionsAll",
          sortable: true,
          label: "จากคำถามทั้งหมด"
        },
        {
          key: "sectionScore",
          sortable: true,
          label: "คะแนนของตอน"
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
