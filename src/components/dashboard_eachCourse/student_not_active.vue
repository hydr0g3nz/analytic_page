<template>
  <div class>
    <layout>
      <template v-slot:header>
        <h6>ผู้เรียนทียังไม่เริ่มเรียน</h6>
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
            ><span>{{ data.item.first_name+''+ data.item.last_name |cut}}</span></template>

            <template v-slot:cell(timeout)>
              <span>19 วัน</span>

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
        { key: "fullName", sortable: true, label: "รายชือผู้เรียน" },
        { key: "timeout", sortable: true, label: "เหลือเวลาเรียน(น้อย)" }
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
