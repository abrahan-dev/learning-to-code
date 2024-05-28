import { createStore } from "vuex";

export default createStore({
  state: {
    user: { id: 'abc123', name: 'Abrahan Mesa'},
    categories: ['sustainability', 'nature', 'animal welfare', 'housing', 'education', 'food', 'community'],
    todos: [
      { id: 1, text: '...', done: true },
      { id: 2, text: '...', done: false },
      { id: 3, text: '...', done: true },
      { id: 4, text: '...', done: false }
    ],
    events: [
      { id: 1, text: 'event 1', organizer: 'Adam' },
      { id: 2, text: 'event 2', organizer: 'Abrahan' }
    ],
    eventscreated: []
  },
  // mutations are synchronous
  // always use mutations within actions - future-proof the app
  mutations: {
    ADD_EVENT(state, event) {
      state.eventscreated.push(event)
    }
  },
  // actions are asynchronous
  // actions can wrap business logic around Mutations
  actions: {
    createEvent({ commit }, event) {
      commit('ADD_EVENT', event)
    }
  },
  modules: {},
  getters: {
    catLength: state => state.categories.length,
    doneTodos: (state) => {
      return state.todos.filter(todo => todo.done)
    },
    // how to pass a getter into another getter
    activeTodosCount: (state, getters) => {
      return state.todos.length - getters.doneTodos.length
    },
    // dynamic getters (passing parameters in a getter)
    getEventById: (state) => (id) => {
      return state.events.find(event => event.id === id)
    },
    getMyEvents: (state) => {
      return state.eventscreated
    }
  }
});
