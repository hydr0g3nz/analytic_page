import Vue from "vue";
import VueRouter from "vue-router";

import table from "../views/table";
//import Home from "../views/Home";
import lineChart from "../views/lineChart";
import BarChart from "../views/BarChart";
import PieChart from "../views/PieChart";
import Mapchart from "../views/map";
import Area from "../views/Area.vue";
import StudentSummary from "../views/dashboard_student/dashboard_student";
import eachCourse from "../views/dashboard_eachCourse";
import TEST from "../views/test";
import individualDashboard from "../views/dashboard_individual";
import infoTest from "../views/dashboard_infotest";
import revenue from "../views/dashboard_revenue";
import examOverview from "../views/dashboard_examOverview";
import examIndividual from "../views/dashboard_exam_individual";
import affiliate from "../views/affiliate";
import exam from "../views/exam";
import QandA from "../views/QandA";
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: StudentSummary,
  },
  {
    path: "/table",
    name: "table",
    component: table,
  },
  {
    path: "/lineChart",
    name: "lineChart",
    component: lineChart,
  },
  {
    path: "/BarChart",
    name: "BarChart",
    component: BarChart,
  },
  {
    path: "/PieChart",
    name: "PieChart",
    component: PieChart,
  },
  {
    path: "/map",
    name: "map",
    component: Mapchart,
  },
  {
    path: "/area",
    name: "area",
    component: Area,
  },
  {
    path: "/student_summary",
    name: "StudentSummary",
    component: StudentSummary,
  },
  {
    path: "/eachCourse",
    name: "eachCourse",
    component: eachCourse,
  },
  {
    path: "/test",
    name: "test",
    component: TEST,
  },
  {
    path: "/dashboard_individual",
    name: "dashboard_individual",
    component: individualDashboard,
  },
  {
    path: "/infoTest",
    name: "infoTest",
    component: infoTest,
  },
  {
    path: "/revenue",
    name: "revenue",
    component: revenue,
  },
  {
    path: "/examOverview",
    name: "examOverview",
    component: examOverview,
  },
  {
    path: "/examIndividual",
    name: "/examIndividual",
    component: examIndividual,
  },
  {
    path: "/affiliate",
    name: "/affiliate",
    component: affiliate,
  },
  {
    path: "/exam",
    name: "/exam",
    component: exam,
  },
  {
    path: "/QandA",
    name: "/QandA",
    component: QandA,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
