// store.js
import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export function createStore () {
  return new Vuex.Store({
    state: {
      posts: []
    },
    actions: {
      async getPosts ({ commit }) {
        const { data } = await axios.get('https://cnodejs.org/api/v1/topics')
        commit('setPosts', data.data)
      }
    },
    mutations: {
      setPosts (state, data) {
        state.posts = data
      }
    }
  })
}