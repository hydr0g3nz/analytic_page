<template>
  <div class>
    <layout>
      <template v-slot:header>
        <h6>จํานวนการเข้าดูของวิดีโอ/สไลด์</h6>
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
              v-slot:cell(vdoName)="data"
            >
            <span>{{ data.item.first_name+' '+ data.item.last_name |cut}}</span></template>

            <template v-slot:cell(course)="data">
                <span>{{ data.item.course |cut}}</span>
            </template>

            <template v-slot:cell(courseLength)="data">
                <template v-if="data.item.id %2==0">
                      <span>{{data.item.time}} ชั่วโมง</span>
                </template>
                <template v-else>
                      <span>{{getRandomInt(10,50)}} หน้า</span>
                </template>
            </template>
            <template v-slot:cell(view)="">
                <span>{{ getRandomInt(1,5000)}}</span>
            </template>
            
            <template v-slot:cell(btn)="">
               <b-button size="sm" variant="outline-primary">
                 <span>ดูข้อมูล</span>
               </b-button>
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
        { key: "vdoName", sortable: true, label: "ชื่อวิดิโอหรือสไลด์" },
        { key: "course", sortable: true, label: "จากคอร์ส" },
        {
          key: "courseLength",
          sortable: true,
          label: "ความยาวบทเรียน"
        }, {
          key: "view",
          sortable: true,
          label: "จำนวนครั้งที่เข้าดู"
        },
         {
          key: "btn",
          
          label: ""
        },
        
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
