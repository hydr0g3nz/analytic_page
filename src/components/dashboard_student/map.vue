<template>
  <div>
    <layout>
      <template v-slot:header>
        <h6>จํานวนผู้เรียนแบ่งตามจังหวัด</h6>
      </template>
      <template v-slot:body>
        <div>
          <map-com></map-com>
        </div>
      </template>
    </layout>
  </div>
</template>
<script>
import map from "../../components/map/map";
import layout from "../Layout";
export default {
  data() {
    return {};
  },
  components: {
    "map-com": map,
    layout
  }
};
</script>