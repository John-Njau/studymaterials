<template>
  <div class="lec">
    <h1>This is the Lecs details page</h1>
    {{ lecturer  }}
    <p>lec id {{ id }}</p>
    <div v-if="lecturer">
      <p>{{ lecturer.name }}</p>
      <p>{{ lecturer.email }}</p>
      <p>{{ lecturer.phone }}</p>
      <p>{{ lecturer.unit }}</p>
    </div>
    <div v-else >
      <p>Lecturer Details Loading...</p>
    </div>
  </div>
</template>
<script>
export default {
  name: "LecturerView",
  components: {},
  props: ["id"],
  computed: {
    lecturer() {
      return this.$store.state.lecturer;
    },
  },
  mounted() {
    this.$store.dispatch("getLecturer", this.id);
  },
};
</script>