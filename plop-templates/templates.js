/* eslint-disable global-require */
module.exports = {
  emptyReducer: require('./empty-reducer.hbs').default,
  requestActions: require('./request-actions.hbs').default,
  requestCreator: require('./request-creator.hbs').default,
  requestReducer: require('./request-reducer.hbs').default,
  requestThunk: require('./request-thunk.hbs').default,
  requestThunkTest: require('./request-thunk.test.hbs').default,
}
