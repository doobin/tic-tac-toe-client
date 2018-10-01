'use strict'

const store = require('../store.js')

const showAllGamesSuccess = (response) => {
  console.log(response)
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

const newGameSuccess = (data) => {
  console.log(data)
  console.log(store)
  store.game = data.game
}

const updateGameSuccess = (data) => {
  console.log(data)
  store.game = data.game
}

module.exports = {
  showAllGamesSuccess,
  showOneGameSuccess,
  newGameSuccess,
  updateGameSuccess
}
