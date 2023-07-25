<template>
  <div>
    <layout>
      <template v-slot:header>
        <h5>ข้อมูลข้อสอบ</h5>
      </template>
      <template v-slot:body>
        <h6>Odio praesent diam</h6>
        <p>
          Vestibulum blandit viverra convallis.
          Pellentesque ligula urna,fermentum ut semper
          in,tincidunt nec dui. Morbi mauris lacus,
          consequat eget justo in, semper gravida enim.
          Donec ultrices varius ligula.Ut non pretium
          augue. Etiam non rutrum metus. In varius sit
          amet lorem tempus sagittis. Cras sed maximus
          enim, vel ultricies tortor. Pellentesque
          consectetur tellus ornare felis porta dapibus.
        </p>
      </template>
    </layout>
  </div>
</template>
<script>
import layout from "../Layout";
export default {
  components: {
    layout
  }
};
</script>
<style scoped>
</style>