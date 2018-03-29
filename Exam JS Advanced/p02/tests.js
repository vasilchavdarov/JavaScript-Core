const PaymentPackage = require('./Solotion');
let expect = require('chai').expect;

describe("PaymentPackage Tests", function() {
    let payment;
    beforeEach(function () {
       payment = new PaymentPackage('Consultation',800);
    });

    it("It should have initialized all methods", function() {
        expect(Object.getPrototypeOf(payment).hasOwnProperty('name')).to.be.equal(true)
        expect(Object.getPrototypeOf(payment).hasOwnProperty('value')).to.be.equal(true)
        expect(Object.getPrototypeOf(payment).hasOwnProperty('VAT')).to.be.equal(true)
        expect(Object.getPrototypeOf(payment).hasOwnProperty('active')).to.be.equal(true)
        expect(Object.getPrototypeOf(payment).hasOwnProperty('toString')).to.be.equal(true)
    });

    it("Good Payment", function() {
        expect(payment.toString()).to.be.equal('Package: Consultation\n' +
            '- Value (excl. VAT): 800\n' +
            '- Value (VAT 20%): 960')
    });


    it("Test 1", function() {
        payment.active = false;
        expect(payment.toString()).to.be.equal('Package: Consultation (inactive)\n' +
            '- Value (excl. VAT): 800\n' +
            '- Value (VAT 20%): 960')
    });

    it("Test 2", function() {
        payment.name = 'PHP';
        payment.value = 1500;
        payment.VAT = 19;
        expect(payment.toString()).to.be.equal('Package: PHP\n' +
            '- Value (excl. VAT): 1500\n' +
            '- Value (VAT 19%): 1785')
    });

    describe('Test Name',function () {
        it("Test 1", function() {
            expect(payment.name).to.be.equal('Consultation')
        });

        it("Test 2", function() {
            payment.name = 'Consultant';
            expect(payment.name).to.be.equal('Consultant')
        });

        it("Test 3", function() {
            expect(() => payment.name = '').to.throw()
        });

        it("Test 4", function() {
            expect(() => payment.name = 55).to.throw()
        });

        it("Test 5", function() {
            expect(() => payment.name = {name: 'ivan'}).to.throw()
        });

        it("Test 6", function() {
            expect(() => payment = new PaymentPackage('',28)).to.throw()
        });
    });

    describe('Test Value',function () {
        it("Test 1", function() {
            expect(payment.value).to.be.equal(800)
        });

        it("Test 2", function() {
            payment.value = 1000;
            expect(payment.value).to.be.equal(1000)
        });

        it("Test 3", function() {
            expect(() => payment.value = '200').to.throw()
        });

        it("Test 4", function() {
            expect(() => payment.value = []).to.throw()
        });

        it("Test 5", function() {
            expect(() => payment.value = -1).to.throw()
        });

        it("Test 6", function() {
            expect(() => payment.value = -5).to.throw()
        });

        it("Test 7", function() {
            expect(() => payment = new PaymentPackage('Ivan', '28')).to.throw()
        });

        it("Test 8", function() {
            payment.value = 0;
            expect(payment.value).to.be.equal(0)
        });

        it("Test 9", function() {
            payment.value = 9999999999999;
            expect(payment.value).to.be.equal(9999999999999)
        });



    });

    describe('Test VAT',function () {
        it("Test 1", function() {
            expect(payment.VAT).to.be.equal(20)
        });

        it("Test 2", function() {
            payment.VAT = 30;
            expect(payment.VAT).to.be.equal(30)
        });

        it("Test 3", function() {
            payment.VAT = 0;
            expect(payment.VAT).to.be.equal(0)
        });

        it("Test 4", function() {
            expect(() => payment.VAT = -5).to.throw()
        });

        it("Test 5", function() {
            expect(() => payment.VAT = -1).to.throw()
        });

        it("Test 6", function() {
            expect(() => payment.VAT = '25').to.throw()
        });

        it("Test 7", function() {
            expect(() => payment.VAT = {}).to.throw()
        });

        it("Test 8", function() {
            payment.VAT = 5000;
            expect(payment.VAT).to.be.equal(5000)
        });

        it("Test 9", function() {
            payment.VAT = 9999999999999;
            expect(payment.VAT).to.be.equal(9999999999999)
        });

    });

    describe('Test active',function () {
        it("Test 1", function() {
            expect(payment.active).to.be.equal(true)
        });

        it("Test 2", function() {
            payment.active = false;
            expect(payment.active).to.be.equal(false)
        });

        it("Test 3", function() {
            expect(() => payment.active = {}).to.throw()
        });

        it("Test 4", function() {
            expect(() => payment.active = 5).to.throw()
        });

        it("Test 5", function() {
            expect(() => payment.active = 'false').to.throw()
        });


    });

});