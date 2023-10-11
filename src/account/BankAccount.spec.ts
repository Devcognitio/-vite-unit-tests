import { afterEach, describe, expect, test, vi } from "vitest";
import { BankAccount } from "./BanckAccount";
import { saveBalance } from './common.service';

vi.mock('./common.service', () => ({
    getBalance: vi.fn(),
    saveBalance: vi.fn()
}));

let saveBalanceMock = vi.mocked(saveBalance);

describe('BanckAccount', () => {

    describe('deposit ', () => {

        test('shoudl deposit new balance when amount is 1000', async () => {
            // arrange
            const bank = new BankAccount();

            // act 
            await bank.deposit(1000);

            // assert

            expect(saveBalanceMock).toBeCalledWith(1000)
            expect((bank as any).balance).toBe(1000);

        });

        test('give a initial ballance 1000 should not deposit new balance when ammount is 0 or minus than 0', async () => {
            // arrange 
            const bank = new BankAccount(1000);
            // act 

            await bank.deposit(-1000);
            // assert

            expect(saveBalanceMock).not.toBeCalledWith(1000)
            expect((bank as any).balance).toBe(1000);
        });

        afterEach(() => {
            vi.clearAllMocks();
        });

    });


    describe('withdraw ', () => {

        test(' should not withdraw  when amount is 0 or minus 0', async () => {

            // arrange 
            const bank = new BankAccount(1000);

            // act

            await bank.withdraw(-10000);

            // asser 

            expect(saveBalanceMock).not.toBeCalledWith(0)
            expect((bank as any).balance).toBe(1000);
        });

        test('give  inital balance 1000, should withdraw when ammount is more than 0', async () => {

            // arrange 
            const bank = new BankAccount(1000);

            // act

            await bank.withdraw(1000);

            // asser 

            expect(saveBalanceMock).toBeCalledWith(0)
            expect((bank as any).balance).toBe(0);

        });

        test('give initial balance 100 should not withdraw when amount is more than balance', async () => {

            // arrange 
            const bank = new BankAccount(100);

            // act

            await bank.withdraw(1000);

            // asser 

            expect(saveBalanceMock).not.toBeCalledWith(100)
            expect((bank as any).balance).toBe(100);

        });

        test('give initial balance 1000 should withdraw when amount is minus to balance', async () => {

            // arrange 
            const bank = new BankAccount(1000);

            // act

            await bank.withdraw(100);

            // asser 

            expect((bank as any).balance).toBe(900);
            expect(saveBalanceMock).toBeCalled()

        });

        afterEach(() => {
            vi.clearAllMocks();
        })
    });
});

