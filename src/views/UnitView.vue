<template>
  <div class="about">
    <h1>This is the unit details page</h1>
    <p>unit id {{ id }}</p>
    <p>{{ unit }}</p>
    <!-- TODO: When the btn is clicked. unit details and all pdfs for that unit should be populated -->
  </div>
</template>
<script>
import UnitComp from "@/components/UnitComp.vue";

export default {
  name: "UnitView",
  components: {
    UnitComp,
  },
  props: ["id"],
  computed: {
    unit() {
      return this.$store.state.materials.units;
    },
  },
};
</script>