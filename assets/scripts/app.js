'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

const authEvents = require('./auth/events.js')
const gameEvents = require('./game/events.js')

// use require without a reference to ensure a file is bundled
// require('./example')

// Auth events
$(() => {
  $('#sign-up-form').on('submit', authEvents.onSignUp)
  $('#sign-in-form').on('submit', authEvents.onSignIn)
  $('#change-password-form').on('submit', authEvents.onChangePassword)
  $('#sign-out').on('click', authEvents.onSignOut)
})

// Game events
$(() => {
  $('#game-board').ready(gameEvents.startRound)
  $('.square').on('click', gameEvents.playerTurn)
  $('#start-new-game').on('click', gameEvents.startNewGame)
})
