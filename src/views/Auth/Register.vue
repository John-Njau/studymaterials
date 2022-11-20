<template>
  <div class="register">
    <div>
      <form @submit.prevent="submit" class="card">
        <div class="field">
          <!-- <label class="label" for="username">Username:</label> -->
          <input
            type="text"
            name="username"
            placeholder="Username"
            v-model="form.username"
          />
        </div>
        <div class="field">
          <!-- <label class="label" for="email">Email:</label> -->
          <input
            type="text"
            name="email"
            v-model="form.email"
            placeholder="Email"
          />
        </div>
        <div class="field">
          <!-- <label class="label" for="password">Password:</label> -->
          <input
            type="password"
            placeholder="Password"
            name="password"
            v-model="form.password"
          />
        </div>
        <div class="field">
          <!-- <label class="label" for="password">Password:</label> -->
          <input
            type="password"
            name="password2"
            placeholder="Confirm Password"
            required
            v-model="form.password2"
          />
        </div>

        <button class="btn is-small" type="submit">Sign up</button>
        <!-- <div>
          <p>Already have an Account? <a href="login" ><p class="button is-small" type="submit">Login</p></a> </p>
        </div> -->
      </form>
    </div>
    <p v-if="showError" id="error">Username already exists</p>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  data() {
    return {
      form: {
        username: "",
        email: "",
        password: "",
        password2: "",
      },
      showError: false,
    };
  },
  methods: {
    ...mapActions(["Register"]),
    async submit() {
      try {
        await this.Register(this.form);
        this.$router.push("/");
        this.showError = false;
      } catch (error) {
        this.showError = true;
      }
    },
  },
};
</script>

<style scoped>
* {
  box-sizing: border-box;
}

form {
  width: 50%;
  margin: 8px auto;
  padding: 12px 0;
  border-radius: 5%;
}

label {
  padding: 12px 12px 12px 0;
  display: inline-block;
}
button[type="submit"] {
  background-color: #0d7eee;
  color: white;
  padding: 12px 20px;
  cursor: pointer;
  border-radius: 30px;
}
button[type="submit"]:hover {
  background-color: #0d7eeec9;
}
input {
  /* margin: 5px; */
  /* box-shadow: 0 0 15px 4px rgba(0, 0, 0, 0.06); */
  padding: 10px;
  border-radius: 30px;
}
#error {
  color: red;
}
</style>
