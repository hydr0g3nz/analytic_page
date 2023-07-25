tem<template >
  <div style="margin:20px 20px">
    <b-row>
      <!-- 1 -->
      <b-col cols="12"  style="margin-top:1rem">
        <totalIncom></totalIncom>
      </b-col>
      <!-- 2 -->
      <b-col cols="12"  style="margin-top:1rem">
        <b-row>
          <b-col cols="2">
            <coursePrice></coursePrice>
          </b-col>

          <b-col cols="7">
            <coursePricePerHour></coursePricePerHour>
          </b-col>
          <b-col cols="3">
            <topSpender></topSpender>
          </b-col>
        </b-row>
      </b-col>

      <!-- 3 -->
      <b-col cols="12" style="margin-top:1rem">
        <b-row>
          <b-col cols="3">
            <paymentPiechart></paymentPiechart>
          </b-col>
          <b-col cols="9">
            <paymentTable></paymentTable>
          </b-col>
        </b-row>
      </b-col>

      <!-- 4 -->
      <b-col cols="12">
           <b-row>
        <b-col cols="6">
          <incomeFrom></incomeFrom>
        </b-col>
        <b-col cols="6">
          <coupon></coupon>
        </b-col>
      </b-row>
      </b-col>
     
      <!-- end -->
    </b-row>
  </div>
</template>
<script>
import totalIncom from "../components/dashboard_revenue/total_incom";
import coursePrice from "../components/dashboard_revenue/course_price";
import coursePricePerHour from "../components/dashboard_revenue/course_price_per_hour";
import topSpender from "../components/dashboard_revenue/top_spender";
import paymentPiechart from "../components/dashboard_revenue/payment_piechart";
import paymentTable from "../components/dashboard_revenue/payment_table";
import incomeFrom from "../components/dashboard_revenue/income_from";
import coupon from "../components/dashboard_revenue/coupon";

export default {
  components: {
    totalIncom,
    coursePrice,
    coursePricePerHour,
    topSpender,
    paymentPiechart,
    paymentTable,
    incomeFrom,
    coupon
  },
  data() {
    return {};
  }
};
</script>
<style >
</style>