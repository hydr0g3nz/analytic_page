<template>
  
    <div class="box-center">
       
      <ul class="legend">
<!-- 1 -->
        <li v-if="num >= 1">
          <div class="Box">
            <span :style="{backgroundColor:color[0]}"></span>
            <slot name="1"></slot>
          </div>
        </li>
<!-- 2 -->
         <li v-if="num >= 2">
          <div class="Box">
            <span :style="{backgroundColor:color[1]}"></span>
            <slot name="2"></slot>
          </div>
        </li>
<!-- 3 -->
        <li v-if="num >= 3">
          <div class="Box">
            <span :style="{backgroundColor:color[2]}"></span>
            <slot name="3"></slot>
          </div>
        </li>
<!-- 4 -->
        <li v-if="num >= 4">
          <div class="Box">
            <span :style="{backgroundColor:color[3]}"></span>
            <slot name="4"></slot>
          </div>
        </li>
<!-- 5 -->
         <li v-if="num >= 5">
          <div class="Box">
            <span :style="{backgroundColor:color[4]}"></span>
            <slot name="5"></slot>
          </div>
        </li>


      </ul>
    </div>
  
</template>
<script>
export default {
    props:{
        'color':{
            default:['#F9E79F','#ABEBC6','#AED6F1','#D2B4DE','#E59866']
            },
        'num':{
            default:null
        },
        }
}
</script>
<style scoped>
.Box{
  display: flex;
  flex-direction: row;
  align-items: baseline;
}
.box-center {
  height: 100%;

  display: flex;
  justify-content: left;
}
.std-all-box {
  font-size: 15px;
  color: white;
  background-color: #eb8123;
}
/* basic positioning */
.legend {
  list-style: none;
  margin: auto auto auto 0;
}
.legend li {
  margin-right: 2rem;
}
.legend span {
  float: left;
  width: 15px;
  height: 15px;
  margin-right: 1rem;
}
/* your colors */

</style>