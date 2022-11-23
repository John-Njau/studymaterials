<template>
  <main class="home container mt-5">
    <div>
      {{ materials}}
    </div>
    <div>
      {{ units }}
    </div>

    <div>
      {{ lecturers }}
    </div>

    <b-message
      title="Note"
      type="is-warning"
      has-icon
      aria-close-label="Close message"
    >
      These materials will keep being updated as the semester progresses.
    </b-message>
    <section class="columns">
      <div
        v-for="pdf in materials"
        :key="pdf.id"
        class="column is-half"
      >
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
import { mapGetters, mapActions, mapMutations } from "vuex";
import axios from "axios";
import Footer from "@/components/Footer.vue";

export default {
  data() {
    return {
      materials: [],
      // lecturers: [],
    };
  },
  name: "HomeView",
  components: {
    Footer,
  },
  mounted() {
    // this.$store.dispatch("getMaterials");
    this.getMaterials();
    // this.getLecturers();
  },
  computed: {
    // lecturers() {
    //   return this.$store.state.lecturers;
    // },
    // units() {
    //   return this.$store.state.units;
    // },
    data() {
      return this.$store.state.materials;
    },
  },
  methods: {
    async getMaterials() {
      await axios.get(
        "/api/v1/materials/")
        .then((response) => {
          this.materials = response.data;
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