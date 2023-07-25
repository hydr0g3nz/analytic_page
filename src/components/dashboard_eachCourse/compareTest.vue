<template>

  <layout :height="250">
    <template v-slot:header>
      <div>
        <h6>เปรียบเทียบผล Pre-test และ Post-test</h6>
      </div>
    </template>
    <template v-slot:body>
      <div class="text-right">
        <a href="#">ดูทั้งหมด</a>
      </div>
      <div class>
        <div class>
          <div class="">
            <div class="pre">
              <!-- xx % -->
              <h1 class="text-right" style="margin:0;padding:0;">85%</h1>
              <!-- ^ icon -->
              <b-icon
                v-if="pre < post"
                icon="arrow-up-short"
                variant="success"
                class="h1 text-left"
              ></b-icon>
              <b-icon
                v-else
                icon="arrow-up-short"
                variant="danger"
                class="h1 text-left"
                rotate="180"
              ></b-icon>
              <!-- end icon -->
            </div>
          </div>

          <b-col cols="12" class="text-center">
            <p class="text-center" style="color:rgb(126,126,126)">เปอร์เซ็นต์ของผลต่างโดยเฉลี่ย</p>
          </b-col>
          <b-col cols="12">
            <b-row>
              <b-col cols="6">
                <b-col cols="12">Pre-test เฉลี่ย</b-col>
                <b-col cols="12">
                  <b-row class="container">
                    <b-col cols="6">
                      <h1 class="text-right">{{pre}}</h1>
                    </b-col>
                    <b-col cols="6" style="margin-top:auto;margin-right:auto">
                      <b-col><p>คะแนน</p></b-col>
                    </b-col>
                  </b-row>
                </b-col>
              </b-col>
              <b-col cols="6" style="border-left:solid 1px #C8C8C8">
                <b-col cols="12">Post-test เฉลี่ย</b-col>
                <b-col cols="12">
                  <b-row class="container">
                    <b-col cols="6">
                      <h1 class="text-right">{{post}}</h1>
                    </b-col>
                    <b-col cols="6" style="margin-top:auto;margin-right:auto">
                      <b-col><p>คะแนน</p></b-col>
                    </b-col>
                  </b-row>
                </b-col>
              </b-col>
            </b-row>
          </b-col>
        </div>
      </div>
    
    </template>
  </layout>
</template>
<script>
import layout from "../Layout";

export default {
  components: {
    layout
  },
  data() {
    return {
      pre: 0,
      post: 0
    };
  },
  methods: {
    getRandomInt() {
      let n1 = Math.floor(Math.random() * (20 - 10 + 1)) + 10;
      let n2 = Math.floor(Math.random() * (20 - 10 + 1)) + 10;

      return { n1, n2 };
    }
  },
  created() {
    this.pre = this.getRandomInt().n1;
    this.post = this.getRandomInt().n2;
  }
};
</script>
<style scoped>
span {
  display: inline;
  float: right;
}
.outline {
  display: flex;
  flex-direction: column;
}
.outline > div {
  background-color: aquamarine;
}
.center {
  margin: auto;
}
.pre {
  display: flex;
  flex-direction: row;
  justify-content: center;
}
.pre > div {
  background-color: brown;
}
</style>