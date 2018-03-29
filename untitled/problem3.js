function problem(text) {
    let match = /<svg>(.|\s*)+<\/svg>/.exec(text);

    if (match !== null){
        let firstCat = /<cat><text>(?:.|\s*)+\[((?:.|\s*)+)\]<\/text><\/cat>/.exec(match);
        if (firstCat !== null) {
            let labal = firstCat[1];
            let regex = /<cat>(?:<g><val>[0-9]+<\/val>[0-9]+<\/g>)+<\/cat>/g;
            let gMatch;
            let counti = 1;
            let isInvalid = false;
            while (gMatch = regex.exec(text)) {
                if (counti == 2) {
                    console.log('Invalid format');
                    isInvalid = true;
                    break;
                }
                counti++
            }

            let pattern = /<g>(<val>[0-9]+<\/val>[0-9]+)<\/g>/g;
            if (pattern === null){
                console.log('Invalid format')
            }
            let pattern2 = /([0-9]+)<\/val>([0-9]+)/g;

            let suvpadenie;
            let number;

            let raitings = 0;
            let counts = 0;

            let broi = 0;

            while (suvpadenie = pattern.exec(text)) {
                while (number = pattern2.exec(suvpadenie[1])) {
                    //console.log(number[1] + 'gesfges' + number[2])
                    raitings += Number(number[1]) * Number(number[2]);
                    counts += Number(number[2]);
                    broi++;
                }
            }
            if (broi < 0){
                console.log('Invalid format')
            }

            if (isInvalid) {

            } else {
                let result = raitings / counts;
                let rounded = roundTo((raitings / counts), 2);
                //console.log(result.toFixed(2))
                console.log(`${labal}: ${rounded}`)
            }
        } else {
            console.log('Invalid format')
        }

    } else {
        console.log('No survey found')
    }



    function roundTo(n, digits) {
        if (digits === undefined) {
            digits = 0;
        }

        let multiplicator = Math.pow(10, digits);
        n = parseFloat((n * multiplicator).toFixed(11));
        let test =(Math.round(n) / multiplicator);
        return +(test.toFixed(digits));
    }

}


problem('<p>Some random text</p><svg><cat><text>How do you rate our food? [Food - General]</text></cat><cat><g><val>1</val>0</g><g><val>2</val>1</g><g><val>3</val>3</g><g><val>4</val>10</g><g><val>5</val>7</g></cat></svg><p>Some more random text</p>');