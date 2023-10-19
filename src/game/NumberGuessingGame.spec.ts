import {describe, expect, test, vi} from 'vitest';
import { NumberGuessingGame } from './NumberGuessingGame';


describe('', ()=> {

    test('', ()=> {

        const game = new NumberGuessingGame();
        expect(game.tryGuessingNumber(11)).toBe('Congratulations! You guessed the number in 1 attempts.');
    });
    
});