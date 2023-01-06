<template>
  <section>
    <!-- All Units -->
    {{ units }}
    <div class="columns is-multiline">
      <div class="column is-one-third" v-for="unit in units" :key="unit.id">
        <figure>
          <img :src="unit.display_img" alt="Placeholder image" />
        </figure>
        <div class="media">
          <div class="media-left">
            <p class="title is-4">{{ unit.name }}</p>
            <p>{{ unit.code }}</p>
            <p>{{ unit.lecturer }}</p>
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