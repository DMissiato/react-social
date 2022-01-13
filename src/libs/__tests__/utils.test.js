
import { greetings } from '../utils';

describe('Greetings function', () => {
    it('test greetings() function', () => {
        const result = greetings('Salvatore');
        expect(result).toBe('Hello dear Salvatore');
    });

    it('test greetings() function', () => {
        const result = greetings();
        expect(result).toBe('Hello dear User');
    });
});