<template>
  <div class style="margin-top:1rem">
    <div class="">
      <b-col cols="12" class="main">
        <slot name="header"></slot>
      </b-col>

      <b-col cols="12" class="body" style="border-top:0px">
        <div :style="{height:height+'px'}">
          <slot></slot>
          <slot name="body"></slot>

          <!--  THIS IS PATTERN
       <layout>
        <template v-slot:header>
          
        </template>
        <template v-slot:body>
          
        </template>
      </layout> 
          -->
        </div>
      </b-col>
    </div>
  </div>
</template>
<script>
export default {
  props: ["height"]
};
</script>
<style scoped>

.size{
  
}
.main {
  height: auto;
  border: 1px solid rgb(200, 200, 200);
  
  padding: 10px;
}
.body {
  height: auto;
  border: 1px solid rgb(200, 200, 200);
  
  padding: 10px;
}
.D-HD-layout {
  padding: 10px;
}
</style>