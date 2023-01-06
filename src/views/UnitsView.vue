<template>
  <section class="container">
    <!-- All Units -->
    <!-- {{ units }} -->
    <div class="columns is-multiline">
      <div class="column is-one-third" v-for="unit in units" :key="unit.id">
        <div class="mt-3 card">
          <template v-if="unit.unit_display_img">
            <figure>
              <img :src="unit.unit_display_img" :alt="unit.unit_name" />
            </figure>
          </template>
          <template v-else>
            <div>No Image</div>
          </template>
          <div class="media">
            <div class="media-left">
              <p class="title is-6">
                {{ unit.unit_code }} : {{ unit.unit_name }}
              </p>
              <router-link>{{ unit.unit_lecturer }}</router-link>
              <p>{{ unit.unit_lecturer }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "UnitsView",
  computed: {
    units() {
      return this.$store.state.materials.units;
    },
  },
};
</script>

<style>
</style>