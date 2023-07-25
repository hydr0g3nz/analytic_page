<template>
  <div class>
    <layout>
      <template v-slot:header>
        <h2>Certicicate/ประกาศนียบัตร</h2>
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
            <template v-slot:cell(course)="data">
              <span>{{ data.item.course |cut}}</span></template>
            <template v-slot:cell(courseLength)="data">
              <span>{{ data.item.time}}</span>
            </template>
            <template v-slot:cell(timeSpend)="data">
              <template>
                <span>{{data.item.time}}</span></template>
            </template>
            <template v-slot:cell(exportCert)="data"><span>{{ data.item.date}}{{ data.item.time}}</span></template>

            <template v-slot:cell(btn)>
              <b-icon icon="download" variant="primary" class="h5 text-center"></b-icon>
             
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
        { key: "course", sortable: true, label: "Course" },
        {
          key: "courseLength",
          sortable: true,
          label: "ความยาวคอร์ส"
        },
        {
          key: "timeSpend",
          sortable: true,
          label: "เวลาที่ใช้เรียน"
        },
        {
          key: "exportCert",
          sortable: true,
          label: "วันที่ออกใบ"
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
