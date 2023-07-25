<template>
  <div class="">
    <!--  -->
    <b-col cols="12" class="">
      <layout>
        <template v-slot:header><h5>ราคาคอร์สเฉลี่ยต่อชั่วโมงของวิดีโอ</h5></template>
        <template v-slot:body>
          <div class="box">
            <div class="price-box"><p>11</p></div>
            <div class="info-box"><p>บาท/ชั่วโมง</p></div>
          </div>
        </template>
      </layout>

      <!--  -->
      
    </b-col>
    <b-col cols="12" style="margin-top:1rem" class="">
         <layout>
        <template v-slot:header><h5>ราคาคอร์สเฉลี่ยต่อชั่วโมงของวิดีโอ</h5></template>
        <template v-slot:body>
          <div class="box">
            <div class="price-box"><p>11</p></div>
            <div class="info-box"><p>บาท/ชั่วโมง</p></div>
          </div>
        </template>
      </layout>
    </b-col>
  </div>
</template>
<script>
import layout from "../Layout";
export default {
  components: {
    layout
  }
};
</script>
<style scoped>
.box {
  display: flex;
}
.price-box {
    font-size: 7rem;
  margin: auto;
  color: rgb(255,190,79);

}
.info-box {
  align-self: flex-end;
  margin-left: auto;
}

</style>