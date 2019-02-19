class BoActor {
    constructor(name, image, PV, atq, def) {
        this._name = name;
        this._image = image;
        this._atq = atq;
        this._PV = PV;
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

    get PV() {
        return this._PV;
    }

    set PV(value) {
        this._PV = value;
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

    // Fight(combatant, monstre) {
    //
    //     return 0;
    // }
}
