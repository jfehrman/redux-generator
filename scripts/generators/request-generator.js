const appRoot = require('app-root-path')
const { prompt } = require('../utils/promptUtils')
const {applySettings } = require('../../plop-templates/templates')

const generateRequestReducerActions = ({

}) => {

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
    }
  })
}

module.exports = {
  useRequestReducerGenerator,
  generateRequestReducerActions,
}

