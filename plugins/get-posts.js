const glob = require('glob')

const postPaths = glob.sync('**/*.md', { cwd: 'posts' })

function getSlug(path) {
  const slug = path.substring(0, path.lastIndexOf('.'))
  return `/blog/p/${slug}/`
}

const posts = postPaths.map(getSlug)

export default posts
