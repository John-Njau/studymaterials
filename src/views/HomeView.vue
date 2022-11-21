<template>
  <main class="home container mt-5">
    <!-- {{ materials }} -->
    <b-message
      title="Note"
      type="is-warning"
      has-icon
      aria-close-label="Close message"
    >
      These materials will keep being updated as the semester progresses.
    </b-message>
    <section class="columns">
      <div v-for="pdf in materials" :key="pdf.id" class="column is-half">
        <!-- <p>{{ pdf.unit_name }}</p> -->
        <!-- <p>{{ pdf.lecturer }}</p> -->
        <!-- download material -->
        <!-- <a :href="pdf.material" download>Download</a> -->
        <!-- <embed :src="pdf.material" type=""> -->
        <!-- <p>{{ pdf.material }}</p> -->
        <div class="card">
          <div class="card-image">
            <figure class="image is-4by3">
              <img
                src="https://bulma.io/images/placeholders/1280x960.png"
                alt="Placeholder image"
              />
            </figure>
          </div>
          <div class="card-content">
            <div class="media">
              <div class="media-left">
                <p class="subtitle">{{ pdf.lecturer }}</p>
              </div>
            </div>

            <div class="content">
              {{ pdf.unit_name }}
              <br />
            </div>
          </div>
          <footer class="card-footer">
            <p class="card-footer-item">
              <span>
                <a href="">Open</a>
              </span>
            </p>
            <p class="card-footer-item">
              <span> <a :href="pdf.material" download>Download Pdf</a> </span>
            </p>
          </footer>
        </div>
      </div>
      <p>{{ lecturers }}</p>
    </section>
    <Footer />
  </main>
</template>

<script>
import materials from "@/store/modules/materials/materials";
import { mapGetters, mapActions, mapMutations } from "vuex";
import axios from "axios";
import Footer from "@/components/Footer.vue";

export default {
  data() {
    return {
      materials: [],
      lecturers: [],
    };
  },
  name: "HomeView",
  components: {
    Footer,
  },
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
section {
  display: flex;
  flex-wrap: wrap;
}
</style>