'use strict'

const getFormFields = require('../../../lib/get-form-fields.js')
const api = require('./api.js')
const ui = require('./ui.js')
const store = require('../store.js')

const onNewGame = () => {
  // console.log('gamedata: ', event)
  event.preventDefault()
  api.newGame()
    .then(console.log)
    .catch(console.log)
}

const onShowAllGames = (event) => {
  console.log(event)
  event.preventDefault()
  api.getAllGames()
    .then(console.log)
    .catch(console.log)
}

const onShowOneGame = (event) => {
  event.preventDefault()
  const gameData = getFormFields(event.target)
  console.log(gameData)
  api.showOneGame(gameData)
    .then(console.log)
    .catch(console.log)
}

const onUpdateGame = (event) => {
  event.preventDefault()
  const gameData = store.game
  api.updateGame(gameData)
    .then(console.log)
    .catch(console.log)
}

module.exports = {
  onShowAllGames,
  onNewGame,
  onShowOneGame,
  onUpdateGame
}
