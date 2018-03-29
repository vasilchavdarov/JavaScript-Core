function problem(strMatrix, strComands) {
    let matrix = [];
    let result = [];
    for (let i = 0; i < strMatrix.length; i++) {
        let row = strMatrix[i].split(' ').map(n => Number(n));
        matrix.push(row);
    }

    for (let i = 0; i < strComands.length; i++) {
        let args = strComands[i].split(' ');
        let command = args[0];
        let valueOrIndex = Number(args[1]);

        if (command === 'breeze'){
            // reda pada s 15
            for (let j = 0; j < 5; j++) {
                if (matrix[valueOrIndex][j] >= 15){
                    matrix[valueOrIndex][j] -= 15;
                }
            }
        } else if (command === 'gale'){
            // colonata pada s 20
            for (let j = 0; j < 5; j++) {
                if (matrix[j][valueOrIndex] >= 20){
                    matrix[j][valueOrIndex] -= 20;
                }
            }

        } else if (command === 'smog'){
            // vsqko se ovelichava s valuto
            for (let row = 0; row < 5; row++) {
                for (let col = 0; col < 5; col++) {
                    matrix[row][col] += valueOrIndex;
                }

            }
        }
    }

    for (let row = 0; row < matrix.length; row++) {
        for (let col = 0; col < matrix[row].length; col++) {
            if (matrix[row][col] >= 50){
                result.push(`[${row}-${col}]`);
            }
        }
    }

    if (result.length > 0) {
        console.log(`Polluted areas: ${result.join(', ')}`);
    } else {
        console.log('No polluted areas');
    }

}


problem([
        "5 7 2 14 4",
        "21 14 2 5 3",
        "3 16 7 42 12",
        "2 20 8 39 14",
        "7 34 1 10 24",
    ],
    ["breeze 1", "gale 2", "smog 35"]);