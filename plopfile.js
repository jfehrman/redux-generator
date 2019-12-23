const {
  loadSettings,
  applySettings,
} = require('./scripts/utils/loadUtils.js')
const {
  getFileInfo,
  getJsFileExtension,
} = require('./scripts/utils/fileStructureUtils.js')
const { prompt } = require('./scripts/utils/promptUtils.js')
const { addAction } = require('./scripts/utils/actionUtils.js')

const settings = loadSettings()

module.exports = (plop) => {
  plop.setGenerator('hello world', {
    prompts: [
      prompt('input', 'name', 'What is your name?'),
    ],
    actions(data) {
      applySettings(data, settings)
      return [
        addAction(
          'hello_world.txt',
          'Hello {{name}}!',
        ),
      ]
    },
  })
}

