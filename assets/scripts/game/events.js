'use strict'

// player variables
const playerX = 'X'
const playerO = 'O'
let winner = false

// player turn variables
let currentTurn = 1
let numberOfTurns = 0

// msg function
const setMessage = (message) => {
  $('#message-board').text(message)
}

// game board variables
const gameBoard = []

// start round
const startRound = () => {
  numberOfTurns = 0
  currentTurn = 1
  winner = false
  $('td').text('')
  setMessage('X STARTS THE GAME')
}

// take turns
const playerTurn = (event) => {
  if (winner !== false) {
    startRound()
    // setMessage('Game Over! Start New Game!!!')
  } else if ($(event.target).text() === '') {
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
    // tells user to pick another square
    setMessage('PICK ANOTHER SQUARE')
    // check for tie
  } if (numberOfTurns > 8) {
    setMessage('Tie Game! Start New Game!')
  }
  const results = playerTurnData()
  console.log(checkForWinner(results))
}

// put data into game board array
const playerTurnData = () => {
  const turn = gameBoard.slice.call($('.square'))
  const result = turn.map((square) => {
    return square.innerText
  })
  console.log(result)
  return result
}

// check for winner
const checkForWinner = (result) => {
  for (let i = 0; i < result.length; i++) {
    if (result[0] !== '' && result[0] === result[1] && result[1] === result[2]) {
      setMessage('The Winner is ' + result[0])
      winner = true
      return true
    } else if (result[3] !== '' && result[3] === result[4] && result[4] === result[5]) {
      setMessage('The Winner is ' + result[3])
      winner = true
      return true
    } else if (result[6] !== '' && result[6] === result[7] && result[7] === result[8]) {
      setMessage('The Winner is ' + result[6])
      winner = true
      return true
    } else if (result[0] !== '' && result[0] === result[3] && result[3] === result[6]) {
      setMessage('The Winner is ' + result[0])
      winner = true
      return true
    } else if (result[1] !== '' && result[1] === result[4] && result[4] === result[7]) {
      setMessage('The Winner is ' + result[1])
      winner = true
      return true
    } else if (result[2] !== '' && result[2] === result[5] && result[5] === result[8]) {
      setMessage('The Winner is ' + result[2])
      winner = true
      return true
    } else if (result[0] !== '' && result[0] === result[4] && result[4] === result[8]) {
      setMessage('The Winner is ' + result[0])
      winner = true
      return true
    } else if (result[2] !== '' && result[2] === result[4] && result[4] === result[6]) {
      setMessage('The Winner is ' + result[2])
      winner = true
      return true
    }
    return false
  }
}

module.exports = {
  playerX,
  playerO,
  currentTurn,
  numberOfTurns,
  setMessage,
  startRound,
  playerTurn,
  playerTurnData,
  checkForWinner
}
