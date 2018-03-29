function HungryProgrammer(meals, commands) {

    let mealsEaten = 0;
    for (let i = 0; i < commands.length; i++) {
        let splitcommand = commands[i].split(' ');

        if (splitcommand[0] === 'Serve'){
            if (meals.length > 0)
            console.log(`${meals.pop()} served!`);

        } else if (splitcommand[0] === 'Add'){
            if (splitcommand.length > 1){
                meals.unshift(splitcommand[1])
            }

        } else if (splitcommand[0] === 'Shift'){
            if (meals.length > 0) {
                if (splitcommand.length === 3) {
                    let index1 = splitcommand[1];
                    let index2 = splitcommand[2];

                    if (meals[index1] !== undefined && meals[index2] !== undefined) {
                        let temp = meals[index1];
                        meals[index1] = meals[index2];
                        meals[index2] = temp;
                    }
                }
            }

        } else if (splitcommand[0] === 'Eat'){
            if (meals.length > 0) {
                console.log(`${meals.shift()} eaten`);
                mealsEaten++;
            }


        } else if (splitcommand[0] === 'Consume') {
            if (meals.length > 0) {
                if (splitcommand.length === 3) {
                    let index1 = splitcommand[1];
                    let index2 = splitcommand[2];

                    if (meals[index1] !== undefined && meals[index2] !== undefined && index2 > index1) {
                        let portionsCount = index2 - index1 + 1;
                        mealsEaten += portionsCount;
                        meals.splice(index1, portionsCount);

                        console.log('Burp!');
                    }
                }
            }


        } else if (splitcommand[0] === 'End'){
            if (meals.length > 0) {
                console.log(`Meals left: ${meals.join(', ')}`);
                console.log(`Meals eaten: ${mealsEaten}`)
            } else {
                console.log('The food is gone');
                console.log(`Meals eaten: ${mealsEaten}`)
            }
            break;
        }
    }
}


HungryProgrammer(['bacon', 'veggies', 'chicken'],
['Consume 2 9',
'Eat',
'End',]);


