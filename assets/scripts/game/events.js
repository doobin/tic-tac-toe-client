'use strict'

// player variables
const playerX = 'X'
const playerO = 'O'

// Variables
let currentTurn = 1
let numberOfTurns = 0

// msg variable
const setMessage = (message) => {
  $('#message-board').text(message)
}

// game board variable
const gameBoard = ['', '', '', '', '', '', '', '', '']
const winningCombo = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [6, 4, 2]]

// start round
const startRound = () => {
  setMessage(playerX + ' STARTS THE GAME')
}

// take turns
const playerTurn = (event) => {
  if ($(event.target).text() === '') {
    numberOfTurns += 1
    if (currentTurn === 1) {
      $(event.target).text(playerX)
      setMessage(playerO + "'s" + ' TURN')
      currentTurn += 1
    } else {
      $(event.target).text(playerO)
      setMessage(playerX + "'s" + ' TURN')
      currentTurn -= 1
    }
  } else {
    setMessage('PICK ANOTHER SQUARE')
  } console.log(numberOfTurns)
  console.log(event)
}

// start new game
const startNewGame = () => {
  numberOfTurns = 0
  currentTurn = 1
  $('td').text('')
  setMessage(playerX + ' STARTS THE GAME')
}

// const checkForWinner = () => {

// }

module.exports = {
  playerX,
  playerO,
  currentTurn,
  numberOfTurns,
  setMessage,
  gameBoard,
  winningCombo,
  startRound,
  playerTurn,
  startNewGame
}
