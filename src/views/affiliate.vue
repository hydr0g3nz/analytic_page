<template>
  <div>
      <h1>Affiliate</h1>
      <div class="container">
          <chartAffiliate></chartAffiliate>
          <tableOrder></tableOrder>
      </div>
  </div>
</template>

<script>

import chartAffiliate from '../components/affiliate/chart'
import tableOrder from '../components/affiliate/orderCourse'

export default {

    components:{
        chartAffiliate,tableOrder
    },
}
</script>

<style>

</style>