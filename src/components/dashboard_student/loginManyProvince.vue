<template>
  <div class>
    <layout>
      <template v-slot:header>
        <h6>ผู้เรียนทีมีจํานวน login มากทีสุด</h6>
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
            ><span>{{ data.item.first_name+''+data.item.last_name |cut}}</span></template>

            <template v-slot:cell(group)="data">
                <span>{{ data.item.last_name |cut}}</span>
            </template>

            <template v-slot:cell(numProvince)="">
                <span>{{ getRandomInt(1,10) }}</span>
            </template>
            <template v-slot:cell(lastProvince)="">
                <span>{{ province.data[getRandomInt(0,77)].title}}</span>
            </template>
            
            <template v-slot:cell(btn)="">
               <b-button size="sm" variant="outline-primary"><span>ดูข้อมูล</span></b-button>
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

import province from '../../components/map/thailandDataMap'
export default {
  components: {
    layout
  },
  data() {
    return {
      province:province,
      isBusy: true,
      fields: [
        { key: "fullName", sortable: true, label: "รายชือผู้เรียน" },
        { key: "group", sortable: true, label: "กลุ่มตําแหน่ง" },
        {
          key: "numProvince",
          sortable: true,
          label: "จำนวนจังหวัดที่เข้า"
        }, {
          key: "lastProvince",
          sortable: true,
          label: "จังหวัดที่เข้าล่าสุด"
        },
         {
          key: "btn",
          
          label: ""
        },
        
      ],
      items: [],
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
     this.items = this.$store.getters.data
  },
};
</script>
