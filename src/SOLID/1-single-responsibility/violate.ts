class StepsTracker {
  currentSteps: number;

  constructor(currentSteps: number) {
    this.currentSteps = currentSteps;
  }

  trackSteps(stepsCount: number) {
    this.currentSteps += stepsCount;
    return this.currentSteps;
  }

  logMessage() {
    console.log('Notify to smart phone: ' + this.currentSteps);
  }
}

const stepTracker = new StepsTracker(0);
stepTracker.trackSteps(1000);
stepTracker.logMessage();

export {};
