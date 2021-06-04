import { createStore } from "vuex";
import Model from "../model/model.js";
export default createStore({
  state: {
    model: new Model(),
  },
  mutations: {
    CREATE_POST(state, info) {
      state.model.createPost(info);
    },
    REMOVE_POST(state, id) {
      state.model.removePost(id);
    },
    CREATE_COMMENT(state, info) {
      state.model.createComment(info);
    },
    LOAD_FROM_SERVER(state) {
      state.model.getPostsFromServer();
    },
  },
  actions: {
    CREATE_POST({ commit }, info) {
      commit("CREATE_POST", info);
    },
    REMOVE_POST({ commit }, id) {
      commit("REMOVE_POST", id);
    },
    CREATE_COMMENT({ commit }, info) {
      commit("CREATE_COMMENT", info);
    },
  },
  modules: {},
});
