function printDeckOfCards(arr) {
    function validCards(card,suit) {
        const Valid_Cards = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
        const Valid_Suit = {
            'S':  '\u2660',
            'H':  '\u2665',
            'D':  '\u2666',
            'C':  '\u2663',
        };

        if (Valid_Cards.indexOf(card) < 0 || !Valid_Suit.hasOwnProperty(suit)){
            throw new Error('Invalid Card: ' + card + suit);
        }

        return {
            card: card,
            suit: suit,
            toString: () => {
                return card + Valid_Suit[suit];
            }
        }
    }

    for (let i = 0; i < arr.length; i++) {
        let card = arr[i].substring(0,arr[i].length - 1);
        let suit = arr[i][arr[i].length - 1];
        try {
            arr[i] = validCards(card, suit);
        } catch (e){
            console.log('Invalid card: ' + arr[i]);
            return
        }
    }
    console.log(arr.join(' '))

}

printDeckOfCards(['5S', '3D', 'QD', '1C']);