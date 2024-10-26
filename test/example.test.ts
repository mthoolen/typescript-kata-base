import { stub } from '../src/index';


describe('stub', () => {
    it('should fail so we know our test works', () => {
        const result = stub();
        expect(result).toBe(true);
    });
});