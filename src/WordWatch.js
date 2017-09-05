const $ = require('jquery')
const WordWatchAPI = require('./WordWatchAPI')
const base_url = 'https://wordwatch-api.herokuapp.com'
const api = require('./WordWatchAPI')

class Word {
  constructor() {
  }

  static sendWord(words) {
    words.forEach((word) => {
      const fixedWord = word.replace(/['"]+/g, '')
      api.postWord(fixedWord)
    })
  }
}

module.exports = Word
