const $ = require('jquery')
const WordWatch = require('./WordWatch')
const api = require('./WordWatchAPI')

document.addEventListener("DOMContentLoaded", () => {

  $(() => {
    api.getTopWord()
    .then((response) => {
      const word = Object.keys(response.word)[0]
      const value = Object.values(response.word)[0]
      $('h3').replaceWith('<h3>Top word from Watch API:' + word + '(' + value + ')</h3>' )
    })
  })
})
