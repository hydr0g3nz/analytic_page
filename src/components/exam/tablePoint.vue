<template>
  <div>
    <my-modal></my-modal>
    <div class="grid">
      <div
        v-for="(item, id) in data"
        :key="id"
        class="box"
        :class="[item <= 7 ? 'right' : item <= 9 ? 'wrong' : 'didnot']"
        v-b-modal="'exam' + id"
      >
        {{ id + 1 }}
        <my-modal
          :id="'exam' + id"
          :index="id + 1"
          :selected="getRandomInt(0, 5)"
        >
        <template v-slot:question>
          xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
          </template>
          <template v-slot:op1>
            คำตอบ 1
          </template>

          <template v-slot:op2>
            คำตอบ 2
          </template>
          <template v-slot:op3>
            คำตอบ 3
          </template>
          <template v-slot:op4>
            คำตอบ 4
          </template>
        </my-modal>
      </div>
    </div>
  </div>
</template>

<script>
import myModal from "./modal";
export default {
  components: {
    myModal,
  },
  data() {
    return {
      data: [],
    };
  },
  methods: {
    mockdata(n) {
      let data = [...Array(n).keys()].map(() => this.getRandomInt(0, 11));
      this.data = data;
    },
    getRandomInt(max, min) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    },
  },
  mounted() {
    this.mockdata(140);
  },
};
</script>

<style scoped>
:root {
  --span: 1;
}

.grid {
  display: grid;
  margin-top: 20px;
  grid-template-columns: repeat(28, 3vw);
  grid-auto-rows: 3vw;
  justify-content: center;
}

/* */
.box {
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgb(172, 65, 190);
  color: black;
  /*grid-column: auto / span var(--span);*/
  /*font-size: 2rem; */
  font-size: calc(0.7vh + 0.7vw);
  border: solid 0.5px #f6f7f9;
}
.right {
  background-color: rgb(84, 216, 254);
}
.wrong {
  background-color: rgb(255, 218, 130);
}
.didnot {
  background-color: rgb(163, 160, 251);
}
</style>
