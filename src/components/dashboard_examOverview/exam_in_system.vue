<template>
  <div class="" style="">
          <div class="box">
            <p>จำนวนข้อสอบในระบบ(เอาออกมาจากการ์ดจำนวนข้อสอบ)</p>
            <div class="price-box"><p>10</p></div>
            <div class="info-box"><p>ชุด</p></div>
          </div>
  </div>
</template>
<script>

export default {
  components: {
    
  }
};
</script>
<style scoped>
.box {
  display: flex;
  background-color: rgb(235,129,35);
  padding: 1rem;
  color: #fff;
  flex-direction: column;
}
.price-box {
    font-size: 7rem;
  margin: auto;
  color: white;

}
.info-box {
  align-self: flex-end;
  margin-left: auto;
  color: #fff;
}

</style>