function solve(obj) {
    function getEngine() {
        if (obj.power <= 90) {
            return {
                power: 90,
                volume: 1800
            }
        } else if (obj.power <= 120) {
            return {
                power: 120,
                volume: 2400
            }
        } else {
            return {
                power: 200,
                volume: 3500
            }

        }
    }
    function getWheelSize() {
        let roundedWheel = Math.floor(obj.wheelsize);
        if (roundedWheel % 2 == 0){
            roundedWheel -= 1;
        }

        let wheels = [];
        for (let i = 0; i < 4; i++) {
            wheels.push(roundedWheel);
        }

        return wheels;
    }


    let result = {
        model: obj.model,
        engine: getEngine(),
        carriage: {type: obj.carriage, color: obj.color},
        wheels: getWheelSize()
    };

    return result;
}

console.log(solve({
    model: 'VW Golf II',
    power: 90,
    color: 'blue',
    carriage: 'hatchback',
    wheelsize: 14
}));