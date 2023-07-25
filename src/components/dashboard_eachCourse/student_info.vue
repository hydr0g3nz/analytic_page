<template>
  <div class>
    <layout>
      <template v-slot:header>
        <h6>รายละเอียดผู้เรียน</h6>
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
            <template
              v-slot:cell(fullName)="data"
            ><span>{{ data.item.first_name+' '+ data.item.last_name | cut}}</span></template>

            <template v-slot:cell(group)="data">
                <span>{{ data.item.last_name |cut}}</span>
            </template>

            <template v-slot:cell(branch)="data">
                <span>{{ data.index %2 == 0 ? 'branch1' : 'BRANCH2' }}</span>
            </template>
            <template v-slot:cell(timeLearned)="">
                <span>{{ getRandomInt(1,50) }}</span>
            </template>
            <template v-slot:cell(timeRemain)="">
                <span>{{ getRandomInt(1,50)}}</span>
            </template>
            <template v-slot:cell(expiration)="data">
                <span>{{ data.item.date}} {{data.item.time}}</span>
            </template>
            <template v-slot:cell(learningPercen)="">
                <span>50%</span>
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
        { key: "fullName", sortable: true, label: "ผู้เรียน" },
        { key: "group", sortable: true, label: "กลุ่มตําแหน่ง" },
        {
          key: "branch",
          sortable: true,
          label: "สาขา"
        }, {
          key: "timeLearned",
          sortable: true,
          label: "จำนวนชั่วโมงเรียน"
        },
         {
          key: "timeRemain",
          sortable: true,
          label: "จำนวนชั่วโมงที่เหลือ"
        },
        {
          key: "expiration",
          sortable: true,
          label: "วันที่หมดอายุ"
        },
        {
          key: "learningPercen",
          sortable: true,
          label: "เปอร์เซ็นต์ที่เรียนจบ"
        }
      ],
      items: []
    };
  },
  methods: {
    getRandomInt(max,min) {
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
<style scoped>

</style>


