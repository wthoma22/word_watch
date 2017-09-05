const $ = require('jquery')
const base_url = 'https://wordwatch-api.herokuapp.com'

class Api {
  constructor() {
  }

  static getTopWord() {
    return $.ajax({
      url: base_url + '/api/v1/top_word',
      type: 'GET',
      dataType: "json",
      error: (error) => {
      }
    }).done((post) => {
      return post;
    })
  }

  static postWord(word) {
    return $.ajax({
      url: base_url + '/api/v1/words',
      type: 'POST',
      dataType: "json",
      data: {word: {value: word} },
      error: (error) => {
      }
    }).done((post) => {
      return post
    })
  }

}

module.exports = Api
