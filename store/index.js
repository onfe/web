export const state = () => ({
  posts: []
})

export const mutations = {
  set(state, posts) {
    state.posts = posts
  }
}

export const actions = {
  // Server side rendering init.
  // Load all posts and store them.
  async nuxtServerInit({ commit }) {
    const fm = require('front-matter')

    // Get all posts.md
    const files = await require.context('@/posts/', false, /\.md$/)

    // extract information
    const posts = files
      .keys()
      .map((key) => {
        const post = files(key)
        post.slug = key.slice(2, -3)
        return post
      })
      .map((post) => {
        const info = fm(post.default).attributes
        info.slug = post.slug
        info.date = new Date(info.date)
        return info
      })
      .sort((a, b) => {
        return b.date.getTime() - a.date.getTime()
      })

    commit('set', posts)
  }
}
