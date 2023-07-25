<template>
  <div class>
    <layout>
      <template v-slot:header>
        <h2>ราคาคอร์สเฉลี่ยต่อชั่วโมง</h2>
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
            <template v-slot:cell(coupon)="data"><span>{{ data.item.course |cut}}</span></template>
            <template v-slot:cell(promotionPrice)><span>{{getRandomInt(1,5000)}}</span></template>
            <template v-slot:cell(timesUsed)>
             <span> {{getRandomInt(1,5000)}}</span>
              </template>

            <template v-slot:cell(income)>
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
        { key: "coupon", sortable: true, label: "คูปอง" },
        {
          key: "promotionPrice",
          sortable: true,
          label: "ราคาโปรโมชั่น"
        },
        {
          key: "income",
          sortable: true,
          label: "ยอดขายจากคูปอง"
        },
        {
          key: "income",
          sortable: true,
          label: "รายได้จากคอร์ส"
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
