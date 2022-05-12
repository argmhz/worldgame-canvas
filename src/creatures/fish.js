import Creature from './creature.js';
import * as Tiles from '../tiles/index.js';
import * as Creatures from '../creatures/index.js';
import Direction from '../direction.js';
import Idle from './states/Fish/Idle.js';


export default class Fish extends Creature {

    load() {
        this.maxHealth = 100;
        this.health = Math.floor(Math.random() * (this.maxHealth - (this.maxHealth * 0.45) + 1)) + (this.maxHealth * 0.45);
        this.speedDivider = 4;
        this.strength = 10;
        this.allowedTiles = [
            Tiles.Water
        ];
        this.eatables = [
            Creatures.Fish
        ];
        this.state = new Idle(this);
    }

    move(timestamp) {
        if (!(this.tile.getTileAt(this.direction) instanceof Tiles.Water)) {
            this.direction = Direction.random();
        }

        if (timestamp % 15 == 0)
            this.direction = Direction.random();

        super.move();
    }

    draw(ctx) {
        ctx.fillStyle = "gray";
        ctx.fillRect(this.position.x, this.position.y, 2, 2);

    }

}