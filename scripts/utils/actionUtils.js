const addAction = (path, template, skipIfExists = false) => ({
  type: 'add',
  path,
  template,
  skipIfExists,
})

const modifyAction = (path, pattern, template) => ({
  type: 'modify',
  path,
  pattern,
  template,
})

module.exports = {
  addAction,
  modifyAction,
}

