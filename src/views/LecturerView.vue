<template>
  <div class="lec">
    <h1>This is the Lecs details page</h1>
    {{ lecturer  }}
    <p>lec id {{ id }}</p>
    <div v-if="lecturer">
      <p>{{ lecturer.id }}</p>
      <p>{{ lecturer.lecturer_name }}</p>
      <p>{{ lecturer.lecturer_email }}</p>
      <p>{{ lecturer.lecturer_phone }}</p>
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