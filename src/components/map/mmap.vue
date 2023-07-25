<template>
  <div class="container">
    <b-container class="bv-example-row">
      <b-card no-body class="text-center" style="margin-bottom:50px">
        <div class="bg-info text-light">
          <p class>IP : {{ user.ip }}</p>
          <p class>Country : {{ user.address.country }}</p>
          <p class>Country code : {{ user.address.country_code }}</p>
          <p class>City : {{ user.address.city }}</p>
          <p class>Region code : {{ user.address.region_code }}</p>
        </div>
      </b-card>

      <b-row>
        <b-col>
          <div>
            <svg xmlns="http://www.w3.org/2000/svg" xmlns:amcharts="http://amcharts.com/ammap"
              xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" viewBox="0 0 600 1100" width="100%" height="100%"
              id="map" class="wrapper">
              <defs>
                <amcharts:ammap projection="mercator" leftLongitude="97.344728" topLatitude="20.463430"
                  rightLongitude="105.640023" bottomLatitude="5.614417" />

                <!-- All areas are listed in the line below. You can use this list in your script. -->
                <!--{id:"TH-10"},{id:"TH-11"},{id:"TH-12"},{id:"TH-13"},{id:"TH-14"},{id:"TH-15"},{id:"TH-16"},{id:"TH-17"},{id:"TH-18"},{id:"TH-19"},{id:"TH-20"},{id:"TH-21"},{id:"TH-22"},{id:"TH-23"},{id:"TH-24"},{id:"TH-25"},{id:"TH-26"},{id:"TH-27"},{id:"TH-30"},{id:"TH-31"},{id:"TH-32"},{id:"TH-33"},{id:"TH-34"},{id:"TH-35"},{id:"TH-36"},{id:"TH-37"},{id:"TH-38"},{id:"TH-39"},{id:"TH-40"},{id:"TH-41"},{id:"TH-42"},{id:"TH-43"},{id:"TH-44"},{id:"TH-45"},{id:"TH-46"},{id:"TH-47"},{id:"TH-48"},{id:"TH-49"},{id:"TH-50"},{id:"TH-51"},{id:"TH-52"},{id:"TH-53"},{id:"TH-54"},{id:"TH-55"},{id:"TH-56"},{id:"TH-57"},{id:"TH-58"},{id:"TH-60"},{id:"TH-61"},{id:"TH-62"},{id:"TH-63"},{id:"TH-64"},{id:"TH-65"},{id:"TH-66"},{id:"TH-67"},{id:"TH-70"},{id:"TH-71"},{id:"TH-72"},{id:"TH-73"},{id:"TH-74"},{id:"TH-75"},{id:"TH-76"},{id:"TH-77"},{id:"TH-80"},{id:"TH-81"},{id:"TH-82"},{id:"TH-83"},{id:"TH-84"},{id:"TH-85"},{id:"TH-86"},{id:"TH-90"},{id:"TH-91"},{id:"TH-92"},{id:"TH-93"},{id:"TH-94"},{id:"TH-95"},{id:"TH-96"},{id:"TH-LKSG"}-->
              </defs>
              <g>
                <div>test</div>
                <path v-for="(data, i) in Datas" :key="i" :id="data.id" :title="data.title"
                  :class="[check_active(i) > 0 ? 'land-active' : 'land']" :d="data.d" @click="select(data.id, i)">
                  <b-tooltip :target="data.id" triggers="hover">{{ data.title }}</b-tooltip>
                </path>
              </g>
            </svg>
          </div>
        </b-col>
        <b-col>
          <b-list-group v-for="(data, i) in dataActive" :key="i">
            <b-list-group-item button>
              <b-container>
                <b-row align-h="between">
                  <b-col>{{ data.title }}</b-col>
                  <b-col>{{ data.viewer }}</b-col>
                </b-row>
              </b-container>
              <div></div>
            </b-list-group-item>
          </b-list-group>
        </b-col>
      </b-row>
    </b-container>
    <button @click="reset">Reset</button>
  </div>
</template>
<script>
/* import THData from "./thailandDataMap"; */
import axios from "axios";
export default {
  data() {
    return {
      hover: false,
      Datas: [],
      user: {
        ip: "",
        address: { country: "", country_code: "", city: "", region_code: "" }
      }
    };
  },
  methods: {
    reset() {
      for (let key in this.Datas) {
        this.Datas[key].viewer = 0
        console.log(this.Datas[key].viewer)
      }
      axios
        .put(
          "https://vuejs-http-73d7a.firebaseio.com/user_map.json",
          this.Datas
        )
        .then(res => {
          console.log(res);
        })
        .catch(err => {
          console.log(err);
        });

    },
    check_active(index) {
      return this.Datas[index].viewer;
    },
    select(id, index) {
      /* this.Datas[index].isActive = !this.Datas[index].isActive; */
      this.Datas[index].viewer += 1;
      axios
        .put(
          "https://vuejs-http-73d7a.firebaseio.com/user_map.json",
          this.Datas
        )
        .then(res => {
          console.log(res);
        })
        .catch(err => {
          console.log(err);
        });
    }
  },
  computed: {
    dataActive() {
      let result = this.Datas.filter(data => {
        return data.viewer > 0;
      });
      return result;
    }
  },
  created() {
    axios
      .get("https://ipapi.co/json/") /* 1,000 requests per day */
      .then(res => {
        this.user.ip = res.data.ip;
        this.user.address.country = res.data.country_name;
        this.user.address.country_code = res.data.country_code;
        this.user.address.region_code = res.data.region_code;
        this.user.address.city = res.data.city;
      })
      .catch(err => {
        console.log(err);
      });

    axios
      .get("https://vuejs-http-73d7a.firebaseio.com/user_map.json")
      .then(res => {
        const datas = res.data;
        this.Datas = datas;
        for (let data in this.Datas) {
          let region_code = this.Datas[data].id[3] + this.Datas[data].id[4];

          console.log(region_code);
          if (this.user.address.region_code == region_code) {
            this.Datas[data].viewer += 1;
            axios
              .put(
                "https://vuejs-http-73d7a.firebaseio.com/user_map.json",
                this.Datas
              )
              .then(res => {
                console.log(res);
              })
              .catch(err => {
                console.log(err);
              });
          }
        }
      })
      .catch(err => {
        console.log(err);
      });
  }
};
</script>
<style scoped>
.wrapper {
  display: block;

  margin: auto;
}

.land-active {
  fill: #e78c06;
  stroke-width: 2;
  stroke: white;
  stroke-opacity: 0.5;
}

.land-active:hover {
  fill: #ffbe4f;
  stroke-width: 2;
  stroke: white;
  stroke-opacity: 1;
}

.land:hover {
  fill: #ffbe4f;
  stroke-width: 5;
  stroke: white;
  stroke-opacity: 1;
}

.land {
  fill: #cccccc;
  fill-opacity: 1;
  stroke: white;
  stroke-opacity: 1;
  stroke-width: 0.5;
}

.water {
  stroke-width: 0.5;
}

svg {
  transition: 200ms;
  transition-timing-function: ease-in-out;
  -webkit-transition: 200ms;
  -webkit-transition-timing-function: ease-in-out;
}
</style>
