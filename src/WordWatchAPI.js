const $ = require('jquery')
const base_url = 'https://wordwatch-api.herokuapp.com'

class Api {
  constructor() {
  }

  static getTopWord() {
    return $.ajax({
      url: base_url + '/top_word',
      type: 'GET',
      dataType: "json",
      error: (error) => {
      }
    }).done((post) => {
      return post;
    })
  }
}

module.exports = Api
