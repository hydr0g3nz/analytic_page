<template>
  <div>
    <b-sidebar
      id="sidebar-backdrop"
      backdrop
      no-header
      v-model="SBstatus"
      @change.="SBchange"
    >
      <div
        class="px-3 py-2"
        @mouseleave="SBleave"
        style="border:0px solid black;height: 100%;
  margin: 0;"
      >
        <b-tabs card>
          <b-tab title="Components" active>
            <b-card-text>
              <b-list-group>
                <div class="list-group" style="margin-top: 20px;">
                  <mylink
                    :to="'/'"
                    class="list-group-item list-group-item-action"
                    >Home</mylink
                  >
                  <mylink
                    :to="'/table'"
                    class="list-group-item list-group-item-action"
                    >Table</mylink
                  >
                  <mylink
                    :to="'/BarChart'"
                    class="list-group-item list-group-item-action"
                    >Bar Chart</mylink
                  >
                  <mylink
                    :to="'/lineChart'"
                    class="list-group-item list-group-item-action"
                    >Line Chart</mylink
                  >
                  <mylink
                    :to="'/PieChart'"
                    class="list-group-item list-group-item-action"
                    >Pie Chart</mylink
                  >
                  <mylink
                    :to="'/map'"
                    class="list-group-item list-group-item-action"
                    >Map Chart</mylink
                  >
                  <mylink
                    :to="'/area'"
                    class="list-group-item list-group-item-action"
                    >Area Chart</mylink
                  >
                  <mylink
                    :to="'/test'"
                    class="list-group-item list-group-item-action"
                    >TEST</mylink
                  >
                </div>
              </b-list-group>
            </b-card-text>
          </b-tab>

          <b-tab title="Page">
            <b-card-text>
              <b-list-group>
                <div class="list-group" style="margin-top: 20px;">
                  <mylink
                    :to="'/student_summary'"
                    class="list-group-item list-group-item-action"
                    >Dashboard ผู้เรียน</mylink
                  >
                  <mylink
                    :to="'/eachCourse'"
                    class="list-group-item list-group-item-action"
                    >Dashboard-ผู้เรียน (เฉพาะคอร์ส)</mylink
                  >
                  <mylink
                    :to="'/dashboard_individual'"
                    class="list-group-item list-group-item-action"
                    >Dashboard ผู้เรียนรายบุคคล</mylink
                  >
                  <mylink
                    :to="'/infoTest'"
                    class="list-group-item list-group-item-action"
                    >Dashboard test</mylink
                  >
                  <mylink
                    :to="'/revenue'"
                    class="list-group-item list-group-item-action"
                    >Dashboard Revenue</mylink
                  >
                  <mylink
                    :to="'/examOverview'"
                    class="list-group-item list-group-item-action"
                    >ภาพรวมข้อสอบ</mylink
                  >
                  <mylink
                    :to="'/examIndividual'"
                    class="list-group-item list-group-item-action"
                    >Dashboard-Exam (individual)</mylink
                  >
                </div>
              </b-list-group>
            </b-card-text>
          </b-tab>

          <b-tab title="Request">
            <b-card-text>
              <b-list-group>
                <div class="list-group" style="margin-top: 20px;">
                  <mylink
                    :to="'/affiliate'"
                    class="list-group-item list-group-item-action"
                    >Affiliate</mylink
                  >
                  <mylink
                    :to="'/exam'"
                    class="list-group-item list-group-item-action"
                    >Exam</mylink
                  >
                  <mylink
                    :to="'/QandA'"
                    class="list-group-item list-group-item-action"
                    >Q&A</mylink
                  >
                  
                  
                </div>
              </b-list-group>
            </b-card-text>
          </b-tab>
        </b-tabs>
      </div>
    </b-sidebar>
  </div>
</template>
<script>
import mylink from "./mylink";
export default {
  data() {
    return {
      sidebarstatus: this.$store.getters.SBstatus,
    };
  },
  computed: {
    SBstatus: {
      get() {
        return this.$store.state.sidebarstatus;
      },
      set(value) {
        this.$store.commit("check", value);
      },
    },
    SB() {
      return this.$store.getters.SBstatus;
    },
  },
  methods: {
    SBchange() {
      this.sidebarstatus
        ? this.$store.dispatch("ShowSB")
        : this.$store.dispatch("HideSB");
    },
    SBleave() {
      this.$store.dispatch("HideSB");
    },
  },
  components: {
    mylink,
  },
};
</script>
