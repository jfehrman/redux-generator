const appRoot = require('app-root-path')
const { prompt } = require('../utils/promptUtils')
const { addAction, modifyAction } = require('../utils/actionUtils')
const { applySettings } = require('../utils/loadUtils')
const {
  requestActions,
  requestCreators,
  requestReducer,
  requestThunk,
} = require('../../plop-templates/templates')

const generateRequestReducerActions = ({
  isSemicolons,
  jsExt,
}) => {
  let actions = [
    addAction(
      `${appRoot.path}/src/redux/reducer/{{snakeCase name}}.${jsExt}`,
      requestReducer,
    ),
    addAction(
      `${appRoot.path}/src/redux/actions/{{snakeCase name}}.${jsExt}`,
      requestActions,
    ),
    addAction(
      `${appRoot.path}/src/redux/creators/{{snakeCase name}}.${jsExt}`,
      requestCreators,
    ),
    addAction(
      `${appRoot.path}/src/redux/thunk-actions/{{snakeCase name}}.${jsExt}`,
      requestThunk,
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
        `${appRoot.path}/src/redux/actions/{{snakeCase name}}.${jsExt}`,
        /;\n/g,
        '\n',
      ),
      modifyAction(
        `${appRoot.path}/src/redux/creators/{{snakeCase name}}.${jsExt}`,
        /;\n/g,
        '\n',
      ),
      modifyAction(
        `${appRoot.path}/src/redux/thunk-actions/{{snakeCase name}}.${jsExt}`,
        /;\n/g,
        '\n',
      ),
    ]
  }

  return actions
}

const useRequestReducerGenerator = (plop, settings) => {
  plop.setGenerator('request reducer', {
    description: 'Create a reducer that is designed to send an async request',
    prompts: [
      prompt(
        'input',
        'name',
        'What is the name of the request?',
      ),
      prompt(
        'input',
        'url',
        'What is the url the request should be sent to?',
      ),
    ],
    actions(data) {
      applySettings(data, settings)
      return generateRequestReducerActions(data)
    },
  })
}

module.exports = {
  useRequestReducerGenerator,
  generateRequestReducerActions,
}

