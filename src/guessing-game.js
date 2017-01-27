class GuessingGame {
    constructor() {
      this.min = null;
      this.max = null;
    }

    setRange(min, max) {
      this.min = min;
      this.max = max;

      return this;
    }

    guess() {
      return Math.round((this.min + this.max) / 2);
    }

    lower() {
      this.max = this.guess();

      return this;
    }

    greater() {
      this.min = this.guess();

      return this;
    }
}

module.exports = GuessingGame;
