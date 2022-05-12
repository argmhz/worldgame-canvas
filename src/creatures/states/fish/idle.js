import BaseState from "../basestate.js";

export default class Idle extends BaseState {
    update(timestamp) {
        if (this.creature.isHungry()) {
            // this.creature.setState(new Hunt(this.creature));
        }
        this.creature.move(timestamp);
    }
}