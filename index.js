'use strict'
const ParseEntities = require('@datagica/parse-entities')
const data = require('./database.json')
class Parser extends ParseEntities {
  constructor(opts) {
    super({
      fields: ['label', 'aliases'],
      data,
      croppingLength: 200,
      delimiters: [
        "centres? d'int(?:é|e)r(?:ê|e)ts?",
        "autres int(?:é|e)r(?:ê|e)ts",
        "hobbies",
        "loisirs",
        "divers",
        "autres activit(?:é|e)s",
        "int(?:é|e)r(?:ê|e)ts? et activit(?:é|e)s?",
        "activit(?:é|e)s? et int(?:é|e)rets?",
        "activit(?:é|e)s extra-professionnelles",
        "interests",
        "intérêts",
        "extracurricular",
        "my interests?",
        "my activities",
        "activities? and interests?",
        "interests? and activities?",
        "additional informations?",
        "other activities",
        "informations? compl(?:é|e)mentaires?",
        "comp(?:é|e)tences? compl(?:é|e)mentaires?",
      ]
    })
  }
}
const singletonInstance = new Parser()
const singletonMethod = function() { return singletonInstance.parse.apply(singletonInstance, arguments) }
module.exports = singletonMethod
module.exports.default = singletonMethod
module.exports.database = data
module.exports.parser = singletonInstance
module.exports.Parser = Parser