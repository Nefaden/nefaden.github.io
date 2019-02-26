export default class BoActor {
    //constructeur par defaut
    constructor(name, image, HP, atq, def) {
        this._name = name;
        this._image = image;
        this._atq = atq;
        this._HP = HP;
        this._atq = atq;
        this._def = def;
    }


    get name() {
        return this._name;
    }

    set name(value) {
        this._name = value;
    }

    get image() {
        return this._image;
    }

    set image(value) {
        this._image = value;
    }

    get HP() {
        return this._HP;
    }

    set HP(value) {
        this._HP = value;
    }

    get atq() {
        return this._atq;
    }

    set atq(value) {
        this._atq = value;
    }

    get def() {
        return this._def;
    }

    set def(value) {
        this._def = value;
    }

    Fight(monstre) {
        while (1) {
            let damage_player = this._atq - monstre._def;
            if (damage_player > 0) {
                if (monstre._HP - damage_player < 0) {
                    return ("You win!");
                } else {
                    monstre._HP -= damage_player;
                }
            }
            let damage_monster = monstre._atq - this._def;
            if (damage_monster > 0) {
                if (this._HP - damage_monster < 0) {
                    return ("You died!");
                } else {
                    this._HP -= damage_monster;
                }
            }
            if (damage_player <= 0 && damage_monster <= 0) {
                return ("Draw!");
            }

        }
    }
}
