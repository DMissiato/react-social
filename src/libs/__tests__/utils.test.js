
import { greetings, doFetch } from '../utils';

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

it('check doFetch function', async () => {
    const result = await doFetch();
    expect(result).toEqual({
        userId: 1,
        id: 1,
        title: 'delectus aut autem',
        completed: false
    });
});