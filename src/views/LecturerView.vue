<template>
  <div class="lec">
    <h1>This is the Lecs details page</h1>
    <p>lec id {{id}}</p>
    <p>{{lecturer}}</p>
  </div>
</template>
<script>

export default {
  name: "LecturerView",
  components: {
    
  },
  props: ["id"],
  computed: {
    lecturer() {
      return this.$store.state.lecturer
    },
  },
    
  
};

</script>