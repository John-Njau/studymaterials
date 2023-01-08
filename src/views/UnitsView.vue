<template>
  <section class="container">
    <!-- All Units -->
    <!-- {{ units }} -->
    <div class="columns is-multiline">
      <div
        class="column is-one-third unit-card"
        v-for="unit in units"
        :key="unit.id"
      >
        <router-link :to="{ name: 'unit', params: { id: unit.id } }">
          <div class="mt-3 card">
            <template class="" v-if="unit.unit_display_img">
              <figure class="unit-image">
                <img :src="unit.unit_display_img" :alt="unit.unit_name" />
              </figure>
            </template>
            <template v-else>
              <figure class="unit-image">
                <img src="../assets/UoN_Logo.png" alt="unit.unit_name" />
              </figure>
            </template>
            <div class="">
              <p class="title is-6">
                {{ unit.unit_code }} : {{ unit.unit_name }}
              </p>
              <router-link
                :to="{
                  name: 'lecturer',
                  params: { id: unit.unit_lecturer.id },
                }"
                >{{ unit.unit_lecturer }}</router-link
              >
            </div>
          </div>
        </router-link>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "UnitsView",
  props: ["id"],
  computed: {
    units() {
      return this.$store.state.materials.units;
    },
  },
};
</script>

<style>
.container {
  /* font-size: 2vw; */
  /* margin: 0 auto; */
  box-sizing: border-box;
}
.unit-card :hover {
  /* background-color: #0a0a0a; */
  /* blur */
  filter: blur(1px);
}
</style>