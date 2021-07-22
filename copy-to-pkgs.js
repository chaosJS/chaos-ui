const fse = require('fs-extra')
const path = require('path')
const compsPath = path.resolve(__dirname, './src/components')
const pkgsPath = path.resolve(__dirname, './packages')
const fontsPath = path.resolve(__dirname, './src/assets')

fse.copy(compsPath, pkgsPath)
  .then(() => console.log('cp comps success!')).then(() => {
    fse.copy(fontsPath, pkgsPath).then(() => console.log('cp fonts success!'))
  })
  .catch(err => console.error(err, 'cp error!'))
