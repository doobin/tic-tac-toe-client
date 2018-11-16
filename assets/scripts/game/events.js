'use strict'
// const api = require('./api.js')
const actionEvents = require('./actionevents.js')
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

// game board variable
const gameBoard = []

// start round funtion
const startRound = () => {
  numberOfTurns = 0
  currentTurn = 1
  winner = false
  $('td').text('')
  setMessage('X STARTS THE GAME')
}

// put data into game board array
const playerData = () => {
  // return selected element in a array
  const turn = gameBoard.slice.call($('.square'))
  // map returned element to array
  const result = turn.map((square) => {
    return square.innerHTML
  })
  return result
}

// take turns
const playerTurn = (event) => {
  // target id attribute and change from string to number
  const index = parseInt(event.target.getAttribute('id'))
  // set value to empty string
  let value = ''
  // check if winner
  if (winner !== false) {
    actionEvents.onNewGame()
    startRound()
    // check if element clicked has empty text
  } else if ($(event.target).text() === '') {
    // add number of turns each click
    numberOfTurns += 1
    // add x to game board
    if (currentTurn === 1) {
      $(event.target).text(playerX)
      // change value to 'x'
      value = 'x'
      setMessage(playerO + "'s" + ' TURN')
      currentTurn += 1
    } else {
      // add o to game board
      $(event.target).text(playerO)
      // change value to 'o'
      value = 'o'
      setMessage(playerX + "'s" + ' TURN')
      currentTurn -= 1
    }
    // create results variable by envoking playerTurn function
    const results = playerData()
    // envoke checkForWinner function with results array
    checkForWinner(results)
    // send data to required data to application
    actionEvents.onUpdateGame(index, value, winner)
  } else {
    // tells user to pick another square
    setMessage('PICK ANOTHER SQUARE')
    // check for tie
  } if (numberOfTurns > 8) {
    setMessage('Tie Game! Start New Game!')
  }
}

// check for winner funtion
const checkForWinner = (result) => {
  // loop through result array
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
      winner = true
      return true
    } else if (result[2] !== '' && result[2] === result[4] && result[4] === result[6]) {
      setMessage('The Winner is ' + result[2] + ', Start a New Game')
      winner = true
      return true
    }
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
  playerData,
  checkForWinner
}
