'use strict'

const store = require('../store.js')

const newGameSuccess = (data) => {
  console.log(data)
  console.log(store)
  store.game = data.game
}

const updateGameSuccess = () => {

}

module.exports = {
  newGameSuccess,
  updateGameSuccess
}
