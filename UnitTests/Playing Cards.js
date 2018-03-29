function solve(card,suit) {
    const Valid_Cards = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
    const Valid_Suit = {
      'S':  '\u2660',
      'H':  '\u2665',
      'D':  '\u2666',
      'C':  '\u2663',
    };

    if (Valid_Cards.indexOf(card) < 0 || !Valid_Suit.hasOwnProperty(suit)){
        throw new Error('Invalid Card!');
    }

    return {
        card: card,
        suit: suit,
        toString: () => {
            return card + Valid_Suit[suit];
        }
    }

}