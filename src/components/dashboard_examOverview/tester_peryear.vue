<template>
  <div class="">

      <layout>
        <template v-slot:header><h5>จํานวนผู้สอบต่อปี</h5></template>
        <template v-slot:body>
          <div class="box">
            <div class="price-box"><p>20000</p></div>
            <div class="info-box"><p>คน</p></div>
          </div>
        </template>
      </layout>

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
    font-size: 5rem;
  margin: auto;
  color: rgb(255,190,79);

}
.info-box {
  align-self: flex-end;
  margin-left: auto;
}

</style>