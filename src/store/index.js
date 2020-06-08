import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    eventList: [
      {
        id: 2343543,
        name: 'Lasse-Stefanz',
        place: 'Kjell Härnqvistsalen',
        startDateTime: new Date(),
        endDateTime: new Date(),
        tickets: 300,
        price: 350,
        soldTickets: 22,
      },
      {
        id: 324333,
        name: 'Pelle Trubadur',
        place: 'Pubelipubben',
        startDateTime: new Date(),
        endDateTime: new Date(),
        tickets: 100,
        price: 110,
        soldTickets: 100,
      },
    ],
  },
  mutations: {},
  actions: {
    async loadEventList({ commit, state }) {},
  },
  modules: {},
})
