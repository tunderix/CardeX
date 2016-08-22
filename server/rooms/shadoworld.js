var Room = require('colyseus').Room
var World = require('../modules/world');
var Block = require('../modules/block');
var Runner = require('../modules/tank');
var Vec2 = require('../modules/vec2');
var Pickable = require('../modules/pickable');
var State = require('../modules/state');

class ShadoWorld extends Room {

  constructor (options) {
    // call 'update' method each 50ms
    super(options, 1000 / PATCH_RATE)

    this.world = new World({
      width: 1000,
      height: 1000
    });

    this.level = [
        [ 13.5, 2, 1, 4 ],
        [ 13.5, 12, 1, 2 ]
    ]
    this.pickables = [{
      x: 22.2,
      y: 22.2,
      type: 'flag',
      picked: 0
    }, {
      x: 22.2,
      y: 22.2,
      type: 'weapon',
      picked: 0
    }, {
      x: 22.2,
      y: 22.2,
      type: 'shield',
      picked: 0
    }];


    for(var i = 0; i < this.level.length; i++) {
      this.world.add('block', new Block({
        x: this.level[i][0],
        y: this.level[i][1],
        width: this.level[i][2],
        height: this.level[i][3]
      }));
    }

    this.updateInterval = setInterval(this.update.bind(this), 1000 / 20)
    this.setState(new State(this.world))
  }

  requestJoin() {
    // only 2 players are allowed to play
    return this.clients.length < 20;
  }

  onJoin () {
    client.playerIndex = Object.keys(this.state.players).length
    this.state.players[ client.id ] = client.playerIndex
  }

  onLeave () {
    
  }

  createMap () {
    
  }

  checkCaptureFlag () {

  }

}
module.exports = ShadoWorld