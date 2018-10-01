'use strict'
// const api = require('./api.js')
const actionEvents = require('./actionEvents.js')
// player variables
const playerX = 'x'
const playerO = 'o'

let winner

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
  const index = parseInt(event.target.getAttribute('id'))
  let value = ''
  if (winner !== false) {
    actionEvents.onNewGame()
    startRound()
  } else
  if ($(event.target).text() === '') {
    numberOfTurns += 1
    if (currentTurn === 1) {
      $(event.target).text(playerX)
      value = 'x'
      setMessage(playerO + "'s" + ' TURN')
      currentTurn += 1
    } else {
      $(event.target).text(playerO)
      value = 'o'
      setMessage(playerX + "'s" + ' TURN')
      currentTurn -= 1
    }
    console.log(winner)
    const results = playerTurnData()
    checkForWinner(results)
    actionEvents.onUpdateGame(index, value, winner)
  } else {
    // tells user to pick another square
    setMessage('PICK ANOTHER SQUARE')
    // check for tie
  } if (numberOfTurns > 8) {
    setMessage('Tie Game! Start New Game!')
    actionEvents.onNewGame()
    // startRound()
  }
  // const results = playerTurnData()
  // console.log(checkForWinner(results))
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

// const winnerFunction = (winnerValue) => {
//   winner = winnerValue
//   actionEvents.onUpdateGame(index, value, winner)
// }

// check for winner
const checkForWinner = (result) => {
  for (let i = 0; i < result.length; i++) {
    if (result[0] !== '' && result[0] === result[1] && result[1] === result[2]) {
      setMessage('The Winner is ' + result[0] + ', Start a New Game')
      winner = true
      return true
    } else if (result[3] !== '' && result[3] === result[4] && result[4] === result[5]) {
      setMessage('The Winner is ' + result[3] + ', Start a New Game')
      winner = true
      return true
    } else if (result[6] !== '' && result[6] === result[7] && result[7] === result[8]) {
      setMessage('The Winner is ' + result[6] + ', Start a New Game')
      winner = true
      return true
    } else if (result[0] !== '' && result[0] === result[3] && result[3] === result[6]) {
      setMessage('The Winner is ' + result[0] + ', Start a New Game')
      winner = true
      return true
    } else if (result[1] !== '' && result[1] === result[4] && result[4] === result[7]) {
      setMessage('The Winner is ' + result[1] + ', Start a New Game')
      winner = true
      return true
    } else if (result[2] !== '' && result[2] === result[5] && result[5] === result[8]) {
      setMessage('The Winner is ' + result[2] + ', Start a New Game')
      winner = true
      return true
    } else if (result[0] !== '' && result[0] === result[4] && result[4] === result[8]) {
      setMessage('The Winner is ' + result[0] + ', Start a New Game')
      console.log('1st' + winner)
      // winnerFunction(true)
      winner = true
      console.log('2nd' + winner)
      return true
    } else if (result[2] !== '' && result[2] === result[4] && result[4] === result[6]) {
      setMessage('The Winner is ' + result[2] + ', Start a New Game')
      winner = true
      return true
    }
    // return false
  }
}

// const gameData = (index, result, winner) => {
//   const data = {
//     'game': {
//       'cell': {
//         'index': index, // $(event.target.id),
//         'value': result // $(event.target.innerText)
//       },
//       'over': winner
//     }
//   }
// }

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
