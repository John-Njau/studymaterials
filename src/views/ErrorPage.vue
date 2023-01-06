<template>
  <section class="error-page">
    <h2>| 404 |</h2>
    <p>Page not found</p>
    <b-button>
      <router-link to="/" class="btn">Home</router-link>
    </b-button>
  </section>
</template>
  
  <script>
export default {
  methods: {},
};
</script>
  
  <style>
.error-page {
  /* display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center; */
  margin: auto auto;
  /* height: 100vh; */
  /* width: 100vw; */
}
</style>