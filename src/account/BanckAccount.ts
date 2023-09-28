

export class BankAccount {
    constructor(private balance = 0) {
      this.balance = balance;
    }
  
    deposit(amount: number) {
      if (amount > 0) {
        this.balance += amount;
      }
    }
  
    withdraw(amount: number) {
      if (amount > 0 && this.balance >= amount) {
        this.balance -= amount;
      }
    }
  
    getBalance() {
      return this.balance;
    }
  }