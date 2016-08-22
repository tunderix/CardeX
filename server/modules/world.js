'use strict';

function World(args) {
    this.deleted = false;
    this.pos = Vec2.new(args.x, args.y);
    this.size = Vec2.new(args.width || 1, args.height || 1);
}

World.prototype.delete = function() {
    if (! this.deleted)
        return;

    this.deleted = true;
    this.pos.delete();
    this.size.delete();
};

World.prototype.collideCircle = function(item) {
    return [ x * offset, y * offset ];
};

module.exports = World;