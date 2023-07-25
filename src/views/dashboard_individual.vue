tem<template >
  <div style="margin:20px 20px">
<b-col><myheader></myheader></b-col>
    <b-row style="margin:10px">
      <b-col cols>
        <recentlyLogin></recentlyLogin>
      </b-col>
      <b-col cols>
        <learnProgress></learnProgress>
      </b-col>
    </b-row>
    <b-row>
      <b-col cols>
     <cert></cert>
      </b-col>
        <b-col cols>
            <badgeList></badgeList>
      </b-col>
    </b-row>
  </div>
</template>
<script>
import myheader from "../components/dashboard_individual/header";
import recentlyLogin from "../components/dashboard_individual/recentlyLogin";
import learnProgress from "../components/dashboard_individual/learnProgress";
import cert from "../components/dashboard_individual/cert";
import badgeList from "../components/dashboard_individual/badgeList";


export default {
  components: {
    myheader,recentlyLogin,learnProgress,cert,badgeList
  },
  data() {
    return {

    };
  }
};
</script>
<style >
    
</style>