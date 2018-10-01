'use strict'

const config = require('../config.js')
const store = require('../store.js')

const newGame = () => {
  // console.log(data)
  return $.ajax({
    url: config.apiUrl + `/games`,
    method: 'POST',
    headers: {
      Authorization: `Token token=${store.user.token}`
    }
  })
}

const getAllGames = () => {
  console.log()
  return $.ajax({
    url: config.apiUrl + `/games`,
    method: 'GET',
    headers: {
      Authorization: `Token token=${store.user.token}`
    }
  })
}

const showOneGame = (gameData) => {
  console.log(gameData)
  const gameId = gameData.game.id
  return $.ajax({
    url: config.apiUrl + `/games/${gameId}`,
    method: 'GET',
    headers: {
      Authorization: `Token token=${store.user.token}`
    }
  })
}

const updateGame = (index, value, over) => {
  console.log(index)
  console.log(value)
  console.log(over)
  const gameId = store.game.id
  return $.ajax({
    url: config.apiUrl + `/games/${gameId}`,
    method: 'PATCH',
    headers: {
      Authorization: `Token token=${store.user.token}`
    },
    data: {
      'game': {
        'cell': {
          'index': index,
          'value': value
        },
        'over': true || false
      }
    }
  })
}

module.exports = {
  newGame,
  getAllGames,
  showOneGame,
  updateGame
}
