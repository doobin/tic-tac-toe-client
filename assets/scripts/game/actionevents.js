'use strict'

const getFormFields = require('../../../lib/get-form-fields.js')
const api = require('./api.js')
const ui = require('./ui.js')

const onNewGame = () => {
  event.preventDefault()
  api.newGame()
    .then(ui.newGameSuccess)
    .catch(ui.newGameFailure)
}

const onShowAllGames = (event) => {
  event.preventDefault()
  api.getAllGames()
    .then(ui.showAllGamesSuccess)
    .catch(ui.showAllGamesFailure)
}

const onShowOneGame = (event) => {
  event.preventDefault()
  const gameData = getFormFields(event.target)
  api.showOneGame(gameData)
    .then(ui.showOneGameSuccess)
    .catch(ui.showOneGameFailure)
}

const onUpdateGame = (index, value, winner) => {
  event.preventDefault()
  api.updateGame(index, value, winner)
    .then(ui.updateGameSuccess)
    .catch(ui.updateGameFailure)
}

module.exports = {
  onShowAllGames,
  onNewGame,
  onShowOneGame,
  onUpdateGame
}
