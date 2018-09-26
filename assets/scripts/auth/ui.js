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
  $('#sign-up-form').addClass('hidden')
  $('#sign-in-form').addClass('hidden')
  $('#change-password-form').removeClass('hidden')
  $('#sign-out').removeClass('hidden')
}

const signInFailure = function () {
  $('#display-message').html('Sign In Failed... Try Again!!!')
  $('#display-message').css('color', 'red')
  $('#sign-in-form').trigger('reset')
}

const passwordChangeSuccess = function () {
  $('#display-message').html('Password Change Success')
  $('#display-message').css('color', 'green')
  $('#password-change-form').trigger('reset')
}

const passwordChangeFailure = function () {
  $('#display-message').html('Password Change Failed... Try Again!!!')
  $('#display-message').css('color', 'red')
  $('#password-change-form').trigger('reset')
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  passwordChangeSuccess,
  passwordChangeFailure
}
