'use strict'

const getFormFields = require('../../../lib/get-form-fields.js')
const api = require('./api.js')
const ui = require('./ui.js')
// const store = require('../store.js')

const onNewGame = () => {
  // console.log(data)
  event.preventDefault()
  api.newGame()
    .then(ui.newGameSuccess)
    .catch(console.log)
}

const onShowAllGames = (event) => {
  console.log(event)
  event.preventDefault()
  api.getAllGames()
    .then(ui.showAllGamesSuccess)
    .catch(console.log)
}

const onShowOneGame = (event) => {
  event.preventDefault()
  const gameData = getFormFields(event.target)
  console.log(gameData)
  api.showOneGame(gameData)
    .then(ui.showOneGameSuccess)
    .catch(console.log)
}

const onUpdateGame = (index, value, winner) => {
  event.preventDefault()
  api.updateGame(index, value, winner)
    .then(ui.updateGameSuccess)
    .catch(console.log)
}

module.exports = {
  onShowAllGames,
  onNewGame,
  onShowOneGame,
  onUpdateGame
}
