var Room = require('colyseus').Room

class ShadoWorld extends Room {

  constructor (options) {
    // call 'update' method each 50ms
    super(options)

    this.channel = options.channel;
    
    this.setPatchRate(1000 / 20);

    this.setState({
      messages: [ `Welcome to ${ options.channel } shadoworld!.` ]
    })
  }

  requestJoin (options) {
    console.log("Request to join shadoworld!")
    return options.channel === this.channel;
  }

  onJoin (client) {
    console.log(client.id, "joined shadoworld!")
    this.state.messages.push(`${ client.id } joined. Say hello!`)
  }

  onMessage (client, data) {
    console.log(client.id, "sent message on shadoworld")
    this.state.messages.push(`${ client.id }: ${ data }`)
  }

  onLeave (client) {
    console.log(client.id, "left shadoworld")
    this.state.messages.push(`${ client.id } left.`)
  }
}
module.exports = ShadoWorld