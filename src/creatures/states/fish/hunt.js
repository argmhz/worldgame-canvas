import Fish from "../../fish";
import BaseState from "../basestate";

export default class Hunt extends BaseState {

    constructor(creature) {
        super.constructor(creature);

        this.target = null;
    }

    update(timestamp) {
        this.target = this.getTargetInTile();
        if (this.target) {
            // this.creature.setState(new Attack(this.creature, this.target));
        } else {
            this.findTargetDirection();
        }

        this.creature.move(timestamp);
    }

    getTargetInTile() {
        for (let index = 0; index < this.creature.tile.entities; index++) {
            if (entity !== this) {
                this.target = entity;
                if (entity.isDead()) {
                    this.state = 'consume';
                    return;
                } else {
                    this.attack(entity);
                }
            }

        }
    }

    findTargetDirection() {
        let tiles = this.creature.tile.getArea(1);
        for (let tileIndex = 0; tileIndex < tiles.length; tileIndex++) {
            let tileEntities = tiles[tileIndex].entities;
            for (let entityIndex = 0; entityIndex < tileEntities.length; entityIndex++) {
                if (this.creature.eatables.includes(tileEntities[entityIndex].constructor.name)) {

                }
            }

            entities.forEach((entity) => {
                this.direction = { x: tile.x - this.tile.x, y: tile.y - this.tile.y };
            });

        }

        this.creature.tile.getArea(1).forEach((tile, i) => {

        });
    }


}