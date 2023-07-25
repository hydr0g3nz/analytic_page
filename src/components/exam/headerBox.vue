<template>
  <div>
    <b-row>
      <!-- 1 -->
      <b-col cols="3" style="">
        <div class="box border">
          <b-row style="">
            <b-col cols="3" class="">
              <span class="myicon score">
                <font-awesome-icon :icon="bookOpen" class="myscore" />
              </span>
            </b-col>
            <b-col cols="9" class="box2">
              <div>
                <span class="myscore">
                275 คะแนน จาก 300 คะแนน
              </span>
              </div>
              <div>
                <span>
                  ที่สอบล่าสุด
                </span>
              </div>
            </b-col>
          </b-row>
        </div>
      </b-col>
      <!-- /1 -->

      <!-- 2 -->
      <b-col cols="3">
        <div class="box border">
        <b-row >
          <b-col cols="3" class="">
            <span class="myicon cart">
              <font-awesome-icon :icon="cart" class="mycart" />
            </span>
          </b-col>
          <b-col cols="9" class="box2">
            <div>
                <span class="mycart">
                5
              </span>
              </div>
              <div>
                <span>
                  ครั้งที่สอบ
                </span>
              </div>
          </b-col>
        </b-row>
        </div>
      </b-col>
      <!-- /2 -->

      <!-- 3 -->
      <b-col cols="3">
        <div class="box border">
        <b-row >
          <b-col cols="3" class="">
            <span class="myicon graphtime">
              <font-awesome-icon :icon="chartLine" class="mygraphtime" />
            </span>
          </b-col>
          <b-col cols="9" class="box2">
            <div>
                <span class="mygraphtime">
                30 นาที
              </span>
              </div>
              <div>
                <span>
                  ในการทำข้อสอบครั้งล่าสุด
                </span>
              </div>
          </b-col>
        </b-row>
        </div>
      </b-col>
      <!-- /3 -->

      <!-- 4 -->
      <b-col cols="3">
        <div class="box border">
        <b-row >
          <b-col cols="3" class="">
            <span class="myicon graphtest">
              <font-awesome-icon :icon="chartLine" class="mygraphtest" />
            </span>
          </b-col>
          <b-col cols="9" class="box2">
            <div>
                <span class="mygraphtest">
               สอบผ่าน
              </span>
              </div>
              <div>
                <span>
                  สถานะ
                </span>
              </div>
          </b-col>
        </b-row>
        </div>
      </b-col>
      <!-- /4 -->
    </b-row>
  </div>
</template>

<script>
//use icon from fontawesome https://fontawesome.com/icons?d=gallery&m=free
import {
  faShoppingCart,
  faChartLine,
  faBookOpen,
} from "@fortawesome/free-solid-svg-icons";
export default {
  computed: {
    cart() {
      return faShoppingCart;
    },
    chartLine() {
      return faChartLine;
    },
    bookOpen() {
      return faBookOpen;
    },
  },
};
</script>

<style scoped>
div{

}
.box {
  border: 0.5px solid black;
  background-color: white;
  height: 7vw;
  padding: 0.5vw;
}
.myicon {

  border-radius: 50%;
  text-align: center;
  line-height: 6vw;
  vertical-align: middle;
  padding: 0.5rem;
}

.score {
  border: solid 2px #57d9fe;
}

.cart {
  border: solid 2px #afacee;
}

.graphtime {
  border: solid 2px #4cd892;
}
.graphtest {
  border: solid 2px #f9da09;
}

.mycart {
  color: #afacee;
}

.mygraphtime {
  color: #4cd892;
}
.mygraphtest {
  color: #f9da09;
}
.myscore {
  color: #57d9fe;
}
</style>
