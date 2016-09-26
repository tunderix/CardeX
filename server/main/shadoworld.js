var Room = require('colyseus').Room
    , StateHandler = require('./../handlers/StateHandler.js')

const UPDATE_RATE = 30

class ShadoWorld extends Room {

  constructor (options) {
    super(options)

    this.channel = options.channel
    this.players = new WeakMap()
    this.setState(new StateHandler( this.clock, options.map ))
    this.updateInterval = setInterval(this.tick.bind(this), 1000 / UPDATE_RATE)
  }

  update () {
    this.state.update()
  }

  requestJoin (options) {
    console.log("Request to join shadoworld!")

    //In here, handle the maximum amount of players in room! 
    return ( this.clients.length < 8 )
  }

  onJoin (client) {
    console.log(client.id, "joined shadoworld!")
    

    //Create a player!
    let player = this.state.createHero( {
      id: client.id,
      name: options.name
    } )
    this.players.set( client, player )
  }

  onMessage (client, data) {
    console.log(client.id, "sent message on shadoworld")
    player = this.players.get( client )

    //
    // Input in here! 
    //
    if (key == 'up') {
      player.moveTo ( value )
    } else if ( key == 'down' ) {
      player.moveTo ( value )
    } else if ( key == 'left' ) {
      player.moveTo ( value )
    } else if ( key == 'right' ) {
      player.moveTo ( value )
    }

  }

  onLeave (client) {
    console.log(client.id, "left shadoworld")
    this.state.messages.push(`${ client.id } left.`)
  }
}
module.exports = ShadoWorld
