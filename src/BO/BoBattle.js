import BoPlayer from "./BoPlayer.js"
import BoMonster from "./BoMonster.js"

export default class BoBattle {

    constructor(player, combatant, lieu) {
        this._player = player;
        this._combatant = combatant;
        this._lieu = lieu;
    }


    get player() {
        return this._player;
    }

    set player(value) {
        this._player = value;
    }

    get combatant() {
        return this._combatant;
    }

    set combatant(value) {
        this._combatant = value;
    }

    get lieu() {
        return this._lieu;
    }

    set lieu(value) {
        this._lieu = value;
    }
}