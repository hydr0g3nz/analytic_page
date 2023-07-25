<template>
    <div>
        <div class="m border">
            <div class="box"></div>
            <p>test</p>
            <p>test</p>
            <p>test</p>
            <p>test</p>

        </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style scoped>
.m{
  display: flex;
  align-items: baseline;
}
p{
    font-size: 15px;
    
}
div > .box{
  margin-right: 8px;
  top: 0;
  bottom: 0;
  left: 0;
  width: 20px;
  height: 20px;
  background-color: cyan;
 text-align: center;
}
</style>