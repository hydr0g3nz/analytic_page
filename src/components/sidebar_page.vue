<template>
  <div>
    <b-sidebar id="sidebar-backdrop" backdrop no-header v-model="SBstatus" @change.="SBchange" right="">
      <div class="px-3 py-2" @mouseleave="SBleave" style="border:0px solid black;height: 100%;
  margin: 0;">
        <b-list-group>
          <div class="list-group" style="margin-top: 20px;">
            <mylink :to="'/'" class="list-group-item list-group-item-action">Home</mylink>
            <mylink :to="'/table'" class="list-group-item list-group-item-action">Table</mylink>
            <mylink :to="'/BarChart'" class="list-group-item list-group-item-action">Bar Chart</mylink>
            <mylink :to="'/lineChart'" class="list-group-item list-group-item-action">Line Chart</mylink>
            <mylink :to="'/PieChart'" class="list-group-item list-group-item-action">Pie Chart</mylink>
            <mylink :to="'/map'" class="list-group-item list-group-item-action">Map Chart</mylink>
            <mylink :to="'/area'" class="list-group-item list-group-item-action">Area Chart</mylink>
          </div>
        </b-list-group>
      </div>
    </b-sidebar>
  </div>
</template>
<script>
import mylink from "./mylink";
export default {
  data() {
    return {
      sidebarstatus: this.$store.getters.SBstatus
    };
  },
  computed: {
    SBstatus: {
      get() {
        return this.$store.state.sidebarstatus;
      },
      set(value) {
        this.$store.commit("check", value);
      }
    },
    SB() {
      return this.$store.getters.SBstatus;
    }
  },
  methods: {
    SBchange() {
      this.sidebarstatus
        ? this.$store.dispatch("ShowSB")
        : this.$store.dispatch("HideSB");
    },
    SBleave() {
      this.$store.dispatch("HideSB");
    }
  },
  components: {
    mylink
  }
};
</script>