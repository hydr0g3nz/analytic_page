<template>
  <div class>
    <layout>
      <template v-slot:header>
        <h2>ความก้าวหน้าของผู้เรียนแต่ละหลักสูตร</h2>
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
              v-slot:cell(chapterName)="data"
            ><span>{{ data.item.first_name+' '+data.item.last_name |cut}}</span></template>

            <template v-slot:cell(timeSpend)="data">
              <template v-if="data.item.id %2==0"><span>{{data.item.time}} ชั่วโมง</span></template>
              <template v-else><span>{{getRandomInt(10,50)}} หน้า</span></template>
            </template>
            <template v-slot:cell(progress)>
              <b-progress height="1rem" :value="getRandomInt(1,100)" :max="100" class="test" variant=""></b-progress>
            </template>

            <template v-slot:cell(expiration)="data"><span>{{ data.item.date}}{{ data.item.time}}</span></template>

            <template v-slot:cell(btn)>
              <b-button size="sm" variant="outline-primary"><span>ดูผล</span></b-button>
            </template>

            <template v-slot:cell(completeRule)>
              <a href="#" class="text-decoration-none"><span>{{getRandomInt(1,10)}}/10</span></a>
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
        { key: "chapterName", sortable: true, label: "บทเรียน" },
        {
          key: "timeSpend",
          sortable: true,
          label: "เวลาที่ใช้เรียน"
        },
        {
          key: "progress",
          sortable: true,
          label: "ความก้าวหน้า"
        },
        {
          key: "expiration",
          sortable: true,
          label: "วันหมดอายุคอร์ส"
        },
        {
          key: "btn",

          label: "test"
        },
        {
          key: "completeRule",
          sortable: true,
          label: "complete Rule"
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
<style >
.progress-bar{
    background-color: #EB8123!important;
}

</style>