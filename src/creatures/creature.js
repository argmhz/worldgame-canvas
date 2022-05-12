import { inBounds } from '../utils.js';
import Direction from '../direction.js';
import * as States from "./states/fish/";
import * as Tiles from '../tiles/index.js';

export default class Creature {

    constructor(game, tile) {
        this.game = game;

        this.tile = tile;

        this.tile.add(this);

        let pos = this.tile.getCenterPosition();
        this.position = { x: pos.x, y: pos.y };
        this.width = 5;
        this.height = 5;

        this.direction = Direction.random();

        this.health = 400;
        this.maxHealth = 1000;
        this.speedDivider = 4;
        this.strength = 10;
        this.allowedTiles = [];
        this.eatables = [];
        this.load();
        this.target = null;

        this.state = null;
    }

    load() {}

    isHungry() {
        return this.health < (this.maxHealth * .5);
    }

    attack(entity) {
        entity.health -= Math.random() * this.strength;
    }

    seekMate() {}

    isDead() {
        return (this.health < 0);
    }

    move(timestamp) {
        this.position.x += this.direction.x;
        this.position.y += this.direction.y;

        if (!inBounds(this.tile, this)) {
            this.tile.getArea(1).forEach((nextTile, i) => {
                if (inBounds(this, nextTile)) {
                    this.tile.remove(this);
                    this.tile = nextTile;
                    this.tile.add(this);
                }
            });
        }
    }

    update(timestamp) {
        this.checkVitals(timestamp);

        this.state.update();

        // this.act();
    }

    draw(ctx) {}

    act() {
        // this[this.state]();
    }

    // States

    idle() {
        this.move();

        if (this.isHungry()) {
            this.state = 'hunt';
        }
    }

    hunt() {
        // this.tile.entities.forEach(entity => {
        //     if (entity !== this) {
        //         this.target = entity;
        //         if (entity.isDead()) {
        //             this.state = 'consume';
        //             return;
        //         } else {
        //             this.attack(entity);
        //         }
        //     }
        // });
        if (this.tile.entities.length === 0) {
            this.state = 'idle';
            this.target = null;
        }
        this.tile.getArea(1)
            //
            // this.tile.getArea(1).forEach((tile, i) => {
            //     tile.entities.forEach((entity) => {
            //         this.direction = { x: tile.x - this.tile.x, y: tile.y - this.tile.y };
            //     });
            // });

        this.move();
    }

    setDirection(direction) {
        this.direction = direction;
    }

    // Heal between 75-100% of target's health.
    consume() {
        let min = this.target.maxHealth * 0.75;
        let max = this.target.maxHealth * 1;

        let heal = Math.floor(Math.random() * (max - min + 1)) + min;

        this.health += heal;

        // Can't go over max health.
        if (this.health > this.maxHealth) {
            this.health = this.maxHealth;
        }

        this.state = 'idle';
        this.target = null;
    }

    dead() {
        this.tile.remove(this);
        this.game.remove(this);
    }

    checkVitals(timestamp) {
        if (timestamp % 100 == 0) {
            this.health--;
        }

        if (this.health < 0) {
            this.state = 'dead';
        }
    }

    seek() {

    }
}