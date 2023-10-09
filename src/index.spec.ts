import { describe, expect, it, test } from "vitest";



const add = (a: number, b: number)=> a + b; 


describe('add', ()=> {
    it('should add  4 + 5  is 9', () => {
        // arrange
        const a = 4;
        const b = 5;


        // act 
        const result = add(a,b);

        // assert
        expect(result).toEqual(9);

    });
});

