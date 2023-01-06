<template>
  <section class="container mt-5">
    <!-- All lecturers -->
    <div class="columns is-multiline">
      <!-- {{ lecturers }} -->
      <div
        class="column is-one-third"
        v-for="lecturer in lecturers"
        :key="lecturer.id"
      >
        <div class="card">
          <template v-if="lecturer.lecturer_image">
            <div class="card-image">
              <figure class="image is-4by3">
                <img
                  :src="lecturer.lecturer_image"
                  :alt="lecturer.lecturer_image"
                />
              </figure>
            </div>
          </template>
          <template v-else>
            <div>No Image</div>
          </template>
          <div class="card-content">
            <div class="">
              <div class="">
                <p>{{ lecturer.id }}</p>
                <p>{{ lecturer.lecturer_name }}</p>
                <p>{{ lecturer.lecturer_email }}</p>
                <p>{{ lecturer.lecturer_phone }}</p>
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