import { getBalance, saveBalance } from "./common.service";


export class BankAccount {
  constructor(private  balance = 0) {
    this.balance = balance;

  }

  async loadBalance() {
    try {
      this.balance = await this.getBalance();
    } catch (e) {
      console.error('Error');
    }
  }

  async deposit(amount: number) {
    if (amount > 0) {
      this.balance += amount;
      await saveBalance(this.balance);
    }
  }

  async withdraw(amount: number) {
    if (amount > 0 && this.balance >= amount) {
      this.balance -= amount;
      await saveBalance(this.balance);
    }
  }

  async getBalance() {
    return await getBalance();
  }
}