let expect = require('chai').expect;

function createCalculator() {
    let value = 0;
    return {
        add: function(num) { value += Number(num); },
        subtract: function(num) { value -= Number(num); },
        get: function() { return value; }
    }
}

describe('Add Subtract tests',function () {

    let calc;
    beforeEach(function () {
        calc = createCalculator();
    });

    it('',function () {
        expect(calc.get()).to.be.equal(0)
    });
    it('',function () {
        calc.add(2);
        calc.add(3);
        expect(calc.get()).to.be.equal(5)
    });
    it('',function () {
        calc.subtract(3);
        calc.subtract(2);
        expect(calc.get()).to.be.equal(-5)
    });
    it('',function () {
        calc.add(2);
        calc.add(-3);
        expect(calc.get()).to.be.equal(-1)
    });
    it('',function () {
        calc.add(2.2);
        calc.add(3.2);
        expect(calc.get()).to.be.equal(5.4)
    });
    it('',function () {
        calc.add(-2);
        calc.add(-3);
        expect(calc.get()).to.be.equal(-5)
    });
    it('',function () {
        calc.add('help');
        calc.add(3);
        expect(calc.get()).to.be.NaN
    });
    it('',function () {
        calc.subtract('gae');
        calc.add(3);
        expect(calc.get()).to.be.NaN
    });
    it('',function () {
        calc.add(10);
        calc.subtract(7);
        calc.add(-2);
        calc.subtract(-1);
        expect(calc.get()).to.be.equal(2)
    });
    it('',function () {
        calc.subtract([1,2]);
        calc.add(3);
        expect(calc.get()).to.be.NaN
    });

});