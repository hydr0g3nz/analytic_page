<template>
  <div class>
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

                  <template v-slot:cell(priceAverage)>
                    <span>{{getRandomInt(1,5000)}}</span>
                  </template>
                  <template v-slot:cell(incomeTag)>
                    <span>{{getRandomInt(1,5000)}}</span>
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
  </div>
</template>

<script >



export default {
  components: {
 
  },
  data() {
    return {
      isBusy: true,
      fields: [
        { key: "course", sortable: true, label: "คอร์ส" },
        {
          key: "priceAverage",
          sortable: true,
          label: "ราคาคอร์สเฉลี่ย"
        },
        {
          key: "incomeTag",
          sortable: true,
          label: "ราคาตามแท็ก"
        },
        {
          key: "income",
          sortable: true,
          label: "รายได้"
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
