/**
 * Use require.context to require contexts automatically
 *
 * @param {*} r
 * @param {*} ignores
 * @Refs https://webpack.js.org/guides/dependency-management/#require-context
 */
const importAllFiles = (r, ignores = ['./index.js']) => {
  if (!r) r = require.context('./', false, /\.js$/)
  const cache = {}
  r.keys()
    .filter((p) => !ignores.includes(p))
    .forEach((key) => {
      const keys = key.split(/\.\/|.js/)
      cache[keys[1]] = r(key).default
    })
  return cache
}

export default importAllFiles
