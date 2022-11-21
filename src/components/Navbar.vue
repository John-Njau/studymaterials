<template>
  <main>
    <div id="nav" class="mb-3 card">
      <!-- <router-link to="/">Home</router-link> | -->
      <span v-if="isLoggedIn">
        <a @click="logout">Logout</a> | <router-link to="/">Home</router-link> |
        <router-link to="/profile">Profile</router-link> |
        <b-dropdown aria-role="list">
          <template #trigger="{ active }" class="btn is-primary">
            <b-button :icon-right="active ? 'menu-up' : 'menu-down'">
              Units {{ units }}<i class="fa-solid fa-caret-down"></i
            ></b-button>
          </template>
          <b-dropdown-item
            aria-role="listitem"
            v-for="(unit, index) in units"
            :key="index"
          >
            <router-link to="/materials/:id">{{ unit.name }}</router-link>
          </b-dropdown-item>
          <b-dropdown-item aria-role="listitem">Another action</b-dropdown-item>
          <b-dropdown-item aria-role="listitem">Something else</b-dropdown-item>
        </b-dropdown>
        |
        <b-dropdown aria-role="list">
          <template #trigger="{ active }">
            <b-button :icon-right="active ? 'menu-up' : 'menu-down'"
              >Lecturers <i class="fa-solid fa-caret-down"></i
            ></b-button>
          </template>

          <b-dropdown-item aria-role="listitem">
            <router-link to="/materials/:id">Action</router-link>
          </b-dropdown-item>
          <b-dropdown-item aria-role="listitem">Another action</b-dropdown-item>
          <b-dropdown-item aria-role="listitem">Something else</b-dropdown-item>
        </b-dropdown>
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
export default {
  name: "Navbar",
  data() {
    return {
      // material: {},
      units: [],
      lecturers: [],
    };
  },
  computed: {
    isLoggedIn: function () {
      return this.$store.getters.isAuthenticated;
    },
  },
  mounted() {
    // this.units();
    // this.lecturers();
  },
  methods: {
    async logout() {
      await this.$store.dispatch("LogOut");
      this.$router.push("/login");
    },
    // async lecturers() {
    //   await this.$store.dispatch("getLecturers");
    //   this.$router.push("/lecturers/:id");
    // },
    // async units() {
    //   await this.$store.dispatch("getUnits");
    //   this.$router.push("/units/:id");
    // },
    async getLecturers() {
      await axios
        .get("/api/lecturers/")
        .then((response) => {
          this.lecturers = console.log(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    },

    async getUnits() {
      await axios.get("/api/units/").then((response) => {
        this.units = response.data;
      });
    },
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
  