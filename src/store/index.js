import Vue from 'vue'
import Vuex from 'vuex'
//import data from '../DATA.js';
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    sidebarstatus: false,
    test: [],
  },
  getters: {
    SBstatus: (state) => {
      return state.sidebarstatus
    },
    data: (state) => {
      return state.test
    }
  },
  mutations: {
    ShowSB(state) {
      state.sidebarstatus = true
    },
    HideSB(state) {
      state.sidebarstatus = false
    },
    check(state, value) {
      state.sidebarstatus = value
    },
    setdata(state) {
      state.test = [{
        id: 1,
        first_name: "BrigBrigBgBrigBrigBrigBrigBrigBrigBrigBrigBrigBrigBrigBrigBrigBrigBrigBrigBrigBrigBrigBrigBrigBrigBrigBrigBrigBrigBrigBrigBrigBrig",
        last_name: "Flieger",
        email: "bflieger0@theglobeandmail.com",
        gender: "Male",
        ip_address: "122.167.17.227",
        time: "11:14:32",
        date: "27/02/2019",
        course: "Kanlam",
      },
      {
        id: 2,
        first_name: "Cindy",
        last_name: "Brandts",
        email: "cbrandts1@surveymonkey.com",
        gender: "Female",
        ip_address: "18.171.90.217",
        time: "3:35:29",
        date: "13/11/2019",
        course: "Stim",
      },
      {
        id: 3,
        first_name: "Rufe",
        last_name: "Lyal",
        email: "rlyal2@dyndns.org",
        gender: "Male",
        ip_address: "99.95.161.55",
        time: "13:14:55",
        date: "19/10/2019",
        course: "Stronghold",
      },
      {
        id: 4,
        first_name: "Corbin",
        last_name: "Fidele",
        email: "cfidele3@arizona.edu",
        gender: "Male",
        ip_address: "19.254.71.236",
        time: "9:21:07",
        date: "06/11/2019",
        course: "Home Ing",
      },
      {
        id: 5,
        first_name: "Lockwood",
        last_name: "Irlam",
        email: "lirlam4@noaa.gov",
        gender: "Male",
        ip_address: "56.33.234.252",
        time: "8:20:17",
        date: "22/03/2020",
        course: "Wrapsafe",
      },
      {
        id: 6,
        first_name: "Valentine",
        last_name: "Haszard",
        email: "vhaszard5@twitpic.com",
        gender: "Female",
        ip_address: "171.206.214.13",
        time: "12:00:17",
        date: "25/09/2019",
        course: "Wrapsafe",
      },
      {
        id: 7,
        first_name: "Inez",
        last_name: "Bleesing",
        email: "ibleesing6@wired.com",
        gender: "Female",
        ip_address: "37.126.179.55",
        time: "5:30:28",
        date: "24/12/2019",
        course: "Prodder",
      },
      {
        id: 8,
        first_name: "Tobi",
        last_name: "Bird",
        email: "tbird7@ebay.co.uk",
        gender: "Female",
        ip_address: "4.214.114.188",
        time: "16:33:23",
        date: "16/01/2019",
        course: "Bytecard",
      },
      {
        id: 9,
        first_name: "Andrew",
        last_name: "Soles",
        email: "asoles8@twitpic.com",
        gender: "Male",
        ip_address: "192.63.63.118",
        time: "9:44:07",
        date: "13/07/2019",
        course: "Bytecard",
      },
      {
        id: 10,
        first_name: "Carey",
        last_name: "Braybrook",
        email: "cbraybrook9@bigcartel.com",
        gender: "Female",
        ip_address: "47.115.172.89",
        time: "7:02:53",
        date: "30/09/2019",
        course: "Fix San",
      },
      ]
    }
  },
  actions: {
    ShowSB({ commit }) {
      commit('ShowSB')

    },
    HideSB({ commit }) {
      commit('HideSB')
    },
    setdata({ commit }) {
      commit('setdata')
    }
  },
  modules: {
  }
})
