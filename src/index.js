const $ = require('jquery')
const WordWatch = require('./WordWatch')
const api = require('./WordWatchAPI')
const Word = require('./WordWatch')

document.addEventListener("DOMContentLoaded", () => {

  $(() => {
    api.getTopWord()
    .then((response) => {
      const word = Object.keys(response.word)[0]
      const value = Object.values(response.word)[0]
      $('h3').replaceWith('<h3>Top word from Watch API:' + word + '(' + value + ')</h3>' )
    })
  })

  $('button').on('click', () => {
    const input = $('textarea').val()
    const words = input.split(" ")
    debugger
    Word.sendWord(words)
  })
})
