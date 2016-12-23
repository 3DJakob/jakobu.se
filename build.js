const fs = require('fs')
const ejs = require('ejs')
const ncp = require('ncp')
const temp = require('fs-temp')

const build = temp.mkdirSync()

function render (name, outputName = name) {
  const filename = `views/page_${name}.ejs`
  const source = fs.readFileSync(filename, 'utf-8')
  const template = ejs.compile(source, { filename })
  const output = template({ page: name })

  fs.writeFileSync(`${build}/${outputName}.html`, output)
}

render('explore')
render('home', 'index')
render('me')

ncp('assets/js', `${build}/js`)
ncp('assets/img', `${build}/img`)
ncp('assets/css', `${build}/css`)

console.log(build)
