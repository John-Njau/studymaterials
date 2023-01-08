<template>
  <div id="app">
    <Navbar />
    <!-- <Sidebar /> -->

    <router-view />
  </div>
</template>
<script>
import Navbar from "@/components/Navbar.vue";
import Sidebar from "@/components/Sidebar.vue";

export default {
  name: "App",
  components: {
    Navbar,
    Sidebar,
  },
};
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300&display=swap');

// root variables
:root {
  --primary-color: #2c3e50;
  --secondary-color: #42b983;
  --tertiary-color: #f5f5f5;
  }

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  font-family: 'Poppins', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

.card {
  width: 100%;
  height: 100%;
}

.unit-image {
  width: 100px;
  height: 100px;
  object-fit: cover;
  margin: 12px auto;
}
</style>
