<template>
  <div class="" style="margin:0 3rem 0 3rem">
    <stdSumMonth></stdSumMonth>

    <br />
    <hr />
    <br />
    <stdSumAll></stdSumAll>
  </div>
</template>
<script>

import stdSumAll from "./student_summary_all";
import stdSumMonth from "./student_summary_month";
export default {
  components: {
    stdSumAll,
    stdSumMonth
  }
};
</script>
