import axios from "axios";

export default {
  state: {
    user: null,
    accessToken: localStorage.getItem("access_token") || null,
  },
  getters: {
    isAuthenticated: (state) => !!state.user,
  },

  // dispatch other actions
  actions: {
    async Register({ dispatch }, form) {
      await axios.post("api/v1/auth/", form);
      let userForm = new FormData();
      userForm.append("username", form.username);
      userForm.append("password", form.password);

      await dispatch("LogIn", userForm);
    },
    async LogIn({ commit }, user) {
      await axios.post("api/token/", user)
      .then((response) => {
        const token = response.data.access;
        localStorage.setItem("access_token", token);
        axios.defaults.headers.common["Authorization"] = token;

        commit("auth_success", token);
        console.log(token);
      })
      await commit("setUser", user.get("username"));
    },
    async LogOut({ commit }) {
      let user = null;
      commit("logout", user);
      localStorage.removeItem("access_token");
      delete axios.defaults.headers.common["Authorization"];
    },
  },
  // commit mutations, mutate the state
  mutations: {
    setUser(state, username) {
      state.user = username;
    },
    updateAccessToken(state, accessToken) {
      state.accessToken = accessToken;
    },
    logout(state) {
      state.user = null;
    },
    auth_success(state, token) {
      state.accessToken = token;
    }
  },
};
