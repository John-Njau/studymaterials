<template>
  <div class="home">
    {{ materials }}
    <p>{{lecturers}}</p>
  </div>
</template>

<script>
import materials from "@/store/modules/materials/materials";
import { mapGetters, mapActions, mapMutations } from "vuex";
import axios from "axios";

export default {
  data() {
    return {
      materials: [],
      lecturers: [],
    };
  },
  name: "HomeView",
  components: {},
  mounted() {
    // this.$store.dispatch("getMaterials");
    this.getMaterials();
  },
  computed: {
    // ...mapActions("materials", ["getMaterials"]),
  },
  methods: {
    async getMaterials() {
      await axios
        .get("/api/materials/")
        .then((response) => {
          this.materials = response.data;
        })
        .catch((error) => {
          console.log(error);
        });
    },
    async getLecturers() {
        await axios
          .get("/api/lecturers/")
          .then((response) => {
            this.lecturers = response.data;
          })
          .catch((error) => {
            console.log(error);
          });
      },
  },
};
</script>
<style>
</style>