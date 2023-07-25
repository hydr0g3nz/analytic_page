<template>
  <div style="margin:0 auto;height:100%;" class="" @mousemove="check">
    <div id class style="padding-top:100px;padding-bottom:100px">
      <router-view></router-view>
      <sidebar></sidebar>
    </div>
    
  </div>
</template>

<script>
import sidebar from "./components/sidebar_components";

export default {
  name: "App",
  data() {
    return {
      sidebarstatus: false,
      p: { x: 0, y: 0 }
    };
  },
  components: {
    sidebar
  },
  methods: {
    check() {
      if (this.$store.getters.sidebarstatus != true)
        if (event.screenX <= 0) {
          this.$store.dispatch("ShowSB");
        }
      this.p.x = event.screenX;
      this.p.y = event.screenY;
    }
  },
  created(){
    this.$store.dispatch('setdata')
  }
};
</script>

<style>
html {
  box-sizing: border-box;
}
*, *:before, *:after {
  box-sizing: inherit;
}
html,
body { 
  height: 100%;
  margin: 0;
  background-color: rgb(252,252,252);
 font-family: 'Mitr', sans-serif;
}
span{
  font-family:Arial, Helvetica, sans-serif
}
body h1 , h2 ,h3 ,h4, h6 { 

  font-family: 'Mitr', sans-serif;
  color: rgb(74,74,74);
}
h6{
  font-size: 1.2rem;
}
.footer {
  background: linear-gradient(to bottom, purple, rebeccapurple);
  padding: 50px 0;
}
</style>
