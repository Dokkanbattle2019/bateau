let missingAttack = 0


function Ship(length, beenTimes) {
    this.length = length;
    this.beenTimes = beenTimes;
    this.hit = (ship) => {
        ship.beenTimes += 1;
    }
    this.isSunk = (ship) => {
        if (ship.length === ship.beenTimes) {
            return true;
        }
        return false;
    }
};

function Gameboard() {
    this.placeShip = (x, y) => {
        new Ship(4, 0);
    }
    this.receiveAttack = (x, y, map) => {
        if ((x, y) in liste) {
            // à compléter
        } else {
            missingAttack += 1;
        }
    }
    this.win = () => {
        //if ()
    };

};

function Player() {

}

