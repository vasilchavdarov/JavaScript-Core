const Sumator = require('./simulator');
let expect = require('chai').expect;

describe("Sumator Unit Tests", function () {
    let sumator;
    beforeEach(function () {
        sumator = new Sumator();
    });
    
    describe('check if functons exist', function () {
        it('Test 1',function () {
            expect(sumator.data !== undefined).to.be.equal(true);
        });

        it('Test 2',function () {
            expect(Sumator.prototype.hasOwnProperty('add')).to.be.equal(true);
        });

        it('Test 3',function () {
            expect(Sumator.prototype.hasOwnProperty('sumNums')).to.be.equal(true);
        });

        it('Test 4',function () {
            expect(Sumator.prototype.hasOwnProperty('removeByFilter')).to.be.equal(true);
        });

        it('Test 5',function () {
            expect(Sumator.prototype.hasOwnProperty('toString')).to.be.equal(true);
        });
    });

    it("Test 1", function () {
        expect(sumator.data.length).to.be.equal(0)
    });

    describe('toString', function () {
        it('test 1', function () {
            sumator.add(5);
            sumator.add(4);
            sumator.add(3);
            expect(sumator.toString()).to.be.equal('5, 4, 3');
        });

        it('test 2', function () {
            expect(sumator.toString()).to.be.equal('(empty)');
        })
    });

    describe('add func', function () {
        it('test 1', function () {
            sumator.add(5);
            sumator.add(4);
            sumator.add(3);
            expect(sumator.toString()).to.be.equal('5, 4, 3');
        });

        it('test 2', function () {
            sumator.add('gogo');
            sumator.add('ivan');
            sumator.add('pesho');
            expect(sumator.toString()).to.be.equal('gogo, ivan, pesho');
        });

        it('test 3', function () {
            sumator.add({});
            sumator.add({});
            expect(sumator.toString()).to.be.equal('[object Object], [object Object]');
        });

        it('test 4', function () {
            sumator.add(5);
            sumator.add('ivan');
            sumator.add({ name: 'gosho'});
            expect(sumator.toString()).to.be.equal('5, ivan, [object Object]');
        });
    });

    describe('sumNumbers', function () {
        it('test 1', function () {
            sumator.add(5);
            sumator.add(4);
            sumator.add(3);
            expect(sumator.sumNums()).to.be.equal(12);
        });

        it('test 2', function () {
            sumator.add('gosho');
            sumator.add('atanas');
            sumator.add('ivan');
            expect(sumator.sumNums()).to.be.equal(0);
        });

        it('test 3', function () {
            sumator.add({});
            sumator.add({name: 'ivan'});
            expect(sumator.sumNums()).to.be.equal(0);
        });

        it('test 4', function () {
            sumator.add(5);
            sumator.add('ivan');
            sumator.add(3);
            sumator.add({});
            expect(sumator.sumNums()).to.be.equal(8);
        });
    });

    describe('remove by filter', function () {
        it('test 1', function () {
            sumator.add(5);
            sumator.add(4);
            sumator.add(3);
            sumator.add(2);
            sumator.removeByFilter((x) => x % 2 !== 0);
            expect(sumator.toString()).to.be.equal('4, 2');
        });

        it('test 2', function () {
            sumator.add(5);
            sumator.add(4);
            sumator.add(3);
            sumator.add(2);
            sumator.removeByFilter((x) => x > 5);
            expect(sumator.toString()).to.be.equal('5, 4, 3, 2');
        });

        it('test 3', function () {
            sumator.add(5);
            sumator.add(4);
            sumator.add(3);
            sumator.add(2);
            expect(() => sumator.removeByFilter(undefined)).to.throw();
        });
    });

});



