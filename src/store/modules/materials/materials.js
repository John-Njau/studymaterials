import axios from "axios";

export default {
  state: {
    materials: [],
    // material: {},
    lecturers: [],
    // lecturer: {},
    units: [],
    // unit: {},
  },
  getters: {},

  actions: {
    async getMaterials({ commit }) {
      await axios
        .get("/api/v1/materials/")
        .then((response) => {
          commit("SET_MATERIALS", response.data);
          console.log(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    },
    async getLecturers({ commit }) {
      await axios
        .get("/api/v1/lecturers/")
        .then((response) => {
          commit("SET_LECTURERS", response.data);
          console.log(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    },
    async getUnits({ commit }) {
      await axios
        .get("/api/v1/units/")
        .then((response) => {
          commit("SET_UNITS", response.data);
          console.log(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
  mutations: {
    SET_MATERIALS(state, materials) {
      state.materials = materials;
    },
    SET_LECTURERS(state, lecturers) {
      state.lecturers = lecturers;
    },
    SET_UNITS(state, units) {
      state.units = units;
    },
  },
};
