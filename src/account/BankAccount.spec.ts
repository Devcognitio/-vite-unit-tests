import { describe, expect, test } from "vitest";
import { BankAccount } from "./BanckAccount";

describe('BanckAccount', ()=> {

    describe('deposit ', ()=> {

        test('shoudl deposit new balance when amount is 1000', ()=> {
            // arrange
            const bank = new BankAccount();
    
            // act 
            bank.deposit(1000);
            
            // assert
            const balance = bank.getBalance();
            expect(balance).toBe(1000);
    
        });
    
        test('give a initial ballance 1000 should not deposit new balance when ammount is 0 or minus than 0', ()=> {
            // arrange 
            const bank = new BankAccount(1000);
            // act 
    
            bank.deposit(-1000);
            // assert
    
            const balance = bank.getBalance();
            expect(balance).toBe(1000);
        });

    });


    describe('withdraw ', ()=> {

        test(' should not withdraw  when amount is 0 or minus 0', ()=> {

            // arrange 
            const bank = new  BankAccount(1000);
    
            // act
    
            bank.withdraw(-10000);
    
            // asser 
    
            const balance = bank.getBalance();
            expect(balance).toBe(1000);
        });
    
        test('give  inital balance 1000, should withdraw when ammount is more than 0', ()=> {
    
            // arrange 
            const bank = new  BankAccount(1000);
    
            // act
    
            bank.withdraw(1000);
    
            // asser 
    
            const balance = bank.getBalance();
            expect(balance).toBe(0);
            
        });
    
        test('give initial balance 100 should not withdraw when amount is more than balance', ()=> {
    
              // arrange 
              const bank = new  BankAccount(100);
    
              // act
      
              bank.withdraw(1000);
      
              // asser 
      
              const balance = bank.getBalance();
              expect(balance).toBe(100);
            
        });
    
        test('give initial balance 1000 should withdraw when amount is minus to balance', ()=> {
    
             // arrange 
             const bank = new  BankAccount(1000);
    
             // act
     
             bank.withdraw(100);
     
             // asser 
     
             const balance = bank.getBalance();
             expect(balance).toBe(900);
            
        });
    });
});

