import 'mocha';
import { expect } from 'chai';
import Calculator from '../src/calculator';

describe("Calculator", () => {
    describe("Add", () => {
        it("Should return 3 when a = 1 and b = 2", () => {
            let calc = new Calculator();

            var result = calc.Add(1,2);

            expect(result).to.equal(3);
        });
    })
});
