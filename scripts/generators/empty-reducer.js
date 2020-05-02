const appRoot = require('app-root-path')
const { prompt } = require('../utils/promptUtils')
const { applySettings } = require('../utils/loadUtils')
const { addAction, modifyAction } = require('../utils/actionUtils')
const { emptyReducer, emptyReducerTest } = require('../../plop-templates/templates')

const generateEmptyReducerActions = ({
  isSemicolons,
  jsExt,
}) => {
  let actions = [
    addAction(
      `${appRoot.path}/src/redux/reducer/{{snakeCase name}}.${jsExt}`,
      emptyReducer,
    ),
    addAction(
      `${appRoot.path}/src/redux/reducer/__test__/{{snakeCase name}}.test.${jsExt}`,
      emptyReducerTest,
    ),
    addAction(
      `${appRoot.path}/src/redux/creator/{{snakeCase name}}.${jsExt}`,
      '',
    ),
    addAction(
      `${appRoot.path}/src/redux/actions/{{snakeCase name}}.${jsExt}`,
      '',
    ),
  ]

  if (!isSemicolons) {
    actions = [
      ...actions,
      modifyAction(
        `${appRoot.path}/src/redux/reducer/{{snakeCase name}}.${jsExt}`,
        /;\n/g,
        '\n',
      ),
      modifyAction(
        `${appRoot.path}/src/redux/reducer/__test__/{{snakeCase name}}.test.${jsExt}`,
        /;\n/g,
        '\n',
      ),
    ]
  }

  return actions
}

const useEmptyReducerGenerator = (plop, settings) => {
  plop.setGenerator('empty reducer', {
    description: 'Create an empty skeleton reducer.',
    prompts: [
      prompt(
        'input',
        'name',
        'What is the name of the reducer?',
      ),
    ],
    actions(data) {
      applySettings(data, settings)
      return generateEmptyReducerActions(data)
    },
  })
}

module.exports = {
  useEmptyReducerGenerator,
  generateEmptyReducerActions,
}

