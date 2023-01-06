<template>
  <main>
    Hi {{ username }}!
    <UnderDevelopment />
  </main>
</template>

<script>
import UnderDevelopment from "@/components/UnderDevelopment.vue";
export default {
  name: "ProfileView",
  components: {
    UnderDevelopment,
  },
  // logged in username
  computed: {
    username() {
      return localStorage.getItem("username");
      // return this.$store.state.auth.user.get("username")
      // return this.$store.state.auth.user.username;
    },
  },
};
</script>

<style>
</style>