import MapManager from './mapmanager.js';
import CreatureManager from './creaturemanager.js';
import Creature from './creatures/creature.js';
import Fish from './creatures/fish.js';
export default class Game {

    constructor(canvas, ctx) {

        this.ctx = ctx;
        this.width = canvas.width;
        this.height = canvas.height;

        this.map = new MapManager(this);
        this.creatures = new CreatureManager(this);

        this.entities = [];

        this.map.initialize();
        this.creatures.initialize();
    }

    remove(entity) {
        this.entities = this.entities.filter((item) => item !== entity);
    }

    add(object) {
        this.entities.push(object);
    }

    renderInfo() {
        let creatures = this.entities.filter(entity => entity instanceof Creature);

        let hpSum = creatures.reduce((accumulator, creature) => {
            return accumulator + creature.health;
        }, 0);
        let hpLow = creatures.reduce((previous, current) => {
            return (previous < current.health) ? (previous > 0 ? previous : 0) : current.health;
        });
        let hpHigh = creatures.reduce((previous, current) => {
            return (previous > current.health) ? previous : current.health;
        });

        this.ctx.fillStyle = 'rgba(0,0,0,.3)';
        this.ctx.strokeStyle = "black";
        this.ctx.rect(10, 10, 150, 55);
        this.ctx.fill();
        this.ctx.stroke();
        this.ctx.fillStyle = "white";
        this.ctx.fillText("Animals: " + (creatures.length), 25, 25);
        this.ctx.fillText("Average HP: " + (parseInt(hpSum / (creatures.length))) + " (" + parseInt(hpLow) + "/" + parseInt(hpHigh) + ")", 25, 40);
        this.ctx.fillText("Entities: " + this.entities.length, 25, 55)
    }

    render(timestamp) {

        this.entities.forEach((entity, i) => {
            if (entity.update) entity.update(timestamp);
            entity.draw(this.ctx);
        });


        this.renderInfo();

    }

}