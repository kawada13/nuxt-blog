import moment from '~/plugins/moment'

export const state = () => ({
  posts: []
})

export const getters = {
  posts: (state) => state.posts
}

export const mutations = {
  addPost(state, {post}) {
    console.log(post);
    state.posts.push(post)
  },
  updatePost(state, {post}) {
    state.posts = state.posts.map(p => (p.id === post.id ? post : p))
  },
  clearPosts(state) {
    state.posts = []
  }
}

export const actions = {
  async publishPost({ commit }, { payload }) {
    console.log(payload);
    const user = await this.$axios.$get(`/users/${payload.user.id}.json`)
    console.log(user);
    const created_at = moment().format()
    payload = {
      created_at,
      ...payload
    }
    console.log(payload);
    const post_id = (await this.$axios.$post('/posts.json', payload)).name
    const post = { id: post_id, ...payload }
    console.log(post);
    const putData = { id: post_id, ...payload,}
    console.log(putData);
    delete putData.user
    console.log(user);
    const fff = await this.$axios.$put(`/users/${user.id}/posts.json`, [
      ...(user.posts || []),
      putData
    ])
    commit('addPost', { post })
  },
}