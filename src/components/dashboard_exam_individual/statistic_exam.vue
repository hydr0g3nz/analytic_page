<template>
  <div class>
    <layout>
      <template v-slot:header>
        <h2>สถิติถูกผิดของคำถามแต่ละข้อ</h2>
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
            <template v-slot:cell(point)="data">
              <span>{{ data.item.first_name |cut}}</span>
            </template>

            <template v-slot:cell(question)="data">
              <span>{{ data.item.last_name+' '+ data.item.first_name |cut}}</span>
            </template>
            <template v-slot:cell(sectionName)="data">
              <span>{{ data.item.course|cut}}</span>
            </template>

            <template v-slot:cell(numCorrect)>
              <span>{{getRandomInt(1,5000)}}</span>
            </template>
            <template v-slot:cell(numIncorrect)>
              <span>{{getRandomInt(1,5000)}}</span>
            </template>
            <template v-slot:cell(hotAnswer)="data">
              <template v-if="data.index %4 == 2">
                <p style="color:rgb(184,3,1)">
                  <span>{{data.item.course}}</span>
                </p>
              </template>
              <template v-else>
                
                <p style="color:rgb(17,141,103)"><span>{{data.item.course}}</span></p>
              </template>
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
        { key: "point", sortable: true, label: "ข้อ" },
        {
          key: "question",
          sortable: true,
          label: "คำถาม"
        },
        {
          key: "sectionName",
          sortable: true,
          label: "ชื่อตอน"
        },
        {
          key: "numCorrect",
          sortable: true,
          label: "จำนวนครั้งที่ตอบถูก"
        },
        {
          key: "numIncorrect",
          sortable: true,
          label: "จำนวนครั้งที่ตอบผิด"
        },
        {
          key: "hotAnswer",
          sortable: true,
          label: "คำตอบที่คนตอบบ่อย"
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
