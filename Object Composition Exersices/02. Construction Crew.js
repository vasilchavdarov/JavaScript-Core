function solve(obj) {
    if (obj.handsShaking){
        let needAlcohol = obj.weight * 0.1 * obj.experience;
        obj.bloodAlcoholLevel += needAlcohol;
        obj.handsShaking = false;

        return obj;
    } else {
        return obj;
    }
}

console.log(solve({ weight: 80,
    experience: 1,
    bloodAlcoholLevel: 0,
    handsShaking: true }));