<template>
  <main class="home container mt-5">
    <!-- <div>
      <p>PDFs</p>
      {{ materials }}
    </div>
    <div>
      <p>Units</p>
      {{ units }}
    </div>

    <div>
      <p>Lecturers</p>
      {{ lecturers }}
    </div> -->
    <div class="is-title m-2">
      <h2 class="title">All PDFs and Other Study Materials</h2>
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
      <div
        v-for="(material, index) in materials"
        :key="index"
        class="column is-half"
      >
        <div class="card">
          <!-- <div class="card-image">
            <figure class="image is-4by3">
              <img
                :src="material.image"
                alt="image"
              />
            </figure>
          </div> -->
          <div class="card-content">
            <div class="media">
              <div class="media-left">
                <p class="subtitle">{{ material.material_name }}</p>
              </div>
            </div>

            <div class="content">
              <!-- <p>
                <router-link :to="{ name: 'unit', params: { id: unit.id } }">{{
                  material.unit_name
                }}</router-link>
              </p>
              <p>
                <router-link
                  :to="{ name: 'lecturer', params: { id: lecturer.id } }"
                  >{{ lecturer.name }}</router-link
                >
              </p> -->
              <p>{{ material.lecturer }}</p>
              <p>{{ material.unit_name }}</p>
            </div>
          </div>
          <footer class="card-footer">
            <p class="card-footer-item">
              <span>
                <a :href="material.material" download>Open</a>
              </span>
            </p>
            <!-- <p class="card-footer-item">
              <span>
                <a :href="material.material" download>Download</a>
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
      // materials: [],
      // lecturers: [],
      // units: [],
    };
  },
  name: "HomeView",
  components: {
    Footer,
  },
  // mounted() {
  //   this.$store.dispatch("getUnits");
  //   this.$store.dispatch("getLecturers");
  //   this.$store.dispatch("getMaterials");
  //   // this.getMaterials();

  //   // this.getLecturers();
  // },
  computed: {
    lecturers() {
      return this.$store.state.materials.lecturers;
    },
    units() {
      return this.$store.state.materials.units;
    },
    materials() {
      return this.$store.state.materials.materials;
    },
  },
  methods: {
    // async getMaterials() {
    //   await axios.get(
    //     "/api/v1/materials/")
    //     .then((response) => {
    //       this.materials = response.data;
    //     })
    //     .catch((error) => {
    //       console.log(error);
    //     });
  },
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