<template>
  <div class="" style="margin:10px">
    <div class="text-left border D-H-layout">
      <h3 class>10 คอร์สทีมีผู้เรียน Active มากทีสุด</h3>
    </div>
    <div class="border Dlayout">
      <b-table
        table-class="tbNumber text-left "
        :items="items"
        :fields="fields"
        :sort-by.sync="sortBy"
        :sort-desc.sync="sortDesc"
        small
        sort-icon-left
        fixed
        :busy="isBusy"
        hover
      >
        <template v-slot:table-busy>
          <div class="text-center text-danger my-2">
            <b-spinner class="align-middle"></b-spinner>
            <strong>Loading...</strong>
          </div>
        </template>
      </b-table>
    </div>

    <div hidden>
      Sorting By:
      <b>{{ sortBy }}</b>, Sort Direction:
      <b>{{ sortDesc ? 'Descending' : 'Ascending' }}</b>
    </div>
  </div>
</template>

<script >
export default {
  data() {
    return {
      isBusy: true,
      sortBy: "age",
      sortDesc: false,
      fields: [
        { key: "Course", sortable: true },
        { key: "StudentsAll", sortable: true },
        { key: "StudentsActive", sortable: true }
      ],
      items: [
        { Course: "พื้นฐานธุรการ", StudentsAll: 179, StudentsActive: 179 },
        { Course: "พื้นฐานเกษตร ข้าว", StudentsAll: 53, StudentsActive: 53 },
        { Course: "แทรกเตอร์ระดับ 1", StudentsAll: 75, StudentsActive: 75 },
        { Course: "พื้นฐานปุ๋ยอินทรีย์", StudentsAll: 18, StudentsActive: 18 },
        { Course: "การเกษตร 4.0", StudentsAll: 5, StudentsActive: 5 },
        {
          Course: "JavaScript(Beginner + Advanced)",
          StudentsAll: 200,
          StudentsActive: 200
        },
        { Course: "Flutter & Dart", StudentsAll: 179, StudentsActive: 179 },
        {
          Course: "Python and Django Full Stack Web Developer Bootcamp",
          StudentsAll: 55,
          StudentsActive: 55
        },
        {
          Course: "REST APIs with Flask and Python",
          StudentsAll: 123,
          StudentsActive: 123
        },
        {
          Course: "Understanding TypeScript - 2020 Edition",
          StudentsAll: 9,
          StudentsActive: 9
        }
      ]
    };
  },
  mounted: function() {
    setTimeout(() => {
      this.isBusy = false;
    }, 1 * 1000);
  }
};
</script>
<style scoped>
/*.tbNumber tbody > tr > :nth-child(2),
tbody > tr > :nth-child(3) {
} /
 .tbNumber thead>tr>:nth-of-type(2),thead>tr>:nth-of-type(3){
    text-align:right;
    
}
 .tbNumber tbody>tr>:nth-child(1){
    text-align:right;
    text-align: left;
 }*/
 .Dlayout{
   padding:20px;
   border-top:0px !important;
   
 }
 .D-H-layout{
  padding:20px;
 }
 
</style>