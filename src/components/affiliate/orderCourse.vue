<template>
  <div class>
    <layout>
      <template v-slot:header>
        <h6>รายการสั่งซื้อคอร์ส</h6>
      </template>
      <div class="text-right">
        <a href="#">ดูทั้งหมด</a>
      </div>
      <template v-slot:body>
        <!-- select picker -->
        <b-col>
          <b-row>
            <span>
              <p>เริ่มจาก</p>
            </span>
            <calender v-model="selectedMonth"></calender>
            <span> <p>ถึง</p> </span>
            <calender v-model="selectedMonth"></calender>
          </b-row>
        </b-col>
        <!-- /select picker -->
        <p style="color:#4AA51D">
          รวมส่วนแบ่งรายได้ {{ getRandomInt(1000, 50000) }}.00 บาท
        </p>
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
            <template v-slot:cell(date)="data"
              ><span>{{ data.item.date }}</span></template
            >

            <template v-slot:cell(course)="data">
              <span>{{ data.item.course | cut }}</span>
            </template>

            <template v-slot:cell(stdName)="data">
              <span
                >{{ data.item.first_name | cut }}
                {{ data.item.last_name | cut }}</span
              >
            </template>
            <template v-slot:cell(email)="data">
              <span>{{ data.item.email }}</span>
            </template>
            <template v-slot:cell(payment)="">
              <span>ONLINEBANKING</span>
            </template>
            <template v-slot:cell(share)="">
              <span>{{ getRandomInt(100, 2000) }}</span>
            </template>
            <template v-slot:cell(detail)="row">
              <button
                size="sm"
                @click="row.toggleDetails"
                class="btn"
                :class="
                  row.detailsShowing ? 'btn-outline-primary' : 'btn-primary'
                "
              >
                <span>{{ row.detailsShowing ? "ซ่อน" : "เพิ่มเติม" }}</span>
              </button>
            </template>
            <!-- detail -->
            <template v-slot:row-details="row">
              <b-card>
                <b-table
                  table-class="tbNumber text-left "
                  :items="[
                    {
                      price: 'xxxx.xx',
                      paymentAmount: 'xxxx.xx',
                      priceNoVat: 'xxxx.xx',
                      vat: 'xxxx.xx',
                      percentage: 'xx%',
                      share: 'xxxx.xx',
                      coupon: row.item.course,
                    },
                  ]"
                  :fields="detailFields"
                  small
                  sort-icon-left
                  responsive
                  :busy="isBusy"
                  class="border-bottom"
                ></b-table>
                <b-row>
                  <b-col cols="5">
                    <p style="display:inline;">
                      ชื่อ Link
                      <i class="normal">{{
                        row.item.course + row.item.email
                      }}</i>
                    </p>
                  </b-col>
                  <b-col cols="6">
                    <!-- copy Link-->
                    <div>
                      <b-row>
                        <input
                          type="text"
                          class="border myinput"
                          v-model="row.item.email"
                          :ref="row.index+1"
                        />
                        <div
                          :id="row.index+1"
                          class="border iconbox"
                          @click="docopy"
                        >
                          <svg
                            data-v-607337e7=""
                            viewBox="0 0 16 16"
                            width="1em"
                            height="1em"
                            focusable="false"
                            role="img"
                            alt="icon"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            class="myicon"
                            @click="docopy"
                            :id="row.index+1"

                          >
                            <g data-v-607337e7="">
                              <path
                                fill-rule="evenodd"
                                d="M3 2h8a2 2 0 012 2v10a2 2 0 01-2 2H3a2 2 0 01-2-2V4a2 2 0 012-2zm0 1a1 1 0 00-1 1v10a1 1 0 001 1h8a1 1 0 001-1V4a1 1 0 00-1-1H3z"
                                clip-rule="evenodd"
                              ></path>
                              <path
                                d="M5 0h8a2 2 0 012 2v10a2 2 0 01-2 2v-1a1 1 0 001-1V2a1 1 0 00-1-1H5a1 1 0 00-1 1H3a2 2 0 012-2z"
                              ></path>
                            </g>
                          </svg>
                        </div>
                      </b-row>
                    </div>
                    <!-- /copy Link -->
                  </b-col>
                  <b-col cols="1"></b-col>
                </b-row>
              </b-card>
            </template>
            <!-- \detail -->
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

<script>
import layout from "../Layout";
import calender from "../datepicker";

export default {
  components: {
    layout,
    calender,
  },
  data() {
    return {
      isBusy: true,
      fields: [
        { key: "date", sortable: true, label: "วันที่" },
        { key: "course", sortable: true, label: "ชื่อคอร์ส" },
        {
          key: "stdName",
          sortable: true,
          label: "ชื่อผู้เรียน",
        },
        {
          key: "email",
          sortable: true,
          label: "จำนวนชั่วโมงเรียน",
        },
        {
          key: "payment",
          sortable: true,
          label: "วิธีการชำระ",
        },
        {
          key: "detail",
          sortable: true,
          label: "เพิ่มเติม",
        },
      ],
      items: [],
      detailFields: [
        { key: "price", label: "ราคาคอร์ส" },
        { key: "paymentAmount", label: "ยอดชำระเงิน" },
        { key: "priceNoVat", label: "ราคาก่อนVAT" },
        { key: "vat", label: "VAT" },
        { key: "percentage", label: "%ที่ได้รับ" },
        { key: "share", label: "ส่วนแบ่ง" },
        { key: "coupon", label: "คูปอง" },
      ],
    };
  },
  methods: {
    getRandomInt(max, min) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    },
    docopy(e) {
      let id = e.target.id;
      
      
      this.$copyText(this.$refs[id].value);
    },
  },
  mounted: function() {
    setTimeout(() => {
      this.isBusy = false;
    }, 1 * 1000);
    this.items = this.$store.getters.data;
  },
};
</script>
<style scoped>
.iconbox {
  width: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #d0d0d0;
  cursor: pointer;
}
.normal {
  font-family: Arial, Helvetica, sans-serif;
  font-style: normal;
}
.myinput {
  width: 380px;
  color: #d0d0d0;
  padding: 5px;
  
}
.myicon {
  
}
</style>
