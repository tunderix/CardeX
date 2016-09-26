'use strict';
var Vec2 = require('./vec2');

var moveSpeed = 2.0

Vec2 move(args) {
    var moveX = args.x
    var moveY = args.y
    //this.pos = 
    return Vec2.new(args.x + moveX, args.y + moveY);
}

//module.exports = GameController;