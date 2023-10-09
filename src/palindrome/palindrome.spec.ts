import { describe, expect, test } from "vitest";
import { isPalindrome } from "./palindrome";

describe('isPalindrome', () => {
    test('should recognize "aabbaa" as a palindrome', () => {

      // arrange
      const str = 'aabbaa';

      // act 
      const result  = isPalindrome(str);

      // assert 
      expect(result).toBeTruthy();

    });

    test('should not recognize "vite-test" as a palindrome ', () => {

       // arrange
       const str = 'vite-test';

       // act 
       const result  = isPalindrome(str);
 
       // assert 
       expect(result).toBeFalsy();
        
    });

    test('should not recognize  empty string like palindrome ', () => {
        

      // arrange
      const str = '';

      // act 
      const result  = isPalindrome(str);

      // assert 
      expect(result).toBeFalsy();
    });
  });

