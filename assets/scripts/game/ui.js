'use strict'

const store = require('../store.js')

const showAllGamesSuccess = (response) => {
  $('#content').html('')
  response.games.forEach(game => {
    const gameHTML = (`
      <h4>Game ID: ${game.id}</h4>
      <p>Cell: ${game.cells}<p>
      <p>Over: ${game.over}</p>
      `)
    $('#content').append(gameHTML)
  })
}

const showAllGamesFailure = () => {
  $('#content').html('Show All Games Failed')
  $('#content').css('color', 'red')
}

const showOneGameSuccess = (response) => {
  const game = response.game
  const gameHTML = (`
    <h4>Game ID: ${game.id}</h4>
    <p>Cell: ${game.cells}<p>
    <p>Over: ${game.over}</p>
    `)
  $('#content').append(gameHTML)
  $('#show-one-game').trigger('reset')
}

const showOneGameFailure = () => {
  $('#content').html('Show One Games Failed')
  $('#content').css('color', 'red')
}

const newGameSuccess = (data) => {
  store.game = data.game
  $('#display-message').html('New Game Sucess')
  $('#display-message').css('color', 'green')
  $('#play-area').removeClass('hidden')
}

const newGameFailure = () => {
  $('#display-message').html('New Game Failed')
  $('#display-message').css('color', 'red')
}

const updateGameSuccess = (data) => {
  store.game = data.game
}

const updateGameFailure = () => {
  $('#display-message').html('Update Game Failed')
  $('#display-message').css('color', 'red')
}

module.exports = {
  showAllGamesSuccess,
  showAllGamesFailure,
  showOneGameSuccess,
  showOneGameFailure,
  newGameSuccess,
  newGameFailure,
  updateGameSuccess,
  updateGameFailure
}
