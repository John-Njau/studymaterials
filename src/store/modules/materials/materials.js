import axios from "axios";

export default {
  state: {
    materials: [],
    material: {},
    unit: {},
  },
  getters: {},
 
  actions: {
    async getMaterials() {
      await axios
        .get("api/materials")
        .then((response) => (this.materials = response.data))
        .catch(error => console.log(error))
        .finally(() => commit("setMaterials", this.materials));
    },
    async getLecturers({ commit },){
      await axios
        .get("api/lecturers")
        .then((response) => (this.lecturer = response.data))
        .catch(error => console.log(error))
        // .finally(() => commit("setLecturer", this.lecturer));
    },
    async getUnits({ commit },){
      await axios
        .get("api/units")
        .then((response) => 
        (this.units = response.data)
        
        )
        .catch(error => console.log(error))
        // .finally(() => commit("setUnits", this.units));
    }
  },
  mutations: {
    setMaterials(state, materials) {
      state.materials = materials;
    },
    setLecturer(state, lecturer) {
      state.lecturer = lecturer;
    },
    setUnits(state, units) {
      state.units = units;
    }
  },
};
