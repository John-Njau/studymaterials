<template>
  <div class="login">
    <div>
      <form @submit.prevent="submit" class="card">
        <div class="field">
          <!-- <label class="label" for="username">username:</label> -->
          <input
            type="text"
            placeholder="Username"
            name="username"
            v-model="form.username"
          />
        </div>
        <div class="field">
          <!-- <label class="label" for="password">Password:</label> -->
          <input
            class=""
            placeholder="Password"
            type="password"
            name="password"
            v-model="form.password"
          />
        </div>
        <button type="submit">Login</button>
        <!-- <div>
          <p>Don't have an account? <a href="register" ><p class="button is-small" type="submit">Sign up</p></a> </p>
        </div> -->
      </form>
      <p v-if="showError" id="error">Incorrect username or Password</p>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "Login",
  components: {},
  data() {
    return {
      form: {
        username: "",
        password: "",
      },
      showError: false,
    };
  },
  methods: {
    ...mapActions(["LogIn"]),
    async submit() {
      const User = new FormData();
      User.append("username", this.form.username);
      // console.log(this.form.username);
      User.append("password", this.form.password);

      try {
        await this.LogIn(User);
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
label {
  padding: 12px 12px 12px 0;
  display: inline-block;
}
button[type="submit"] {
  background-color: #0d7eeec9;
  color: white;
  padding: 12px 20px;
  cursor: pointer;
  border-radius: 30px;
}
button[type="submit"]:hover {
  background-color: #0d7eeec9;
}
input {
  margin: 5px;
  box-shadow: 0 0 12px 4px rgba(0, 0, 0, 0.06);
  padding: 10px;
  border-radius: 30px;
}
#error {
  color: red;
}

form {
  width: 50%;
  margin: 8px auto;
  padding: 12px 0;
  border-radius: 5%;
}
</style>
