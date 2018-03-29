function problem(arr, batlleMartrix) {
    let result = {};
    let winsResult = {};
    let loseResult = {};
    for (let obj of arr) {
        let kingdom = obj['kingdom'];
        let general = obj['general'];
        let army = obj['army'];
        if(result.hasOwnProperty(kingdom)) {
            if(result[kingdom].hasOwnProperty(general)) {
                result[kingdom][general] += army;
            } else {
                result[kingdom][general] = army;
            }
        } else {
            result[kingdom] = {};
            result[kingdom][general] = army
        }
    }

    for (let row = 0; row < batlleMartrix.length; row++) {
        let attackingKingdom = batlleMartrix[row][0];
        let attackingGeneral = batlleMartrix[row][1];
        let defendingKingdom = batlleMartrix[row][2];
        let defendingGeneral = batlleMartrix[row][3];
        let attackingArmy = result[attackingKingdom][attackingGeneral];
        let defendingArmy = result[defendingKingdom][defendingGeneral];

        if (attackingKingdom === defendingKingdom){
            continue;
        }


        if (attackingArmy > defendingArmy){
            let atackArmyIncrease = attackingArmy * 0.10;
            let defendArmyDecrease = defendingArmy * 0.10;

            result[attackingKingdom][attackingGeneral] += atackArmyIncrease;
            result[defendingKingdom][defendingGeneral] -= defendArmyDecrease;

            if(winsResult.hasOwnProperty(attackingKingdom)) {
                if(winsResult[attackingKingdom].hasOwnProperty(attackingGeneral)) {
                    winsResult[attackingKingdom][attackingGeneral] += 1;
                } else {
                    winsResult[attackingKingdom][attackingGeneral] = 1;
                }
            } else {
                winsResult[attackingKingdom] = {};
                winsResult[attackingKingdom][attackingGeneral] = 1

            }

            if(loseResult.hasOwnProperty(defendingKingdom)) {
                if(loseResult[defendingKingdom].hasOwnProperty(defendingGeneral)) {
                    loseResult[defendingKingdom][defendingGeneral] += 1;
                } else {
                    loseResult[defendingKingdom][defendingGeneral] = 1;
                }
            } else {
                loseResult[defendingKingdom] = {};
                loseResult[defendingKingdom][defendingGeneral] = 1

            }




        } else if (attackingArmy < defendingArmy){
            let defendArmyIncrease = defendingArmy * 0.10;
            let atackArmyDecrease = attackingArmy * 0.10;

            result[attackingKingdom][attackingGeneral] -= atackArmyDecrease;
            result[defendingKingdom][defendingGeneral] += defendArmyIncrease;

            if(winsResult.hasOwnProperty(defendingKingdom)) {
                if(winsResult[defendingKingdom].hasOwnProperty(defendingGeneral)) {
                    winsResult[defendingKingdom][defendingGeneral] += 1;
                } else {
                    winsResult[defendingKingdom][defendingGeneral] = 1;
                }
            } else {
                winsResult[defendingKingdom] = {};
                winsResult[defendingKingdom][defendingGeneral] = 1

            }

            if(loseResult.hasOwnProperty(attackingKingdom)) {
                if(loseResult[attackingKingdom].hasOwnProperty(attackingGeneral)) {
                    loseResult[attackingKingdom][attackingGeneral] += 1;
                } else {
                    loseResult[attackingKingdom][attackingGeneral] = 1;
                }
            } else {
                loseResult[attackingKingdom] = {};
                loseResult[attackingKingdom][attackingGeneral] = 1

            }

        }

    }

    console.log(result)
}


problem([ { kingdom: "Maiden Way", general: "Merek", army: 5000 },
        { kingdom: "Stonegate", general: "Ulric", army: 4900 },
        { kingdom: "Stonegate", general: "Doran", army: 70000 },
        { kingdom: "YorkenShire", general: "Quinn", army: 0 },
        { kingdom: "YorkenShire", general: "Quinn", army: 2000 },
        { kingdom: "Maiden Way", general: "Berinon", army: 100000 } ],
    [ ["YorkenShire", "Quinn", "Stonegate", "Ulric"],
        ["Stonegate", "Ulric", "Stonegate", "Doran"],
        ["Stonegate", "Doran", "Maiden Way", "Merek"],
        ["Stonegate", "Ulric", "Maiden Way", "Merek"],
        ["Maiden Way", "Berinon", "Stonegate", "Ulric"] ]);