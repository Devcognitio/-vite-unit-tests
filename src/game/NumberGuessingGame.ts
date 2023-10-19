export class NumberGuessingGame {
  private secretNumber: number;
  private attempts: number;
  private isFinished: boolean;

  constructor() {
    this.secretNumber = Math.floor(Math.random() * 100) + 1; // Random number between 1 and 100.
    this.attempts = 0;
    this.isFinished = false;
  }

  public tryGuessingNumber(number: number): string {
    if (this.isFinished) {
      return 'The game has ended. Restart to play again.';
    }

    this.attempts++;

    if (number === this.secretNumber) {
      this.isFinished = true;
      return `Congratulations! You guessed the number in ${this.attempts} attempts.`;
    } else if (number < this.secretNumber) {
      return 'The number is higher. Keep trying.';
    } else {
      return 'The number is lower. Keep trying.';
    }
  }

  public restartGame() {
    this.secretNumber = Math.floor(Math.random() * 100) + 1;
    this.attempts = 0;
    this.isFinished = false;
    return 'Game restarted. Guess a new number.';
  }
}