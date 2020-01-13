/* eslint-disable global-require */
module.exports = {
  emptyReducer: require('./empty-reducer.hbs').default,
  requestActions: require('./request-actions.hbs').default,
  requestCreator: require('./request-creator.hbs').default,
  requestRedcuer: require('./request-reducer.hbs').default,
  requestThunk: require('./request-thunk.hbs').default,
}

