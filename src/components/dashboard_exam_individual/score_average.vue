<template>
  <div class style=" height:100%;width:100%">
    <b-col cols="12">
      <div class="box border">
        <div class="text-box">
          <p style="color:black;"><strong>คะแนนเต็ม</strong></p>
          <h1>135</h1>
          
        </div>
      </div>
    </b-col>
    <b-row>
      <b-col cols="6" style="padding:0;">
        <div class="box border">
          <div class="nm-text-box">
            <p style="color:black;"><strong>คะแนนเต็ม</strong></p>
            <h1>135</h1>
            <p style="color:black;">คิดเป็น 20%</p>
          </div>
        </div>
      </b-col>
      <b-col cols="6" style="padding:0;">
        <div class="box border">
          <div class="nm-text-box">
            <p style="color:black;"><strong>คะแนนเต็ม</strong></p>
            <h1>135</h1>
            <p style="color:black;">คิดเป็น 20%</p>
          </div>
        </div>
      </b-col>
    </b-row>
  </div>
</template>
<script>
export default {
  components: {}
};
</script>
<style scoped>
.box {
  display: flex;
  color: rgb(235, 129, 35);
  padding: 1rem;
  height: 100%;
  width: 100%;
}
.text-box {
  margin: auto;
}
.text-box > h1 {
  font-size: 6rem;
  text-align: center;
}

.text-box > p {
  font-size: 1.5rem;
  text-align: center;
}
.nm-text-box {
  margin: auto;
}
.nm-text-box > h1 {
  font-size: 4rem;
  text-align: center;
}

.nm-text-box > p {
  font-size: 1.5rem;
  text-align: center;
}
</style>