'use strict'

// Make player variables
const playerX = 'X'
const playerO = 'O'

let currentTurn = 1
let movesMade = 0

const squares = $('.square')

// Make game board variable
const gameBoard = []
// const winningCombo = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [6, 4, 2]]

// start round

const startRound = (event) => {
  movesMade += 1
  if (currentTurn === 1) {
    $(event.target).text(playerO)
    currentTurn += 1
  } else {
    $(event.target).text(playerX)
    currentTurn -= 1
  }
}

module.exports = {
  playerX,
  playerO,
  currentTurn,
  movesMade,
  gameBoard,
  startRound,
  squares
}
