<template>
  <div class>
    <layout>
      <template v-slot:header>
        <h2>Badge List</h2>
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
            <template v-slot:cell(badge)="">
                <b-avatar src="https://placekitten.com/300/300" size="3rem"></b-avatar>
            </template>
           <template v-slot:cell(achieve)="data">
             <span>{{ data.item.course |cut}}</span></template>
            <template v-slot:cell(exportCert)="data">
              <span>{{ data.item.date}}{{ data.item.time}}</span>
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
        { key: "badge", sortable: true, label: "Badge" },
        {
          key: "achieve",
          sortable: true,
          label: "achieve"
        },
     
        {
          key: "exportCert",
          sortable: true,
          label: "วันที่ออก"
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
