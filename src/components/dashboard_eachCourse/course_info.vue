<template>
  <div>
      <b-row >
        <!-- 1 -->
      
        <b-col cols="7"  style="padding-left:1rem" >
         <div id="ref" ref="test">
          <layout :height="250" >
            <template v-slot:header>
              
                <h6>ข้อมูลคอร์ส</h6>
              
            </template>
            <template v-slot:body>
              
                <b-img :src="url" fluid alt="Fluid image"></b-img>
                <star-rating :config="config" style="margin:5px"></star-rating>

                <p style="margin:0;">
                  <strong>{{title}}</strong>
                </p>
                <p style="margin:0;color:rgb(172,172,172)">{{author}}</p>
              
            </template>
          </layout>
          </div>
        </b-col>
        <!-- 2 -->
        <b-col cols="5" style="padding-top:1rem">
          <div class="box" >
            <p>เวลาเรียนเฉลี่ยของคนทีเรียนจบคอร์ส</p>
            <div class="price-box">
              <p>10</p> ชั่วโมง
            </div>
            
            <div class="info-box">
              <p>จากเวลาของคอร์ส 23 ชัวโมง</p>
            </div>
          </div>
        </b-col>
      </b-row>
    
  </div>
</template>
<script>
import layout from "../Layout";
import starRating from "./rating-stars";

export default {
  components: {
    layout,
    starRating
  },
  props: ["url", "title", "author", "course", "rating"],
  data() {
    return {
      config: {
        rating: 5,
        style: {
          fullStarColor: "#FFC400",
          emptyStarColor: "#737373",
          starWidth: 20,
          starHeight: 20,
          
        }
      }
    };
  },
  computed:{
   
  }
};
</script>
<style scoped>

.box {
  font-family: 'Mitr', sans-serif !important;
  display: flex;
  background-color: rgb(235, 129, 35);
  padding: 1rem;
  color: #fff;
  flex-direction: column;
  height: 100%;
  font-size: 1rem;
  text-align: center;
  box-sizing: border-box;
 
}
.price-box {
 
  margin: auto;
  color: white;
}
.price-box p{
  display: inline;
  font-size: 4rem!important;
  
}
.info-box {
  align-self: flex-end;
  margin: auto;
  color: #fff;
}
</style>