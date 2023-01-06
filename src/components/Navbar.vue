<template>
  <main>
    <div id="nav" class="mb-3 card">
      <span v-if="isLoggedIn">
        <a @click="logout">Logout</a> | <router-link to="/">Home</router-link> |
        <router-link to="/profile">Profile</router-link> | 
        <router-link to="/units">Units</router-link> |
        <router-link to="/lecturers">Lecturers</router-link> 
        <!-- <b-dropdown aria-role="list">
          <template #trigger="{ active }" class="btn is-primary">
            <b-button :icon-right="active ? 'menu-up' : 'menu-down'">
              Units <i class="fa-solid fa-caret-down"></i
            ></b-button>
          </template>
          <b-dropdown-item
            aria-role="listitem"
            v-for="(unit, index) in data.units"
            :key="index"
          >
            <router-link :to="{ name: 'unit', params: { id: unit.id } }">{{
              unit.name
            }}</router-link>
          </b-dropdown-item>
        </b-dropdown>
        |
        <b-dropdown aria-role="list">
          <template #trigger="{ active }">
            <b-button :icon-right="active ? 'menu-up' : 'menu-down'"
              >Lecturers <i class="fa-solid fa-caret-down"></i
            ></b-button>
          </template>

          <b-dropdown-item
            aria-role="listitem"
            v-for="(lecturer, index) in data.lecturers"
            :key="index"
          >
            <router-link
              :to="{ name: 'lecturer', params: { id: lecturer.id } }"
              >{{ lecturer.name }}</router-link
            >
          </b-dropdown-item>
        </b-dropdown> -->
      </span>
      <span v-else>
        <router-link to="/register">Sign up</router-link> |
        <router-link to="/login">Login</router-link>
      </span>
    </div>
  </main>
</template>
  
  <script>
import axios from "axios";
import { mapActions } from "vuex";

export default {
  name: "Navbar",
  // data() {
  //   return {
  //     // units: [],
  //   };
  // },
  computed: {
    isLoggedIn: function () {
      return this.$store.getters.isAuthenticated;
    },
    // lecturers() {
    //   return this.$store.state.lecturers;
    // },
    // units() {
    //   return this.$store.state.units;
    // },
    data() {
      return this.$store.state.materials;
    },
  },
  // mounted() {
  // this.$store.dispatch("getLecturers");
  // this.$store.dispatch("getUnits");
  // },
  methods: {
    async logout() {
      await this.$store.dispatch("LogOut");
      this.$router.push("/login");
    },
    // async getUnits() {
    //   await axios.get("/api/units/").then((response) => {
    //     this.units = response.data;
    //   });
    // },
  },
};
</script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
  <style scoped lang="scss">
#nav {
  padding: 24px;
  background-color: #f5f5f5;

  a {
    font-weight: bold;
    color: #0d7eee;

    &.router-link-exact-active {
      color: #6b4d1f;
    }
  }
}

a:hover {
  cursor: pointer;
}
</style>
  