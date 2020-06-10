import Vue from 'vue'
import Vuex from 'vuex'
import validateTicket from './validateTicket'
Vue.use(Vuex)

export default new Vuex.Store({

    state: {
        eventList: [],
    },
    mutations: {
        saveEvents(state, eventList) {
            state.eventList = [...eventList]
        },
        pushEvent(state, event) {
            state.eventList.push(event)
        },
    },
    actions: {
        loadEventList({ commit, state }) {
            const url = 'http://localhost:3000/events'
            fetch(url, { method: 'GET' })
                .then((res) => res.json())
                .then((data) => {
                    commit('saveEvents', data)
                })
        },
        addEvent({ commit, state }, eventIn) {
            // console.log('adding: ', eventIn)
            const { startTime, endTime, date, ...eventOut } = eventIn
            eventOut.startDateTime = new Date(`${eventIn.date} ${eventIn.startTime}`)
            eventOut.endDateTime = new Date(`${eventIn.date} ${eventIn.endTime}`)

            // console.log(eventOut)
            const url = 'http://localhost:3000/events'
            fetch(url, {
                    method: 'POST',
                    headers: {
                        Accept: 'application/json',
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(eventOut),
                })
                .then((res) => res.json())
                .then((data) => {
                    commit('pushEvent', data)
                })
        },
    },
    modules: { validateTicket },
})