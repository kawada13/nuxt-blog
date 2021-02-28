export const state = () => ({
  isLoggedIn: false,
  user: null
 })


export const getters = {
  isLoggedIn: (state) => state.isLoggedIn,
  user: (state) => state.user
}


export const mutations = {
  setUser(state, {user} ) {
    console.log(user);
    state.isLoggedIn = true,
    state.user = user
  }
}


export const actions = {
  async login({commit}, {id}) {
    console.log(id);
    const user = await this.$axios.$get(`/users/${id}.json`)
    if(!user.id) throw new Error('Invalud user')
    console.log(user);
    console.log({user});
    commit('setUser', {user})
  },

  async register({commit}, {id}) {
    const payload = {}
    payload[id] = {id}
    const post = await this.$axios.$patch(`/users.json`, payload)
    const user = await this.$axios.$get(`/users/${id}.json`)
    if(!user.id) throw new Error('Invalud user')
    commit('setUser', {user})
  }
}

