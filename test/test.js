var expect = require('chai').expect;
// Example test
describe('Array', function() {
    describe('#indexOf()', function() {
        it('should return -1 when the value is not present', function() {
            expect([1,2,3].indexOf(4)).to.equal(-1);
        });
    });
});