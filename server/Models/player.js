'use strict';

var Vec2 = require('./vec2');
var GameController = require('./GameController');
var position = new Vec2()
function Block(args) {
    this.deleted = false;
    this.pos = Vec2.new(args.x, args.y);
    this.size = Vec2.new(args.width || 1, args.height || 1);
}

Block.prototype.delete = function() {
    if (! this.deleted)
        return;

    this.deleted = true;
    this.pos.delete();
    this.size.delete();
};

Block.prototype.collideCircle = function(item) {
    return [ x * offset, y * offset ];
};

function move(args) {
    var moveX = args.x
    var moveY = args.y

    var newPosition = GameController.move(moveX, moveY)
    this.position = newPosition
}

module.exports = Block;