import Vue from 'vue'
import Vuex from 'vuex'
import * as actions from './actions'
import * as getters from './getters'
import * as types from './mutation-types'

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== 'production'

const state = {
  posts: []
};


const mutations = {
  [types.RECEIVE_POSTS] (state, { posts }) {
    state.posts = posts
  },
}

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters,
});


