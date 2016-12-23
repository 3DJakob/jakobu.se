const { spawnSync } = require('child_process')
const { publish } = require('gh-pages')

const build = spawnSync('node', ['build']).stdout.toString().trim()

publish(build, function (err) {
  if (err) throw err

  console.log('Deployed to GitHub Pages ✌️')
})
