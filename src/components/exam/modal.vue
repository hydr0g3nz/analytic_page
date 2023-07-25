<template>
  <div>
    <b-modal :id="id" hide-footer hide-header content-class="mymodal">
      <template v-slot:default="{ close }">
        <b-row>
          <!-- close button -->
          <b-col cols="12">
            <b-icon icon="x" @click="close()" class="close"></b-icon>
          </b-col>
          <!-- /close button -->
          <!-- question -->
          <b-col cols="12">
           
              <div class="test">
                ข้อที่ {{ index }}:<slot name="question"></slot>
              </div>
            
            <!-- /question -->
            <!-- option -->
            <b-col cols="12" :class="[selected == 1 ? 'selected' : '']">
              <p>1.<slot name="op1"></slot></p>
            </b-col>
            <b-col cols="12" :class="[selected == 2 ? 'selected' : '']">
              <p>2.<slot name="op2"></slot></p>
            </b-col>
            <b-col cols="12" :class="[selected == 3 ? 'selected' : '']">
              <p>3.<slot name="op3"></slot></p>
            </b-col>
            <b-col cols="12" :class="[selected == 4 ? 'selected' : '']">
              <p>4.<slot name="op4"></slot></p>
            </b-col>
            <!-- /option -->
          </b-col>
        </b-row>
      </template>
    </b-modal>
  </div>
</template>

<script>
export default {
  props: ["id", "index", "selected"],
};
</script>

<style scoped>
.mymodal {
  border-radius: 0rem !important;
  border: white;
}
.close {
  cursor: pointer;
  color: #808080;
}
.close:hover {
  color: black;
}
.selected {
  background-color: rgb(184, 207, 161);
}
.test {
  display: inline;
}
</style>
