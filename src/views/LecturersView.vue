<template>
  <section>
    <!-- All lecturers -->
    <div class="columns is-multiline">
      <!-- {{ lecturers }} -->
      <div
        class="column is-one-third"
        v-for="lecturer in lecturers"
        :key="lecturer.id"
      >
        <div class="card">
          <div class="card-image">
            <figure class="image is-4by3">
              <img :src="lecturer.image" alt="Placeholder image" />
            </figure>
          </div>
          <div class="card-content">
            <div class="media">
              <div class="media-left">
                {{ lecturer.name }}
                <p>{{ lecturer.unit }}</p>
                <p>{{ lecturer.email }}</p>
                <p>{{ lecturer.phone }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "LecturersView",
  computed: {
    lecturers() {
      return this.$store.state.materials.lecturers;
    },
  },
};
</script>

<style>
</style>