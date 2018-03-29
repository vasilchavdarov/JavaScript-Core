let expect = require('chai').expect;

function rgbToHexColor(red, green, blue) {
    if (!Number.isInteger(red) || (red < 0) || (red > 255))
        return undefined; // Red value is invalid
    if (!Number.isInteger(green) || (green < 0) || (green > 255))
        return undefined; // Green value is invalid
    if (!Number.isInteger(blue) || (blue < 0) || (blue > 255))
        return undefined; // Blue value is invalid
    return "#" +
        ("0" + red.toString(16).toUpperCase()).slice(-2) +
        ("0" + green.toString(16).toUpperCase()).slice(-2) +
        ("0" + blue.toString(16).toUpperCase()).slice(-2);
}

describe('RGB tests',function () {
    it('', function () {
        expect(rgbToHexColor(0,0,0)).to.be.equal('#000000')
    });
    it('', function () {
        expect(rgbToHexColor(255,158,170)).to.be.equal('#FF9EAA')
    });
    it('', function () {
        expect(rgbToHexColor(12,13,14)).to.be.equal('#0C0D0E')
    });
    it('', function () {
        expect(rgbToHexColor(255,255,255)).to.be.equal('#FFFFFF')
    });
    it('', function () {
        expect(rgbToHexColor(-1,0,0)).to.be.undefined
    });
    it('', function () {
        expect(rgbToHexColor(0,-1,0)).to.be.undefined
    });
    it('', function () {
        expect(rgbToHexColor(0,0,-1)).to.be.undefined
    });
    it('', function () {
        expect(rgbToHexColor(256,0,0)).to.be.undefined
    });
    it('', function () {
        expect(rgbToHexColor(0,256,0)).to.be.undefined
    });
    it('', function () {
        expect(rgbToHexColor(0,0,256)).to.be.undefined
    });
    it('', function () {
        expect(rgbToHexColor(0,0,3.14)).to.be.undefined
    });
    it('', function () {
        expect(rgbToHexColor(0,3.14,0)).to.be.undefined
    });
    it('', function () {
        expect(rgbToHexColor(3.14,0,0)).to.be.undefined
    });

});