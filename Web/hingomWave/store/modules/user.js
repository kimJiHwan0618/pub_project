const state = {
  userProfile: {
    email: '',
    firstName: '',
    lastName: ''
  }
}

// getters
const getters = {
  getUserProfile: (state) => {
    return state.userProfile
  }
}

// mutations
const mutations = {
  updateUserProfile: (state, payload) => {
    state.userProfile.email = payload.username || ''
    state.userProfile.firstName = payload.firstName || ''
    state.userProfile.lastName = payload.lastName || ''
  },
  updateUser: (state, payload) => {
    window.$nuxt.$auth.setUser(payload.data)
  }
}

// actions
const actions = {
  updateToken: (context, payload) => {
    window.$nuxt.$api.defaults.headers.common['Authorization'] = `JWT ${payload.access_token}`
  },
  updateUser: (context, payload) => {
    context.commit('updateUserProfile', payload)
  },
  fetchUser: (context) => {
    window.$nuxt.$api.get('/api/auth/user')
      .then(res => {
        context.commit('updateUser', res.data)
      })
  },
  logout: () => {
    window.$nuxt.$auth.logout()
    delete window.$nuxt.$api.defaults.common['Authorization']
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
