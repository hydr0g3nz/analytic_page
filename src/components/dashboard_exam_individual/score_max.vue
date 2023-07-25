<template>
  <div class="" style=" height:100%;width:100%">
          <div class="box">
            <p>คะแนนเต็ม</p>
            <div class="price-box"><p>300</p></div>
            <div class="info-box"><p>คะแนน</p></div>
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
 height: 100%;
 width:100%
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