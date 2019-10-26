export const state = () => ({
  posts: [],
  projects: []
})

export const mutations = {
  setPosts(state, posts) {
    state.posts = posts
  },
  setProjects(state, projects) {
    state.projects = projects
  }
}

export const actions = {
  // Server side rendering init.
  // Load all posts and store them.
  async nuxtServerInit({ commit }) {
    // Get all posts.md
    const postFiles = await require.context('@/posts/', false, /\.md$/)

    // extract information
    const posts = postFiles
      .keys()
      .map((key) => {
        const post = postFiles(key)
        post.attributes.slug = key.slice(2, -3)
        post.attributes.date = new Date(post.attributes.date)
        post.attributes.words = post.body.split(' ').length
        post.attributes.mins = Math.round(post.attributes.words / 265)
        console.log(post.body.split(' ').length)
        return post
      })
      .sort((a, b) => {
        return b.attributes.date.getTime() - a.attributes.date.getTime()
      })

    commit('setPosts', posts)

    // rinse and repeat for projects.
    // TODO: Refactor -> reusable.

    // Get all projects.md
    const projectFiles = await require.context('@/projects/', false, /\.md$/)

    // extract information
    const projects = projectFiles
      .keys()
      .map((key) => {
        const project = projectFiles(key)
        if (project.attributes.date !== 'now') {
          project.attributes.date = new Date(project.attributes.date)
        } else {
          // if a current project, set date to today.
          project.attributes.date = new Date()
        }
        return project
      })
      .sort((a, b) => {
        return b.attributes.date.getTime() - a.attributes.date.getTime()
      })

    commit('setProjects', projects)
  }
}
