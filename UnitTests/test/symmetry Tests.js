let expect = require('chai').expect;
let symmetry = require('../symmerty');

describe('Symmetry tests',function () {
    it('Should return false [1,2]',function () {
        expect(symmetry([1,2])).to.be.equal(false)
    });
    it('Should return true [1,2,3,2,1]',function () {
        expect(symmetry([5,'hi',{a:5},new Date(),{X:5},'hi',5])).to.be.equal(false)
    });
    it('Should return true []',function () {
        expect(symmetry([])).to.be.equal(true)
    });
    it('Should return true []',function () {
        expect(symmetry([5,'hi',{a:5},new Date(),{a:5},'hi',5])).to.be.equal(true)
    });
    it('Should return true [2]',function () {
        expect(symmetry([1])).to.be.equal(true)
    });
    it('Should return false [2], gae',function () {
        expect(symmetry([2,'gea'])).to.be.equal(false)
    });
    it('Should return false [2], gae',function () {
        expect(symmetry([{}, {}])).to.be.equal(true)
    });
    it('Should return false [2], gae',function () {
        expect(symmetry(1,2,2,1)).to.be.equal(false)
    });
    it('Should return false [2], gae',function () {
        expect(symmetry([-2,1,-2])).to.be.equal(true)
    });
    it('Should return false [2], gae',function () {
        expect(symmetry(1,2,2,1)).to.be.equal(false)
    });
    it('Should return false [2], gae',function () {
        expect(symmetry([-1,2,-1])).to.be.equal(true)
    });
    it('Should return false [2], gae',function () {
        expect(symmetry([-1,2,1])).to.be.equal(false)
    });
    it('Should return false [2], gae',function () {
        expect(symmetry([1,2,3,4,2,1])).to.be.equal(false)
    });
    it('Should return false [2], gae',function () {
        expect(symmetry([1,2,3,3,2,1])).to.be.equal(true)
    });
});