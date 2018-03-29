function problem(arr) {
    let bitcoin = 0;
    let bitcounPrice = 11949.16;
    let firstBitcoinDay;
    let count = 1;
    let money = 0;

    for (let i = 0; i < arr.length; i++) {
        if (count == 3){
            let gold = arr[i] - (arr[i] * 0.30);
            money += gold * 67.51;
            count = 1;
        } else {
            money += arr[i] * 67.51;

            count++;
        }

        if (money >= bitcounPrice){
            if (bitcoin === 0){
                firstBitcoinDay = i + 1;
            }
            let buyBitcoin = Math.floor(money / bitcounPrice);
            bitcoin += buyBitcoin;
            money -= (buyBitcoin * bitcounPrice);
        }


    }

    console.log(`Bought bitcoins: ${bitcoin}`);
    if (bitcoin > 0){
        console.log(`Day of the first purchased bitcoin: ${firstBitcoinDay}`)
    }
    console.log(`Left money: ${money.toFixed(2)} lv.`)


}


problem([3124.15, 504.212, 2511.124]);