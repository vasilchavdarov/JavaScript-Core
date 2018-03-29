let expect = require('chai').expect;

function sum(arr) {
    let sum = 0;
    for (num of arr)
        sum += Number(num);
    return sum;
}

describe('Sum tests',function () {
    it('Should return 3 [1,2]',function () {
        expect(sum([1,2])).to.be.equal(3)
    });
    it('Should return 0 []',function () {
        expect(sum([])).to.be.equal(0)
    });
    it('Should return 3 [1.5,2.5, -1]',function () {
        expect(sum([1.5,2.5, -1])).to.be.equal(3)
    });
    it('Should return 3 [3]',function () {
        expect(sum([3])).to.be.equal(3)
    });
    it('Should return NaN',function () {
        expect(sum('dawfaw')).to.be.NaN
    });
});