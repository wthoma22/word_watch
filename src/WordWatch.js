const $ = require('jquery')
const WordWatchAPI = require('./WordWatchAPI')
const base_url = 'https://wordwatch-api.herokuapp.com'
const api = require('./WordWatchAPI')

class Word {
  constructor() {
  }

  static allFunctions(words) {
    Word.sendWord(words)
    Word.count(words)
    Word.updateField()
  }

  static sendWord(words) {
    words.forEach((word) => {
      let fixedWord = word.replace(/['"]+/g, '')
      api.postWord(fixedWord)
    })
  }

  static count(words) {
    const count = {}
    for (let i = 0; i < words.length; i++) {
      let num = words[i].toLowerCase()
      count[num] = count[num] ? count[num] + 1 : 1
    }
    Word.updateCount(count)
  }

  static updateCount(count) {
    const countKeys = Object.keys(count)
    const countedWords = []
    let i
    for (i in countKeys){
      countedWords.push([countKeys[i], count[countKeys[i]]]);
    }
    countedWords.forEach((word) => {
      Word.appendDom(word)
    })
  }

  static appendDom(word) {
    $('.word-count').append('<span style=font-size:' + word[1] + 'em>' + word[0] + '</span>')
  }

  static updateField() {
    $('textarea').val('')
  }
}

module.exports = Word
