'use strict'

const store = require('../store.js')

const signUpSuccess = function () {
  $('#display-message').html('Sign Up Success')
  $('#display-message').css('color', 'green')
  $('#sign-up-form').trigger('reset')
}

const signUpFailure = function () {
  $('#display-message').html('Sign Up Failed... Try Again!!!')
  $('#display-message').css('color', 'red')
  $('#sign-up-form').trigger('reset')
}

const signInSuccess = function (response) {
  $('#display-message').html('Sign In Success')
  $('#display-message').css('color', 'green')
  $('#sign-in-form').trigger('reset')
  store.user = response.user
  $('#sign-up-form').hide('hidden_1')
  $('#sign-in-form').hide('hidden_1')
  $('#change-password-form').removeClass('hidden')
  $('#sign-out').removeClass('hidden')
  $('#start-new-game').removeClass('hidden')
  $('#message-board').removeClass('hidden')
  $('#show-all-games').removeClass('hidden')
  $('#show-one-game').removeClass('hidden')
}

const signInFailure = function () {
  $('#display-message').html('Sign In Failed... Try Again!!!')
  $('#display-message').css('color', 'red')
  $('#sign-in-form').trigger('reset')
}

const passwordChangeSuccess = function () {
  $('#display-message').html('Password Change Success')
  $('#display-message').css('color', 'green')
  $('#change-password-form').trigger('reset')
}

const passwordChangeFailure = function () {
  $('#display-message').html('Password Change Failed... Try Again!!!')
  $('#display-message').css('color', 'red')
  $('#change-password-form').trigger('reset')
}

const signOutSuccess = function () {
  $('#display-message').html('Sign Out Success')
  $('#display-message').css('color', 'green')
  $('#sign-up-form').show()
  $('#sign-in-form').show()
  $('#start-new-game').addClass('hidden')
  $('#message-board').addClass('hidden')
  $('#play-area').addClass('hidden')
  $('#show-all-games').addClass('hidden')
  $('#show-one-game').addClass('hidden')
  $('#change-password-form').addClass('hidden')
  $('#sign-out').addClass('hidden')
  $('#content').empty()
}

const signOutFailure = function () {
  $('#display-message').html('Sign Out Failed... Try Again!!!')
  $('#display-message').css('color', 'red')
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  passwordChangeSuccess,
  passwordChangeFailure,
  signOutSuccess,
  signOutFailure
}
