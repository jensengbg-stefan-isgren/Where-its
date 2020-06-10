import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    eventsList: [
      {
        name: 'Lasse-Stefans',
        place: 'enplats',
        startTime: '19.00',
        endTime: '21.00',
        date: '2020-03-21',
        price: '350'
      },
      {
        name: 'Lasse-Stefans 2',
        place: 'tvåplats',
        startTime: '19.00',
        endTime: '21.00',
        date: '2020-03-25',
        price: '99'
      },
      {
        name: 'Lasse-Stefans 3',
        place: 'treplats',
        startTime: '19.00',
        endTime: '21.00',
        date: '2020-03-29',
        price: '250'
      }
    ]
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
