import { createStore } from 'vuex'

export default createStore({
  state: {
    dayMode: false,
  },
  mutations: {
    updateDayMode(state) {
      state.dayMode = !state.dayMode
    },
  },
  actions: {
  },
  modules: {
  }
})
