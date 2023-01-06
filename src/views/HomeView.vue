<template>
  <main class="home container mt-5">
    <div class="is-title m-2">
      <h3 class="title">PDFs and Other Study Materials</h3>
    </div>
    <b-message
      title="Note"
      type="is-info"
      has-icon
      aria-close-label="Close message"
    >
      These materials will keep being updated as the semester progresses.
    </b-message>

    <section class="columns">
      <div v-for="(pdf, index) in pdfs" :key="index" class="column is-half">
        <div class="card">
          <div class="card-content">
            <div class="media">
              <div class="media-left">
                <p class="subtitle">{{ pdf.pdf_file_name }}</p>
              </div>
            </div>

            <div class="content">
              <!-- <p>
                <router-link :to="{ name: 'unit', params: { id: unit.id } }">{{
                  pdf.unit_name
                }}</router-link>
              </p>
              <p>
                <router-link
                  :to="{ name: 'lecturer', params: { id: lecturer.id } }"
                  >{{ lecturer.name }}</router-link
                >
              </p> -->
              <p>{{ pdf.unit_lecturer }}</p>
              <p>{{ pdf.unit_name }}</p>
            </div>
          </div>
          <footer class="card-footer">
            <p class="card-footer-item">
              <span>
                <a :href="pdf.pdf_file" download>Open</a>
              </span>
            </p>
            <!-- <p class="card-footer-item">
              <span>
                <a :href="pdf.pdf" download>Download</a>
              </span>
            </p> -->
          </footer>
        </div>
      </div>
    </section>
    <Footer />
  </main>
</template>

<script>
import { mapGetters, mapActions, mapMutations } from "vuex";
import axios from "axios";
import Footer from "@/components/Footer.vue";

export default {
  data() {
    return {
      // pdfs: [],
      // lecturers: [],
      // units: [],
    };
  },
  name: "HomeView",
  components: {
    Footer,
  },
  // mounted() {
  //   this.allPdfs();
  //   this.allUnits();
  //   this.viewLecturers();
  // },

  computed: {
    lecturers() {
      return this.$store.state.materials.lecturers;
    },
    units() {
      return this.$store.state.materials.units;
    },
    pdfs() {
      return this.$store.state.materials.materials;
    },
  },
  // methods: {
  //   lecturers() {
  //     this.$store.dispatch("getLecturers");
  //   },
  //   pdfs() {
  //     this.$store.dispatch("getMaterials");
  //   },
  //   units() {
  //     this.$store.dispatch("getUnits");
  //   },
  //   // async getMaterials() {
  //   //   await axios.get(
  //   //     "/api/v1/materials/")
  //   //     .then((response) => {
  //   //       this.materials = response.data;
  //   //     })
  //   //     .catch((error) => {
  //   //       console.log(error);
  //   //     });
  // },
  // ...mapActions(["getUnits", "getLecturers"]),
  // allUnits(){
  //   this.$store.dispatch("getUnits");
  // }
  // },
};
</script>
<style>
section {
  display: flex;
  flex-wrap: wrap;
}
</style>