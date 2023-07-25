tem<template >
  <div style="margin:20px 20px">
    <b-row>
      <b-col cols="6">
        <preTest></preTest>
      </b-col>
      <b-col cols="6">
        <postTest></postTest>
      </b-col>
    </b-row>
  </div>
</template>
<script>
import preTest from "../components/dashboard_infoTest/preTest";
import postTest from "../components/dashboard_infoTest/postTest";

export default {
  components: {
    preTest,
    postTest
  },
  data() {
    return {};
  }
};
</script>
<style >
</style>