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
            <figure class="lecturer-image">
              <img
                :src="lecturer.lecturer_image"
                :alt="lecturer.lecturer_image"
              />
            </figure>
          </template>
          <template v-else>
            <figure class="lecturer-image image">
              <img
                src="../assets/user-icon-png-pnglogocom-133466.png"
                alt="lecturer.lecturer_name"
              />
            </figure>
          </template>

          <div class="card-content">
            <!-- <p>{{ lecturer.id }}</p> -->
            <p>
              <span class="is-size-6 has-text-weight-semibold">Name: </span>
              {{ lecturer.lecturer_name }}
            </p>
            <template v-if="lecturer.lecturer_email">
              <p>
                <span class="is-size-6 has-text-weight-semibold">Email: </span>
                {{ lecturer.lecturer_email }}
              </p>
            </template>
            <template v-else>
              <div>No Email</div>
            </template>
            <template v-if="lecturer.lecturer_phone">
              <div>
                <p>
                  <span class="is-size-6 has-text-weight-semibold"
                    >Phone:
                  </span>
                  {{ lecturer.lecturer_phone }}
                </p>
              </div>
            </template>
            <template v-else>
              <div>No contact</div>
            </template>
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
.lecturer-image {
  width: 20%;
  margin: auto;
  /* height: 200px; */
  /* object-fit: cover; */
}
.card-content{
  padding: 1rem;
  align-items: center;
  text-align: center;

}
</style>