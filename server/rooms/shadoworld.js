var Room = require('colyseus').Room
  , ClockTimer = require('clock-timer.js')

const PATCH_RATE = 20
    , TURN_TIMEOUT = 10

class TicTacToe extends Room {

  constructor (options) {
    // call 'update' method each 50ms
    super(options, 1000 / PATCH_RATE)
  }

  requestJoin() {
    
  }

  onJoin () {
    
  }

  onMessage () {
    
  }

  checkWin () {

  }

  onLeave () {
    
  }

}
module.exports = TicTacToe
