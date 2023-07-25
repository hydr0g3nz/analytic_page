<template>
  <div>
    <router-link
            :to="to"
            tag="a"
            class="nav-link "
            style="color:black;"
          >
          <slot>
          </slot>
    </router-link>
  </div>
</template>
<script>
export default {
    data(){
        return {
            Isactive:false
        }
    },
    props:['to'],
 computed: {
   isactive(){
     return console.log(this.Isactive)
   }
 },
    
}
</script>